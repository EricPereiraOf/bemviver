import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ===== PRODUTOS =====
const formProduto = document.getElementById("formProduto");
const listaProdutos = document.getElementById("listaAdminProdutos");


formProduto.addEventListener("submit", async (e) => {
e.preventDefault();


await addDoc(collection(db, "produtos"), {
nome: document.getElementById("titulo").value,
preco: document.getElementById("preco").value,
link: document.getElementById("link").value
});


formProduto.reset();
carregarAdminProdutos();
});


async function carregarAdminProdutos() {
listaProdutos.innerHTML = "";
const snap = await getDocs(collection(db, "produtos"));


snap.forEach(doc => {
const p = doc.data();
listaProdutos.innerHTML += `<div class="card"><h3>${p.nome}</h3><p>${p.preco}</p><p>${p.link}</p></div>`;
});
}
carregarAdminProdutos();


// ===== FEEDBACK =====
const listaAdminFeedback = document.getElementById("listaAdminFeedback");


async function carregarFeedbackAdmin() {
const snap = await getDocs(collection(db, "feedback"));


listaAdminFeedback.innerHTML = "";
snap.forEach(doc => {
const f = doc.data();
listaAdminFeedback.innerHTML += `<div class="card"><b>${f.nome}</b><p>${f.msg}</p></div>`;
});
}
carregarFeedbackAdmin();