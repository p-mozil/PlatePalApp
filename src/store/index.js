import { createStore } from "vuex";



export default createStore({
state:{
  appKey: '93df142bc4b2ecd814335efda58c998a',
  appId: '46ce72c9',
  recipe:'',
  isFetching: false,
  isError : false,
  errorMsg : '',
  from : 0,
  to : 10,
  pgNumber : 1,
  selectedRecipe: '',

},
getters:{

  fatchingState(state){
    return state.isFetching;
  },
  recipes(state){
    return state.recipe;
  },
  from(state){
    return state.from;
  },
  to(state){
    return state.to;
  },
  pgNumber(state){
    return state.pgNumber;
  }

  

},
mutations:{
  changeLoadingState(state,isFetching){
    state.isFetching = isFetching;
  },
  changeErrorState(state,isError){
    state.isError = isError;
  },

  changeErrorMsg(state,errorMsg){
    state.errorMsg = errorMsg;
  },
  changeResponse(state,recipe){
    state.recipe = recipe;
  },

  prevPage(state){
    state.pgNumber = state.pgNumber - 1;
    state.from = state.from - 10;
    state.to = state.to -10;
  },

  nextPage(state){
    state.pgNumber = state.pgNumber + 1;
    state.from = state.from + 10;
    state.to = state.to +10;
  },

  showMoreRecipe(state,recipe){
  state.selectedRecipe = recipe;
  }

},
actions:{

    async getData(store,query) {

        try {
          let data = '';
          window.scrollTo({ top: 0, behavior: 'smooth' });
           store.commit("changeLoadingState", true);
          if (!query) {
             store.commit("changeErrorState", true);
             store.commit("changeErrorMsg", "Please provide at least one ingredient.");
             store.commit("changeLoadingState", false);
          } else {
             store.commit("changeErrorState", false);
            const response = await fetch(
              `https://api.edamam.com/search?q="${query}"&app_id=${store.state.appId}&app_key=${store.state.appKey}&from=${store.state.from}&to=${store.state.to}`
      
            );
            console.log("GeTDATA");
            data = await response.json();
            if(data.hits.length< 1){
              store.commit("changeErrorState", true);
              store.commit("changeLoadingState", false);
              store.commit("changeErrorMsg", "Sorry, we couldn't find a recipe based on the ingrediens entered");
            }
            store.commit("changeResponse",data.hits);
            console.log(store.recipe);
            store.commit("changeLoadingState", false);
          }
        } catch {
          store.commit("changeErrorState", true);
          store.commit("changeErrorMsg", "Error fetching dishes. Please try again later.");
          store.commit("changeLoadingState", false);
        }
      },
    
},
modules:{

}
})