<template>
  <!-- start: REGISTRATION -->
  <div class="row registerform">
    <div class="main-login col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5">
      <div class="logo text-center">
        <img src="/static/img/logo.png" alt="logo" class="img-responsive" />
      </div>
      <p class="text-center text-dark text-bold text-extra-large margin-top-15">
        Sign Up
      </p>
      <p class="text-center">
        Enter your personal details below:
      </p>
      <!-- start: REGISTER BOX -->
      <div class="box-register">
        <form class="form-register">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              v-model="full_name"
              name="full_name"
              placeholder="Full Name">
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              v-model="phone_number"
              name="phone_number"
              placeholder="Phone Number">
          </div>
          <div class="form-group">
            <label class="block text-center text-small"> Gender: </label>
            <div class="clip-radio radio-primary text-center">
              <input type="radio" id="rg-female" name="gender" value="female" v-model="picked">
              <label for="rg-female"> Female </label>
              <input type="radio" id="rg-male" name="gender" value="male" v-model="picked">
              <label for="rg-male"> Male </label>
            </div>
          </div>
          <p>
            Enter your account details below:
          </p>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              v-model="email"
              name="email"
              placeholder="Email">
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              name="password"
              placeholder="Password">
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              v-model="password_again"
              name="password_again"
              placeholder="Password Again">
          </div>
          <div class="form-group">
            <div class="checkbox clip-check check-primary">
              <input type="checkbox" id="agree" name="agree" value="agree" v-model="checked">
              <label for="agree"> I agree </label>
            </div>
          </div>
          <div class="form-actions">
            <p class="text-center">
              Already have an account?
              <a href="login_signin.html"> Log-in </a>
            </p>
            <button
              class="btn btn-red btn-block"
              @click="register">
              Submit
            </button>
          </div>
          <hr />
          <p class="margin-top-10 text-center">
            Or sign up with a social network
          </p>
          <div class="social-icons text-center">
            <ul>
              <li class="social-twitter" uib-tooltip="Twitter" tooltip-placement="top">
                <a target="_blank" href="#"> Twitter </a>
              </li>
              <li class="social-google" uib-tooltip="Google" tooltip-placement="top">
                <a target="_blank" href="#"> Google </a>
              </li>
              <li class="social-facebook" uib-tooltip="Facebook" tooltip-placement="top">
                <a target="_blank" href="#"> Facebook </a>
              </li>
            </ul>
          </div>
        </form>
        <!-- start: COPYRIGHT -->
        <div class="copyright">
          2018 &copy; MusicApp by AlgoGear Indonesia.
        </div>
        <!-- end: COPYRIGHT -->
      </div>
      <!-- end: REGISTER BOX -->
    </div>
  </div>
</template>

