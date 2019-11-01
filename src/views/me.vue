<template>
  <div class="me">
    <van-image :src="me" />
    <h3>孙方源</h3>
    <p>练手作品</p>
    <ul>
      <li v-for="(item,index) in webs" :key="index">
        {{item.webname}}
        <button @click="$store.dispatch('delItem',index)">删除</button>
        </li>
    </ul>


    <button v-for=" p in totalpage" :key="p" :class="{ active: p==page }" @click="$store.commit('changePage',p)">{{p}}</button>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
export default {
  data(){
    return{
      me:require("../assets/uploads/me.jpg")
    }
  },
  created(){
    this.$store.dispatch('about_fetch')

  },
  computed:{
    ...mapGetters(['page','totalpage','webs'])

  }

}
</script>

<style>
.me{
  text-align: center;
}
.me button{
  padding: 5px 8px;
}
.me button.active{
  background-color: #000;
  color: #fff;
}



</style>