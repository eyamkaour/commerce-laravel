import { createRouter,createWebHashHistory } from 'vue-router'
import AllCategories from "./components/Categories/AllCategories"; 
import Home from "./Home"; 
import AddCategorie from "./components/Categories/AddCategorie"; 
import EditCategorie from "./components/Categories/EditCategorie";
import AllScategories from "./components/SousCategories/AllSousCategories"; 
import AddScategorie from "./components/SousCategories/AddSousCategorie";
import EditSousCategorie from "./components/SousCategories/EditSousCategorie";
import AllArticles from "./components/Articles/AllArticles"; 
import AddArticles from "./components/Articles/AddArticle"; 
import EditArticle from "./components/Articles/EditArticle"; 
import Register from './components/Authentification/Register.vue'; 
import Login from './components/Authentification/Login.vue'; 
import Profile from './components/Authentification/Profile.vue';
import Logout from './components/Authentification/Logout.vue'; 
import Registere from './components/Authentification/Registere.vue'; 
import  Logine from './components/Authentification/Logine.vue'
import Profilee from './components/Authentification/Profilee.vue';
import Homee from "./components/Home.vue"; 

const routes = [ 
 { 
 path: '/', 
 name: 'home', 
 component: Home 
 } ,
 {
 path: '/categories',
 name: 'categories',
 component: AllCategories
 } ,
 {
    path: '/addCategorie',
    name: 'addCategorie',
    component: AddCategorie
    }, {
        path: '/editCategorie', 
        name: 'editCategorie',
        component: EditCategorie
 } ,
 { 
    path: '/scategories', 
    name: 'scategories', 
    component: AllScategories 
    },
    { 
        path: '/addScategories', 
        name: 'addScategories', 
        component: AddScategorie 
        }, 
        { 
            path: '/editScategorie', 
            name: 'editScategorie', 
            component: EditSousCategorie 
            }, 
            { 
                path: '/articles', 
                name: 'articles', 
                component: AllArticles 
                }, 
                { 
                    path: '/addArticle', 
                    name: 'addArticle', 
                    component: AddArticles 
                    }, 
                { 
                     path: '/editArticle', 
                      name: 'editArticle', 
                      component: EditArticle 
                        }, 
                        { 
                            name: 'register', 
                            path: '/register', 
                            component: Register 
                            }, 
                            { 
                            name: 'login', 
                            path: '/login', 
                            component: Login 
                            }, 
                            { 
                            name: 'profile', 
                            path: '/profile', 
                            component: Profile},
                            { 
                                name: 'logout', 
                                path: '/logout', 
                                component: Logout 
                                },  
                                { 
                                    name: 'profilee', 
                                    path: '/profilee', 
                                    component: Profilee},
                                    { 
                                        name: 'registere', 
                                        path: '/registere', 
                                        component: Registere 
                                        }, 
                                        { 
                                        name: 'logine', 
                                        path: '/logine', 
                                        component: Logine 
                                        },
                                        { 
                                            path: '/homee', 
                                            name: 'homee', 
                                            component: Homee 
                                            }

                                   
    
 ]; 
const router = createRouter({ 
 history: createWebHashHistory(), 
 routes 
 },
 
 ) 
 
export default router 
