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
              <h3>LINE＠会員募集中です！</h3>
            </div>
            <div class="updatedDay">
              <p>2021/11/xx(日) 10:00 up</p>
            </div>
          </div>
          <div class="itemInner">
            <p style="text-align: center">
              当店では、お客様によりお得な情報・お得なイベントをお伝えさせて頂く為、<br />
              <strong>LINE＠</strong>を始めさせていただきました。<br />
              （※本指名の場合は適応外となりますので、ご了承ください。）<br />
              　<br />
              当店のLINE＠に登録して頂きますと、次回ご利用時、指名料半額にさせて頂いてます。<br />
              LINE＠登録時に合言葉がございますので、ご予約の際、お申し付けください。<br />
              &nbsp;
            </p>

            <p style="text-align: center">&nbsp;</p>

            <p style="text-align: center"><strong>★登録には2種類の登録方法がございます。★</strong></p>

            <p style="text-align: center">
              <strong>登録方法①</strong><br />
              以下のＱＲコードを読み取ってください。
            </p>

            <p style="text-align: center">
              <img alt="" src="../assets/customer/qr.jpeg" style="width: 200px; height: 200px" />
            </p>

            <p style="text-align: center">&nbsp;</p>

            <p style="text-align: center">
              <strong>登録方法②</strong><br />
              以下の【お友達追加】ボタンをクリックしてください。
            </p>

            <p style="text-align: center">
              <a href="https://line.me/"><img alt="友だち追加" border="0" height="36"
                  src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" /></a>
            </p>

            <p style="text-align: center">&nbsp;</p>

            <p style="text-align: center">&nbsp;</p>

            <p style="text-align: center">
              しっかりとしたオイルマッサージと当店自慢のセラピストの優しさでときめきと好きが止まらない<br />
              ななめ45&deg;のメンズエステの体験を。
            </p>

            <p style="text-align: center">
              この機会にぜひ一度、サンプルエステ リンパ をお試しください。<br />
              <br />
              リンパ は上手なオイルマッサージと女性の魅力をＭＩＸしてストレス社会で頑張る男性に<br />
              「ときめきと好き。」をご提供するメンズエステです。
            </p>
          </div>
          <div class="nextPrevButtonCont">
            <div class="item_button nextButton">
              <p class="btnCont">
                <a class="btn" href="{{ route('news_2') }}">
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
  @include('frontend.sections.footers')
  <!-- ======== /footer ======== -->
