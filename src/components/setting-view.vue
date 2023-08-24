<template>
     <div @click="closePanel" class="app">
        <p>Setting view</p>
        <p>In developing</p>
    </div>
</template>

<script>

export default {
data(){
    return{
       
    }
},
methods:{
    closePanel(){
this.$emit("updatePannelStatus", false);
    }
}
}
</script>

<style scoped>

p{
    text-align: center;
    padding-top:2rem;
}


@media screen and (max-width: 600px) {
}


</style>

