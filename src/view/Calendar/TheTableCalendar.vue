<template style="direction: rtl">
  <div>
    <div style="position: relative">
      <a-button
        type="primary"
        style="top: 12px; position: absolute; right: 180px"
        @click="showOrHideForm(true)"
        v-if="!isInvited"
        >Tạo hội chẩn +</a-button
      >
      <a-calendar
        v-model:value="valueCalendar"
        style="direction: ltr; margin-top: 20px; margin-right: 10px"
        @panelChange="onPanelChange"
        @select="onSelect"
        class="custom-celandar-table"
      >
        <template #dateCellRender="{ current }">
          <ul class="events">
            <li v-for="item in getListData(current)" :key="item.content">
              <a-badge :status="item.type" :text="item.content" />
            </li>
          </ul>
        </template>
        <!-- <template #monthCellRender="{ current }">
        <div v-if="getMonthData(current)" class="notes-month">
          <section>{{ getMonthData(current) }}</section>
          <span>Backlog number</span>
        </div>
      </template> -->
      </a-calendar>
    </div>
    <div>
      <a-modal
        title="Danh sách hội chẩn"
        class="modal-schedule"
        :visible="visibleModalSchedule"
        :closable="false"
        :footer="false"
        style="width: 600px; min-height: 500px"
      >
        <p v-for="item in dataModal" :key="item.id">{{ item.meeting_title }}</p>
        <a-button
          style="float: right; position: absolute; bottom: 10px; right: 10px"
          class="btn-schedule"
          @click="visibleModalSchedule = false"
          >Thoát</a-button
        >
      </a-modal>
      <TheFormCalendar :isShow="isShow" @showOrHideForm="showOrHideForm" />
    </div>
  </div>
</template>

<script>
import TheFormCalendar from "../Calendar/TheFormCalendar.vue";
import axios from "axios";

export default {
  props: ["dataMeeting", "isInvited"],
  components: {
    TheFormCalendar,
  },
  data() {
    return {
      isShow: false,
      valueCalendar: "",
      schedules: [],
      visibleModalSchedule: false,
      dataModal: [],
      oldDate: new Date(),
      dataTest: [],
    };
  },
  computed: {
    accessToken() {
      return this.$store.getters.accessToken;
    },
    email() {
      return this.$store.getters.email;
    },
    role() {
      return this.$store.getters["role"];
    },
  },
  methods: {
    showOrHideForm(bool) {
      this.isShow = bool;
    },
    onPanelChange(value, mode) {
      this.visibleModalSchedule = false;
    },
    onSelect(value) {
      let dateSelected = new Date(
        value.month() + 1 + "-" + value.date() + "-" + +value.year()
      );
      if (this.oldDate.getMonth() == dateSelected.getMonth()) {
        this.dataModal = [];
        this.dataTest.forEach((item) => {
          if (
            value.date() == new Date(item.meeting_time_start).getDate() &&
            value.month() == new Date(item.meeting_time_start).getMonth()
          ) {
            this.dataModal.push(item);
          }
        });
        if (this.dataModal.length > 0) {
          this.visibleModalSchedule = true;
        } else {
          this.$message.warning("Không có lịch hội chuẩn");
        }
      } else if (this.oldDate.getMonth() != dateSelected.getMonth()) {
        this.oldDate = dateSelected;
      }
    },
    getListData(value) {
      let listData = [];
      this.dataTest.forEach((item) => {
        if (
          value.date() == new Date(item.meeting_time_start).getDate() &&
          value.month() == new Date(item.meeting_time_start).getMonth()
        ) {
          listData.push({
            type: "success",
            content: item.meeting_title,
          });
        }
      });
      return listData || [];
    },
    getMonthData(value) {
      if (value.month() === 8) {
        return 1394;
      }
    },
  },
  async created() {
    this.dataTest = this.dataMeeting;
    console.log(this.dataTest);
  },
  mounted() {
    let a = document.querySelector(
      ".ant-radio-group.ant-radio-group-outline.ant-picker-calendar-mode-switch"
    );
    a.setAttribute("hidden", "true");
    let b = document.querySelectorAll(
      ".ant-radio-button-wrapper.ant-radio-button-wrapper-checked"
    );
    b.forEach((item) => {
      item.setAttribute("hidden", "true");
    });
    let c = document.querySelectorAll(".ant-radio-button-wrapper");
    c.forEach((item) => {
      item.setAttribute("hidden", "true");
    });
  },
};
</script>

<style>
.modal-schedule .ant-modal-content {
  min-height: 300px !important;
}
.ant-select-dropdown.ant-select-dropdown-placement-bottomLeft {
  z-index: 10000 !important;
  max-height: 200px;
  overflow-y: scroll;
  direction: ltr;
}
</style>
