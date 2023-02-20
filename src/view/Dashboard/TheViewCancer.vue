<template>
  <div id="content-cancer">
    <a-upload-dragger
      name="file"
      :multiple="true"
      style="width: 800px; height: 500px"
      accept="image/png, image/jpeg"
      @change="handleChange"
      :default-file-list="defaultFileList"
      listType="picture"
      :showUploadLis="false"
    >
      <p class="ant-upload-drag-icon">
        <img
          src="../../assets/img/iconsaddimage.png"
          alt=""
          srcset=""
          style="width: 96px; height: 96px"
        />
      </p>
      <p class="ant-upload-text">
        Nhấp hoặc kéo tệp vào khu vực này để tải lên
      </p>
      <p class="ant-upload-hint">Chỉ hộ trợ cho ảnh có dạng .png hoặc .jpg</p>
    </a-upload-dragger>
    <a-modal
      style="height: 700px; width: 800px"
      v-model:visible="visible"
      title="Chọn bác sĩ quản lý"
      @ok="assignPatient"
    >
      <div class="title">
        Kết quả chuẩn đoán dựa trên hình ảnh :
        {{ isHave ? "Bị ung thư" : "Không bị" }}
      </div>
      <div class="view-image">
        <img :src="thumUrl" alt="" />
      </div>
    </a-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      visible: false,
      isHave: false,
      thumUrl: "",
    };
  },
  computed: {
    accessToken() {
      return this.$store.getters.accessToken;
    },
  },
  methods: {
    async handleChange(file) {
      const me = this;
      if (file.file.type == "image/jpeg" || file.file.type == "image/png") {
        file.file.status = "success";
        this.thumbUrl = file.thumbUrl;
        this.visible = true;
        var formData = new FormData();
        formData.append("uploadfiles", file.file);
        await axios({
          url: "http://127.0.0.1:8000/pc/pc_result",
          method: "POST",
          data: formData,
          headers: {
            Authorization: `Bearer ${me.accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        })
          .then((result) => {
            alert(result.data.result);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$message.warning({
          content: "File tải lên không đúng định dang !",
          key: 567,
        });
      }
    },
  },
};
</script>

<style>
div#content-cancer {
  margin-top: 150px;
  margin-left: 440px;
  direction: ltr;
}
#content-cancer .ant-upload-list-picture-container {
  width: 800px;
}
#content-cancer .ant-upload-list.ant-upload-list-text {
  width: 800px;
}
</style>
