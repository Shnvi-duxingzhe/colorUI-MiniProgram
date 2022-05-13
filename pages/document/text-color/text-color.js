const app = getApp();

Page({
    data: {
        color: [
            { name: 'yellow', value: 'fbbd08' },
            { name: 'orange', value: 'f37b1d' },
            { name: 'red', value: 'e54d42' },
            { name: 'pink', value: 'e03997' },
            { name: 'mauve', value: 'b745cb' },
            { name: 'purple', value: '905ddf' },
            { name: 'blue', value: '0081ff' },
            { name: 'cyan', value: '1cbbb4' },
            { name: 'teal', value: '20c997' },
            { name: 'green', value: '3eb93b' },
            { name: 'olive', value: '8dc63f' },
            { name: 'grey', value: '8799a3' },
            { name: 'brown', value: 'a5673f' }
        ],
        themeColor: [
            { name: 'a', value: '0081ff' },
            { name: 'b', value: '2ca5f9' },
            { name: 'c', value: '2ccbf9' },
            { name: 'd', value: 'b2d4fe' },
            { name: 'e', value: 'ffffff' }
        ],
        themeText: [
            { name: 'a', value: '' }, { name: 'b', value: '' },
            { name: 'c', value: '' }, { name: 'd', value: '' }, { name: 'e', value: '' }
        ],
        gray: [
            { name: 'white', value: 'ffffff' },
            { name: 'gray-f', value: 'f8f9fa' },
            { name: 'gray-e', value: 'eeeeee' },
            { name: 'gray-d', value: 'dddddd' },
            { name: 'gray-c', value: 'cccccc' },
            { name: 'gray-b', value: 'bbbbbb' },
            { name: 'gray-a', value: 'aaaaaa' }
        ],
        dark: [
            { name: 'dark-9', value: '999999' },
            { name: 'dark-8', value: '888888' },
            { name: 'dark-7', value: '777777' },
            { name: 'dark-6', value: '666666' },
            { name: 'dark-5', value: '555555' },
            { name: 'dark-4', value: '444444' },
            { name: 'dark-3', value: '333333' },
            { name: 'dark-2', value: '222222' },
            { name: 'dark-1', value: '111111' },
            { name: 'black', value: '000000' }
        ],
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
