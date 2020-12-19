<template>
  <div class="text-center">
    <ul>
      <li>
        <label class="select"
          >Favorite and Promo
          <input type="radio" name="radio" checked="checked" hidden />
          <span class="checkmark"></span>
        </label>
      </li>
      <li>
        <label class="select"
          >Coffee
          <input
            type="radio"
            v-model="searchCategory"
            value="value"
            name="radio"
            hidden
          />
          <span class="checkmark"></span>
        </label>
      </li>

      <li>
        <label class="select"
          >Non Coffee
          <input
            type="radio"
            v-model="searchCategory"
            value="noncoffee-J95yQgd"
            name="radio"
            hidden
          />
          <span class="checkmark"></span>
        </label>
      </li>
      <li>
        <label class="select"
          >Foods
          <input
            type="radio"
            v-model="searchCategory"
            value="food-Z6RTUvh"
            name="radio"
            hidden
          />
          <span class="checkmark"></span>
        </label>
      </li>
      <li>
        <label class="select"
          >Add-On
          <input type="radio" name="radio" hidden />
          <span class="checkmark"></span>
        </label>
      </li>
      <li>
        <label class="select"
          >Sort By
          <b-dropdown text="" variant="outline" dropleft>
            <b-dropdown-item href="#">Name A-Z</b-dropdown-item>
            <b-dropdown-item href="#">Name Z-A</b-dropdown-item>
            <b-dropdown-item href="#">Highest Price</b-dropdown-item>
            <b-dropdown-item href="#">Lowest Price</b-dropdown-item>
          </b-dropdown>
        </label>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchCategory: ''
    }
  },
  created() {
    console.log(this.searchCategory)
  }
}
</script>
<style scoped>
ul {
  padding: 0 !important;
  list-style-type: none;
}
li {
  display: inline-block;
  margin-top: 20px;
}
.select {
  padding: 0 10px;
  display: inline-block;
  position: relative;
  z-index: 1;
  margin: 0 10px;
  font-family: 'Patrick Hand', cursive;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: rgb(85, 84, 84);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkmark {
  text-align: center;
  position: absolute;
  top: 27px;
  left: 0;
  height: 3px;
  width: 100%;
}

.select:hover input ~ .checkmark {
  background-color: #6a4029;
}
.select:hover {
  transform: scale(1.05);
  background-color: rgb(255, 243, 177);
  color: #6a4029;
}
.select input:checked ~ .checkmark {
  background-color: #6a4029;
}
@media (max-width: 600px) {
  li,
  .select {
    display: block;
    margin: 10px 0;
  }
}
</style>
