<template>
  <div class="product-all">
    <van-row type="flex" justify="space-between">
      <van-col>
        <van-sidebar v-model="active">
          <van-sidebar-item
            v-for="(item,key,index) in navs"
            :key="index"
            :title="key"
            :info="item.info"
            :to="'/product/'+key"
          />
        </van-sidebar>
      </van-col>
      <van-col class="goods">
          <router-view :navs="navs"></router-view>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      navs: {}
    };
  },
  created() {
    this.$http.get("/api/all").then(res => {
      let arr = [];
      for (let key in res.data) {
        arr = arr.concat(res.data[key]);
      }
      this.navs["全部"] = arr;

      Object.assign(this.navs, res.data);

      this.navs = { ...this.navs };

     this.active=Object.keys(this.navs).indexOf(this.$route.params.name) 
    });
  }
};
</script>

<style>
.goods {
  padding: 12px 0;
}
.van-grid-item img {
  max-width: 100%;
  display: block;
  height: auto;
}
.product-all .van-sidebar {
  width: 8.5rem;
}
.product-all .van-grid-item__content p{
  font-size: 1.2rem;
  color: #999;
  line-height: 2.7rem;

}
</style>