<template>
  <footer>
    <div class="footer-des">
      <img :src="require('@/assets/imgs/footer-logo.png')" alt="">
      <div class="info">
        <strong>豆瓣</strong>
        <p>我们的精神角落</p>
      </div>
    </div>
    <a href="https://www.douban.com/doubanapp/card/log?category=movie_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_movie_home%26direct_dl%3D1">去 App Store 免费下载 iOS 客户端</a>
  </footer>
</template>
<script></script>
<style scoped>
  footer{
    margin: 2.5rem 0 1.5rem 0;
    padding-bottom: 1.0rem;
    clear: both;
  }
  .footer-des{
    width:7.9rem;
    height:2.4rem;
    margin:0 auto;
    margin-bottom:0.75rem;
  }
  .footer-des>img{
    width:2.4rem;
    height:2.4rem;
    float:left;
    margin-right:0.6rem;
  }
  .info>strong{
    font-size:1.2rem;
    line-height:1.4rem;
    font-weight: normal;
  }
  .info>p{
    font-size:0.7rem;
    line-height: 1.0rem;
  }
  footer>a{
    text-align:center;
    display:block;
    color:#42bd56;
    font-size:0.75rem;
  }
</style>