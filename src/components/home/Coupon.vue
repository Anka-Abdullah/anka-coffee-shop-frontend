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
          Get a cup of coffee for free <br />
          on sunday morning
        </h6>
        <p>Only at 7 to 9 AM</p>
      </div>
    </div>
  </div>
</template>
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
