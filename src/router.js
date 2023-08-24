import {createRouter,createWebHashHistory} from 'vue-router'
 import settingview from './components/setting-view';
import myRecipesView from './components/my-recipes';
 import inputComponent from './components/input-component';
 import instructionComponent from './components/instruction-component';

const routes = [
    {
        path: "/",
        redirect: { 
            // component : inputComponent
            path: "/search-recipe" 
        },
    },
    {
    path: '/settings',
    component: settingview,
    props:true
},
{
    path: '/search-recipe',
    component : inputComponent,
},
{
    path: '/my-recipes',
    component : myRecipesView,
},
{
    name:'instructionComponent',
    path: '/search-recipe/recipe-detail/:label',
    component : instructionComponent,
    props:true
},

 {
     path: "/:catchAll(.*)",
    component : inputComponent
 }
]

const router = new createRouter({
    history : createWebHashHistory(),
    routes,
    scrollBehavior () {
        return {top: 0 }
        
      }

})


export default router;

