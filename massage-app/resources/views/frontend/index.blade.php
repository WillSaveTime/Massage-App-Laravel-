@include('frontend.sections.header')
  <!-- ======== main ======== -->
  <main class="priority">
    <!-- ======== header ======== -->
    @yield('frontend.sections.page.header')
    <!-- ======== /header ======== -->
    <!-- ======== nav ======== -->
    @include('frontend.sections.nav')
    <!-- ======== /nav ======== -->
    <!-- ======== mainView ======== -->
    @include('frontend.sections.mainview')
    <!-- ======== /mainView ======== -->

    <!-- ======== todayStaffView ======== -->
    <section class="todayStaffView pdTop100 m-pdTop30 display-block" id="todayStaffView">
      <div class="twoColorBackGround"></div>
      <div class="todayStaffViewCont cont">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h2 class="sectionTitleTop">TODAY'S</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>本日の出勤</p>
        </div>
        <div class="todayStaffList clearfix">
          <div class="item clearfix">
            <a data-turbolinks="false" href="therapist/663.html">
              <div class="itemImg">
                <img
                  data-src="{{ asset ('images/staff.png') }}"
                  class="lazyload"
                  src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
              </div>
              <div class="itemInfo">
                <p>
                  <label class="scheduleIcon"><img
                      src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                  10:00
                  ~
                  19:30
                  <br class="displayNoneMore740">
                  <span class="scheduleType">
                    出勤
                  </span>
                </p>
                <hr class="therapistDivision">
                <h3 class="itemName">田中みなみ
                  (28歳)</h3>
              </div>
            </a>
          </div>
          <div class="item clearfix">
            <a data-turbolinks="false" href="therapist/657.html">
              <div class="itemImg">
                <img
                  data-src="{{ asset ('images/staff.png') }}"
                  class="lazyload"
                  src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
              </div>
              <div class="itemInfo">
                <p>
                  <label class="scheduleIcon"><img
                      src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                  11:00
                  ~
                  19:00
                  <br class="displayNoneMore740">
                  <span class="scheduleType">
                    出勤
                  </span>
                </p>
                <hr class="therapistDivision">
                <h3 class="itemName">朝比奈まい
                  (21歳)</h3>
              </div>
            </a>
          </div>
          <div class="item clearfix">
            <a data-turbolinks="false" href="therapist/656.html">
              <div class="itemImg">
                <img
                  data-src="{{ asset ('images/staff.png') }}"
                  class="lazyload"
                  src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
              </div>
              <div class="itemInfo">
                <p>
                  <label class="scheduleIcon"><img
                      src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                  11:00
                  ~
                  17:00
                  <br class="displayNoneMore740">
                  <span class="scheduleType">
                    出勤
                  </span>
                </p>
                <hr class="therapistDivision">
                <h3 class="itemName">七色ひかり
                  (28歳)</h3>
              </div>
            </a>
          </div>
          <div class="item clearfix">
            <a data-turbolinks="false" href="therapist/121.html">
              <div class="itemImg">
                <img
                  data-src="{{ asset ('images/staff.png') }}"
                  class="lazyload"
                  src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
              </div>
              <div class="itemInfo">
                <p>
                  <label class="scheduleIcon"><img
                      src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                  13:00
                  ~
                  20:00
                  <br class="displayNoneMore740">
                  <span class="scheduleType">
                    出勤
                  </span>
                </p>
                <hr class="therapistDivision">
                <h3 class="itemName">相沢みき
                  (29歳)</h3>
              </div>
            </a>
          </div>
          <div class="item clearfix">
            <a data-turbolinks="false" href="therapist/664.html">
              <div class="itemImg">
                <img
                  data-src="{{ asset ('images/staff.png') }}"
                  class="lazyload"
                  src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
              </div>
              <div class="itemInfo">
                <p>
                  <label class="scheduleIcon"><img
                      src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                  17:00
                  ~
                  2:00
                  <br class="displayNoneMore740">
                  <span class="scheduleType">
                    出勤
                  </span>
                </p>
                <hr class="therapistDivision">
                <h3 class="itemName">城まき
                  (23歳)</h3>
              </div>
            </a>
          </div>
          <div class="item clearfix">
            <a data-turbolinks="false" href="therapist/629.html">
              <div class="itemImg">
                <img
                  data-src="{{ asset ('images/staff.png') }}"
                  class="lazyload"
                  src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
              </div>
              <div class="itemInfo">
                <p>
                  <label class="scheduleIcon"><img
                      src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                  17:00
                  ~
                  23:00
                  <br class="displayNoneMore740">
                  <span class="scheduleType">
                    出勤
                  </span>
                </p>
                <hr class="therapistDivision">
                <h3 class="itemName">如月らん
                  (29歳)</h3>
              </div>
            </a>
          </div>
          <div class="item clearfix">
            <a data-turbolinks="false" href="therapist/645.html">
              <div class="itemImg">
                <img
                  data-src="{{ asset ('images/staff.png') }}"
                  class="lazyload"
                  src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
              </div>
              <div class="itemInfo">
                <p>
                  <label class="scheduleIcon"><img
                      src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                  19:00
                  ~
                  0:00
                  <br class="displayNoneMore740">
                  <span class="scheduleType">
                    出勤
                  </span>
                </p>
                <hr class="therapistDivision">
                <h3 class="itemName">椎名かほ
                  (29歳)</h3>
              </div>
            </a>
          </div>
          <div class="item clearfix">
            <a data-turbolinks="false" href="therapist/630.html">
              <div class="itemImg">
                <img
                  data-src="{{ asset ('images/staff.png') }}"
                  class="lazyload"
                  src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
              </div>
              <div class="itemInfo">
                <p>
                  <label class="scheduleIcon"><img
                      src="assets/customer/clockWhite-a8c9bd05254301f2f1a2859fb9089a0dfccdba9f76acc50de26c827c9f2c14ab.png" /></label>
                  20:00
                  ~
                  3:00
                  <br class="displayNoneMore740">
                  <span class="scheduleType">
                    出勤
                  </span>
                </p>
                <hr class="therapistDivision">
                <h3 class="itemName">田部みかこ
                  (27歳)</h3>
              </div>
            </a>
          </div>

        </div>
        <div class="itemButton">
          <p class="btnCont">
            <a class="btn" data-turbolinks="false" href="schedule.html">
              <span>今週のスケジュール ＞＞</span>
            </a>
          </p>
        </div>
      </div>
    </section>
    <!-- ======== /todayStaffView ======== -->
    <!-- ======== TopNewsAndTwitterView ======== -->
    <section class="TopNewsAndTwitterView pdTop50 m-pdBottom30">
      <div class="twoColorBackGround"></div>
      <div class="TopNewsAndTwitterViewCont cont">
        <div class="item clearfix">
          <!-- Twitter -->
          <div class="display-block itemTwitter">
            <div class="sectionTitle sectionTitleLine textCenter">
              <h2 class="sectionTitleTop">TWITTER</h2>
            </div>
            <div class="sectionDesc textCenter">
              <p>ツイッター</p>
            </div>
            <a data-chrome="noheader nofooter noborders transparent " data-lang="ja" data-theme="light"
              data-link-color="#ffffff" class="twitter-timeline" height="300" href="https://twitter.com/@bazu_ca4288">
              @bazu_ca4288さんのツイート
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
          <!-- /twitter -->
          <!-- noticeFixed -->
          <div class="display-block itemNoticesFixed">
            <div class="sectionTitle sectionTitleLine textCenter">
              <h2 class="sectionTitleTop">TOP NEWS</h2>
            </div>
            <div class="sectionDesc textCenter">
              <p>新着情報</p>
            </div>
            <div class="itemNoticesCont">
              <p style="text-align: center;"><a href="https://www.esthe-ranking.jp/ikebukuro/"><img alt=""
                    src="https://s3-ap-northeast-1.amazonaws.com/esterea-bucket-prod/uploads/side_banner_image/image/42/a011e841-7598-409f-966f-4e7b51f021e0.png" /></a>
              </p>

              <p style="text-align: center;"><strong><a href="https://www.esthe-ranking.jp/ikebukuro/"><span
                      style="color:#3498db;">池袋エリアメンズエステランキング</span></a></strong></p>

              <p style="text-align: center;"><strong><span style="font-size:20px;">SCHEDULE</span><br />
                  <span style="font-size:16px;">出勤情報</span></strong></p>

              <p style="text-align: center;"><span style="font-size: 16px;"><b>11月13</b></span><span
                  style="font-size: 16px;"><b>日（土）</b></span></p>

              <p style="text-align: center;">&nbsp;</p>

              <p style="text-align: center;">愛嬌たっぷりのルックス、誰からも愛されるすごく可愛らしいお顔立ちをされています。</p>

              <p style="text-align: center;"><a href="therapist/663.html"><span style="color:#3498db;"><span
                      style="font-size:16px;"><strong>田中みなみ(28歳)</strong></span></span></a></p>

              <p style="text-align: center;"><span style="font-size:16px;"><strong>10:00～19:30</strong></span></p>

              <p style="text-align: center;">&nbsp;</p>

              <p style="text-align: center;">明るくて、愛嬌たっぷりの女性で、若いのに気立てもよくて、ずっと一緒にいたくなってしまうタイプです。</p>

              <p style="text-align: center;"><a href="therapist/657.html"><span style="color:#3498db;"><span
                      style="font-size:16px;"><strong>朝比奈まい(21歳)</strong></span></span></a></p>

              <p style="text-align: center;"><span style="font-size:16px;"><strong>11:00～19:00</strong></span></p>

              <p style="text-align: center;">&nbsp;</p>

              <p style="text-align: center;">上品さと華やかさを兼ね備えた存在感のなかに遊ぶ心を際立たせるセラピストです。</p>

              <p style="text-align: center;"><a href="therapist/656.html"><span style="color:#3498db;"><span
                      style="font-size:16px;"><strong>七色ひかり(28歳)</strong></span></span></a></p>

              <p style="text-align: center;"><span style="font-size:16px;"><strong>11:00～17:00</strong></span></p>

              <p style="text-align: center;">&nbsp;</p>

              <p style="text-align: center;">一緒にいるだけでこちらまで元気になる、そんな雰囲気を持ったセラピストです。</p>

              <p style="text-align: center;"><a href="therapist/121.html"><span style="color:#3498db;"><span
                      style="font-size:16px;"><strong>相沢みき(29歳)</strong></span></span></a></p>

              <p style="text-align: center;"><span style="font-size:16px;"><strong>13:00～20:00</strong></span></p>

              <p style="text-align: center;">&nbsp;</p>

              <p style="text-align: center;">上品で穏やかな笑顔を絶やさない癒し系のセラピストでございます。</p>

              <p style="text-align: center;"><a href="therapist/664.html"><span style="color:#3498db;"><span
                      style="font-size:16px;"><strong>城まき(23歳)</strong></span></span></a></p>

              <p style="text-align: center;"><span style="font-size:16px;"><strong>17:00～2:00</strong></span></p>

              <p style="text-align: center;">&nbsp;</p>

              <p style="text-align: center;">温かく慈愛に満ちた女性としての品格や知性、このようなホスピタリティの高い女性はそう御座いません。</p>

              <p style="text-align: center;"><a href="therapist/629.html"><span style="color:#3498db;"><span
                      style="font-size:16px;"><strong>如月らん(29歳)</strong></span></span></a></p>

              <p style="text-align: center;"><span style="font-size:16px;"><strong>17:00～23:00</strong></span></p>

              <p style="text-align: center;">&nbsp;</p>

              <p style="text-align: center;">明るくて親近感の湧く親しみやすい性格で愛らしい笑顔がたまらない癒し系のセラピストです。</p>

              <p style="text-align: center;"><a href="therapist/645.html"><span style="color:#3498db;"><span
                      style="font-size:16px;"><strong>椎名かほ(29歳)</strong></span></span></a></p>

              <p style="text-align: center;"><span style="font-size:16px;"><strong>19:00～24:00</strong></span></p>

              <p style="text-align: center;">&nbsp;</p>

              <p style="text-align: center;">清楚で慎ましやか、一歩引いて男性を立て、男性に献身的に尽くすようなセラピストです。</p>

              <p style="text-align: center;"><a href="therapist/630.html"><span style="color:#3498db;"><span
                      style="font-size:16px;"><strong>田部みかこ(27歳)</strong></span></span></a></p>

              <p style="text-align: center;"><span style="font-size:16px;"><strong>20:00～3:00</strong></span></p>

              <p style="text-align: center;">&nbsp;</p>

              <p style="text-align: center;"><a
                  href="https://pay2.star-pay.jp/site/com/shop.php?tel=&amp;payc=A7140&amp;guide="><span
                    style="color:#3498db;"><strong><span
                        style="background-color:#ecf0f1;">クレジットでのお支払いはコチラ</span></strong></span></a></p>

              <p style="text-align: center;">&nbsp;</p>

              <p style="text-align: center;"><span
                  style="color:#e74c3c;"><strong>～池袋でのルーム拡大につきセラピスト大募集中～</strong></span></p>

              <p style="text-align: center;">当店は、セラピストのことを第一に考え、<br />
                池袋エリアで最も働きやすい環境を目指しています。<br />
                アロマオイルマッサージでお客様のカラダとココロを癒す<br />
                とてもやりがいのあるお仕事です。</p>

              <p style="text-align: center;">&nbsp;</p>

              <p style="text-align: center;">些細な事でも結構です。もし、私たちのお店に興味を持たれたなら、<br />
                いつでもお気軽にご連絡ください♪</p>

              <p style="text-align: center;">&nbsp;</p>

              <p style="text-align: center;">スタッフ一同、皆様からのご連絡、心よりお待ちしております。</p>

              <p style="text-align: center;"><strong>求人ページ</strong><br />
                <a href="recruit.html">https://www.bazu-ca.com/recru</a>
              </p>

            </div>
          </div>
          <!-- /noticeFixed -->
        </div>
      </div>
    </section>
    <!-- ======== /TopNewsAndTwitterView ======== -->
    <!-- ======== topSlideView ======== -->
    <section class="topSlideView clearfix pdTop100 pdBottom100 m-pdTop30 m-pdBottom30 display-block">
      <div class="twoColorBackGround"></div>
      <div class="topSlideViewCont cont">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h2 class="sectionTitleTop">TOPICS</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>トピックス</p>
        </div>
        <div class="item">
          <div class="itemImg">
            <a target="_blank" href="recruit.html">
              <img
                data-src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/top_slide_image/image/41/9681b09a-5444-47f5-bd14-d3237714317c.png"
                class="lazyload" alt="池袋 メンズエステ バズーカの求人"
                src="assets/customer/lazy/slide-d475a0d926dee2e319963275f0a084bf907043ca0c8df63f2bea072088fd27a6.jpg" />
            </a> <a target="_blank"
              href="https://www.esthe-ranking.jp/esthe-ranking/be6a3f0d-8704-46c3-8629-ce5ab2bca005">
              <img
                data-src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/top_slide_image/image/172/3d341fb9-3630-4777-b291-13e9ef1bc13a.png"
                class="lazyload" alt="池袋メンズエステ"
                src="assets/customer/lazy/slide-d475a0d926dee2e319963275f0a084bf907043ca0c8df63f2bea072088fd27a6.jpg" />
            </a> <a target="_blank" href="https://www.instagram.com/bazu_ca/?hl=ja">
              <img
                data-src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/top_slide_image/image/173/b5b3ad5b-3e5c-4a28-98c5-68e987b24af0.png"
                class="lazyload" alt="池袋　メンズエステ　バズーカ　インスタグラム"
                src="assets/customer/lazy/slide-d475a0d926dee2e319963275f0a084bf907043ca0c8df63f2bea072088fd27a6.jpg" />
            </a> <a target="_blank" href="https://pay2.star-pay.jp/site/pc/shop.php?payc=A7140">
              <img
                data-src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/top_slide_image/image/175/952d333a-b5e2-4258-878b-4b53f2fa73bb.png"
                class="lazyload" alt="池袋メンズエステ バズーカのカード決済"
                src="assets/customer/lazy/slide-d475a0d926dee2e319963275f0a084bf907043ca0c8df63f2bea072088fd27a6.jpg" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- ======== /topSlideView ======== -->
    <!-- ======== pickUpAndBlogsView ======== -->
    <section class="pickUpAndBlogsView pdTop50 pdBottom50 m-pdTop30 s-pdTop30 m-pdBottom30">
      <div class="twoColorBackGround"></div>
      <div class="pickUpAndBlogsViewCont cont">
        <div class="item clearfix">

          <!-- blogs -->
          <div class="display-block clearfix itemBlogs">
            <div class="sectionTitle sectionTitleLine textCenter">
              <h2 class="sectionTitleTop">BLOGS</h2>
            </div>
            <div class="sectionDesc textCenter">
              <p>ブログ</p>
            </div>

            <!-- blogsListPc -->
            <div class="blogsListPc displayNoneLess1023">
              <dl class="clearfix">
                <a class="blogItem" href="blog/7390.html">
                  <dt>
                    <img
                      data-src="{{ asset('images/top_image.jpg') }}"
                      class="lazyload blogThumb" alt="メンズエステブログ - こんばんは✨"
                      src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                  </dt>
                  <dd>
                    <h3>
                      こんばんは✨
                    </h3>
                    <div class="content">こんばんは✨

                       

                       

                      今日もまきは元...</div>
                    <p class="blogPostedDay blogInfo">2021/11/13(土) 17:27</p>
                    <p class="writer blogInfo">まき
                      <span class="icon"><img class="blogThumb"
                          src="assets/customer/write-2cb28496ff5a06863f814ca8c5fff54cbcfd33a923f502ec83a7379558218818.png" /></span>
                    </p>
                  </dd>
                </a>
                <hr>
                <a class="blogItem" href="blog/7389.html">
                  <dt>
                    <img
                      data-src="{{ asset('images/top_image.jpg') }}"
                      class="lazyload blogThumb" alt="メンズエステブログ - 体験れぽ書いて頂きました⭐︎"
                      src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                  </dt>
                  <dd>
                    <h3>
                      体験れぽ書いて頂きました⭐︎
                    </h3>
                    <div class="content">こんにちは！まいです♪

                      先日来てくださったお客様...</div>
                    <p class="blogPostedDay blogInfo">2021/11/13(土) 13:43</p>
                    <p class="writer blogInfo">まい
                      <span class="icon"><img class="blogThumb"
                          src="assets/customer/write-2cb28496ff5a06863f814ca8c5fff54cbcfd33a923f502ec83a7379558218818.png" /></span>
                    </p>
                  </dd>
                </a>
                <hr>
                <a class="blogItem" href="blog/7388.html">
                  <dt>
                    <img
                      data-src="{{ asset('images/top_image.jpg') }}"
                      class="lazyload blogThumb" alt="メンズエステブログ - 出勤するよ"
                      src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                  </dt>
                  <dd>
                    <h3>
                      出勤するよ
                    </h3>
                    <div class="content"> 

                      こんにちは

                       

                      らんです❤️
                      ...</div>
                    <p class="blogPostedDay blogInfo">2021/11/13(土) 12:33</p>
                    <p class="writer blogInfo">らん
                      <span class="icon"><img class="blogThumb"
                          src="assets/customer/write-2cb28496ff5a06863f814ca8c5fff54cbcfd33a923f502ec83a7379558218818.png" /></span>
                    </p>
                  </dd>
                </a>
                <hr>
                <a class="blogItem" href="blog/7387.html">
                  <dt>
                    <img
                      data-src="{{ asset('images/top_image.jpg') }}"
                      class="lazyload blogThumb" alt="メンズエステブログ - さっむーい"
                      src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                  </dt>
                  <dd>
                    <h3>
                      さっむーい
                    </h3>
                    <div class="content">寒いよー(＞＜)

                      ふぅ～ゆぅ～がぁ～は～じまった...</div>
                    <p class="blogPostedDay blogInfo">2021/11/13(土) 10:54</p>
                    <p class="writer blogInfo">七色ひかり
                      <span class="icon"><img class="blogThumb"
                          src="assets/customer/write-2cb28496ff5a06863f814ca8c5fff54cbcfd33a923f502ec83a7379558218818.png" /></span>
                    </p>
                  </dd>
                </a>
                <hr>
                <a class="blogItem" href="blog/7386.html">
                  <dt>
                    <img
                      data-src="{{ asset('images/top_image.jpg') }}"
                      class="lazyload blogThumb" alt="メンズエステブログ - おひさしぶりです♡"
                      src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                  </dt>
                  <dd>
                    <h3>
                      おひさしぶりです♡
                    </h3>
                    <div class="content"> 

                      おはようございます☀

                       

                      お久し...</div>
                    <p class="blogPostedDay blogInfo">2021/11/13(土) 10:54</p>
                    <p class="writer blogInfo">田中みなみ
                      <span class="icon"><img class="blogThumb"
                          src="assets/customer/write-2cb28496ff5a06863f814ca8c5fff54cbcfd33a923f502ec83a7379558218818.png" /></span>
                    </p>
                  </dd>
                </a>
                <hr>
                <a class="blogItem" href="blog/7385.html">
                  <dt>
                    <img
                      data-src="{{ asset('images/top_image.jpg') }}"
                      class="lazyload blogThumb" alt="メンズエステブログ - 御礼です♡"
                      src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                  </dt>
                  <dd>
                    <h3>
                      御礼です♡
                    </h3>
                    <div class="content"> 

                      今日も皆様おしごとお疲れさまです♡

                      会...</div>
                    <p class="blogPostedDay blogInfo">2021/11/12(金) 19:43</p>
                    <p class="writer blogInfo">ちか
                      <span class="icon"><img class="blogThumb"
                          src="assets/customer/write-2cb28496ff5a06863f814ca8c5fff54cbcfd33a923f502ec83a7379558218818.png" /></span>
                    </p>
                  </dd>
                </a>
                <hr>
                <a class="blogItem" href="blog/7384.html">
                  <dt>
                    <img
                      data-src="{{ asset('images/top_image.jpg') }}"
                      class="lazyload blogThumb" alt="メンズエステブログ - ご予約嬉しいな♡"
                      src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                  </dt>
                  <dd>
                    <h3>
                      ご予約嬉しいな♡
                    </h3>
                    <div class="content">本日よろしくお願い致します( ˙꒳​˙ )σ

                       ...</div>
                    <p class="blogPostedDay blogInfo">2021/11/12(金) 12:54</p>
                    <p class="writer blogInfo">★小椋はな
                      <span class="icon"><img class="blogThumb"
                          src="assets/customer/write-2cb28496ff5a06863f814ca8c5fff54cbcfd33a923f502ec83a7379558218818.png" /></span>
                    </p>
                  </dd>
                </a>
                <hr>
                <a class="blogItem" href="blog/7383.html">
                  <dt>
                    <img
                      data-src="{{ asset('images/top_image.jpg') }}"
                      class="lazyload blogThumb" alt="メンズエステブログ - パン教室に♡"
                      src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                  </dt>
                  <dd>
                    <h3>
                      パン教室に♡
                    </h3>
                    <div class="content">パン教室に行ってきました(/// ^///)

                      キ...</div>
                    <p class="blogPostedDay blogInfo">2021/11/11(木) 23:01</p>
                    <p class="writer blogInfo">★小椋はな
                      <span class="icon"><img class="blogThumb"
                          src="assets/customer/write-2cb28496ff5a06863f814ca8c5fff54cbcfd33a923f502ec83a7379558218818.png" /></span>
                    </p>
                  </dd>
                </a>
                <hr>
              </dl>
            </div>
            <!-- /blogsListPc -->
            <!-- blogsListSp -->
            <div class="blogsListSp displayNoneMore1023">
              <div class="swiper-container" id="blogsSliderJs">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <a class="blogItem" href="blog/7390.html">
                      <img
                        data-src="{{ asset('images/top_image.jpg') }}"
                        class="lazyload blogThumb" alt="メンズエステブログ - こんばんは✨"
                        src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                      <div class="blogInfoCont">
                        <p class="writer blogInfo">まき
                          <span class="icon"><img class="blogThumb"
                              src="assets/customer/writeWhite-f9f7c2375d36706a618a072b66babdb4b5753ce8fb8664c90d4bf1834dd5e18a.png" /></span>
                        </p>
                        <p>こんばんは✨
                          ...</p>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="blogItem" href="blog/7389.html">
                      <img
                        data-src="{{ asset('images/top_image.jpg') }}"
                        class="lazyload blogThumb" alt="メンズエステブログ - 体験れぽ書いて頂きました⭐︎"
                        src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                      <div class="blogInfoCont">
                        <p class="writer blogInfo">まい
                          <span class="icon"><img class="blogThumb"
                              src="assets/customer/writeWhite-f9f7c2375d36706a618a072b66babdb4b5753ce8fb8664c90d4bf1834dd5e18a.png" /></span>
                        </p>
                        <p>こんにちは！ま...</p>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="blogItem" href="blog/7388.html">
                      <img
                        data-src="{{ asset('images/top_image.jpg') }}"
                        class="lazyload blogThumb" alt="メンズエステブログ - 出勤するよ"
                        src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                      <div class="blogInfoCont">
                        <p class="writer blogInfo">らん
                          <span class="icon"><img class="blogThumb"
                              src="assets/customer/writeWhite-f9f7c2375d36706a618a072b66babdb4b5753ce8fb8664c90d4bf1834dd5e18a.png" /></span>
                        </p>
                        <p> 

                          こん...</p>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="blogItem" href="blog/7387.html">
                      <img
                        data-src="{{ asset('images/top_image.jpg') }}"
                        class="lazyload blogThumb" alt="メンズエステブログ - さっむーい"
                        src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                      <div class="blogInfoCont">
                        <p class="writer blogInfo">七色ひかり
                          <span class="icon"><img class="blogThumb"
                              src="assets/customer/writeWhite-f9f7c2375d36706a618a072b66babdb4b5753ce8fb8664c90d4bf1834dd5e18a.png" /></span>
                        </p>
                        <p>寒いよー(＞＜...</p>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="blogItem" href="blog/7386.html">
                      <img
                        data-src="{{ asset('images/top_image.jpg') }}"
                        class="lazyload blogThumb" alt="メンズエステブログ - おひさしぶりです♡"
                        src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                      <div class="blogInfoCont">
                        <p class="writer blogInfo">田中みなみ
                          <span class="icon"><img class="blogThumb"
                              src="assets/customer/writeWhite-f9f7c2375d36706a618a072b66babdb4b5753ce8fb8664c90d4bf1834dd5e18a.png" /></span>
                        </p>
                        <p> 

                          おは...</p>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="blogItem" href="blog/7385.html">
                      <img
                        data-src="{{ asset('images/top_image.jpg') }}"
                        class="lazyload blogThumb" alt="メンズエステブログ - 御礼です♡"
                        src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                      <div class="blogInfoCont">
                        <p class="writer blogInfo">ちか
                          <span class="icon"><img class="blogThumb"
                              src="assets/customer/writeWhite-f9f7c2375d36706a618a072b66babdb4b5753ce8fb8664c90d4bf1834dd5e18a.png" /></span>
                        </p>
                        <p> 

                          今日...</p>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="blogItem" href="blog/7384.html">
                      <img
                        data-src="{{ asset('images/top_image.jpg') }}"
                        class="lazyload blogThumb" alt="メンズエステブログ - ご予約嬉しいな♡"
                        src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                      <div class="blogInfoCont">
                        <p class="writer blogInfo">★小椋はな
                          <span class="icon"><img class="blogThumb"
                              src="assets/customer/writeWhite-f9f7c2375d36706a618a072b66babdb4b5753ce8fb8664c90d4bf1834dd5e18a.png" /></span>
                        </p>
                        <p>本日よろしくお...</p>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="blogItem" href="blog/7383.html">
                      <img
                        data-src="{{ asset('images/top_image.jpg') }}"
                        class="lazyload blogThumb" alt="メンズエステブログ - パン教室に♡"
                        src="{{ asset('assets/customer/lazy/blog_image-c8a8b1bfc2a4b96e9a1e86cb897bc191b5977ca5d60878277fc10213b12f2f7c.jpg.png') }}" />
                      <div class="blogInfoCont">
                        <p class="writer blogInfo">★小椋はな
                          <span class="icon"><img class="blogThumb"
                              src="assets/customer/writeWhite-f9f7c2375d36706a618a072b66babdb4b5753ce8fb8664c90d4bf1834dd5e18a.png" /></span>
                        </p>
                        <p>パン教室に行っ...</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
            <!-- /blogsListSp -->
          </div>
          <!-- /blogs -->
          <!-- pickUp -->
          <div class="display-block itemPickUp">
            <div class="sectionTitle sectionTitleLine textCenter whiteLine">
              <h2 class="sectionTitleTop sectionTitleTopWhite">PICK'UP</h2>
            </div>
            <div class="sectionDesc textCenter sectionDescWhite">
              <p>ピックアップ</p>
            </div>
            <div class="swiper-container" id="pickUpSliderJs">
              <div class="swiper-wrapper">

                <div class="swiper-slide">
                  <a class="itemPickUpStaff" href="therapist/649.html">
                    <div class="itemPickUpImg">
                      <img
                        data-src="{{ asset ('images/staff.png') }}"
                        class="lazyload" alt="ピックアップ - 佐々木たお"
                        src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
                    </div>
                    <div class="itemPickUpInfo">
                      <div class="mark">
                        <label>NEW</label>
                      </div>
                      <hr class="therapistDivision" />
                      <h3 class="itemName textCenter">
                        佐々木たお(28歳)
                      </h3>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a class="itemPickUpStaff" href="therapist/651.html">
                    <div class="itemPickUpImg">
                      <img
                        data-src="{{ asset ('images/staff.png') }}"
                        class="lazyload" alt="ピックアップ - 立華かえで"
                        src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
                    </div>
                    <div class="itemPickUpInfo">
                      <div class="mark">
                        <label>NEW</label>
                      </div>
                      <hr class="therapistDivision" />
                      <h3 class="itemName textCenter">
                        立華かえで(25歳)
                      </h3>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a class="itemPickUpStaff" href="therapist/652.html">
                    <div class="itemPickUpImg">
                      <img
                        data-src="{{ asset ('images/staff.png') }}"
                        class="lazyload" alt="ピックアップ - 源すず"
                        src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
                    </div>
                    <div class="itemPickUpInfo">
                      <div class="mark">
                        <label>NEW</label>
                      </div>
                      <hr class="therapistDivision" />
                      <h3 class="itemName textCenter">
                        源すず(20歳)
                      </h3>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a class="itemPickUpStaff" href="therapist/655.html">
                    <div class="itemPickUpImg">
                      <img
                        data-src="{{ asset ('images/staff.png') }}"
                        class="lazyload" alt="ピックアップ - 神山さいり"
                        src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
                    </div>
                    <div class="itemPickUpInfo">
                      <div class="mark">
                        <label>NEW</label>
                      </div>
                      <hr class="therapistDivision" />
                      <h3 class="itemName textCenter">
                        神山さいり(24歳)
                      </h3>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a class="itemPickUpStaff" href="therapist/656.html">
                    <div class="itemPickUpImg">
                      <img
                        data-src="{{ asset ('images/staff.png') }}"
                        class="lazyload" alt="ピックアップ - 七色ひかり"
                        src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
                    </div>
                    <div class="itemPickUpInfo">
                      <div class="mark">
                        <label>NEW</label>
                      </div>
                      <hr class="therapistDivision" />
                      <h3 class="itemName textCenter">
                        七色ひかり(28歳)
                      </h3>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a class="itemPickUpStaff" href="therapist/657.html">
                    <div class="itemPickUpImg">
                      <img
                        data-src="{{ asset ('images/staff.png') }}"
                        class="lazyload" alt="ピックアップ - 朝比奈まい"
                        src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
                    </div>
                    <div class="itemPickUpInfo">
                      <div class="mark">
                        <label>NEW</label>
                      </div>
                      <hr class="therapistDivision" />
                      <h3 class="itemName textCenter">
                        朝比奈まい(21歳)
                      </h3>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a class="itemPickUpStaff" href="therapist/658.html">
                    <div class="itemPickUpImg">
                      <img
                        data-src="{{ asset ('images/staff.png') }}"
                        class="lazyload" alt="ピックアップ - 松嶋みく"
                        src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
                    </div>
                    <div class="itemPickUpInfo">
                      <div class="mark">
                        <label>NEW</label>
                      </div>
                      <hr class="therapistDivision" />
                      <h3 class="itemName textCenter">
                        松嶋みく(25歳)
                      </h3>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a class="itemPickUpStaff" href="therapist/659.html">
                    <div class="itemPickUpImg">
                      <img
                        data-src="{{ asset ('images/staff.png') }}"
                        class="lazyload" alt="ピックアップ - 菅まこ"
                        src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
                    </div>
                    <div class="itemPickUpInfo">
                      <div class="mark">
                        <label>NEW</label>
                      </div>
                      <hr class="therapistDivision" />
                      <h3 class="itemName textCenter">
                        菅まこ(28歳)
                      </h3>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a class="itemPickUpStaff" href="therapist/663.html">
                    <div class="itemPickUpImg">
                      <img
                        data-src="{{ asset ('images/staff.png') }}"
                        class="lazyload" alt="ピックアップ - 田中みなみ"
                        src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
                    </div>
                    <div class="itemPickUpInfo">
                      <div class="mark">
                        <label>NEW</label>
                      </div>
                      <hr class="therapistDivision" />
                      <h3 class="itemName textCenter">
                        田中みなみ(28歳)
                      </h3>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a class="itemPickUpStaff" href="therapist/664.html">
                    <div class="itemPickUpImg">
                      <img
                        data-src="{{ asset ('images/staff.png') }}"
                        class="lazyload" alt="ピックアップ - 城まき"
                        src="assets/customer/lazy/therapist_image-7cd57f8aaebc3552be503721e91f22b964b898badaff2c023ebe571328ad55b5.jpg.png" />
                    </div>
                    <div class="itemPickUpInfo">
                      <div class="mark">
                        <label>NEW</label>
                      </div>
                      <hr class="therapistDivision" />
                      <h3 class="itemName textCenter">
                        城まき(23歳)
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next swiper-button-white swiper-custom-button"></div>
              <div class="swiper-button-prev swiper-button-white swiper-custom-button"></div>
            </div>
          </div>
          <!-- /pickUp -->
        </div>
      </div>
    </section>
    <!-- ======== /pickUpAndBlogsView ======== -->
    <!-- ======== noticeView ======== -->
    <section class="display-block noticeView pdTop50 pdBottom50 m-pdTop30">
      <div class="noticeViewCont cont">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h2 class="sectionTitleTop">NEWS</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>新着情報</p>
        </div>

        <!-- newsList -->
        <div class=" noticeList clearfix">

          <!-- news-list-wrapper -->
          <div class="showMoreContent clearfix">
            <div class="item">
              <a href="notice/3194.html">
                <label>NEWS</label>
                <p class="itemTime">2021/11/14(日) 7:00</p>
                <h3 class="itemTitle"> ♡11月14日のご案内状況♡</h3>
              </a>
            </div>
            <div class="item">
              <a href="notice/3193.html">
                <label>NEWS</label>
                <p class="itemTime">2021/11/13(土) 7:00</p>
                <h3 class="itemTitle"> ♡11月13日のご案内状況♡</h3>
              </a>
            </div>
            <div class="item">
              <a href="notice/3192.html">
                <label>NEWS</label>
                <p class="itemTime">2021/11/12(金) 7:00</p>
                <h3 class="itemTitle">♡11月12日のご案内状況♡</h3>
              </a>
            </div>
          </div>
          <!-- /news-list-wrapper -->

        </div>
        <!-- /newsList -->

        <!-- btn -->
        <div class="showMoreButton itemButton">
          <p class="btnCont">
            <a class="btn" data-turbolinks="false" href="notice_list.html">
              <span>READ MORE ＞＞</span>
            </a>
          </p>
        </div>
        <!-- /btn -->

      </div>
    </section>
    <!-- ======== /noticeView ======== -->
    <!-- ======== roomView ======== -->
    <section class="roomView pdTop50 pdBottom50 m-pdTop30 s-pdTop30">
      <div class="roomViewCont cont">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h2 class="sectionTitleTop">ROOM</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>ルーム</p>
        </div>
        <div class="itemRooms">
          <div class="itemRoom">
            <img
              data-src="assets/customer/topRoomSunset-8977d78f5330f2fd384a3d91327a5b31f9459e090f6c17380c008ce36d891a83.jpg"
              class="lazyload" alt="施術ルーム サンセット"
              src="assets/customer/lazy/room_image-5549da4fd57db15f261740d718c8de8c17f1face76f7a087372c333b880c5220.jpg.png" />
            <div class="roomName">
              <p>サンセット</p>
            </div>
          </div>
          <div class="itemRoom">
            <img
              data-src="assets/customer/topRoomManhattan-6897300458409cc3ca4f66b42f40ca63838b75014ee66e849e73ece7aa881362.jpg"
              class="lazyload" alt="施術ルーム マンハッタン"
              src="assets/customer/lazy/room_image-5549da4fd57db15f261740d718c8de8c17f1face76f7a087372c333b880c5220.jpg.png" />
            <div class="roomName">
              <p>マンハッタン</p>
            </div>
          </div>
          <div class="itemRoom">
            <img
              data-src="assets/customer/topRoomApollo-7120063171c5c3c5beaccb866266c07b00b2f1b882e711c1bc82664425aa30e1.jpg"
              class="lazyload" alt="施術ルーム アポロシアター"
              src="assets/customer/lazy/room_image-5549da4fd57db15f261740d718c8de8c17f1face76f7a087372c333b880c5220.jpg.png" />
            <div class="roomName">
              <p>アポロシアター</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ======== /roomView ======== -->
    <!-- ======== greetingView ======== -->
    <section class="greetingView pdTop50 m-pdTop30 m-pdTop30 s-pdTop30">
      <div class="twoColorBackGround"></div>
      <div class="greetingViewCont cont clearfix">
        <div class="clearfix itemGreeting">
          <div class="sectionTitle sectionTitleLine textCenter">
            <h2 class="sectionTitleTop">GREETING</h2>
          </div>
          <div class="sectionDesc textCenter">
            <p>挨拶</p>
          </div>
          <div class="greetingInner">
            <p>JR池袋駅西口徒歩3分というアクセス便利なbazu-caは、おもてなしの精神を持った女性セラピストが在籍する、オイルマッサージをメインとしたメンズエステです。<br>
              <br>
              <br>
              心と体でその癒しを堪能できるよう、全ての男性が楽しめるように素敵な女性セラピストを揃えております。<br>
              <br>
              <br>
              池袋の街の中でひときわ目立つ高級マンションの一室にお店を構えており、シャワールームから施術室といったすべてのお部屋は綺麗で、くつろぎの空間が広がっています。<br>
              <br>
              <br>
              そんな癒しの空間で、自分だけの極上のエステ体験を思う存分ご堪能ください。
            </p>
          </div>
        </div>

        <div class="clearfix itemGreetingImg"></div>

      </div>
    </section>
    <!-- ======== /greetingView ======== -->
    <!-- ======== conceptView ======== -->
    <section class="conceptView pdTop50 pdBottom50 m-pdTop30 m-pdBottom100 ">
      <div class="conceptViewCont cont clearfix">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h2 class="sectionTitleTop">CONCEPT</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>バズーカの3つのこだわり</p>
        </div>
        <div class="itemConcepts">
          <div class="itemConcept clearfix">
            <div class="itemLeft">
              <h3 class="sectionTitleSub">1. THERAPISTS
                <span>セラピスト</span>
              </h3>
              <p>女性らしくとても優しい愛され女性ばかりです。<br>
                笑顔が素敵でフレンドリーで一緒にいると楽しい気分になれます。<br>
                <br>
                <br>
                当店では高収入目的だけで働くセラピストではなく、<br>
                仕事を通じて成長したい、喜ばれたい、やりがいや充実感を得たい、<br>
                女子力を磨きたいと願うセラピストを採用し、育てています。
              </p>
            </div>
            <div class="itemRight itemImage">
              <img
                data-src="assets/customer/concept1-026a622ae245bd8618feff50ccda21803c37f912162a9818f43949c3a213fa65.jpg"
                class="lazyload" alt="コンセプト - 女子力を磨きたいと願うセラピストを採用"
                src="assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png" />
            </div>
          </div>
          <div class="itemConcept clearfix">
            <div class="itemLeft itemImage">
              <img
                data-src="assets/customer/concept2-5af2a2d315ce09ad049163cae31ce798856cce07fcfa71271f5d628849f94e99.jpg"
                class="lazyload" alt="コンセプト - 男性好みのオイルマッサージ"
                src="assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png" />
            </div>
            <div class="itemRight">
              <h3 class="sectionTitleSub">2. MASSAGES
                <span>マッサージ</span>
              </h3>
              <p>女性の優しさが伝わる男性好みのオイルマッサージです。<br>
                メンズエステにしては上手！と言われるよう、<br>
                日々技術の向上に取り組みます。<br>
                <br>
                <br>
                デビュー前トレーニング8時間以上、毎月2時間以上のトレーニングを<br>
                セラピスト全員に行っています。
              </p>
            </div>
          </div>
          <div class="itemConcept clearfix">
            <div class="itemLeft">
              <h3 class="sectionTitleSub">3. ROOMS
                <span>ルーム</span>
              </h3>
              <p>セラピストと二人っきりで過ごせる、居心地が良く、<br>
                くつろげる癒しの空間です。<br>
                長くマッサージを受けても疲れないマットや枕はもちろん、<br>
                洗い落としやすいオイル、癒しの大切な要素である<br>
                香りにもこだわっています。<br>
                <br>
                <br>
                またお部屋によってそれぞれ違う雰囲気を楽しむことができます。
              </p>
            </div>
            <div class="itemRight itemImage">
              <img
                data-src="assets/customer/concept3Room-4bfa1ef324db5fd36f6f92f2809a029173f11753637523b1e47692052a03a131.jpg"
                class="lazyload" alt="コンセプト - くつろげる癒しの空間"
                src="assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ======== /conceptView ======== -->
    <!-- ======== externalLink ======== -->
    <div class="externalLink text-center">
      <div>
        <p style="text-align: center; padding-bottom: 3px;margin: 0;">
          <a target="_blank" href="http://www.joho69.com/">
            <img alt="メンズエステ情報センター"
              src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/side_banner_image/image/2/757271af-ebdd-44b4-84c6-87c10af58511.png" />
          </a>
        </p>
      </div>
      <div>
        <p style="text-align: center; padding-bottom: 3px;margin: 0;">
          <a target="_blank" href="https://mens-mg.com/ranking_area.php?area=0100">
            <img alt="池袋のメンズエステ店人気ランキング"
              src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/side_banner_image/image/5/a8e6d6ed-1634-4d8e-9e3f-10577191d528.png" />
          </a>
        </p>
      </div>
      <div>
        <p style="text-align: center; padding-bottom: 3px;margin: 0;">
          <a target="_blank" href="http://ad-navi.com">
            <img alt="メンズエステ・出張マッサージのお仕事探しは【アロマエステ求人ナビ】"
              src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/side_banner_image/image/7/cf47c8a6-5192-4843-b43b-1e20a96cef71.png" />
          </a>
        </p>
      </div>
      <div>
        <p style="text-align: center; padding-bottom: 3px;margin: 0;">
          <a target="_blank" href="https://eslove.jp/kanto/tokyo">
            <img
              alt="&lt;a href=&quot;https://eslove.jp/kanto/tokyo&quot; target=&quot;_blank&quot;&gt;&lt;img src=&quot;https://eslove.jp/eslove_front_theme/banner/banner_200x40.jpg&quot; alt=&quot;東京のメンズエステ情報ならエステラブ&quot;/&gt;&lt;/a&gt;"
              src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/side_banner_image/image/8/92424d76-1c89-4d1b-a834-28df9c55e341.png" />
          </a>
        </p>
      </div>
      <div>
        <p style="text-align: center; padding-bottom: 3px;margin: 0;">
          <a target="_blank" href="https://job.eslove.jp/kanto/tokyo">
            <img
              alt="&lt;a href=&quot;https://job.eslove.jp/kanto/tokyo&quot; target=&quot;_blank&quot;&gt;&lt;img src=&quot;https://job.eslove.jp/eslove_job_front_theme/banner/banner_200x40.jpg&quot; alt=&quot;東京のメンズエステ求人情報ならエステラブワーク&quot;/&gt;&lt;/a&gt;"
              src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/side_banner_image/image/9/6b188bae-1db0-4eb4-acec-c8e25259106e.png" />
          </a>
        </p>
      </div>
    </div>
    <!-- ======== /externalLink ======== -->

  </main> <!-- ======== /main ======== -->
@include('frontend.sections.footer')