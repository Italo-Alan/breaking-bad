const home = document.querySelector('.home');
home.addEventListener('click', () =>{
    window.scrollTo(0,0)
});
let response;
let bad;
let html = "";
const characters = document.querySelector('.characters')
const url = "https://www.breakingbadapi.com/api/characters"

//     let results = await res.json();

//     results.map(result =>{
        // const htmlString = `<img src="${result.img}" class="img">
        // <div class="info-display">
        // `

//     })
// }

fetch(url)
    .then(function (response){
        return response.json();
    })
    .then(function (response){
        console.log(response)
        for(let i = 0; i <= response.length; i++){
            var img = document.createElement("IMG");
            img.src = response[i].img;
            img.style.width = "200px";
            document.querySelector('.imageCharacter').appendChild(img);
            document.querySelector('.infoCharacter').textContent += response[i].name;
        }

            /*
                response[i].name
                response[i].occupation
                response[i].portrayed
                response[i].status
            */

        //Funciona bem
        // console.log(response)
        // for(let c = 0; c <= response.length; c++){
        //     console.log(response[c].name, response[c].birthday, response[c].status)
        // }
    })
    .catch (function(err){
        console.error(`Failed retrieving information ${err}`);
    });