const randomWords = require("random-words");

const CountdownTimer = require("CountdownTimer");

cc.Class({
    extends: cc.Component,

    properties: {
        paragraph: cc.Label,
        typing: cc.EditBox,
        countdownTimer: CountdownTimer,

        _isStartCountdown: false,
        _words: [String],

        _count: 0,
        _correctCount: 0,
        _wrongCount: 0,
    },

    start() {
        this.generateWords();
    },

    generateWords() {
        this._words = randomWords(1000);
        this.paragraph.string = this._words.join(" ");
    },

    onTextChanged(text) {
        if (!this._isStartCountdown && text !== " ") {
            this.countdownTimer.startCountdown();
            this._isStartCountdown = true;
        }

        if (text.endsWith(" ")) {
            this.handleTyping(text.trimEnd());

            this.typing.blur();
            this.typing.string = "";
            this.typing.focus();
        }
    },

    handleTyping(text) {
        if (text === this._words[0]) {
            this._words.shift();
            this.paragraph.string = this._words.join(" ");
            this._correctCount++;
        } else {
            this._wrongCount++;
        }
        this._count++;
        cc.log(this._count, this._correctCount, this._wrongCount);
    },
});
