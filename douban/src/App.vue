<template>
  <div id="app">
    <!-- 定义头部导航 -->
    <my-nav></my-nav>
    <router-view/>
    <footerl></footerl>
  </div>
</template>

<script>
  import 'static/js/rem.js'
  import 'static/js/jquery.touchSwipe.min.js'
  // 引入头部导航
  import myNav from '@/components/my-nav/my-nav'

  // 引入内容部分
  import homePage from '@/components/home-page/home-page'

  //  引入底部导航
  import footerl from '@/components/footer/footer'
  export default {
    components: {
      homePage,
      myNav,
      footerl
    },
    created () {
      // console.log()
    }
  }
</script>

<style>
  /*引入css重置样式表*/
  @import '../static/css/reset.css';
  /*@import  '../static/css/163css.css'*/
</style>
