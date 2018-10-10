<template>
  <div id="header">
    <nav class="navbar navbar-light">
      <a class="navbar-brand" href="index.html">
        <img src="../../static/img/header/logo.png" alt="">
      </a>
      <div class="form-inline">
        <div class="input-group">
          <input type="text" class="form-control p-0" placeholder="请输入你要搜索的内容"
                 aria-label="Recipient's username" aria-describedby="basic-addon2" @keyup.13="search"
                 v-model="kw">
          <!--删除header.js中input.onkeyup=function()...
              在header.js中search(){alert("...")}
           测试: 只要单击放大镜按钮或输入框按回车，弹框，说明正确-->
          <div class="input-group-append h-75">
            <img class="btn p-0" @click="search" src="../../static/img/header/search.png">
          </div>
        </div>
      </div>
      <nav id="signout" class="my-2 my-md-0 mr-md-3 small" v-if="!islogin">
        <a class="p-1 text-muted" href="#">注册</a>
        <b class="p-1 text-muted">|</b>
        <a class="p-1 text-muted" id="btnLogin" href="#" @click.prevent="signin">登录</a>
      </nav>
      <nav id="signin" class="my-2 my-md-0 mr-md-3 small" v-else>
        <a class="p-1" href="#" title="我的收藏">
          <img src="../../static/img/header/care.png">
        </a>
        <b class="p-1">|</b>
        <a class="p-1" href="#" title="我的订单">
          <img src="../../static/img/header/order.png">
        </a>
        <b class="p-1">|</b>
        <a class="p-1" href="cart.html" title="我的购物车">
          <img src="../../static/img/header/shop_car.png" alt="">
        </a>
        <a class="p-1 text-muted" href="#">Welcome <span id="uname">dangdang</span></a>
        <a class="p-1 text-muted" id="btnSignout" @click.prevent="signout" href="#">注销</a>
      </nav>
    </nav>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link text-muted active" href="index.html">首页</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-muted" href="#">学习用品</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-muted" href="#">私人定制</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kw: '',
      islogin: false
    }
  },
  mounted () {
    this.isLogin()
  },
  methods: {
    search () {
      if (this.kw !== '') {
        location.href = `http://localhost:3000/products.html?kw=${this.value.trim()}`
      }
    },
    signin () {
      location.href =
        'http://localhost:8080/login?back=' + location.href
    },
    signout () {
      this.axios.get('http://localhost:3000/users/signout').then(() => {
        this.isLogin()
      })
    },
    isLogin () {
      this.axios.post('http://localhost:3000/users/islogin')
        .then(res => {
          this.islogin = res.data.ok === 1
        })
    }
  }
}
</script>
