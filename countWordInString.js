// problem: 11
//count occurrences of a word in a string

function wordCount(sentence, checkWord){
    const sentenceArr = sentence.split(" ")
    let count = 0;
    
    for(const word of sentenceArr){
        if(word===checkWord){
            count++;
        }
    }
    return count;
}

console.log(wordCount("hello world hello programming hello", "hello"));
