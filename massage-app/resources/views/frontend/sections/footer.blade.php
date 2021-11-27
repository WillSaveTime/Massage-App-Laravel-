    <footer class="priority">
        <div class="scrollUp">
            <a href="#scrollTopPoint" class="pageLink">
            <i class="scrollUpIcon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
                x="0px" y="0px" width="512px" height="512px" viewBox="0 0 284.929 284.929"
                style="enable-background: new 0 0 284.929 284.929" xml:space="preserve">
                <path
                    d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285   C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854   c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848   c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566   C284.929,199.378,283.984,197.188,282.082,195.285z"
                    fill="#FFFFFF" />
                </svg>
            </i>
            </a>
        </div>
        <div class="footerCont cont clearfix">
            <div class="footerTop">
            <div class="footerNav">
                <ul>
                <li class="display-inline-block">
                    <a href="{{ route('index') }}"> HOME </a>
                </li>
                <li class="display-inline-block">
                    <a href="{{ route('system') }}"> SYSTEM </a>
                </li>
                <li class="display-inline-block">
                    <a href="{{ route('schedule') }}"> SCHEDULE </a>
                </li>
                <li class="display-inline-block">
                    <a href="{{ route('therapist') }}"> THERAPIST </a>
                </li>
                <li class="display-inline-block">
                    <a href="{{ route('reservation') }}"> RESERVATION </a>
                </li>
                <li class="display-inline-block">
                    <a href="{{ route('access') }}"> ACCESS </a>
                </li>
                <li class="display-inline-block">
                    <a href="{{ route('recruit') }}"> RECRUIT </a>
                </li>
                <li class="display-inline-block">
                    <a href="{{ route('policy') }}"> POLICY </a>
                </li>
                <li>
                    <a target="_blank" alt="Twitter" href="https://twitter.com/"> <i class="fab fa-twitter"
                        aria-hidden="true"></i>TWITTER<br /> </a>
                </li>
                <li>
                    <a target="_blank" alt="LINE" href="https://line.me/"> <i class="fab fa-line"
                        aria-hidden="true"></i>LINE<br /> </a>
                </li>
                <li class="display-inline-block">
                    <a href="{{ route('link') }}"> <i class="fas fa-external-link-alt"></i>外部リンク</a>
                </li>
                </ul>
            </div>
            </div>
            <div class="footerBottom clearfix">
            <div class="footerLogo">
                <a href="{{ route('index') }}" class="logoLink">
                <img class="logo" alt="ロゴ" src="{{ asset('bazu/assets/customer/logo.png') }}" />
                <span></span>
                </a>
            </div>
            <div class="footerText">
                <p>サンプルエステサイト は、女性セラピストのクオリティや、 独自のマッサージ法も導入し、全てのお客様に満足頂けるよう細部までこだわり運営しております。</p>
            </div>
            <div class="footerInfo displayNoneLess768">
                <a onclick='gtag("event", "tel", { "event_category": "cv", "event_label": "telclick", "value": 1 });'
                alt="09000000000" href="tel:09000000000">
                <p>
                    <span class="icon"><img class="" src="{{ asset('bazu/assets/customer/tel_white.png') }}" /></span>
                    09000000000
                    <span class="icon"><img class="" src="{{ asset('bazu/assets/customer/clock_white.png') }}" /></span>
                    10:00~05:00
                </p>
                </a>
            </div>
            </div>
            <div class="footerCopyright">
            <p>© サンプルエステ</p>
            </div>
            <div class="footerProvided">
            <a href="#" target="_blank">Provided by エステ ホームページ制作企画</a>
            </div>
        </div>
        <div class="footerFixedBtn displayNoneMore1023">
            <ul>
            <li>
                <a onclick='gtag("event", "tel", { "event_category": "cv", "event_label": "telclick", "value": 1 });'
                alt="09000000000" href="tel:09000000000">
                <i class="fas fa-mobile-alt"></i><br />
                お電話
                </a>
            </li>
            <li>
                <a alt="webで予約" href="{{ route('reservation') }}">
                <i class="fas fa-edit"></i><br />
                WEB
                </a>
            </li>
            <li>
                <a target="_blank" alt="LINE" href="https://line.me/">
                <i class="fab fa-line"></i><br />
                LINE
                </a>
            </li>
            <li>
                <a href="#scrollTopPoint" class="pageLink">
                <i class="fas fa-angle-double-up"></i><br />
                トップへ
                </a>
            </li>
            </ul>
        </div>
    </footer>

</body>

</html>