// importa a função que inicializa o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

// importa o Firestore (banco de dados)
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// importa o Storage (usado para imagens)
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";


// configuração do seu projeto Firebase
// aqui ficam as chaves que conectam seu site ao projeto
const firebaseConfig = {
// chave da API do Firebase
  apiKey: "AIzaSyC71NjY7v9AklCrLK8QdjCV_u1gg6TqEPE",
// domínio do projeto
  authDomain: "associacao-moradores.firebaseapp.com",
// ID do projeto
  projectId: "associacao-moradores",
// bucket de armazenamento de arquivos
  storageBucket: "associacao-moradores.firebasestorage.app",
// ID do serviço de mensagens
  messagingSenderId: "519997360626",
// ID do aplicativo
  appId: "1:519997360626:web:dd0c2c35b75e613e0f436b"


};


// inicializa o Firebase usando as configurações acima
const app = initializeApp(firebaseConfig);


// cria a conexão com o banco Firestore
const db = getFirestore(app);


// cria a conexão com o sistema de armazenamento de arquivos
const storage = getStorage(app);


// exporta as conexões para poder usar em outros arquivos
export { db, storage };