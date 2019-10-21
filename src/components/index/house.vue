<template>
    <div>
        <div class="content_top">
            <div class="content_snap">
                <div class="content_snap_dss">
                    <span class="content_snap_span"></span>
                    <h3 class="content_snap_h3">{{drr}}</h3>
                </div>
                <ul class="content_snap_ul">
                    <li class="content_snap_li" v-for='(a,i) in arr' :key='i' @click="sed(a['id'])">
                            <img :src="a.thumbnail" alt="" class="content_li_img1">
                            <span class="content_li_hong">￥{{a.reduct_price}}</span>
                            <span class="content_li_zheng">¥{{a.original_price}}</span>
                            <p class="content_li_pi">{{a.name}}</p>
                    </li>
                    <!-- <li class="content_snap_li"></li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            drr:{},
            arr:[],
        }
    },
    mounted(){
        this.$http({
            url:'http://yd.msword.top/getIndexData'
        }).then((res)=>{
            // console.log(res.data.data[0].list)
            this.arr = res.data.data[3].list
            this.drr = res.data.data[3].name
        })
    },
    methods:{
        sed(pid){
        console.log(pid,'1')
        this.$router.push({
            path:'/details',
            query:{
                pid
            }
        })
    }
    }
}
</script>

<style scoped>
.content_top{
    width: 7.3rem;
    /* padding-left: .2rem; */
}

.content_snap{
    width: 7.5rem;
    height: 5.55rem;
    /* background: red; */
}

.content_snap_span{
    width: .3rem;
    height: .4rem;
    /* border: 1px solid; */
    display: inline-block;
    background: url(../../img/furniture.png) no-repeat;
    background-size: .3rem .38rem;
    line-height: .85rem;
    position: absolute;
    top: .2rem;
}

.content_snap_h3{
    display: inline-block;
    line-height: .85rem;
    position: absolute;
    left: .7rem;
    font-size: .3rem;
}

.content_snap_dss{
    width: 7.3rem;
    height: .85rem;
    position: relative;
    padding-left: .2rem;
}


.content_snap_ul{
    height: 4.7rem;
    /* background: red; */
    overflow:scroll;
}

.content_snap_li{
    width: 3.25rem;
    height: 4.68rem;
    border: 1px solid #f3f3f3;
    float: left;
    margin-left: .3rem;
    background: #fff;
}

.content_li_img1{
    display: block;
    width: 2.25rem;
    height: 3.4rem;
    margin: 0 auto;
}

.content_li_hong{
    color: #e60012;
    font-size: .33rem;
    float: left;
    margin-left: .3rem;
}

.content_li_zheng{
    color:#666666;
    font-size: .28rem;
    float: right;
    margin-right: .4rem;
}

.content_li_pi{
    color: #666666;
    float: left;
    font-size: .3rem;
    margin: 0 .5rem 0 .2rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break:break-all;
    /* word-wrap:break-word; */
    overflow: hidden;
}
</style>