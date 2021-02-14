<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  created() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  },
  methods: {
    ...mapActions(['interceptorsRequest', 'interceptorsResponse'])
  }
}
</script>
<style>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-thumb {
  background: #ffa600;
}
::-webkit-scrollbar-thumb:hover {
  background: #6a4029;
}
body {
  overflow-x: hidden;
}
p {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.6px;
}
a {
  color: rgb(85, 84, 84);
  text-decoration: none;
}
a:hover {
  text-decoration: none !important;
}
button {
  border: none;
  background: none;
  border-radius: 10px;
}
button:focus {
  outline: none !important;
}
.anka-card {
  margin: 20px;
  padding: 10px 20px;
  border-radius: 20px;
  align-items: center;
}
.anka-title {
  color: #6a4029;
}
.anka-text-shadow {
  color: white;
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 1), 2px -10px 35px rgba(0, 0, 0, 1) !important;
}
.chocolate {
  border-radius: 20px;
  margin: 0 20px;
  color: white;
  font-family: 'patrick_handregular', cursive;
  font-size: 18px;
  padding: 5px 35px;
  background-color: #6a4029;
}
.chocolate:hover {
  background-color: #412719;
  transform: scale(0.98);
}
.yellow {
  font-weight: 700;
  color: #6a4029;
  background-color: #ffba33;
}
.yellow:hover {
  transform: scale(0.98);
  background-color: #c79227;
}
.putih {
  font-weight: 700;
  color: #6a4029;
  background-color: #ffffff;
  border: 1px solid #6a4029;
  padding: 10px 35px;
}
.putih:hover {
  color: #6a4029 !important;
  transform: scale(0.98);
  background-color: #c7c7c7;
}
input.b-input {
  border: none;
  width: 95%;
  border-bottom: 1px solid #6a4029;
}
input.b-input:focus {
  outline: none;
  border-bottom: 3px solid #ffba33;
}
.logo {
  font-family: 'caveatregular', cursive;
  font-size: 25px;
  font-weight: 700;
  color: rgb(100, 100, 100);
}
.authbg {
  height: 100vh;
  background-image: url('./assets/background3.png');
  background-size: 57%;
  background-attachment: fixed;
}
.responsive {
  display: none;
}
@media (max-width: 900px) {
  .responsive {
    display: block;
  }
  .desktop {
    display: none;
  }
}
</style>
