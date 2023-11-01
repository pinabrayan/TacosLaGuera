const navSlide= ()=> {
    const burger= document.querySelector('#burger')
    const nav = document.querySelector ('#navList')

    document.onclick = function(e){
        if(e.target.id !== 'navList' && e.target.id !== 'burger')
        {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle')
        }
    }

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')
        burger.classList.toggle('toggle')
    })
}

navSlide();
