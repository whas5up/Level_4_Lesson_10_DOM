//Gets a random madlib and displays it
function display() {
    var madLibsArray = [
        `I was busy coding a website when I heard a <span>${adjective}</span> noise. <br />
        I looked outside and saw a <span>${noun}</span> <span>${adverb}</span> <span>${verb}</span> down the street.`,

        `I went on a picnic. I was eating my sandwich when a <span>${adjective}</span> <span>${noun}</span> crawled up my shorts. <br />I screamed <span>${adverb}</span>! I'll never <span>${verb}</span> again.`,

        `There was an old <span>${noun}</span> who lived across the street. His name was <span>${adjective}</span>. <br />He always <span>${adverb}</span> <span>${verb}</span> in his yard.`
    ]

    let madLibsMaxIndex = madLibsArray.length - 1;
    let randomLib = Math.round(Math.random() * madLibsMaxIndex);
    let madLib = madLibsArray[randomLib];

    //Exercise 6
    //Get the p tag by its id
    //Change the inner HTML of the p tag to the madlib (var)
   


    //Bonus exercise: Show the inserted words with an underline
    //Get all the span tags by tagname using querySelectorAll()
    //Use the forEach() method to loop through the tags
    //Use setAttribute() method to apply class 'highlight'
   


}