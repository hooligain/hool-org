import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import * as Images from "./assets/images/index";

const App = () => {

	const rendreImage = (imageDesktop, imageMobile, alt) => (
		<picture>
			<source media="(min-width: 768px)" srcset={imageDesktop} />
			<img src={imageMobile} alt={alt} />
		</picture>
	);

	return (
		<div className="App">
			<div id='header'>
				<div className="menu">
					<div className="menu-left">
						<a href="/" className='header-button active'>HOME</a>
						<a href="/" className='header-button'>WHITEPAPER</a>
						<a href="/" className='header-button'>TEAM</a>
					</div>
					<div className="logo">
						<img src={Images.LogoBg} alt='logo-bg' className="logo-background" />
						<img src={Images.Logo} alt='logo' className="logo-image" />
					</div>
					<div className="menu-right">
						<a href="/" className='header-button'>Testnest</a>
						<a href="/" className='header-button'>Contact us</a>
					</div>
				</div>
				<div className="introduction">
					<div className="introduction-img">
						<img loading='lazy' src={Images.LogoClubs} />
					</div>
					<div className="introduction-content">
						<h1 class="">Hool</h1>
						<p className="slogan text-yellow">The first loyalty football gaming platform</p>
						<p className="description">Hool’s mission is to give fans the power to approach their football clubs, bring fans and clubs closer together</p>
						<button className="contact-us">Contact us</button>	
					</div>
				</div>
			</div>
			<div class="separation">
				{rendreImage(Images.Separation, Images.SeparationMobile, "separation")}
			</div>
			<div class="" id="solution">
				<h1 class="title">Our Solution</h1>
				<div class="solution-content">
				<div class="single-solution">
					<img loading="lazy" src={Images.Solution1} />
					<p>
					An NFT eco-system built by fans that incentivizes football clubs
					and players to endorse their supporter.
					</p>
				</div>
				<div class="single-solution">
					<img loading="lazy" src={Images.Solution2} />
					<p>
					Decentralized oracle and incentive that builds a bidirectional
					interaction between the eco-system and real life.
					</p>
				</div>
				<div class="single-solution">
					<img loading="lazy" src={Images.Solution3} />
					<p>
					A loyalty farming protocol that promotes the long lasting
					contribution of users inside a pool.
					</p>
				</div>
				</div>
			</div>

			<div class="separation">
				{rendreImage(Images.Separation, Images.SeparationMobile, "separation")}
			</div>
			
			<div class="" id="features">
				<h1 class="title">Features Overview</h1>
				<div class="solution-content"></div>
			</div>
		</div>
  	);
};

export default App;
