const home = document.querySelector('.home');
home.addEventListener('click', () =>{
    window.scrollTo(0,0)
});
let response;
const characters = document.querySelector('.characters')
const url = "https://www.breakingbadapi.com/api/characters"

//     let results = await res.json();

//     results.map(result =>{
        // const htmlString = `<img src="${result.img}" class="img">
        // <div class="info-display">
        // `

//     })
// }

const bad = response;
fetch(url)
    .then(function (response){
        return response.json();
    })
    .then(function (response){
        console.log(response)
        for(let c = 0; c <= response.length; c++){
            console.log(response[c].name, response[c].birthday, response[c].status)
        }

    })
    .catch (function(err){
        console.error(`Failed retrieving information ${err}`);
    });

    console.log(bad[0].name)