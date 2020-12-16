<template>
  <div>
    <div class="card-item">
      <img
        src="../../assets/latte.png"
        width="120"
        class="rounded-pill"
        alt="item"
      />
      <div class="card-item-discount">20%</div>
      <h4 class="card-item-title">{{ productName }}</h4>
      <h6 class="anka-title">IDR {{ productPrice }}</h6>
    </div>
  </div>
</template>
<script>
export default {
  props: ['productName', 'productPrice']
}
</script>
<style scoped>
.card-item {
  padding: 5px;
  margin: 50px 0px 40px 0px;
  border-radius: 30px;
  width: 140px;
  height: 200px;
  text-align: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072);
}
.card-item:hover {
  transform: scale(1.1);
}
.card-item img {
  margin-top: -40px;
}
.card-item-discount {
  position: absolute;
  background: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 70px;
  border-radius: 20px;
  font-weight: 800;
  font-size: 23px;
  margin-top: -90px;
  margin-left: 90px;
}
.card-item-title {
  font-size: 25px;
  font-weight: 800;
  font-family: 'Patrick Hand', cursive;
  margin-top: 12px;
}
</style>
