<template>
  <main id="main" class="container">
    <!--轮播图-->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../../static/img/index/banner1.png" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../../static/img/index/banner2.png" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../../static/img/index/banner3.png" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../../static/img/index/banner4.png" alt="4th slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!--//楼层-->
    <!--用v-if解决v-for引用来自ajax异步请求的数据存在滞后性的问题-->
    <div>
      <h3 class="pb-3" v-if="ready">
        <nav class="navbar navbar-light border-bottom border-secondary pb-0 mb-2">
          <a class="navbar-brand" href="#">
            <img src="../../static/img/index/computer_icon.png" class="d-inline-block align-top" alt="">
            首页推荐 / 1F
          </a>
        </nav>
        <div v-cloak class="row mb-2">
          <div class="col-md-7">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-2">{{products[0].title}}</h5>
                <h6 class="mb-5">
                  <a class="text-dark" href="javascript:;">{{products[0].details}}</a>
                </h6>
                <span class="text-primary">¥{{products[0].price.toFixed(2)}}</span>
                <router-link class="btn btn-sm btn-primary" :to="'/details/'+products[0].href.split('=')[1]">查看详情
                </router-link>

              </div>
              <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb"
                   alt="Thumbnail [200x250]" :src="'../../static/' + products[0].pic" data-holder-rendered="true">
            </div>
          </div>
          <div class="col-md-5 pl-0">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-2">{{products[1].title}}</h5>
                <h6 class="mb-5">
                  <a class="text-dark" href="javascript:;">{{products[1].details}}</a>
                </h6>
                <span class="text-primary">¥{{products[1].price.toFixed(2)}}</span>
                <router-link class="btn btn-sm btn-primary" :to="'/details/'+products[1].href.split('=')[1]">查看详情
                </router-link>
              </div>
              <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb"
                   alt="Thumbnail [200x250]" :src="'../../static/' + products[1].pic" data-holder-rendered="true">
            </div>
          </div>
        </div>
        <div v-cloak class="row mb-2">
          <div class="col-md-5">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-3">{{products[2].title}}</h5>
                <span class="text-primary">¥{{products[2].price.toFixed(2)}}</span>
                <a class="btn btn-primary" :href="products[2].href">查看详情</a>
              </div>
              <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb"
                   alt="Thumbnail [200x250]" :src="'../../static/' + products[2].pic" data-holder-rendered="true">
            </div>
          </div>
          <div class="col-md-7 pl-0">
            <div class="row pr-3">
              <div v-for="p in products.slice(3)" class="col-md-4 p-0 pl-2" :key="p.href.slice(-1)">
                <div class="card border-0 text-center">
                  <img class="card-img-top" :src="'../../static/' + p.pic" alt="Card image cap">
                  <div class="card-body p-0 pr-1 pl-1">
                    <span class="d-inline-block">{{p.title}}</span><br>
                    <span class="text-primary small">¥{{p.price.toFixed(2)}}</span><br>
                    <router-link class="btn btn-sm btn-primary" :to="'/details/'+p.href.split('=')[1]">查看详情
                    </router-link>
                  </div>
                </div>
              </div>
              <!--删除108~127行-->
            </div>
          </div>
        </div>
      </h3>
      <h3 class="pb-3" v-if="ready">
        <nav class="navbar navbar-light border-bottom border-secondary pb-0 mb-2">
          <a class="navbar-brand" href="#">
            <img src="../../static/img/index/computer_icon.png" class="d-inline-block align-top" alt="">
            最新上架 / 2F
          </a>
        </nav>
        <div v-cloak class="row mb-2">
          <div class="col-md-7">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-2">{{products[0].title}}</h5>
                <h6 class="mb-5">
                  <a class="text-dark" href="javascript:;">{{products[0].details}}</a>
                </h6>
                <span class="text-primary">¥{{products[0].price.toFixed(2)}}</span>
                <router-link class="btn btn-sm btn-primary" :to="'/details/'+products[0].href.split('=')[1]">查看详情
                </router-link>

              </div>
              <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb"
                   alt="Thumbnail [200x250]" :src="'../../static/' + products[0].pic" data-holder-rendered="true">
            </div>
          </div>
          <div class="col-md-5 pl-0">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-2">{{products[1].title}}</h5>
                <h6 class="mb-5">
                  <a class="text-dark" href="javascript:;">{{products[1].details}}</a>
                </h6>
                <span class="text-primary">¥{{products[1].price.toFixed(2)}}</span>
                <router-link class="btn btn-sm btn-primary" :to="'/details/'+products[1].href.split('=')[1]">查看详情
                </router-link>
              </div>
              <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb"
                   alt="Thumbnail [200x250]" :src="'../../static/' + products[1].pic" data-holder-rendered="true">
            </div>
          </div>
        </div>
        <div v-cloak class="row mb-2">
          <div class="col-md-5">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-3">{{products[2].title}}</h5>
                <span class="text-primary">¥{{products[2].price.toFixed(2)}}</span>
                <a class="btn btn-primary" :href="products[2].href">查看详情</a>
              </div>
              <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb"
                   alt="Thumbnail [200x250]" :src="'../../static/' + products[2].pic" data-holder-rendered="true">
            </div>
          </div>
          <div class="col-md-7 pl-0">
            <div class="row pr-3">
              <div v-for="p in products.slice(3)" class="col-md-4 p-0 pl-2" :key="p.href.slice(-1)">
                <div class="card border-0 text-center">
                  <img class="card-img-top" :src="'../../static/' + p.pic" alt="Card image cap">
                  <div class="card-body p-0 pr-1 pl-1">
                    <span class="d-inline-block">{{p.title}}</span><br>
                    <span class="text-primary small">¥{{p.price.toFixed(2)}}</span><br>
                    <router-link class="btn btn-sm btn-primary" :to="'/details/'+p.href.split('=')[1]">查看详情
                    </router-link>
                  </div>
                </div>
              </div>
              <!--删除108~127行-->
            </div>
          </div>
        </div>
      </h3>
      <h3 class="pb-3" v-if="ready">
        <nav class="navbar navbar-light border-bottom border-secondary pb-0 mb-2">
          <a class="navbar-brand" href="#">
            <img src="../../static/img/index/computer_icon.png" class="d-inline-block align-top" alt="">
            热销单品 / 3F
          </a>
        </nav>
        <div v-cloak class="row mb-2">
          <div class="col-md-7">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-2">{{products[0].title}}</h5>
                <h6 class="mb-5">
                  <a class="text-dark" href="javascript:;">{{products[0].details}}</a>
                </h6>
                <span class="text-primary">¥{{products[0].price.toFixed(2)}}</span>
                <router-link class="btn btn-sm btn-primary" :to="'/details/'+products[0].href.split('=')[1]">查看详情
                </router-link>

              </div>
              <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb"
                   alt="Thumbnail [200x250]" :src="'../../static/' + products[0].pic" data-holder-rendered="true">
            </div>
          </div>
          <div class="col-md-5 pl-0">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-2">{{products[1].title}}</h5>
                <h6 class="mb-5">
                  <a class="text-dark" href="javascript:;">{{products[1].details}}</a>
                </h6>
                <span class="text-primary">¥{{products[1].price.toFixed(2)}}</span>
                <router-link class="btn btn-sm btn-primary" :to="'/details/'+products[1].href.split('=')[1]">查看详情
                </router-link>
              </div>
              <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb"
                   alt="Thumbnail [200x250]" :src="'../../static/' + products[1].pic" data-holder-rendered="true">
            </div>
          </div>
        </div>
        <div v-cloak class="row mb-2">
          <div class="col-md-5">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-3">{{products[2].title}}</h5>
                <span class="text-primary">¥{{products[2].price.toFixed(2)}}</span>
                <router-link class="btn btn-sm btn-primary" :to="'/details/'+products[2].href.split('=')[1]">查看详情
                </router-link>
              </div>
              <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb"
                   alt="Thumbnail [200x250]" :src="'../../static/' + products[2].pic" data-holder-rendered="true">
            </div>
          </div>
          <div class="col-md-7 pl-0">
            <div class="row pr-3">
              <div v-for="p in products.slice(3)" class="col-md-4 p-0 pl-2" :key="p.href.slice(-1)">
                <div class="card border-0 text-center">
                  <img class="card-img-top" :src="'../../static/' + p.pic" alt="Card image cap">
                  <div class="card-body p-0 pr-1 pl-1">
                    <span class="d-inline-block">{{p.title}}</span><br>
                    <span class="text-primary small">¥{{p.price.toFixed(2)}}</span><br>
                    <router-link class="btn btn-sm btn-primary" :to="'/details/'+p.href.split('=')[1]">查看详情
                    </router-link>
                  </div>
                </div>
              </div>
              <!--删除108~127行-->
            </div>
          </div>
        </div>
      </h3>
    </div>
    <!--//品质保障-->
    <ul class="nav nav-pills nav-fill mb-3">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <img src="../../static/img/footer/icon1.png">
          <h6 class="text-muted">品质保障</h6>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <img src="../../static/img/footer/icon2.png">
          <h6 class="text-muted">私人订制</h6>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <img src="../../static/img/footer/icon3.png">
          <h6 class="text-muted">学员特供</h6>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <img src="../../static/img/footer/icon4.png">
          <h6 class="text-muted">专属特权</h6>
        </a>
      </li>
    </ul>
    <!--楼层滚动-->
    <div class="btn-group-vertical position-fixed d-none" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary btn-sm border-light border-left-0 border-right-0">首页<br>推荐</button>
      <button type="button" class="btn btn-secondary btn-sm border-light border-left-0 border-right-0">最新<br>上架</button>
      <button type="button" class="btn btn-secondary btn-sm border-light border-left-0 border-right-0">热销<br>单品</button>
    </div>
  </main>
</template>

<script>
import '@/assets/css/index.css'

export default {
  data () {
    return {
      products: [],
      ready: false
    }
  },
  created () {
    this.index()
  },
  methods: {
    index () {
      this.axios.get('http://localhost:3000/index').then(result => {
        this.products = result.data
        this.ready = true
      })
    }
  }
}
</script>

<style scoped>

</style>
