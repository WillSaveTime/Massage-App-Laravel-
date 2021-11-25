@include('frontend.sections.header')
<!-- ======== main ======== -->
  <main class="priority noHome">
    <!-- ======== header ======== -->
    @yield('frontend.sections.page.header')
    <!-- ======== /header ======== -->
    <!-- ======== nav ======== -->
    @include('frontend.sections.nav')
    <!-- ======== /nav ======== -->
    <!-- ======== mainView ======== -->
    @include('frontend.sections.mainview')
    <!-- ======== /mainView ======== -->
    <!-- ======== mapView ======== -->
    <section class="display-block mapView pdTop140 pdBottom50 m-pdTop50 m-pdBottom20">
      <div class="mapViewCont cont">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h2 class="sectionTitleTop">MAP</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>地図</p>
        </div>
        <div class="mapListCont clearfix">
          <div class="item">
            <div class="itemCont">
              <div class="itemDesc">JR池袋駅西口（北）を出られまして、ファミリーマート池袋北口店に到着されましたらご連絡ください。</div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.725171645741!2d139.70847961526025!3d35.73297698018222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5e0eedbc67%3A0x430d8b2d61e46d1f!2z44CSMTcxLTAwMjEg5p2x5Lqs6YO96LGK5bO25Yy66KW_5rGg6KKL77yR5LiB55uu77yU77yS4oiS77yX!5e0!3m2!1sja!2sjp!4v1625056796584!5m2!1sja!2sjp"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section><!-- ======== /mapView ======== -->

    <!-- ======== accessView ======== -->
    <div class="mapViewCont cont">
      <div class="sectionTitle sectionTitleLine textCenter">
        <h2 class="sectionTitleTop pdTop40">ACCESS</h2>
      </div>
      <div class="sectionDesc textCenter">
        <p>お電話をいただく場所までの道順</p>
      </div>
      <div class="mapListCont clearfix">
        <div class="item fadein text-center">
          <h3>電車でお越しのお客様</h3>
          <div class="itemAccess itemImg">
            <img
              data-src="assets/customer/howToGetByTrain1-e8d88db5e71e5fcea96fc13aded40a2a1baa9d70e58205c05193c75a94057da1.jpg"
              class="lazyload accessItem" alt="池袋北口地上出口から出て頂きます"
              src="assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png" />
          </div>
          <p>1. 池袋北口地上出口から出て頂きます。</p>
          <div class="itemAccess itemImg">
            <img
              data-src="assets/customer/howToGetByTrain2-fe10ae18783bbe240c7c7305106d4c25ce6c0b05eb941fba44647e79f9dc2feb.jpg"
              class="lazyload accessItem" alt="ホテルサンシティーに沿って左側を100M程直進してください"
              src="assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png" />
          </div>
          <p>2. ホテルサンシティーに沿って<br class="visible-xs">左側を100M程直進してください。</p>
          <div class="itemAccess itemImg">
            <img
              data-src="assets/customer/howToGetByTrain3-f0eef828fac56eee5793a255317137a2667ec633b06a7026b126a4de37ffc1ed.jpg"
              class="lazyload accessItem" alt="そのまま直進です"
              src="assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png" />
          </div>
          <p>3. そのまま直進です。</p>
          <div class="itemAccess itemImg">
            <img
              data-src="assets/customer/howToGetByTrain4-ca29cb5367e5f0c5aee437623d726a9f8d7a474275c5a4dc91f1f02f67ac99fb.jpg"
              class="lazyload accessItem" alt="あと20~30mでファミリーマートに到着します。"
              src="assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png" />
          </div>
          <p>4. あと20~30mでファミリーマートに到着します。</p>
          <div class="itemAccess itemImg">
            <img
              data-src="assets/customer/howToGetByTrain5-3e572a99ef02542708567ae819b2e8d936b5dc75b69a7ecee1802cfd801db0e1.jpg"
              class="lazyload accessItem" alt="こちらのファミリーマートに到着されましたら、お電話ください"
              src="assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png" />
          </div>
          <p>5. こちらのファミリーマートに到着されましたら、<br class="visible-xs">お電話ください。</p>
        </div>

        <div class="item fadein text-center">
          <h3>お車でお越しのお客様</h3>
          <p>池袋北口付近のパーキングをご紹介いたします。</p>
          <div class="itemAccess itemImg">
            <img
              data-src="assets/customer/howToGetByCar1-02be62ad8538f06e9d61a1b0202f1b90482a949fa6012659958dc2c5e37203bd.jpg"
              class="lazyload accessItem" alt="こちらのファミリーマートに到着されましたら、お電話ください"
              src="assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png" />
          </div>
          <p>1. <a target="_blank" href="https://goo.gl/maps/Q7yCs9gdoSG2">東京都豊島区西池袋1丁目30</p>
          <div class="itemAccess itemImg">
            <img
              data-src="assets/customer/howToGetByCar2-55d06c34b5f0f133ce3f3058bc17d55f4c68110335cb76f2866d4b4a4995a3a9.jpg"
              class="lazyload accessItem" alt="こちらのファミリーマートに到着されましたら、お電話ください"
              src="assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png" />
          </div>
          <p>2. <a target="_blank" href="https://goo.gl/maps/w91t7hnCdw42">東京都豊島区池袋2丁目63−3</p>
          <div class="itemAccess itemImg">
            <img
              data-src="assets/customer/howToGetByCar3-32ebeb41d8071c7d29aea4e913dc255451e069656046e9adacc4355d3e02c157.jpg"
              class="lazyload accessItem" alt="こちらのファミリーマートに到着されましたら、お電話ください"
              src="assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png" />
          </div>
          <p>3. <a target="_blank" href="https://goo.gl/maps/6VmR35KvcSk">東京都豊島区池袋2丁目47</p>
          <div class="itemAccess itemImg">
            <img
              data-src="assets/customer/howToGetByCar4-d4f56fbf588e16cf8d4632a4f75a186a1576dff00e5e20bde4d6a96bfe10c764.jpg"
              class="lazyload accessItem" alt="こちらのファミリーマートに到着されましたら、お電話ください"
              src="assets/customer/lazy/concept_image-a56a86d90af1073fb96ce2a7645bb5e9fceb44a61fffebd267160be361bead6a.jpg.png" />
          </div>
          <p>4. <a target="_blank" href="https://goo.gl/maps/7sdVAEx9ACv">東京都豊島区池袋2丁目64</p>
        </div>
      </div>
    </div>
    <!-- ======== /accessView ======== -->

    <!-- ======== storeView ======== -->
    <section class="display-block storeView clearfix pdTop30 pdBottom140 m-pdTop30 m-pdBottom80">
      <div class="twoColorBackGround"></div>
      <div class="storeViewCont cont">
        <div class="sectionTitle sectionTitleLine textCenter">
          <h2 class="sectionTitleTop">STORE</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>店舗情報</p>
        </div>
        <div class="item pdTop50 m-pdTop20 fadein">
          <div class="itemImg">
            <img
              src="assets/customer/storeImageBazuca-86b40fc82b3db227ac7d0984ae6b10e0dba831153df69bdfccc3ef0e5006cedd.jpg" />
          </div>
          <div class="itemInfo">
            <div class="sectionTitle sectionTitleLineLeft">
              <h2 class="sectionTitleTop">
                <img
                  src="assets/customer/logoGold-d88459723f7d2efc28d130310bd7c5e335439368db37c8e2ea16aa31e700c1a9.png" />
              </h2>
              <p>池袋メンズエステ バズーカ</p>
            </div>
            <div class="sectionDesc">

              <a onclick="gtag(&quot;event&quot;, &quot;tel&quot;, { &quot;event_category&quot;: &quot;cv&quot;, &quot;event_label&quot;: &quot;telclick&quot;, &quot;value&quot;: 1 });"
                alt="09017004288" href="tel:09017004288">
                <p>電話 09017004288</p>
              </a>
              <p>営業時間 10:00~05:00</p>

              <p>電話受付 09:30~05:00</p>

              <p>住所 東京都豊島区池袋2丁目</p>

              <p>最寄り駅 JR北口池袋徒歩3分</p>
            </div>
          </div>
        </div>
      </div>
    </section><!-- ======== /storeView ======== -->
@include('frontend.sections.footer')