<script>
import Auth from '@/services/Auth'
export default {
  data () {
    return {
      full_name: '',
      phone_number: '',
      picked: '',
      email: '',
      password: '',
      password_again: '',
      checked: ''
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('email has changed', value)
  //   }
  // },
  methods: {
    async register () {
      const response = await Auth.register({
        full_name: this.full_name,
        phone_number: this.phone_number,
        picked: this.picked,
        email: this.email,
        password: this.password,
        password_again: this.password_again,
        checked: this.checked
      })
      // console.log(response.data)
      // console.log('register button was clicked', this.full_name, this.phone_number, this.picked, this.email, this.password, this.password_again, this.checked)
    }
  }
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'demmy@algogear.com'
  //   }, 2000)
  // }
}
</script>

<style lang="css">
.registerform {
  color: #8e8e93;
  direction: ltr;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  padding: 0;
  margin: 0;
  background: #f7f7f8;
  -webkit-font-smoothing: antialiased !important;
}
label {
  font-weight: normal;
  max-width: 100%;
  margin-bottom: 5px;
}
.block {
  display: block !important;
}
.text-center {
  text-align: center;
}
.text-small {
  font-size: 12px !important;
}
.text-dark {
  color: #5b5b60 !important;
}
.text-extra-large {
  font-size: 17px !important;
}
.text-bold {
  font-weight: 600 !important;
}
.margin-top-15 {
  margin-top: 15px !important;
}
hr {
  background-image: -o-linear-gradient(left center, transparent, rgba(0, 0, 0, 0.2), transparent);
  background-image: -webkit-gradient(linear, left center, transparent, rgba(0, 0, 0, 0.2), transparent);
  background-image: -ms-linear-gradient(left center, transparent, rgba(0, 0, 0, 0.2), transparent);
  background-image: -moz-linear-gradient(left center, transparent, rgba(0, 0, 0, 0.2), transparent);
  background-image: -webkit-linear-gradient(left center, transparent, rgba(0, 0, 0, 0.2), transparent);
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  border: 0 none;
  height: 1px;
  margin: 22px 0;
}
hr.white-line {
  background-image: -o-linear-gradient(left center, transparent, rgba(255, 255, 255, 0.3), transparent);
  background-image: -webkit-gradient(linear, left center, transparent, rgba(255, 255, 255, 0.3), transparent);
  background-image: -ms-linear-gradient(left center, transparent, rgba(255, 255, 255, 0.3), transparent);
  background-image: -moz-linear-gradient(left center, transparent, rgba(255, 255, 255, 0.3), transparent);
  background-image: -webkit-linear-gradient(left center, transparent, rgba(255, 255, 255, 0.3), transparent);
  background-image: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
}
/* ---------------------------------------------------------------------- */
/*  Social Icon
/* ---------------------------------------------------------------------- */
.social-icons ul {
  list-style: none;
  margin: 0 0 -1px 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  margin: 0;
  padding: 0;
  height: 40px;
  overflow: hidden;
}
.social-icons ul li a {
  background-position: 0 0;
  background-repeat: no-repeat;
  display: block;
  height: 80px;
  opacity: 0.6;
  text-indent: -9999px;
  transition: all 0.2s ease 0s;
  width: 40px;
  top: 0;
  font-size: 16px;
  position: relative;
  -moz-transition: all, 0.3s, ease;
  -o-transition: all, 0.3s, ease;
  -webkit-transition: all, 0.3s, ease;
  transition: all, 0.3s, ease;
}
.social-icons ul li a:hover {
  top: -40px;
}
.social-icons ul li a:before {
  position: absolute;
  width: 40px;
  height: 40px;
  font-family: FontAwesome;
  text-indent: 0;
  line-height: 40px;
  top: 0;
  left: 0;
  text-align: center;
  color: #999999;
}
.social-icons ul li a:after {
  position: absolute;
  width: 40px;
  height: 40px;
  font-family: FontAwesome;
  text-indent: 0;
  line-height: 40px;
  top: 40px;
  left: 0;
  text-align: center;
  color: #FFFFFF;
}
.social-icons ul li.social-twitter a:before, .social-icons ul li.social-twitter a:after {
  content: "\f099";
}
.social-icons ul li.social-twitter a:after {
  background: #48C4D2;
}
.social-icons ul li.social-dribbble a:before, .social-icons ul li.social-dribbble a:after {
  content: "\f17d";
}
.social-icons ul li.social-dribbble a:after {
  background: #EF5B92;
}
.social-icons ul li.social-facebook a:before, .social-icons ul li.social-facebook a:after {
  content: "\f09a";
}
.social-icons ul li.social-facebook a:after {
  background: #3B5998;
}
.social-icons ul li.social-google a:before, .social-icons ul li.social-google a:after {
  content: "\f0d5";
}
.social-icons ul li.social-google a:after {
  background: #DD4B39;
}
.social-icons ul li.social-linkedin a:before, .social-icons ul li.social-linkedin a:after {
  content: "\f0e1";
}
.social-icons ul li.social-linkedin a:after {
  background: #71B2D0;
}
.social-icons ul li.social-youtube a:before, .social-icons ul li.social-youtube a:after {
  content: "\f167";
}
.social-icons ul li.social-youtube a:after {
  background: #F45750;
}
.social-icons ul li.social-rss a:before, .social-icons ul li.social-rss a:after {
  content: "\f09e";
}
.social-icons ul li.social-rss a:after {
  background: #FE9900;
}
.social-icons ul li.social-behance a:before, .social-icons ul li.social-behance a:after {
  content: "\f1b4";
}
.social-icons ul li.social-behance a:after {
  background: #5EB5FB;
}
.social-icons ul li.social-dropbox a:before, .social-icons ul li.social-dropbox a:after {
  content: "\f16b";
}
.social-icons ul li.social-dropbox a:after {
  background: #85BEEC;
}
.social-icons ul li.social-github a:before, .social-icons ul li.social-github a:after {
  content: "\f09b";
}
.social-icons ul li.social-github a:after {
  background: #94A5B0;
}
.social-icons ul li.social-skype a:before, .social-icons ul li.social-skype a:after {
  content: "\f17e";
}
.social-icons ul li.social-skype a:after {
  background: #70CCEF;
}
.social-icons ul li.social-spotify a:before, .social-icons ul li.social-spotify a:after {
  content: "\f1bc";
}
.social-icons ul li.social-spotify a:after {
  background: #8BD05A;
}
.social-icons ul li.social-stumbleupon a:before, .social-icons ul li.social-stumbleupon a:after {
  content: "\f1a4";
}
.social-icons ul li.social-stumbleupon a:after {
  background: #F08066;
}
.social-icons ul li.social-tumblr a:before, .social-icons ul li.social-tumblr a:after {
  content: "\f173";
}
.social-icons ul li.social-tumblr a:after {
  background: #85A5C3;
}
.social-icons ul li.social-vimeo a:before, .social-icons ul li.social-vimeo a:after {
  content: "\f194";
}
.social-icons ul li.social-vimeo a:after {
  background: #7C99A8;
}
.social-icons ul li.social-wordpress a:before, .social-icons ul li.social-wordpress a:after {
  content: "\f19a";
}
.social-icons ul li.social-wordpress a:after {
  background: #649EB9;
}
.social-icons ul li.social-xing a:before, .social-icons ul li.social-xing a:after {
  content: "\f168";
}
.social-icons ul li.social-xing a:after {
  background: #4F9394;
}
.social-icons ul li.social-yahoo a:before, .social-icons ul li.social-yahoo a:after {
  content: "\f19e";
}
.social-icons ul li.social-yahoo a:after {
  background: #C38DCF;
}
.social-icons ul li.social-vk a:before, .social-icons ul li.social-vk a:after {
  content: "\f189";
}
.social-icons ul li.social-vk a:after {
  background: #708FAC;
}
.social-icons ul li.social-instagram a:before, .social-icons ul li.social-instagram a:after {
  content: "\f16d";
}
.social-icons ul li.social-instagram a:after {
  background: #CBAA97;
}
.social-icons ul li.social-reddit a:before, .social-icons ul li.social-reddit a:after {
  content: "\f1a1";
}
.social-icons ul li.social-reddit a:after {
  background: #FF7A52;
}
.social-icons ul li.social-flickr a:before, .social-icons ul li.social-flickr a:after {
  content: "\f16e";
}
.social-icons ul li.social-flickr a:after {
  background: #FF4DA9;
}
.social-icons ul li.social-foursquare a:before, .social-icons ul li.social-foursquare a:after {
  content: "\f180";
}
.social-icons ul li.social-foursquare a:after {
  background: #6FCCF4;
}
/* ---------------------------------------------------------------------- */
/*  Login
/* ---------------------------------------------------------------------- */
.main-login {
  margin-top: 0;
  position: relative;
  margin-top: 60px;
}
.app-navbar-fixed .main-login {
  margin-top: 0;
}
@media (max-width: 991px) {
  .main-login {
    margin-top: 60px !important;
  }
}
.main-login .logo {
  padding: 0 10px;
}
.main-login .logo > img {
  display: inline-block !important;
}
.main-login .box-login, .main-login .box-forgot, .main-login .box-register {
  overflow: hidden;
  margin: 15px 0 65px 0;
}
.main-login .form fieldset {
  border: none;
  margin: 0;
  padding: 10px 0 0;
}
.main-login a.forgot {
  color: #909090;
  font-size: 12px;
  position: absolute;
  right: 10px;
  text-shadow: 1px 1px 1px #FFFFFF;
  top: 9px;
}
.main-login input.password {
  padding-right: 130px;
}
.main-login label {
  color: #7F7F7F;
  font-size: 14px;
  margin-top: 5px;
}
.main-login .copyright {
  font-size: 11px;
  margin: 0 auto;
  padding: 10px 10px 0;
  text-align: center;
}
.main-login .form-actions:before, .main-login .form-actions:after {
  content: "";
  display: table;
  line-height: 0;
}
.main-login .form-actions:after {
  clear: both;
}
.main-login .form-actions {
  margin-top: 15px;
  padding-top: 10px;
  display: block;
}
.main-login .new-account {
  border-top: 1px dotted #EEEEEE;
  margin-top: 15px;
  padding-top: 10px;
  display: block;
}
/* ---------------------------------------------------------------------- */
/*  Clip Check
/* ---------------------------------------------------------------------- */
.clip-check {
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 0;
}
.clip-check label {
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  margin-right: 15px;
  padding-left: 30px !important;
  position: relative;
  line-height: 23px;
  transition: border 0.2s linear 0s, color 0.2s linear 0s;
  white-space: nowrap;
}
.clip-check label:before {
  background-color: #ffffff;
  border: 1px solid #c8c7cc;
  content: "";
  display: inline-block;
  height: 20px;
  left: 0;
  margin-right: 10px;
  position: absolute;
  width: 20px;
  border-radius: 0;
  top: 1px;
  transition: border 0.2s linear 0s, color 0.2s linear 0s;
}
.clip-check label:after {
  display: inline-block;
  font-size: 11px;
  height: 19px;
  left: 4px;
  position: absolute;
  top: -1px;
  transition: border 0.2s linear 0s, color 0.2s linear 0s;
  width: 19px;
}
.clip-check input[type="checkbox"] {
  opacity: 0;
}
.clip-check input[type="checkbox"]:checked + label:before {
  border-width: 10px;
}
.clip-check input[type="checkbox"]:checked + label:after {
  color: #fff;
  content: "\f00c";
  font-family: "FontAwesome";
}
.clip-check input[type="checkbox"]:focus + label::before {
  background-color: #e6e6e6;
}
.clip-check input[type="checkbox"][disabled] + label {
  opacity: 0.65;
}
.clip-check input[type="checkbox"][disabled] + label:before {
  background-color: #F8F8F8;
}
.clip-check.check-primary input[type="checkbox"]:checked + label:before {
  border-color: #58748B;
}
/* ---------------------------------------------------------------------- */
/*  Clip Radio
/* ---------------------------------------------------------------------- */
.clip-radio {
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 0;
}
.clip-radio label {
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  margin-right: 15px;
  padding-left: 25px !important;
  position: relative;
  margin-bottom: 6px;
  line-height: 23px;
}
.clip-radio label:before {
  background-color: #ffffff;
  border: 1px solid #d0d0d0;
  content: "";
  display: inline-block;
  height: 20px;
  left: 0;
  margin-right: 10px;
  position: absolute;
  width: 20px;
  border-radius: 99px;
  bottom: 2px;
  transition: all 0.3s cubic-bezier(0.455, 0.03, 0.215, 1.33) 0s;
}
.clip-radio label:after {
  border: 1px solid #c8c7cc;
  content: "";
  display: inline-block;
  height: 20px;
  left: 0;
  margin-right: 10px;
  position: absolute;
  width: 20px;
  border-radius: 99px;
  bottom: 2px;
  transition: all 0.3s cubic-bezier(0.455, 0.03, 0.215, 1.33) 0s;
}
.clip-radio input[type="radio"] {
  opacity: 0;
}
.clip-radio input[type="radio"]:focus + label::before {
  background: #e6e6e6;
}
.clip-radio input[type="radio"]:checked + label:before {
  border-width: 6px;
  background: #F8F8F8;
  border-color: #ffffff;
}
.clip-radio input[type="radio"]:checked:focus + label::before {
  border-color: #e6e6e6 !important;
}
.clip-radio input[type="radio"][disabled] + label {
  opacity: 0.65;
}
.clip-radio.radio-primary input[type="radio"]:checked + label:before {
  background: #58748B;
}
/* ---------------------------------------------------------------------- */
/*  Buttons
/* ---------------------------------------------------------------------- */
.btn {
  transition: all 0.3s ease 0s !important;
  background-image: none !important;
  box-shadow: none !important;
  outline: none !important;
  position: relative;
  border-radius: 2px;
  -webkit-transform: translateZ(0);
  padding: 6px 12px;
}
.btn-block {
  display: block;
  width: 100%;
}
.btn-red {
  background-color: #C82E29;
  border-color: #C82E29;
  color: #ffffff;
}
.btn-red:hover {
  background-color: #da4f4a !important;
  border-color: #da4f4a;
  color: #ffffff;
}
.btn-red:active, .btn-red.active, .btn-red.active:focus, .btn-red:active:focus, .btn-red:active:hover, .btn-red.dropdown-toggle:active:hover {
  background-color: #b32925 !important;
  border-color: #b32925;
}
.btn-red:focus {
  background-color: #de635f;
  border-color: #de635f;
  color: #ffffff;
}
.btn-red.disabled:hover, .btn-red.disabled:focus, .btn-red.disabled:active, .btn-red.disabled.active, .btn-red[disabled], .btn-red[disabled]:hover, .btn-red[disabled]:focus, .btn-red[disabled]:active, .btn-red[disabled].active, fieldset[disabled] .btn-red:hover, fieldset[disabled] .btn-red:focus, fieldset[disabled] .btn-red:active, fieldset[disabled] .btn-red.active {
  background-color: #e37874;
  border-color: #e37874;
  color: #ffffff;
}
</style>
