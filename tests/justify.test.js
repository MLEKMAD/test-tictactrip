const assert = require("assert");
const { justify, covertTextToWords } = require("../justify");
const faker = require("faker");

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
