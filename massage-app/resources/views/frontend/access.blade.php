@include('frontend.sections.header')
<!-- ======== main ======== -->
<!-- ======== header ======== -->
@include('frontend.sections.pageheader')
<!-- ======== /header ======== -->
<!-- ======== nav ======== -->
@include('frontend.sections.nav')
<!-- ======== /nav ======== -->

<!-- ======== main_view ======== -->
<section class="main_view" id="scrollTopPoint">
  <div class="main_view_cont">
    <div class="main_view_inner ">
      <div class="sectionTitle sectionTitleLine textCenter pdTop80 m-pdTop50 s-pdTop80">
        <h2 class="sectionTitleTop">ACCESS</h2>
        <p>アクセス</p>
      </div>
      <div class="display-block sectionDesc textCenter pdBottom50 m-pdBottom50 s-pdBottom20">
        <p>
        <p style="text-align: center;">ご来店の際には【〇〇駅北口を出ましたらお電話ください。】付近よりお電話ください。<br />
          大阪府大阪市〇〇<br />
          JR〇〇駅北口徒歩1分<br />
          営業時間：10:00～翌5:00</p>
        </p>
      </div>
    </div>
  </div>
</section>
<!-- ======== /main_view ======== -->

<!-- ======== map_view ======== -->
<section class="display-block map_view pdTop140 pdBottom50 m-pdTop50 m-pdBottom20">
  <div class="map_view_cont cont">
    <div class="sectionTitle sectionTitleLine textCenter">
      <h2 class="sectionTitleTop">MAP</h2>
    </div>
    <div class="sectionDesc textCenter">
      <p>地図</p>
    </div>
    <div class="map_list_cont clearfix">
      <div class="item">
        <div class="item_cont">
          <div class="item_desc">〇〇駅を出られまして、ファミリーマートに到着されましたらご連絡ください。</div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.725171645741!2d139.70847961526025!3d35.73297698018222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5e0eedbc67%3A0x430d8b2d61e46d1f!2z44CSMTcxLTAwMjEg5p2x5Lqs6YO96LGK5bO25Yy66KW_5rGg6KKL77yR5LiB55uu77yU77yS4oiS77yX!5e0!3m2!1sja!2sjp!4v1625056796584!5m2!1sja!2sjp"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </div>
</section><!-- ======== /map_view ======== -->

