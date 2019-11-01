<template>
  <div class="my-cart">
    <div class="cart-img" v-if="carts.length==0">
      <van-image :src="cartImg" />
      <p>购物车是空的哦，快去购物吧</p>
      <van-button
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        size="large"
        round
        to="/product"
      >逛一逛</van-button>
    </div>
    <div class="carts" v-else>
      <van-checkbox-group v-model="result">
        <van-card
          :num="item.value"
          :price="item.price"
          :title="item.name"
          :thumb="item.images"
          v-for="item in carts"
          :key="item.id"
        >
          <div slot="tag">
            <van-checkbox :name="item.id"></van-checkbox>
          </div>
          <div slot="bottom" class="del">
            <van-icon name="delete" @click="delItem(item.id)" />
          </div>

          <div slot="footer">
            <van-stepper v-model="item.value" @change="change(item)" />
          </div>
        </van-card>
      </van-checkbox-group>
      <van-submit-bar :price="totalPrice" button-text="提交订单">
        <van-checkbox v-model="checked" @click="checkedAll">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      cartImg: require("../assets/uploads/gouwuche.png"),
      checked: false,
      result: [],
      totalPrice: 0
    };
  },
  created() {
    if (localStorage.getItem("carts")) {
      this.carts = JSON.parse(localStorage.getItem("carts"));
    }
    if (sessionStorage.getItem("list")) {
      this.result = JSON.parse(sessionStorage.getItem("list"));
      let arr = this.carts.filter(item => {
        return this.result.indexOf(item.id) != -1;
      });
      this.totalPrice =
        arr.reduce((prev, next) => {
          return prev + next.price * next.value;
        }, 0) * 100;
    }
    if (localStorage.getItem("checked")) {
      this.checked = JSON.parse(localStorage.getItem("checked"));
    }
  },
  methods: {
    change(item) {},
    checkedAll() {
      if (this.checked) {
        this.result = [];
      } else {
        this.result = this.carts.map(item => {
          return item.id;
        });
      }
    },
    delItem(id){
      this.carts=this.carts.filter(item=>{
        return item.id!=id
      })
      this.result.splice(this.result.indexOf(id),1);
      if(this.carts.length==0) this.checked = false;
    }
  },
  watch: {},
  updated() {
    localStorage.setItem("carts", JSON.stringify(this.carts));
    sessionStorage.setItem("list", JSON.stringify(this.result));
    localStorage.setItem("checked", JSON.stringify(this.checked));

    let arr = this.carts.filter(item => {
      return this.result.indexOf(item.id) != -1;
    });
    if (this.carts.length == arr.length) this.checked = true;
    else this.checked = false;
    this.totalPrice =
      arr.reduce((prev, next) => {
        return prev + next.price * next.value;
      }, 0) * 100;
  }
};
</script>

<style>
.my-cart .van-card {
  padding-left: 50px;
}
.my-cart .van-card__tag {
  top: 30px;
  left: -35px;
}
.my-cart .van-checkbox__icon .van-icon {
  border-color: #333;
}
.my-cart .van-checkbox__icon--checked .van-icon {
  border-color: #1989fa;
}
.my-cart .van-submit-bar .van-checkbox {
  margin-left: 20px;
}
.my-cart .cart-img {
  text-align: center;
  padding-top: 4.5rem;
}
.my-cart .cart-img img {
  width: 13rem;
  height: 11rem;
  margin: auto;
}
.my-cart .cart-img p {
  margin-top: 1.5rem;
  margin-bottom: 2.4rem;
  color: #959595;
  font-size: 2.15rem;
}
.my-cart .cart-img button {
  width: 40%;
}
.my-cart .del{
  position: absolute;
  top: 0;
  right: 0;
}
.my-cart .del .van-icon{
  font-size: 2rem;
}
.my-cart .carts .van-card__title{
  font-size: 1.3rem;
}
.my-cart .carts .van-card__bottom{
  margin-top: 1.2rem;
  font-size: 1.4rem;
}
</style>