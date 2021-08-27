let btn = document.getElementById('btn_burger_menu')

btn.addEventListener('click', () => {
    console.log('i')
    let nav = document.getElementById('main_nav_bar')
    if(nav.classList.contains('open')){
        nav.classList.remove('open')
        nav.classList.add('close')
    }else{
        nav.classList.remove('close')
        nav.classList.add('open')
    }
})