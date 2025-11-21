import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


async function carregarProdutos() {
const lista = document.getElementById("listaProdutos");
lista.innerHTML = "Carregando...";


const produtosRef = collection(db, "produtos");
const snap = await getDocs(produtosRef);


lista.innerHTML = "";


snap.forEach(doc => {
const p = doc.data();
lista.innerHTML += `
<div class="card">
<h3>${p.nome}</h3>
<p>Preço: R$ ${p.preco}</p>
<a class="btn" href="${p.link}" target="_blank">Comprar</a>
</div>`;
});
}
carregarProdutos();