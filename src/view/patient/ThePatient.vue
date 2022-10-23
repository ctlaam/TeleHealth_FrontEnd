<template>
  <div id="content" class="flex">
    <input
      hidden
      type="file"
      webkitdirectory
      directory
      multiple
      @change="onFilesSelected"
      id="dicomFiles"
    />
    <div class="d-flex flex fixed-content">
      <div class="fade aside aside-sm" id="content-aside"></div>
      <div class="d-flex flex" id="content-body">
        <div class="d-flex flex-column flex" id="user-list">
          <div class="p-3">
            <div class="toolbar">
              <button
                @click="btnAddOnClick"
                id="addPatient"
                class="btn btn-white"
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
                  class="feather feather-plus"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span class="mx-1">Thêm</span>
              </button>
              <div class="btn-group">
                <button
                  class="btn btn-sm btn-icon btn-white"
                  data-toggle="tooltip"
                  title=""
                  id="btn-trash"
                  data-original-title="Trash"
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
                    class="feather feather-trash text-muted"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path
                      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    ></path>
                  </svg>
                </button>
                <button
                  class="btn btn-sm btn-icon btn-white sort"
                  data-sort="item-author"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Sort"
                >
                  <i class="sorting"></i>
                </button>
              </div>
              <div class="dropdown">
                <button
                  class="btn btn-sm btn-white no-wrap"
                  data-toggle="dropdown"
                >
                  A-Z
                </button>
                <div class="dropdown-menu p-3" id="filter">
                  <span class="badge pointer">A</span>
                  <span class="badge pointer">B</span>
                  <span class="badge pointer">C</span>
                  <span class="badge pointer">D</span>
                  <span class="badge pointer">E</span>
                  <span class="badge pointer">F</span>
                  <span class="badge pointer">G</span>
                  <span class="badge pointer">H</span>
                  <span class="badge pointer">I</span>
                  <span class="badge pointer">J</span>
                  <span class="badge pointer">K</span>
                  <span class="badge pointer">L</span>
                  <span class="badge pointer">M</span>
                  <span class="badge pointer">N</span>
                  <span class="badge pointer">O</span>
                  <span class="badge pointer">P</span>
                  <span class="badge pointer">Q</span>
                  <span class="badge pointer">R</span>
                  <span class="badge pointer">S</span>
                  <span class="badge pointer">T</span>
                  <span class="badge pointer">U</span>
                  <span class="badge pointer">V</span>
                  <span class="badge pointer">W</span>
                  <span class="badge pointer">X</span>
                  <span class="badge pointer">Y</span>
                  <span class="badge pointer">Z</span>
                </div>
              </div>
              <form class="flex">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control form-control-theme form-control-sm search"
                    placeholder="Search"
                    required=""
                  />
                  <span class="input-group-append">
                    <button
                      class="btn btn-white no-border btn-sm"
                      type="button"
                    >
                      <span class="d-flex text-muted"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-search"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </span>
                    </button>
                  </span>
                </div>
              </form>
              <button
                data-toggle="modal"
                data-target="#content-aside"
                data-modal=""
                class="btn btn-sm btn-icon btn-white d-md-none"
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
                  class="feather feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          <!-- brand -->
          <a href="#" class="navbar-brand title" data-pjax-state="">
            <!-- <img src="../assets/img/logo.png" alt="..."> -->
            <span class="hidden-folded d-inline l-s-n-1x"
              >Danh sách bệnh nhân</span
            >
          </a>
          <!-- / brand -->
          <div class="scroll-y mx-3 mb-0 card">
            <div class="list list-row">
              <div
                class="list-item"
                data-id="2"
                data-sr-id="164"
                style="
                  visibility: visible;
                  transform: none;
                  opacity: 1;
                  transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s,
                    opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
                "
                v-for="patient in patients"
                :key="patient.id"
              >
                <div>
                  <label class="ui-check m-0">
                    <input type="checkbox" name="id" value="2" />
                    <i></i>
                  </label>
                </div>
                <div></div>
                <div>
                  <a href="app.message.html" data-pjax-state="">
                    <span class="w-40 avatar gd-primary">
                      {{ getFirstLetter(patient.name) }}
                    </span>
                  </a>
                </div>
                <div class="flex">
                  <a
                    href="app.user.detail.html#2"
                    class="item-author text-color"
                    data-pjax-state=""
                    >{{ patient.name }}</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ patient.unsignedName }}
                  </div>
                  <div class="item-tag tag hide">
                    Clients,Team,Personal,Company,Work,Friends,Suppliers,Partners
                  </div>
                </div>
                <div>
                  <!-- <div @click="showChoiceAction" class="item-action dropdown">
                    <p
                      href="#"
                      data-toggle="dropdown"
                      class="text-muted"
                      data-pjax-state=""
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
                        class="feather feather-more-vertical"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </p>
                    <div
                      class="dropdown-menu dropdown-menu-right bg-black"
                      role="menu"
                    >
                      <a class="dropdown-item" href="#" data-pjax-state="">
                        See detail
                      </a>
                      <a
                        class="dropdown-item download"
                        data-pjax-state=""
                        @click="seeResults(patient.id)"
                      >
                        Xem các kết quả trước
                      </a>
                      <a class="dropdown-item edit" data-pjax-state="">
                        Edit
                      </a>
                      <a
                        class="dropdown-item lungvolum"
                        data-pjax-state=""
                        @click="clickInput(patient.id)"
                      >
                        Tính thể tích phổi
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item trash" data-pjax-state="">
                        Delete item
                      </a>
                    </div>
                  </div> -->
                  <a-dropdown-button>
                    <template #overlay>
                      <a-menu @click="handleMenuClick">
                        <a-menu-item key="1">
                          <UserOutlined />
                          Chi tiết
                        </a-menu-item>
                        <a-menu-item key="2" @click="seeResults(patient.id)">
                          <UserOutlined />
                          Xem các kết quả trước
                        </a-menu-item>
                        <a-menu-item key="3" @click="clickInput(patient.id)">
                          <UserOutlined />
                          Tính thể tích phổi
                        </a-menu-item>
                      </a-menu>
                    </template>
                  </a-dropdown-button>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination">
            <a-pagination
              v-model:pageSize="pageSize"
              v-model:current="current"
              :total="50"
              show-less-items
            />
          </div>
        </div>
      </div>
    </div>
    <FormPatient
      :isShow="isShowDialog"
      @closeOnClick="showOrHideDialog"
    ></FormPatient>
    <ResultTlc
      :resultLeft="resultLeft"
      :resultRight="resultRight"
      :total="totalLung"
    />
    <ListResults :listResults="listResults" @assignResult="assignResult" />
  </div>
