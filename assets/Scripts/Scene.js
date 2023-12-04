cc.Class({
    extends: cc.Component,

    properties: {
        avatar: cc.Sprite,
        username: cc.Label,
    },

    getInfo() {
        return {
            avatar: this.avatar.spriteFrame,
            username: this.username.string,
        };
    },

    setInfo(info) {
        this.avatar.spriteFrame = info.avatar;
        this.username.string = info.username;
    },
});
