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

<!-- ======== courseView ======== -->
<section class="display-block courseView clearfix pdTop140 pdBottom50 m-pdTop50 m-pdBottom30">
  <div class="twoColorBackGround"></div>
  <div class="courseViewCont cont">
    <div class="sectionTitle sectionTitleLine textCenter">
      <h2 class="sectionTitleTop">COURSE</h2>
    </div>
    <div class="sectionDesc textCenter">
      <p>コース</p>
    </div>
    <div class="itemList clearfix">
    <div class="display-block item option fadein">
  <div class="itemName">
    <h4>Option</h4>
  </div>
  <div class="itemDesc textCenter740">
    <p>当店は、料金内でしっかりと施術させて頂いておりますので、特別なオプションはございません。
疑問点や質問がございましたら、お気軽にお申し付けください。</p>
  </div>
  <table class="itemTable">
    <tbody>
      <tr>
        <th>
          <span>入会金</span>
        </th>
        <td>1,000円</td>
      </tr>
      <tr>
        <th>
          <span>指名料</span>
        </th>
        <td>2,000円</td>
      </tr>
      <tr>
        <th>
          <span>パウダー</span>
        </th>
        <td>無料</td>
      </tr>
    </tbody>
  </table>
</div>


      <!-- ======== course1 ======== -->
      <div class="item fadein scrollin">
        <div class="itemName">
          <h4>シングルセラピストコース</h4>
        </div>
        <div class="itemDesc textCenter740">
          <p>
            当店セラピストが一人で行う施術になります。
            全在籍セラピストがご対応させて頂くコースになります。
            120分コースからですと、セラピスト独自の施術も加わります。

            お好きなだけ、おくつろぎ下さい。
          </p>
        </div>
        <table class="itemTable">
          <tbody>
              <tr>
                <th>
                  <span>90分</span>
                </th>
                <td>15,000円</td>
              </tr>
              <tr>
                <th>
                  <span class="emphasis">1番人気!</span><br>
                  <span>120分</span>
                </th>
                <td><br>20,000円</td>
              </tr>
              <tr>
                <th>
                  <span>150分</span>
                </th>
                <td>25,000円</td>
              </tr>
              <tr>
                <th>
                  <span>180分</span>
                </th>
                <td>30,000円</td>
              </tr>
              <tr>
                <th>
                  <span>延長30分</span>
                </th>
                <td>6,000円</td>
              </tr>
          </tbody>
        </table>
      </div>


      <!-- ======== course2 ======== -->
      <!-- <div class="item fadein scrollin">
        <div class="itemName">
          <h4>ボディードレッシングコース</h4>
        </div>
        <div class="itemDesc textCenter740">
          <p>
            在籍セラピストのうち、一定数のお客様から支持を得たセラピストのみご対応させて頂く会員様限定のコースになります。
            より高みのクオリティーをお客様にご提供させて頂けるよう、日々進化し続けるバズーカだからこそできるコースです。
            施術内容は全て各セラピストが独自に考え、試行錯誤された内容となっております。
          </p>
        </div>
        <table class="itemTable">
          <tbody>
              <tr>
                <th>
                  <span>70分</span>
                </th>
                <td>14,000円</td>
              </tr>
              <tr>
                <th>
                  <span>100分</span>
                </th>
                <td>20,000円</td>
              </tr>
              <tr>
                <th>
                  <span>130分</span>
                </th>
                <td>26,000円</td>
              </tr>
              <tr>
                <th>
                  <span>160分</span>
                </th>
                <td>32,000円</td>
              </tr>
              <tr>
                <th>
                  <span>延長30分</span>
                </th>
                <td>8,000円</td>
              </tr>
          </tbody>
        </table>
      </div> -->


      <!-- ======== course3 ======== -->
      <div class="item fadein scrollin">
        <div class="itemName">
          <h4>ダブルセラピストコース</h4>
        </div>
        <div class="itemDesc textCenter740">
          <p>
            2名のセラピストが同時にご接客させて頂くコースとなっております。
            セラピスト同士の相性を考慮ししたうえで、息の合ったリンパドレナージュです。
            1人では体感できない、未知な新体験をお届けします。
          </p>
        </div>
        <table class="itemTable">
          <tbody>
              <tr>
                <th>
                  <span>100分</span>
                </th>
                <td>32,000円</td>
              </tr>
              <tr>
                <th>
                  <span>延長30分</span>
                </th>
                <td>8,000円</td>
              </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</section><!-- ======== /courseView ======== -->

