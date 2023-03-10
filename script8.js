function myClickFunction(){
    var element1=document.getElementById('myinput');
    var div = document.getElementById('result');
    div.firstChild.nodeValue=element1.value;
    //alert(element1.value);
};

function myLoadFunction(){
    var element = document.getElementById('mybutton');
    element.addEventListener('click',myClickFunction);
};
document.addEventListener('DOMContentLoaded',myLoadFunction);