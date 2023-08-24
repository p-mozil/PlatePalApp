<template>
    <div @click="closePanel" class="app">
        <div class="wrapper"> 
        <div class="main">
        <div v-show="currentComponent == 'recipeListComponent'" :class="`${isCenteredInputs ? 'centerInputs' : ''}`" class="inputs">   
        <input class="ingredientsField" v-model="query" :placeholder="generatePlaceholderVariant()" @keyup.enter="getRecipes(),resetInputTop()" type="text">
        <input class="findButton" type="button" value="Go!" @click="getRecipes(),resetInputTop()">
       
    </div>
    <img
      v-show="$store.state.isFetching"
      src="../../public/img/loading_pizza.gif"
      class="loadingAnimation"
    />
  <KeepAlive>
<component :is="currentComponent" :query="query" ref="recipeListComponent" @isFatchingState= "(state) => isFetching = state" @goBack="component => goBack(component)" @showMore="(component,recipes) => showMore(component,recipes)" :recipeDetails="directions"></component></KeepAlive> 

</div>
</div>
</div>
    
</template>

<script>
import instructionComponent from './instruction-component.vue';
import recipeListComponent from './recipe-list-component.vue';


export default {
    name: 'user-component',
    components: {
        recipeListComponent,
        instructionComponent
       
        
  },
 data(){
    return {
        query: "",
        isFetching: false,
        isCenteredInputs: true,
        placeholderVariant:['Chicken,rice','Beef,potatoe','Pasta,crab','Margarita pizza','Carbonara','Borshch','Caramel Cake','Pork quesadillas','Strawberry shake'],
        currentComponent: "recipeListComponent",
        directions: '',
    };
 },
 methods:{
    goBack(component){
        this.currentComponent = component;
    },
    showMore(component,recipes){
        this.currentComponent = component;
        this.directions = JSON.parse(JSON.stringify(recipes));
    },
    resetInputTop(){
        this.isCenteredInputs = false;
    },
   async getRecipes(){
        await this.$refs.recipeListComponent.resetPages();
        await this.$refs.recipeListComponent.getData();
   },
   closePanel(){
this.$emit("updatePannelStatus", false);
   },
   generatePlaceholderVariant(){
    if(this.query == ""){
        return this.placeholderVariant[Math.floor(Math.random()*this.placeholderVariant.length)];
    }
        
    }
},
computed:{

}
}
 
</script>
<style scoped>

.main{
    margin-left:3rem;
}

input[type=text]{
    padding:10px;
}

.inputs{
    box-sizing: border-box;
    justify-content: center;
    display:flex;
    padding:50px;
    transition: 0.2s ease-out;
}

.centerInputs{
    transform: translateY(150px);
    margin-left:-2.8rem !important;
}
.centerInputs input[type=text]{
   padding:30px 10px;
}

.ingredientsField {
    box-sizing: border-box;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  height: 40px;
  width:60%;
  color:var(--input-text-color);
  /* box-shadow: 0 0 10px #719ECE; */
}
.ingredientsField:focus {
    outline: none !important;
  border: 1px solid var(--border-focus-color);
}
.ingredientsField::placeholder {
  font-weight: bold;
  letter-spacing: 0.5px;
  opacity: 0.5;
  color: var(--secondary-color);
}

.findButton {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  flex-basis: 100px;
  background-color:var(--main-color);
  transition: 0.5s;
  background-size: 200% auto;
  color: var(--button-text-color);
}

 .loadingAnimation{
    display:block;
    position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
    width: 20%;
    opacity:0.7;
    
} 

img{
    display:block;
    }
    .inputs{
    padding:0.5rem;
}

@media screen and (min-width:600px){
    input[type=button]:hover{
        background-color:var(--secondary-color);  
    }
}

    @media screen and (max-width: 600px) {
        .inputs{
    margin:0;

}

        .loadingAnimation{    
            width: 50%;
}


/* .loadingAnimation{
    display:block;
    position:fixed;
    top:0%;
    left: 50%;
    width: 20%;
    opacity:0.8;
    transform: translateX(-40%);
    
} */

.findButton{
    box-shadow : none;
}

.ingredientsField{
    box-shadow: none;
}
    }
</style>
