@include('frontend.sections.header')
  <!-- ======== main ======== -->
    <!-- ======== header ======== -->
    @include('frontend.sections.pageheader')
    <!-- ======== /header ======== -->
    <!-- ======== nav ======== -->
    @include('frontend.sections.nav')
    <!-- ======== /nav ======== -->

    <!-- ======== mainView ======== -->
    <section class="mainView" id="scrollTopPoint">
      <div class="mainViewCont">
        <div class="mainViewInner">
          <div class="sectionTitle sectionTitleLine textCenter pdTop80 m-pdTop50 s-pdTop80">
            <h2 class="sectionTitleTop">NEWS</h2>
            <p>ニュース</p>
          </div>
          <div class="display-none sectionDesc textCenter pdBottom50 m-pdBottom50 s-pdBottom20"></div>
        </div>
      </div>
    </section>
    <!-- ======== /mainView ======== -->

    <!-- ======== news_views ======== -->
    <section class="news_views pdTop140 pdBottom140 m-pdTop50 m-pdBottom50" id="scrollTopPoint">
      <div class="news_views_cont cont">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h2 class="sectionTitleTop">News</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>ニュース</p>
        </div>
        <div class="item">
          <div class="itemHead">
            <div class="title">
              <h3>当店のイベント情報のお知らせ</h3>
            </div>
            <div class="updatedDay">
              <p>2021/11/xx(日) 10:00 up</p>
            </div>
          </div>
          <div class="itemInner">
            <p style="text-align: center">当店のお得な割引情報がございますので、下記URLにてご確認ください！</p>

            <p style="text-align: center">お問い合わせのお電話でも結構ですので、お気軽にご相談ください♡</p>

            <p style="text-align: center">&nbsp;</p>

            <p style="text-align: center">
              <a href="#"><img alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" style="height: 30px; width: 150px" /></a>
            </p>

            <p style="text-align: center">&nbsp;</p>

            <p style="text-align: center">当店では、十分なエステ経験・タイ古式経験がある講師により、</p>

            <p style="text-align: center">親切・丁寧に講習された選ばれしセラピストが在籍しています。</p>

            <p style="text-align: center">
              <a href="#"><img alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" style="width: 200px; height: 128px" /></a>
            </p>

            <p style="text-align: center">&nbsp;</p>

            <p style="text-align: center">
              90分コース　<br />
              13,000円
            </p>

            <p style="text-align: center">
              120分コース<br />
              18,000円
            </p>

            <p style="text-align: center">
              150分コース<br />
              23,000円
            </p>

            <p style="text-align: center">&nbsp;</p>

            <p style="text-align: center">しっかりとしたオイルマッサージと当店自慢のセラピストの優しさで</p>

            <p style="text-align: center">ときめきと好きが止まらないななめ45&deg;のメンズエステの体験を。</p>

            <p style="text-align: center">&nbsp;</p>

            <p style="text-align: center">この機会にぜひ一度、サンプルエステ リンパ をお試しください。</p>

            <p style="text-align: center">リンパ は上手なオイルマッサージと女性の魅力をＭＩＸしてストレス社会で頑張る男性に</p>

            <p style="text-align: center">「ときめきと好き。」をご提供するメンズエステです。</p>
          </div>
          <div class="nextPrevButtonCont">
            <div class="item_button prevButton">
              <p class="btnCont">
                <a class="btn" href="{{ route('news_1') }}">
                  <span>＜ 前の記事</span>
                </a>
              </p>
            </div>
            <div class="item_button nextButton">
              <p class="btnCont">
                <a class="btn" href="{{ route('news_1') }}">
                  <span>次の記事 ＞</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ======== /news_views ======== -->
  </main>
  <!-- ======== /main ======== -->
  <!-- ======== footer ======== -->
  @include('frontend.sections.footer')
  <!-- ======== /footer ======== -->
