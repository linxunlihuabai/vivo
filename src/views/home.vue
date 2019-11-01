<template>
  <div class="header">
    <!-- <the-header :navs="navs"></the-header> -->
    <div class="head">
      <van-image :src="src" />
    </div>
    <van-swipe :autoplay="4000">
      <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
        <van-image :src="image" />
      </van-swipe-item>
    </van-swipe>
    <van-row type="flex" class="middle">
      <van-grid :border="false" :column-num="4">
        <van-grid-item v-for="(item) in serverImages" :key="item.id" :to="item.path">
          <van-image :src="item.img" />
        </van-grid-item>
      </van-grid>
    </van-row>
    <main>
      <h2>爆款产品</h2>
      <van-grid :border="true" :column-num="1">
        <van-grid-item>
          <van-image :src="banner" />
        </van-grid-item>
      </van-grid>

      <goods :goods="goods"></goods>
    </main>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";

export default {
  data() {
    return {
      src: require("../assets/uploads/official.png"),
      swipeImages: [
        require("../assets/uploads/apple-3.jpg"),
        require("../assets/uploads/apple-2.jpg")
      ],
      serverImages: [
        {
          id: 1,
          path: "/home-goods",
          img: require("../assets/uploads/xuangou.jpg")
        },
        {
          id: 2,
          path: "/home-peijian",
          img: require("../assets/uploads/peijian.jpg")
        },
        {
          id: 3,
          path: "/home-goods",
          img: require("../assets/uploads/dingzhi.jpg")
        },
        {
          id: 4,
          path: "/home-goods",
          img: require("../assets/uploads/pingbao.jpg")
        }
      ],
      banner: require("../assets/uploads/banner.jpg"),
      goods: []
    };
  },
  created() {
    this.$http.get("/api/goods").then(res => {
      let arr = [];
      for (let key in res.data) {
        arr = arr.concat(res.data[key]);
      }
      this.goods = arr.slice(0, 6);
    });
  }
};
</script>

<style scoped>
main h2 {
  font-size: 1.3rem;
  font-weight: normal;
  padding-left: 1rem;
  line-height: 4rem;
  background-color: #fff;
}
</style>