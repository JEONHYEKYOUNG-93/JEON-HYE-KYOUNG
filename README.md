<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=1200, initial-scale=1.0, user-scalable=0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta content="noindex" name="robots" />
	<meta name="description" content="한섬 EQL">
	<meta property="og:locale:alternate" content="ko_KR">
	<meta property="og:title" content="한섬 EQL">
	<meta property="og:url" content="https://www.thehandsome.com/">
	<meta property="og:type" content="website">
	<meta property="og:image" content="/resources/images/favicon/share.png">
	<meta property="og:site_name" content="한섬 EQL">
	<meta property="og:description" content="">
	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="한섬 EQL">
	<meta name="twitter:url" content="https://www.thehandsome.com/">
	<meta name="twitter:image" content="/resources/images/favicon/share.png">
	<meta name="twitter:description" content="">
	<meta name="format-detection" content="telephone=no, address=no, email=no">
	<title>한섬 EQL</title>

	<link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="180x180" href="/resources/images/favicon/apple-touch-icon-180x180-precomposed.png">
	<link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="167x167" href="/resources/images/favicon/apple-touch-icon-167x167-precomposed.png">
	<link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="152x152" href="/resources/images/favicon/apple-touch-icon-152x152-precomposed.png">
	<link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="144x144" href="/resources/images/favicon/apple-touch-icon-144x144-precomposed.png">
	<link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="120x120" href="/resources/images/favicon/apple-touch-icon-120x120-precomposed.png">
	<link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="114x114" href="/resources/images/favicon/apple-touch-icon-114x114-precomposed.png">
	<link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="76x76" href="/resources/images/favicon/apple-touch-icon-76x76-precomposed.png">
	<link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="72x72" href="/resources/images/favicon/apple-touch-icon-72x72-precomposed.png">
	<link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="60x60" href="/resources/images/favicon/apple-touch-icon-60x60-precomposed.png">
	<link rel="apple-touch-icon-precomposed" href="/resources/images/favicon/apple-touch-icon-57x57-precomposed.png">

	<link rel="shortcut icon" sizes="256x256" href="/resources/images/favicon/favicon_256x256.png">
	<link rel="shortcut icon" sizes="196x196" href="/resources/images/favicon/favicon_196x196.png">
	<link rel="shortcut icon" sizes="128x128" href="/resources/images/favicon/favicon_128x128.png">
	<link rel="shortcut icon" sizes="48x48" href="/resources/images/favicon/favicon_48x48.png">
	<link rel="shortcut icon" sizes="32x32" href="/resources/images/favicon/favicon_32x32.png">
	<link rel="shortcut icon" href="/resources/images/favicon/favicon_16x16.png">

	<link rel="icon" sizes="128x128" href="/resources/images/favicon/favicon_128x128.png" type="image/png">
	<link rel="icon" sizes="64x64" href="/resources/images/favicon/favicon_64x64.png" type="image/png">
	<link rel="icon" sizes="32x32" href="/resources/images/favicon/favicon_32x32.png" type="image/png">

	<meta name="msapplication-TileImage" content="/resources/images/favicon/apple-touch-icon-144x144-precomposed.png">
	<meta name="msapplication-TileColor" content="#222222">

	<script src="https://code.jquery.com/jquery-3.6.1.js"></script> <!-- jQuery CDN -->
	<style>
		/* * { box-sizing:border-box; margin:0; padding:0; }
		*::before, *::after { box-sizing:border-box; } */
		html, body { width:100%; height:100%; }
		html { font-size:100%; font-family:''; }
		.h1-wrap { max-width:1200px; margin-right:auto; margin-left:auto; }
		.h2-wrap { max-width:1200px; margin-right:auto; margin-left:auto; }
		.component-area { _max-width:1200px; margin:2em auto 3em; }
		.component-description { max-width:1200px; margin:0 auto 5em; }
		.component-content {}
	</style>
