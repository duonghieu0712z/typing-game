cc.Class({
    extends: cc.Component,

    properties: {
        registerScene: cc.Node,
        typingScene: cc.Node,
        resultScene: cc.Node,
    },

    activeScene(nextScene) {
        const scenes = [this.registerScene, this.typingScene, this.resultScene];

        const currentScene = scenes.find((value) => value.active);
        if (currentScene) {
            const info = currentScene.getComponent("Scene").getInfo();
            nextScene.getComponent("Scene").setInfo(info);
        }

        scenes.map((value) => (value.active = value === nextScene));
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