<!-- ======== systemPolicyView ======== -->
<section class="display-block systemPolicyView pdTop50 m-pdTop30 pdBottom50">
  <div class="systemPolicyViewCont cont">
    <div class="sectionTitle sectionTitleLine textCenter">
      <h2 class="sectionTitleTop">POLICY</h2>
    </div>
    <div class="sectionDesc textCenter">
      <p>利用規約</p>
    </div>
    <div class="policyList clearfix">
      <div class="item fadein">
        <div class="itemCont">
          <label>禁止事項</label>
          <p>●無理なサービスの要求・強制。<br />
●各種カメラ機器による盗撮・盗聴などの行為。<br />
●女の子への脅迫、暴力をふるうなどの嫌がる行為。<br />
●サービス時間以外のお誘い・拘束行為。<br />
●薬物を服用、もしくは女の子への強要行為。<br />
●スカウト行為。</p>

<p>上記の禁止事項にあてはまると当方が判断した場合ただちにサービス中止とさせて頂きます。<br />
その場合返金には一切応じかねますので、あらかじめご了承ください。<br />
尚、悪質と判断した場合は所轄の警察に通報の上、以降一切の利用をお断りいたします。</p>

<p>◆携帯電話の番号・メールアドレス等の個人情報の交換。<br />
◆その他当店が不適切と判断した方。</p>

<p>※上記該当事項によって生じた損害は賠償請求させていただきます。</p>

        </div>
      </div>
      <div class="item fadein">
        <div class="itemCont">
          <label>利用規約</label>
          <p>下記に該当する方のご利用はご遠慮ください。</p>

<p>●風俗店ではございませんので、性的サービスを求められる方はお断りさせていただきます。<br />
●感染症の疑いがある方はお断りさせて頂く場合があります。<br />
●暴力団関係者またはそれに準ずる方。<br />
●同業者またはスカウトマンの方。<br />
●泥酔されている方。<br />
●法律で禁止されている薬物を使用されている方。<br />
●不衛生な方、又はそう受け取られる方。</p>

        </div>
      </div>
      <div class="item fadein">
        <div class="itemCont">
          <label> プライバシーポリシー</label>
          <p>池袋のメンズエステ bazu-ca（バズーカ）（以下当店）の個人情報取扱指針に基づき、細心の注意をもってお取り扱いいたします。<br />
また、当指針は今後、適宜改善をしながら充実を図ります。</p>

<p>&nbsp;</p>

<p>個人情報は第三者に開示いたしません</p>

<p>当店では、ご本人様の同意を得ている場合、法令に基づく場合を除き、取得した個人情報を第三者に開示いたしません。決済や商品の配送などが必要な場合。これら委託先については、個人情報の保護管理運営において十分に信用が置ける企業に限定し適切に管理・運営を実施いたします。</p>

<p>&nbsp;</p>

<p>個人情報は厳重に管理いたします</p>

<p>当店では、その管理下にある個人情報の紛失・誤用・改変を防止するために厳重なセキュリティ対策を実施しています。個人情報は一般の利用者がアクセスできない安全な環境下に保管しています。</p>

<p>&nbsp;</p>

<p>個人情報の利用目的について</p>

<p>当店では、個人情報を取得の際に示した利用目的及びサービス提供に必要な範囲内で利用致します。<br />
あらかじめご本人の同意を得た場所及び法令で定められた場所を除き、その他の目的の為に利用致しません。</p>

<p>&nbsp;</p>

<p>登録情報の変更・訂正・削除の対応</p>

<p>当店では、お客様の個人情報をできるだけ正確かつ最新の内容で管理します。<br />
お客様からお申し出があった時はご本人様確認後登録情報の開示を行います。<br />
また、お申し出があった時はご本人様確認後登録情報の追加・変更・訂正または削除を行います。</p>

<p>&nbsp;</p>

<p>免責事由</p>

<p>当サイトをご閲覧の際には、以下の免責条項を必ずお読み下さい。<br />
当サイトのコンテンツをご利用された場合には以下の各規定をご承諾頂いたものとみなします。</p>

<p>●当店は、当サイトのコンテンツ利用から生じる損害については一切責任を負いません。<br />
●当店への事前の通知の有無にかかわらず、当サイトへのアクセスにより生じた損害、または当サイトの電子ファイルないしウイルス等の損害について、当店は一切責任を負いません。<br />
●当サイトのコンテンツを構成する各情報は掲載時点における情報であり、その正確性・最新性の保持に努めてはおりますがこれを保証するものではありません。<br />
●第三者が当サイトにリンクを張っている場合、当店は当該第三者のサイトに関知もしくはこれを管理するものではなく、いかなる保証も責任も負いません。</p>

<p>&nbsp;</p>

<p>サイト運営者情報</p>

<p>池袋のメンズエステ bazu-ca（バズーカ）</p>

<p>TEL:090-9398-5482</p>

        </div>
      </div>
    </div>
  </div>
</section><!-- ======== /systemPolicyView ======== -->

@include('frontend.sections.footer')