<template>
  <div class="wrapper">
    <section class="movies">
      <h2 class="title">影视</h2>
      <ul class="movies-list">
        <li>
          <a href="#">
            <div class="mlist-top">
              <img :src="require('@/assets/imgs/head-portrait.jpg')" alt="">
              <span class="des">人生的意义在于电视剧</span>
              <span class="number">23872人</span>
            </div>
            <div class="topic">
              <span>也许人生的意义就在于不停的看电视剧吧，下一部好的电视剧总是可以把我从这一部的伤感里拖出来。</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="mlist-top">
              <img :src="require('@/assets/imgs/head-portrait.jpg')" alt="">
              <span class="des">人生的意义在于电视剧</span>
              <span class="number">23872人</span>
            </div>
            <div class="topic">
              <span>也许人生的意义就在于不停的看电视剧吧，下一部好的电视剧总是可以把我从这一部的伤感里拖出来。</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="mlist-top">
              <img :src="require('@/assets/imgs/head-portrait.jpg')" alt="">
              <span class="des">人生的意义在于电视剧</span>
              <span class="number">23872人</span>
            </div>
            <div class="topic">
              <span>也许人生的意义就在于不停的看电视剧吧，下一部好的电视剧总是可以把我从这一部的伤感里拖出来。</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="mlist-top">
              <img :src="require('@/assets/imgs/head-portrait.jpg')" alt="">
              <span class="des">人生的意义在于电视剧</span>
              <span class="number">23872人</span>
            </div>
            <div class="topic">
              <span>也许人生的意义就在于不停的看电视剧吧，下一部好的电视剧总是可以把我从这一部的伤感里拖出来。</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="mlist-top">
              <img :src="require('@/assets/imgs/head-portrait.jpg')" alt="">
              <span class="des">人生的意义在于电视剧</span>
              <span class="number">23872人</span>
            </div>
            <div class="topic">
              <span>也许人生的意义就在于不停的看电视剧吧，下一部好的电视剧总是可以把我从这一部的伤感里拖出来。</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="mlist-top">
              <img :src="require('@/assets/imgs/head-portrait.jpg')" alt="">
              <span class="des">人生的意义在于电视剧</span>
              <span class="number">23872人</span>
            </div>
            <div class="topic">
              <span>也许人生的意义就在于不停的看电视剧吧，下一部好的电视剧总是可以把我从这一部的伤感里拖出来。</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="mlist-top">
              <img :src="require('@/assets/imgs/head-portrait.jpg')" alt="">
              <span class="des">人生的意义在于电视剧</span>
              <span class="number">23872人</span>
            </div>
            <div class="topic">
              <span>也许人生的意义就在于不停的看电视剧吧，下一部好的电视剧总是可以把我从这一部的伤感里拖出来。</span>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <div class="mlist-top">
              <img :src="require('@/assets/imgs/head-portrait.jpg')" alt="">
              <span class="des">人生的意义在于电视剧</span>
              <span class="number">23872人</span>
            </div>
            <div class="topic">
              <span>也许人生的意义就在于不停的看电视剧吧，下一部好的电视剧总是可以把我从这一部的伤感里拖出来。</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="mlist-top">
              <img :src="require('@/assets/imgs/head-portrait.jpg')" alt="">
              <span class="des">人生的意义在于电视剧</span>
              <span class="number">23872人</span>
            </div>
            <div class="topic">
              <span>也许人生的意义就在于不停的看电视剧吧，下一部好的电视剧总是可以把我从这一部的伤感里拖出来。</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="mlist-top">
              <img :src="require('@/assets/imgs/head-portrait.jpg')" alt="">
              <span class="des">人生的意义在于电视剧</span>
              <span class="number">23872人</span>
            </div>
            <div class="topic">
              <span>也许人生的意义就在于不停的看电视剧吧，下一部好的电视剧总是可以把我从这一部的伤感里拖出来。</span>
            </div>
          </a>
        </li>

      </ul>
    </section>
  </div>
</template>
<script>

</script>
<style scoped>
	.wrapper{
    width:90.4%;
    margin:0 auto;
    margin-top:3.0rem;
  }
  .movies{
    width:100%;
  }
  .title{
    font-weight:500;
    font-size:0.9rem;
    margin-top:0;
  }
  .movies-list>li>a{
    display:block;
    width:100%;
    height:3.45rem;
    padding:15px 0;
    border-bottom:0.005rem solid #f3f3f3;
  }
  .mlist-top{
    height:2.1rem;
    line-height:2.1rem;
  }
  .mlist-top>img{
    width:2.0rem;
    height:2.0rem;
    float:left;
    display: block;
  }
  .mlist-top>.des{
    font-size:0.9rem;
    padding:0 0.5rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .mlist-top>.number{
    font-size:0.75rem;
    color:#ccc;
    float:right;
  }
  .topic{
    height:0.85rem;
    margin-top:0.5rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size:0.75rem;
    color:#aaa;
  }
</style>