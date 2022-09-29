const home = document.querySelector('.home');
home.addEventListener('click', () =>{
    window.scrollTo(0,0)
});

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}


let response;
const characters = document.querySelector('.characters')
const url = "https://www.breakingbadapi.com/api/characters"

fetch(url)
    .then(function (response){
        return response.json();
    })
    .then(function (bad){
        let html ="";
        for(let i = 0; i <= bad.length; i++){
            html = `
            <div class="p-card">
                <div class="p-card_image">
                <img src="${bad[i].img}" class="p-card_content img2">
                </div>
                <div class="p-card_content">
                    <span class="character-name" style="width: 100%">Nome: ${bad[i].name}</span>
                    <span class="character-portrayed" style="width: 100%">Ator/Atriz: ${bad[i].portrayed}</span>
                    <span class="character-status" style="width: 85%">Status: ${bad[i].status}</span>
                </div>
                </div>
            `
            document.querySelector('.p-cards').innerHTML += html;
        }
    })
    .catch (function(error){
        console.error(`Failed retrieving information ${error}`);
    });