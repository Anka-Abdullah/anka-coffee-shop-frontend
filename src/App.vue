<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap');
* {
  font-family: 'Gamja Flower', cursive;
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
  outline: none;
}
.anka-card {
  margin: 20px;
  padding: 10px 20px;
  border-radius: 20px;
  align-items: center;
}
.anka-title {
  color: #6a4029;
  letter-spacing: 1px;
  font-weight: 600;
  font-family: 'Patrick Hand', cursive;
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
