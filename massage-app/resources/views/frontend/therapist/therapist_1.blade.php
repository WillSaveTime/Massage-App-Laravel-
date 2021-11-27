@include('frontend.sections.header')
<!-- ======== main ======== -->
<!-- ======== header ======== -->
@include('frontend.sections.pageheader')
<!-- ======== /header ======== -->
<!-- ======== nav ======== -->
@include('frontend.sections.nav')
<!-- ======== /nav ======== -->

<!-- ======== mainView ======== -->
<section class="mainView therapistShow" id="scrollTopPoint">
  <div class="mainViewCont">
    <div class="mainViewInner">
      <div class="sectionTitle sectionTitleLine textCenter pdTop80 m-pdTop50 s-pdTop80">
        <h2 class="sectionTitleTop">THERAPIST</h2>
        <p>山田花子(23歳)</p>
      </div>
    </div>
  </div>
</section>
<!-- ======== /mainView ======== -->


<div class="displayNone mainViewTherapistImg"
  data-therapist-img=https://s3-ap-northeast-1.amazonaws.com/リンパ-bucket-prod/uploads/therapist_image/image1/11/f6bf358a-0475-42a3-bb1d-b2167b08990d.png>
</div>
<!-- ======== profileView ======== -->
<section class="profileView clearfix pdTop140 pdBottom50 m-pdTop50" id="scrollTopPoint">
  <!-- <div class="twoColorBackGround"></div> -->
  <div class="profileViewCont cont">
    <div class="sectionTitle sectionTitleLine textCenter">
      <h2 class="sectionTitleTop">PROFILE</h2>
    </div>
    <div class="sectionDesc textCenter">
      <p>プロフィール</p>
    </div>

    <div class="item clearfix">
      <div class="item_left">
        <div class="item_img">
          <div class="swiper-container" id="therapist-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
              </div>
              <div class="swiper-slide">
                <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
              </div>
              <div class="swiper-slide">
                <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
              </div>
              <div class="swiper-slide">
                <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
              </div>
              <div class="swiper-slide">
                <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
              </div>
              <div class="swiper-slide">
                <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
              </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next swiper-button-white"></div>
            <div class="swiper-button-prev swiper-button-white"></div>
          </div>
          <div class="itemThumb">
            <div class="swiper-container" id="therapist-thumbs">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
                </div>
                <div class="swiper-slide">
                  <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
                </div>
                <div class="swiper-slide">
                  <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
                </div>
                <div class="swiper-slide">
                  <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
                </div>
                <div class="swiper-slide">
                  <img src="{{ asset('bazu/assets/customer/staff.png') }}" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item_right clearfix">

        <div class="itemInfo clearfix">
          <div class="mark">
          </div>

          <h3 class="itemName">山田花子 (23歳)</h3>
          <div class="itemProf"><label>身長</label><br>150cm</div>
          <div class="itemProf"><label>血液型</label><br>O型</div>
          <div class="itemProf"><label>趣味・特技</label><br>将棋</div>
          <div class="itemProf"><label>性格を一言で言うと？</label><br>明るい</div>
          <div class="itemProf"><label>チャームポイント</label><br>笑顔</div>
          <div class="itemProf"><label>好きな男性のタイプ</label><br>優しい人</div>
          <div class="itemProf"><label>好きな食べ物</label><br>何でも！！</div>
          <div class="itemProf"><label>幸せを感じること</label><br>友達と一緒に居るとき</div>
          <div class="itemProf"><label>休日の過ごし方</label><br>お家でゆっくり過ごす</div>
          <div class="itemProf"><label>ダブルセラピスト対応の有無</label><br>有</div>
          <div class="itemProf"><label>今旅行にいくならどこに行きたい？</label><br>熱海</div>
          <div class="itemProf"><label>お客様へ一言</label><br>一緒に楽しいお時間を過ごしたです。</div>
          <div class="itemProf">
            <label>お店からのコメント</label><br>
            <p>素敵な笑顔と柔らかい空気感がある癒し系のセラピストです。</p>

            <p>とても話しかけやすく、彼女との会話はついつい時間を忘れて話てしまいます。<br />
              メンズエステ経験も長く、彼女の大胆かつそれでいて繊細さも兼ね備えた施術には目を見張るものがあります。<br />
              彼女とのゆったりと流れる癒しのひと時を是非一度体感されてみてはいかがでしょう？<br />
              日常では味わえない癒しを御堪能下さい。</p>

            <p>&nbsp;</p>

            <p><a href="#"><img alt="" src="{{ asset('bazu/assets/customer/gif.png') }}" /></a></p>

            <p><strong><a href="#"><span style="color:#3498db;">〇〇エリアメンズエステランキング</span></a></strong></p>

            <div id="UMS_TOOLTIP"
              style="position: absolute; cursor: pointer; z-index: 2147483647; background: transparent; top: -100000px; left: -100000px;">
              &nbsp;</div>

          </div>

        </div>
      </div>
    </div>

</section>
<!-- ======== /profileView ======== -->

