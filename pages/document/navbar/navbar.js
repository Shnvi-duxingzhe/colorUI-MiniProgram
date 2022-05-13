const app = getApp();

Page({
    data: {
        text: '返回', ui: '', isText: '', back: true, bg: 'bg-blur', isBg: false, status: '', scrollTop: 0, opacity: false, opacityChange: false,
        opacityBg: false, noFixed: false, capsule: false, stopBack: false, isSlot: false, isLeft: false, isCenter: false, isRight: false,
    },
    //是否返回上一页
    isBackChange(e) {
        this.setData({
            back: e.detail
        })
    },
    //仅图标
    isTextChange(e) {
        let text = '返回';
        if (e.detail) {
            text = '';
        }
        this.setData({
            text: text,
            isText: e.detail
        })
    },
    // 标题栏背景色
    isNavBgChange(e) {
        let bg = 'bg-blur';
        if (e.detail) {
            bg = 'bg-red';
        }
        this.setData({
            isBg: e.detail,
            bg: bg
        })
    },
    //状态栏颜色
    isStatusChange(e) {
        this.setData({
            status: e.detail
        })
    },
    //开启滑动渐变
    isOpacityChange(e) {
        this.setData({
            opacity: e.detail
        })
    },
    //文本样式翻转
    isOpacityChangeChange(e) {
        this.setData({
            opacityChange: e.detail
        })
    },
    //返回按钮背景
    isOpacityBgChange(e) {
        this.setData({
            opacityBg: e.detail
        })
    },
    //是否浮动
    isNoFixedChange(e) {
        this.setData({
            noFixed: e.detail
        })
    },
    //阴影
    isShadowChange(e) {
        this.setData({
            ui: e.detail
        })
    },
    //重定向
    tapSetNavbar() {
        wx.reLaunch({
            url: '/pages/document/navbar/navbar'
        })
    },
    //开启胶囊返回
    isCapsuleChange(e) {
        this.setData({
            capsule: e.detail
        })
    },
    //返回事件
    isStopBackChange(e) {
        this.setData({
            stopBack: e.detail
        })
    },
    //isSlot
    isSlotChange(e) {
        this.setData({
            isSlot: e.detail
        })
    },
    //isLeft
    isLeftChange(e) {
        this.setData({
            isLeft: e.detail
        })
    },
    //isCenter
    isCenterChange(e) {
        this.setData({
            isCenter: e.detail
        })
    },
    //isRight
    isRightChange(e) {
        this.setData({
            isRight: e.detail
        })
    },
    //点击了返回
    navBack() {
        this.$tips('点击了返回')
    },
    // 监听用户滑动页面事件。
    onPageScroll(e) {
        // 注意：请只在需要的时候才在 page 中定义此方法，不要定义空方法。以减少不必要的事件派发对渲染层-逻辑层通信的影响。
        // 注意：请避免在 onPageScroll 中过于频繁的执行 setData 等引起逻辑层-渲染层通信的操作。尤其是每次传输大量数据，会影响通信耗时。
        // https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPageScroll-Object-object
        this.setData({
            scrollTop: e.scrollTop
        })
    },
})
