Page({
    data: {
        target :''
    },
    show() {
        this.$showDialog({
            //title : 'colorUI弹窗',
            content: '这是一个模态弹窗',
            success: res => {
                console.log(res)
                if(res.confirm){
                    this.$success({
                        title : '点击了确定'
                    })
                }else{
                    wx.showToast({
                        title: '点击了取消',
                        icon : 'none'
                    })
                }
            }
        })
    },
    show2() {
        this.$showDialog({
            content: '这是一个模态弹窗',
            showCancel: false,
            success: res => {
                console.log(res);
            }
        });
    },
    show3() {
        this.$showDialog({
            content: '您好',
            cancelText: '再见',
            confirmText: '好的',
            success: res => {
                console.log(res);
            }
        });
    },
    success(res){
        const { detail} = res
        console.log(detail);
    },
    showCustomizeModal(e){
        this.setData({
            target : e.currentTarget.dataset.key
        })
    }
})