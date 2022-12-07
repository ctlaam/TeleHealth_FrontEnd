<template>
  <div
    class="dialog-form patient-form-detail"
    :class="{ 'show-patient-detail': isShow }"
  >
    <div id="cardPatient" class="card">
      <div class="card-header">
        <strong>Thêm bệnh nhân</strong>
        <div
          @click="closeOnClick"
          id="closeFormPatient"
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

      <div class="card-body">
        <div class="form-group row">
          <label class="col-form-label"
            >Email <span class="red-text">*</span></label
          >
          <div class="col-sm-8">
            <input
              class="form-control"
              :class="{ 'red-border': error.email }"
              type="email"
              v-model="patient.email"
              placeholder="Ex: useremail@gmail.com"
            />
          </div>
        </div>
        <div class="form-group row" v-if="formMode == 'add'">
          <label class="col-form-label"
            >User name <span class="red-text">*</span></label
          >
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              :class="{ 'red-border': error.username }"
              v-model="patient.username"
              placeholder="Ex: nguyenvana123"
            />
          </div>
        </div>
        <div class="form-group row" v-if="formMode == 'add'">
          <label class="col-form-label"
            >Mật khẩu <span class="red-text">*</span></label
          >
          <div class="col-sm-8">
            <input
              type="password"
              class="form-control"
              :class="{ 'red-border': error.password }"
              v-model="patient.password"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label"
            >Họ và tên <span class="red-text">*</span></label
          >
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              :class="{ 'red-border': error.name }"
              v-model="patient.name"
              placeholder="Ex: Nguyễn Văn A"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label">Tên không dấu</label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              v-model="patient.unsignedName"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col" style="padding-left: 0">
            <label class="col-form-label"
              >Giới tính <span class="red-text">*</span></label
            >
            <!-- <div class="col-sm-4"> -->
            <!-- <div class="mt-2 mb-2"> -->
            <div class="form-check form-check-inline" style="margin-left: 15px">
              <label class="form-check-label" for="inlineRadio1">Nữ</label>

              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="nu"
                v-model="patient.gender"
              />
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label" for="inlineRadio2">Nam</label>

              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="nam"
                v-model="patient.gender"
              />
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label" for="inlineRadio3">Khác</label>
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="khac"
                v-model="patient.gender"
              />
            </div>
            <!-- <div class="form-check form-check-inline">
                </div> -->
            <!-- </div> -->
            <!-- </div> -->
          </div>
          <div class="col">
            <div class="form-group row">
              <label class="col-form-label" for="inlineRadio3"
                >Dân tộc <span class="red-text">*</span></label
              >
              <div class="col-sm-8">
                <select
                  name="city"
                  v-model="patient.ethnic"
                  class="form-control"
                  :class="{ 'red-border': error.ethnic }"
                  style="width: 97%"
                >
                  <option
                    :value="ethnic"
                    v-for="ethnic in ethnics"
                    :key="ethnic.id"
                  >
                    {{ ethnic }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label">Số điện thoại</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" v-model="patient.phone" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label"
            >Ngày sinh <span class="red-text">*</span></label
          >
          <div class="col-sm-8">
            <input
              type="date"
              class="form-control"
              :class="{ 'red-border': error.dateOfBirth }"
              :value="bindingDate(patient.dateOfBirth)"
              dateOfBirth
              @change="onChangeFormatDate"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label" for="formGroupInputSmall"
            >Mã bảo hiểm</label
          >
          <div class="col-sm-8">
            <input
              class="form-control form-control-sm"
              type="text"
              id="formGroupInputSmall"
              v-model="patient.insuranceCode"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label" for="formGroupInputSmall"
            >CMT/CCCD</label
          >
          <div class="col-sm-8">
            <input
              class="form-control form-control-sm"
              type="text"
              id="formGroupInputSmall"
              v-model="patient.identification"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label" for="formGroupInputSmall"
            >Địa chỉ thường trú</label
          >
          <div class="col-sm-8">
            <input
              class="form-control form-control-sm"
              type="text"
              id="formGroupInputSmall"
              v-model="patient.detail_address"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label" for="formGroupInputSmall"
            >Người nhà bệnh nhân</label
          >
          <div class="col-sm-8">
            <input
              class="form-control form-control-sm"
              type="text"
              id="formGroupInputSmall"
              v-model="patient.contact"
            />
          </div>
        </div>
        <div class="form-group row d-flex">
          <label class="col-form-label">Hộ khẩu</label>
          <div class="col">
            <div class="row row-cols-2">
              <div class="col-6">
                <div class="form-group row">
                  <label class="col-form-label" for="inlineRadio1"
                    >Đất nước</label
                  >
                  <div class="col-sm-6">
                    <select
                      name="country"
                      id=""
                      v-model="patient.country"
                      class="form-control"
                    >
                      <option
                        :value="country"
                        v-for="country in address.countries"
                        :key="country"
                      >
                        {{ country }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group row">
                  <label class="col-form-label" for="inlineRadio2"
                    >Thành phố</label
                  >
                  <div class="col-sm-6">
                    <select
                      name="city"
                      id=""
                      v-model="patient.province"
                      class="form-control"
                    >
                      <option
                        :value="city"
                        v-for="city in address.cities"
                        :key="city.id"
                      >
                        {{ city }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group row">
                  <label class="col-form-label" for="inlineRadio3"
                    >Quận/huyện</label
                  >
                  <div class="col-sm-6">
                    <select
                      name="city"
                      id=""
                      v-model="patient.district"
                      class="form-control"
                    >
                      <option
                        :value="district"
                        v-for="district in address.districts"
                        :key="district"
                      >
                        {{ district }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group row">
                  <label class="col-form-label" for="inlineRadio3"
                    >Xã Phường</label
                  >
                  <div class="col-sm-6">
                    <select
                      name="city"
                      id=""
                      v-model="patient.ward"
                      class="form-control"
                    >
                      <option
                        :value="ward"
                        v-for="ward in address.wards"
                        :key="ward.id"
                      >
                        {{ ward }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="flex-save-cancle">
            <button
              @click="btnSaveOnClick"
              type="submit"
              class="btn btn-primary"
            >
              Lưu
            </button>
            <button @click="closeOnClick" class="btn" style="margin-left: 8px">
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "the-patient-detail",
  props: ["isShow", "patientSelected", "formMode"],
  watch: {
    patientSelected(newValue) {
      this.patient = newValue;
    },
  },
  data() {
    return {
      address: {},
      patient: {
        email: "",
        password: "",
        username: "",
        name: "",
        unsignedName: "",
        gender: "",
        ethnic: "",
        phone: "",
        dateOfBirth: "",
        insuranceCode: "",
        identification: "",
        contact: "",
        country: "",
        province: "",
        district: "",
        ward: "",
        detail_address: "",
      },
      error: {
        email: false,
        password: false,
        username: false,
        name: false,
        gender: false,
        dateOfBirth: false,
        ethnic: false,
      },
      ethnics: [],
    };
  },
  computed: {
    accessToken() {
      return this.$store.getters.accessToken;
    },
  },
  methods: {
    closeOnClick() {
      this.$emit("closeOnClick", false);
    },
    bindingDate(date) {
      if (date) {
        date = new Date(date);
        // lây ra ngày
        let day = date.getDate();
        // lấy tháng
        let month = date.getMonth() + 1;
        // lấy năm
        let year = date.getFullYear();
        // thêm số 0 vào đằng trước
        day = day < 10 ? `0${day}` : day;
        month = month < 10 ? `0${month}` : month;
        date = year + "-" + month + "-" + day;
        return date;
      } else {
        return "";
      }
    },
    onChangeFormatDate(e) {
      if (e.target.hasAttribute("dateOfBirth")) {
        this.patient.dateOfBirth = e.target.value;
      }
    },

    validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },

    validateUsername(username) {
      const re = /^[a-z0-9]+$/;
      return re.test(username);
    },

    validateForm() {
      let isValid = true;

      if (!this.patient.email) {
        this.$message.warning("Vui lòng nhập Email");
        this.error.email = true;
        isValid = false;
      } else {
        this.error.email = false;
        if (!this.validateEmail(this.patient.email)) {
          this.$message.warning("Vui lòng nhập Email đúng định dạng");
          this.error.email = true;
          isValid = false;
        }
      }

      if (!this.patient.username) {
        this.$message.warning("Vui lòng nhập Username");
        this.error.username = true;
        isValid = false;
      } else {
        this.error.username = false;
        if (!this.validateUsername(this.patient.username)) {
          this.$message.warning("Vui lòng nhập Username đúng định dạng");
          this.error.username = true;
          isValid = false;
        }
      }

      if (!this.patient.password) {
        this.$message.warning("Vui lòng nhập mật khẩu");
        this.error.password = true;
        isValid = false;
      } else {
        this.error.password = false;
      }

      if (!this.patient.name) {
        this.$message.warning("Vui lòng nhập họ và tên");
        this.error.name = true;
        isValid = false;
      } else {
        this.error.name = false;
      }

      if (!this.patient.gender) {
        this.$message.warning("Vui lòng chọn giới tính");
        this.error.gender = true;
        isValid = false;
      } else {
        this.error.gender = false;
      }

      if (!this.patient.dateOfBirth) {
        this.$message.warning("Vui lòng nhập ngày sinh");
        this.error.dateOfBirth = true;
        isValid = false;
      } else {
        this.error.dateOfBirth = false;
      }

      if (!this.patient.ethnic) {
        this.$message.warning("Vui lòng chọn dân tộc");
        this.error.ethnic = true;
        isValid = false;
      } else {
        this.error.ethnic = false;
      }

      return isValid;
    },

    btnSaveOnClick() {
      const me = this;
      if (!this.validateForm()) {
        return;
      }
      if (this.formMode == "add") {
        axios
          .post("http://127.0.0.1:8000/medical_unit/add_patient/", me.patient, {
            headers: { Authorization: `Bearer ${me.accessToken}` },
          })
          .then((response) => {
            console.log(response);
            me.closeOnClick();
            me.$emit("getListPatients");
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (this.formMode == "edit") {
        axios
          .post(
            `http://127.0.0.1:8000/medical_unit/update_patient_by_medical_unit?pk=${me.patient.id}`,
            me.patient,
            {
              headers: { Authorization: `Bearer ${me.accessToken}` },
            }
          )
          .then((response) => {
            console.log(response);
            me.closeOnClick();
            me.$emit("getListPatients");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  created() {
    const me = this;
    me.address.cities = ["Hà Nội"];
    me.address.wards = ["Bạch Mai"];
    me.address.districts = ["Giải Phóng"];
    me.address.countries = ["Việt Nam"];
    me.ethnics = ["Kinh"];
    console.log(me.address);
    // axios.get("http://127.0.0.1:8000/address/province/").then((res) => {
    //   me.address.cities = res.data;
    // });
    // axios.get("http://127.0.0.1:8000/address/ward/").then((res) => {
    //   me.address.wards = res.data;
    // });
    // axios.get("http://127.0.0.1:8000/address/country/").then((result) => {
    //   me.address.countries = result.data;
    // });
    // axios.get("http://127.0.0.1:8000/address/district/").then((res) => {
    //   me.address.districts = res.data;
    //   console.log(me.address);
    // });
    // axios.get("http://127.0.0.1:8000/address/ethnic/").then((res) => {
    //   me.ethnics = res.data;
    //   console.log(me.ethnics);
    // });
  },
};
</script>

<style scoped>
button.btn.btn-primary.mt-1 {
  position: relative;
  top: 10px;
}
.dialog-form.patient-form-detail {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  display: none;
  align-items: center;
  justify-content: center;
}
.dialog-form.patient-form-detail.show-patient-detail {
  display: flex;
}
#cardPatient {
  width: 900px;
  height: 838px;
}
#cardPatient button {
  border: none;
  outline: none;
  width: 80px;
  height: 32px;
  border-radius: 2px;
  border: 1px solid #ccc;
  margin-right: 320px;
  /* margin-top: 20px; */
  cursor: pointer;
  opacity: 0.8;
  margin-right: 0;
}
.flex-save-cancle {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 0 20px;
}
#cardPatient button:hover {
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
div#closeFormPatient {
  cursor: pointer;
  position: absolute;
  right: -180px;
  transform: scale(1.3);
  opacity: 0.7;
}
div#closeFormPatient:hover {
  opacity: 1;
}
.form-group.row {
  direction: ltr;
}
label.col-form-label {
  width: 130px;
  margin-left: 20px;
}
.mt-2.mb-2 {
  width: 650px;
}
.mt-2.mb-2[data-v-356e7b66] {
  width: 765px;
}
input.form-control {
  width: 700px;
}
</style>
