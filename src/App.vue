<template>
 
 <userPanel :showPannelStatus="showPanel" @updatePannelStatus=" s => showPanel = s"></userPanel>
 
<router-view v-slot="{ Component }" @updatePannelStatus=" s => showPanel = s">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>


</template> 

<script>
import userPanel from './components/user-panel2.vue';

export default {
  name: 'App',
  components: {
    userPanel,

  },
  data(){
    return{
      showPanel: null,
    }
  },
  methods:{
   
  }
}
</script>

<style>
*{
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
input[type=button]{
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
}
.app{
  height: 100%;
}
.router-view{
  padding-left: calc(2rem + 29px);
}

:root{
--main-color:#00CC00;
--secondary-color:#339933;
--background-color: #dfdfdf;
--border-focus-color:#00CC00;
--input-text-color:#006600;
--recipe-background-color:#d8d3d3;
--orange-color:#ff9000;
--hover-menu-color:#5ca85c;
--hover-menu-text-color:#2a3658;
--recipe-wrap-border-color: #9a9b9c;
--recipe-box-shadow-color:#9a9b9c;
--button-text-color:rgb(251, 253, 217);

}


body{
  color:hsl(92, 100%, 5%);
  /* background: radial-gradient(
    circle,
    rgba(2, 0, 36, 0.7) 0%,
    rgba(245, 251, 167, 0.7) 0%,
    rgba(252, 239, 186, 0.7) 100%
); */
background-color:var(--background-color);

}
#app{
height:100vh;
}
p{
    margin:0;
}
body{
  margin:0;
}

</style>
