Page({
  data:{
    tempFilePaths:''
  },
  onLoad:function(options){
    var self=this
        wx.chooseImage({
  count: 1, // 默认9
  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
  sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
  success: function (res) {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
     
     self.setData({
      tempFilePaths:res.tempFilePaths
    })
  }
})
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){

    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
