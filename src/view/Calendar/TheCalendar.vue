<template style="direction: rtl">
  <div>
    <div style="position: relative">
      <a-button
        type="primary"
        style="top: 12px; position: absolute; right: 180px"
        @click="showOrHideForm(true)"
        >Tạo hội chẩn +</a-button
      >
      <a-calendar
        v-model:value="valueCalendar"
        style="direction: ltr; margin-top: 20px; margin-right: 10px"
        @panelChange="onPanelChange"
        @select="onSelect"
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
      dataTest: [
        {
          id: "62942154-2ac3-4781-a038-9dfb17fbaaae",
          meeting_title: "tiêu đề 1",
          meeting_time_start: "2022-12-30T09:25:00+07:00",
          meeting_time_end: "2022-12-28T10:25:00+07:00",
          meeting_content: "reprehenderit Duis labore cillum",
          calendar_id: "v0rlnq5a49c9aj56e46g8jnc18",
          calendar_url:
            "https://www.google.com/calendar/event?eid=djBybG5xNWE0OWM5YWo1NmU0Nmc4am5jMTggdGVsZWhlYWx0aC5pYm1lbGFiQG0",
          meeting_url: "https://meet.google.com/qrz-ufkx-osi",
          conclusion: null,
          url_file:
            "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
          is_valid: true,
          created_at: "2022-12-26T23:44:43.124207+07:00",
          update_at: "2022-12-26T23:44:43.124207+07:00",
          meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
        },
        {
          id: "62942154-2ac3-4781-a038-9dfb17fbaaae",
          meeting_title: "tiêu đề 12",
          meeting_time_start: "2022-12-28T09:25:00+07:00",
          meeting_time_end: "2022-12-28T10:25:00+07:00",
          meeting_content: "reprehenderit Duis labore cillum",
          calendar_id: "v0rlnq5a49c9aj56e46g8jnc18",
          calendar_url:
            "https://www.google.com/calendar/event?eid=djBybG5xNWE0OWM5YWo1NmU0Nmc4am5jMTggdGVsZWhlYWx0aC5pYm1lbGFiQG0",
          meeting_url: "https://meet.google.com/qrz-ufkx-osi",
          conclusion: null,
          url_file:
            "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
          is_valid: true,
          created_at: "2022-12-26T23:44:43.124207+07:00",
          update_at: "2022-12-26T23:44:43.124207+07:00",
          meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
        },
        {
          id: "62942154-2ac3-4781-a038-9dfb17fbaaae",
          meeting_title: "tiêu đề 113",
          meeting_time_start: "2022-12-29T09:25:00+07:00",
          meeting_time_end: "2022-12-28T10:25:00+07:00",
          meeting_content: "reprehenderit Duis labore cillum",
          calendar_id: "v0rlnq5a49c9aj56e46g8jnc18",
          calendar_url:
            "https://www.google.com/calendar/event?eid=djBybG5xNWE0OWM5YWo1NmU0Nmc4am5jMTggdGVsZWhlYWx0aC5pYm1lbGFiQG0",
          meeting_url: "https://meet.google.com/qrz-ufkx-osi",
          conclusion: null,
          url_file:
            "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
          is_valid: true,
          created_at: "2022-12-26T23:44:43.124207+07:00",
          update_at: "2022-12-26T23:44:43.124207+07:00",
          meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
        },
      ],
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
  mounted() {
    let a = document.querySelector(
      ".ant-radio-group.ant-radio-group-outline.ant-picker-calendar-mode-switch"
    );
    a.setAttribute("hidden", "true");
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
