<template>
    <div class="recipe-list-wrapper">
        <div class="navBar">
            <div class="empty1"></div>
            <div v-show="(recipes) && recipes.length > 0" class="navButtons">
            <input v-show="this.$store.getters.from != 0" @click="this.$store.commit('prevPage'); getData()" type="button" value="Previous page">            
            <input @click="this.$store.commit('nextPage'); getData()" type="button" value="Next page">
        </div>
        <div class="pgNumber-wrapper">   
            <div v-show="(recipes) && recipes.length > 0" class="pgNumber">Page: {{ this.$store.getters.pgNumber }}</div>
        </div>
        </div>
    
   <div class="recipe"  v-for="(item,key) in recipes" :key="key">
    <div class="recipe-card-wrap">
        <div class="recipe-card-header">
            <div class="empty"></div>
           <div class="recipe-label-wrap">
            <p class="recipe-label">{{ item.recipe.label }} </p>
           </div>
            <div class="add_button_wrap">
                <input class="add_button" type="button" value="+">
            </div>
           
        </div>
        <div class="recipe-card-main">
            <div class="imgWrap">
            <img ref="img" @load="this.$store.commit('changeLoadingState',false)" :src="item.recipe.image">
        </div>
        <div class="recipe-info">
            <div class="info-block1">
                <div class="servings">
                <span>{{Math.floor(item.recipe.yield)}}</span><span> servings</span>
            </div>
            <div class="calories">
                <span class="calories_number">{{Math.floor(item.recipe.calories/item.recipe.yield)}}</span><span> kcal</span>
            </div>
            </div>
            <div class="info-block2">
                <div class="info-block-item protein"><span>PROTEIN </span>
                <span class="unit">{{Math.floor(item.recipe.totalNutrients.PROCNT.quantity
)}} {{item.recipe.totalNutrients.PROCNT.unit}}</span>
            </div>
            <div class="info-block-item fat"><span>FAT </span>
                <span class="unit">{{Math.floor(item.recipe.totalNutrients.FAT.quantity
)}} {{item.recipe.totalNutrients.FAT.unit}}</span>
            </div>
            <div class="info-block-item carbs"><span>CARBS </span>
                <span class="unit">{{Math.floor(item.recipe.totalNutrients.CHOCDF.quantity)}} {{item.recipe.totalNutrients.CHOCDF.unit}}</span>
            </div>
            </div>
            <div class="info-block3">
                <div class="info-block-item"><span>Cholesterol </span>
                <span class="unit">{{Math.floor(item.recipe.totalNutrients.CHOLE.quantity/item.recipe.yield)}} {{item.recipe.totalNutrients.CHOLE.unit}}</span>
            </div>
            <div class="info-block-item"><span>Sodium </span>
                <span class="unit">{{Math.floor(item.recipe.totalNutrients.NA.quantity/item.recipe.yield)}} {{item.recipe.totalNutrients.NA.unit}}</span>
            </div>
            <div class="info-block-item"><span>Calcium </span>
                <span class="unit">{{Math.floor(item.recipe.totalNutrients.CA.quantity/item.recipe.yield)}} {{item.recipe.totalNutrients.CA.unit}}</span>
            </div>
            <div class="info-block-item"><span>Magnesium </span>
                <span class="unit">{{Math.floor(item.recipe.totalNutrients.MG.quantity/item.recipe.yield)}} {{item.recipe.totalNutrients.MG.unit}}</span>
            </div>
            <div class="info-block-item"><span>Potasium </span>
                <span class="unit">{{Math.floor(item.recipe.totalNutrients.K.quantity/item.recipe.yield)}} {{item.recipe.totalNutrients.K.unit}}</span>
            </div>
            <div class="info-block-item"><span>Iron </span>
                <span class="unit">{{Math.floor(item.recipe.totalNutrients.FE.quantity/item.recipe.yield)}} {{item.recipe.totalNutrients.FE.unit}}</span>
            </div>
            </div>
           
        </div>
        
        </div>
        <KeepAlive>
                <router-link class="showMoreButton" @click="this.$store.commit('showMoreRecipe', recipes[key])" :to="'search-recipe/recipe-detail/' + item.recipe.label.split(' ').join('-')">
                    
                    
                    <span>Show instructions</span>
                
                </router-link>
            </KeepAlive>
        <div class="bottom-card-info">
            <div class="healthLabels">
                <span>{{item.recipe.healthLabels.join(" * ")}}</span>
            </div>
        </div>
      
    </div>
    
</div>
<div class="navBar">
            <div class="empty1"></div>
            <div v-show="(recipes && !fatching) && recipes.length > 0" class="navButtons">
            <input v-show="this.$store.getters.from != 0" @click="this.$store.commit('prevPage'); getData()" type="button" value="Prevoius page">            
            <input @click="this.$store.commit('nextPage'); getData()" type="button" value="Next page">
        </div>
        <div class="pgNumber-wrapper">   
            <div v-show="(recipes && !fatching) && recipes.length > 0" class="pgNumber">Page: {{ this.$store.getters.pgNumber }}</div>
        </div>
        </div>
        
   <p class="error" v-show="this.$store.state.isError">{{ this.$store.state.errorMsg }}</p>
    </div>
</template>

