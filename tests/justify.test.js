const assert = require("assert");
const { justify, covertTextToWords } = require("../justify");
const faker = require("faker");
/**
 * We test the funvtion that converts the text into words
 */
describe("convert text into words test", () => {
  it("converts text to words", () => {
    let expectedWordsList = ["someone", "like", "you", "\n", "adele", "lol"];
    let text = expectedWordsList.join(" ");
    const wordsList = covertTextToWords(text);
    for (let i = 0; i < expectedWordsList.length; i++) {
      assert.strictEqual(wordsList[i], expectedWordsList[i]);
    }
  });
});

/**
 * This aims to test the justification function by making sure the output text lines are 80 words each
 */
describe("justification test", () => {
  it("jutifies a text", () => {
    const MAX_LENGTH = 80;
    const text = faker.lorem.paragraphs();
    const justifiedText = justify(text);
    const lines = justifiedText.split("\n");
    for (const line of lines) {
      assert.strictEqual(line.length <= MAX_LENGTH, true);
    }
  });
});
