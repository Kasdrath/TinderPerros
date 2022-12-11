import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 50,
        min: 1
    },
    wordsPerSentence: {
        max: 50,
        min: 1
    }
});

lorem.generateWords(1);
lorem.generateSentences(1);
lorem.generateParagraphs(1);