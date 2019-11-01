import Vue from 'vue';
import Vuex from 'vuex';


import sun from './sun';

import axios from 'axios';

Vue.use(Vuex);

const store=new  Vuex.Store({
  state:{
    sites:{
      perpage:2,
      page:1,
      list:[]
    }
  },
  getters:{
    page(state){
      return state.sites.page;
    },
    totalpage(state){
      const　{list,perpage}=state.sites;
      return Math.ceil(list.length/perpage);
    },
    webs(state){
      const　{list,perpage,page}=state.sites;
      let start =(page-1)*perpage;
      let end =start+perpage;
      return list.slice(start,end);
    }
  },
  mutations:{
    changePage(state,p){
      state.sites.page=p;
    },
    delItem(state,index){
      state.sites.list.splice(index,1);
    },
    changeAbout(state,data){
      state.sites.list=data;
    }
    
  },
  actions:{
    about_fetch(context){
      axios.get('http://localhost:8080/api/list.php').then(res=>{
        context.commit('changeAbout',res.data.data)
      })
    },
    delItem(context,index){
      setTimeout(()=>{
        context.commit('delItem',index);
      },3000)

    }
  },
  plugins:[sun]

});

export default store;
