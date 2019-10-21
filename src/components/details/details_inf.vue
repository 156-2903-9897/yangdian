<template>
    <div>
        <div class="inf clearfix">
            <div class="inf_top clearfix">
                <p>{{arr.name}}</p>
                <span></span>
                <em>收藏</em>
            </div>               
            <div class="inf_bot clearfix">
                <div class="inf_bot_l clearfix">
                    <em>￥{{arr.reduct_price}}.00</em>
                    <i>￥{{arr.original_price}}.00</i>
                </div>
                <div class="inf_bot_r clearfix">
                    <ul class="inf_bot_rt_ul">
                        <li>{{(arr.allowance*10).toFixed('1')}}折</li>
                        <li>{{arr.isFreeShip  == true ?"包邮" : "不包邮"}}</li>
                    </ul>
                    <ul class="inf_bot_rb_ul">
                        <li v-for='(a,i) in brr' :key="i">
                            {{a}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[],
            brr:[],
        }
    },
    mounted(){
        this.$http({
            url:'http://yd.msword.top/getDetails?pid='+this.$route.query.pid
        }).then((res) =>{
            // console.log(res.data.data)
            this.arr = res.data.data
            this.brr = res.data.data.describe
        })
    }

}

</script>

<style scoped>
.inf{
    width: 100%;
    height: 2.05rem;
    border-bottom: .3rem solid #ddd;
}

.inf_top{
    width: 100%;
    height: .8rem;
    padding-top: .1rem;
}

.inf_top p{
    font-size: .3rem;
    height: .8rem;
    line-height: .4rem;
    width: 5.9rem;
    padding: 0 .3rem;
    float: left;
    border-right:.01rem solid #dddddd;
}

.inf_top span{
    display: inline-block;
    width: .35rem;
    height: .35rem;
    background: url(../../img/sou.png) no-repeat;
    background-size: .35rem .35rem;
    margin:.1rem .32rem 0;
}

.inf_top em{
    font-style: normal;
    font-size: .16rem;
    margin-left: .25rem ;
}

.inf_bot{
    width: 100%;
    height: 1rem;
    margin-top: .1rem;
}

.inf_bot_l{
    width: 1.7rem;
    padding: 0 0 0 .3rem;
    height: 1rem;
    float: left;
}

.inf_bot_l em{
    font-size: .38rem;
    font-style: normal;
    color: #eb2222;
    line-height: .5rem;
}

.inf_bot_l i{
    font-style: normal;
    font-size: .26rem;
    text-decoration: line-through;
    line-height: .5rem;
}

.inf_bot_r{
    width: 5.2rem;
    float: right;
    height: 1rem;
    padding-left: .3rem
}

.inf_bot_rt_ul{
    width: 5.2rem;
    float: left;
    display: block;
    height:.6rem;
    line-height: .6rem;
}

.inf_bot_rt_ul li{
    display: inline-block;
    width: .7rem;
    height: .3rem;
    background: #ff9900;
    color: #fff;
    text-align: center;
    line-height: .3rem;
    font-size: .2rem;
}

.inf_bot_rb_ul{
    width: 5.2rem;
    height: .5rem;
    display: block;
}

.inf_bot_rb_ul li{
    display: inline-block;
    padding:0 .12rem;
    height: .26rem;
    border: .02rem solid #ff9900;
    color: #ff9900;
    line-height: .26rem;
    font-size: .2rem;
}

</style>