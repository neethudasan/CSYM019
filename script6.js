

    function updateH1(){
        var element = document.getElementById('pageheading');
        element.firstChild.nodeValue = 'New Heading';

    };
    function updateParagraph(){
        var element1 = document.getElementById('paragraph');
    element1.firstChild.nodeValue = 'New Paragraph';


    };
function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.addEventListener('click',updateH1);

    var element1 = document.getElementById('paragraph');
    element1.addEventListener('click',updateParagraph);
    
   };
   document.addEventListener('DOMContentLoaded', myLoadFunction);
   