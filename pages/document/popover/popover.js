const app = getApp();

Page({
    data: {
        code1: '<ui-popover tips="这里是提示文本">\n  <button class="ui-btn">点击</button>\n</ui-popover>',
        code2: '<ui-popover tips="这里是提示文本" mask>\n  <button class="ui-btn">点击</button>\n</ui-popover>',
        code3: '<ui-popover tips="这里是提示文本" bg="bg-red">\n  <button class="ui-btn">点击</button>\n</ui-popover>',
        code4: '<ui-popover>\n  <button class="ui-btn">点击</button>\n  <view slot="content">\n 自定义内容\n  </view>\n</ui-popover>',
        code5: '<ui-popover tips="这里是提示文本" :time="5000">\n  <button class="ui-btn">点击</button>\n</ui-popover>',
        code6:
            '<view class="flex-between p-3 radius bg-blue" @longpress="isShow = true">\n 长按蓝色区域\n <ui-popover tips="气泡框在这里出现哦" :show.sync="isShow" isChange>\n  <button class="ui-btn" bg="bg-white">\n   目标\n  </button>\n </ui-popover>\n</view>',
        isShow : false
    },
    handleCLoseShow(){
        this.setData({
            isShow : false
        })
    },
    handleOpenShow(){
        this.setData({
            isShow : true
        })
    },
    onLoad() {

    },
})
