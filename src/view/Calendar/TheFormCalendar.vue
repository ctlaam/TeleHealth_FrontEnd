<template>
  <div class="dialog-form-location" v-if="isShow">
    <div class="card card-locations">
      <div class="card-header">
        <strong>Thêm mới hội chẩn</strong>
        <div
          @click="closeForm"
          id="closeFormLocation"
          class="col-6 col-sm-3 py-3"
        >
          <svg
            @click="closeForm"
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
      <div class="card-body">
        <form>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Tên hội chuẩn</label
            >
            <div class="col-sm-9">
              <input
                type="email"
                class="form-control"
                id="inputEmail3"
                disabled
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Tên quốc gia</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                disabled
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Múi giờ</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                disabled
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Khu vực</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                disabled
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Thủ đô</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                disabled
              />
            </div>
          </div>
          <div class="form-group row" >
            <div class="flex-save-cancle">
              <button
                @click="btnSaveOnClick"
                type="submit"
                class="btn btn-primary mt-1"
                style="min-width:100px"
              >
                Thêm mới
              </button>
              <button @click="closeForm">Hủy</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showLocations", "isEdit", "dataLocation", "isShow"],

  data() {
    return {
      
      dataSchedule: {},
    };
  },
  methods: {
    btnSaveOnClick() {},
    closeForm() {
      this.dataSchedule = {};
      this.$emit("showOrHideForm", false);
    },
  },
};
</script>

<style scoped>
.flex-save-cancle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
div#closeFormLocation {
  cursor: pointer;
  position: relative;
  height: 10px;
  left: 115px;
  top: -13px;
  opacity: 0.7;
}
div#closeFormLocation:hover {
  opacity: 1;
}

.dialog-form-location {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  align-items: center;
  justify-content: center;
  display: flex;
}
.card-locations button {
  border: none;
  outline: none;
  width: 80px;
  height: 32px;
  border-radius: 2px;
  border: 1px solid #ccc;
  margin-right: 320px;
  cursor: pointer;
  opacity: 0.8;
  margin-right: 0;
}
.card-locations button:hover {
  opacity: 1;
}
input.form-control {
  border-radius: 3px;
}
.dialog-form-location .dropdown {
  border: 1px solid #ecedee;
  border-radius: 3px;
  height: 34px;
}
.dialog-form-location .dropdown:hover {
  background-color: #ccc;
}
.dialog-form-location.show-location {
  display: flex;
}
.card {
  min-width: 650px;
}
div#dropdown-input-location {
  width: 450px;
  margin-right: 15px;
}
/* div#closeFormLocation {
  cursor: pointer;
  position: relative;
  top: -18px;
  transform: scale(1.3);
  opacity: 0.7;
} */
/* div#closeFormLocation:hover {
  opacity: 1;
} */
</style>

<style lang="css">
.dialog-form-location {
  direction: ltr;
}

</style>
