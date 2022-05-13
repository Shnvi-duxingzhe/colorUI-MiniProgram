const app = getApp();

Page({
    data: {
        srcData1: [],srcData2: [],srcData3: [],srcData4: [],srcData5: [],srcData6: [],srcData7: [],srcData8: [],srcData9: [],
    },
    onLoad() {
        this.setData({
            srcData1: ['/static/avatar/1001.jpg'],
            srcData2: ['/static/avatar/1001.jpg','/static/avatar/1002.jpg'],
            srcData3: ['/static/avatar/1001.jpg','/static/avatar/1002.jpg','/static/avatar/1003.jpg'],
            srcData4: ['/static/avatar/1001.jpg','/static/avatar/1002.jpg','/static/avatar/1003.jpg','/static/avatar/1004.jpg'],
            srcData5: ['/static/avatar/1001.jpg','/static/avatar/1002.jpg','/static/avatar/1003.jpg','/static/avatar/1004.jpg','/static/avatar/1001.jpg'],
            srcData6: [
                '/static/avatar/1001.jpg','/static/avatar/1002.jpg','/static/avatar/1003.jpg',
                '/static/avatar/1004.jpg','/static/avatar/1001.jpg','/static/avatar/1002.jpg'
            ],
            srcData7: [
                '/static/avatar/1001.jpg','/static/avatar/1002.jpg','/static/avatar/1003.jpg',
                '/static/avatar/1004.jpg','/static/avatar/1001.jpg','/static/avatar/1002.jpg',
                '/static/avatar/1003.jpg'
            ],
            srcData8: [
                '/static/avatar/1001.jpg','/static/avatar/1002.jpg','/static/avatar/1003.jpg',
                '/static/avatar/1004.jpg','/static/avatar/1001.jpg','/static/avatar/1002.jpg',
                '/static/avatar/1003.jpg','/static/avatar/1004.jpg'
            ],
            srcData9: [
                '/static/avatar/1001.jpg','/static/avatar/1002.jpg','/static/avatar/1003.jpg',
                '/static/avatar/1004.jpg','/static/avatar/1001.jpg','/static/avatar/1002.jpg',
                '/static/avatar/1003.jpg','/static/avatar/1004.jpg','/static/avatar/1001.jpg'
            ],
        })
    },
    tapAvatar() {
        wx.navigateTo({
            url: '/pages/demo/avatar/avatar'
        })
    },
})
