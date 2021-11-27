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

    <!-- ======== webFromView ======== -->
    <section class="display-block webFromView clearfix pdTop140 pdBottom50 m-pdTop50 m-pdBottom30">
      <!-- <div class="twoColorBackGround"></div> -->
      <div class="webFromViewCont cont">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h2 class="sectionTitleTop">
            WEB</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>web予約</p>
        </div>
        <div class="webFromViewFormCont">
          <form class="webFromViewForm" id="new_reservation_inquiry" action="https://www.リンパ.com/reservation/confirm"
            accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input
              type="hidden" name="authenticity_token"
              value="9FPVg3Y0wkFoVZI19K1JUq9vMxth3lIPMQl9FfAkRCZaM8qyzYaAQ58O8W5Bw0PLpfmK6pEu7NnYEVnTY1y4Fw==" />
            <div class="item">
              <div class="itemLabel">
                <label>お名前(フルネーム)<span class="required">必須</span>
                </label>
              </div>
              <div class="itemParts">
                <input class="txt" type="text" name="reservation_inquiry[name]" id="reservation_inquiry_name" />
              </div>
            </div>
            <div class="item">
              <div class="itemLabel">
                <label>メールアドレス<span class="required">必須</span>
                </label>
              </div>
              <div class="itemParts">
                <input required="required" class="txt" type="text" name="reservation_inquiry[email]"
                  id="reservation_inquiry_email" />
              </div>
            </div>
            <div class="item">
              <div class="itemLabel">
                <label>お電話番号<span class="required">必須</span>
                </label>
              </div>
              <div class="itemParts">
                <input required="required" class="txt" type="tel" name="reservation_inquiry[phone_number]"
                  id="reservation_inquiry_phone_number" />
              </div>
            </div>
            <div class="item">
              <div class="itemLabel">
                <label>ご来店回数<span class="required">必須</span>
                </label>
              </div>
              <div class="itemParts">
                <select name="reservation_inquiry[visit_count]" id="reservation_inquiry_visit_count">
                  <option value="初めて">初めて</option>
                  <option selected="selected" value="２回以上">２回以上</option>
                </select>
              </div>
            </div>
            <div class="item">
              <div class="itemLabel">
                <label>ご来店日時<span class="required">必須</span>
                </label>
              </div>
              <div class="itemParts">
                <div class="itemPartsCont">
                  <input required="required" readonly="readonly" class="datePicker date" placeholder="当日は選択不可"
                    type="text" name="reservation_inquiry[coming_at_date]" id="reservation_inquiry_coming_at_date" />
                  <select class="hour" id="reservation_inquiry_coming_at_hour" required="required"
                    name="reservation_inquiry[coming_at_hour]">
                    <option value=""></option>
                    <option selected="selected" value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                  </select>
                  <span>：</span>
                  <select class="minute" id="reservation_inquiry_coming_at_minute" required="required"
                    name="reservation_inquiry[coming_at_minute]">
                    <option value=""></option>
                    <option selected="selected" value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="itemLabel">
                <label>コース<span class="required">必須</span>
                </label>
              </div>
              <div class="itemParts">
                <div class="itemPartsCont">
                  <select class="courseMenu selectCourseJs" id="reservation_inquiry_coming_at_hour"
                    name="reservation_inquiry[course_id]">
                    <option value="344">シングルセラピストコース</option>
                    <option value="345">ダブルセラピストコース</option>
                  </select>
                  <span class="selectCourseTimeContent">
                    <select class="select-course-time courseTime" id="reservation_inquiry_coming_at_minute"
                      name="reservation_inquiry[course_system_id]">
                      <option value="1419">90分</option>
                      <option value="1420">120分</option>
                      <option value="1421">150分</option>
                      <option value="1422">180分</option>
                      <option value="1423">延長30分</option>
                    </select>

                  </span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="itemLabel">
                <label>指名<span class="required">必須</span>
                </label>
              </div>
              <div class="itemParts">
                <div class="itemPartsCont">
                  <button name="button" type="button" class="searchTherapistButton">
                    <span>セラピスト検索</span>
                  </button>
                  <input value="0" class="therapistId" type="hidden" name="reservation_inquiry[therapist_id]"
                    id="reservation_inquiry_therapist_id" />
                  <input readonly="readonly" value="" class="searchTherapistInput" type="text"
                    name="reservation_inquiry[therapist_name]" id="reservation_inquiry_therapist_name" />
                  <div class="reservationTherapists">
                    <p class="description">
                      •セラピスト検索をクリックしてください。<br>
                      •フリーの場合はFreeを選択してください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="itemLabel">
                <label>お問い合わせ内容</label>
              </div>
              <div class="itemParts">
                <textarea class="" rows="5" name="reservation_inquiry[inquiry]"
                  id="reservation_inquiry_inquiry"></textarea>
              </div>
            </div>
            <div class="item_button">
              <p class="btnCont">
                <button name="button" type="" class="btn">
                  <span>内容確認 ＞＞</span>
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

    </section><!-- ======== /webFromView ======== -->

    <!-- ======== lineReservationView ======== -->
    <section class="display-block lineReservationView clearfix pdTop30 pdBottom30 m-pdTop20 m-pdBottom20">
      <!-- <div class="twoColorBackGround"></div> -->
      <div class="lineReservationViewCont cont">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h2 class="sectionTitleTop">LINE</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>ライン予約</p>
        </div>

        <div class="bannerCont">
          <a target="_blank" alt="サンプルエステ　リンパ　LINE" href="https://line.me/">
            <img src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
            <div class="lineQrCode">
              <img
                src="https://s3-ap-northeast-1.amazonaws.com/リンパ-bucket-prod/uploads/lien_info/qr_code_image/22/8cc743b6-1e16-44a0-ba32-a4f61dc4934c.png" />
            </div>
          </a>
        </div>

      </div>
    </section><!-- ======== /lineReservationView ======== -->

    <!-- ======== telReservationView ======== -->
    <section class="display-block telReservationView clearfix pdTop30 pdBottom140 m-pdTop20 m-pdBottom50">
      <!-- <div class="twoColorBackGround"></div> -->
      <div class="telReservationViewCont cont">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h2 class="sectionTitleTop">TEL</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>電話予約</p>
        </div>
        <div class="bannerCont">
          <a onclick="gtag(&quot;event&quot;, &quot;tel&quot;, { &quot;event_category&quot;: &quot;cv&quot;, &quot;event_label&quot;: &quot;telclick&quot;, &quot;value&quot;: 1 });"
            alt="09000000000" href="tel:09000000000">
            <img src="{{ asset('bazu/assets/customer/tel_banner.jpg') }}" />
          </a>
        </div>
      </div>
    </section><!-- ======== /telReservationView ======== -->


  </main> <!-- ======== /main ======== -->
  <!-- ======== footer ======== -->
  @include('frontend.sections.footer')
  <!-- ======== /footer ======== -->
