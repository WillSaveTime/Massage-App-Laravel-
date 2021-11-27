<nav class="navPc displayNoneLess1023">
    <ul class="navItems clearfix" id="navItemsPc">
        <li class="display-inline-block navItem riseFadeJs">
        <a class="isCurrent" href="{{ route('index') }}">
            HOME<br />
            <small>ホーム</small>
        </a>
        </li>
        <li class="display-inline-block navItem">
        <a class="isCurrent" href="{{ route('system') }}">
            SYSTEM<br />
            <small>システム</small>
        </a>
        </li>
        <li class="display-inline-block navItem riseFadeJs">
        <a class="isCurrent" href="{{ route('schedule') }}">
            SCHEDULE<br />
            <small>スケジュール</small>
        </a>
        </li>
        <li class="display-inline-block navItem riseFadeJs">
        <a class="isCurrent" href="{{ route('therapist') }}">
            THERAPIST<br />
            <small>セラピスト</small>
        </a>
        </li>
        <li class="display-inline-block navItem riseFadeJs">
        <a class="isCurrent" href="{{ route('reservation') }}">
            RESERVATION<br />
            <small>予約</small>
        </a>
        </li>
        <li class="display-inline-block navItem riseFadeJs">
        <a class="isCurrent" href="{{ route('access') }}">
            ACCESS<br />
            <small>アクセス</small>
        </a>
        </li>
        <li class="display-inline-block navItem riseFadeJs">
        <a class="isCurrent" href="{{ route('recruit') }}">
            RECRUIT<br />
            <small>求人</small>
        </a>
        </li>
    </ul>
    </nav>

    <nav id="navJs" class="navSpTb displayNoneMore1023">
    <ul class="navItems">
        <li class="display-block navItem riseFadeJs">
        <a class="isCurrent" href="{{ route('index') }}">
            HOME<br />
            <small>ホーム</small>
        </a>
        </li>
        <li class="display-block navItem riseFadeJs">
        <a class="isCurrent" href="{{ route('system') }}">
            SYSTEM<br />
            <small>システム</small>
        </a>
        </li>
        <li class="display-block navItem riseFadeJs">
        <a class="isCurrent" href="{{ route('schedule') }}">
            SCHEDULE<br />
            <small>スケジュール</small>
        </a>
        </li>
        <li class="display-block navItem riseFadeJs">
        <a class="isCurrent" href="{{ route('therapist') }}">
            THERAPIST<br />
            <small>セラピスト</small>
        </a>
        </li>
        <li class="display-block navItem riseFadeJs">
        <a class="isCurrent" href="{{ route('reservation') }}">
            RESERVATION<br />
            <small>予約</small>
        </a>
        </li>
        <li class="display-block navItem riseFadeJs">
        <a class="isCurrent" href="{{ route('access') }}">
            ACCESS<br />
            <small>アクセス</small>
        </a>
        </li>
        <li class="display-block navItem riseFadeJs">
        <a class="isCurrent" href="{{ route('recruit') }}">
            RECRUIT<br />
            <small>求人</small>
        </a>
        </li>
    </ul>

    <div class="navInfo riseFadeJs">
        <p>営業情報</p>
        <a onclick='gtag("event", "tel", { "event_category": "cv", "event_label": "telclick", "value": 1 });'
        alt="09000000000" href="tel:09000000000">
        <p class="timeAndTel">
            <span class="icon"><img class="" src="{{ asset('bazu/assets/customer/clock_gold.png') }}" /></span>
            10:00~05:00
        </p>
        <p class="timeAndTel">
            <span class="icon"><img class="" src="{{ asset('bazu/assets/customer/tel_gold.png') }}" /></span>
            09000000000
        </p>
        </a>
    </div>
</nav>