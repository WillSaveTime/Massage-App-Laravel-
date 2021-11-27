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

      <!-- ======== recruitgreeting_view ======== -->
      <section class="recruitgreeting_view clearfix" id="recruitGreeting">
        <!-- <div class="twoColorBackGround"></div> -->
        <div class="recruitgreeting_view_cont">
          <div class="sectionTitle sectionTitleLine recruitLine textCenter">
            <h2 class="sectionTitleTop recruitSectionTitleTop">Greeting</h2>
          </div>
          <div class="sectionDesc textCenter">
            <p>お店を探されている皆様へのご挨拶</p>
          </div>

          <div class="item_greeting">
            <h3 class="catchphrase">
              当店は、セラピストさんのことを第一に考え、<br />
              エリアで最も働きやすい環境を目指しています。
            </h3>
            <p class="text">
              この度は、サンプルエステ「リンパ（リンパ）」の<br class="displayNoneLess768" />
              求人サイトをご覧いただき、誠にありがとうございます。<br />
              <br />
              当店は、メンズエステ激戦区の〇〇の地で、<br class="displayNoneLess768" />
              4年目を迎え、多くのお客様とセラピストさんと共に、<br class="displayNoneLess768" />
              地域No.1店舗を目指して運営しております。<br />
              <br />
              「リンパ（リンパ）」は風俗店ではございません。<br class="displayNoneLess768" />
              風俗的行為は一切行ってませんのでご安心ください。<br />
              <br />

              アロマオイルマッサージでお客様のカラダとココロを癒す<br class="displayNoneLess768" />
              とてもやりがいのあるお仕事です。<br />
              <br />
              些細な事でも結構です。もし、私たちのお店に興味を持たれたなら、<br class="displayNoneLess768" />
              いつでもお気軽にご連絡ください♪<br />
              <br />
              スタッフ一同、みなさまからのご連絡、心よりお待ちしております♪
            </p>
            <p class="name">リンパ店長</p>
          </div>
        </div>
      </section>
      <!-- ======== /recruitgreeting_view ======== -->

      <!-- ======== recommendationView ======== -->
      <section class="recommendationView clearfix">
        <div class="recommendationViewCont">
          <h2 class="headRecommendation">当店は、こんな方におすすめのお店です♪</h2>
          <div class="itemRecommendation">
            <p class="listRecommendation">
              <span class="icon"><img src="{{ asset('bazu/assets/customer/recruit/heart.png') }}" /></span
              >実際に働いたら違った。という経験がある方<br />
              <br class="displayNoneMore768" />
              <span class="icon"><img src="{{ asset('bazu/assets/customer/recruit/heart.png') }}" /></span
              >優しい心で、お客様と楽しく接客することができる方<br />
              <br class="displayNoneMore768" />
              <span class="icon"><img src="{{ asset('bazu/assets/customer/recruit/heart.png') }}" /></span
              >「人を癒す」仕事に興味がある方（未経験の方もOK）<br />
              <br class="displayNoneMore768" />
              <span class="icon"><img src="{{ asset('bazu/assets/customer/recruit/heart.png') }}" /></span
              >マッサージを学びたい、技術を身に着けたい方<br />
              <br class="displayNoneMore768" />
              <span class="icon"><img src="{{ asset('bazu/assets/customer/recruit/heart.png') }}" /></span
              >マッサージ、リラク、エステなど経験者の方<br />
              <br class="displayNoneMore768" />
              <span class="icon"><img src="{{ asset('bazu/assets/customer/recruit/heart.png') }}" /></span
              >身に着けた知識を活かして高収入を得たい方<br />
              <br class="displayNoneMore768" />
              <span class="icon"><img src="{{ asset('bazu/assets/customer/recruit/heart.png') }}" /></span
              >プロフェッショナルな技術や知識を身に付けたい方<br />
              <br class="displayNoneMore768" />
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
              <img src="{{ asset('bazu/assets/customer/recruit/recruite_training.png') }}" />
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
              <p>リンパだからできる充実の研修体制</p>
            </div>
            <div class="descTraining">
              <p>
                研修は、通常1～2セットで終了しますが、<br />
                自信のない、もっと技術を伸ばしたいという方は、何度でも研修可能です。<br />
                現在働かれている約72％のスタッフが未経験からスタートされています。
              </p>
            </div>
            <div class="itemTraining">
              <div class="item clearfix">
                <div class="item_right">
                  <p class="head">STEP1</p>
                  <hr />
                  <p class="text">未経験のセラピストも経験のあるセラピストも<span>プロトレーナー</span>より一からオイルマッサージの基礎を学びます。</p>
                </div>
                <div class="item_left">
                  <img src="{{ asset('bazu/assets/customer/recruit/training.jpg') }}" />
                </div>
              </div>

              <div class="item clearfix">
                <div class="item_right">
                  <p class="head">STEP2</p>
                  <hr />
                  <p class="text">当店はマッサージだけではなく<span>接客、心配り</span>なども大切にしています。その基本をお伝えします。</p>
                </div>
                <div class="item_left">
                  <img src="{{ asset('bazu/assets/customer/recruit/training.jpg') }}" />
                </div>
              </div>

              <div class="item clearfix">
                <div class="item_right">
                  <p class="head">STEP3</p>
                  <hr />
                  <p class="text">自分の課題克服のための<span>反復練習や実践的な全体通し練習</span>などを行います。トレーナーより合格をもらえたらいざデビュー！</p>
                </div>
                <div class="item_left">
                  <img src="{{ asset('bazu/assets/customer/recruit/training.jpg') }}" />
                </div>
              </div>

              <div class="item clearfix">
                <div class="item_right">
                  <p class="head">STEP4</p>
                  <hr />
                  <p class="text">
                    いよいよ<span>セラピストデビュー</span>です！デビュー後も分からないことや、不安なことなど、どんなことでもお気軽にお聞きください！
                    当店は、<span>セラピストさん一人一人をしっかりサポートする環境</span>がございます。
                  </p>
                </div>
                <div class="item_left">
                  <img src="{{ asset('bazu/assets/customer/recruit/training.jpg') }}" />
                </div>
              </div>

              <div class="trainingMov2">
                <img src="{{ asset('bazu/assets/customer/recruit/recruite_training02.png') }}" />
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
            <p>リンパだから実現できる高収入</p>
          </div>

          <div class="items displayNoneLess768">
            <div class="item">
              <div class="item_left item_image">
                <img src="{{ asset('bazu/assets/customer/recruit/therapist_img.png') }}" />
              </div>
              <div class="item_right itemTxtBox">
                <h3 class="section_title_sub textCenter jp">H子さん(23歳)の場合</h3>
                <p class="itemEx">週2 / 1日6H / 平均日給<span class="salary">30,000</span>円</p>
                <p class="textCenter itemTxt">
                  リンパさんは<span>月3回だけの出勤</span>という私のわがままをきいてくれました。<span>無理ないスケジュール</span>を組むことでサービスにも余裕が生まれ、ありがたいことに少ない出勤でも指名をいただけています。
                </p>
              </div>
            </div>

            <div class="item">
              <div class="item_left itemTxtBox">
                <h3 class="section_title_sub textCenter jp">H子さん(23歳)の場合</h3>
                <p class="itemEx">週2 / 1日6H / 平均日給<span class="salary">30,000</span>円</p>
                <p class="textCenter itemTxt">
                  リンパさんは<span>月3回だけの出勤</span>という私のわがままをきいてくれました。<span>無理ないスケジュール</span>を組むことでサービスにも余裕が生まれ、ありがたいことに少ない出勤でも指名をいただけています。
                </p>
              </div>
              <div class="item_right item_image">
                <img src="{{ asset('bazu/assets/customer/recruit/therapist_img.png') }}" />
              </div>
            </div>

          <div class="items displayNoneLess768">
            <div class="item">
              <div class="item_left item_image">
                <img src="{{ asset('bazu/assets/customer/recruit/therapist_img.png') }}" />
              </div>
              <div class="item_right itemTxtBox">
                <h3 class="section_title_sub textCenter jp">H子さん(23歳)の場合</h3>
                <p class="itemEx">週2 / 1日6H / 平均日給<span class="salary">30,000</span>円</p>
                <p class="textCenter itemTxt">
                  リンパさんは<span>月3回だけの出勤</span>という私のわがままをきいてくれました。<span>無理ないスケジュール</span>を組むことでサービスにも余裕が生まれ、ありがたいことに少ない出勤でも指名をいただけています。
                </p>
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
              <img src="{{ asset('bazu/assets/customer/recruit/flower_outer_01.png') }}" />
            </div>
            <div class="pointMov2">
              <img src="{{ asset('bazu/assets/customer/recruit/flower_outer_02.png') }}" />
            </div>
          </div>
          <div class="pointItemCont clearfix">
            <div class="pointItem">
              <p>
                どんなに健全でも、お給料単価が高くても、<br />
                お客様がいなければ、意味がありません。<br />
                <br />
                当店は<span class="emphasis">健全店</span>なのに、<span class="emphasis">お給料単価</span>が高く、<br />
                さらに<span>エリア屈指の集客力</span>を誇ります。<br />
                <br />
                その日の頑張りをその日のうちに実感できる。<br />
                当店は、そんな、セラピスト第一のお店を<br />
                目指しています。
              </p>
              <div class="pointMov3">
                <img src="{{ asset('bazu/assets/customer/recruit/flower_inner.png') }}" />
              </div>
              <div class="pointMov5 displayNoneMore768">
                <img src="{{ asset('bazu/assets/customer/recruit/flower_inner.png') }}" />
              </div>
            </div>
            <div class="pointMov4">
              <img src="{{ asset('bazu/assets/customer/recruit/girl01.png') }}" />
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
              リンパでは、カイロプラクティックや脱毛・エステサロン、<br />
              美容室等の各種サロンと提携しています。<br />
              エステティシャンの方に気持ちよく働いていただくため、様々な特典もご用意。<br />
              働きながらキレイになれると、みなさんにご好評いただいています。
            </p>
          </div>
          <div class="itemsPrivilege">
            <div class="itemPrivilege">
              <img src="{{ asset('bazu/assets/customer/recruit/privilege.png') }}" />
            </div>
            <div class="itemPrivilege">
              <img src="{{ asset('bazu/assets/customer/recruit/privilege.png') }}" />
            </div>
            <div class="itemPrivilege">
              <img src="{{ asset('bazu/assets/customer/recruit/privilege.png') }}" />
            </div>
          </div>
          <p class="moreTxt">さらに...</p>
          <div class="itemBanner">
            <a href="#form">
              <img src="{{ asset('bazu/assets/customer/recruit/recruit_banner.jpg') }}" />
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
            <p>リンパがお約束する6つの制度</p>
          </div>
          <ul class="coreLists">
            <li>
              <img src="{{ asset('bazu/assets/customer/recruit/core1.png') }}" />
              <p>エリアNo.1の給与体系</p>
            </li>
            <li>
              <img src="{{ asset('bazu/assets/customer/recruit/core2.png') }}" />
              <p>体験入店OK</p>
            </li>
            <li>
              <img src="{{ asset('bazu/assets/customer/recruit/core3.png') }}" />
              <p>未経験でも大丈夫</p>
            </li>
            <li>
              <img src="{{ asset('bazu/assets/customer/recruit/core4.png') }}" />
              <p>安心・安全の健全店</p>
            </li>
            <li>
              <img src="{{ asset('bazu/assets/customer/recruit/core5.png') }}" />
              <p>安心の完全時給制も</p>
            </li>
            <li>
              <img src="{{ asset('bazu/assets/customer/recruit/core6.png') }}" />
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
                <h3 class="name">はなこさん</h3>
                <p class="age">年齢：30</p>
                <p>好きなお菓子：チーズケーキ</p>
                <p>
                  働いてよかったこと：<br />
                  これまで〇〇だけではなく、都内複数のお店で働いてきましたが、 結論としては、リンパさんが一番働きやすい環境だと感じています。
                  スタッフのみなさんは本当に優しく、細かなことでも常に気にかけてくださるので、 セラピストを一番に考えている姿勢が伝わってきます。
                  そんなスタッフさんに、私はいつも頼りっぱなしですが。笑
                </p>
              </div>
              <div class="voiceMov">
                <img src="{{ asset('bazu/assets/customer/recruit/voice.png') }}" />
              </div>
            </div>
            <div class="itemVoice">
              <div class="voiceTxt">
                <h3 class="name">はなこさん</h3>
                <p class="age">年齢：30</p>
                <p>好きなお菓子：チーズケーキ</p>
                <p>
                  働いてよかったこと：<br />
                  これまで〇〇だけではなく、都内複数のお店で働いてきましたが、 結論としては、リンパさんが一番働きやすい環境だと感じています。
                  スタッフのみなさんは本当に優しく、細かなことでも常に気にかけてくださるので、 セラピストを一番に考えている姿勢が伝わってきます。
                  そんなスタッフさんに、私はいつも頼りっぱなしですが。笑
                </p>
              </div>
              <div class="voiceMov">
                <img src="{{ asset('bazu/assets/customer/recruit/voice.png') }}" />
              </div>
            </div>
            <div class="itemVoice">
              <div class="voiceTxt">
                <h3 class="name">はなこさん</h3>
                <p class="age">年齢：30</p>
                <p>好きなお菓子：チーズケーキ</p>
                <p>
                  働いてよかったこと：<br />
                  これまで〇〇だけではなく、都内複数のお店で働いてきましたが、 結論としては、リンパさんが一番働きやすい環境だと感じています。
                  スタッフのみなさんは本当に優しく、細かなことでも常に気にかけてくださるので、 セラピストを一番に考えている姿勢が伝わってきます。
                  そんなスタッフさんに、私はいつも頼りっぱなしですが。笑
                </p>
              </div>
              <div class="voiceMov">
                <img src="{{ asset('bazu/assets/customer/recruit/voice.png') }}" />
              </div>
            </div>
            <div class="itemVoice">
              <div class="voiceTxt">
                <h3 class="name">はなこさん</h3>
                <p class="age">年齢：30</p>
                <p>好きなお菓子：チーズケーキ</p>
                <p>
                  働いてよかったこと：<br />
                  これまで〇〇だけではなく、都内複数のお店で働いてきましたが、 結論としては、リンパさんが一番働きやすい環境だと感じています。
                  スタッフのみなさんは本当に優しく、細かなことでも常に気にかけてくださるので、 セラピストを一番に考えている姿勢が伝わってきます。
                  そんなスタッフさんに、私はいつも頼りっぱなしですが。笑
                </p>
              </div>
              <div class="voiceMov">
                <img src="{{ asset('bazu/assets/customer/recruit/voice.png') }}" />
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
                  <td>リラクゼーション、アロマトリートメント業務<br />性的なサービスは一切ございません。</td>
                </tr>
                <tr>
                  <th class="arrow_box">勤務日数</th>
                  <td>
                    完全自由出勤制<br />
                    10:00～翌5:00の間で希望シフト制<br />
                    【自分の生活スタイルに合わせて働けます】<br />
                    週1日　1日4時間以上の勤務～OK<br />
                    Wワーク・かけもちOK（風俗店とのかけもちは不可）<br />
                    土日祝のみOK<br />
                  </td>
                </tr>
                <tr>
                  <th>応募資格</th>
                  <td>
                    22～40歳位の女性の方<br />
                    未経験者大歓迎、経験者優遇<br />
                    ブランクのある方も大歓迎<br />
                    既婚者OK<br />
                  </td>
                </tr>
                <tr>
                  <th>勤務地</th>
                  <td>
                    大阪府大阪市〇〇<br />
                    〇〇駅北口徒歩1分<br />
                  </td>
                </tr>
                <tr>
                  <th>給与</th>
                  <td>
                    完全日払い制<br />
                    歩合55％〜<br />
                    <br />
                    90分の歩合 ￥8,000<br />
                    120分の歩合 ￥11,000<br />
                    150分の歩合 ￥14,000<br />
                    180分の歩合 ￥17,000<br />
                    指名料は全額バックいたします。<br />
                    その他本指名数に応じてボーナス支給！<br />
                    <br />
                    ※ 上記の歩合額は最低歩合となります。<br />
                    月の指名本数によって歩合が上がる制度となります<br />
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
            <form class="webFromViewForm" id="new_recruit_inquiry" action="https://www.リンパ.com/recruit/confirm" accept-charset="UTF-8" method="post">
              <input name="utf8" type="hidden" value="&#x2713;" /><input
                type="hidden"
                name="authenticity_token"
                value="QDzbBscXhXOw9Zt4KSFf82+QhyALk5045SyI9v1YVLU360rhtxi8CEIBXfqPaxVKwRggiycI8tlR34HrFQRF0A=="
              />
              <div class="item">
                <div class="itemLabel">
                  <label>お名前<span class="required">必須</span> </label>
                </div>
                <div class="itemParts">
                  <input required="required" class="txt" type="text" name="recruit_inquiry[name]" id="recruit_inquiry_name" />
                </div>
              </div>
              <div class="item">
                <div class="itemLabel">
                  <label>メールアドレス<span class="required">必須</span> </label>
                </div>
                <div class="itemParts">
                  <input required="required" class="txt" type="text" name="recruit_inquiry[email]" id="recruit_inquiry_email" />
                </div>
              </div>
              <div class="item">
                <div class="itemLabel">
                  <label>お電話番号<span class="required">必須</span> </label>
                </div>
                <div class="itemParts">
                  <input required="required" class="txt" type="tel" name="recruit_inquiry[phone_number]" id="recruit_inquiry_phone_number" />
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
              <div class="item_button">
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
            <a target="_blank" alt="サンプルエステ　リンパ　LINE" href="https://line.me/">
              <img src="{{ asset('bazu/assets/customer/banner_sm.jpg') }}" />
              <div class="lineQrCode">
                <img src="https://s3-ap-northeast-1.amazonaws.com/リンパ-bucket-prod/uploads/lien_info/qr_code_image/22/8cc743b6-1e16-44a0-ba32-a4f61dc4934c.png" />
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
              <div class="iconQA"><img src="{{ asset('bazu/assets/customer/recruit/faq.png') }}" /></div>
              <div class="itemTxt">
                <p class="head">お仕事内容をおしえてください。</p>
                <p class="detail">アロマオイルを使用したトリートメントをおこないます。風俗店ではありませんので性的サービスは一切ありません。</p>
              </div>
            </div>
            <div class="item">
              <div class="iconQA"><img src="{{ asset('bazu/assets/customer/recruit/faq.png') }}" /></div>
              <div class="itemTxt">
                <p class="head">マッサージ経験のない普通の女の子でも大丈夫でしょうか。</p>
                <p class="detail">
                  もちろん未経験でも問題なく勤務可能です。<br />
                  施術だけではなく、接客や雰囲気づくりといった細かい部分まで、 他店とは違い、しっかりとした講習を受けることができる環境がありますのでご安心ください。
                </p>
              </div>
            </div>
            <div class="item">
              <div class="iconQA"><img src="{{ asset('bazu/assets/customer/recruit/faq.png') }}" /></div>
              <div class="itemTxt">
                <p class="head">講習の内容はどういったものですか？</p>
                <p class="detail">女性トレーナーによる実践的な講習を実施しております。 もちろん、<b>男性スタッフによるセクハラ講習などは一切ございません。</b></p>
              </div>
            </div>
            <div class="item">
              <div class="iconQA"><img src="{{ asset('bazu/assets/customer/recruit/faq.png') }}" /></div>
              <div class="itemTxt">
                <p class="head">女性同士の派閥とかはありませんか？</p>
                <p class="detail">
                  ご安心ください。当店は完全な個室の店舗となりますのでお客様以外、受付スタッフとも 顔を合わせることはありません。プライバシーを重視させていただいております。
                </p>
              </div>
            </div>
            <div class="item">
              <div class="iconQA"><img src="{{ asset('bazu/assets/customer/recruit/faq.png') }}" /></div>
              <div class="itemTxt">
                <p class="head">ノルマや罰金はありますか？</p>
                <p class="detail">もちろん一切ございません。罰金制度等もございませんので安心してお仕事していただけます。</p>
              </div>
            </div>
            <div class="item">
              <div class="iconQA"><img src="{{ asset('bazu/assets/customer/recruit/faq.png') }}" /></div>
              <div class="itemTxt">
                <p class="head">お休みは自由に取れますか？</p>
                <p class="detail">自由にシフトを出していただいておりますので、お仕事したいときにしていただき、お休みしたいときにお休みください。</p>
              </div>
            </div>
            <div class="item">
              <div class="iconQA"><img src="{{ asset('bazu/assets/customer/recruit/faq.png') }}" /></div>
              <div class="itemTxt">
                <p class="head">研修費用はかかりますか？</p>
                <p class="detail">
                  研修費用は無料です。場所は当サロンで行います。 ご不安な場合は何回でも無料で講習を行いますし、ご希望の方は外部研修を受講していただくことも可能です。
                </p>
              </div>
            </div>
            <div class="item">
              <div class="iconQA"><img src="{{ asset('bazu/assets/customer/recruit/faq.png') }}" /></div>
              <div class="itemTxt">
                <p class="head">マイナンバーが心配なのですが？</p>
                <p class="detail">当店には顧問税理士が万全のサポートをしていますのでご安心ください。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /======== faqView ======== -->
    </main>
    <!-- ======== /main ======== -->
    <!-- ======== footer ======== -->
    @include('frontend.sections.footer')
    <!-- ======== /footer ======== -->

