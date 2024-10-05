<template>
  <header class="header wow fadeInDown navigation affix-top">
    <div class="container">
        <nav class="header__nav">
            <a href="#" class="logo">
                <img src="./src/images/icons/logo.svg" alt="antools.">
                <h2 class="logo__title">
                    antools.
                </h2>
            </a>
            <div class="header__left">
                <ul class="header__list">
                    <li class="header__item">
                        <a href="#" class="header__link">Home</a>
                    </li>
                    <li class="header__item">
                        <a href="#" class="header__link">Categories</a>
                    </li>
                    <li class="header__item">
                        <a href="./pages/newcomer/index.html" class="header__link">My Collection</a>
                    </li>
                    <li class="header__item">
                        <a href="#" class="header__link">Blog</a>
                    </li>
                </ul>
                <div class="header__register">
                    <a href="#" class="header__link header__link_weight">
                        Login
                    </a>
                    <button class="btn btn_header">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
        <div class="header__mobile">
            <span class="header__mobile-line"></span>
        </div>
    </div>
    <aside class="mobile">
    <p class="mobile_exit">X</p>
    <ul class="mobile__list">
        <li class="header__item">
            <a href="#" class="header__link">Home</a>
        </li>
        <li class="header__item">
            <a href="#" class="header__link">Categories</a>
        </li>
        <li class="header__item">
            <a href="./pages/newcomer/index.html" class="header__link">My Collection</a>
        </li>
        <li class="header__item">
            <a href="#" class="header__link">Blog</a>
        </li>
    </ul>
    <div class="mobile__btns">
        <a href="#" class="header__link header__link_weight">
            Login
        </a>
        <button class="btn btn_header">
            Sign Up
        </button>
    </div>
    </aside>
  </header>
</template>

<script>
export default {
    data() {
        return
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@500&family=Poppins:wght@400;500;600&family=Roboto&display=swap");
* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  outline: none;
  text-decoration: none;
  list-style: none;
  color: rgba(255, 255, 255, 0.55);
  font-family: "Poppins", sans-serif;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  scroll-behavior: smooth;
}

.container {
  max-width: 1264px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  background: #FF6E30;
  border-radius: 8px;
  padding: 9px 35px;
  border: none;
  cursor: pointer;
}
.btn:hover {
  -webkit-box-shadow: 0 0 10px 1px #FF6E30;
          box-shadow: 0 0 10px 1px #FF6E30;
}
.btn_header {
  padding: 12px 28px;
  color: #FDF5FF;
}
.btn_search {
  padding: 12px 36.12px;
  position: absolute;
  top: 50%;
  right: 11px;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}
.btn_explore {
  padding: 16px 40px 15px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
}

.title {
  font-weight: 500;
  font-size: 48px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.9);
}

.subtitle {
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
}
.subtitle_weight {
  font-weight: 400;
}

.logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-column-gap: 12px;
     -moz-column-gap: 12px;
          column-gap: 12px;
}
.logo__title {
  font-weight: 600;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.9);
}

