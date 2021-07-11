
const nomeDoPersonagem1 = document.getElementById("nomeDoPersonagem1");
const img1 = document.querySelector("img#personagem1");
const especie1 = document.getElementById("especie1");
const status1 = document.getElementById("status1");
const gender1 = document.getElementById("gender1");

const nomeDoPersonagem2 = document.getElementById("nomeDoPersonagem2");
const img2 = document.querySelector("img#personagem2");
const especie2 = document.getElementById("especie2");
const status2 = document.getElementById("status2");
const gender2 = document.getElementById("gender2");

const nomeDoPersonagem3 = document.getElementById("nomeDoPersonagem3");
const img3 = document.querySelector("img#personagem3");
const especie3 = document.getElementById("especie3");
const status3 = document.getElementById("status3");
const gender3 = document.getElementById("gender3");

const nomeDoPersonagem4 = document.getElementById("nomeDoPersonagem4");
const img4 = document.querySelector("img#personagem4");
const especie4 = document.getElementById("especie4");
const status4 = document.getElementById("status4");
const gender4 = document.getElementById("gender4");

const numeroMaximoDePersonagens = 671;

gerarNumeroAleatorio = () => {
  return Math.floor(Math.random() * numeroMaximoDePersonagens);
};
chamarPersonagem1 = () => {
  const numeroAleatorio = gerarNumeroAleatorio();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      img1.src = data.image;  
      img1.alt = "Imagem do personagem: " + data.name;   nomeDoPersonagem1.innerHTML = data.name;
      especie1.innerHTML += data.species;
      status1.innerHTML += data.status;
      gender1.innerHTML += data.gender; 
      });
};

chamarPersonagem2 = () => {
  const numeroAleatorio = gerarNumeroAleatorio();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      img2.src = data.image;  
      img2.alt = "Imagem do personagem: " + data.name;   nomeDoPersonagem2.innerHTML = data.name;
      especie2.innerHTML += data.species;
      status2.innerHTML += data.status;
      gender2.innerHTML += data.gender; 
      });
};
chamarPersonagem3 = () => {
  const numeroAleatorio = gerarNumeroAleatorio();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      img3.src = data.image;  
      img3.alt = "Imagem do personagem: " + data.name;   nomeDoPersonagem3.innerHTML = data.name;
      especie3.innerHTML += data.species;
      status3.innerHTML += data.status;
      gender3.innerHTML += data.gender; 
      });
};
chamarPersonagem4 = () => {
  const numeroAleatorio = gerarNumeroAleatorio();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      img4.src = data.image;  
      img4.alt = "Imagem do personagem: " + data.name;   nomeDoPersonagem4.innerHTML = data.name;
      especie4.innerHTML += data.species;
      status4.innerHTML += data.status;
      gender4.innerHTML += data.gender; 
      });
};
atualizaPage = () => {
  chamarPersonagem1();
  chamarPersonagem2();
  chamarPersonagem3();
  chamarPersonagem4();
}
document.onload = atualizaPage();
