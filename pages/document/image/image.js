const app = getApp();

Page({
    data: {
        list: [],
        parameter: [{
            default: "",
            info: "图片地址",
            name: "src",
            type: "String"
        },{
            default: "[]",
            info: "图片数组",
            name: "urls",
            type: "Array"
        },{
            default: "-1",
            info: "图片索引",
            name: "current",
            type: "Number"
        },{
            default: "false",
            info: "开启图片点击预览",
            name: "preview",
            type: "Boolean"
        },{
            default: "false",
            info: "是否为本地图片",
            name: "local",
            type: "Boolean"
        }]
    },
    onLoad() {
        let list = [];
        for(let i = 1; i< 15; i++) {
            let url = i  < 10 ? '0' + (i) : i;
            list.push('https://oss.colorui.org/cos/wallpaper/10' + url + '.jpg');
        }
        this.setData({
            list: list
        })
    },
    toDemoWallpaper() {
        wx.navigateTo({
            url: '/pages/demo/wallpaper/wallpaper'
        })
    },
})
