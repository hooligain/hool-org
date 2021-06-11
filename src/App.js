import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import * as Images from "./assets/images/index";

const App = () => {

	const rendreImage = (imageDesktop, imageMobile, alt, className) => (
		<picture>
			<source media="(min-width: 768px)" srcset={imageDesktop} />
			{className && <img className={className} src={imageMobile} alt={alt} />}
			{!className && <img src={imageMobile} alt={alt} />}
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
				{rendreImage(Images.Separation, Images.SeparationMobile, "separation", "separation-img")}
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
				{rendreImage(Images.Separation, Images.SeparationMobile, "separation", "separation-img")}
			</div>

			<div className="" id="features">
				<h1>Features Overview</h1>
				<div class="ft-section">
					<img src={Images.LogoFeature} alt='logofeature' className="logo-ft-img" />
					<ul className="ft-content">
						<li className="ft-unique">
							<span className="ft-order">1</span>
							<p className="ft-unique-content"><span className="ft-ct-active">Loyalty-oriented NFT framework</span></p>
						</li>
						<li className="ft-unique">
							<span className="ft-order">2</span>
							<p className="ft-unique-content"> Game economics bootstrapped by <span className="ft-ct-active">loyalty farming protocol</span></p>
						</li>
						<li className="ft-unique">
							<span className="ft-order">3</span>
							<p className="ft-unique-content">NFT marketplace</p>
						</li>
						<li className="ft-unique">
							<span className="ft-order">4</span>
							<p className="ft-unique-content"><span className="ft-ct-active">Fan Token</span> and DeFi Liquidity token utility</p>
						</li>
						<li className="ft-unique">
							<span className="ft-order">5</span>
							<p className="ft-unique-content">Decentralized real-life information oracle</p>
						</li>
						<li className="ft-unique">
							<span className="ft-order">6</span>
							<p className="ft-unique-content">Simulator using multi-party random number generator</p>
						</li>
					</ul>
				</div>
				<img src={Images.LogoFtBg} alt='logo' className="logo-ft-bg" />
			</div>
			<div className="separation">
				{rendreImage(Images.Separation, Images.SeparationMobile, "separation", "separation-img")}
			</div>

			<div className="" id="ecosystem">
				<h1>Hool Ecosystem</h1>
				{rendreImage(Images.Ecosystem, Images.EcosystemMobile, "separation", "ecosystem-img")}
			</div>

			<div className="separation-eco">
				{rendreImage(Images.Separation, Images.SeparationMobile, "separation", "separation-img")}
			</div>

			<div className="" id="milestones">
				<h1 className="title">Hool Ecosystem</h1>
				{rendreImage(Images.Milestones, Images.MilestonesMb, "separation", "milestones-img")}
			</div>
		</div>
	);
};

export default App;
