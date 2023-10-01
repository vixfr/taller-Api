const pokeNumber = document.getElementById("number");
const pokeButton = document.getElementById("btn");
const pokeContainer = document.getElementById("container");
const URL = "https://pokeapi.co/api/v2/pokemon/"


pokeButton.addEventListener("click",function(){
    if(pokeNumber.value>=1 && pokeNumber.value<=151){
        fetch(URL + pokeNumber.value)
        .then(response => response.json())
        .then(json => { console.log(json)
            pokeContainer.innerHTML =
            `<p>Nombre: ${json.name.toUpperCase()}</p>
            <div><img src="${json.sprites.front_default}"></div>
            <p>Altura: ${json.height/10} m</p>
            <p>Peso: ${json.weight/10} kg</p>
            <p>Tipo principal: ${json.types[0].type.name.toUpperCase()}</p>
            `
        })
        .catch(error => console.log(error))
    }
    else{
        alert("Por favor ingrese un valor entre 1 y 151")
    }
    
});