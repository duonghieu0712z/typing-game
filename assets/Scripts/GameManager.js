cc.Class({
    extends: cc.Component,

    properties: {
        registerScene: cc.Node,
        typingScene: cc.Node,
        resultScene: cc.Node,
    },

    activeScene(scene) {
        [this.registerScene, this.typingScene, this.resultScene].map(
            (value) => (value.active = value === scene)
        );
    },

    activeRegisterScene() {
        this.activeScene(this.registerScene);
    },

    activeTypingScene() {
        this.activeScene(this.typingScene);
    },

    activeResultScene() {
        this.activeScene(this.resultScene);
    },
});
