burger = document.querySelector(".burger");
items = document.querySelector(".items");
menclose = document.querySelector('.men-close');



burger.addEventListener('click',()=>{
    items.classList.toggle('none')
})

menclose.addEventListener('click',()=>{
    items.classList.add('none')
})