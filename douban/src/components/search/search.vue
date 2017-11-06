<template>
  <div id="search">
    <div class="header">
    <div class="header-wrap">
      <div class="close">
        <a @click="returnback" href="#">关闭</a>
      </div>
      <div class="input">
        <input type="text" class="search">
        <input type="submit" class="button" value="搜索">
        <img class="hid" :src="require('@/assets//imgs/search2.png')" alt="">
      </div>
    </div>
  </div class="header">
  <div class="content">
    <ul class="list">
      <li><router-link to="/movie"><strong>电影</strong><span>影院热映</span></router-link></li>
      <li><router-link to="#"><strong>电视</strong><span>正在热播</span></router-link></li>
      <li><router-link to="/book"><strong>图书</strong><span>畅销排行</span></router-link></li>
      <li><router-link to="#"><strong>同城</strong><span>周末活动</span></router-link></li>
      <li><router-link to="/group"><strong>小组</strong><span>志趣相投</span></router-link></li>
      <li><router-link to="#"><strong>音乐</strong><span>新碟榜</span></router-link></li>
      <li><router-link to="#"><strong>阅读</strong><span>电子书</span></router-link></li>
      <li><router-link to="#"><strong>游戏</strong><span>虚拟世界</span></router-link></li>
      <li><router-link to="#"><strong>应用</strong><span>玩手机</span></router-link></li>
      <li><router-link to="#"><strong>东西</strong><span>心爱之物</span></router-link></li>
      <li><router-link to="#"><strong>FM</strong><span>红心歌曲</span></router-link></li>
      <li><router-link to="#"><strong>市集</strong><span>购买原创</span></router-link></li>
    </ul>
    <div class="opration">
      <div>
        <a class="add" href="http://accounts.douban.com/register?redir=https://m.douban.com/movie/">注册账户</a>
      </div>
      <div>
        <a href="http://accounts.douban.com/login?redir=https://m.douban.com/movie/">登录豆瓣</a>
      </div>
      <div>
        <a class="add" href="/to_pc/?url=https%3A%2F%2Fm.douban.com%2Fmovie%2F">使用桌面版</a>
      </div>
      <div>
        <a href="#">使用豆瓣App</a>
      </div>
    </div>
  </div>
  </div>
</template>  
<script>
  import $ from 'jquery'
  // console.log($)
  export default {
    methods: {
      returnback () {
        this.$router.back()
      }
    }
  }
  $(function () {
    // 获取焦点事件
    $('.search').focus(function () {
      $('.hid').css('display', 'none')
    })

    // 失去焦点事件
    $('.search').blur(function () {
      console.log($('.search').val())
      if ($('.search').val() === '') {
        $('.hid').css('display', 'block')
      }
    })
  })
</script>
<style scoped>
  .header{
    width: 100%;
    background:#fff;
    border-bottom:0.05rem solid #f3f3f3;
    position:fixed;
    top:0;
    left:0;
    z-index: 10000
  }
  .header-wrap{
    width:90.4%;
    margin: 0 auto;
    height:1.55rem;
  }
  .close{
    float:left;
    line-height:0.95rem;
    font-size:0.75rem;
    text-align:center;
  }
  .close>a{
    display: block;
    color:#42db56;
    padding:0.75rem 0;
  }
  .input{
    width:14.75rem;
    float:right;
    margin-top:-0.25rem;
    position:relative;
    padding:0.75rem 0;
  }
  .search{
    width:11.25rem;
    height:1.25rem;
    padding:0.1rem 0.25rem;
    border-radius:0 0.2rem 0.2rem 0;
    background:#f3f3f3;
    background-size:0.867rem;
  }
  .button{
    width:2.5rem;
    height:100%;
    padding: 0.325rem 0.4rem;
    font-size: 0.7rem;
    background:rgb(159, 120, 96);
    color:#fff;
    margin-left:-0.4rem;
    border-radius:0 0.2rem 0.2rem 0;
  }
  .input>img{
    width:0.867rem;
    position:absolute;
    top:1.2rem;
    left:35%;
  }
  /*内容部分*/
  .content{
    width:90.4%;
    height:100%;
    margin:0 auto;
    margin-top:3.05rem;
  }
  .list{
    padding-top:1.75rem;
    width:100%;
    overflow:hidden;  
    height:auto;  
  }
  .list>li{
    width:5.5rem;
    text-align: center;
    height:2.25rem;
    margin-bottom:1.25rem;
    float:left;
  }
  .list>li>a{
    display:block;
  }
  .list>li>a>strong{
    font-weight:400;
    display:block;
    font-size:1.2rem;
    line-height:1.4rem;
  }
  .list>li:first-child>a>strong{
    color:rgb(35, 132, 232);
  }
  .list>li:nth-of-type(2)>a>strong{
    color:rgb(230, 70, 126);
  }
  .list>li:nth-of-type(3)>a>strong{
    color:rgb(159, 120, 96);
  }
  .list>li:nth-of-type(4)>a>strong{
    color:rgb(225, 100, 77);
  }
  .list>li:nth-of-type(5)>a>strong{
    color:rgb(122, 106, 219);
  }
  .list>li:nth-of-type(6)>a>strong{
    color:rgb(42, 184, 204);
  }
  .list>li:nth-of-type(7)>a>strong{
    color:rgb(87, 116, 197);
  }
  .list>li:nth-of-type(8)>a>strong{
    color:rgb(64, 207, 169);
  }
  .list>li:nth-of-type(9)>a>strong{
    color:rgb(159, 120, 96);
  }
  .list>li:nth-of-type(10)>a>strong{
    color:rgb(244, 143, 46);
  }
  .list>li:nth-of-type(11)>a>strong{
    color:rgb(89, 108, 221);
  }
  .list>li:nth-of-type(12)>a>strong{
    color:rgb(66, 189, 86);
  }
  .list>li>a>span{
    display:block;
    color:#999;
    font-size:0.6rem;
    line-height:0.85rem;
  }
  /*操作部分*/
  .opration{
    width:100%;
    height:auto;
    overflow:hidden;
    border-bottom:0.05rem solid #f3f3f3;
  }
  .opration>div{
    width:50%;
    float:left;
    height: 0.85rem;
    line-height:;
    padding:0.65rem 0;
    text-align: center;
    font-size:0.75rem;
    border-top:0.05rem solid #f3f3f3;
  }
  .opration>div>a{
    display:block;
    color:#42bd56;
  }
  .opration>div>a.add{
    border-right:0.05rem solid #f3f3f3;
  }
</style>