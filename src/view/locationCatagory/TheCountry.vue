<template>
  <section>
    <div class="page-hero page-container" id="page-hero">
      <div class="padding d-flex">
        <div class="page-title">
          <h2 class="text-md text-highlight" style="color:#1890ff">Danh sách Quốc Gia</h2>
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
              <div class="col-sm-12"  style="height: 570px; overflow: hidden;">
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
                    <tr class="odd" data-id="1" role="row" v-for="(country,index) in countries" :key="index">
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
                          {{country.code}}
                        </span>
                      </td>
                      <td class="flex">
                        <a href="#" class="item-title text-color"
                          >{{country.name}}</a
                        >
                        <div class="item-except text-muted text-sm h-1x">
                          {{country.unsignedName}}
                        </div>
                      </td>
                      <td class="letter">
                        <a href="app.message.html" data-pjax-state="">
                          <span class="w-40 avatar gd-success">{{getFirstLetter(country.name)}}</span>
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
              :total="300"
              :show-less-items="true"
              :pageSizeOptions = "['7','10', '20', '30', '40']"
            />

          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheCountryDetail 
    :showLocations="showLocations"
    @showOrHideDetailLocation="showOrHideDetailLocation"
    ></TheCountryDetail>
  </section>
</template>

<script>
import axios from 'axios';
import TheCountryDetail from '../locationDetail/TheCountryDetail.vue';
export default {
  components: { TheCountryDetail },
  data(){
    return {
      showLocations:false,
      countries:[],
      pageSize:7,
      current: 1,
      
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
    me.countries = [ 
{"name": "Afghanistan", "code": "AF"}, 
{"name": "land Islands", "code": "AX"}, 
{"name": "Albania", "code": "AL"}, 
{"name": "Algeria", "code": "DZ"}, 
{"name": "American Samoa", "code": "AS"}, 
{"name": "AndorrA", "code": "AD"}, 
{"name": "Angola", "code": "AO"}, 
{"name": "Anguilla", "code": "AI"}, 
{"name": "Antarctica", "code": "AQ"}, 
{"name": "Antigua and Barbuda", "code": "AG"}, 
{"name": "Argentina", "code": "AR"}, 
{"name": "Armenia", "code": "AM"}, 
{"name": "Aruba", "code": "AW"}, 
{"name": "Australia", "code": "AU"}, 
{"name": "Austria", "code": "AT"}, 
{"name": "Azerbaijan", "code": "AZ"}, 
{"name": "Bahamas", "code": "BS"}, 
{"name": "Bahrain", "code": "BH"}, 
{"name": "Bangladesh", "code": "BD"}, 
{"name": "Barbados", "code": "BB"}, 
{"name": "Belarus", "code": "BY"}, 
{"name": "Belgium", "code": "BE"}, 
{"name": "Belize", "code": "BZ"}, 
{"name": "Benin", "code": "BJ"}, 
{"name": "Bermuda", "code": "BM"}, 
{"name": "Bhutan", "code": "BT"}, 
{"name": "Bolivia", "code": "BO"}, 
{"name": "Bosnia and Herzegovina", "code": "BA"}, 
{"name": "Botswana", "code": "BW"}, 
{"name": "Bouvet Island", "code": "BV"}, 
{"name": "Brazil", "code": "BR"}, 
{"name": "British Indian Ocean Territory", "code": "IO"}, 
{"name": "Brunei Darussalam", "code": "BN"}, 
{"name": "Bulgaria", "code": "BG"}, 
{"name": "Burkina Faso", "code": "BF"}, 
{"name": "Burundi", "code": "BI"}, 
{"name": "Cambodia", "code": "KH"}, 
{"name": "Cameroon", "code": "CM"}, 
{"name": "Canada", "code": "CA"}, 
{"name": "Cape Verde", "code": "CV"}, 
{"name": "Cayman Islands", "code": "KY"}, 
{"name": "Central African Republic", "code": "CF"}, 
{"name": "Chad", "code": "TD"}, 
{"name": "Chile", "code": "CL"}, 
{"name": "China", "code": "CN"}, 
{"name": "Christmas Island", "code": "CX"}, 
{"name": "Cocos (Keeling) Islands", "code": "CC"}, 
{"name": "Colombia", "code": "CO"}, 
{"name": "Comoros", "code": "KM"}, 
{"name": "Congo", "code": "CG"}, 
{"name": "Congo, The Democratic Republic of the", "code": "CD"}, 
{"name": "Cook Islands", "code": "CK"}, 
{"name": "Costa Rica", "code": "CR"}, 
{"name": "Cote D\"Ivoire", "code": "CI"}, 
{"name": "Croatia", "code": "HR"}, 
{"name": "Cuba", "code": "CU"}, 
{"name": "Cyprus", "code": "CY"}, 
{"name": "Czech Republic", "code": "CZ"}, 
{"name": "Denmark", "code": "DK"}, 
{"name": "Djibouti", "code": "DJ"}, 
{"name": "Dominica", "code": "DM"}, 
{"name": "Dominican Republic", "code": "DO"}, 
{"name": "Ecuador", "code": "EC"}, 
{"name": "Egypt", "code": "EG"}, 
{"name": "El Salvador", "code": "SV"}, 
{"name": "Equatorial Guinea", "code": "GQ"}, 
{"name": "Eritrea", "code": "ER"}, 
{"name": "Estonia", "code": "EE"}, 
{"name": "Ethiopia", "code": "ET"}, 
{"name": "Falkland Islands (Malvinas)", "code": "FK"}, 
{"name": "Faroe Islands", "code": "FO"}, 
{"name": "Fiji", "code": "FJ"}, 
{"name": "Finland", "code": "FI"}, 
{"name": "France", "code": "FR"}, 
{"name": "French Guiana", "code": "GF"}, 
{"name": "French Polynesia", "code": "PF"}, 
{"name": "French Southern Territories", "code": "TF"}, 
{"name": "Gabon", "code": "GA"}, 
{"name": "Gambia", "code": "GM"}, 
{"name": "Georgia", "code": "GE"}, 
{"name": "Germany", "code": "DE"}, 
{"name": "Ghana", "code": "GH"}, 
{"name": "Gibraltar", "code": "GI"}, 
{"name": "Greece", "code": "GR"}, 
{"name": "Greenland", "code": "GL"}, 
{"name": "Grenada", "code": "GD"}, 
{"name": "Guadeloupe", "code": "GP"}, 
{"name": "Guam", "code": "GU"}, 
{"name": "Guatemala", "code": "GT"}, 
{"name": "Guernsey", "code": "GG"}, 
{"name": "Guinea", "code": "GN"}, 
{"name": "Guinea-Bissau", "code": "GW"}, 
{"name": "Guyana", "code": "GY"}, 
{"name": "Haiti", "code": "HT"}, 
{"name": "Heard Island and Mcdonald Islands", "code": "HM"}, 
{"name": "Holy See (Vatican City State)", "code": "VA"}, 
{"name": "Honduras", "code": "HN"}, 
{"name": "Hong Kong", "code": "HK"}, 
{"name": "Hungary", "code": "HU"}, 
{"name": "Iceland", "code": "IS"}, 
{"name": "India", "code": "IN"}, 
{"name": "Indonesia", "code": "ID"}, 
{"name": "Iran, Islamic Republic Of", "code": "IR"}, 
{"name": "Iraq", "code": "IQ"}, 
{"name": "Ireland", "code": "IE"}, 
{"name": "Isle of Man", "code": "IM"}, 
{"name": "Israel", "code": "IL"}, 
{"name": "Italy", "code": "IT"}, 
{"name": "Jamaica", "code": "JM"}, 
{"name": "Japan", "code": "JP"}, 
{"name": "Jersey", "code": "JE"}, 
{"name": "Jordan", "code": "JO"}, 
{"name": "Kazakhstan", "code": "KZ"}, 
{"name": "Kenya", "code": "KE"}, 
{"name": "Kiribati", "code": "KI"}, 
{"name": "Korea, Democratic People\"S Republic of", "code": "KP"}, 
{"name": "Korea, Republic of", "code": "KR"}, 
{"name": "Kuwait", "code": "KW"}, 
{"name": "Kyrgyzstan", "code": "KG"}, 
{"name": "Lao People\"S Democratic Republic", "code": "LA"}, 
{"name": "Latvia", "code": "LV"}, 
{"name": "Lebanon", "code": "LB"}, 
{"name": "Lesotho", "code": "LS"}, 
{"name": "Liberia", "code": "LR"}, 
{"name": "Libyan Arab Jamahiriya", "code": "LY"}, 
{"name": "Liechtenstein", "code": "LI"}, 
{"name": "Lithuania", "code": "LT"}, 
{"name": "Luxembourg", "code": "LU"}, 
{"name": "Macao", "code": "MO"}, 
{"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"}, 
{"name": "Madagascar", "code": "MG"}, 
{"name": "Malawi", "code": "MW"}, 
{"name": "Malaysia", "code": "MY"}, 
{"name": "Maldives", "code": "MV"}, 
{"name": "Mali", "code": "ML"}, 
{"name": "Malta", "code": "MT"}, 
{"name": "Marshall Islands", "code": "MH"}, 
{"name": "Martinique", "code": "MQ"}, 
{"name": "Mauritania", "code": "MR"}, 
{"name": "Mauritius", "code": "MU"}, 
{"name": "Mayotte", "code": "YT"}, 
{"name": "Mexico", "code": "MX"}, 
{"name": "Micronesia, Federated States of", "code": "FM"}, 
{"name": "Moldova, Republic of", "code": "MD"}, 
{"name": "Monaco", "code": "MC"}, 
{"name": "Mongolia", "code": "MN"}, 
{"name": "Montenegro", "code": "ME"},
{"name": "Montserrat", "code": "MS"},
{"name": "Morocco", "code": "MA"}, 
{"name": "Mozambique", "code": "MZ"}, 
{"name": "Myanmar", "code": "MM"}, 
{"name": "Namibia", "code": "NA"}, 
{"name": "Nauru", "code": "NR"}, 
{"name": "Nepal", "code": "NP"}, 
{"name": "Netherlands", "code": "NL"}, 
{"name": "Netherlands Antilles", "code": "AN"}, 
{"name": "New Caledonia", "code": "NC"}, 
{"name": "New Zealand", "code": "NZ"}, 
{"name": "Nicaragua", "code": "NI"}, 
{"name": "Niger", "code": "NE"}, 
{"name": "Nigeria", "code": "NG"}, 
{"name": "Niue", "code": "NU"}, 
{"name": "Norfolk Island", "code": "NF"}, 
{"name": "Northern Mariana Islands", "code": "MP"}, 
{"name": "Norway", "code": "NO"}, 
{"name": "Oman", "code": "OM"}, 
{"name": "Pakistan", "code": "PK"}, 
{"name": "Palau", "code": "PW"}, 
{"name": "Palestinian Territory, Occupied", "code": "PS"}, 
{"name": "Panama", "code": "PA"}, 
{"name": "Papua New Guinea", "code": "PG"}, 
{"name": "Paraguay", "code": "PY"}, 
{"name": "Peru", "code": "PE"}, 
{"name": "Philippines", "code": "PH"}, 
{"name": "Pitcairn", "code": "PN"}, 
{"name": "Poland", "code": "PL"}, 
{"name": "Portugal", "code": "PT"}, 
{"name": "Puerto Rico", "code": "PR"}, 
{"name": "Qatar", "code": "QA"}, 
{"name": "Reunion", "code": "RE"}, 
{"name": "Romania", "code": "RO"}, 
{"name": "Russian Federation", "code": "RU"}, 
{"name": "RWANDA", "code": "RW"}, 
{"name": "Saint Helena", "code": "SH"}, 
{"name": "Saint Kitts and Nevis", "code": "KN"}, 
{"name": "Saint Lucia", "code": "LC"}, 
{"name": "Saint Pierre and Miquelon", "code": "PM"}, 
{"name": "Saint Vincent and the Grenadines", "code": "VC"}, 
{"name": "Samoa", "code": "WS"}, 
{"name": "San Marino", "code": "SM"}, 
{"name": "Sao Tome and Principe", "code": "ST"}, 
{"name": "Saudi Arabia", "code": "SA"}, 
{"name": "Senegal", "code": "SN"}, 
{"name": "Serbia", "code": "RS"}, 
{"name": "Seychelles", "code": "SC"}, 
{"name": "Sierra Leone", "code": "SL"}, 
{"name": "Singapore", "code": "SG"}, 
{"name": "Slovakia", "code": "SK"}, 
{"name": "Slovenia", "code": "SI"}, 
{"name": "Solomon Islands", "code": "SB"}, 
{"name": "Somalia", "code": "SO"}, 
{"name": "South Africa", "code": "ZA"}, 
{"name": "South Georgia and the South Sandwich Islands", "code": "GS"}, 
{"name": "Spain", "code": "ES"}, 
{"name": "Sri Lanka", "code": "LK"}, 
{"name": "Sudan", "code": "SD"}, 
{"name": "Suriname", "code": "SR"}, 
{"name": "Svalbard and Jan Mayen", "code": "SJ"}, 
{"name": "Swaziland", "code": "SZ"}, 
{"name": "Sweden", "code": "SE"}, 
{"name": "Switzerland", "code": "CH"}, 
{"name": "Syrian Arab Republic", "code": "SY"}, 
{"name": "Taiwan, Province of China", "code": "TW"}, 
{"name": "Tajikistan", "code": "TJ"}, 
{"name": "Tanzania, United Republic of", "code": "TZ"}, 
{"name": "Thailand", "code": "TH"}, 
{"name": "Timor-Leste", "code": "TL"}, 
{"name": "Togo", "code": "TG"}, 
{"name": "Tokelau", "code": "TK"}, 
{"name": "Tonga", "code": "TO"}, 
{"name": "Trinidad and Tobago", "code": "TT"}, 
{"name": "Tunisia", "code": "TN"}, 
{"name": "Turkey", "code": "TR"}, 
{"name": "Turkmenistan", "code": "TM"}, 
{"name": "Turks and Caicos Islands", "code": "TC"}, 
{"name": "Tuvalu", "code": "TV"}, 
{"name": "Uganda", "code": "UG"}, 
{"name": "Ukraine", "code": "UA"}, 
{"name": "United Arab Emirates", "code": "AE"}, 
{"name": "United Kingdom", "code": "GB"}, 
{"name": "United States", "code": "US"}, 
{"name": "United States Minor Outlying Islands", "code": "UM"}, 
{"name": "Uruguay", "code": "UY"}, 
{"name": "Uzbekistan", "code": "UZ"}, 
{"name": "Vanuatu", "code": "VU"}, 
{"name": "Venezuela", "code": "VE"}, 
{"name": "Viet Nam", "code": "VN"}, 
{"name": "Virgin Islands, British", "code": "VG"}, 
{"name": "Virgin Islands, U.S.", "code": "VI"}, 
{"name": "Wallis and Futuna", "code": "WF"}, 
{"name": "Western Sahara", "code": "EH"}, 
{"name": "Yemen", "code": "YE"}, 
{"name": "Zambia", "code": "ZM"}, 
{"name": "Zimbabwe", "code": "ZW"} 
    ]
    me.countries = me.countries.slice(0,7)
    axios
    .get('http://127.0.0.1:8000/address/country/')
    .then((result) =>{
      // me.countries = result.data
      console.log(result)
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
