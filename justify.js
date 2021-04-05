

/**
 * 
 * @param {string} text 
 * @returns {string[]} - array of text's words
 */
exports.generator = function*(text){
    for (const word of text.split(' ')) {
        yield word;
    }
}
/**
 * 
 * @param {string} text - text to be justified
 * @returns {string} - the justified text
 */
exports.justify = (text) => {
    text = String(text); // making sure the input is a string


    return text;
}