function myClickFunction(){
    var element1=document.getElementById('myinput');
    alert(element1.value);
};

function myLoadFunction(){
    var element = document.getElementById('mybutton');
    element.addEventListener('click',myClickFunction);
};
document.addEventListener('DOMContentLoaded',myLoadFunction);