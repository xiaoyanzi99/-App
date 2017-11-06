<template>
  <div class="paged">
  	<section id="movie-hot">
  		<div class="hot-title">
  			<h2 style="display:inline-block;">影院热映</h2>
  			<span><a href="#" id="hotmore">更多</a></span>
  		</div>
  		<div class="hot-content ulwrap swiper-container">
        <img v-show="!arr.length" class="img" :src="require('@/assets/imgs/a.gif')" alt="">
  			<ul class="row ullist item swiper-wrapper" id="ullist">
  				<li class="movie-item swiper-slide" data-history="1" v-for="item in arr">
  					<router-link :to="'/userMovie/' + item.id">
  						<div class="movie-img">
                <img :src="item.images.small" alt="">      
              </div>
  						<span class="movie-title">{{ item.title }}</span>
  						<div class="grade">
  							<div class="grade-des">
  								<span class="xing">
	  								<span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
	  								<span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
	  								<span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
	  								<span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
	  								<span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
	  							</span>
	  							<span class="grade-des">{{ item.rating.average }}</span>
  							</div>
  						</div>
  					</router-link>
  				</li>
  			</ul>
  		</div>
  	</section>
    <section id="movie-free">
      <div class="free-title">
        <h2 style="display:inline-block;">北美排行榜</h2>
        <span><a href="#">更多</a></span>
      </div>
      <div class="free-content ulwrap">
        <img v-show="!arr1.length" class="img" :src="require('@/assets/imgs/a.gif')" alt="">
        <ul class="row ullist item">
          <li class="movie-item" v-for="item1 in arr1">
            <a href="#">
              <div class="movie-img">
                <img :src="item1.subject.images.small" alt="">      
              </div>
              <span class="movie-title">{{ item1.subject.title }}</span>
              <div class="grade">
                <div class="grade-des">
                  <span class="xing">
                    <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
                    <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
                    <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
                    <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
                    <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
                  </span>
                  <span class="grade-des">{{ item1.subject.rating.max }}</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- 即将上映 -->
    <section id="movie-free">
      <div class="free-title">
        <h2 style="display:inline-block;">即将上映</h2>
        <span><a href="#">更多</a></span>
      </div>
      <div class="free-content ulwrap">
        <img v-show="!arr2.length" class="img" :src="require('@/assets/imgs/a.gif')" alt="">
        <ul class="row ullist item">
          <li class="movie-item" v-for="item2 in arr2">
            <a href="#">
              <div class="movie-img">
                <img :src="item2.images.small" alt="">      
              </div>
              <span class="movie-title">{{ item2.title }}</span>
              <div class="grade">
                <div class="grade-des">
                  <span class="xing">
                    <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
                    <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
                    <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
                    <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
                    <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
                  </span>
                  <span class="grade-des">{{ item2.rating.average }}</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section id="discover">
      <div class="discover-title">
        <h2 style="display:inline-block;">发现好电影</h2>
      </div>
    </section>

    <!-- 分类浏览 -->
    <section id="classify">
      <div class="classify-title">
        <h2 style="display:inline-block;">分类浏览</h2>
      </div>
      <div class="classify-content">
        <ul>
          <li class="even"><a href="#">经典<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="add"><a href="#">冷门佳作<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="even"><a href="#">豆瓣高分<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="add"><a href="#">动作<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="even"><a href="#">喜剧<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="add"><a href="#">爱情<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="even"><a href="#">悬疑<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="add"><a href="#">恐怖<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="even"><a href="#">科幻<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="add"><a href="#">治愈<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="even"><a href="#">文艺<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="add"><a href="#">成长<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="even"><a href="#">动画<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="add"><a href="#">华语<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="even"><a href="#">欧美<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="add"><a href="#">韩国<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="even last"><a href="#">日本<span><img :src="require('@/assets/imgs/right.png')" alt=""></span></a></li>
          <li class="add last">&nbsp;<a href="#"></a></li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
