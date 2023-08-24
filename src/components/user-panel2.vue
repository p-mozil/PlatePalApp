<template>
    <aside :class="`${showPannel ? 'is-expanded' : ''}`">
        <div class="header">
            <img src="../../public/img/logo3.png" alt="platepal">
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu"><span class="material-symbols-rounded">
                {{menuIcon}}
</span></button>
        </div>
        </div>
       
        
        <div class="menu">
            <h3>Menu</h3>
            <router-link
        class="routerButton"
        to="/search-recipe">
        <span class="material-symbols-rounded">search</span>
        <span class="text">Search</span>
    </router-link>
       <router-link
        class="routerButton" 
        to="/my-recipes">
        <span class="material-symbols-rounded">list_alt</span>
<span class="text">My Recipes</span>
    </router-link>
       <router-link 
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
        menuIcon : "menu"
    }
},
methods:{
    toggleMenu(){
        this.showPannel = !this.showPannel;
        if(this.showPannel){
            this.menuIcon = "menu_open"
        }else{
            this.menuIcon = "menu"
        }
        this.$emit("updatePannelStatus", this.showPannel); //close menu onClick outside parameter
    },
            
   
        
    },
    watch:{

//close menu onClick outside
   showPannelStatus(){
    if (!this.showPannelStatus){
        this.showPannel = true;
        this.toggleMenu();
    }
    }

 },computed:{
   
 },


}

</script>

<style scoped>

aside{
    box-sizing:border-box;
    display:flex;
    flex-direction: column;
    position:fixed;
    background-color:var(--secondary-color);
    height: 100%;
    width:0px; /* 25% / 300px*/
    transition: 0.2s ease-out;
    z-index: 99;
}

.header{
    display:flex;
    
}
.is-expanded .header{
    justify-content: space-between;
}


h3{
    margin:0;
    color:var(--background-color);
    text-transform: uppercase;
    margin-left:1rem;
    font-size:0.878rem;
}

 .menu{
    margin-top:3rem;
    display:none;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    
} 

img{
    margin-top:0.3rem;
    width:40%;
}
.menu-toggle-wrap{
    display:flex;
}

.menu-toggle{
    position:relative;
    background:none;
    border:none;
    cursor:pointer;
    color: #Fff;
}


.is-expanded{
    width:200px;
}

.menu-toggle-wrap .material-symbols-rounded{
    font-size:3.3rem;
    color:var(--main-color);
   
}

.is-expanded .menu-toggle-wrap .material-symbols-rounded{
    color:var(--background-color);
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

.is-expanded .menu{
    display:flex;
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
    .menu-toggle-wrap{
        top:-0.8rem;
        left:0;
        
    }
    
  
    .is-expanded{
    width:200px;
}



}

 @media screen and (min-width:600px){
    .menu-toggle-wrap .material-symbols-rounded:hover{
    transform: scale(1.2);
    color:var(--orange-color);
}
}  

</style>

