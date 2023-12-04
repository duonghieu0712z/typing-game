const randomWords = require("random-words");

const CountdownTimer = require("CountdownTimer");
const Result = require("Result");

cc.Class({
    extends: cc.Component,

    properties: {
        resultScene: Result,

        word: cc.Label,
        paragraph: cc.Label,
        typing: cc.EditBox,
        countdownTimer: CountdownTimer,

        _words: [String],

        _count: 0,
        _correctCount: 0,
        _wrongCount: 0,
    },

    onLoad() {
        this.countdownTimer.onResult(() => {
            this.onResult();
        });
    },

    onEnable() {
        this._count = 0;
        this._correctCount = 0;
        this._wrongCount = 0;

        this.generateWords();
        this.typing.string = "";
    },

    generateWords() {
        this._words = randomWords(1000);
        this.word.string = this._words[0];
        this.paragraph.string = this._words.join(" ");
    },

    onTextChanged(text) {
        if (text === " ") {
            this.resetTyping();
            return;
        }

        if (!this.countdownTimer.isStart()) {
            this.countdownTimer.startCountdown();
        }

        if (text.endsWith(" ")) {
            this.handleTyping(text.trimEnd());
            this.resetTyping();
        }
    },

    handleTyping(text) {
        this._count++;
        if (text === this._words[0]) {
            this._correctCount++;
        } else {
            this._wrongCount++;
        }

        this._words.shift();
        this.word.string = this._words[0];
        this.paragraph.string = this._words.join(" ");
    },

    resetTyping() {
        this.typing.blur();
        this.typing.string = "";
        this.typing.focus();
    },

    onResult() {
        this.resultScene.setResult({
            correctWords: this._correctCount,
            wrongWords: this._wrongCount,
        });
    },
});
