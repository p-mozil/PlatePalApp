<template>
    <div>
        <div class="backButtonWrap">
            <router-link class="backButton" to='/search-recipe'><span>Back</span></router-link>
        </div>
<h1 class="recipe-label">{{selectedRecipe.recipe.label}}</h1>

<div class=""></div>
    </div>
</template>

<script>

export default {
    name: 'instuction-component',
    components: {

  },
 data(){
    return {
      
    };
 },
 methods:{

},
computed:{
    selectedRecipe(){
        console.log(JSON.parse(JSON.stringify(this.$store.state.selectedRecipe)).recipe);
  return JSON.parse(JSON.stringify(this.$store.state.selectedRecipe));
  
},
},
watch:{
  
}
}
</script>
<style scoped>
.recipe-label{
    text-align: center;
}
.backButton{
    margin-left:150px;
}
</style>



