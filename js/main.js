//get dom elements
const menubar = document.querySelector('#menubars');
console.log(menubar);
const burgmenu = document.querySelector('.hamb');
const close = document.querySelector('.close');
const nav = document.querySelector('#main-nav');
const main = document.querySelector('main');

//nav display function
function handleClick(e){
    if(!burgmenu.classList.contains('hidden')){
     burgmenu.classList.add('hidden');
     close.classList.remove('hidden');
     nav.classList.remove('hidden');
     main.classList.add('hidden');

    }
    else {
        burgmenu.classList.remove('hidden');
        close.classList.add('hidden');
        nav.classList.add('hidden');
        main.classList.remove('hidden');

    }






}
//listen for click
menubar.addEventListener('click',handleClick);