// 引入axios
import axios from 'axios'
import $ from 'jquery'
// console.log($)
console.log($('.row li').length)
export default {
  data () {
    return {
      arr: [],
      arr1: [],
      arr2: []
    }
  },
  created () {
    this._getMoieData()
  },
  methods: {
    getMovie () {
      return axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?count=8')
    },
    getMovie1 () {
      return axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/us_box?count=12')
    },
    getMovie2 () {
      return axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/coming_soon?count=12')
    },
    _getMoieData () {
      axios.all([this.getMovie(), this.getMovie1(), this.getMovie2()]).then(axios.spread((mv, mv1, mv2) => {
        this.arr = mv.data.subjects
        // console.log(this.arr.length)
        this.arr1 = mv1.data.subjects
        this.arr2 = mv2.data.subjects
      }))
    }
  },
  watch: {
    $route () {
      // this._getMoieData()
    }
  }
}
</script>
<style scoped>
  .paged{
  	width:90.4%;
  	height:100%;
    margin:0 auto;
    margin-top:2.3rem;
  }
  #movie-hot,#movie-free,#discover,#classify{
  	padding-top:0.5rem;
  }
  .hot-title,.free-title,.discover-title,.classify-title{
  	height:1.2rem;
  	line-height:1.2rem;
  }
  .hot-title>h2,.free-title>h2,.discover-title>h2,.classify-title>h2{
  	font-size: 0.9rem;
  	font-weight:500;
  	color: #111;
    font-size: 0.8rem;
  }
  .hot-title>span,.free-title>span{
  	float:right;
  }
  .hot-title>span>a,.free-title>span>a{
  	font-size:0.7rem;
  	color:#42bd56;
  }
  .hot-content,.free-content{
  	margin:0.75rem 0 1.0rem 0; 
  }
  .row{
    overflow:hidden;
    height:auto;
  }
  .item>li{
  	width:5.0rem;
  	margin-left: 0.39rem;
  	float:left;
  }
  .item>li:first-child{
  	margin-left: 0;
  }
  .movie-img{
    width:5.0rem;
    height: 7.0rem;
    overflow:hidden;
  }
  .movie-img>img{
    width:100%;
  }
  .movie-title{
  	width:5.0rem;
  	overflow:hidden;
  	text-overflow:ellipsis;
  	white-space: nowrap;
  	display: block;
  	font-size:0.7rem;
  	color:#111;
  	text-align:center;
  	margin-top:0.48rem;
  }
  .grade{
  	height:0.8rem;
  	line-height: 0.8rem;
	  margin-top:0.24rem;
	  font-size: 0.6rem;
  }
  .grade-des{
  	width:4.20rem;
  	margin: 0 auto;
  }
  .xing{
  	text-align: center;
    float: left;
  }
  .xingxing{
  	display:inline-block;
  	width:0.5rem;
  	height:0.5rem;
    background-size:0.5rem 0.5rem;
  }
  .xingxing>img{
    width:0.5rem;
    height:0.5rem;
  }
  /*分类浏览*/
  .classify-content{
    width:90.4%;
    margin:0 auto;
    font-size:0.7rem;
  }
  .classify-content>ul{
    width:100%;
    overflow:hidden;
    height:auto;
    padding:17.92px 0 1.504rem 0;
  }
  .classify-content>ul>li{
    border-top:0.05rem solid #eee;
    float:left;
    width:50%;
    line-height:2.161rem;
  }
  .classify-content>ul>li.even{
    border-right:0.05rem solid #eee;
    width:49%;
  }
  .classify-content>ul>li.last{
    border-bottom:1px solid #eee;
  }
  .classify-content>ul>li>a{
    display: block;
    color:#42bd56;
  }
  .classify-content>ul>li.add>a{
    padding-left:0.896rem;
  }
  .classify-content>ul>li>a>span{
    display:inline-block;
    width:0.9rem;
    height:0.9rem;
    float: right;
    margin-right:0.75rem;
  }
  .classify-content>ul>li.add>a>span{
    margin-right:0;
  }
  .classify-content>ul>li>a>span>img{
    width:100%;
  }
  .img{
    margin-left: 45%;
  }
</style>