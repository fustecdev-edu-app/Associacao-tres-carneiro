// importa conexão com o banco Firestore
import { db } from "./banco.js";


// importa funções necessárias do Firestore
import {
  collection,   // acessar collection
  addDoc,       // criar documento
  getDocs,      // buscar documentos
  doc,          // acessar documento específico
  updateDoc,    // atualizar documento
  deleteDoc     // excluir documento
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";



// pega o formulário da página
const form = document.getElementById("formNoticia");


// pega o container da lista
const lista = document.getElementById("listaNoticias");



/* =====================================
   FUNÇÃO PARA LISTAR NOTÍCIAS
===================================== */
async function listarNoticias(){

  // limpa lista antes de recarregar
  lista.innerHTML = "";

  // busca todas as notícias no Firestore
  const querySnapshot = await getDocs(collection(db,"noticias"));

  // percorre cada documento encontrado
  querySnapshot.forEach((docu)=>{

    // pega os dados da notícia
    const noticia = docu.data();

    // cria um bloco HTML
    const div = document.createElement("div");

    div.innerHTML = `

      <h3>${noticia.titulo}</h3>

      <p>${noticia.descricao}</p>
      <img src="${noticia.imagens + ".png"}" width="200"><br>
      <small>Data do evento ${noticia.data}</small>

      <br><br>

     

      <hr>

    `;

    // adiciona na tela
    lista.appendChild(div);

  });

}

listarNoticias()

