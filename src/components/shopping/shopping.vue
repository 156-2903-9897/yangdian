<template>
    <div class="top">
        <div class="shop">
            <div class="shop_top">
                <div class="shop_che">
                    <div class="shop_tou">
                        <span @click="up()"></span>
                    </div>
                    <p class="shop_gwc">购物车</p>
                </div>
            </div>
        </div>

        <div class="kong" v-show="!flag">
            <div class="kongde">
                <span class="kongspan"></span>
                <p>购物车还是空的快去逛逛吧~</p>
            </div>
        </div>


        <div class="shop_sp" v-show="flag">
            <ul>
                <li class="shop_li" v-for="(a,i) in arr" :key='i'>
                    <div class="spa_div">
                        <span class="spa1"></span>
                        <p class="spa2">杭州保税区仓</p>
                    </div>
                    <div class="spa_div1">
                        <span class="spa3"></span>
                        <img :src="a.url" alt="">
                        <div class="aaa">
                            <div class="sss">
                                <p>{{a.name}}<span></span></p>
                            </div>
                            <div class="the_to_ppp">
                                <span class="sp1" @click="jian(i)">-</span>
                                <input class="sp3" type="text" v-model="a.mun">
                                <span class="sp2" @click="add(i)">+</span>
                            </div>
                        </div>
                        <span class="sspaa">￥{{a.jia}}</span>
                    </div>
                </li>
            </ul>
        </div>

        <div class="wsss">
            <div class="wsss_1">
                <div class="wsss_1_l">
                    <span class="span1"></span>
                    <p>全选</p>
                </div>
                <div class="wsss_1_r">
                    <span class="span2"></span>
                    <p>编辑</p>
                </div>
            </div>
            <div class="wsss_2">
                <p>合计:118:00</p>
                <p>(不含运费)</p>
            </div>
            <div class="wsss_3">
                <p>去结算</p>
            </div>
        </div>

        <tabBar></tabBar>
    </div>
</template>

<script>
import tabBar from "../pages/tabBar";

