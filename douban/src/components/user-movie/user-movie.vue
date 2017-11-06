<template>
  <div class="wrap">
    <div class="down">
      <img :src="require('@/assets/imgs/promotion_bg.jpg')" alt="">
      <div class="down-wrap">
        <div class="down-content">
          <div class="down-left">
            <span>用App打开</span>
            <span>查看影人相册</span>
          </div>
          <div class="down-right">
            <a class="quick-down" href="#">极速下载</a>
            <a class="open" href="#">打开</a>
          </div>
        </div>
      </div>
    </div>
    <div class="vfor">
      <div class="details">
        <h1 class="title1 item">{{ arr.title }}</h1>
        <div class="details-left">
          <div class="test">
            <span class="xing">
              <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
              <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
              <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
              <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
              <span class="xingxing"><img :src="require('@/assets/imgs/xing.png')" alt=""></span>
              <span class="grade">{{ arr.rating.average }}</span>
            </span>
            <span class="appraise">{{ arr.ratings_count }}人评价</span>
          </div>
          <p class="recommend item">
            <span>{{ arr.genres.join('&nbsp;/&nbsp;') }}/</span><span v-for="la in arr.directors">{{ la.name }}(导演)&nbsp;/&nbsp;</span><span v-for="vfo in arr.casts">{{ vfo.name }}&nbsp;/&nbsp;</span><span v-for="vfo in arr.casts">{{ vfo.name }}&nbsp;/&nbsp;</span><span> 2017-11-03(中国大陆) 上映</span>
          </p>
        </div>
        <div class="details-right">
          <a href="#"><img :src=" arr.images.small " alt=""></a>
        </div>
      </div>
        <section class="recommenda">
          <a class="want" href="#">想看</a>
          <a class="watched" href="#">看过</a>
          <a class="save" href="#">在App上保存你的观影足迹</a>
        </section>
        <section class="des-intro">
          <h2 class="intro-title">{{ arr.title }}的剧情简介</h2>
          <p>{{ arr.summary }}</p>
        </section>
    </div>
  </div>
</template>
<script>
  // 引入axios
  import axios from 'axios'

  export default {
    data () {
      return {
        arr: [],
        title: ''
      }
    },
    created () {
      this._getMovie()
    },
    methods: {
      _getMovie () {
        let id = this.$route.params.id
        let url = 'https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'

        // console.log(this.$route.params.id)
        axios.get(url + id).then((res) => {
          // console.log(params.data)
          this.arr = res.data
          console.log(this.arr)
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>
<style scoped>
  .wrap{
    width:100%;
    margin-top:2.3rem;
    overflow: hidden;
  }
  .down{
    height:4.0rem;
    background-size:100% 4.0rem;
  }
  .down-wrap{
    width:90.4%;
    margin:0 auto;
    height:100%;
    position:relative;
  }
  .down>img{
    width:100%;
    height:4.0rem;
    float:left;
  }
  .down-content{
    width:100%;
    overflow:hidden;
    height:auto;
    position:absolute;
    top:0;
    left:0;
  }
  .down-left{
    width:4.2rem;
    height:2.3rem;
    float:left;
    padding-top:0.9rem;
  }
  .down-left>span{
    font-size: 0.7rem;
    color:#2CA532;
    line-height:1.1rem;
  }
  .down-right{
    width:7.7rem;
    height:1.4rem;
    float:right;
    padding:1.2rem 0 0 0.6rem;
  }
  .down-right>a {
    display:inline-block;
    font-size:0.65rem;
    font-weight:bold;
    float:left;
  }
  .quick-down{
    width:2.8rem;
    height:1.3rem;
    line-height:1.3rem;
    border: 0.05rem solid #42bd56;
    padding:0 0.7rem;
    background:#42db56;
    color: #fff;
    border-radius:0.2rem;
  }
  .open{
    width:1.4rem;
    height:1.3rem;
    line-height:1.3rem;
    padding:0 0.7rem;
    margin-left:0.4rem;
    border:0.05rem solid #42db56;
    color:#42db56;
    border-radius:0.2rem;
  }
  /* 主体内容部分 */
  .details{
    width: 90.4%;
    margin:0 auto;
    color:#111;
    margin-bottom:1.5rem;
    overflow:hidden;
  }
  .title1{
    height:1.6rem;
    margin:30px 0 0.25rem 0;
    line-height:1.6rem;
    font-size:1.2rem;
    font-weight:normal;
  }
  .details-left{
    width:10.75rem;
    padding-right:1.2rem;
    float:left;
  }
  .test{
    height:0.95rem;
    line-height: 0.9rem;
    font-size:0.75rem;
  }
  .xingxing{
    display:inline-block;
    width:0.65rem;
    height:0.65rem;
    background-size:0.65rem 0.65rem;
  }
  .xingxing>img{
    width:0.5rem;
    height:0.5rem;
  }
  .grade{
    padding-right:0.4rem;
  }
  .appraise{
    color:#aaa;
  }
  .recommend,.recommenda{
    height:100%;
    width:90.4%;
    margin:0.75rem auto 1.5rem auto;
    font-size:0.7rem;
    line-height:1.6;
    overflow: hidden;
  }
  .details-right{
    float:right;
    width:5.0rem;
    height:7.259rem;
  }
  .details-right>a{
    display:block;
  }
  .details-right>a>img{
    width:100%;
  }
  .recommenda>a{
    display:block;
    float:left;
    border-radius:0.2rem;
  }
  .recommenda>a.want,.recommenda>a.watched{
    width:45%;
    height:1.5rem;
    line-height:1.5rem;
    border:0.05rem solid #ffb712;
    text-align:center;
    color:#ffb712;
  }
  .recommenda>a.watched{
    float: right;
  }
  .save{
    width:99%;
    height:1.55rem;
    line-height:1.55rem;
    padding:0.25rem 0;
    border:0.05rem solid #42db56;
    margin-top:0.75rem;
    color:#42db56;
    text-align:center;
  }
  .des-intro{
    clear: both;
    width:90.4%;
    margin:0 auto;
  }
  .intro-title{
    font-size:0.75rem;
    font-weight:normal;
    color:#aaa;
    margin-bottom:0.75rem;
  }
  .des-intro>p{
    font-size:0.75rem;
    line-height: 1.1rem;
    color:#494949;
  }
</style>