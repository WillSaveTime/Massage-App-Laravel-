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
    <!-- ======== recruitGreetingView ======== -->
    <section class="recruitGreetingView clearfix" id="recruitGreeting">
      <!-- <div class="twoColorBackGround"></div> -->
      <div class="recruitGreetingViewCont">
        <div class="sectionTitle sectionTitleLine recruitLine textCenter">
          <h2 class="sectionTitleTop recruitSectionTitleTop">Greeting</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>お店を探されている皆様へのご挨拶</p>
        </div>

        <div class="itemGreeting">
          <h3 class="catchphrase">当店は、セラピストさんのことを第一に考え、<br>
            エリアで最も働きやすい環境を目指しています。</h3>
          <p class="text">
            この度は、池袋メンズエステ「Bazu-Ca（バズーカ）」の<br class="displayNoneLess740">
            求人サイトをご覧いただき、誠にありがとうございます。<br>
            <br>
            当店は、メンズエステ激戦区の池袋の地で、<br class="displayNoneLess740">
            4年目を迎え、多くのお客様とセラピストさんと共に、<br class="displayNoneLess740">
            地域No.1店舗を目指して運営しております。<br>
            <br>
            「Bazu-Ca（バズーカ）」は風俗店ではございません。<br class="displayNoneLess740">
            風俗的行為は一切行ってませんのでご安心ください。<br>
            <br>

            アロマオイルマッサージでお客様のカラダとココロを癒す<br class="displayNoneLess740">
            とてもやりがいのあるお仕事です。<br>
            <br>
            些細な事でも結構です。もし、私たちのお店に興味を持たれたなら、<br class="displayNoneLess740">
            いつでもお気軽にご連絡ください♪<br>
            <br>
            スタッフ一同、みなさまからのご連絡、心よりお待ちしております♪
          </p>
          <p class="name">
            バズーカ店長
          </p>
        </div>
      </div>
    </section>
    <!-- ======== /recruitGreetingView ======== -->

    <!-- ======== recommendationView ======== -->
    <section class="recommendationView clearfix">
      <div class="recommendationViewCont">
        <h2 class="headRecommendation">
          当店は、こんな方におすすめのお店です♪
        </h2>
        <div class="itemRecommendation">
          <p class="listRecommendation">
            <span class="icon"><img
                src="assets/customer/recruit/heart-2d281adc5b74d56f8b610b80fe7bff36522cfcbd36ad5556ce63f361e5c064ac.png" /></span>実際に働いたら違った。という経験がある方<br>
            <br class="displayNoneMore740">
            <span class="icon"><img
                src="assets/customer/recruit/heart-2d281adc5b74d56f8b610b80fe7bff36522cfcbd36ad5556ce63f361e5c064ac.png" /></span>優しい心で、お客様と楽しく接客することができる方<br>
            <br class="displayNoneMore740">
            <span class="icon"><img
                src="assets/customer/recruit/heart-2d281adc5b74d56f8b610b80fe7bff36522cfcbd36ad5556ce63f361e5c064ac.png" /></span>「人を癒す」仕事に興味がある方（未経験の方もOK）<br>
            <br class="displayNoneMore740">
            <span class="icon"><img
                src="assets/customer/recruit/heart-2d281adc5b74d56f8b610b80fe7bff36522cfcbd36ad5556ce63f361e5c064ac.png" /></span>マッサージを学びたい、技術を身に着けたい方<br>
            <br class="displayNoneMore740">
            <span class="icon"><img
                src="assets/customer/recruit/heart-2d281adc5b74d56f8b610b80fe7bff36522cfcbd36ad5556ce63f361e5c064ac.png" /></span>マッサージ、リラク、エステなど経験者の方<br>
            <br class="displayNoneMore740">
            <span class="icon"><img
                src="assets/customer/recruit/heart-2d281adc5b74d56f8b610b80fe7bff36522cfcbd36ad5556ce63f361e5c064ac.png" /></span>身に着けた知識を活かして高収入を得たい方<br>
            <br class="displayNoneMore740">
            <span class="icon"><img
                src="assets/customer/recruit/heart-2d281adc5b74d56f8b610b80fe7bff36522cfcbd36ad5556ce63f361e5c064ac.png" /></span>プロフェッショナルな技術や知識を身に付けたい方<br>
            <br class="displayNoneMore740">
          </p>
        </div>
      </div>
    </section>
    <!-- ======== /recommendationView ======== -->
    <!-- ======== trainingView ======== -->
    <section class="trainingView clearfix" id="training">
      <div class="trainingViewCont">
        <div class="catchphraseCont">
          <div class="trainingMov1">
            <img
              src="assets/customer/recruit/trainingMov1-052c7140a02bbd52c6fd4677c664bfcd9e5359fbadbc4c82b36998ae70615120.png" />
          </div>
          <div class="catchphraseTxt">
            <p class="catchphrase">未経験でも安心・安全！</p>
            <p class="catchphraseSub">実績豊富な当店だからできる充実した研修体制</p>
          </div>
        </div>
        <div class="itemTrainingCont">
          <div class="sectionTitle sectionTitleLine recruitLine textCenter">
            <h2 class="sectionTitleTop recruitSectionTitleTop">Road to debut</h2>
          </div>
          <div class="sectionDesc textCenter">
            <p>バズーカだからできる充実の研修体制</p>
          </div>
          <div class="descTraining">
            <p>
              研修は、通常1～2セットで終了しますが、<br>
              自信のない、もっと技術を伸ばしたいという方は、何度でも研修可能です。<br>
              現在働かれている約72％のスタッフが未経験からスタートされています。
            </p>
          </div>
          <div class="itemTraining">
            <div class="item clearfix">
              <div class="itemRight">
                <p class="head">STEP1</p>
                <hr>
                <p class="text">
                  未経験のセラピストも経験のあるセラピストも<span>プロトレーナー</span>より一からオイルマッサージの基礎を学びます。
                </p>
              </div>
              <div class="itemLeft">
                <img
                  src="assets/customer/recruit/training1-ace4c8c5ccd479016a1e5c463f72ec5e8a4f739629a9592ead3b9dc28de9094c.jpg" />
              </div>
            </div>

            <div class="item clearfix">
              <div class="itemRight">
                <p class="head">STEP2</p>
                <hr>
                <p class="text">
                  当店はマッサージだけではなく<span>接客、心配り</span>なども大切にしています。その基本をお伝えします。
                </p>
              </div>
              <div class="itemLeft">
                <img
                  src="assets/customer/recruit/training3-295b4b5b19a9e2a295f64fba18aaef70168838b838695e59783e26f724fbd668.jpg" />
              </div>
            </div>

            <div class="item clearfix">
              <div class="itemRight">
                <p class="head">STEP3</p>
                <hr>
                <p class="text">
                  自分の課題克服のための<span>反復練習や実践的な全体通し練習</span>などを行います。トレーナーより合格をもらえたらいざデビュー！
                </p>
              </div>
              <div class="itemLeft">
                <img
                  src="assets/customer/recruit/training2-8e4bdef4bc36c49fdde622393d3dfecee368edbb9af6331171c42d1a53517be3.jpg" />
              </div>
            </div>

            <div class="item clearfix">
              <div class="itemRight">
                <p class="head">STEP4</p>
                <hr>
                <p class="text">
                  いよいよ<span>セラピストデビュー</span>です！デビュー後も分からないことや、不安なことなど、どんなことでもお気軽にお聞きください！
                  当店は、<span>セラピストさん一人一人をしっかりサポートする環境</span>がございます。
                </p>
              </div>
              <div class="itemLeft">
                <img
                  src="assets/customer/recruit/training4-5fd0ff93e61c6f8ffd4279de0655be61c1c27f39d0d841b1d64becbc34647119.jpg" />
              </div>
            </div>

            <div class="trainingMov2">
              <img
                src="assets/customer/recruit/trainingMov2-4ab8895c4f7acfcd5f8db9c43268099f7b7f2eb251c36c076de981e4ad374a42.png" />
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- ======== /trainingView ======== -->

    <!-- ======== salaryView ======== -->
    <section class="salaryView clearfix pdBottom50 m-pdBottom20" id="salary">
      <div class="salaryViewCont">
        <div class="sectionTitle sectionTitleLine recruitLine textCenter">
          <h2 class="sectionTitleTop recruitSectionTitleTop">Salary</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>バズーカだから実現できる高収入</p>
        </div>

        <div class="items displayNoneLess740">
          <div class="item">
            <div class="itemLeft itemImage">
              <img
                src="assets/customer/recruit/salaryTherapist1-2d44757fce70886a81797ee102a86d24ae3777aff28c1a441301f625edb1369a.png" />
            </div>
            <div class="itemRight itemTxtBox">
              <h3 class="sectionTitleSub textCenter jp">A子さん(27歳)の場合</h3>
              <p class="itemEx">週2 / 1日6H / 平均日給<span class="salary">29,000</span>円</p>
              <p class="textCenter itemTxt">
                バズーカさんは<span>月3回だけの出勤</span>という私のわがままをきいてくれました。<span>無理ないスケジュール</span>を組むことでサービスにも余裕が生まれ、ありがたいことに少ない出勤でも指名をいただけています。
              </p>
            </div>
          </div>
          <div class="item">
            <div class="itemLeft itemTxtBox">
              <h3 class="sectionTitleSub textCenter jp">B子さん(29歳)の場合</h3>
              <p class="itemEx">週3日 / 1日5H勤務 / 平均日給<span class="salary">21,000</span>円</p>
              <p class="textCenter itemTxt">
                私はシングルマザーですが、このお仕事を始めてから、正直、<span>かなり生活が楽になりました！</span>空いた時間に負担なく働くことができ、
                <span>親切で優しいスタッフさん</span>にも恵まれ、本当に大満足です。
              </p>
            </div>
            <div class="itemRight itemImage">
              <img
                src="assets/customer/recruit/salaryTherapist2-f2aa8d23cf9d164ff30d4dc1117c23af424273d475d591a7eea276e35171e436.png" />
            </div>
          </div>
          <div class="item">
            <div class="itemLeft itemImage">
              <img
                src="assets/customer/recruit/salaryTherapist3-e10310371a71053d769f54344f55df26363f0ac72769c0197f75374ef59f63ea.png" />
            </div>
            <div class="itemRight itemTxtBox">
              <h3 class="sectionTitleSub textCenter jp">C子さん(22歳)の場合</h3>
              <p class="itemEx">週1 / 1日8H / 平均日給<span class="salary">42,000</span>円</p>
              <p class="textCenter itemTxt">
                以前働いていたお店では、お給料の単価は高かったのですが、予約がなかなか入らず。
                バズーカさんは固定のお客様だけでなく、ご新規のお客様もとても多く、<span>昔とは比べられないほど</span>、しっかり稼げています！
              </p>
            </div>
          </div>
        </div>


        <div class="items displayNoneMore740">
          <div class="item">
            <div class="itemLeft itemTxtBox">
              <h3 class="sectionTitleSub textCenter jp">A子さん(27歳)の場合</h3>
              <p class="itemEx">週2 / 1日6H / 平均日給<span class="salary">29,000</span>円</p>
              <p class="textCenter itemTxt">
                Bazu-Caは週一回だけという私のわがままをきいてくれました。無理ないスケジュールを組むことでサービスにも余裕が生まれ、ありがたいことに少ない出勤でも指名をいただけています。
              </p>
            </div>
            <div class="itemRight itemImage">
              <img
                src="assets/customer/recruit/salaryTherapist1-2d44757fce70886a81797ee102a86d24ae3777aff28c1a441301f625edb1369a.png" />
            </div>
          </div>
          <div class="item">
            <div class="itemLeft itemTxtBox">
              <h3 class="sectionTitleSub textCenter jp">B子さん(29歳)の場合</h3>
              <p class="itemEx">週3日 / 1日5H勤務 / 平均日給<span class="salary">21,000</span>円</p>
              <p class="textCenter itemTxt">
                私はシングルマザーですが、このお仕事を始めてから、正直、<span>かなり生活が楽になりました！</span>空いた時間に負担なく働くことができ、
              </p>
            </div>
            <div class="itemRight itemImage">
              <img
                src="assets/customer/recruit/salaryTherapist2-f2aa8d23cf9d164ff30d4dc1117c23af424273d475d591a7eea276e35171e436.png" />
            </div>
          </div>
          <div class="item">
            <div class="itemLeft itemTxtBox">
              <h3 class="sectionTitleSub textCenter jp">C子さん(22歳)の場合</h3>
              <p class="itemEx">週1 / 1日8H / 平均日給<span class="salary">42,000</span>円</p>
              <p class="textCenter itemTxt">
                以前働いていたお店では、お給料の単価は高かったのですが、予約がなかなか入らず。
                バズーカさんは固定のお客様だけでなく、ご新規のお客様もとても多く、<span>昔とは比べられないほど</span>、しっかり稼げています！
              </p>
            </div>
            <div class="itemRight itemImage">
              <img
                src="assets/customer/recruit/salaryTherapist3-e10310371a71053d769f54344f55df26363f0ac72769c0197f75374ef59f63ea.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ======== /salaryView ======== -->

    <!-- ======== pointView ======== -->
    <section class="pointView clearfix pdBottom50 m-pdBottom20" id="point">
      <div class="pointViewCont">
        <div class="pointTitleCont">
          <p>健全店なのに客足が途絶えない</p>
          <h2>安心安全でしっかり稼げるお店</h2>
          <p>を目指しています!!</p>
          <div class="pointMov1">
            <img
              src="assets/customer/recruit/pointMov1-86ea83b3f134270d66800e6dfac0f81d5e2a865a9f4a26e4565de21a2eef03eb.png" />
          </div>
          <div class="pointMov2">
            <img
              src="assets/customer/recruit/pointMov2-4a6af6894c8b9de4215945c01073b067fd8993758294ea82bd2153abb574fe02.png" />
          </div>
        </div>
        <div class="pointItemCont clearfix">
          <div class="pointItem">
            <p>
              どんなに健全でも、お給料単価が高くても、<br>
              お客様がいなければ、意味がありません。<br>
              <br>
              当店は<span class="emphasis">健全店</span>なのに、<span class="emphasis">お給料単価</span>が高く、<br>
              さらに<span>エリア屈指の集客力</span>を誇ります。<br>
              <br>
              その日の頑張りをその日のうちに実感できる。<br>
              当店は、そんな、セラピスト第一のお店を<br>
              目指しています。
            </p>
            <div class="pointMov3">
              <img
                src="assets/customer/recruit/pointMov3-3782db5a5daf36125aa23729c9318c45a4d961a5123ab2ee0fd51c8888d00efb.png" />
            </div>
            <div class="pointMov5 displayNoneMore740">
              <img
                src="assets/customer/recruit/pointMov3-3782db5a5daf36125aa23729c9318c45a4d961a5123ab2ee0fd51c8888d00efb.png" />
            </div>
          </div>
          <div class="pointMov4">
            <img
              src="assets/customer/recruit/pointMov4-abb6c53078534cf756e36081b435f155b7f99ae3ed8241d31996bd6f9adf23c7.png" />
          </div>
        </div>
      </div>
    </section>
    <!-- ======== pointView ======== -->

    <!-- ======== privilegeView ======== -->
    <section class="privilegeView clearfix pdBottom50 m-pdBottom20" id="privilege">
      <div class="privilegeViewCont">
        <div class="sectionTitle sectionTitleLine recruitLine textCenter">
          <h2 class="sectionTitleTop recruitSectionTitleTop">Privilege</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>在籍特典</p>
        </div>
        <div class="descPrivilege">
          <p>
            Bazu-Caでは、カイロプラクティックや脱毛・エステサロン、<br>
            美容室等の各種サロンと提携しています。<br>
            エステティシャンの方に気持ちよく働いていただくため、様々な特典もご用意。<br>
            働きながらキレイになれると、みなさんにご好評いただいています。
          </p>
        </div>
        <div class="itemsPrivilege">
          <div class="itemPrivilege">
            <img
              src="assets/customer/recruit/privilege1-971517fc1484fe410caa6cd4b23bf4215cb271207f4c6d027a74a2a9cfee2518.png" />
          </div>
          <div class="itemPrivilege">
            <img
              src="assets/customer/recruit/privilege2-8ee0978dd6429021d55b0712b338be9a47546cdf87b9024ecd8c2c75d28db70e.png" />
          </div>
          <div class="itemPrivilege">
            <img
              src="assets/customer/recruit/privilege3-4762f167decf20a83f40eb14effc0c24a921b1b1c09f313066266a9fc83d3b92.png" />
          </div>
        </div>
        <p class="moreTxt">さらに...</p>
        <div class="itemBanner">
          <a href="#form">
            <img
              src="assets/customer/recruit/recruitBanner-8a372f37fb1639705fe5fdd6a7871d3e987e3c9f7dac3813452ecd2a7eac6278.jpg" />
          </a>
        </div>
      </div>
    </section>
    <!-- ======== privilegeView ======== -->

    <!-- ======== coreValuesView ======== -->
    <section class="coreValuesView clearfix">
      <div class="coreValuesViewCont">
        <div class="sectionTitle sectionTitleLine recruitLine textCenter">
          <h2 class="sectionTitleTop recruitSectionTitleTop sectionTitleTopWhite">6 Core Values</h2>
        </div>
        <div class="sectionDesc sectionDescWhite textCenter">
          <p>バズーカがお約束する6つの制度</p>
        </div>
        <ul class="coreLists">
          <li>
            <img
              src="assets/customer/recruit/core1-5363c14118b4ec08120d37aa7a5b331293ed4db964fa40db961975ccafceefb9.png" />
            <p>エリアNo.1の給与体系</p>
          </li>
          <li>
            <img
              src="assets/customer/recruit/core2-b8d5d68fa263ef26711c8647aca2a995f0372e693de21acf280cde79f2e04a54.png" />
            <p>体験入店OK</p>
          </li>
          <li>
            <img
              src="assets/customer/recruit/core3-dca7f94a4e920d7f1879090a8ef748ee30a3809960c5f45da401f8c5920a51fa.png" />
            <p>未経験でも大丈夫</p>
          </li>
          <li>
            <img
              src="assets/customer/recruit/core4-9b1336636e0c94d557d3793fa071fd225486028dca5e29f648b35dee8483e771.png" />
            <p>安心・安全の健全店</p>
          </li>
          <li>
            <img
              src="assets/customer/recruit/core5-f40e925db194cb8e28daa04ce519395e5a157adc6d0b66c4618ff9c8662bca25.png" />
            <p>安心の完全時給制も</p>
          </li>
          <li>
            <img
              src="assets/customer/recruit/core6-19e2e3352fab42bdc7983e5c8b40ab1821d98b2b0a25f23ed47d309a3112fde9.png" />
            <p>完全個室待機</p>
          </li>
        </ul>
      </div>
    </section>
    <!-- ======== /coreValuesView ======== -->

    <!-- ======== voicesView ======== -->
    <section class="voicesView clearfix" id="voices">
      <div class="voicesViewCont">
        <div class="sectionTitle sectionTitleLine recruitLine textCenter">
          <h2 class="sectionTitleTop recruitSectionTitleTop">Voices</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>お店を探されている皆様へのご挨拶</p>
        </div>

        <div class="itemsVoice clearfix">
          <div class="itemVoice">
            <div class="voiceTxt">
              <h3 class="name">かなさん</h3>
              <p class="age">年齢：30</p>
              <p>好きなお菓子：チーズケーキ</p>
              <p>働いてよかったこと：<br>
                これまで池袋だけではなく、都内複数のお店で働いてきましたが、
                結論としては、バズーカさんが一番働きやすい環境だと感じています。
                スタッフのみなさんは本当に優しく、細かなことでも常に気にかけてくださるので、
                セラピストを一番に考えている姿勢が伝わってきます。
                そんなスタッフさんに、私はいつも頼りっぱなしですが。笑
              </p>
            </div>
            <div class="voiceMov">
              <img
                src="assets/customer/recruit/voice1-c5e6a010a92a06a196bb12f9cb2a7360aea1877fa98ddfebdff831a20b6c5496.png" />
            </div>
          </div>
          <div class="itemVoice">
            <div class="voiceTxt">
              <h3 class="name">さとみさん</h3>
              <p class="age">年齢：28</p>
              <p>趣味：写真</p>
              <p>働いてよかったこと：<br>
                メンズエステに興味があったのですが、少し怖いイメージもあって、
                なかなか応募できずにいました。
                友達からバズーカさんを紹介されて、研修がしっかりしてそうで、
                お店も健全な感じだったので、こちらのお店を選びました！
                意外と体力仕事なので、最初は少しきつかったですが、
                スタッフさんのサポートのおかげで、気持ちよくお仕事できています。
              </p>
            </div>
            <div class="voiceMov">
              <img
                src="assets/customer/recruit/voice2-75fe4f622a81854110e0bd7c84fc30e741fa4932126c577de55034eb0513f275.png" />
            </div>
          </div>
          <div class="itemVoice">
            <div class="voiceTxt">
              <h3 class="name">みほさん</h3>
              <p class="age">年齢：22</p>
              <p>趣味：ヨガ</p>
              <p>働いてよかったこと：<br>
                以前はヘアメイク、エステティシャンをやっていましたが、
                友達から「メンズエステ良いよ」という話を聞いて始めてみました。
                バズーカさんは、お給料体系もはっきりしていて、分からないことも
                すぐに教えてくださいます。
                メンズエステに興味あるけど、応募するのは勇気がいる。。。
                そんな方には、本当にオススメしたいお店です。
              </p>
            </div>
            <div class="voiceMov">
              <img
                src="assets/customer/recruit/voice3-b0655537d85d23b67143c5998df46eb7dd675fef24724a163d59b82ed1bee116.png" />
            </div>
          </div>
          <div class="itemVoice">
            <div class="voiceTxt">
              <h3 class="name">ゆきさん</h3>
              <p class="age">年齢：26</p>
              <p>当店を選んだきっかけ：ホームページが素敵だった</p>
              <p>働いてよかったこと：<br>
                何か副業をしようと思い、ネットサーフィンしていたら、バズーカさんの
                求人広告を見つけたので応募しました。
                普段はOLとして働いて、土日だけ出勤していますが、日給は常に3万円以上なので、
                とても良い副業だと思います。
                また、しっかり頑張った分だけ、お客様からも感謝されるので、とてもやりがいを感じてます。
              </p>
            </div>
            <div class="voiceMov">
              <img
                src="assets/customer/recruit/voice4-2e5281bdea6fb157e7d7bc1c5592b9692d689c27cddeec86ba2228cd81c7fe8a.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ======== /voicesView ======== -->

    <!-- ======== detailsView ======== -->
    <section class="detailsView clearfix pdTop30 pdBottom50 m-pdTop30 m-pdBottom20" id="details">
      <!-- <div class="twoColorBackGround"></div> -->
      <div class="detailsViewCont cont">
        <div class="sectionTitle sectionTitleLine recruitLine textCenter">
          <h2 class="sectionTitleTop recruitSectionTitleTop">details</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>募集要項</p>
        </div>
        <div class="detailsTableCont">
          <table class="details">
            <tbody>
              <tr>
                <th class="arrow_box">雇用形態</th>
                <td>リラクゼーション、アロマトリートメント業務<br>性的なサービスは一切ございません。</td>
              </tr>
              <tr>
                <th class="arrow_box">勤務日数</th>
                <td>完全自由出勤制<br>
                  10:00～翌5:00の間で希望シフト制<br>
                  【自分の生活スタイルに合わせて働けます】<br>
                  週1日　1日4時間以上の勤務～OK<br>
                  Wワーク・かけもちOK（風俗店とのかけもちは不可）<br>
                  土日祝のみOK<br>
                </td>
              </tr>
              <tr>
                <th>応募資格</th>
                <td>
                  22～40歳位の女性の方<br>
                  未経験者大歓迎、経験者優遇<br>
                  ブランクのある方も大歓迎<br>
                  既婚者OK<br>
                </td>
              </tr>
              <tr>
                <th>勤務地</th>
                <td>
                  東京都豊島区西池袋<br>
                  JR池袋駅北口徒歩3分<br>
                </td>
              </tr>
              <tr>
                <th>給与</th>
                <td>
                  完全日払い制<br>
                  歩合55％〜<br>
                  <br>
                  90分の歩合 ￥8,000<br>
                  120分の歩合 ￥11,000<br>
                  150分の歩合 ￥14,000<br>
                  180分の歩合 ￥17,000<br>
                  指名料は全額バックいたします。<br>
                  その他本指名数に応じてボーナス支給！<br>
                  <br>
                  ※ 上記の歩合額は最低歩合となります。<br>
                  月の指名本数によって歩合が上がる制度となります<br>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <!-- ======== /detailsView ======== -->
    <!-- ======== webFromView ======== -->
    <section class="webFromView clearfix pdTop50 pdBottom50 m-pdTop30 m-pdBottom20" id="form">
      <!-- <div class="twoColorBackGround"></div> -->
      <div class="webFromViewCont cont">

        <div class="sectionTitle sectionTitleLine recruitLine textCenter">
          <h2 class="sectionTitleTop recruitSectionTitleTop">Web</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>webでのお問い合わせ</p>
        </div>

        <div class="webFromViewFormCont">
          <form class="webFromViewForm" id="new_recruit_inquiry" action="https://www.bazu-ca.com/recruit/confirm"
            accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input
              type="hidden" name="authenticity_token"
              value="QDzbBscXhXOw9Zt4KSFf82+QhyALk5045SyI9v1YVLU360rhtxi8CEIBXfqPaxVKwRggiycI8tlR34HrFQRF0A==" />
            <div class="item">
              <div class="itemLabel">
                <label>お名前<span class="required">必須</span>
                </label>
              </div>
              <div class="itemParts">
                <input required="required" class="txt" type="text" name="recruit_inquiry[name]"
                  id="recruit_inquiry_name" />
              </div>
            </div>
            <div class="item">
              <div class="itemLabel">
                <label>メールアドレス<span class="required">必須</span>
                </label>
              </div>
              <div class="itemParts">
                <input required="required" class="txt" type="text" name="recruit_inquiry[email]"
                  id="recruit_inquiry_email" />
              </div>
            </div>
            <div class="item">
              <div class="itemLabel">
                <label>お電話番号<span class="required">必須</span>
                </label>
              </div>
              <div class="itemParts">
                <input required="required" class="txt" type="tel" name="recruit_inquiry[phone_number]"
                  id="recruit_inquiry_phone_number" />
              </div>
            </div>
            <div class="item">
              <div class="itemLabel">
                <label>お問い合わせ内容</label>
              </div>
              <div class="itemParts">
                <textarea class="" rows="5" name="recruit_inquiry[inquiry]" id="recruit_inquiry_inquiry"></textarea>
              </div>
            </div>
            <div class="itemButton">
              <p class="btnCont">
                <button name="button" type="" class="btn inquiryFormButton">
                  <span>内容確認 ＞＞</span>
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

    </section>
    <!-- ======== /webFromView ======== -->

    <!-- ======== lineRecruitView ======== -->
    <section class="lineRecruitView clearfix pdTop50 pdBottom50 m-pdTop30 m-pdBottom30">
      <!-- <div class="twoColorBackGround"></div> -->
      <div class="lineRecruitViewCont cont">
        <div class="sectionTitle sectionTitleLine recruitLine textCenter">
          <h2 class="sectionTitleTop recruitSectionTitleTop">Line</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>ライン予約</p>
        </div>

        <div class="bannerCont">
          <a target="_blank" alt="池袋メンズエステ　バズーカ　LINE" href="https://line.me/ti/p/NiWB4ZPazB">
            <img
              src="assets/customer/lineBanner-22b3f0b1536a70a41ad656b730699cbfda7c090dd0b181ebc2c00848d4ce6701.jpg" />
            <div class="lineQrCode">
              <img
                src="https://s3-ap-northeast-1.amazonaws.com/bazu-ca-bucket-prod/uploads/lien_info/qr_code_image/22/8cc743b6-1e16-44a0-ba32-a4f61dc4934c.png" />
            </div>
          </a>
        </div>

      </div>
    </section>
    <!-- ======== /lineRecruitView ======== -->


    <!-- ======== faqView ======== -->
    <section class="faqView clearfix" id="faq">
      <div class="faqViewCont">
        <div class="sectionTitle sectionTitleLine recruitLine textCenter">
          <h2 class="sectionTitleTop recruitSectionTitleTop">FAQ</h2>
        </div>
        <div class="sectionDesc textCenter">
          <p>よくあるご質問</p>
        </div>
        <div class="items">
          <div class="item">
            <div class="iconQA"><img
                src="assets/customer/recruit/faqQA-217ee29596986437cf3dfb848bdbeed64c1647e0983621f1fca6cf51b6c2c614.png" />
            </div>
            <div class="itemTxt">
              <p class="head">
                お仕事内容をおしえてください。
              </p>
              <p class="detail">
                アロマオイルを使用したトリートメントをおこないます。風俗店ではありませんので性的サービスは一切ありません。
              </p>
            </div>
          </div>
          <div class="item">
            <div class="iconQA"><img
                src="assets/customer/recruit/faqQA-217ee29596986437cf3dfb848bdbeed64c1647e0983621f1fca6cf51b6c2c614.png" />
            </div>
            <div class="itemTxt">
              <p class="head">
                マッサージ経験のない普通の女の子でも大丈夫でしょうか。
              </p>
              <p class="detail">
                もちろん未経験でも問題なく勤務可能です。<br>
                施術だけではなく、接客や雰囲気づくりといった細かい部分まで、
                他店とは違い、しっかりとした講習を受けることができる環境がありますのでご安心ください。
              </p>
            </div>
          </div>
          <div class="item">
            <div class="iconQA"><img
                src="assets/customer/recruit/faqQA-217ee29596986437cf3dfb848bdbeed64c1647e0983621f1fca6cf51b6c2c614.png" />
            </div>
            <div class="itemTxt">
              <p class="head">
                講習の内容はどういったものですか？
              </p>
              <p class="detail">
                女性トレーナーによる実践的な講習を実施しております。
                もちろん、<b>男性スタッフによるセクハラ講習などは一切ございません。</b>
              </p>
            </div>
          </div>
          <div class="item">
            <div class="iconQA"><img
                src="assets/customer/recruit/faqQA-217ee29596986437cf3dfb848bdbeed64c1647e0983621f1fca6cf51b6c2c614.png" />
            </div>
            <div class="itemTxt">
              <p class="head">
                女性同士の派閥とかはありませんか？
              </p>
              <p class="detail">
                ご安心ください。当店は完全な個室の店舗となりますのでお客様以外、受付スタッフとも
                顔を合わせることはありません。プライバシーを重視させていただいております。
              </p>
            </div>
          </div>
          <div class="item">
            <div class="iconQA"><img
                src="assets/customer/recruit/faqQA-217ee29596986437cf3dfb848bdbeed64c1647e0983621f1fca6cf51b6c2c614.png" />
            </div>
            <div class="itemTxt">
              <p class="head">
                ノルマや罰金はありますか？
              </p>
              <p class="detail">
                もちろん一切ございません。罰金制度等もございませんので安心してお仕事していただけます。
              </p>
            </div>
          </div>
          <div class="item">
            <div class="iconQA"><img
                src="assets/customer/recruit/faqQA-217ee29596986437cf3dfb848bdbeed64c1647e0983621f1fca6cf51b6c2c614.png" />
            </div>
            <div class="itemTxt">
              <p class="head">
                お休みは自由に取れますか？
              </p>
              <p class="detail">
                自由にシフトを出していただいておりますので、お仕事したいときにしていただき、お休みしたいときにお休みください。
              </p>
            </div>
          </div>
          <div class="item">
            <div class="iconQA"><img
                src="assets/customer/recruit/faqQA-217ee29596986437cf3dfb848bdbeed64c1647e0983621f1fca6cf51b6c2c614.png" />
            </div>
            <div class="itemTxt">
              <p class="head">
                研修費用はかかりますか？
              </p>
              <p class="detail">
                研修費用は無料です。場所は当サロンで行います。
                ご不安な場合は何回でも無料で講習を行いますし、ご希望の方は外部研修を受講していただくことも可能です。
              </p>
            </div>
          </div>
          <div class="item">
            <div class="iconQA"><img
                src="assets/customer/recruit/faqQA-217ee29596986437cf3dfb848bdbeed64c1647e0983621f1fca6cf51b6c2c614.png" />
            </div>
            <div class="itemTxt">
              <p class="head">
                マイナンバーが心配なのですが？
              </p>
              <p class="detail">
                当店には顧問税理士が万全のサポートをしていますのでご安心ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /======== faqView ======== -->
@include('frontend.sections.footer')