export default {
    components:{
        tabBar,
    },
    data(){
        return{
            arr:[],
            flag:false,
        }
    },
    mounted(){
        for(var i = 0 ; i <  sessionStorage.length ; i++ )
        this.arr.push(JSON.parse(sessionStorage.getItem(i)));
        console.log(this.arr);
        if(this.arr.length == 0){
            this.flag = false
        }else {
            this.flag = true
        }
    },
    methods:{
        add(i, ev) {
            this.arr[i].mun++;
        },
        jian(i, ev) {
            if (this.arr[i].mun > 0) {
                this.arr[i].mun--;
            }
        },
        up(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}

.top{
    width: 100%;
    background: #fafafa;
    margin-bottom: 1.2rem;   
}

/* .oooooo{
    padding-bottom: 1.4rem;
} */

.kong{
    width: 100%;
}

.kongde{
    width: 100%;
    height: 10.8rem;
    background: #fafafa;
    position:relative;
}

.kongspan{
    width: .9rem;
    height: .9rem;
    display: block;
    background: url(../../img/tab_shopping_nor.png) no-repeat;
    background-size: .9rem .9rem;
    position: absolute;
    top: 4rem;
    left: 3.3rem;
}


.kongde p{
    width: 2.8rem;
    height: 1rem;
    text-align: center;
    line-height: .5rem;
    font-size: .35rem;
    margin: 0 auto;
    position: absolute;
    top: 5.2rem;
    left: 2.5rem;
}

.shop{
    width: 7.5rem;
}

.shop_top{
    width: 7.1rem;
    height: 1.3rem;
    background: #ff9900;
    padding: 0 .2rem 0 .2rem;
}

.shop_che{
    padding-top: .3rem;
    width: 7.1rem;
    height: 1rem;
    position: relative;
    /* background: #ff9900;
    padding: 0 .2rem 0 .2rem; */
}

.shop_tou{
    display: inline-block;
    width: .8rem;
    height: 1rem;
    position: relative;
}

.shop_tou span{
    display: inline-block;
    width: .25rem;
    height: .25rem;
    border-bottom: .03rem solid #fff;
    border-left:  .03rem solid #fff;
    transform: rotate(45deg);
    position: absolute;
    left: .2rem;
    top: .4rem
}

.shop_che p{
    display: inline-block;
    position: absolute;
    top: .6rem;
    right: 3.3rem;
    font-size: .43rem;
    line-height: .43rem;
    color: #fff;
}

.shop_sp{
    width: 7.1rem; 
    /* padding-bottom: 1.2rem;    */
}

.shop_li{
    width: 7.1rem;    
    height: 3rem;
    background: #fafafa;
    padding-left: .36rem;
    padding-top: .3rem;
}

.spa1{
    display: inline-block;
    width: .4rem;
    height: 0.4rem;
    background: url(../../img/sp1.png) no-repeat;
    background-size: .4rem .4rem;
    margin-right: .2rem;
}

.spa2{
    display: inline-block;
    font-size: .3rem;
    height: .4rem;
    line-height: .4rem;
    vertical-align: top;
}

.spa_div{
    height: .4rem;
}

.spa_div1{
    width: 100%;
}

.spa3{
    display: inline-block;
    width: .5rem;
    height: .5rem;
    background: url(../../img/1570627086.jpg) no-repeat;
    background-size: .5rem .5rem;
    margin-top: 1rem;
    margin-right: .2rem;
    float: left;
}

.spa_div1 img{
    width: 1.6rem;
    height: 1.6rem;
    margin-top: .5rem;
    float: left;
}

.aaa{
    float: left;
    margin-top: .5rem;
    margin-left: .2rem;
}

.sss{
    width: 3rem;
    height: 1rem;
    display:block;
}

.sss p{
    font-size: .33rem;
    color: #333333;
    display: inline-block;
}

.sss span{
    display: inline-block;
    font-size: .26rem;
    color: #ccc;
}

.the_to_ppp{
    width: 2.4rem;
    border: .01rem solid #ccc; 
}

.sp1{
    display: inline-block;
    width: .74rem;
    height: .4rem;
    text-align: center;
    border-right: .01rem solid #ccc;
    font-size: .3rem;
}

.sp2{
    display: inline-block;
    width: .74rem;
    height: .4rem;
    text-align: center;
    font-size: .3rem;
}

.sp3{
    display: inline-block;
    width: .74rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    border: none;
    border-right: .01rem solid #ccc;
    font-size: .26rem;
}

.sspaa{
    margin-top: 1rem;
    display: inline-block;
    font-size: .34rem;
    font-weight: bolder;
    margin-left: .2rem;
}

.wsss{
    display: flex;
    width: 7.5rem;
    height: 1.2rem;
    /* background: red; */
    position: fixed;
    bottom: 1.2rem;
    background: #fff;
}

.wsss_1{
    /* width: 34%; */
    flex: 1;
    height: 1.2rem;
    /* background: skyblue; */
    display: flex;
}

.wsss_1_l{
    flex: 1;
    /* text-align: center;
    margin: 0 auto;
    line-height: 1.2rem; */
}

.wsss_1_l p{
    height: .3rem;
    font-size: .26rem;
    margin-top: .1rem;
    margin-left: .3rem;
    display: inline-block;
    color: #999999;
}

.wsss_1_r p{
    height: .3rem;
    font-size: .26rem;
    margin-top: .1rem;
    margin-left: .3rem;
    display: inline-block;
    color: #999999;
}

.wsss_1_r{
    flex: 1;
}

.wsss_1 .span1{
    background: url(../../img/cts-191010222248415.png) no-repeat;
    background-size: .5rem .5rem;
    width: .5rem;
    height: .5rem;
    display: inline-block;
    margin-top: .2rem;
    margin-left: .3rem;
}

.wsss_1 .span2{
    background: url(../../img/cts-191009211533304.png) no-repeat;
    background-size: .5rem .5rem;
    width: .5rem;
    height: .5rem;
    display: inline-block;
    margin-top: .2rem;
    margin-left: .3rem;
}

.wsss_2{
    flex: 1;
    height: 1.2rem;
    /* background: #ff9900; */
    text-align: center;
    padding-top: .35rem;
    line-height: .3rem;
    font-size: .24rem;
    color: #c6c6c6;
}

.wsss_3{
    flex: 1;
    height: 1.2rem;
    background: #ccc;
    text-align: center;
    padding-top: .4rem;
    line-height: .3rem;
    font-size: .38rem;
    background: #ff5500;
    color: #fff;
}
</style>
