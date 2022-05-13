const app = getApp();

Page({
    data: {
        numList: [
            {
                title: '开始',
                desc:'二〇二〇年十二月十七日'
            },
            {
                title: '等待',
                desc:'二〇二〇年十二月十七日'
            },
            {
                title: '错误',
                desc:'二〇二〇年十二月十七日'
            },
            {
                title: '完成',
                desc:'二〇二〇年十二月十七日'
            }
        ],
        num: 0,
        basicsList: [
            {
                icon: '_icon-home',
                title: '开始',
                desc:'二〇二〇年十二月十七日'
            },
            {
                icon: '_icon-waiting',
                title: '等待',
                desc:'二〇二〇年十二月十七日'
            },
            {
                icon: '_icon-close-round',
                title: '错误',
                desc:'二〇二〇年十二月十七日'
            },
            {
                icon: '_icon-check-round',
                title: '完成',
                desc:'二〇二〇年十二月十七日'
            }
        ],
        basics: 0,
        column: 0
    },
    onLoad() {

    },
    tapBasicsSteps() {
        let {basics, basicsList} = this.data;
        this.setData({
            basics: basics == basicsList.length - 1 ? 0 : basics + 1
        })
    },
    tapNumSteps() {
        let {num, numList} = this.data;
        this.setData({
            num: num == numList.length - 1 ? 0 : num + 1
        })
    },
    tapScrollSteps() {
        let column = this.data.column;
        this.setData({
            column: column == 9 ? 0 : column + 1
        })
    }
})
