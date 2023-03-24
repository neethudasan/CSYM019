var timer=0;


function myInterval(){

    var element=document.getElementById('circle');
    var positionleft = element.offsetLeft;
    element.style.left = positionleft - 10 + 'px';
};

function myIntervalright(){

    var element=document.getElementById('circle');
    var positionleft = element.offsetLeft;
    element.style.left = positionleft + 10 + 'px';
 
};
function myIntervalup(){

    var element=document.getElementById('circle');
    var positiontop = element.offsetTop;
    element.style.top = positiontop - 10 + 'px';
 
};
function myIntervaldown(){

    var element=document.getElementById('circle');
    var positiontop = element.offsetTop;
    element.style.top = positiontop + 10 + 'px';
 
};



function myKeyDown(event){
console.log(event.keyCode);

    clearInterval(timer);

if(event.keyCode==37){
    
  timer = setInterval(myInterval,1000);    
}
if(event.keyCode==39){
    
    timer = setInterval(myIntervalright,1000);     
 }
 if(event.keyCode==38){
    
    timer = setInterval(myIntervalup,1000);
     
 }
 if(event.keyCode==40){
    
    timer = setInterval(myIntervaldown,1000);
     
 }
     
 };



document.addEventListener('keydown',myKeyDown);
