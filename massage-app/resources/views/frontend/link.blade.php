@include('frontend.sections.header')
    <!-- ======== header ======== -->
    @include('frontend.sections.pagehader')
    <!-- ======== /header ======== -->
    <!-- ======== nav ======== -->
    @include('frontend.sections.nav')
    <!-- ======== /nav ======== -->

    <!-- ======== mainView ======== -->
    @include('frontend.sections.mainview')
    <!-- ======== /mainView ======== -->

    <!-- ======== link_view ======== -->
    <section class="link_view pdTop100 pdBottom40 m-pdTop50 m-pdBottom0" id="scrollTopPoint">
      <div class="link_view_cont cont">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h3 class="sectionTitleTop">Link Banner</h3>
        </div>
        <div class="sectionDesc textCenter">
          <p>リンクバナー</p>
        </div>
        <div class="link_container">
          <div class="link_wrapper">
            <h3>サイト名</h3>
            <p>サンプルエステリンパ</p>
          </div>

          <div class="link_wrapper">
            <h3>リンク先</h3>
            <p>
              <a href="{{ route('index') }}">https://www.rimpa.com/</a>
            </p>
          </div>

          <div class="link_wrapper">
            <h3>alt属性</h3>
            <p>サンプルエステ　リンパ</p>
          </div>

          <div class="link_wrapper">
            <h3>各種バナー</h3>
            <ul>
              <li>
                <img src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
                <p>88*31(px)</p>
              </li>
              <li>
                <img src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
                <p>160*45(px)</p>
              </li>
              <li>
                <img src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
                <p>200*40(px)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- ======== /link_view ======== -->
    <!-- ======== link_view ======== -->
    <section class="link_view pdTop50 pdBottom140 m-pdTop20 m-pdBottom50">
      <div class="link_view_cont cont">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h3 class="sectionTitleTop">Link</h3>
        </div>
        <div class="sectionDesc textCenter">
          <p>外部リンク一覧</p>
        </div>
        <div class="item banner">
          <a href="#" target="_blank">
            <img alt="" src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
          </a>
        </div>
        <div class="item banner">
          <a href="#" target="_blank">
            <img alt="" src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
          </a>
        </div>
        <div class="item banner">
          <a href="#" target="_blank">
            <img alt="" src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
          </a>
        </div>
        <div class="item banner">
          <a href="#" target="_blank">
            <img alt="" src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
          </a>
        </div>
        <div class="item banner">
          <a href="#" target="_blank">
            <img alt="" src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
          </a>
        </div>
        <div class="item banner">
          <a href="#" target="_blank">
            <img alt="" src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
          </a>
        </div>
        <div class="item banner">
          <a href="#" target="_blank">
            <img alt="" src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
          </a>
        </div>
        <div class="item banner">
          <a href="#" target="_blank">
            <img alt="" src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
          </a>
        </div>
        <div class="item banner">
          <a href="#" target="_blank">
            <img alt="" src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
          </a>
        </div>
        <div class="item banner">
          <a href="#" target="_blank">
            <img alt="" src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
          </a>
        </div>
        <div class="item banner">
          <a href="#" target="_blank">
            <img alt="" src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
          </a>
        </div>
        <div class="item banner">
          <a href="#" target="_blank">
            <img alt="" src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
          </a>
        </div>
        <div class="item banner">
          <a href="#" target="_blank">
            <img alt="" src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
          </a>
        </div>
      </div>
    </section>
    <!-- ======== /link_view ======== -->
  </main>
  <!-- ======== /main ======== -->
  <!-- ======== footer ======== -->
  @include('frontend.sections.footer')
  <!-- ======== /footer ======== -->
