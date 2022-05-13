const app = getApp();

Page({
    data: {
        modal1:false,
        modal2:false,
        size1:true,
        size2:true,
        size3:true,
        size4:true,
        style1:true,
        style2:true,
        style3:true,
        style4:true,
        unstyle1:false,
        unstyle2:false,
        unstyle3:false,
        unstyle4:false,
        group:['1'],
        isAllChecked: false,
        isIndeterminate: true
    },
    onLoad() {

    },
    modal1Change(e) {
        this.setData({
            modal1: e.detail
        })
    },
    modal2Change(e) {
        this.setData({
            modal2: e.detail
        })
    },
    size1Change(e) {
        this.setData({
            size1: e.detail
        })
    },
    size2Change(e) {
        this.setData({
            size2: e.detail
        })
    },
    size3Change(e) {
        this.setData({
            size3: e.detail
        })
    },
    size4Change(e) {
        this.setData({
            size4: e.detail
        })
    },

    style1Change(e) {
        this.setData({
            style1: e.detail
        })
    },
    style2Change(e) {
        this.setData({
            style2: e.detail
        })
    },
    style3Change(e) {
        this.setData({
            style3: e.detail
        })
    },
    style4Change(e) {
        this.setData({
            style4: e.detail
        })
    },

    unstyle1Change(e) {
        this.setData({
            unstyle1: e.detail
        })
    },
    unstyle2Change(e) {
        this.setData({
            unstyle2: e.detail
        })
    },
    unstyle3Change(e) {
        this.setData({
            unstyle3: e.detail
        })
    },
    unstyle4Change(e) {
        this.setData({
            unstyle4: e.detail
        })
    },
    groupChange(e) {
        this.setData({
            group: e.detail
        })
    },
    groupAllChange(e) {
        this.setData({
            isAllChecked: e.detail.value,
            isIndeterminate: e.detail.indeterminate
        })
    },
})
