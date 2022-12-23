<template style="direction: rtl">
  <div>
    <div style="position: relative">
      <a-button
        type="primary"
        style="top: 12px; position: absolute; right: 180px"
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
        <p>12323123</p>
        <a-button
          style="float: right; position: absolute; bottom: 10px; right: 10px"
          class="btn-schedule"
          @click="visibleModalSchedule = false"
          >Thoát</a-button
        >
      </a-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueCalendar: "",
      schedules: [],
      visibleModalSchedule: false,
      oldDate: new Date(),
    };
  },
  methods: {
    onPanelChange(value, mode) {
      this.visibleModalSchedule = false;
    },
    onSelect(value) {
      let dateSelected = new Date(
        value.month() + 1 + "-" + value.date() + "-" + +value.year()
      );
      if (this.oldDate.getMonth() == dateSelected.getMonth()) {
        this.visibleModalSchedule = true;
      } else if (this.oldDate.getMonth() != dateSelected.getMonth()) {
        this.oldDate = date;
      }
    },
    getListData(value) {
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            { type: "warning", content: "This is warning event." },
            { type: "success", content: "This is usual event." },
          ];
          break;
        case 10:
          listData = [
            { type: "warning", content: "This is warning event." },
            { type: "success", content: "This is usual event." },
            { type: "error", content: "This is error event." },
          ];
          break;
        case 15:
          listData = [
            { type: "warning", content: "This is warning event" },
            {
              type: "success",
              content: "This is very long usual event。。....",
            },
            { type: "error", content: "This is error event 1." },
            { type: "error", content: "This is error event 2." },
            { type: "error", content: "This is error event 3." },
            { type: "error", content: "This is error event 4." },
          ];
          break;
        default:
      }
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
</style>
