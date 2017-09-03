<template>
  <div id="homediv">

	  <div id="header">
		  <h1>Manage</h1>
	  </div>

	  <div id="nav">
          <div>
              <router-link to="/home/goods">个人</router-link>
          </div>
          <div>
              <router-link to="/home/comment">控制台</router-link>
          </div>
          <div>
              <router-link to="/home/seller">three</router-link>
          </div>
	  </div>

	  <div id="section">
          <router-view></router-view>
	  </div>

	  <div id="footer">
		  Footer in demo  
	  </div>
  </div>
</template>

<script>
export default {
}

</script>




<style>
#homediv {
height:100%;
}
#header {
background-color:black;
color:white;
text-align:center;
padding:5px;
}
#nav {
line-height:30px;
background-color:#eeeeee;
height:100%;
width:10%;
float:left;
padding:5px;	      
}
#section {
width:350px;
height:100%;
float:left;
padding:10px;		 
}
#footer {
background-color:black;
color:white;
clear:both;
text-align:center;
padding:5px;		 
}
</style>
