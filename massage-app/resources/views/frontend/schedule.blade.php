@include('frontend.sections.header')
  <!-- ======== main ======== -->
  <main class="priority noHome">
    <!-- ======== header ======== -->
    @yield('frontend.sections.page.header')
    <!-- ======== /header ======== -->
    <!-- ======== nav ======== -->
    @include('frontend.sections.nav')
    <!-- ======== /nav ======== -->
    <!-- ======== mainView ======== -->
    @include('frontend.sections.mainview')
    <!-- ======== /mainView ======== -->
    
    <!-- ======== scheduleView ======== -->
    <section class="scheduleView clearfix pdTop140 pdBottom140 m-pdTop50 m-pdBottom50">
      <div class="twoColorBackGround"></div>
      <div class="scheduleViewCont cont">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h2 class="sectionTitleTop">SCHEDULE</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>スケジュール</p>
        </div>
        <div class="scheduleNavJs scheduleBtns">
          <a href="javascript:void(0)" data-url="/today_plus_schedule/2021-11-13" class="todays">11月13日(土)</a>
          <a href="javascript:void(0)" data-url="/today_plus_schedule/2021-11-14">11月14日(日)</a>
          <a href="javascript:void(0)" data-url="/today_plus_schedule/2021-11-15">11月15日(月)</a>
          <a href="javascript:void(0)" data-url="/today_plus_schedule/2021-11-16">11月16日(火)</a>
          <a href="javascript:void(0)" data-url="/today_plus_schedule/2021-11-17">11月17日(水)</a>
          <a href="javascript:void(0)" data-url="/today_plus_schedule/2021-11-18">11月18日(木)</a>
          <a href="javascript:void(0)" data-url="/today_plus_schedule/2021-11-19">11月19日(金)</a>
        </div>
        <div class="scheduleContent">
          <div class="scheduleList clearfix">
            <div class="item clearfix">
              <a data-turbolinks="false" href="therapist/663.html">
                <div class="itemImg">
                  <img
                    src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/therapist_image/image1/586/cb8cd986-05ea-4d2d-be81-c8bff6049add.png" />
                </div>
                <div class="itemInfo">
                  <p>
                    <label class="scheduleIcon"><img
                        src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                    10:00 ~ 19:30
                    <br class="displayNoneMore740">
                    <span class="scheduleType">
                      出勤
                    </span>
                  </p>
                  <hr class="therapistDivision">
                  <h3 class="itemName">田中みなみ (28歳)</h3>
                </div>
              </a>
            </div>
            <div class="item clearfix">
              <a data-turbolinks="false" href="therapist/657.html">
                <div class="itemImg">
                  <img
                    src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/therapist_image/image1/582/e5e7d841-2df9-46f4-9d49-e089536e5921.png" />
                </div>
                <div class="itemInfo">
                  <p>
                    <label class="scheduleIcon"><img
                        src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                    11:00 ~ 19:00
                    <br class="displayNoneMore740">
                    <span class="scheduleType">
                      出勤
                    </span>
                  </p>
                  <hr class="therapistDivision">
                  <h3 class="itemName">朝比奈まい (21歳)</h3>
                </div>
              </a>
            </div>
            <div class="item clearfix">
              <a data-turbolinks="false" href="therapist/656.html">
                <div class="itemImg">
                  <img
                    src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/therapist_image/image1/581/a5a4a80d-37d3-475c-8a0f-f7f93acc700e.png" />
                </div>
                <div class="itemInfo">
                  <p>
                    <label class="scheduleIcon"><img
                        src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                    11:00 ~ 17:00
                    <br class="displayNoneMore740">
                    <span class="scheduleType">
                      出勤
                    </span>
                  </p>
                  <hr class="therapistDivision">
                  <h3 class="itemName">七色ひかり (28歳)</h3>
                </div>
              </a>
            </div>
            <div class="item clearfix">
              <a data-turbolinks="false" href="therapist/121.html">
                <div class="itemImg">
                  <img
                    src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/therapist_image/image1/121/a600fc54-1c44-4b84-94a6-579fbf426884.png" />
                </div>
                <div class="itemInfo">
                  <p>
                    <label class="scheduleIcon"><img
                        src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                    13:00 ~ 20:00
                    <br class="displayNoneMore740">
                    <span class="scheduleType">
                      出勤
                    </span>
                  </p>
                  <hr class="therapistDivision">
                  <h3 class="itemName">相沢みき (29歳)</h3>
                </div>
              </a>
            </div>
            <div class="item clearfix">
              <a data-turbolinks="false" href="therapist/664.html">
                <div class="itemImg">
                  <img
                    src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/therapist_image/image1/587/e3d6db74-1942-47b0-ac2d-036fbb41ab24.png" />
                </div>
                <div class="itemInfo">
                  <p>
                    <label class="scheduleIcon"><img
                        src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                    17:00 ~ 2:00
                    <br class="displayNoneMore740">
                    <span class="scheduleType">
                      出勤
                    </span>
                  </p>
                  <hr class="therapistDivision">
                  <h3 class="itemName">城まき (23歳)</h3>
                </div>
              </a>
            </div>
            <div class="item clearfix">
              <a data-turbolinks="false" href="therapist/629.html">
                <div class="itemImg">
                  <img
                    src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/therapist_image/image1/565/2da8c0d2-5c50-4f2b-9e43-75be932f6fc2.png" />
                </div>
                <div class="itemInfo">
                  <p>
                    <label class="scheduleIcon"><img
                        src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                    17:00 ~ 23:00
                    <br class="displayNoneMore740">
                    <span class="scheduleType">
                      出勤
                    </span>
                  </p>
                  <hr class="therapistDivision">
                  <h3 class="itemName">如月らん (29歳)</h3>
                </div>
              </a>
            </div>
            <div class="item clearfix">
              <a data-turbolinks="false" href="therapist/645.html">
                <div class="itemImg">
                  <img
                    src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/therapist_image/image1/569/763341a6-e4f0-4b94-8820-bf154b0a3bff.png" />
                </div>
                <div class="itemInfo">
                  <p>
                    <label class="scheduleIcon"><img
                        src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                    19:00 ~ 0:00
                    <br class="displayNoneMore740">
                    <span class="scheduleType">
                      出勤
                    </span>
                  </p>
                  <hr class="therapistDivision">
                  <h3 class="itemName">椎名かほ (29歳)</h3>
                </div>
              </a>
            </div>
            <div class="item clearfix">
              <a data-turbolinks="false" href="therapist/630.html">
                <div class="itemImg">
                  <img
                    src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/therapist_image/image1/567/43a97a15-e245-47fe-b8d7-f7f32c3009d6.png" />
                </div>
                <div class="itemInfo">
                  <p>
                    <label class="scheduleIcon"><img
                        src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                    20:00 ~ 3:00
                    <br class="displayNoneMore740">
                    <span class="scheduleType">
                      出勤
                    </span>
                  </p>
                  <hr class="therapistDivision">
                  <h3 class="itemName">田部みかこ (27歳)</h3>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!-- ======== /scheduleView ======== -->

  </main> <!-- ======== /main ======== -->
  @include('frontend.sections.footer')
