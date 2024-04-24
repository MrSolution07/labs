// Author: CE BULABULA
// date: 03.04.2024
// gradedlab 5

function Wordscount()
{
    var sentence = document.getElementById("sentence").value;
    var remove_specialChar = sentence.replace(/[^\w\s]/g, "");
    // console.log(remove_specialChar);
    var my_sentence_split = remove_specialChar.split(/\s+/).filter(Boolean);
    var counter = my_sentence_split.length;
    // i had a problem i didn't know where to display the count 
    // so i used the sent-count div and the count div cause 
    // the question wasn't clear enough
    document.getElementById("count").innerHTML = counter;
    document.getElementById("sent-count").value = counter;
    
    var new_sentence = "";
    for(let i= 0 ; i<my_sentence_split.length;i++)
    {
        var spanElement = document.createElement("span");
        spanElement.className = "new_span";
        spanElement.textContent = my_sentence_split[i];
        new_sentence += spanElement.outerHTML + " ";
    }

    // console.log(new_sentence)
    document.getElementById("words").innerHTML = new_sentence; 
}