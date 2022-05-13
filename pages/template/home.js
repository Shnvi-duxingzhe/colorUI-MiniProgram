const app = getApp();

Page({
    data: {
        scrollTop: 0, list: [
            {
                img: 'https://oss.colorui.org/cos/img/qtrr8.png',
                title: 'ColorStore - 个人小店',
                desc: '个人开店首选！有分类，有物流。包含多种活动，优惠券页面。',
                price: '799',
                like: 306,
                comment: 55
            },
            {
                img: 'https://oss.colorui.org/cos/img/beptn.png',
                title: 'ColorShop - 多用户商城',
                desc: '适配多语言,会员、商家多用户角色。对接国际物流，跨境电商立马搞定！',
                price: '2799',
                like: 156,
                comment: 24
            },
            {
                img: 'https://oss.colorui.org/cos/img/dkarj.png',
                title: 'ColorTakeaway - 外卖与骑手',
                desc: '多商家，多用户，另有骑手端。可做区域配送。',
                price: '4799',
                like: 173,
                comment: 32
            },
            {
                img: 'https://oss.colorui.org/cos/img/7grzo.png',
                title: 'ColorFinance - 金融钱包',
                desc: '',
                price: '4799',
                like: 316,
                comment: 46
            }
        ]
    },
    onLoad() {

    },
    toProductDetail(e) {
        this.$showDialog({
            content: '模板都还没有，后续慢慢上，有定制需求可以可联系QQ：1273753708（ColorUI作者，文晓港）',
            showCancel: false,
            success: res => {
                console.log(res);
            }
        });
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
