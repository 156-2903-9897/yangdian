<template>
    <div class="content_er_rit">
        <ul>
            <li class="content_er_rit_li" v-for="(a,i) in arr" :key="i">
                <img :src="a.thumbnail" alt="">
                <p>{{a.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[]
        }
    },
    mounted(){
        this.$http({
            url:`http://yd.msword.top/getClassify`
        }).then((res) =>{
            // console.log(res.data.data["0"].list["0"].thumbnail)
            this.arr = res.data.data["4"].list
        })
    }
}
</script>

<style scoped>
.content_er_rit{
    margin: 0 auto;
}

.content_er_rit_li{
    width: 2.36rem;
    height: 2.4rem;
    float: left;
    margin: 0 .1rem;
    border-radius: .03rem;
    border: .01rem solid #1d84a7;
    margin-top: .2rem;
}

.content_er_rit_li img{
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    margin: 0 auto;
}

.content_er_rit_li p{
    height: .6rem;
    background: #1d84a7;
    text-align: center;
    line-height: .6rem;
    font-size: .24rem;
}
</style>