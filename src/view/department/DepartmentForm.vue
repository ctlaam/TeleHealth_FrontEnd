<template>
  <div
    class="dialog-form department-form-detail"
    :class="{ 'show-department-detail': isShow }"
  >
    <div id="cardDepartment" class="card">
      <div class="card-header">
        <strong>Thêm phòng ban</strong>
        <div
          @click="closeOnClick"
          id="closeFormDepartment"
          class="col-6 col-sm-3 py-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x mx-2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>

      <div id="formDetailDoctor" class="card-body">
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Tên phòng ban</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" v-model="doctor.name" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Tên không dấu</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Địa chỉ</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Mô tả</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-4 col-form-label" for="formGroupInputSmall"
            >Tài khoản đăng kí</label
          >
          <div class="col-sm-8">
            <input
              class="form-control form-control-sm"
              type="text"
              id="formGroupInputSmall"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="flex-save-cancle">
            <button
              @click="btnSaveOnClick"
              type="submit"
              class="btn btn-primary mt-1"
            >
              Lưu
            </button>
            <button @click="closeOnClick">Hủy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-department-detail",
  props: ["isShow", "formMode", "doctorSelected"],
  watch: {
    doctorSelected: function (newValue) {
      this.doctor = newValue;
    },
  },
  data() {
    return {
      doctor: {},
    };
  },
  methods: {
    closeOnClick() {
      this.$emit("closeOnClick", false);
    },
  },
};
</script>

<style scoped>
.dialog-form.department-form-detail {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: none;
  align-items: center;
  justify-content: center;
}
.dialog-form.department-form-detail.show-department-detail {
  display: flex;
}
#cardDepartment {
  width: 700px;
  height: 400px;
}

.flex-save-cancle {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
}
button.btn.btn-primary.mt-1 {
    position: relative;
    top: 10px;
}
#cardDepartment button {
  border: none;
  outline: none;
  width: 80px;
  height: 32px;
  border-radius: 2px;
  border: 1px solid #ccc;
  margin-right: 320px;
  margin-top: 20px;
  cursor: pointer;
  opacity: 0.8;
  margin-right: 0;
}
#cardDepartment button:hover {
  opacity: 1;
}
.form-check-input {
  margin-left: 5px;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
}
div#closeFormDepartment {
  cursor: pointer;
  position: absolute;
  right: -130px;
  transform: scale(1.3);
  opacity: 0.7;
}
div#closeFormDepartment:hover {
  opacity: 1;
}
</style>
