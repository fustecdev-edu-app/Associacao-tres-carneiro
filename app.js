import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyC71NjY7v9AklCrLK8QdjCV_u1gg6TqEPE",
  authDomain: "associacao-moradores.firebaseapp.com",
  projectId: "associacao-moradores",
  storageBucket: "associacao-moradores.firebasestorage.app",
  messagingSenderId: "519997360626",
  appId: "1:519997360626:web:dd0c2c35b75e613e0f436b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const form = document.getElementById("formMorador");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const casa = document.getElementById("casa").value;
  const telefone = document.getElementById("telefone").value;

  await addDoc(collection(db, "moradores"), {
    nome: nome,
    casa: casa,
    telefone: telefone
  });

  alert("Morador cadastrado!");

  form.reset();
});