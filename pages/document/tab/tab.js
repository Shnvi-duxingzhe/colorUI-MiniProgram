const app = getApp();

Page({
    data: {
        NavCur: 0,
        change: ''
    },
    onLoad() {

    },
    tabNavChange(e) {
        this.setData({
            NavCur: e.detail.index
        })
    },
    tabChange(e) {
        let change = JSON.stringify(e.detail);
        this.setData({
            change: change
        })
    }
})
