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

      <!-- ======== news_view ======== -->
      <section class="display-block news_view pdTop10 pdBottom10 m-pdTop10">
        <div class="news_view_cont cont">
          <div class="sectionTitle sectionTitleLine textCenter">
            <h2 class="sectionTitleTop">News</h2>
          </div>
          <div class="sectionDesc textCenter">
            <p>ニュース一覧</p>
          </div>
          <div class="news_list clearfix">
            <!-- news-list-wrapper -->
            <div class="show_more_content clearfix">
              <div class="item">
                <a href="{{ roure('new_1') }}">
                  <label>NEWS</label>
                  <p class="item_time">2021/11/14(日) 7:00</p>
                  <h3 class="itemTitle">♡11月14日のご案内状況♡</h3>
                </a>
              </div>
              <div class="item">
                <a href="{{ roure('new_1') }}">
                  <label>NEWS</label>
                  <p class="item_time">2021/11/12(金) 7:00</p>
                  <h3 class="itemTitle">♡11月12日のご案内状況♡</h3>
                </a>
              </div>
              <div class="item">
                <a href="{{ roure('new_1') }}">
                  <label>NEWS</label>
                  <p class="item_time">2021/11/11(木) 7:00</p>
                  <h3 class="itemTitle">♡11月11日のご案内状況♡</h3>
                </a>
              </div>
              <div class="item">
                <a href="{{ roure('new_1') }}">
                  <label>NEWS</label>
                  <p class="item_time">2021/11/10(水) 7:00</p>
                  <h3 class="itemTitle">♡11月10日のご案内状況♡</h3>
                </a>
              </div>
              <div class="item">
                <a href="{{ roure('new_1') }}">
                  <label>NEWS</label>
                  <p class="item_time">2021/11/9(火) 7:00</p>
                  <h3 class="itemTitle">♡11月9日のご案内状況♡</h3>
                </a>
              </div>
              <div class="item">
                <a href="{{ roure('new_1') }}">
                  <label>NEWS</label>
                  <p class="item_time">2021/11/8(月) 7:00</p>
                  <h3 class="itemTitle">♡11月8日のご案内状況♡</h3>
                </a>
              </div>
              <div class="item">
                <a href="{{ roure('new_1') }}">
                  <label>NEWS</label>
                  <p class="item_time">2021/11/7(日) 9:00</p>
                  <h3 class="itemTitle">♡11月7日のご案内状況♡</h3>
                </a>
              </div>
              <div class="item">
                <a href="{{ roure('new_1') }}">
                  <label>NEWS</label>
                  <p class="item_time">2021/11/6(土) 7:00</p>
                  <h3 class="itemTitle">♡11月6日のご案内状況♡</h3>
                </a>
              </div>
              <div class="item">
                <a href="{{ roure('new_1') }}">
                  <label>NEWS</label>
                  <p class="item_time">2021/11/5(金) 7:00</p>
                  <h3 class="itemTitle">♡11月5日のご案内状況♡</h3>
                </a>
              </div>
              <div class="item">
                <a href="{{ roure('new_1') }}">
                  <label>NEWS</label>
                  <p class="item_time">2021/11/4(木) 7:00</p>
                  <h3 class="itemTitle">♡11月4日のご案内状況♡</h3>
                </a>
              </div>
            </div>
            <!-- /news-list-wrapper -->
          </div>
          <div class="paginationContent">
            <nav class="pagination text-center" role="navigation" aria-label="pager">
              <ul class="page-numbers">
                <li></li>
                <li></li>
                <li><span class="page current"> 1 </span></li>
                <li>
                  <span class="page">
                    <a rel="next" class="page-number" href="news_list%EF%B9%96page=2.html">2</a>
                  </span>
                </li>
                <li>
                  <span class="page">
                    <a class="page-number" href="news_list%EF%B9%96page=3.html">3</a>
                  </span>
                </li>
                <li>
                  <span class="page">
                    <a class="page-number" href="news_list%EF%B9%96page=4.html">4</a>
                  </span>
                </li>
                <li>
                  <span class="page">
                    <a class="page-number" href="news_list%EF%B9%96page=5.html">5</a>
                  </span>
                </li>
                <li><span class="page gap">...</span></li>
                <li>
                  <span class="next">
                    <a rel="next" href="news_list%EF%B9%96page=2.html">＞</a>
                  </span>
                </li>
                <li>
                  <span class="last">
                    <a href="news_list%EF%B9%96page=92.html">＞|</a>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <!-- ======== /news_view ======== -->
    </main>
    <!-- ======== /main ======== -->
    <!-- ======== footer ======== -->
    @include('frontend.sections.footer')
    <!-- ======== /footer ======== -->
