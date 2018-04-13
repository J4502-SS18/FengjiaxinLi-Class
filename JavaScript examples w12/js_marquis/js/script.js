var newLink = document. createElement("a");

var allParagraphs = document.getElementByTagName('p');

var firstParagraph = allParagraphs[0];

function revealCopy(e) {
var i = 0; i <allParagraphs. length; i++) {
  allParagraphs[i].style.display="none";
}

newLink. setAttribute("href","#");

newLink. innerHTML="Reader More";

firstParagraph.appenChild(newLink);

newLink.style.display= "inline-block";

newLink.style.marginLeft= "0.5em";
