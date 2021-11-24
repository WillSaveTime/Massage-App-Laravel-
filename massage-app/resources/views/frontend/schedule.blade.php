@include('frontend.header')
<!-- ======== main ======== -->
  <main class="priority">
    <!-- ======== header ======== -->
    @yield('frontend.page.header')
    <!-- ======== /header ======== -->
    <!-- ======== nav ======== -->
    @include('frontend.nav')
    <!-- ======== /nav ======== -->
     <!-- ======== main ======== -->
  <main class="priority noHome">
    <!-- ======== header ======== -->
    <header class="priority clearfix">
      <div class="headerCont cont clearfix">
        <div class="headerLeft">
          <div class="headerLogo">
            <a data-turbolinks="false" class="logoLink" href="index.html">
              <img class="logo logoWhite"
                src="assets/customer/logo-4235d13b1fef2284d93a5e03151f13ea181a9ded27ba70d02f063d9107b68974.png" />
              <img class="logo logoGold"
                src="assets/customer/logoGold-d88459723f7d2efc28d130310bd7c5e335439368db37c8e2ea16aa31e700c1a9.png" />
              <h1 class="logoDesc">池袋メンズエステ バズーカ</h1>
            </a>
          </div>
        </div>
        <div class="headerRight">
          <div id="navBtnJs" class="navBar displayNoneMore1023">
            <span data-open=""></span>
            <div>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
        <div class="headerCenter">
          <div class="navInfo">
            <a onclick="gtag(&quot;event&quot;, &quot;tel&quot;, { &quot;event_category&quot;: &quot;cv&quot;, &quot;event_label&quot;: &quot;telclick&quot;, &quot;value&quot;: 1 });"
              alt="09017004288" href="tel:09017004288">
              <p class="timeAndTel">
                Tel：090-1700-4288</p>
            </a>
            <p class="timeAndTel">
              Open：10:00~05:00
              <br class="displayNoneLess1023">
              <span>
                (受付時間)09:30~05:00
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>
    <!-- ======== /header ======== -->
    <!-- ======== nav ======== -->
    <nav class="navPc displayNoneLess1023">
      <ul class="navItems clearfix" id="navItemsPc">
        <li class="display-inline-block navItem riseFadeJs">
          <a class="isCurrent" data-turbolinks="false" href="index.html">
            HOME<br>
            <small>ホーム</small>
          </a>
        </li>
        <li class="display-inline-block navItem riseFadeJs">
          <a class="isCurrent" data-turbolinks="false" href="system.html">
            SYSTEM<br>
            <small>システム</small>
          </a>
        </li>
        <li class="display-inline-block navItem riseFadeJs">
          <a class="isCurrent" data-turbolinks="false" href="schedule.html">
            SCHEDULE<br>
            <small>スケジュール</small>
          </a>
        </li>
        <li class="display-inline-block navItem riseFadeJs">
          <a class="isCurrent" data-turbolinks="false" href="therapist.html">
            THERAPIST<br>
            <small>セラピスト</small>
          </a>
        </li>
        <li class="display-inline-block navItem riseFadeJs">
          <a class="isCurrent" data-turbolinks="false" href="reservation.html">
            RESERVATION<br>
            <small>予約</small>
          </a>
        </li>
        <li class="display-inline-block navItem riseFadeJs">
          <a class="isCurrent" data-turbolinks="false" href="access.html">
            ACCESS<br>
            <small>アクセス</small>
          </a>
        </li>
        <li class="display-inline-block navItem riseFadeJs">
          <a class="isCurrent" data-turbolinks="false" href="recruit.html">
            RECRUIT<br>
            <small>求人</small>
          </a>
        </li>
      </ul>
    </nav>

    <nav id="navJs" class="navSpTb displayNoneMore1023">
      <ul class="navItems">
        <li class="display-block navItem riseFadeJs">
          <a class="isCurrent" data-turbolinks="false" href="index.html">
            HOME<br>
            <small>ホーム</small>
          </a>
        </li>
        <li class="display-block navItem riseFadeJs">
          <a class="isCurrent" data-turbolinks="false" href="system.html">
            SYSTEM<br>
            <small>システム</small>
          </a>
        </li>
        <li class="display-block navItem riseFadeJs">
          <a class="isCurrent" data-turbolinks="false" href="schedule.html">
            SCHEDULE<br>
            <small>スケジュール</small>
          </a>
        </li>
        <li class="display-block navItem riseFadeJs">
          <a class="isCurrent" data-turbolinks="false" href="therapist.html">
            THERAPIST<br>
            <small>セラピスト</small>
          </a>
        </li>
        <li class="display-block navItem riseFadeJs">
          <a class="isCurrent" data-turbolinks="false" href="reservation.html">
            RESERVATION<br>
            <small>予約</small>
          </a>
        </li>
        <li class="display-block navItem riseFadeJs">
          <a class="isCurrent" data-turbolinks="false" href="access.html">
            ACCESS<br>
            <small>アクセス</small>
          </a>
        </li>
        <li class="display-block navItem riseFadeJs">
          <a class="isCurrent" data-turbolinks="false" href="recruit.html">
            RECRUIT<br>
            <small>求人</small>
          </a>
        </li>
      </ul>

      <div class="navInfo riseFadeJs">
        <p>営業情報</p>
        <a onclick="gtag(&quot;event&quot;, &quot;tel&quot;, { &quot;event_category&quot;: &quot;cv&quot;, &quot;event_label&quot;: &quot;telclick&quot;, &quot;value&quot;: 1 });"
          alt="09017004288" href="tel:09017004288">
          <p class="timeAndTel">
            <span class="icon"><img class=""
                src="assets/customer/clockGold-296f87d5e775652c5fd0b35634f6f2d5fff8443b9a789f437d5774b3495231fc.png" /></span>
            10:00~05:00
          </p>
          <p class="timeAndTel">
            <span class="icon"><img class=""
                src="assets/customer/telGold-02c240dcfbb8bdc5d440db77894156286102af635f66ed3d92845591310cc499.png" /></span>
            09017004288
          </p>
        </a>
      </div>
    </nav>
    <!-- ======== /nav ======== -->

    <!-- ======== mainView ======== -->
    <section class="mainView" id="scrollTopPoint">
      <div class="mainViewCont ts">
        <div class="mainViewInner">
          <div class="sectionTitle sectionTitleLine textCenter pdTop80 m-pdTop50 s-pdTop80">
            <h2 class="sectionTitleTop">SCHEDULE</h2>
            <p>スケジュール</p>
          </div>
          <div class="display-block sectionDesc textCenter pdBottom50 m-pdBottom50 s-pdBottom20">
            <p>
            <p style="text-align: center;">本日から7日間の出勤予定になります。</p>

            <p style="text-align: center;">気になるセラピスト、お気に入りのセラピストの出勤をご確認ください。</p>

            <p style="text-align: center;">万が一、ご希望に添える日程やお時間がございましたら、お気軽にご相談くださいませ。</p>

            <p style="text-align: center;">WEBでのお問い合わせも致しておりますので、ご利用ください。</p>

            <p style="text-align: center;">&nbsp;</p>
            </p>
          </div>
        </div>
      </div>
    </section>
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
  @include('frontend.footer')
