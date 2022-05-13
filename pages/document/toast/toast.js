// pages/document/toast/toast.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  tips(){
    this.$tips('你好呀')
  },
  tips2() {
    this.$tips({
      title :'您好呀！', 
      duration : 5000
    });
  },
  tips3() {
    this.$tips({
      title : 'Android Studio1.4 \r\n以后官方重做了新建Activity的模板展现, 其中默认的那一个, 就很好的演示了新系统的一些交互逻辑, 点击FAB的时候, 会从底部滑出来一个SnackBar, 其中默认的那一个, 就很好的演示了新系统的一些交互逻辑, 点击FAB的时候, 会从底部滑出来一个SnackBar, 不妨新建一个默认的体验一下官方的设计思想.适用于只是告诉用户发生了什么, 常见于系统的通知, 但是有很大的局限性,就是只能通知用户, 而做不到和用户进行交互, 比如你不小心删除了一张照片而没有通过二次确认, 仅仅是toast通知你"已删除", 对用户而言是很难接受的事情.'
    });
  },
  Loading(){
    this.$loading()
    setTimeout(()=>{
      this.$hideLoading()
    },1500)
  }
})