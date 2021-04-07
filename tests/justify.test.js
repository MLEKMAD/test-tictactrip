const assert = require('assert');
const {justify, covertTextToWords} = require('../justify');
const faker = require("faker")

describe('convert text into words test', ()=>{
    /**
     * helper function to assert the generator is done
     * @param {*} generator 
     */

    it('converts text to words', ()=>{
        let expectedWordsList = ["someone", "like", "you", "\n", "adele", "lol"];
        let text = expectedWordsList.join(" ");
        const wordsList = covertTextToWords(text);
        for (let i = 0; i<expectedWordsList.length; i++) {
            assert.strictEqual(wordsList[i], expectedWordsList[i]);
        }
        
    });

    // it('can handle undefined inputs', ()=>{
    //     let text = undefined;
    //     const myGenerator = generator(text);
    //     const generatedWord = myGenerator.next();
    //     assert.strictEqual(generatedWord.value, 'undefined');
    //     assert.strictEqual(generatedWord.done, false);
    //     assertGeneratorDone(myGenerator);
        
    // });

   
})

describe('justification test', ()=>{
    it('jutifies a text', ()=>{
        const MAX_LENGTH = 80;
        const text = faker.lorem.paragraph();
        const justifiedText = justify(text);
        console.log('justified text:\n', justifiedText);
        const lines = justifiedText.split('\n')
        for (const line of lines) {
            console.log("actual line: ", line)
            console.log("actual length: ", line.length);
            assert.strictEqual(line.length <=  MAX_LENGTH, true);
        }
    })
})