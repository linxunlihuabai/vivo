<template>
  <div class="my-collect">
    <van-tabs v-model="active" >
      <van-tab title="商品" >
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          v-for="p in 3"
          :key="p"
        />
      </van-tab>
      <van-tab title="文章">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          v-for="p in 10"
          :key="p"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:0
    }
  }
};
</script>

<style>
.my-collect .van-hairline--top-bottom {
  position: fixed;
  top: 46px;
  width: 100%;
  z-index: 9999;
}
.my-collect .van-tabs {
  padding-top: 44px;
}
</style>