</template>

<script>
/* eslint-disable */
import FormPatient from "../patient/FormPatient.vue";
import axios from "axios";

export default {
  name: "the-patient",
  components: {
    FormPatient,
  },
  data() {
    return {
      current: 1,
      pageSize: 10,
      resultRight: "",
      resultLeft: "",
      totalLung: "",
      isShowDialog: false,
      idPatient: "",
      patients: "",
      listResults: [],
    };
  },
  computed: {
    accessToken() {
      return this.$store.getters.accessToken;
    },
    email() {
      return this.$store.getters.email;
    },
  },
  methods: {
    assignResult(result) {
      console.log(result);
      if (result) {
        this.resultRight = result.right_lung;
        this.resultLeft = result.left_lung;
        this.totalLung = result.lung_volume;
        this.showResult();
      }
    },
    closeListResult() {
      const a = document.getElementById("listResults");
      a.setAttribute("hidden", true);
    },
    showListResult() {
      const a = document.getElementById("listResults");
      a.removeAttribute("hidden", true);
    },
    seeResults(id) {
      const me = this;
      axios
        .get(`http://127.0.0.1:8000/tlc/get_result_by_patient_id?pk=${id}`)
        .then((res) => {
          me.listResults = res.data.data;
          me.showListResult();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showResult() {
      const a = document.getElementById("resultTlc");
      a.removeAttribute("hidden", true);
    },
    clickInput(idPatient) {
      this.idPatient = "";
      const input = document.getElementById("dicomFiles");
      console.log(input);
      input.click();
      this.idPatient = idPatient;
    },
    async onFilesSelected(event) {
      const me = this;
      var formData = new FormData();
      for (var i = 0; i < event.target.files.length; i++) {
        formData.append("uploadfiles", event.target.files[i]);
      }
      formData.append("patientId", me.idPatient);
      await axios({
        url: "http://127.0.0.1:8000/tlc/post_file",
        method: "POST",
        data: formData,
        headers: {
          Authorization: `Bearer ${me.accessToken}`,
        },
      })
        .then((result) => {
          me.resultRight = result.data.data.right_lung;
          me.resultLeft = result.data.data.left_lung;
          me.totalLung = result.data.data.lung_volume;
          me.showResult();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getFirstLetter(name) {
      if (name) {
        let a = name.split("");
        return a[0].toUpperCase();
      }
      return "";
    },
    btnAddOnClick() {
      this.showOrHideDialog(true);
    },
    /**
     * Mô tả : Mô tả code
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 18:32 05/07/2022
     */
    showOrHideDialog(isShow) {
      this.isShowDialog = isShow;
    },
    /**
     * Mô tả : Mô tả code
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 18:32 05/07/2022
     */
    showChoiceAction(e) {
      console.log(e.target);
      let choicesAction = e.target.querySelector(
        ".dropdown-menu.dropdown-menu-right.bg-black"
      );
      if (!choicesAction) {
        console.log(123);
        choicesAction = e.target.parentElement.parentElement.querySelector(
          ".dropdown-menu.dropdown-menu-right.bg-black"
        );
      }
      try {
        if (choicesAction.classList.contains("show")) {
          choicesAction.classList.remove("show");
        } else {
          console.log("show");
          choicesAction.classList.add("show");
        }
      } catch (error) {}
    },
  },
  async mounted() {
    const me = this;
    console.log(me.accessToken);
    await axios
      .get(
        `http://127.0.0.1:8000/medical_unit/list_patient_by_medical_unit/?dataFilter=null`,
        {
          headers: { Authorization: `Bearer ${me.accessToken}` },
        }
      )
      .then(function (res) {
        console.log("bệnh nhân");
        me.patients = res.data;
        console.log(me.patients);
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.pagination {
  direction: ltr;
  margin: 30px auto 0px;
}
div#content {
  width: 86vw;
  position: relative;
}
div#flexVue {
  flex-direction: row-reverse;
  justify-content: space-between;
}
#flexVue .flex.d-flex.flex-row {
  justify-content: end;
}
#flexVue .pagination.pagination-sm.mx-1 {
  flex-direction: row-reverse;
}
.list-row .list-item {
  align-items: center;
  padding: 0.75rem 0.625rem;
}
button#addPatient {
  height: 30px;
}
.mt-auto,
.my-auto {
  margin-top: 30px !important;
}
a.navbar-brand.title {
  flex-direction: row-reverse;
  margin-bottom: 15px;
}
.scroll-y.mx-3.mb-0.card {
  direction: ltr;
  min-height: 600px;
}
</style>
