<template>
  <div class="top">
    <div class="shop">
      <div class="shop_top">
        <div class="shop_che">
          <div class="shop_tou">
            <span @click="up()"></span>
          </div>
          <p class="shop_gwc">
            <span>注册</span>
            <span class="sp2" @click="deng()">登录</span>
          </p>
        </div>
      </div>
    </div>

    <div class="login">
      <div>
        <div class="tel">
          手机号 :
          <input type="text" v-model="phone" autocomplete="off" style="background:#fff" />
        </div>
        <div class="tel">
          密&nbsp;&nbsp; 码 :<input type="password" v-model="password" autocomplete="off" style="background:#fff" />
        </div>
        <div class="tel">
          验证码 :
          <input type="text" v-model="code" autocomplete="off" style="background:#fff" />
          <span @click="cls()">点击获取</span>
        </div>
        <div class="xia" @click="sed()">
          <span>下一步</span>
        </div>
        <div class="woyi">
          <input type="checkbox" class="s_s" checked />
          <p>我已阅读并同意使用条款和隐私政策</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      phone: "",
      password: "",
      code: ""
    };
  },
  methods: {
    up() {
      this.$router.go(-1);
    },
    deng() {
      this.$router.push({
        path: "/login"
      });
    },
    sed() {
      var params = {
        phone: this.phone,
        password: this.password
      };
        console.log(1);
      var tel = /^1[3-9][0-9]{9}$/;
      // var pas = /^.*(?=.{6,32})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])$/;
      var pas = /^\w{6,18}$/;
      if (this.phone == "" || this.password == "" || this.code == "") {
        alert("有选项未填");
        console.log(this.phone);
      } else if (!tel.test(this.phone)) {
        alert("输入正确手机号");
      } else if (!pas.test(this.password)) {
        alert("密码不能少于六位");
      } else {
        this.$http("http://localhost:3000/captcha/verify", {
          params: {
            phone: this.phone,
            captcha: this.code
          }
        }).then(res => {
          console.log(res, 11111);
          if (res.data.code == 200) {
            this.$http({
              url: "http://yd.msword.top/register",
              method: "post",
              data: qs.stringify(params)
            }).then(res => {
              console.log(res);
            //   console.log(params);
                alert(res.data.msg)
                this.$router.push({path:'/login'})
            });
          }
        });
      }
    },
    sad() {
      console.log(2);
    },
    cls() {
      this.$http({
        url: "http://localhost:3000/captcha/sent?phone=" + this.phone
      }).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          alert("发送成功");
        } else {
          alert("发送失败");
        }
      });
    }
  }
};
</script>

<style scoped>
.top {
  width: 100%;
  /* background: #fff; */
  margin-bottom: 1.2rem;
}

.shop {
  width: 7.5rem;
}

.shop_top {
  width: 7.1rem;
  height: 1.3rem;
  background: #ff9900;
  padding: 0 0.2rem 0 0.2rem;
}

.shop_che {
  padding-top: 0.3rem;
  width: 7.1rem;
  height: 1rem;
  position: relative;
  /* background: #ff9900;
    padding: 0 .2rem 0 .2rem; */
}

.shop_tou {
  display: inline-block;
  width: 0.8rem;
  height: 1rem;
  position: relative;
}

.shop_tou span {
  display: inline-block;
  width: 0.25rem;
  height: 0.25rem;
  border-bottom: 0.03rem solid #fff;
  border-left: 0.03rem solid #fff;
  transform: rotate(45deg);
  position: absolute;
  left: 0.2rem;
  top: 0.4rem;
}

.shop_che p {
  display: inline-block;
  position: absolute;
  top: 0.6rem;
  font-size: 0.43rem;
  line-height: 0.43rem;
  color: #fff;
  width: 6.2rem;
  text-align: center;
}

.sp2 {
  float: right;
}

.login {
  padding: 0 0.75rem;
  margin-top: 2rem;
}

.tel {
  width: 6rem;
  height: 0.88rem;
  border-bottom: 2px solid #f5f5f5;
  line-height: 0.1.28rem;
  padding-top: 0.4rem;
  font-size: 0.35rem;
  position: relative;
}

.tel span {
  position: absolute;
  right: 0;
}

.login input {
  font-size: 0.35rem;
  background: red;
}

.woyi {
  width: 6rem;
  height: 1rem;
}

.woyi .s_s {
  width: 0.3rem;
  height: 0.3rem;
  border: 1px solid #8f8f8f;
  display: inline-block;
  margin-right: 0.2rem;
  -webkit-appearance: checkbox;
}

.woyi p {
  display: inline-block;
  vertical-align: top;
  font-size: 0.26rem;
}

.xia {
  width: 6rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  font-size: 0.32rem;
  border-radius: 0.2rem;
  background: #ff9900;
  margin: 0.5rem 0;
}
</style>