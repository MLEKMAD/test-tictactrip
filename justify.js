

/**
 * 
 * @param {string} text 
 * @returns { { value: string | undefined, done: boolean } } 
 */
exports.generator = function*(text){
    text = String(text); // making sure the input is a string
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
    
    return text;
}