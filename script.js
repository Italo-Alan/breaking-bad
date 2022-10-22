/*SCROLL HOME*/
const home = document.querySelector('.home');
home.addEventListener('click', () =>{
    window.scrollTo(0,0);
});

/*PROGRESS BAR*/
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

/*SINOPSE*/
const text_title = document.querySelectorAll('.text_title');
const content = document.querySelectorAll('.content_text');

for(let i = 0; i < text_title.length; i++){
    text_title[i].addEventListener('click', () => {
        if(text_title[i].classList.contains('fechar')){
            text_title[i].classList.toggle('fechar');
            content[i].classList.toggle('ativar');
        }else{
            text_title[i].classList.add('fechar');
            content[i].classList.add('ativar');
        }
    })
}

/* NAVBAR*/
let links = document.querySelectorAll('.mobile_a');
let nav = document.querySelector('nav');
let mobileNav = document.querySelector('.mobile_nav');
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle("is-active"); 
    for(let i = 0; i < links.length; i++){
        links[i].onclick = () =>{
            mobileNav.classList.remove('active');
            hamburger.classList.remove('is-active');
        } 
    }
    
    if(hamburger.classList.contains('is-active')){
        mobileNav.classList.add("active");
    }else{
        mobileNav.classList.remove("active");
    }
})

/*CONSUMO API*/
let response;
const characters = document.querySelector('.characters');
const url = "https://www.breakingbadapi.com/api/characters";

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
            `;
            document.querySelector('.p-cards').innerHTML += html;
        }
    })
    .catch (function(error){
        console.error(`Failed retrieving information ${error}`);
    });