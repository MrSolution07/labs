// Author: CE BULABULA
// date: 15.03.2023
// gradedlab 4
function Wordscount()
{
    var sentence = document.getElementById("sentence-input").value;
    var remove_specialChar = sentence.replace(/[^\w\s]/g, "");
    console.log(remove_specialChar);
    var my_sentence_split = remove_specialChar.split(/\s+/).filter(Boolean);
    var counter = my_sentence_split.length;
    document.getElementById("display-count").innerHTML = counter;
    
    var new_sentence = "";
    for(let i= 0 ; i<my_sentence_split.length;i++)
    {
        var spanElement = document.createElement("span");
        spanElement.className = "new_span";
        spanElement.textContent = my_sentence_split[i];
        new_sentence += spanElement.outerHTML + " ";
    }

    console.log(new_sentence)
    document.getElementById("new-sentence").innerHTML = new_sentence; 
}