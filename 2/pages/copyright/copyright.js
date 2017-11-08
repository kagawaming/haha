var app = getApp()
Page({
  data:{
    // this is a page.
  },
  goto_counter:function(){
     wx.navigateTo({url:"../index/index"});
  }, 
  goto_1:function(){
     wx.navigateTo({url:"../post/post"});
  },    // goto_counter(selfdefined) is used to goto another               //another page
  onLoad:function(){
    // Do something initial when launch.
  },
  onReady:function(){
     // Do something when show.
  },

})