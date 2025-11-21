import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const form = document.getElementById("formFeedback");
const lista = document.getElementById("listaFeedback");


form.addEventListener("submit", async (e) => {
e.preventDefault();


await addDoc(collection(db, "feedback"), {
nome: document.getElementById("nome").value,
msg: document.getElementById("mensagem").value
});


form.reset();
carregarFeedback();
});


async function carregarFeedback() {
lista.innerHTML = "";
const snap = await getDocs(collection(db, "feedback"));


snap.forEach(doc => {
const f = doc.data();
lista.innerHTML += `<div class="card"><b>${f.nome}</b><p>${f.msg}</p></div>`;
});
}
carregarFeedback();