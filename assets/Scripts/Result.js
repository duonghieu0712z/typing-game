cc.Class({
    extends: cc.Component,

    properties: {
        result: cc.Label,
    },

    setResult(result) {
        this.result.string = `${result.correctWords} WPM\nCorrect words: ${result.correctWords}\nWrong words: ${result.wrongWords}`;
    },
});
