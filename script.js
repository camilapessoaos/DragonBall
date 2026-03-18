

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