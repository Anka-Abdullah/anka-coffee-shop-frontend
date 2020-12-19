<template>
  <div>
    <div class="sunday anka-card" style="background: #f5c361; display: flex;">
      <div class="img-card">
        <img src="../../assets/sunday.png" alt="sunday" />
      </div>
      <div class="txt-card">
        <b-badge variant="info"
          ><b-icon icon="pencil-fill" scale="1.5" variant="dark"></b-icon
        ></b-badge>
        <h6 class="anka-title m-0 mt-1">
          Code : uIjgiu12
        </h6>
        <b>Promo Name</b><br />
        <b>Minimum order: 8627798729</b><br />
        <b>Maksimum Discount: 8627798729</b>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
span {
  position: absolute !important;
  width: 32px;
  height: 32px;
  margin-left: 250px;
  margin-top: -20px;
  line-height: 28px;
  border-radius: 30px;
}

span:hover {
  transform: scale(1.2);
}
@media (max-width: 600px) {
  span {
    margin-left: 200px;
    margin-top: -20px;
  }
}
</style>
