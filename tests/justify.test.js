const assert = require('assert');
const {justify, generator} = require('../justify');

describe('generator test', ()=>{
    /**
     * helper function to assert the generator is done
     * @param {*} generator 
     */
    const assertGeneratorDone = (generator)=>{
        let generatedValue = generator.next(); 
        assert.strictEqual(generatedValue.done, true);
        assert.ok(!generatedValue.value, "End of text, no next word")
    }

    it('generates words from a text', ()=>{
        let wordsList = ["someone", "like", "you", "adele", "lol"];
        let text = wordsList.join(" ");
        const myGenerator = generator(text);
        for (const word of wordsList) {
            let { value: nextWord, done } = myGenerator.next();
            assert.strictEqual(nextWord, word);
            assert.strictEqual(done, false, "We are not done yet!");
        }
        assertGeneratorDone(myGenerator);
        
    });

    it('can handle undefined inputs', ()=>{
        let text = undefined;
        const myGenerator = generator(text);
        const generatedWord = myGenerator.next();
        assert.strictEqual(generatedWord.value, 'undefined');
        assert.strictEqual(generatedWord.done, false);
        assertGeneratorDone(myGenerator);
        
    });
})

describe('justification test', ()=>{
    it('jutifies a text', ()=>{

    })
})