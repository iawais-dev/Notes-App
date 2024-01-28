const btn = document.querySelector('#btn')
const input = document.querySelector('.input')
let delbtn = document.getElementsByClassName('dust')


btn.addEventListener('click', ()=>{
    let ptag = document.createElement('p')
    let img = document.createElement('img')
    img.src = 'imgs/dustbin.png'   
    img.className= 'dust'
    img.style.display='flex'
 
    ptag.className = 'inpbox'
    ptag.setAttribute('contenteditable','true')
    input.appendChild(ptag)
    input.appendChild(img)
    img.onclick = function(){
        if(ptag.style.display = 'flex',
        img.style.display = 'flex'){
            ptag.style.display = 'none'
            img.style.display = 'none'
            update()
          }  
        // else{
        // ptag.style.display = 'flex'
        // img.style.display = 'flex'
        //   }
         
    }
})