<!-- ======== access_view ======== -->
<div class="map_view_cont cont">
  <div class="sectionTitle sectionTitleLine textCenter">
    <h2 class="sectionTitleTop pdTop40">ACCESS</h2>
  </div>
  <div class="sectionDesc textCenter">
    <p>お電話をいただく場所までの道順</p>
  </div>
  <div class="map_list_cont clearfix">
    <div class="item fadein text-center">
      <h3>電車でお越しのお客様</h3>
      <div class="itemAccess item_img">
        <img data-src="{{ asset('bazu/assets/customer/way.jpeg') }}" class="lazyload accessItem" alt=""
          src="{{ asset('bazu/assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png') }}" />
      </div>
      <p>1. 〇〇北口地上出口から出て頂きます。</p>
      <div class="itemAccess item_img">
        <img data-src="{{ asset('bazu/assets/customer/way.jpeg') }}" class="lazyload accessItem" alt=""
          src="{{ asset('bazu/assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png') }}" />
      </div>
      <p>2. ホテルサンシティーに沿って<br class="visible-xs">左側を100M程直進してください。</p>
      <div class="itemAccess item_img">
        <img data-src="{{ asset('bazu/assets/customer/way.jpeg') }}" class="lazyload accessItem" alt=""
          src="{{ asset('bazu/assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png') }}" />
      </div>
      <p>3. そのまま直進です。</p>
      <div class="itemAccess item_img">
        <img data-src="{{ asset('bazu/assets/customer/way.jpeg') }}" class="lazyload accessItem" alt=""
          src="{{ asset('bazu/assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png') }}" />
      </div>
      <p>4. あと20~30mでファミリーマートに到着します。</p>
      <div class="itemAccess item_img">
        <img data-src="{{ asset('bazu/assets/customer/way.jpeg') }}" class="lazyload accessItem" alt=""
          src="{{ asset('bazu/assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png') }}" />
      </div>
      <p>5. こちらのファミリーマートに到着されましたら、<br class="visible-xs">お電話ください。</p>
    </div>

    <div class="item fadein text-center">
      <h3>お車でお越しのお客様</h3>
      <p>〇〇駅付近のパーキングをご紹介いたします。</p>
      <div class="itemAccess item_img">
        <img data-src="{{ asset('bazu/assets/customer/way.jpeg') }}" class="lazyload accessItem" alt=""
          src="{{ asset('bazu/assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png') }}" />
      </div>
      <p>1. <a target="_blank" href="https://goo.gl/maps/Q7yCs9gdoSG2">大阪府大阪市〇〇</p>
      <div class="itemAccess item_img">
        <img data-src="{{ asset('bazu/assets/customer/way.jpeg') }}" class="lazyload accessItem" alt=""
          src="{{ asset('bazu/assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png') }}" />
      </div>
      <p>2. <a target="_blank" href="https://goo.gl/maps/w91t7hnCdw42">大阪府大阪市〇〇</p>
      <div class="itemAccess item_img">
        <img data-src="{{ asset('bazu/assets/customer/way.jpeg') }}" class="lazyload accessItem" alt=""
          src="{{ asset('bazu/assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png') }}" />
      </div>
      <p>3. <a target="_blank" href="https://goo.gl/maps/6_vmR35KvcSk">大阪府大阪市〇〇</p>
      <div class="itemAccess item_img">
        <img data-src="{{ asset('bazu/assets/customer/way.jpeg') }}" class="lazyload accessItem" alt=""
          src="{{ asset('bazu/assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png') }}" />
      </div>
      <p>4. <a target="_blank" href="https://goo.gl/maps/7sd_vAEx9ACv">大阪府大阪市〇〇</p>
    </div>
  </div>
</div>
<!-- ======== /access_view ======== -->

<!-- ======== store_view ======== -->
<section class="display-block store_view clearfix pdTop30 pdBottom140 m-pdTop30 m-pdBottom80">
  <div class="twoColorBackGround"></div>
  <div class="store_view_cont cont">
    <div class="sectionTitle sectionTitleLine textCenter">
      <h2 class="sectionTitleTop">STORE</h2>
    </div>
    <div class="sectionDesc textCenter">
      <p>店舗情報</p>
    </div>
    <div class="item pdTop50 m-pdTop20 fadein">
      <div class="item_img">
        <img src="{{ asset('bazu/assets/customer/store_img.jpg') }}" />
      </div>
      <div class="itemInfo">
        <div class="sectionTitle sectionTitleLineLeft">
          <h2 class="sectionTitleTop">
            <img src="{{ asset('bazu/assets/customer/logo.png') }}" />
          </h2>
          <p>サンプルエステ　リンパ </p>
        </div>
        <div class="sectionDesc">

          <a onclick="gtag(&quot;event&quot;, &quot;tel&quot;, { &quot;event_category&quot;: &quot;cv&quot;, &quot;event_label&quot;: &quot;telclick&quot;, &quot;value&quot;: 1 });"
            alt="09000000000" href="tel:09000000000">
            <p>電話 09000000000</p>
          </a>
          <p>営業時間 10:00~05:00</p>

          <p>電話受付 09:30~05:00</p>

          <p>住所 大阪府大阪市〇〇</p>

          <p>最寄り駅 〇〇駅徒歩1分</p>
        </div>
      </div>
    </div>
  </div>
</section><!-- ======== /store_view ======== -->


</main> <!-- ======== /main ======== -->
<!-- ======== footer ======== -->
@include('frontend.sections.footer')
<!-- ======== /footer ======== -->
