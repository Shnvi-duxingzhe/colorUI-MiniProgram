const app = getApp();

Page({
    data: {
        list: [
            'home',
            'home-o',
            'search',
            'arrow',
            'checkbox',
            'checkbox-o',
            'box',
            'round',
            'check',
            'check-round',
            'check-round-o',
            'more',
            'close',
            'close-round',
            'close-round-o',
            'edit',
            'info',
            'info-o',
            'warn',
            'warn-o',
            'waiting',
            'waiting-o',
            'delete',
            'delete-o',
            'add',
            'add-round',
            'add-round-o',
            'title',
            'move',
            'move-round',
            'move-round-o',
            'titles',
            'copy',
            'copy-o',
            'loading',
            'loader',
            'back',
            'forward',
            'drop-down',
            'drop-up',
        ]
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
    toIconfont() {
        wx.navigateTo({
            url: '/pages/document/iconfont/iconfont'
        })
    },
})
