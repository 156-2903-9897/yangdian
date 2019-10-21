<template>
    <div>
        <div class="toptu"></div>
        <!-- 头部banner -->
        <div class="top_ban">
            <span class="top_ban_span1" @click="ssg"></span>
            <span class="top_ban_span2"></span>
            <span class="top_ban_span3"></span>
            <div class="ssssss">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(a,i) in arr" :key='i'>
                            <img :src="a" alt="">
                        </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
    data(){
        return{
            arr:[],
        }
    },
    mounted(){
        this.$http({
            url:'http://yd.msword.top/getDetails?pid='+this.$route.query.pid
        }).then((res) =>{
            // console.log(res.data.data)
            this.arr = res.data.data.swiperImgArr
            this.$nextTick(()=>{
                var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    });
            })
        })
    },
    methods:{
        ssg(){
            this.$router.push({
                path:"/",
            });
        }
    }

}
</script>

<style scoped>

.toptu{
    width: 100%;
    height: .4rem;
    background: #ff9900;
}

.top_ban{
    width: 100%;
    height: 5.4rem;
    background: #fff;
    position: relative;
    border: .01rem solid #eeeeee;
}

/* .top_ban_img{
    width: 5.7rem;
    height: 5rem;
    margin-left: .86rem;
    margin-top: .2rem;
    float: left;
} */

.top_ban_span1{
    background: url(../../img/zu1.png) no-repeat;
    background-size: .56rem .56rem;
    width: .56rem;
    height: .56rem;
    display: inline-block;
    position: absolute;
    left: .22rem;
    top: .1rem;
    z-index: 999;
}

.top_ban_span2{
    background: url(../../img/zu2.png) no-repeat;
    background-size: .56rem .56rem;
    width: .56rem;
    height: .56rem;
    display: inline-block;
    position: absolute;
    right: 1.2rem;
    top: .1rem;
     z-index: 999;
}

.top_ban_span3{
    background: url(../../img/zu3.png) no-repeat;
    background-size: .56rem .56rem;
    width: .56rem;
    height: .56rem;
    display: inline-block;
    position: absolute;
    right: .3rem;
    top: .1rem;
     z-index: 999;
}


.ssssss {
      position: relative;
      height: 100%;
    }
.ssssss {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
 .swiper-container {
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;

    }
</style>