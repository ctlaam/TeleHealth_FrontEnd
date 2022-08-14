<template>
  <div id="content" class="flex">
    <div class="d-flex flex fixed-content">
      <div class="fade aside aside-sm" id="content-aside"></div>
      <div class="d-flex flex" id="content-body">
        <div class="d-flex flex-column flex" id="user-list">
          <div class="p-3">
            <div class="toolbar">
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
          <a class="navbar-brand title" data-pjax-state="">
            <!-- <img src="../assets/img/logo.png" alt="..."> -->
            <span class="hidden-folded d-inline l-s-n-1x"
              >Danh sách bác sĩ đang chờ xác nhận</span
            >
          </a>
          <!-- / brand -->
          <div class="scroll-y mx-3 mb-0 card">
            <div class="list list-row">
              <div
                v-for="doctor in doctorsWait"
                :key="doctor.id"
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
              >
                <div>
                  <label class="ui-check m-0">
                    <input type="checkbox" name="id" value="2" />
                    <i></i>
                  </label>
                </div>
                <div></div>
                <div>
                  <a href="app.user.detail.html#16" data-pjax-state="">
                    <span
                      class="w-40 avatar gd-info"
                      data-toggle-class="loading"
                    >
                      <span
                        class="avatar-status on b-white avatar-right"
                      ></span>
                      {{ getFirstLetter(doctor.name) }}
                    </span>
                  </a>
                </div>
                <div class="flex">
                  <a class="item-author text-color" data-pjax-state="">{{
                    doctor.name
                  }}</a>
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ doctor.unsignedName }}
                  </div>

                  <div class="item-tag tag hide">
                    Clients,Team,Personal,Company,Work,Friends,Suppliers,Partners
                  </div>
                </div>
                <div>
                  <button
                    class="btn btn-confirm"
                    @click="confirmDoctor(doctor.id)"
                  >
                    Xác nhận
                  </button>
                  <button
                    class="btn btn-decline"
                    @click="declineDoctor(doctor.id)"
                  >
                    Từ chối
                  </button>
                </div>
                <div>
                  <div @click="showChoiceAction" class="item-action dropdown">
                    <p
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
                      <a
                        class="dropdown-item"
                        data-pjax-state=""
                        @click="detailDoctor(doctor)"
                      >
                        See detail
                      </a>
                      <a class="dropdown-item download" data-pjax-state="">
                        Download
                      </a>
                      <a class="dropdown-item edit" data-pjax-state="">
                        Edit
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item trash" data-pjax-state="">
                        Delete item
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="no-result hide">
              <div class="p-4 text-center">No Results</div>
            </div>
          </div>
          <div class="px-3 py-3 mt-auto">
            <div id="flexVue" class="d-flex align-items-center">
              <div class="flex d-flex flex-row">
                <button class="btn btn-sm no-bg no-shadow px-0 pager-prev">
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
                    class="feather feather-chevron-left"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <div class="pagination pagination-sm mx-1">
                  <li class="active">
                    <a class="page" data-pjax-state="">1</a>
                  </li>
                  <li>
                    <a
                      class="page"
                      href='javascript:function Z(){Z=""}Z()'
                      data-pjax-state=""
                      >2</a
                    >
                  </li>
                </div>
                <button class="btn btn-sm no-bg no-shadow px-0 pager-next">
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
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
              <div>
                <span class="text-muted">Total:</span>
                <span id="count">20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FormDoctor
      :isShow="isShowDialog"
      @closeOnClick="showOrHideDialog"
      :formMode="formMode"
      :doctorSelected="doctorSelected"
    ></FormDoctor>
  </div>
</template>

<script>
/* eslint-disable */
import FormDoctor from "./DoctorFormDetail.vue";
import axios from "axios";

export default {
  name: "the-doctor",
  components: {
    FormDoctor,
  },
  data() {
    return {
      isShowDialog: false,
      doctorsWait: [
        {
          name: "Hoàng Quang Huy",
          email: "huy.hoangquang@hust.edu.vn",
        },
        {
          name: "Trần Anh Vũ",
          email: "vu.trananh@hust.edu.vn",
        },
        {
          name: "Nguyễn Việt Dũng",
          email: "dung.nguyenviet1@hust.edu.vn",
        },
        {
          name: "Trịnh Quang Đức",
          email: "duc.trinhquang@hust.edu.vn",
        },
        {
          name: "Nguyễn Thái Hà",
          email: "ha.nguyenthai@hust.edu.vn",
        },
        {
          name: "Dương Trọng Lượng",
          email: "luong.duongtrong@hust.edu.vn",
        },
        {
          name: "Phạm Phúc Ngọc",
          email: "ngoc.phamphuc@hust.edu.vn",
        },
      ],
      doctorSelected: {},
      // formMode để biết là form dùng để thêm mới hoặc là sửa
      formMode: this.TeleHealthEnum.FormMode.Add,
    };
  },
  computed: {
    accessToken() {
      return this.$store.getters.accessToken;
    },
  },
  methods: {
    getFirstLetter(name) {
      let a = name.split("");
      return a[0].toUpperCase();
    },
    btnAddOnClick() {
      this.doctorSelected = {};
      this.formMode = this.TeleHealthEnum.FormMode.Add;
      this.showOrHideDialog(true);
    },
    async confirmDoctor(id) {
      const me = this;
      console.log(me.accessToken);
      await axios
        .post(
          `http://127.0.0.1:8000/medical_unit/accept_doctor_wait_accept_by_medical_unit?pk=${id}`,
          {},
          {
            headers: { Authorization: `Bearer ${me.accessToken}` },
          }
        )
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    declineDoctor(id) {},
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
    /**
     * Mô tả : Xem chi tiết bác sĩ
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 14:38 26/07/2022
     */
    detailDoctor(doctor) {
      this.formMode = this.TeleHealthEnum.FormMode.Update;
      this.doctorSelected = doctor;
      this.showOrHideDialog(true);
    },
  },
  async mounted() {
    const me = this;
    await axios
      .get(
        "http://127.0.0.1:8000/medical_unit/list_doctor_wait_accept_by_medical_unit/",
        {
          headers: { Authorization: `Bearer ${me.accessToken}` },
        }
      )
      .then(function (res) {
        me.doctorsWait = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>

<style scoped>
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
button.btn.btn-confirm {
  border: 1px solid #1fb141;
  background-color: #1fb141;
  color: #fff;
  margin-right: 20px;
}
button.btn.btn-decline {
  border: 1px solid #ccc;
  margin-right: 50px;
}
</style>
