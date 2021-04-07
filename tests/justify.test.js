const assert = require('assert');
const chai = require('chai');
var chaiHttp = require('chai-http');
const {justify, covertTextToWords} = require('../justify');
const faker = require("faker");
const app = require('../app');

chai.use(chaiHttp);

describe('convert text into words test', ()=>{
    
    it('converts text to words', ()=>{
        let expectedWordsList = ["someone", "like", "you", "\n", "adele", "lol"];
        let text = expectedWordsList.join(" ");
        const wordsList = covertTextToWords(text);
        for (let i = 0; i<expectedWordsList.length; i++) {
            assert.strictEqual(wordsList[i], expectedWordsList[i]);
        }
    });
   
})

describe('justification test', ()=>{

    it('jutifies a text', ()=>{
        const MAX_LENGTH = 80;
        const text = faker.lorem.paragraphs();
        const justifiedText = justify(text);
        const lines = justifiedText.split('\n')
        for (const line of lines) {
            assert.strictEqual(line.length <=  MAX_LENGTH, true);
        }
    });

})

describe("authenticate", () => {
    const user = {
        email: 'foo@bar.fr'
    } 

    it("should authenticate the user", (done) => {
        chai.request(app)
          .post('/api/token')
          .send({'email':user.email})
          .then((res) => {
             assert.strictEqual(res.status,200);
             const body = res.body;
             console.log(body)
            done();
          }).catch((err) => done(err))
     });
     
  });
  

