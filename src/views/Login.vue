<template>
  <div id="container">
    <table></table>
    <div class="black">
      <table>
        <tr>
          <td>
            <h4>登录学子商城</h4>
          </td>
          <td>
            <a href="#">新用户注册</a>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <hr>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="text" placeholder="请输入您的用户名" class="uname" name="uname" v-model="uname">
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="password" placeholder="请输入您的密码" class="upwd" name="upwd" v-model="upwd">
          </td>
        </tr>
        <tr>
          <td class="autoLogin">
            <input type="checkbox">自动登录
          </td>
          <td>
            <a href="#">忘记密码？</a>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="button" value="登录" class="login" @click="signin">
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      uname: 'dangdang',
      upwd: '123456'
    }
  },
  methods: {
    signin () {
      this.axios.post('http://localhost:3000/users/signin', this.qs.stringify({
        uname: this.uname,
        upwd: this.upwd
      })).then(res => {
        if (res.data.ok === 0) {
          alert(res.data.msg)
        } else {
          window.uid = res.data.uid
          alert('登陆成功')
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style scoped>
  #container {
    width: 1000px;
    height: 560px;
    background: url("../../static/img/register/bg.png") no-repeat;
    margin: 0 auto;
  }

  #container div.black {
    width: 280px;
    height: 300px;
    background: rgba(0, 0, 0, .3);
    margin: 130px 0 0 600px;
  }

  #container div.black table {
    width: 100%;
  }

  #container h4 {
    color: #fff;
    margin: 0;
  }

  #container a {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
  }

  input.uname, input.upwd {
    width: 100%;
    height: 34px;
    border: none;
    outline: 0;
    padding-left: 15px;
    margin-bottom: 30px;
    box-sizing: border-box;
    background: #fff url("../../static/img/register/yhm.png") no-repeat 97% center;
  }

  input.upwd {
    background-image: url("../../static/img/register/mm.png");
  }

  input.login {
    width: 100%;
    height: 36px;
    margin-top: 20px;
  }

  td.autoLogin {
    color: #fff;
    font-size: 12px;
  }
</style>
