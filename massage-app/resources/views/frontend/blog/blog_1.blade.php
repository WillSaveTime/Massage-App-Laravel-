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
            <h2 class="sectionTitleTop">BLOG</h2>
            <p>ブログ - 山田 花子<span class="icon writerIcon"><img class="blogThumb"
                  src="{{ asset('bazu/assets/customer/pen_gold.png') }}" /></span></p>
          </div>
        </div>
      </div>
    </section>
    <!-- ======== /mainView ======== -->

    <div class="displayNone mainViewTherapistImg" data-therapist-img=assets/customer/main_pic.png>
    </div>

    <!-- ======== blogView ======== -->
    <section class="blogView pdTop140 pdBottom50 m-pdTop30 m-pdBottom30" id="scrollTopPoint">
      <div class="blogViewCont cont">
        <div class="item">
          <div class="itemHead">
            <div class="title">
              <h3>ブログタイトル</h3>
            </div>
            <div class="updatedDay">
              <p>2021/11/xx(日) 21:00 up</p>
            </div>
          </div>
          <div class="itemInner">
            <p>ブログ本文ブログ本文ブログ本文ブログ本文<br />
              ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文
          </div>
          <div class="item_img">
            <img alt="" src="{{ asset('bazu/assets/customer/blog_main_thumb.jpeg') }}" />
          </div>
          <div class="nextPrevButtonCont">
            <div class="item_imageButton prevButton">
                <a class="imageButton" href="191.html">
                    <div class="itemImgZoom">
                      <img alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                    </div>
                    <p class="updatedDayButton">2019-01-07 20:00</p>
                    <span>＜ 前の記事</span>
                </a>         
            </div>
            <div class="item_imageButton nextButton">
              <a class="imageButton" href="{{ route('blog_1') }}">
                <div class="item_imgZoom">
                  <img alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                </div>
                <p class="updatedDayButton">2021-11-xx 22:00</p>
                <span>次の記事 ＞</span>
              </a>
            </div>
          </div>
          <div class="infoWriterButton">
            <div class="item_button profileButton">
              <p class="btnCont">
                <a class="btn" href="{{ route('therapist_1') }}">
                  <span>山田花子のプロフィール</span>
                </a>
              </p>
            </div>
            <div class="item_button blogListButton">
              <p class="btnCont">
                <a class="btn" href="{{ route('therapist_1') }}">
                  <span>山田花子のブログ一覧</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ======== /blogView ======== -->
    <!-- ======== therapistBlogView ======== -->
    <section class="therapistBlogView pdTop50 pdBottom140 m-pdTop30 m-pdBottom50" id="scrollTopPoint">
      <div class="therapistBlogViewCont cont">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h2 class="sectionTitleTop">TherapistBlog</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>セラピスト別ブログ</p>
        </div>
        <div class="item">
          <div class="swiper-container" id="therapistBlogsSliderJs">
            <div class="swiper-wrapper">

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

              <div class="swiper-slide">
                <a class="blogItem" href="{{ route('therapist_blog_1') }}">
                  <img class="blogThumb" alt="" src="{{ asset('bazu/assets/customer/blog_thum.png') }}" />
                  <div class="blogInfoCont">
                    <p class="writer blogInfo">山田花子のブログ一覧
                      <span class="icon"><img class="blogThumb" src="{{ asset('bazu/assets/customer/pen_white.png') }}" /></span>
                    </p>
                  </div>
                </a>
              </div>

            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======== /therapistBlogView ======== -->

  </main> <!-- ======== /main ======== -->
  <!-- ======== footer ======== -->
  @include('frontend.sections.footer')
  <!-- ======== /footer ======== -->
