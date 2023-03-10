

function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading';
    var element1 = document.getElementById('paragraph');
    element1.firstChild.nodeValue = 'New Paragraph';
   };
   document.addEventListener('DOMContentLoaded', myLoadFunction);
   