import React from "react";
import * as Images from "../assets/images/index";
import Header from './header'

const LinkToContactUs = 'https://forms.gle/MapxURFLxcmzv7J28';
const LinkGithub = 'https://github.com/hooligain';

const HomePage = () => {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	const renderImage = (imageDesktop, imageMobile, alt, className) => (
		<picture>
			<source media="(min-width: 768px)" srcSet={imageDesktop} />
			{className && <img className={className} src={imageMobile} alt={alt} />}
			{!className && <img src={imageMobile} alt={alt} />}
		</picture>
	);

	return (
		<div className="App">
			<div id='header'>
				<div className="menu d-none d-md-flex">
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
						<a href={LinkToContactUs} rel="noreferrer" target="_blank" className='header-button'>Contact us</a>
					</div>
				</div>
				<div className="introduction">
					<div className="introduction-img">
                        <Header/>
						{/* <div className="menu-mobile d-flex d-md-none">
							<div className="menu-left d-flex">
								<img src={Images.Logo} alt='logo' className="logo-image" />
								<a href="/" className='header-button active'>HOME</a>
								<a href="/" className='header-button'>WHITEPAPER</a>
								<a href="/" className='header-button'>TEAM</a>
							</div>
							<div className="menu-burger">
								<button>
									<img src={Images.MenuBurger} alt='burger' className="burger-image" />
								</button>
							</div>
						</div> */}
						<img loading='lazy' alt='clubs' src={Images.LogoClubs} />
					</div>
					<div className="introduction-content">
						<h1 className="">Hool</h1>
						<p className="slogan text-yellow">The first loyalty football gaming platform</p>
						<p className="description">Hool’s mission is to give fans the power to approach their football clubs, bring fans and clubs closer together</p>
						<button onClick={() => {openInNewTab(LinkToContactUs)}} className="contact-us">Contact us</button>
					</div>
				</div>
			</div>
			<div className="separation">
				{renderImage(Images.Separation, Images.SeparationMobile, "separation", "separation-img")}
			</div>
			<div className="" id="solution">
				<h1 className="title">Our Solution</h1>
				<div className="solution-content">
					<div className="single-solution">
						<img loading="lazy" alt='solution' src={Images.Solution1} />
						<p>
							An NFT eco-system built by fans that incentivizes football clubs
							and players to endorse their supporter.
						</p>
					</div>
					<div className="single-solution">
						<img loading="lazy" alt='solution' src={Images.Solution2} />
						<p>
							Decentralized oracle and incentive that builds a bidirectional
							interaction between the eco-system and real life.
						</p>
					</div>
					<div className="single-solution">
						<img loading="lazy" alt='solution' src={Images.Solution3} />
						<p>
							A loyalty farming protocol that promotes the long lasting
							contribution of users inside a pool.
						</p>
					</div>
				</div>
			</div>

			<div className="separation">
				{renderImage(Images.Separation, Images.SeparationMobile, "separation", "separation-img")}
			</div>

			<div className="" id="features">
				<h1>Features Overview</h1>
				<div className="ft-section">
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
				{renderImage(Images.Separation, Images.SeparationMobile, "separation", "separation-img")}
			</div>

			<div className="" id="ecosystem">
				<h1>Hool Ecosystem</h1>
				{renderImage(Images.Ecosystem, Images.EcosystemMobile, "ecosystem", "ecosystem-img")}
			</div>

			<div className="separation-eco">
				{renderImage(Images.Separation, Images.SeparationMobile, "separation", "separation-img")}
			</div>

			<div className="" id="milestones">
				<h1 className="title">Milestones</h1>
				{renderImage(Images.Milestones, Images.MilestonesMb, "Milestones", "milestones-img")}
			</div>

			<div className="separation">
				{renderImage(Images.Separation, Images.SeparationMobile, "separation", "separation-img")}
			</div>

			<div className="" id="teams">
				<h1 className="title">Teams</h1>
				<div className="teams-content">
					<div className="person">
						{renderImage(Images.Person1, Images.Person1Mb, "team", "person-img")}

						<p className="person-name">Andrew Nguyen</p>
						<div className="person-description">
							<p> Founding engineer at kyber.network.</p>
							<p>Head researcher at mercurial.finance</p>
							<p>Author of the DMM protocol</p>
						</div>
					</div>
					<div className="person">
						{renderImage(Images.Person2, Images.Person2Mb, "team", "person-img")}
						<p className="person-name">Trong Nguyen</p>
						<div className="person-description">
							<p>Head of Research at Kyber Network</p>
							<p>Ph.D. in Applied Mathematics  and Machine Learning.</p>
							<p>Master degree in Information Security</p>
						</div>
					</div>
					<div className="person">
						{renderImage(Images.Person3, Images.Person3Mb, "team", "person-img")}
						<p className="person-name">Bao Mai</p>
						<div className="person-description">
							<p>M.S in Computer Science</p>
							<p>Senior developer at Atos France</p>
						</div>
					</div>
				</div>
			</div>

			<div id="footer">
				<div className="footer-left">
					<img src={Images.Logo} alt='logo' className="logo-image" />
					<a href="/" className='footer-button'>HOME</a>
					<a href={LinkToContactUs} rel="noreferrer" target="_blank" className='footer-button'>CONTACT</a>
				</div>
				<div className="footer-right">
					<img loading='lazy' src={Images.TelegramLogo} alt='Telegram' />
					<img loading='lazy' onClick={()=>openInNewTab(LinkGithub)} src={Images.GithubLogo} alt='Github' />
				</div>
			</div>
		</div>
	);
};

export default HomePage;