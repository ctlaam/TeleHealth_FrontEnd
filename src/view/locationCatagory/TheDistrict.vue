<template>
  <section>
    <div class="page-hero page-container" id="page-hero">
      <div class="padding d-flex">
        <div class="page-title">
          <h2 class="text-md text-highlight" style="color:#1890ff">Danh sách Quận Huyện</h2>
          <small class="text-muted"></small>
        </div>
        <div class="flex"></div>
<button @click="showOrHideDetailLocation(true)" id="addPatient" class="btn btn-white" data-v-75b7bec2=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus" data-v-75b7bec2=""><line x1="12" y1="5" x2="12" y2="19" data-v-75b7bec2=""></line><line x1="5" y1="12" x2="19" y2="12" data-v-75b7bec2=""></line></svg><span class="mx-1" data-v-75b7bec2="">Thêm</span></button>
      </div>
    </div>
    <div class="page-content page-container" id="page-content location">
      <div class="padding">
        <div class="table-responsive">
          <div
            id="datatable_wrapper"
            class="dataTables_wrapper dt-bootstrap4 no-footer"
          >
            <div class="row">
              <div class="navbar">
                <div class="input-group flex bg-light rounded">
                  <input
                    type="text"
                    class="form-control no-bg no-border no-shadow search"
                    placeholder="Search"
                    required=""
                  />
                  <span class="input-group-append">
                    <button class="btn no-bg no-shadow" type="button">
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
                        class="feather feather-search text-fade"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12"  style="height: 570px; overflow: hidden;overflow-y:auto;">
                <table
                  id="datatable"
                  class="table table-theme table-row v-middle dataTable no-footer"
                  role="grid"
                  aria-describedby="datatable_info"
                >
                  <thead>
                    <tr role="row">
                      <th
                        class="sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        aria-label=""
                        style="width: 18.7344px"
                      ></th>
                      <th
                        class="sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        aria-label="Tasks"
                        style="width: 70px"
                      >
                        <span class="text-muted d-none d-sm-block">Mã code</span>
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="datatable"
                        rowspan="1"
                        colspan="1"
                        aria-label="Project: activate to sort column ascending"
                        style="width: 700px"
                      >
                        <span class="text-muted">Tên quốc gia</span>
                      </th>
                      <th
                        class="image"
                        tabindex="0"
                        aria-controls="datatable"
                        rowspan="1"
                        colspan="1"
                        aria-label="Owner: activate to sort column ascending"
                        style="width:120px;text-align: center;"
                        
                      >
                        <span class="text-muted">Avatar</span>
                      </th>
                      <th
                        class="sorting_asc"
                        tabindex="0"
                        aria-controls="datatable"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="ID: activate to sort column descending"
                        style="width: 29.625px"
                      >
                        <span class="text-muted">STT</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="odd" data-id="1" role="row" v-for="(district,index) in districts" :key="index">
                      <td>
                        <a-dropdown-button style="min-width:120px">
                          <template #overlay>
                            <a-menu @click="detailDoctor(doctor)">
                              <a-menu-item key="1"  >
                                <UserOutlined />
                                Thông tin chi tiết

                              </a-menu-item>
                              <a-menu-item key="2" @click="seeResults(patient.id)">
                                <UserOutlined />
                                Xóa
                              </a-menu-item>
                              <!-- <a-menu-item key="3"  @click="clickInput(patient.id)">
                                <UserOutlined />
                                Tính thể tích phổi
                              </a-menu-item> -->
                            </a-menu>
                          </template>
                      </a-dropdown-button>
                      </td>

                      <td style="text-align:left">
                        <span class="item-amount d-none d-sm-block text-sm">
                          {{district.code}}
                        </span>
                      </td>
                      <td class="flex">
                        <a href="#" class="item-title text-color"
                          >{{district.name}}</a
                        >
                        <div class="item-except text-muted text-sm h-1x">
                          {{district.unsignedName}}
                        </div>
                      </td>
                      <td class="letter">
                        <a href="app.message.html" data-pjax-state="">
                          <span class="w-40 avatar gd-success">{{getFirstLetter(district.name)}}</span>
                        </a>
                      </td>
                      <td
                        style="min-width: 30px; text-align: center"
                        class="sorting_1"
                      >
                        <small class="text-muted">{{index +1}}</small>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              <div class="pagination">
            <a-pagination
              v-model:pageSize="pageSize"
              v-model:current="current"
              :total="50"
              show-less-items
              :pageSizeOptions = "['7','10', '20', '30', '40']"

            />
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheDistrictDetail 
    :showLocations="showLocations"
    @showOrHideDetailLocation="showOrHideDetailLocation"
    ></TheDistrictDetail>
  </section>
</template>

<script>
import axios from 'axios';
import TheDistrictDetail from '../locationDetail/TheDistrictDetail.vue';
export default { 
  components: { TheDistrictDetail },
  data(){
    return {
      pageSize:7,
      current: 1,
      showLocations:false,
      districts:[],
    }
  },
  methods: {
    showOrHideDetailLocation(show){
    this.showLocations  = show
    },
        getFirstLetter(name) {
      let a = name.split("");
      return a[0].toUpperCase();
    },
  },
  created(){
    const me = this
    axios
    .get('http://127.0.0.1:8000/address/district/')
    .then(res =>{
      this.districts = res.data
      console.log(me.districts)
    })
  }
};
</script>

<style scoped>
.pagination {
  direction: ltr;
  margin: 30px auto 0px;
}
.padding.d-flex {
  flex-direction: row-reverse;
}
div#datatable_wrapper {
  overflow: hidden;
}
#location .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    justify-content: end;
}
td.letter {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
