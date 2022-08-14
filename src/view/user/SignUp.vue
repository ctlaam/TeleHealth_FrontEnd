<template>
  <div class="d-flex flex-column flex">
    <div class="row no-gutters h-100">
      <div class="col-md-6 bg-primary" style="">
        <div class="p-3 p-md-5 d-flex flex-column h-100">
          <h4 class="mb-3 text-white">TeleHealth</h4>
          <div class="text-fade">Copyright @IBMELab</div>
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
            <h5>Xin chào</h5>
            <p>
              <small class="text-muted">Đăng kí tài khoản của bạn</small>
            </p>
            <div class="">
              <form
                @submit.prevent="signUpDoctor"
                name="form"
                action="dashboard.html"
              >
                <div></div>
                <div class="my-3 text-muted text-sm text-muted"></div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    required=""
                    v-model="userNameDoctor"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    required=""
                    v-model="emailDoctor"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    required=""
                    v-model="password"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Số điện thoại"
                    required=""
                    v-model="phone"
                  />
                </div>
                <div class="mb-3 text-sm">
                  <span class="text-muted"
                    >Bằng việc nhấn đăng kí,Tôi đồng ý với
                  </span>
                  <a href="#" data-pjax-state="">những điều khoản dịch vụ</a>
                </div>
                <button type="submit" class="btn btn-primary mb-4">
                  Đăng kí
                </button>
                <div>
                  Bạn đã có tài khoản
                  <a
                    href="signin.html"
                    class="text-primary _600"
                    data-pjax-state=""
                    >Đăng nhập</a
                  >
                </div>
              </form>
            </div>
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
      userNameDoctor: "",
      emailDoctor: "",
      password: "",
      phone: "",
    };
  },
  methods: {
    signUpDoctor() {
      const accountDoctor = {
        email: this.emailDoctor,
        username: this.userNameDoctor,
        password: this.password,
        phone: this.phone,
      };
      axios
        .post("http://127.0.0.1:8000/auth/doctor_register/",accountDoctor)
        .then((result) => {
          console.log(result)
          this.$router.replace('/auth')
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
