// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// function generateHashtag(str) {
//     if (str.trim() === "") return false; // check if input is an empty string
//     const words = str.split(" ");
//     const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     const hashtag = "#" + capitalizedWords.join("");
//     if (hashtag.length > 140) return false; // check if hashtag is longer than 140 chars
//     return hashtag;
//   }
  
function generateHashtag (str) {
    if(str.trim() === "") return false
    const result = str.split(" ")
    for(let i = 0; i < result.length; i++) {
        if(result[i] !== ''){
          result[i] = result[i][0].toUpperCase() + result[i].substr(1)
        }
    }
    const hashtag = "#" + result.join("")
    return hashtag.length > 140 ? false:hashtag
}