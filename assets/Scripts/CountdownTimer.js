const GameManager = require("GameManager");

cc.Class({
    extends: cc.Component,

    properties: {
        gameManager: GameManager,

        filter: cc.Sprite,
        second: cc.Label,
        timer: 60,

        colorSafe: cc.Color.GREEN,
        colorWarn: cc.Color.YELLOW,
        colorDanger: cc.Color.RED,

        _isStart: false,
        _countdown: 0,
        _onResult: () => {},
    },

    onEnable() {
        this._isStart = false;

        this.filter.fillRange = 0;

        this._countdown = this.timer;
        this.updateSecond();
    },

    update(dt) {
        if (this._isStart) {
            this.countdown(dt);
        }
    },

    isStart() {
        return this._isStart;
    },

    startCountdown() {
        this._isStart = true;
    },

    onResult(callback) {
        this._onResult = callback;
    },

    returnResult() {
        if (this._countdown <= 0) {
            this.gameManager.activeResultScene();
            this._onResult();
        }
    },

    countdown(dt) {
        this._countdown -= dt;
        this.updateSecond();

        const process = this._countdown / this.timer;
        this.filter.fillRange = process - 1;
        this.changeColorByProcess(process);

        this.returnResult();
    },

    changeColorByProcess(process) {
        if (process > 0.3) {
            this.changeColorFilter(this.colorSafe);
        } else if (process > 0.1) {
            this.changeColorFilter(this.colorWarn);
        } else {
            this.changeColorFilter(this.colorDanger);
        }
    },

    changeColorFilter(color) {
        this.filter.node.color = color;
    },

    updateSecond() {
        this.second.string = Math.ceil(this._countdown).toLocaleString(
            "en-US",
            {
                minimumIntegerDigits: 2,
            },
        );
    },
});
