const app = getApp();

Page({
    data: {
        radio: 1,
        color: 'blue-light',
        group: 1,
        disabled: 1,
        clearable: 1
    },
    onLoad() {

    },
    radioChange(e) {
        this.setData({
            radio: e.detail
        })
    },
    colorChange(e) {
        this.setData({
            color: e.detail
        })
    },
    groupChange(e) {
        this.setData({
            group: e.detail
        })
    },
    disabledChange(e) {
        this.setData({
            disabled: e.detail
        })
    },
    clearableChange(e) {
        this.setData({
            clearable: e.detail
        })
    },
})
