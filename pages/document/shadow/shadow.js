const app = getApp();

Page({
    data: {

    },
    bgCopy(e) {
        wx.setClipboardData({
            data: e.currentTarget.dataset.value,
            fail: function() {
                wx.showToast({
                    title: '复制失败！',
                    icon: 'none'
                })
            },
        });
    },
})
