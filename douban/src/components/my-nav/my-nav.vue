<template>
	<header>
    <div class="header-wrap">
      <router-link to="/index" class="logo">
        <img :src="require('@/assets/imgs/logo.png')" alt="">
      </router-link>
      <nav class="mainbav">
        <ul>
        	<li><router-link to="/movie">电影</router-link></li>
        	<li><router-link to="/book">图书</router-link></li>
        	<li><router-link to="/broadcast">广播</router-link></li>
        	<li><router-link to="/group">小组</router-link></li>
          <li class="last"><router-link to="/search"><img :src="require('@/assets/imgs/search.png')" alt=""></router-link></li >
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
	
</script>
<style scoped>
	 header{
    width: 100%;
    height: 2.3rem;
    background:#fff;
    border-bottom:0.05rem solid #f3f3f3;
    position:fixed;
    top:0;
    left:0;
    z-index: 999;
  }
  .header-wrap{
    width:90.4%;
    height:1.1rem;
    padding:0.6rem 0.9rem;
  }
  .logo{
    display:block;
    width:2.3rem;
    height:1.1rem;
    float:left;
  }
  .logo>img{
    width:100%;
  }
  /* 主体导航部分 开始 */
  .mainbav{
    width:11.028rem;
    height:1.1rem;
    line-height: 1.1rem;
    float:right;
  }
  .mainbav>ul{
    width:100%;
    height:0.85rem;
    line-height:0.85rem;
    float: left;
    margin-top:0.125rem;
  }
  .mainbav>ul>li{
    float:left;
    margin-right:0.90rem;
    font-size: 0.75rem;
  }
  .mainbav>ul>li:first-child>a{
    color:#2384E8;
  }
  .mainbav>ul>li:nth-of-type(2)>a{
    color:#9F7860;
  }
  .mainbav>ul>li:nth-of-type(3)>a{
    color:#E4A813;
  }
  .mainbav>ul>li:nth-of-type(4)>a{
    color:#2AB8CC;
  }
  .mainbav>ul>li.last{
    width:1.228rem;
    height:0.914rem;2
    margin-top:0.2rem;
    margin-right:0;
  }
  .mainbav>ul>li.last>a>img{
    width:100%;
  }
  /* 主体导航部分 结束 */
</style>