</head>
<body>
<div class="wrap">
	<main class="component-wrap">
		<div class="h1-wrap">
			<h1>컴포넌트</h1>
		</div>

		<section class="component-area">
			<div class="h2-wrap">
				<h2>탭</h2>
			</div>
			<div class="component-description"></div>
			<div class="component-content">

				<style>
					/* S: 탭메뉴 */
					.tab-menu { position:relative; }
					.tab-menu .inner { position:relative; top:0; left:0; width:100%;  background-color:#222; }
					.tab-menu .inner ul { display:flex; max-width:1200px; margin:0 auto; padding:0; list-style:none; }
					.tab-menu .inner ul li { flex:0 0 33.333%; }
					.tab-menu .inner ul li .btn-tab { display:inline-flex; justify-content:center; align-items:center; width:100%; height:60px; background-color:#222; font-size:1rem; color:#fff; text-decoration:none; }
					.tab-menu .inner ul li.is-active .btn-tab { background-color:#999; font-weight:700; }
					.tab-container .tab-content { display:none; max-width:1200px; min-height:250px; margin:0 auto; padding-top:50px; }
					.tab-container .tab-content:nth-child(1) { background-color:#fdb7ba; }
					.tab-container .tab-content:nth-child(2) { background-color:#a9a0fc; }
					.tab-container .tab-content:nth-child(3) { background-color:#cfc3b5; }

					/* 탭 상태값 */
					.tab-container .tab-content.is-active { display:block; }
					/* .top-fixed-mneu.is-fixed .inner { position:fixed; } */
					/* E: 탭메뉴 */
				</style>
				<div style="height:15vh;"></div>
				<div class="tab-box">
					<div class="tab-menu">
						<div class="inner">
							<ul>
								<li class="is-active">
									<a href="#tap-menu01" class="btn-tab">메뉴1</a>
								</li>
								<li>
									<a href="#tap-menu02" class="btn-tab">메뉴2</a>
								</li>
								<li>
									<a href="#tap-menu03" class="btn-tab">메뉴3</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="tab-container">
						<div id="tap-menu01" class="tab-content is-active">탭 콘텐트1</div>
						<div id="tap-menu02" class="tab-content">탭 콘텐트2</div>
						<div id="tap-menu03" class="tab-content">탭 콘텐트3</div>
					</div>
				</div>
				<div style="height:50vh;"></div>
				<script>
					/*
					 * 탭메뉴의 li를 클릭하면 클릭한 li가 선택되고 나머지 li는 초기화 된다. 
					 * 클릭한 탭메뉴 li가 첫번째면 첫번째 탭 콘텐트, 두번째면 두번째 탭 콘텐트... 가 보여지고 나머지 탭 콘텐트를 초기화 된다.
					**/
					$(function() {

						$('.tab-menu ul li').on('click', function(e) { // $('.tab-menu ul li') 셀렉터, 를 클릭하면
							e.preventDefault(); // 기본동작 초기화.
							const tabIndex = $(this).index(); // 클릭한 자신의 인덱스 번호를 구해서 변수에 넣는다.
							$(this).addClass('is-active'); // 클릭한 자신에 is-acitve 클래스를 부여한다.
							$(this).siblings().removeClass('is-active'); // 클릭한 자신의 형제요소들에 is-acitve 클래스를 제거한다.

							$('.tab-container .tab-content').removeClass('is-active'); // $('.tab-container .tab-content') 셀렉터에 is-active 클래스를 제거한다.
							$('.tab-container .tab-content').eq(tabIndex).addClass('is-active');// $('.tab-container .tab-content') 셀렉터에 tabIndex 변수에 들어있는 인덱스 번호 번째에 is-active 클래스를 부여한다.
						});

						// $('.tab-menu ul li').on('click', function(e) {
						// 	e.preventDefault();
						// 	const tabTarget = $(this).children().attr('href'); // 변수에 클릭한 대상의 자식 a 태그의 id 값을 저장한다.
						// 	$(this).addClass('is-active').siblings().removeClass('is-active'); // 클릭한 자신 요소에 is-active 클래스를 부여하고 형제 요소에 is-active를 제거한다.

						// 	$('.tab-container .tab-content').removeClass('is-active');// $('.tab-container .tab-content') 셀렉터에 is-active 클래스를 제거한다.
						// 	$(tabTarget).addClass('is-active'); // tabTarget 변수에 있는 값의 요소를 선택하여 is-active 클래스를 부여한다.
						// });

					});
				</script>

			</div>
		</section>

		<section class="component-area">
			<div class="h2-wrap">
				<h2>스와이퍼(슬라이드)</h2>
			</div>
			<div class="component-description">
				<blockquote>
					<p>스와이퍼 같은 라이브러리를 사용하기 위해선 라이브러리 소스를 꼭 불러와야 함.</p>
					<a href="https://swiperjs.com/">스와이퍼 홈페이지</a>
					<p>Get Started, API, Demos에 기본적인 사용방법이 나와 있어요. 한글로 검색해도 검색결과 많이 나와요.</p>
				</blockquote>
			</div>
			<div class="component-content">

				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.css" /> <!-- 스와이퍼 라이브러리 소스 -->
				<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.js"></script> <!-- 스와이퍼 라이브러리 소스 -->
				<style>
					.swiper { width:960px; margin:0 auto; }
				</style>
				<div class="swiper mySwiper">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<img src="https://cdn.eqlstore.com/display/category/THM/A02/A01/contents/28_121113_1_KOR_20220812141103.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="https://cdn.eqlstore.com/display/category/THM/A02/A01/contents/28_31056_1_KOR_20220811091724.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="https://cdn.eqlstore.com/display/category/THM/A02/A01/contents/28_121113_1_KOR_20220812141103.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="https://cdn.eqlstore.com/display/category/THM/A02/A01/contents/28_31056_1_KOR_20220811091724.jpg" alt="">
						</div>
					</div>
					<!-- Swiper Button -->
					<div class="swiper-button-next"></div>
      				<div class="swiper-button-prev"></div>
					<!-- Swiper Pagination -->
					<div class="swiper-pagination"></div>
				</div>
				<script>
					$(function() {
						const swiper = new Swiper('.mySwiper', {
							init: true,
							speed: 600,
							navigation: {
								nextEl: ".swiper-button-next",
								prevEl: ".swiper-button-prev",
							},
							pagination: {
								el: '.swiper-pagination',
							},
							autoplay: {
								delay: 2500,
								autoplayDisableOnInteraction: true,// 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
								disableOnInteraction: false,//180911 스와이핑 후에도 자동 롤링 되도록 추가
							},
							touchStartPreventDefault: true, // 피씨에서 마우스다운, 업 이벤트가 가능하도록 해줌. true이면 스와이퍼의 이벤트와 혼동이 되지 않도록 다른 이벤트를 막는거 같다.
							touchRatio: 1, // 터치의 비율을 조절한다. 커질수록 슬라이드를 넘길때 필요한 터치 동작이 줄어든다. 0이면 터치가 안된다.
							allowTouchMove: true, // false일 경우 슬라이드를 돌아가게 하기 위해서는 slidePrev 또는 slideNext와 같은 외부 API 함수를 사용해야 한다.
						});
					});
				</script>

			</div>
		</section>

		<div class="component-area">
			<div class="h2-wrap">
				<h2>아코디언</h2>
			</div>
			<div class="component-description"></div>
			<div class="component-content">
				
				<style>
					.accordion { max-width:1200px; margin:0 auto; }
					.accordion-head { display:flex; justify-content:space-between; align-items:center; height:auto; padding:12px 15px; border:1px solid #000; cursor:pointer; }
					.accordion-title { font-size:1rem; }
					.accordion-body { overflow:hidden; height:0; }

					/* 아코디언 상태값 */
					.accordion.is-expanded .accordion-body { height:auto; }
				</style>
				<div class="accordion is-expanded">
					<div class="accordion-head">
						<div>
							<div class="accordion-title">아코디언 메뉴명</div>
						</div>
						<div>
							아이콘 등등
						</div>
					</div>
					<div class="accordion-body">
						<div style="background-color:tomato;">
							<p>내용이 어쩌구 저쩌구</p>
							<p>내용이 어쩌구 저쩌구</p>
							<p>내용이 어쩌구 저쩌구</p>
							<p>내용이 어쩌구 저쩌구</p>
							<p>내용이 어쩌구 저쩌구</p>
							<p>내용이 어쩌구 저쩌구</p>
							<br>
							<p>내용이 어쩌구 저쩌구</p>
							<p>내용이 어쩌구 저쩌구</p>
							<p>내용이 어쩌구 저쩌구</p>
							<p>내용이 어쩌구 저쩌구</p>
							<p>내용이 어쩌구 저쩌구</p>
							<p>내용이 어쩌구 저쩌구</p>
						</div>
					</div>
				</div>
				<script>
					$(function() {
						$('.accordion-head').on('click', function(e) {
							$(this).closest('.accordion').toggleClass('is-expanded');
						});
					});
				</script>

			</div>
		</div>


		<div class="component-area">
			<div class="h2-wrap">
				<h2>컴포넌트 이름</h2>
			</div>
			<div class="component-description">
				컴포넌트 설명
			</div>
			<div class="component-content">
				컴포넌트 스타일, 마크업, 스크립트
			</div>
		</div>
	</main>
</div>
</body>
</html>
