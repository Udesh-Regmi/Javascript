const buttons= document.querySelector('.buttons');
const btns= document.querySelectorAll('.btn');
const body = document.querySelector('body');


btns.forEach(btn => {
    btn.addEventListener('click', (event)=>{
        body.className = btn.className.split(' ')[1];
    })
})