<!-- ======== profileScheduleView ======== -->
<section class="profileScheduleView clearfix pdTop30 pdBottom50 m-pdTop30 m-pdBottom30">
  <!-- <div class="twoColorBackGround"></div> -->
  <div class="profileViewCont cont">
    <div class="sectionTitle sectionTitleLine textCenter">
      <h2 class="sectionTitleTop">SCHEDULE</h2>
    </div>
    <div class="sectionDesc textCenter">
      <p>スケジュール</p>
    </div>

    <div class="profileScheduleCont">
      <div class="profileScheduleTable">
        <table class="timeTable">
          <tr class="headerTr">
            <th>11/xx(土)</th>
            <th>11/xx(日)</th>
            <th>11/xx(月)</th>
            <th>11/xx(火)</th>
            <th>11/xx(水)</th>
            <th>11/xx(木)</th>
            <th>11/xx(金)</th>
          </tr>
          <tr class="bodyTr">
            <td>
              お休み
            </td>
            <td>
              お休み
            </td>
            <td>
              お休み
            </td>
            <td>
              お休み
            </td>
            <td>
              お休み
            </td>
            <td>
              お休み
            </td>
            <td>
              お休み
            </td>
          </tr>
        </table>

      </div>
    </div>

  </div>
</section>
<!-- ======== /profileScheduleView ======== -->

<!-- ======== BlogsAndTwitterView ======== -->
<section class="BlogsAndTwitterView clearfix pdTop30 pdBottom50 m-pdBottom30">
  <div class="BlogsAndTwitterViewCont cont">
    <div class="item clearfix fadein">

      <div class="clearfix itemBlogs">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h2 class="sectionTitleTop">BLOGS</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>ブログ</p>
        </div>

        <!-- blogsListPc -->
        <div class="blogsListPc displayNoneLess1023">
          <dl class="clearfix">
            <a class="blogItem" href="{{ route('blog') }}">
              <dt>
                <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
              </dt>
              <dd>
                <h3>
                  ブログタイトル
                </h3>
                <div class="content">ブログ本文

                  ブログ本文ブログ本文



                  ブログ本文...</div>
                <p class="blogPostedDay blogInfo">2021/6/5(土) 15:25</p>
                <p class="writer blogInfo">山田花子
                  <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen.png') }}" /></span>
                </p>
              </dd>
            </a>
            <hr>

            <a class="blogItem" href="{{ route('blog') }}">
              <dt>
                <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
              </dt>
              <dd>
                <h3>
                  ブログタイトル
                </h3>
                <div class="content">ブログ本文

                  ブログ本文ブログ本文



                  ブログ本文...</div>
                <p class="blogPostedDay blogInfo">2021/6/5(土) 15:25</p>
                <p class="writer blogInfo">山田花子
                  <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen.png') }}" /></span>
                </p>
              </dd>
            </a>
            <hr>

            <a class="blogItem" href="{{ route('blog') }}">
              <dt>
                <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
              </dt>
              <dd>
                <h3>
                  ブログタイトル
                </h3>
                <div class="content">ブログ本文

                  ブログ本文ブログ本文



                  ブログ本文...</div>
                <p class="blogPostedDay blogInfo">2021/6/5(土) 15:25</p>
                <p class="writer blogInfo">山田花子
                  <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen.png') }}" /></span>
                </p>
              </dd>
            </a>
            <hr>

            <a class="blogItem" href="{{ route('blog') }}">
              <dt>
                <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
              </dt>
              <dd>
                <h3>
                  ブログタイトル
                </h3>
                <div class="content">ブログ本文

                  ブログ本文ブログ本文



                  ブログ本文...</div>
                <p class="blogPostedDay blogInfo">2021/6/5(土) 15:25</p>
                <p class="writer blogInfo">山田花子
                  <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen.png') }}" /></span>
                </p>
              </dd>
            </a>
            <hr>

            <a class="blogItem" href="{{ route('blog') }}">
              <dt>
                <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
              </dt>
              <dd>
                <h3>
                  ブログタイトル
                </h3>
                <div class="content">ブログ本文

                  ブログ本文ブログ本文



                  ブログ本文...</div>
                <p class="blogPostedDay blogInfo">2021/6/5(土) 15:25</p>
                <p class="writer blogInfo">山田花子
                  <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen.png') }}" /></span>
                </p>
              </dd>
            </a>
            <hr>

            <a class="blogItem" href="{{ route('blog') }}">
              <dt>
                <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
              </dt>
              <dd>
                <h3>
                  ブログタイトル
                </h3>
                <div class="content">ブログ本文

                  ブログ本文ブログ本文



                  ブログ本文...</div>
                <p class="blogPostedDay blogInfo">2021/6/5(土) 15:25</p>
                <p class="writer blogInfo">山田花子
                  <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen.png') }}" /></span>
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
                <a class="blogItem" href="{{ route('blog') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                    <p>ブログ本文
                      ...</p>
                  </div>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('blog') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                    <p>ブログ本文
                      ...</p>
                  </div>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('blog') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                    <p>ブログ本文
                      ...</p>
                  </div>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('blog') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                    <p>ブログ本文
                      ...</p>
                  </div>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('blog') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                    <p>ブログ本文
                      ...</p>
                  </div>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('blog') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                    <p>ブログ本文
                      ...</p>
                  </div>
                </a>
              </div>

            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <!-- /blogsListSp -->
      </div>

      <div class="itemTwitter">
        <div class="sectionTitle sectionTitleLine textCenter whiteLine">
          <h2 class="sectionTitleTop sectionTitleTopWhite">TWITTER</h2>
        </div>
        <div class="sectionDesc textCenter sectionDescWhite">
          <p>ツイッター</p>
        </div>
        <a data-chrome="" data-lang="ja" data-theme="light" data-link-color="#ffffff" class="twitter-timeline"
          height="400" href="https://twitter.com/@rimpado">
          @rimpadoさんのツイート
        </a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>

    </div>
  </div>
</section>
<!-- ======== /BlogsAndTwitterView ======== -->

</main> <!-- ======== /main ======== -->
<!-- ======== footer ======== -->
@include('frontend.sections.footer')
<!-- ======== /footer ======== -->
