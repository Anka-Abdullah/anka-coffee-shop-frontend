<template>
  <div>
    <nav style="position: fixed;">
      <nav>
        <div class="menu-icon" @click="menu()">
          <b-icon
            icon="justify"
            scale="2"
            variant="dark"
            aria-hidden="true"
          ></b-icon>
        </div>

        <div class="logo">
          <img
            src="../../assets/Coffee-icon.png"
            style="margin: -7px 4px 0 0;"
          />Coffee Shop
        </div>
        <div class="nav-items">
          <li><router-link to="#" class="aktip">Home</router-link></li>
          <li><router-link to="#">Product</router-link></li>
          <li><router-link to="#">Your Cart</router-link></li>
          <li><router-link to="#">History</router-link></li>
          <li class="responsive">
            <router-link to="#">Chat Room</router-link>
          </li>
          <li class="responsive">
            <router-link to="#">My Profile</router-link>
          </li>
        </div>
        <div class="search-icon" @click="search()">
          <b-icon
            icon="search"
            scale="1.5"
            variant="dark"
            aria-hidden="true"
          ></b-icon>
        </div>
        <div class="cancel-icon" @click="cancel()">
          <b-icon
            icon="x-square-fill"
            scale="1.5"
            variant="danger"
            aria-hidden="true"
          ></b-icon>
        </div>
        <form action="#">
          <input
            type="text"
            class="search-data"
            placeholder="Search"
            required
          />
          <button type="submit">
            <b-icon icon="search" variant="dark" aria-hidden="true"></b-icon>
          </button>
        </form>
        <router-link to="/about" class="desktop"
          ><b-icon
            class="mx-5"
            icon="chat-dots"
            scale="1.5"
            variant="dark"
            aria-hidden="true"
          ></b-icon
        ></router-link>
        <router-link to="" class="desktop"
          ><b-avatar src="https://placekitten.com/300/300"></b-avatar
        ></router-link>
      </nav>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuBtn: document.querySelector('.menu-icon'),
      searchBtn: document.querySelector('.search-icon'),
      cancelBtn: document.querySelector('.cancel-icon'),
      items: document.querySelector('.nav-items'),
      form: document.querySelector('form')
    }
  },
  methods: {
    menu() {
      document.querySelector('.nav-items').classList.add('active')
      document.querySelector('.menu-icon').classList.add('hide')
      document.querySelector('.search-icon').classList.add('hide')
      document.querySelector('.cancel-icon').classList.add('show')
    },
    cancel() {
      document.querySelector('.nav-items').classList.remove('active')
      document.querySelector('.menu-icon').classList.remove('hide')
      document.querySelector('.search-icon').classList.remove('hide')
      document.querySelector('.cancel-icon').classList.remove('show')
      document.querySelector('form').classList.remove('active')
    },
    search() {
      document.querySelector('form').classList.add('active')
      document.querySelector('.search-icon').classList.add('hide')
      document.querySelector('.cancel-icon').classList.add('show')
    }
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
nav {
  background: white;
  border-bottom: 0.5px solid rgb(226, 226, 226);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 40px;
  z-index: 2;
}
nav .logo {
  font-family: 'Patrick Hand', cursive;
  font-size: 27px;
  font-weight: 500;
  letter-spacing: 2px;
  margin-left: 10px;
  color: black;
}
nav .nav-items {
  display: flex;
  flex: 1;
  padding: 0 0 0 40px;
}
nav .nav-items li {
  list-style: none;
  padding: 0 15px;
}
nav .nav-items li a {
  font-weight: 500;
  font-size: 23px;
  margin: 0 12.5px;
  color: rgb(85, 84, 84) !important;
  letter-spacing: 1px;
}
nav .nav-items li a:hover {
  color: #6a4029;
  background-color: rgb(255, 243, 177);
}
nav form {
  display: flex;
  height: 40px;
  padding: 2px;
  min-width: 18% !important;
  border-radius: 2px;
  background: white;
  border: 1px solid #6a4029;
}
nav form .search-data {
  width: 100%;
  height: 100%;
  padding: 0 5px;
  color: black;
  background: rgb(255, 251, 243);
  font-size: 18px;
  border: none;
}
nav form button {
  padding: 0 15px;
  font-size: 17px;
  border: none;
  background: rgb(255, 251, 243);
  border-radius: 2px;
  cursor: pointer;
}
nav .menu-icon,
nav .cancel-icon,
nav .search-icon {
  width: 40px;
  text-align: center;
  margin: 0 50px;
  font-size: 18px;
  color: #6a4029;
  cursor: pointer;
  display: none;
}
nav .menu-icon span,
nav .cancel-icon,
nav .search-icon {
  display: none;
}
.aktip {
  color: #4e1b00 !important;
  background: rgb(255, 245, 226);
  padding: 0 10px;
  border-bottom: 2px solid #412719;
}
@media (max-width: 1245px) {
  nav {
    padding: 0 50px;
  }
}
@media (max-width: 1140px) {
  nav {
    padding: 0px;
  }
  nav .logo {
    flex: 2;
    text-align: center;
  }
  nav .nav-items {
    position: fixed;
    z-index: 99;
    top: 90px;
    width: 100%;
    left: -100%;
    padding: 15px 50px;
    text-align: center;
    background: #dadada;
    display: inline-block;
    transition: left 0.3s ease;
  }
  nav .nav-items.active {
    left: 0px;
  }
  nav .nav-items li {
    line-height: 40px;
    margin: 10px 0;
  }
  nav .nav-items li a {
    font-size: 20px;
  }
  nav form {
    position: absolute;
    top: 80px;
    right: 50px;
    opacity: 0;
    pointer-events: none;
    transition: top 0.2s ease;
    border: 1px solid rgb(255, 115, 0);
  }
  nav form.active {
    top: 90px;
    opacity: 1;
    pointer-events: auto;
  }
  nav form:after {
    position: absolute;
    content: '';
    height: 60px;
    padding: 2px;
    background: #ffffff;
    border-radius: 2px;
    min-width: calc(100% + 20px);
    z-index: -2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  nav .menu-icon {
    display: block;
  }
  nav .search-icon,
  nav .menu-icon span {
    display: block;
  }
  nav .menu-icon span.hide,
  nav .search-icon.hide {
    display: none;
  }
  nav .cancel-icon.show {
    display: block;
  }
}
.space {
  margin: 10px 0;
}
nav .logo.space {
  color: red;
  padding: 0 5px 0 0;
}
@media (max-width: 980px) {
  nav .menu-icon,
  nav .cancel-icon,
  nav .search-icon {
    margin: 0 20px;
  }
  nav form {
    right: 30px;
    border: 1px solid rgb(255, 115, 0);
  }
}
@media (max-width: 350px) {
  nav .menu-icon,
  nav .cancel-icon,
  nav .search-icon {
    margin: 0 10px;
    font-size: 16px;
  }
}
</style>
