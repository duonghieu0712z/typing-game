cc.Class({
    extends: cc.Component,

    properties: {
        avatar: cc.Sprite,
        username: cc.Label,
    },

    setInfo(username, avatar) {
        this.username.string = username;
        this.avatar.spriteFrame = avatar;
    },
});
