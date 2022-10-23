<template>
    <!-- Navbar -->
<div id="aside" class="page-sidenav no-shrink bg-light nav-dropdown fade sticky" aria-hidden="true" data-class="bg-light">
            <div class="sidenav h-100 modal-dialog bg-light">
                <!-- sidenav top -->
                <div id="navbar" class="navbar">
                    <!-- brand -->
                    <a href="#" class="navbar-brand " data-pjax-state="">
                        
                        <!-- <img src="../assets/img/logo.png" alt="..."> -->
                        <span class="hidden-folded d-inline l-s-n-1x ">TeleHealth</span>
                    </a>
                    <!-- / brand -->
                </div>
                <!-- Flex nav content -->
                <div class="flex scrollable hover">
                    <div class="nav-active-text-primary" data-nav="">
                        <ul class="nav bg">
                            <li class="nav-header hidden-folded">
                                <span class="text-muted">Chính</span>
                            </li>
                            <router-link to="/content/maincontent/dashboard">

                              <li class="">
                                <a href="dashboard.html" data-pjax-state="">
                                  <span class="nav-icon text-primary"><img src="../../assets/img/icons8-homepage-64.png" style="width:24px;height:24px" alt=""/></span>
                                    <span class="nav-text">Bảng điều khiển</span>
                                </a>
                            </li>
                            </router-link>
                            <li class="nav-header hidden-folded">
                                <span class="text-muted">Quản lý đơn vị</span>
                            </li>

                            <router-link  to="/content/maincontent/patient">
                            <li class="">
                                <a href="app.user.html" data-pjax-state="load">
                                    <span class="nav-icon text-success"> <img src="../../assets/img/icons_patient-64.png" style="width:24px;height:24px" alt=""></span>
                                    <span class="nav-text">Bệnh nhân</span>
                                </a>
                            </li>
                            </router-link>

                            <router-link to="/content/maincontent/doctor">
                              
                              <li class="">
                                <a href="app.user.html" data-pjax-state="load">
                                  <span class="nav-icon text-success"> <img src="../../assets/img/iconsdoctoc-64.png" style="width:24px;height:24px" alt=""></span>
                                    <span class="nav-text">Bác sĩ</span>
                                </a>
                            </li>

                                  </router-link>
                                  <router-link to="/content/maincontent/doctorwait" v-if="role=='role3'">
                                        <li class="">
                                <a href="app.user.html" data-pjax-state="load">
                                  <span class="nav-icon text-success"> <img src="../../assets/img/waiting-room-64.png" style="width:24px;height:24px" alt=""></span>
                                    <span class="nav-text">Xác nhận bác sĩ</span>
                                </a>
                            </li>
                                  </router-link>
                            <router-link to="/content/maincontent/department">

                              <li class="">
                                <a href="app.user.html" data-pjax-state="load">
                                  <span class="nav-icon text-success"><img src="../../assets/img/iconshospital.png" style="width:24px;height:24px" alt=""></span>
                                    <span class="nav-text">Đơn vị y tế</span>
                                </a>
                            </li>
                            </router-link>
                            <li class="nav-header hidden-folded">
                                <span class="text-muted">Danh mục</span>
                            </li>
                            <router-link to="/content/maincontent/ethnic">

                                <li class="">
                                    
                                    <a href="app.user.html" data-pjax-state="load">
                                        <span class="nav-icon text-success"><img src="../../assets/img/icons8-ethnic50.png" style="width:24px;height:24px" alt=""></span>
                                        <span class="nav-text">Dân tộc</span>
                                </a>
                            </li>
                                    </router-link>
                            <router-link to="/content/maincontent/country">

                                <li class="">
                                    <a href="app.user.html" data-pjax-state="load">
                                        <span class="nav-icon text-success"><img src="../../assets/img/icons8-country-64.png" style="width:24px;height:24px" alt=""></span>
                                        <span class="nav-text">Quốc gia</span>
                                </a>
                            </li>
                                    </router-link>
                            <router-link to="/content/maincontent/city">

                                    <li class="">
                                        <a href="app.user.html" data-pjax-state="load">
                                            <span class="nav-icon text-success"><img src="../../assets/img/icons8-thudo64.png" style="width:24px;height:24px" alt=""></span>
                                            <span class="nav-text">Tỉnh thành</span>
                                        </a>
                                    </li>
                            </router-link>
                            <router-link to="/content/maincontent/district">

                                <li class="">
                                    <a href="app.user.html" data-pjax-state="load">
                                        <span class="nav-icon text-success"><img src="../../assets/img/icons8-street-64.png" style="width:24px;height:24px" alt=""/></span>
                                        <span class="nav-text">Quận huyện</span>
                                </a>
                            </li>
                                    </router-link>
                                <router-link to="/content/maincontent/commune">

                                    <li class="">
                                        <a href="app.user.html" data-pjax-state="load">
                                            <span class="nav-icon text-success"><img src="../../assets/img/icons8-ward32.png" style="width:24px;height:24px" alt=""/></span>
                                            <span class="nav-text">Xã phường</span>
                                </a>
                            </li>
                                    </router-link>
                        <!-- <router-link to="/content/maincontent/tlc">

                                    <li class="">
                                        <a href="app.user.html" data-pjax-state="load">
                                            <span class="nav-icon text-success"><img src="../../assets/img/icons8-lungs-100.png" style="width:24px;height:24px" alt=""/></span>
                                            <span class="nav-text">Tính thể tích phổi</span>
                                </a>
                            </li>
                        </router-link> -->

                            <li class="nav-header hidden-folded">
                                <span class="text-muted">Cá nhân</span>
                            </li>
                            <li class="">
                                <a href="app.calendar.html" data-pjax-state="load">
                                    <span class="nav-icon text-info"><img src="../../assets/img/icons8-calender-85.png" style="width:24px;height:24px" alt=""/></span>
                                    <span class="nav-text">Lịch hội chuẩn</span>
                                    <span class="nav-badge"><b class="badge-circle xs text-danger"></b></span>
                                </a>
                            </li>
                            <li class="">
                                <a href="app.message.html" data-pjax-state="load">
                                    <span class="nav-icon text-warning"><img src="../../assets/img/icons8-messages-48.png" style="width:24px;height:24px" alt=""/></span>
                                    <span class="nav-text">Tin nhắn</span>
                                    <span class="nav-badge"><b class="badge-circle xs text-warning"></b></span>
                                </a>
                            </li>
                            <li>
                                <a href="app.mail.html" data-pjax-state="">
                                    <span class="nav-icon text-danger"><img src="../../assets/img/icons8-new-message-48.png" style="width:24px;height:24px" alt=""/></span>
                                    <span class="nav-text">Email</span>
                                </a>
                            </li>

                        </ul>
                        <!-- <ul class="nav ">
                            <li class="nav-header hidden-folded">
                                <span class="text-muted">UI elements</span>
                            </li>
                            <li class="">
                                <a href="#" class="" data-pjax-state="anchor-empty">
                                    <span class="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></span>
                                    <span class="nav-text">Components</span>
                                    <span class="nav-caret"></span>
                                </a>
                                <ul class="nav-sub nav-mega">
                                    <li class="">
                                        <a href="ui.alert.html" class="" data-pjax-state="load">
                                            <span class="nav-text">Alert</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.badge.html" class="" data-pjax-state="">
                                            <span class="nav-text">Badge</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.button.html" class="" data-pjax-state="">
                                            <span class="nav-text">Button</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.card.html" class="" data-pjax-state="">
                                            <span class="nav-text">Card</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.carousel.html" class="" data-pjax-state="">
                                            <span class="nav-text">Carousel</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.color.html" class="" data-pjax-state="">
                                            <span class="nav-text">Color</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.dropdown.html" class="" data-pjax-state="">
                                            <span class="nav-text">Dropdown</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.grid.html" class="" data-pjax-state="">
                                            <span class="nav-text">Grid</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.icon.html" class="" data-pjax-state="">
                                            <span class="nav-text">Icon</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.list.html" class="" data-pjax-state="">
                                            <span class="nav-text">List</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.modal.html" class="" data-pjax-state="">
                                            <span class="nav-text">Modal</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.navbar.html" class="" data-pjax-state="">
                                            <span class="nav-text">Navbar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.sidenav.html" class="" data-pjax-state="">
                                            <span class="nav-text">Sidenav</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.timeline.html" class="" data-pjax-state="">
                                            <span class="nav-text">Timeline</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.tab.html" class="" data-pjax-state="">
                                            <span class="nav-text">Tab &amp; Collpase</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.tooltip.html" class="" data-pjax-state="">
                                            <span class="nav-text">Tooltip &amp; Popover</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="" data-pjax-state="">
                                    <span class="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box"><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line></svg></span>
                                    <span class="nav-text">Plugins</span>
                                    <span class="nav-caret"></span>
                                </a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <a href="ui.scroll.html" class="" data-pjax-state="">
                                            <span class="nav-text">Infinite Scroll</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.sortable.html" class="" data-pjax-state="">
                                            <span class="nav-text">Sortable</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.map.html" class="" data-pjax-state="">
                                            <span class="nav-text">Vector Map</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="" data-pjax-state="">
                                    <span class="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-disc"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg></span>
                                    <span class="nav-text">Form</span>
                                    <span class="nav-caret"></span>
                                </a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <a href="form.element.html" class="" data-pjax-state="">
                                            <span class="nav-text">Form Element</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form.layout.html" class="" data-pjax-state="">
                                            <span class="nav-text">Form Layout</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form.validation.html" class="" data-pjax-state="">
                                            <span class="nav-text">Form Validation</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form.editor.html" class="" data-pjax-state="">
                                            <span class="nav-text">Editor</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form.datepicker.html" class="" data-pjax-state="">
                                            <span class="nav-text">Datepicker</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form.select.html" class="" data-pjax-state="">
                                            <span class="nav-text">Select</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form.wizard.html" class="" data-pjax-state="">
                                            <span class="nav-text">Wizard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form.dropzone.html" class="" data-pjax-state="">
                                            <span class="nav-text">File Upload</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="" data-pjax-state="">
                                    <span class="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg></span>
                                    <span class="nav-text">Tables</span>
                                    <span class="nav-caret"></span>
                                </a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <a href="table.style.html" class="" data-pjax-state="">
                                            <span class="nav-text">Style</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="table.bootstrap.html" class="" data-pjax-state="">
                                            <span class="nav-text">Bootstrap Table</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="table.datatables.html" class="" data-pjax-state="">
                                            <span class="nav-text">Datatables</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="" data-pjax-state="">
                                    <span class="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg></span>
                                    <span class="nav-text">Charts</span>
                                    <span class="nav-caret"></span>
                                </a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <a href="chart.chartist.html" class="" data-pjax-state="">
                                            <span class="nav-text">Chartist</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chart.chartjs.html" class="" data-pjax-state="">
                                            <span class="nav-text">Chartjs</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-header hidden-folded">
                                <span class="text-muted">Extra</span>
                            </li>
                            <li>
                                <a href="#" class="" data-pjax-state="">
                                    <span class="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg></span>
                                    <span class="nav-text">Pages</span>
                                    <span class="nav-caret"></span>
                                </a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <a href="page.profile.html" class="" data-pjax-state="">
                                            <span class="nav-text">Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page.search.html" class="" data-pjax-state="">
                                            <span class="nav-text">Search</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page.invoice.html" class="" data-pjax-state="">
                                            <span class="nav-text">Invoice</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page.faq.html" class="" data-pjax-state="">
                                            <span class="nav-text">FAQ</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page.price.html" class="" data-pjax-state="">
                                            <span class="nav-text">Price</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page.setting.html" class="" data-pjax-state="">
                                            <span class="nav-text">Setting</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page.blank.html" class="" data-pjax-state="">
                                            <span class="nav-text">Blank</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="" data-pjax-state="">
                                    <span class="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>
                                    <span class="nav-text">Auth</span>
                                    <span class="nav-caret"></span>
                                </a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <a href="signin.html" class="" data-pjax-state="">
                                            <span class="nav-text">Signin</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="signup.html" class="" data-pjax-state="">
                                            <span class="nav-text">Signup</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="forgot-password.html" class="" data-pjax-state="">
                                            <span class="nav-text">Forgot Password</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="lockme.html" class="" data-pjax-state="">
                                            <span class="nav-text">Lockme Screen</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="404.html" class="" data-pjax-state="">
                                            <span class="nav-text">Error 404</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="505.html" class="" data-pjax-state="">
                                            <span class="nav-text">Error 505</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul> -->
                    </div>
                </div>
                <!-- sidenav bottom -->
            </div>
        </div>

  <!-- End Navbar -->

</template>

<script>
export default {
    name:"the-navbar",
      computed: {
    isAuthenticated() {
      return this.$store.getters["isAuthenticated"];
    },
    role() {
      return this.$store.getters["role"];
    },
  },

}
</script>

<style scoped>
div#aside {
    position: absolute;
    left: 0;
    
}
.navbar {
    min-height: 3.75rem;
    padding: 0.75rem 1rem;
    display: flex;
    /* text-align: center; */
    flex-direction: row-reverse;
}
.sidenav .nav li > a {
    display: flex;
    flex-wrap: nowrap;
    padding: 0 0.5rem;
    line-height: 2.5rem;
    position: relative;
    flex-direction: row-reverse;
}
.sidenav .nav li > a {
    display: flex;
    flex-wrap: nowrap;
    padding: 0 0.5rem;
    line-height: 2.5rem;
    position: relative;
    flex-direction: row-reverse;
}
</style>