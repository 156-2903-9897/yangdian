<template>
  <div>
    <div style="width: 7.5rem;height: 100%">
      <div class="wwws">
        <div style="width: 7.5rem;height: .73rem;background: #ff9900"></div>
        <div class="div1">
          <div class="zdiv">
            <img src="../../img/cts-191010230215497.png" class="img1" />
          </div>
          <div class="z1div">个人中心</div>
          <div class="youdiv">
            <img src="../../img/cts-191010230215500.png" class="imgy" />
          </div>
        </div>
        <div style="width: 7.5rem;height: 2.5rem;background: #ff9900;position: relative">
            <div class="paoss">
                <img :src="brr.url" class="ydimg" v-show="flag"/>
            </div>
        </div>
      </div>
      <div class="xdiv"></div>
      <div class="xdiv">
        <span class="dl" @click="aas">{{brr.length == 0?'点击登录' : brr.name}}</span>
      </div>
      <div class="div111">
        <span class="ssc">我的收藏</span>
        <span class="ingspan"></span>
      </div>
      <div style="width: 7.5rem;height: .15rem;background: #efeeee"></div>
      <div class="ibs">
        <div class="ddan">我的订单</div>
        <div style="font-size: .33rem;color: #999999;float: right;line-height:1.25rem">查看全部订单</div>
      </div>
      <div style="width: 7.5rem;height:1.9rem" class="aaa">
        <div class="divday1">
          <img src="../../img/cts-191010230150361.png" class="day1" />
          <span class="dayspan1">代付款</span>
        </div>
        <div class="divday1">
          <img src="../../img/cts-191010230150150.png" class="day1" />
          <span class="dayspan1">待发货</span>
        </div>
        <div class="divday1">
          <img src="../../img/cts-191010230150359.png" class="day1" />
          <span class="dayspan1">待收货</span>
        </div>
        <div class="divday1">
          <img src="../../img/cts-191010230150449.png" class="day1" />
          <span class="dayspan1">待评价</span>
        </div>
        <div class="divday1">
          <img src="../../img/cts-191010230150654.png" class="day1" />
          <span class="dayspan1">退款/售后</span>
        </div>
      </div>
      <span class="sspa">
        <p>收货地址管理</p>
      </span>
    </div>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from "../pages/tabBar";

export default {
    data(){
        return{
            brr:[],
            flag:true
        }
    },
    components:{
        tabBar,
    },
    methods:{
        aas(){
            this.$router.push({path:'/login'})
        },
        // tui(){
        //     sessionStorage.clear
        // }
    },
    mounted(){
        this.brr = JSON.parse(sessionStorage.getItem('arr'))
        console.log(this.brr)

        if(this.brr==0){
            this.flag = false
        } else{
            this.flag = true
        }
    }
};
</script>

<style scoped>
.div1 {
  width: 7.5rem;
  height: 0.54rem;
  background: #ff9900;
}
.zdiv {
  width: 0.8rem;
  height: 0.54rem;
  background: #ff9900;
  float: left;
}
.img1 {
  display: block;
  width: 0.51rem;
  height: 0.53rem;
  margin-left: 0.29rem;
}

.wwws{
    width: 100%;
    background: #ff9900;
}
.z1div {
  width: 5.61rem;
  height: 0.48rem;
  float: left;
  font-size: 0.41rem;
  color: #fefefe;
  text-align: center;
}
.youdiv {
  margin-top: 0.05rem;
  width: 1.02rem;
  height: 0.54rem;
  float: left;
}
.imgy {
  display: block;
  width: 0.56rem;
  height: 0.45rem;
}

.paoss{
    width: 2.3rem;
    height: 2.3rem;
    position: absolute;
    left: 2.4rem;
    top: .9rem;
    background-color: #e6dfdf;
    /* background: #e6dfdf; */
    border-radius: 50%;
    /* border: .1rem solid #FFF; */
}
.ydimg {
  /* position: absolute;
  left:0rem;
  top: 0rem; */
  border: .1rem solid #FFF;
  width: 2.08rem;
  height: 2.08rem;
  border-radius: 50%;
}
.xdiv {
  width: 7.5rem;
  height: 0.71rem;
  background: #fafafa;
}
.dl {
  display: block;
  font-size: 0.32rem;
  line-height: 0.71rem;
  margin-left: -0.2rem;
  text-align: center;
}
.div111 {
  width: 7.15rem;
  height: 0.37rem;
  padding-left: 0.35rem;
  padding-top: 0.38rem;
  padding-bottom: 0.27rem;
  position: relative;
  background: #fafafa;
}
.ingspan {
  display: block;
  width: 0.38rem;
  height: 0.36rem;
  position: absolute;
  left: 0.35rem;
  top: 0.39rem;
  background: url("../../img/cts-191010230215505.png");
  background-size: 100% 100%;
}
.ibs {
  width: 7.5rem;
  height: 1.25rem;
  background: #fafafa;
  border-bottom: 0.01rem solid #b3b3b3;
}
.ssc {
  display: block;
  width: 80%;
  font-size: 0.33rem;
  text-align: left;
  margin-left: 0.67rem;
}
.ddan {
  font-size: 0.33rem;
  float: left;
  line-height: 1.25rem;
  margin-left: 0.47rem;
}
.day1 {
  display: block;
  width: 0.54rem;
  height: 0.47rem;
  margin-left: 0.4rem;
}
.aaa {
  display: flex;
}
.divday1 {
  flex: 1;
  height: 1.4rem;
  background: #fafafa;
  padding-top: 0.5rem;
  float: left;
}
.dayspan1 {
  display: block;
  font-size: 0.23rem;
  margin-top: 0.27rem;
  /* margin-left: -0.23rem; */
  text-align: center;
}

.sspa {
  width: 100%;
  display: block;
  font-size: 0.33rem;
  line-height: 1.25rem;
  text-align: left;
  background: #fafafa;
  border-top: 0.15rem solid #efeeee;
}

.sspa p {
  margin-left: 0.4rem;
}
</style>