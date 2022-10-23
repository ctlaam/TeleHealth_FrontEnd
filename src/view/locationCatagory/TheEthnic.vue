<template>
  <section>
    <div class="page-hero page-container" id="page-hero">
      <div class="padding d-flex">
        <div class="page-title">
          <h2 class="text-md text-highlight" style="color:#1890ff">Danh sách Dân Tộc</h2>
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
              <div class="col-sm-12">
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
                        <span class="text-muted">Tên dân tộc</span>
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
                    <tr class="odd" data-id="1" role="row" v-for="(ethinic,index) in ethinics" :key="index">
                      <td>
                        <div class="item-action dropdown">
                          <a href="#" data-toggle="dropdown" class="text-muted">
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
                          </a>
                          <div
                            class="dropdown-menu dropdown-menu-right bg-black"
                            role="menu"
                          >
                            <a class="dropdown-item" href="#"> See detail </a>
                            <a class="dropdown-item download"> Download </a>
                            <a class="dropdown-item edit"> Edit </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item trash"> Delete item </a>
                          </div>
                        </div>
                      </td>

                      <td style="text-align:left">
                        <span class="item-amount d-none d-sm-block text-sm">
                          {{ethinic.code}}
                        </span>
                      </td>
                      <td class="flex">
                        <a href="#" class="item-title text-color"
                          >{{ethinic.name}}</a
                        >
                        <div class="item-except text-muted text-sm h-1x">
                          {{ethinic.unsignedName}}
                        </div>
                      </td>
                      <td class="letter">
                        <a href="app.message.html" data-pjax-state="">
                          <span class="w-40 avatar gd-success">{{getFirstLetter(ethinic.name)}}</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheEthnicDetail 
    :showLocations="showLocations"
    @showOrHideDetailLocation="showOrHideDetailLocation"
    ></TheEthnicDetail>
  </section>
</template>

<script>
import axios from 'axios';
import TheEthnicDetail from '../locationDetail/TheEthnicDetail.vue'
export default {
  components:{
      TheEthnicDetail,
  },
  data(){
    return {
      showLocations:false,
      ethinics:[],
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
    .get('http://127.0.0.1:8000/address/ethnic/')
    .then(res =>{
      me.ethinics = res.data
    })
  }
};
</script>

<style scoped>
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
