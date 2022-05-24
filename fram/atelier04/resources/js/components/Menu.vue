<template>
 <!-- Nav bar -->
 
 <nav class="navbar navbar-dark bg-dark justify-content-between flex-nowrap 
flex-row">
<a class="navbar-brand float-left">
 <router-link class="nav-link navbar-brand pr-3" to="/registere">
 Authentification 
 </router-link>
 </a>

 <div class="container">
    <a class="navbar-brand float-left">Projet</a>
 <ul class="nav navbar-nav flex-row float-right">
 <li class="nav-item">
 <router-link class="nav-link navbar-brand 
 pr-3" to="/"  style="padding: left 20cm;"> Home </router-link>
 </li>


 <li class="nav-item">
<router-link class="nav-link pr-3" to="/categories"  style="padding-left:2cm"> Catégories </router-link>
</li>
<li class="nav-item">

 <router-link class="nav-link navbar-brand pr-3"
to="/articles" style="padding-left:2cm"> Articles </router-link>
</li>
    <li class="nav-item">
<router-link class="nav-link pr-3" to="/scategories" style="padding-left:2cm"> sous categories </router-link>
</li>
 <a class="navbar-brand float-left">
 <router-link class="nav-link" to="/logout"  style="padding: left 1cm;"> Logout </router-link>
 </a>
  </ul>
 </div>
 </nav>
</template>
 
<script>
 export default {} 
</script>
