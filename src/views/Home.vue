<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import 'jquery'
import 'popper.js'
import 'bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

// import '@/assets/css/bootstrap.css'
import '@/assets/css/base.css'

// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header, Footer
  }
}
</script>
<!--scoped用于指定样式仅用于该模块-->

<style scoped>
  #container {
    width: 1000px;
    height: 560px;
    background: url(../../static/img/register/bg.png) no-repeat;
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
    background: #fff url(../../static/img/register/yhm.png) no-repeat 97% center;
  }

  input.upwd {
    background-image: url(../../static/img/register/mm.png);
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
