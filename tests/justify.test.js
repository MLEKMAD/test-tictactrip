const assert = require('assert');
const {justify, generator} = require('../justify');

describe('generator test', ()=>{
    it('generates words from a text', ()=>{
        let wordsList = ["someone", "like", "you", "adele", "lol"];
        let text = wordsList.join(" ");
        const myGenerator = generator(text);
        for (const word of wordsList) {
            let { value: nextWord, done } = myGenerator.next();
            assert.strictEqual(nextWord, word);
            assert.strictEqual(done, false, "We are not done yet!");
        }
        let generatedValue = myGenerator.next(); 
        assert.strictEqual(generatedValue.done, true);
        assert.ok(!generatedValue.value, "End of text, no next word")
        
    });
})

describe('justification test', ()=>{

})