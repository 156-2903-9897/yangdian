<template>
    <div class="top">
        <div class="shop">
            <div class="shop_top">
                <div class="shop_che">
                    <div class="shop_tou">
                        <span @click="up()"></span>
                    </div>
                    <p class="shop_gwc">
                        <span>登录</span>
                        <span class="sp2" @click="deng()">注册</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="login">
            <div>
                <div class="tel">
                    手机号 : <input type="text" v-model="phone">
                </div>
                <div class="tel">
                    密&nbsp;&nbsp; 码 : <input type="password" v-model="password">
                </div>
                <div>
                    <p class="ppp">忘记密码</p>
                </div>
                <div class="xia" @click="den()">
                    <span>登录</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            phone:'',
            password:''
        }
    },
    methods:{
        up(){
            this.$router.go(-1)
        },
        deng(){
            this.$router.push({
                path:'/register',
            })
        },
        den(){
            var tel = /^1[3-9][0-9]{9}$/;
            var pas = /^\w{6,18}$/;
            if (this.phone == "" || this.password == "") {
                alert("有选项未填");
                console.log(this.phone);
            } else if (!tel.test(this.phone)) {
                alert("输入正确手机号");
            } else if (!pas.test(this.password)) {
                alert("密码不能少于六位");
            } else{
                let _this = this;
                this.$http('http://yd.msword.top/login',{params:{
                    phone: this.phone,
                    password: this.password
                }}).then(res=>{
                    console.log(res)
                    if(res.data.status==1){
                        alert('登陆成功');
                        let obj = {
                            url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570733282035&di=feabe7dbea98787ccbd63eddcc55ddb4&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2Fceeb653ely1fvst9d95rej20h20hsgyk.jpg',
                            name:'你是沙雕吗？',
                            phone:this.phone,
                            password:this.password,
                        }
                        sessionStorage.setItem('arr',JSON.stringify(obj));
                        _this.$router.push({path:'/me'})
                    }else{
                        alert('输入正确的账号密码')
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
.top{
    width: 100%;
    /* background: #fff; */
    margin-bottom: 1.2rem;   
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
    font-size: .43rem;
    line-height: .43rem;
    color: #fff;
    width: 6.2rem;
    text-align: center;
}

.sp2{
    float:right;
}

.login{
    padding: 0 .75rem;
    margin-top: 2rem;
}

.tel{
    width: 6rem;
    height: .88rem;
    border-bottom: 2px solid #f5f5f5;
    line-height: .1.28rem;
    padding-top: .4rem;
    font-size: .35rem;
    position: relative;
}

.tel span{
    position: absolute;
    right: 0;
}

.tel input{
    font-size: .35rem;
}

.woyi{
    width: 6rem;
    height: 1rem;
}

.woyi .s_s{
    width: .3rem;
    height: .3rem;
    border: 1px solid #8f8f8f;
    display: inline-block;
    margin-right: .2rem;
}   

.woyi p{
    display: inline-block;
    vertical-align: top;
    font-size: .26rem;
}

.xia{
    width: 6rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    font-size: .32rem;
    border-radius: .2rem;
    background: #ff9900;
    margin: 1.2rem 0;
    color: #fff;
}

.ppp{
    float:right;
    margin-top: .5rem;
    font-size: .3rem;
}
</style>