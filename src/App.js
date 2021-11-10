import './assets/css/main.css';
import imagem from "./images/pic01.jpg";
import imagem2 from "./images/pic02.jpg";




function App() {
return (
    <div className="App">

    <meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>

			<div id="wrapper" class="fade-in">

					<div id="intro">
						<h1>MY PORTFOLIO</h1>
						<p>This is my portfolio (work in progress! v0.5)</p>
            <ul class="icons alt">
									<li><a href="www.google.com" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
									<li><a href="www.google.com" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
									<li><a href="www.google.com" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
									<li><a href="www.google.com" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
							</ul>
					</div>



					<div id="main">

							<article class="post featured">
								<header class="major">
									<h2><a href="www.google.com">Product 1</a></h2>
									<p>.</p>
								</header>
								<a href="www.google.com" class="image main"><img src={imagem} alt="" /></a>
								<ul class="actions special">
									<li><a href="www.google.com" class="button large">Check out the code!</a></li>
								</ul>
							</article>

							<section class="posts">
								<article>
									<header>
										<h2><a href="www.google.com">Product 2 </a></h2>
									</header>
									<a href="www.google.com" class="image fit"><img src={imagem2} alt="" /></a>
									<p>.</p>
									<ul class="actions special">
										<li><a href="www.google.com" class="button">Check code</a></li>
									</ul>
								</article>

								<article>
									<header>
										<h2><a href="www.google.com">Product 3 </a></h2>
									</header>
									<a href="www.google.com" class="image fit"><img src={imagem2} alt="" /></a>
									<p>.</p>
									<ul class="actions special">
										<li><a href="www.google.com" class="button">Check code</a></li>
									</ul>
								</article>



							</section>


					</div>

					<footer id="footer">

						<section class="split contact">

							<section>
								<h3>Social</h3>
								<ul class="icons alt">
									<li><a href="www.google.com" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
									<li><a href="www.google.com" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
									<li><a href="www.google.com" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
									<li><a href="www.google.com" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
								</ul>
							</section>
						</section>
					</footer>


      <script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

    </div>
    </div>
  );
}

export default App;
