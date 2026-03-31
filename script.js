

async function getAnime(){
    const idAleatorio = Math.floor(Math.random() * 35) + 1;
    let response = await fetch(`https://dragonball-api.com/api/characters/${idAleatorio}`);
    let data = await response.json();
    console.log(data);
    document.getElementById("anime").innerHTML = `
    <img width="150px" src="${data.image}" />
    <h2>${data.name}</h2>
    <h5>${data.race} - ${data.gender}</h5>
    <h5>Base KI: "${data.ki}"</h5>
    <h5>Total KI: "${data.maxKi}"</h5>
    <h5>Afiliação: "${data.affiliation }"</h5>
    <h5>Planeta Origem: "${data.originPlanet.name}"</h5>
    

    
   `;
}


function shareContent(){
  let url = document.getElementById("content-url").value;
  let title = document.getElementById("content-title").value;
  let text = document.getElementById("content-text").value;
  let data = {url: url, text: text, title: title};
  console.log(data);
  
  if (!navigator.share){
    alert("Your device does not support the Web Share API. Try on an iPhone or Android phone!");
  }
  else {
    navigator.share(data);
  }
} 

// Primeiro, verificamos se o navegador suporta Service Workers
if ('serviceWorker' in navigator) {
    // Quando a página carregar, tentamos registrar o script
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registro => {
                console.log('Sucesso! Service Worker registrado com escopo: ', registro.scope);
            })
            .catch(erro => {
                console.log('Ops! Falha ao registrar o Service Worker: ', erro);
            });
    });
}