let headerBtn = document.querySelector('header nav #nav-btn')
let contactBanner = document.querySelector('section#contact-banner')

// header
headerBtn.addEventListener('click', (e) => {
    let contactBanner = document.querySelector('section#contact-banner')
    contactBanner.classList.add('active')
})

let contactBannerBtn = document.querySelector('#contact-banner .banner-header button')


   window.onresize=()=>{
        if (window.matchMedia("( max-width: 1021px )").matches) {
         contactBanner.classList.remove('active')   
        }else {
            contactBanner.classList.remove('active')
        }
    }
    contactBannerBtn.addEventListener('click', (e) => {
        contactBanner.classList.toggle('active')
    })
    // header
    //hero
  
    let txt = document.querySelector('#hero .txt')
   let str = txt.innerText
   function nameChange(){
    setInterval(()=>{
        txt.innerText = str.replace('Designer','Video Editor') 
    },13000)    
    setInterval(()=>{
           
         
        txt.innerText = str.replace('Designer','Developer') 
    },9000)
       setInterval(()=>{
           
         
        txt.innerText = str.replace('Designer','UI,Designer') 
    },5000)
    


   }
   nameChange()

// skill

function skillbar(){
let skill =document.querySelectorAll('.skills')
let w=0;
skill.forEach(Element=>{
    let intrvl=setInterval(()=>{
        w++
        if(w>90){
            clearInterval(intrvl)
        }else{

            Element.style.width=w+'%'
        }
},50)



})


}
window.onload=()=>{

    skillbar()
}