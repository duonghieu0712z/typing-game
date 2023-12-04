cc.Class({
    extends: cc.Component,

    properties: {
        avatar: cc.Sprite,
    },

    onLoad() {
        const image = this.getComponent(cc.Sprite);
        this.node.on(
            cc.Node.EventType.MOUSE_DOWN,
            () => {
                this.avatar.spriteFrame = image.spriteFrame;
            },
            this
        );
    },
});