.card {
  overflow: hidden;
  position: relative;
  cursor: pointer;
  padding: 34px 33px 42px;
  border-radius: 15px;
  width: calc(33.33333% - 15.333333px);
}
.card-size {
  width: 288px;
  padding: 28px 22px;
}
.card:hover {
  -webkit-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: rgba(40, 48, 54, 0.6);
  -webkit-backdrop-filter: blur(25px);
          backdrop-filter: blur(25px);
  -webkit-transform: translateY(-20px);
          transform: translateY(-20px);
}
.card:hover .card-title {
  color: rgba(255, 255, 255, 0.9);
}
.card:hover .card-desc {
  color: #FFA537;
}
.card:hover .card-subtitle {
  color: rgba(255, 255, 255, 0.78);
}
.card:hover .card-btn {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  background: #FF6E30;
  border-radius: 8px;
  padding: 9px 35px;
  border: none;
  cursor: pointer;
}
.card:hover .card-orange {
  background: rgba(255, 110, 48, 0.6);
  -webkit-filter: blur(25px);
          filter: blur(25px);
}
.card:hover .card-like {
  background: #283036;
  -webkit-box-shadow: 0 5px 10px -3px rgba(18, 18, 18, 0.15);
          box-shadow: 0 5px 10px -3px rgba(18, 18, 18, 0.15);
}
.card:hover .card-like svg path {
  fill: #FD3B41;
  fill-opacity: 1;
}
.card-top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-column-gap: 40px;
     -moz-column-gap: 40px;
          column-gap: 40px;
}
.card-title {
  font-weight: 500;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.78);
}
.card-subtitle {
  margin: 30px 0;
  font-size: 16px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.55);
}
.card-subtitle_size {
  font-size: 14px;
}
.card-desc {
  margin-top: 3px;
  font-size: 18px;
  color: rgba(255, 165, 55, 0.55);
}
.card-bottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.card-icons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-column-gap: 28.67px;
     -moz-column-gap: 28.67px;
          column-gap: 28.67px;
}
.card-icons_column {
  -webkit-column-gap: 20px;
     -moz-column-gap: 20px;
          column-gap: 20px;
}
.card-like {
  width: 42px;
  height: 42px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  background: transparent;
  border-radius: 8px;
}
.card-btn {
  background: transparent;
  color: rgba(255, 255, 255, 0.55);
}
.card-orange {
  position: absolute;
  top: 0;
  right: 0;
  width: 65px;
  height: 65px;
  background: transparent;
}

.form {
  position: relative;
  max-width: 497.66px;
}
.form__label {
  width: 100%;
  background: #283036;
  border-radius: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-column-gap: 13px;
     -moz-column-gap: 13px;
          column-gap: 13px;
  padding: 21px;
}
.form__input {
  width: 60%;
  background: transparent;
  border: none;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.38);
}

.mobile {
  position: fixed;
  top: 0;
  right: 0;
  -webkit-transform: translateX(115%);
          transform: translateX(115%);
  width: 195px;
  height: 100vh;
  overflow: auto;
  z-index: 10;
  padding: 100px 30px;
  background-color: #283036;
  -webkit-box-shadow: 0 0 20px #000;
          box-shadow: 0 0 20px #000;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
}
.mobile__btns {
  margin-top: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  row-gap: 25px;
}
.mobile_exit {
  position: absolute;
  top: 50px;
  right: 20px;
  font-size: 20px;
  color: #FF6E30;
}
.mobile .header__link {
  font-size: 20px;
}

.header {
  padding: 26px 0;
  width: 100%;
  background-color: #1E252B;
}
.header.fixed {
  position: fixed;
}
.header__nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.header__left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-column-gap: 193px;
     -moz-column-gap: 193px;
          column-gap: 193px;
}
.header__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-column-gap: 40px;
     -moz-column-gap: 40px;
          column-gap: 40px;
}
.header__register {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-column-gap: 41px;
     -moz-column-gap: 41px;
          column-gap: 41px;
}
.header__link {
  position: relative;
  font-weight: 500;
  font-size: 16px;
}
.header__link:hover {
  color: white;
}
.header__link:hover::before {
  -webkit-transform: scale(1, 1);
          transform: scale(1, 1);
}
.header__link::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 2px;
  left: 0;
  bottom: -4px;
  background-color: #FF6E30;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  -webkit-transform: scale(0, 1);
          transform: scale(0, 1);
}
.header__link-weight {
  font-weight: 600;
  opacity: 0.78;
}
.header__mobile {
  display: none;
}

@media (max-width: 992px) {
  .mobile_active {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  .header__list {
    display: none;
  }
  .header__register {
    display: none;
  }
  .header__mobile {
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .header__mobile-line {
    width: 40px;
    height: 3px;
    border-radius: 1.5px;
    background: #FF6E30;
    top: 50%;
    left: 0;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    position: absolute;
  }
  .header__mobile-line:before {
    content: "";
    position: absolute;
    width: 40px;
    height: 3px;
    border-radius: 1.5px;
    background: #FF6E30;
    left: 0;
    top: -10px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
  .header__mobile-line:after {
    content: "";
    position: absolute;
    width: 40px;
    height: 3px;
    border-radius: 1.5px;
    background: #FF6E30;
    left: 0;
    top: 10px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
}
</style>