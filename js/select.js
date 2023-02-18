/*
var nameRegex=/^[A-Z][a-z]{3,8}$/;
var nameTest='Alaa';
console.log(nameRegex.test(nameTest));
*/


/*
var h2s=document.querySelectorAll('.test');
for(var i=0;i<h2s.length;i++){
    h2s[i].addEventListener('click',function(e){
     
        alert(e.target.innerHTML);
    })
}
*/


/*
var img=document.querySelector('img')
document.addEventListener('mousemove',function(e){
    img.style.left=e.clientX;
    img.style.top=e.clientY;
})

*/


/*
var body=document.querySelector('body');
body.addEventListener('click',function(e){
    var r=(Math.round(Math.random()*100));
    var g=(Math.round(Math.random()*100));
    var b=(Math.round(Math.random()*100));
    body.style.backgroundColor=`rgb(${r},${g},${b})`
})
*/


var imgs=Array.from(document.querySelectorAll('.item img')) ;
var fixedBox=document.querySelector('.light-container');
var lightboxitem=document.querySelector('.light-item');
var closeIcon=document.getElementById('close');
var nextIcon=document.getElementById('next');
var prevIcon=document.getElementById('prev');
var currentIndex=0;


for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener('click',function(e){ 
      openSlider(e);
    })
}

function openSlider(e){
    currentIndex=imgs.indexOf(e.target);
    fixedBox.style.display='flex';
    var currentSrc=e.target.src;  
    lightboxitem.style.backgroundImage=`URL(${currentSrc})`;
}



closeIcon.addEventListener('click',closeSlider);
function closeSlider(){
    fixedBox.style.display='none'; 
}


nextIcon.addEventListener('click',getNextSlide);
function getNextSlide(){
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0;
    }
    currentSrc= imgs[currentIndex].src;
    lightboxitem.style.backgroundImage=`URL(${currentSrc})`;
} 

prevIcon.addEventListener('click',getPrevSlide);
function getPrevSlide(){
    currentIndex--;
    if(currentIndex<=0){
        currentIndex=imgs.length-1;
    }
    currentSrc= imgs[currentIndex].src;
    lightboxitem.style.backgroundImage=`URL(${currentSrc})`;
} 






document.addEventListener('keydown',function(e){
    if(e.key=='ArrowRight'){
        getNextSlide();
    }
    else if(e.key=='ArrowLeft'){
        getPrevSlide();
    }
     else if(e.key=='Escape'){
        closeSlider();
     }
})