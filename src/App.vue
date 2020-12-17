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
  letter-spacing: 1px;
  font-weight: 600;
  font-family: 'Patrick Hand', cursive;
}
.chocolate {
  border-radius: 20px;
  margin: 0 20px;
  color: white;
  font-family: 'Patrick Hand', cursive;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
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
