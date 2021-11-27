@include('frontend.sections.header')
  <!-- ======== main ======== -->
    <!-- ======== header ======== -->
    @include('frontend.sections.pageheader')
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
              <a href="{{ route('therapist_1') }}">
                <div class="item_img">
                  <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
                </div>
                <div class="itemInfo">
                  <p>
                    <label class="scheduleIcon"><img src="{{ asset('bazu/assets/customer/clock_white.png') }}" /></label> 10:00 ~ 19:30
                    <br class="displayNoneMore768">
                    <span class="scheduleType">
                      出勤
                    </span>
                  </p>
                  <hr class="therapistDivision">
                  <h3 class="itemName">山田花子 (23歳)</h3>
                </div>
              </a>
            </div>
            <div class="item clearfix">
              <a href="{{ route('therapist_1') }}">
                <div class="item_img">
                  <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
                </div>
                <div class="itemInfo">
                  <p>
                    <label class="scheduleIcon"><img src="{{ asset('bazu/assets/customer/clock_white.png') }}" /></label> 10:00 ~ 19:30
                    <br class="displayNoneMore768">
                    <span class="scheduleType">
                      出勤
                    </span>
                  </p>
                  <hr class="therapistDivision">
                  <h3 class="itemName">山田花子 (23歳)</h3>
                </div>
              </a>
            </div>
            <div class="item clearfix">
              <a href="{{ route('therapist_1') }}">
                <div class="item_img">
                  <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
                </div>
                <div class="itemInfo">
                  <p>
                    <label class="scheduleIcon"><img src="{{ asset('bazu/assets/customer/clock_white.png') }}" /></label> 10:00 ~ 19:30
                    <br class="displayNoneMore768">
                    <span class="scheduleType">
                      出勤
                    </span>
                  </p>
                  <hr class="therapistDivision">
                  <h3 class="itemName">山田花子 (23歳)</h3>
                </div>
              </a>
            </div>
            <div class="item clearfix">
              <a href="{{ route('therapist_1') }}">
                <div class="item_img">
                  <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
                </div>
                <div class="itemInfo">
                  <p>
                    <label class="scheduleIcon"><img src="{{ asset('bazu/assets/customer/clock_white.png') }}" /></label> 10:00 ~ 19:30
                    <br class="displayNoneMore768">
                    <span class="scheduleType">
                      出勤
                    </span>
                  </p>
                  <hr class="therapistDivision">
                  <h3 class="itemName">山田花子 (23歳)</h3>
                </div>
              </a>
            </div>
            <div class="item clearfix">
              <a href="{{ route('therapist_1') }}">
                <div class="item_img">
                  <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
                </div>
                <div class="itemInfo">
                  <p>
                    <label class="scheduleIcon"><img src="{{ asset('bazu/assets/customer/clock_white.png') }}" /></label> 10:00 ~ 19:30
                    <br class="displayNoneMore768">
                    <span class="scheduleType">
                      出勤
                    </span>
                  </p>
                  <hr class="therapistDivision">
                  <h3 class="itemName">山田花子 (23歳)</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ======== /scheduleView ======== -->

  </main>
  <!-- ======== /main ======== -->
  <!-- ======== footer ======== -->
  @include('frontend.sections.footer')
  <!-- ======== /footer ======== -->
