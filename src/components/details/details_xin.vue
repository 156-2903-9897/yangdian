<template>
  <div>
    <div class="gdd">
      <div class="gdd_he">
        <!-- 详情图片 -->
        <div class="gdd_he_s">
          <span :class="{active:0===i}" class="gdd_he_l_l" @click="sek()">商家详情</span>
          <span :class="{active:1===i}" class="gdd_he_l_r" @click="sed()">买家口碑</span>
        </div>
        <div class="gdd_he_s_l" v-show="flag">
          <ul>
            <li v-for="(a,i) in arr" :key="i">
              <img :src="a" alt />
            </li>
          </ul>
        </div>

        <!-- 评价 -->
        <div class="gdd_he_s_r" v-show="!flag">
          <div class="gdd_all">
            <ul>
              <li :class="{actives:0===y}" @click="all()">全部评价</li>
              <li :class="{actives:1===y}" @click="good()">好评</li>
              <li :class="{actives:2===y}" @click="cha()">差评</li>
              <li :class="{actives:3===y}" @click="dan()">晒单</li>
            </ul>
          </div>
          <div class="all">
            <div class="all_sin" v-for="(a,i) in brr" :key="i">
              <div class="all_time">
                <p>{{a.buyerName}}</p>
                <span>{{a.createTime|fun}}</span>
              </div>
              <div class="all_sin_img">
                <ul>
                  <li v-for="(x,y) in a.postImg" :key="y">
                    <img :src="x" alt />
                  </li>
                </ul>
              </div>
              <div class="p3">
                <p class="p1">{{a.postDescribe}}</p>
                <p class="p2">{{a.adminReviews}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="bot">
      <div class="bot_pri">
        <p>总价：</p>
        <span>￥{{hrr.reduct_price*mun}}.00</span>
      </div>
      <div class="bot_sp">
        <span class="span1" @click="car()">加入购物车</span>
        <span class="span2" @click="sss()">立即购买</span>
      </div>
    </div>

    <!-- 弹出购物车 -->
    <div class="the clearfix" v-show="flags">
      <div class="the_to clearfix">
        <div class="the_to_top clearfix">
          <img :src="grr[0]" alt />
          <div class="the_to_sp clearfix">
            <span class="the_to_sp_span1">￥{{hrr.reduct_price}}.00</span>
            <span class="the_to_sp_span2">库存{{hrr.total}}件</span>
            <p>请选择商品属性</p>
          </div>
          <span class="the_to_sss" @click="exit()"></span>
          <div class="the_to_sc">
            <p>购买数量</p>
            <div class="the_to_ppp">
              <span class="sp1" @click="jian(i,$event)">-</span>
              <input type="text" v-model="mun" />
              <span class="sp2" @click="add(i,$event)">+</span>
            </div>
          </div>
        </div>
        <div class="the_to_bot clearfix">
          <div class="the_to_bot_top">
            <p>{{lrr.name}}</p>
            <ul>
              <li v-for="(a,i) in lrr.list" :key="i" :class="{act:i===z}" @click="aaa(i)">{{a}}</li>
            </ul>
          </div>
          <div class="the_to_bot_top">
            <p>{{krr.name}}</p>
            <ul>
              <li v-for="(a,i) in krr.list" :key="i" :class="{act:i===g}" @click="abc(i)">{{a}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  filters:{
    fun(val){
      return  moment(Number(val)).format("YYYY-MM-DD")
    }
  },
  data() {
    return {
      arr: [],
      brr: [],
      crr: [],
      drr: [],
      err: [],
      frr: [],
      grr: [],
      hrr: [],
      lrr: [],
      krr: [],
      mrr: [],
      // frr:['brr','crr','drr','err'],
      flag: true,
      flags: false,
      // fla:
      i: 0,
      y: 0,
      z: 0,
      g: 0,
      mun: 1,
    };
  },
  mounted() {
    this.$http({
      url: "http://yd.msword.top/getDetails?pid=" + this.$route.query.pid
    }).then(res => {
      // console.log(res.data.data.swiperImgArr)
      this.arr = res.data.data.shopDes;
      // console.log(res.data.data.buyerReviews.good)
      // console.log(res.data.data.buyerReviews.all[0].postImg)
      // console.log(res.data.data.buyerReviews.all)
      // console.log(res.data.data.buySelect)
      this.brr = res.data.data.buyerReviews.all;
      this.crr = res.data.data.buyerReviews.good;
      this.drr = res.data.data.buyerReviews.bad;
      this.err = res.data.data.buyerReviews.postForm;
      this.frr = res.data.data.buyerReviews.all;
      // console.log(res.data.data.swiperImgArr)
      this.grr = res.data.data.swiperImgArr;
      this.hrr = res.data.data;
      console.log(res.data.data);
      this.lrr = res.data.data.buySelect[0];
      this.krr = res.data.data.buySelect[1];
    });
    for (let i = 0; i < sessionStorage.length; i++) {
      this.mrr.push(JSON.parse(sessionStorage.getItem(i)));
    }
    console.log(this.mrr);
    console.log(sessionStorage.length);
  },
  methods: {
    sek() {
      this.flag = true;
      this.i = 0;
    },
    sed() {
      this.flag = false;
      this.i = 1;
    },
    good() {
      this.brr = this.crr;
      this.y = 1;
    },
    cha() {
      this.brr = this.drr;
      this.y = 2;
    },
    dan() {
      this.brr = this.err;
      this.y = 3;
    },
    all() {
      this.brr = this.frr;
      this.y = 0;
    },
    car(){
      console.log(123);
      this.flags = !this.flags;
      // console.log(this.flags);
      if (!this.flags) {
        var obj = {
          id: this.hrr.pid,
          mun: Number(this.mun),
          // a : this.hrr.buySelect[0].list[this.lll],
          // b : this.hrr.buySelect[1].list[this.nnn],
          name: this.hrr.name,
          url: this.hrr.swiperImgArr[0],
          jia: Number(this.hrr.reduct_price*this.mun)
        };
        // this.$router.push({
        //   path:"/shopping",
        // });
        if (this.mrr.length == 0) {
          sessionStorage.setItem(0, JSON.stringify(obj));
        }else{
            this.mrr.every((val, ind) => {
            if (obj.id === val.id) {
              val.mun = Number(val.mun)+obj.mun
              val.jia = Number(val.jia)+(this.hrr.reduct_price*obj.mun)
              sessionStorage.setItem(ind,JSON.stringify(this.mrr[ind]))
              return false;
            } 
          console.log(val.jia)
          if(obj.id!== val.id) {
             sessionStorage.setItem(this.mrr.length,JSON.stringify(obj))
             return false
          }
        });
        }
      }
    },
    sss() {
      this.$router.push({
          path:"/shopping",
        });
    },
    exit() {
      this.flags = false;
    },
    aaa(i) {
      this.z = i;
    },
    abc(i) {
      this.g = i;
    },

    add(i, ev) {
      this.mun++;
    },
    jian(i, ev) {
      if (this.mun > 0) {
        this.mun--;
      }
    }
  }
};
</script>

<style scoped>
.gdd {
  width: 7.5rem;
}

.gdd_he {
  width: 7.5rem;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.28rem;
  color: #9d9d9d;
}

.gdd_he_s {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #999999;
}

.gdd_he_l_l {
  width: 50%;
  flex: 1;
  text-align: center;
}

.gdd_he_l_r {
  width: 50%;
  flex: 1;
  text-align: center;
}

.active {
  padding-bottom: 0.1rem;
  border-bottom: 0.03rem solid #ff9900;
  color: #ff9900;
}

.gdd_he_s_l {
  padding: 0 0.5rem 0.8rem;
}

.gdd_he_s_r {
  margin-bottom: 1rem;
}

.gdd_he_s_l img {
  width: 6.5rem;
  height: 4.3rem;
}

.gdd_all ul {
  display: flex;
  width: 6.9rem;
  height: 0.7rem;
  padding: 0 0.3rem;
  justify-content: space-around;
  border-bottom: 0.01rem solid #999999;
}

.gdd_all li {
  flex: 1;
  width: 25%;
  height: 0.5rem;
  line-height: 0.5rem;
  margin-top: 0.1rem;
  text-align: center;
  background: #999999;
  color: #fff;
  font-size: 0.24rem;
  border-radius: 0.4rem;
}

.all {
  width: 6.9rem;
  padding: 0 0.3rem;
}

.all_sin {
  width: 100%;
  position: relative;
  padding-bottom: 0.2rem;
  border-bottom: 0.01rem solid #dddddd;
}

.all_time {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
}

.all_time p {
  display: inline-block;
  color: #ff9900;
  font-size: 0.3rem;
}

.all_time span {
  float: right;
  font-size: 0.16rem;
}

.all_sin_img {
  height: 1.5rem;
}

.all_sin_img ul {
  height: 1.5rem;
}

.all_sin_img li {
  width: 1.5rem;
  height: 1.5rem;
  float: left;
}

.all_sin_img img {
  width: 1.5rem;
  height: 1.5rem;
}

.all_sin .p1 {
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.2rem;
  color: #999999;
}

.all_sin .p2 {
  font-size: 0.2rem;
  color: #666666;
  border-radius: 0.1rem;
  background: #dddddd;
  height: 0.8rem;
  line-height: 0.4rem;
  padding: 0 0.2rem;
}

.gdd_all .actives {
  background: #ff9900;
}

.bot {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background: #fff;
}

.bot_pri {
  flex: 1;
  line-height: 1rem;
}

.bot_pri p {
  font-size: 0.35rem;
  display: inline-block;
  padding-left: 0.4rem;
}

.bot_pri span {
  font-size: 0.35rem;
  display: inline-block;
  color: #eb2222;
}

.bot_sp {
  flex: 1;
  background: blue;
  display: flex;
  justify-content: space-around;
}

.bot_sp .span1 {
  flex: 1;
  background: #ff9900;
  font-size: 0.28rem;
  text-align: center;
  line-height: 1rem;
  color: #fff;
}

.bot_sp .span2 {
  flex: 1;
  background: #eb2222;
  font-size: 0.28rem;
  text-align: center;
  line-height: 1rem;
  color: #fff;
}

.the {
  width: 100%;
  position: fixed;
  bottom: 1rem;
  background: #fff;
}

.the_to {
  width: 6.9rem;
  padding: 0rem 0.3rem;
  height: 5.7rem;
}

.the_to_top {
  width: 100%;
  position: relative;
  height: 3rem;
}

.the_to_top img {
  width: 1.84rem;
  height: 2rem;
  border: 0.08rem solid #dddddd;
  border-radius: 0.1rem;
  float: left;
}

.the_to_sp {
  width: 3rem;
  height: 1.8rem;
  position: absolute;
  left: 2.3rem;
}

.the_to_sc {
  width: 100%;
  position: absolute;
  top: 2.3rem;
  height: 0.7rem;
  line-height: 0.7rem;
}

.the_to_sp_span1 {
  display: block;
  margin-top: 0.8rem;
  font-size: 0.3rem;
  color: #eb2222;
  line-height: 0.4rem;
}

.the_to_sp_span2 {
  display: block;
  font-size: 0.24rem;
  color: #333;
  line-height: 0.35rem;
}

.the_to_sp p {
  display: block;
  font-size: 0.24rem;
  color: #333;
  line-height: 0.35rem;
}

.the_to_sss {
  background: url(../../img/cts-191010223310601.jpg) no-repeat;
  background-size: 0.6rem 0.6rem;
  background-color: #9e9e9e;
  width: 0.6rem;
  height: 0.6rem;
  position: absolute;
  right: 0;
  top: 0.5rem;
}

.the_to_sc p {
  display: inline-block;
  font-size: 0.3rem;
}

.the_to_ppp {
  display: inline-block;
  position: absolute;
  right: 0;
  margin-top: 0.1rem;
}

.sp1 {
  background: url(../../img/2.jpg);
  background-size: 0.5rem 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  display: inline-block;
  font-size: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  color: #fff;
}

.sp2 {
  background: url(../../img/2.jpg);
  background-size: 0.5rem 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  display: inline-block;
  font-size: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  color: #fff;
}

.the_to_ppp input {
  width: 1rem;
  height: 0.46rem;
  /* border:.02rem solid #999999; */
  /* border-left: none;
    border-right: none; */
  display: inline-block;
  font-size: 0.3rem;
  line-height: 0.46rem;
  text-align: center;
  font-style: normal;
}

.the_to_bot {
  width: 100%;
  height: 2.8rem;
  margin-bottom: 1.1rem;
}

.the_to_bot_top {
  width: 100%;
  height: 1.4rem;
}

.the_to_bot_top p {
  font-size: 0.3rem;
  line-height: 0.5rem;
}

.the_to_bot_top ul {
  width: 100%;
  height: 0.9rem;
}

.the_to_bot_top li {
  font-size: 0.3rem;
  width: 1.2rem;
  height: 0.5rem;
  background: #dddddd;
  border-radius: 0.3rem;
  text-align: center;
  line-height: .5rem;
  margin-top: 0.2rem;
  color: #999999;
  float: left;
  margin-right: 0.3rem;
}

.the_to_bot_top .act {
  background: #ff9900;
  color: #fff;
}
</style>