<script>
export default {
    props:{
        query:{
         type:String,
         required:true
        }
    },
 data(){
    return {
        
    }
 },
  computed:{
    fatching(){
          return this.$store.getters.fatchingState;
        },
    recipes(){
        return this.$store.getters.recipes;
    }

  },
 
 methods:{
    async getData(){
      this.$store.dispatch('getData',this.query)
        },

    getRecipes(key){
        return JSON.parse(JSON.stringify(this.recipes[key]));
    },

    resetPages(){
        
    }
   
 },
 watch:{
    
  

 },
}
</script>

<style scoped>



.recipe img{
    display:block;
    max-width:100%;
    border-radius:5px;
}

.navBar{
    display:flex;
    justify-content:space-between;
    
}

.navButtons{
    display:flex;
    justify-content: center;
    flex-grow:1;
    flex-basis:calc(30% + 3rem);
}


.recipe-list-wrapper{ 
    margin-left:-2em;
    margin-right:1em;
}


 .navButtons input{
  margin: 15px 7.5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  flex-basis: 70px;
  background-color:var(--main-color);
  transition: 0.5s;
  box-shadow: 0 0 10px #719ECE;
  background-size: 200% auto;
  color: var(--button-text-color);
  min-width:8rem;
}
.empty{
    flex-grow:1;
    flex-basis:30%;
}

.empty1{
    flex-grow:1;
    flex-basis:calc(30% + 3rem);
}


.pgNumber-wrapper{
    display:flex;
    justify-content: end;
   align-items: center;
   flex-basis:calc(30% + 3rem);
}

.pgNumber{
   height: 100%;
   display:flex;
   margin-right: 1rem;
   align-items: center;

}
.recipe-card-wrap{
    display:flex;
    flex-direction: column;
    padding:1rem;
    margin-bottom:1rem;
    border: 1px solid var(--recipe-wrap-border-color);
    box-shadow: 0 0 10px var(--recipe-box-shadow-color);
    /* box-shadow: 0 0 10px #719ECE; */
}
.recipe-card-header{
    box-sizing:border-box;
    display:flex;
    margin-bottom:1rem;
}

.add_button_wrap{
    flex-grow:1;
    display:flex;
    justify-content: flex-end;
    flex-basis:30%;
    flex-grow:1;
}
.add_button{
   padding:0.4rem 1rem;
    background-color:var(--main-color);
    border:none;
    border-radius:5px;
    color: var(--button-text-color);
    font-size:1.5rem;
    cursor:pointer;
    transition: 0.5s;
    
}

.recipe-card-main{
    display:flex;

}
.recipe-label-wrap{
  flex-basis:30%;
  flex-grow:1;
}

    .recipe-label {
  font-size:1.7rem;
  text-align: center;
  border-bottom: 1px solid var(--recipe-wrap-border-color);
  margin-bottom: 1rem;
}




.servings{
    font-weight: bold;
}

.calories{
    font-weight:bold;
}

.calories_number{
    font-size:1.5rem;
}

.unit{
    font-weight:bold;
}
.info-block1{
    flex-grow:1;
    padding: 0 2rem;
}

.info-block2{
    flex-grow:2;
    padding: 0 2rem;
}
.info-block3{
    flex-grow:2;
    padding: 0 2rem;
}

.recipe-info{
    margin:0 auto;
    display:flex;
    flex-basis:50%;
    align-items: center;
    font-size:1.3rem;
}


.info-block-item{
    display:flex;
    justify-content: space-between;
    margin-bottom:0.4rem;
    text-align: left;
}

.info-block2 > :before{
    content:'';
    height: 1.3rem;
    width:1.3rem;
    border-radius:50%;
    margin-top:2px;
}


.protein:before{
    background-color: green;

}
 .carbs:before{
    background-color: rgb(184, 29, 29);
}
 .fat:before{
    background-color: rgb(174, 177, 28);
}



.bottom-card-info{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 150px;
    padding:1rem;
    background-color: var(--recipe-background-color);
    margin: 1rem -1rem -1rem -1rem;
}

.showMoreButton{
    margin:0 auto;
    background-color:var(--main-color);
    border:none;
    border-radius:5px;
    cursor:pointer;
    transition: 0.5s;
    padding: 10px 20px;
    text-decoration: none;
    color: var(--button-text-color);
}
.showMoreButton:hover{
    background-color:var(--secondary-color); 
}

.error{
    text-align: center;
    margin-top:150px;
    font-size:1.5rem;
    color:red;
}




@media screen and (min-width:600px){
    input[type=button]:hover{
        background-color:var(--secondary-color);  
    }
}

@media screen and (max-width: 600px) {

    .showMoreButton{
        font-size:0.8rem;
    }

    .pgNumber{
        font-size:0.7rem;
        margin-right: 0;
    }
    .navButtons input{
        padding:0.5rem 0;
min-width:6rem;
font-size:0.7rem;
    }

    .empty{
    flex-grow:1;
}

    .info-block2 > :before{
        height: 0.6rem;
        width:0.6rem;
    }
    .recipe-label {
        font-size:0.8rem;
        flex-grow:2;
    }

    .recipe-card-main{
        flex-direction: column;
    }

    .recipe img{
    margin:0 auto;
 
}

    .recipe-info{
        margin:0;
        margin-top:1rem;
        font-size:0.7rem;
    }

    .info-block1, .info-block2, .info-block3{
        padding:0;
    }

    .info-block2{
        margin-right:1rem; 
    }
 

    .bottom-card-info{
        height:100%;
        font-size:0.7rem;
    }

    .add_button{
        padding:0;
        width:2rem;
        height:2rem;
        
    }
   

    }
</style>