/**
 * 
 * @param {string} text 
 */
exports.covertTextToWords = function(text){
    text = String(text); // making sure the input is a string
    var wordsList = text.split(' '); 
    // wordsList = wordsList.reduce((acc,val)=>[...acc, ...val.split(/(\n)/g)],[]).filter(value=>value); // to keep the delimiter and remove empty strings
    return wordsList
}
/**
 * 
 * @param {string} text - text to be justified
 * @returns {string} - the justified text
 */
exports.justify = (text) => {
    const MAX_LENGTH = 80;
    var words = this.covertTextToWords(text);
    const result = [];
    let i = 0;
    let wordsLength = words.length;
    while (i<wordsLength) {
        let j = i + 1;
        let lineLength = words[i].length;
        if (words[j] == '\n') {
            let diff = MAX_LENGTH - lineLength;
            let numberOfWords = j - i;
            if (numberOfWords == 1 || j >= wordsLength) result.push(leftJustify(words, diff, i, j))
            else result.push(middleJustify(words, diff, i, j));
            lineLength = words[j+1].length

        }
        while (j<wordsLength && (lineLength + words[j].length + (j - i - 1) < MAX_LENGTH)) {
            lineLength += words[j].length;
            j+=1; 
        }
        let diff = MAX_LENGTH - lineLength;
        let numberOfWords = j - i;
        if (numberOfWords == 1 || j >= wordsLength) result.push(leftJustify(words, diff, i, j))
        else result.push(middleJustify(words, diff, i, j));

        i = j;
    }
    return result.join('\n');
}
// helper function generate white spaces with length k
function getPadding(k) {
    var s = '';
    for (var i = 0; i < k; i++) {
        s += ' ';
    }
    return s;
}

const middleJustify = (words, diff, i, j) => {
    let spacesNeeded = j - i - 1;
    let spaces = Math.floor(diff /spacesNeeded);
    let extraSpaces = diff % spacesNeeded;
    
    let result = words[i];
    for(let k = i+1; k < j; k++) {
        let spacesToApply = spaces + (extraSpaces > 0 ? 1:0);
        extraSpaces -=1;
        result += getPadding(spacesToApply) + words[k];
    }
    return result;
}

const leftJustify = (words, diff, i, j) => {
    let spacesToRight = diff - (j - i - 1);

    let result = words[i];
    for (let k = i + 1; k < j; k++) {
        result += " " + words[k];
    }
    result += getPadding(spacesToRight);

    return result;
}




