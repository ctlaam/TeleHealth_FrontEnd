<template>
  <div class="d-flex flex-column flex">
    <div class="row no-gutters h-100">
      <div class="col-md-6 bg-primary" style="">
        <div class="p-3 p-md-5 d-flex flex-column h-100">
          <h4 class="mb-3 text-white">TeleHealth</h4>
          <div class="text-fade">copyright@HUSTIBME</div>
          <div
            class="d-flex flex align-items-center justify-content-center"
          ></div>
          <div class="d-flex text-sm text-fade">
            <a href="index.html" class="text-white">About</a>
            <span class="flex"></span>
            <a href="#" class="text-white mx-1">Terms</a>
            <a href="#" class="text-white mx-1">Policy</a>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div id="content-body">
          <div class="p-3 p-md-5">
            <h5>Đăng nhập</h5>
            <form
              class=""
              role="form"
              action="dashboard.html"
              @submit.prevent="login"
            >
              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label>Mật khẩu</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="password"
                />
                <div class="my-3 text-right">
                  <a
                    href="forgot-password.html"
                    class="text-muted"
                    data-pjax-state=""
                    >Quên mật khẩu?</a
                  >
                </div>
              </div>
              <div class="checkbox mb-3">
                <label class="ui-check">
                  <input type="checkbox" />
                  <i></i> Nhớ mật khẩu
                </label>
              </div>
              <button type="submit" class="btn btn-primary mb-4">
                Sign in
              </button>
              <div>
                Bạn chưa có tài khoản?
                <a href="" class="text-primary" data-pjax-state="">Đăng kí</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      password2: "",
      status: "login",
      isLogIn: true,
      formIsValid: true,
    };
  },
  methods: {
    async login() {
      const me = this;
      const accountLoggin = {
        email: me.email,
        password: me.password,
      };
      let user = null;
      axios
        .post("http://127.0.0.1:8000/auth/login/", accountLoggin)
        .then((result) => {
          user = result.data.data;
          console.log(user);
          me.$store.dispatch("login", user);
          console.log(result.data.success);
          if (result.data.success) {
            this.$router.replace("/content/maincontent/dashboard");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      // axios({
      //   url: "http://127.0.0.1:8000/auth/login/",
      //   method: "POST",
      //   body: {
      //     email: "doctor@gmail.com",
      //     password: "doctor",
      //   },
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((result) => {
      //     console.log(result);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // axios
      //   .post("http://127.0.0.1:8000/auth/login/",accountLoggin)
      //   .then((result) => {
      //     console.log(result);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    // switchStatus(status) {
    //   this.status = status;
    //   if (status == "register") {
    //     this.isLogIn = false;
    //   } else if (status == "login") {
    //     this.isLogIn = true;
    //   }
    // },
    // submitForm() {
    //   if (
    //     !this.email ||
    //     !this.email.includes("@") ||
    //     this.password.length < 6 ||
    //     this.password !== this.password2
    //   ) {
    //     this.formIsValid = false;
    //     console.log("sai rồi");
    //   } else {
    //     console.log("đúng");
    //   }
    // },
  },
};
</script>

<style scoped>
.d-flex.flex-column.flex {
  height: 100%;
  height: 100vh;
  direction: ltr;
}
</style>
