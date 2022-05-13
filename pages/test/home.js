const app = getApp();

Page({
    data: {
        scrollTop: 0, listColor: [], list: [{
            title: '触底加载', text: '数据列表触底加载实验', name: '@胖虎', url: 'list/old-list/index'
        }, {
            title: '虚拟加载', text: '数据列表虚拟加载实验', name: '@胖虎', url: 'list/fictitious-list/index'
        }, {
            title: '悬浮工具栏', text: '右下角悬浮工具栏', name: '@iZaiZaiA', url: 'fixed-tools/index'
        }, {
            title: '点标签', text: '常见于在图片上的标签', name: '@iZaiZaiA', url: 'dot-tag/dot-tag'
        }, {
            title: '布局', text: '通过row和col组件布局', name: '@iZaiZaiA', url: 'layout/layout'
        }, {
            title: '步进器', text: '常用于数量加减的组件', name: '@iZaiZaiA', url: 'stepper/stepper'
        }, {
            title: '消息提示', text: '在页面顶部展示消息提示', name: '@iZaiZaiA', url: 'notify/notify'
        }, {
            title: '分割线', text: '将内容分割为多个区域', name: '@iZaiZaiA', url: 'divider/divider'
        }, {
            title: '搜索栏', text: '搜索场景的输入框组件', name: '@iZaiZaiA', url: 'search-bar/search-bar'
        }],
    },
    onLoad() {
        this.getListColor();
    },
    onShow() {
        this.getListColor();
    },
    getListColor() {
        let list = this.data.list, color = [];
        for (let i = 0; i < list.length; i++) {
            let val = this.getColor(color);
            color.push(val)
        }
        this.setData({
            listColor: color
        })
    },
    //随机生成库内颜色名
    getColor(color) {
        let colorArr = ['yellow', 'orange', 'red', 'pink', 'mauve', 'purple', 'blue', 'cyan', 'green', 'olive', 'grey', 'brown'];
        let val = colorArr[Math.floor(Math.random() * colorArr.length)];
        if (color.indexOf(val) !== -1) {
            return this.getColor(color);
        } else {
            return val
        }
    },
    tapToUrl(e) {
        wx.navigateTo({
            url: e.currentTarget.dataset.url
        })
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
