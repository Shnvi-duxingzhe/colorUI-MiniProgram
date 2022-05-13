const app = getApp();
Page({
    data: {
        color: [
            { name: 'yellow', value: 'fbbd08', desc: '明黄' },
            { name: 'orange', value: 'f37b1d', desc: '橘橙' },
            { name: 'red', value: 'e54d42', desc: '嫣红' },
            { name: 'pink', value: 'e03997', desc: '桃粉' },
            { name: 'mauve', value: 'b745cb', desc: '木槿' },
            { name: 'purple', value: '905ddf', desc: '姹紫' },
            { name: 'blue', value: '0081ff', desc: '海蓝' },
            { name: 'cyan', value: '1cbbb4', desc: '天青' },
            { name: 'green', value: '3eb93b', desc: '森绿' },
            { name: 'olive', value: '8dc63f', desc: '橄榄' },
            { name: 'grey', value: '8799a3', desc: '玄灰' },
            { name: 'brown', value: 'a5673f', desc: '棕褐' }
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
})
