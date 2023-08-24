<template>
    <aside :class="`${showPannel ? 'is-expanded' : ''}`">
        <img src="../../public/img/logo3.png" alt="platepal">
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu"><span class="material-symbols-rounded">
keyboard_double_arrow_right
</span></button>
        </div>
        <h3>Menu</h3>
        <div class="menu">
            <router-link @click="updatePath"
        class="routerButton"
        to="/search-recipe">
        <span class="material-symbols-rounded">search</span>
        <span class="text">Search</span>
    </router-link>
       <router-link  @click="updatePath"
        class="routerButton" 
        to="/my-recipes">
        <span class="material-symbols-rounded">list_alt</span>
<span class="text">My Recipes</span>
    </router-link>
       <router-link   @click="updatePath"
       class="routerButton settings" 
       to="/settings">
       <span class="material-symbols-rounded">settings</span>
       <span class="text">Settings</span>
    </router-link>
        </div> 
       

    </aside>
</template>

<script>
 
export default {
    props:{
     showPannelStatus:Boolean,
    },
data(){
    return{
        showPannel : false,
        prevPath: null
    }
},
methods:{
    toggleMenu(){
        this.showPannel = !this.showPannel;
        this.$emit("updatePannelStatus", this.showPannel); //close menu onClick outside parameter
    },
            
    updatePath(){
        this.prevPath = this.$route.path;
    }
        
    },
    watch:{
        // For img size change
    isImgClicked(){
        this.$refs.img.classList.remove('imgClicked');
        
 },
   $route(){
    
    if (this.prevPath != this.$route.path){ //prevent closing sidebar when user clicks on the opened menu option 
        this.showPannel = false;
    } 
 },
   showPannelStatus(){
    this.showPannel = this.showPannelStatus;
    }

 
 },computed:{

 },

  
   
}

</script>

<style scoped>

/* MENU 1 */
aside{
    box-sizing:border-box;
    display:flex;
    flex-direction: column;
    position:fixed;
    background-color:var(--secondary-color);
    height: 100%;
    width:calc(2rem + 27px); /* 25% / 300px*/
    transition: 0.2s ease-out;
    z-index: 99;
}



h3{
    margin:0;
    color:var(--background-color);
    text-transform: uppercase;
    margin-left:1rem;
    font-size:0.878rem;
}

 .menu{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
} 

img{
    margin-top:1rem;
    width:60px;
}
.menu-toggle-wrap{
    display:flex;
    justify-content: flex-end;
    position:relative;
    top:0;
    transition: 0.2s ease-out;

}

.menu-toggle{
    background:none;
    border:none;
    cursor:pointer;
    transition: 0.2s ease-out;
    color: #Fff;
}

.is-expanded{
    width:200px;
}



.is-expanded .menu-toggle-wrap{
    top:-4rem;

}




.menu-toggle-wrap .material-symbols-rounded{
    font-size:50px;
    transition: 0.2s ease-out;
   
}



h3, .routerButton .text{
    opacity: 0;
    transition : 0.3s ease-out;
    white-space: nowrap;
   
}

.routerButton .text{
    font-size:1.2rem;
}

.is-expanded .routerButton .text{
    opacity: 1;
   
}

.is-expanded h3{
    opacity: 1;
}

.is-expanded .material-symbols-rounded{
    margin-right: 0.5rem;
   
}

.routerButton{
    display:flex;
    text-decoration: none;
    align-items: center;
    padding:0.5rem 1rem;
    transition: background-color 0.2s ease-out;
  
}
.routerButton .material-symbols-rounded{
    font-size:2rem;
    color:var(--background-color);
    transition:0.2s ease-out;
}


.routerButton .text{
    color:var(--background-color);
    transition:0.2s ease-out;
}

.routerButton:hover{
    background-color:var(--hover-menu-color);
}

.router-link-active {
    background-color:var(--hover-menu-color);
    border-right: 5px solid var(--hover-menu-text-color);
}

.routerButton:hover, .router-link-active .text {
color:var(--hover-menu-text-color);
}

.router-link-active .material-symbols-rounded {
    color:var(--hover-menu-text-color);
}

.settings {
  margin-top: auto;
  margin-bottom:1rem;
}

@media screen and (max-width: 600px) {
    aside{
        width:17%;
    }
  
    .is-expanded{
    width:200px;
}



}

@media screen and (min-width:600px){
    .menu-toggle-wrap .material-symbols-rounded:hover{
    transform: translateX(0.5rem);
    color:var(--orange-color);
}


}

</style>

