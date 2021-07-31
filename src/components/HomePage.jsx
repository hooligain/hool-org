/** React */
import React from 'react';

/** App */
import * as Images from '../assets/images/index';
import Header from './Header';
import {LINK_CONTACT_US, LINK_GITHUB, LINK_TELEGRAM, TeamMembers, AdvisorMembers} from '../helpers/constants';
import {openInNewTab, renderImage} from '../helpers/lib';

const HomePage = () => (
	<>
		<Header />
		<div className='main'>
			<div className='introduction'>
				<div className='introduction__img'>
					<img loading='lazy' alt='players' src={Images.IntroductionImg} />
				</div>
				<div className='introduction__content'>
					<h1 className='introduction__content__title'>Hool</h1>
					<p className='introduction__content__slogan text-yellow'>The first loyalty football gaming platform</p>
					<p className='introduction__content__description'>
						Hool’s mission is to give fans the power to approach their football clubs, bring fans and clubs closer
						together
					</p>
					<button
						onClick={() => {
							openInNewTab(LINK_CONTACT_US);
						}}
						className='introduction__content__contact-btn'>
						<img src={Images.IntroductionContentContactBtn} alt="Introduction Contact Button" />
					</button>
				</div>
				<div className='mouse d-none d-xl-flex'>
					<img src={Images.Mouse} alt='mouse' className='mouse-image' />
				</div>
			</div>

			{/* Gameplay */}
			<div id='gameplay'>
				<div className='gameplay-title'>
					<img loading='lazy' alt='solution' src={Images.GamePlay} />
				</div>
				<div className='gameplay-content'>
					<div className='single-gameplay'>
						{renderImage(Images.GamePlay1, Images.GamePlay1Mb, 'Fuel', 'gameplay-img gameplay-normal')}
						<img className='gameplay-img gameplay-hover' alt='Fuel' src={Images.Gameplay1Hover} />
						<p>User stake HOOL to farm FUEL, ultilized by loyalty farming protocol.</p>
					</div>
					<div className='single-gameplay'>
						{renderImage(Images.GamePlay2, Images.GamePlay2Mb, 'NFT', 'gameplay-img gameplay-normal')}
						<img className='gameplay-img gameplay-hover' alt='Fuel' src={Images.Gameplay2Hover} />
						<p>User stake HOOL to mint NFT, which is associated with a model, created by community.</p>
					</div>
					<div className='single-gameplay'>
						{renderImage(Images.GamePlay3, Images.GamePlay3Mb, 'Play game', 'gameplay-img gameplay-normal')}
						<img className='gameplay-img gameplay-hover' alt='Fuel' src={Images.Gameplay3Hover} />
						<p>User use NFT and FUEL to play game, grow the NFT, earn rewards and contribute to NFT model.</p>
					</div>
				</div>
			</div>

			{/* Features */}
			<div id='features'>
				<h1>Features Overview</h1>
				<div className='ft-section'>
					<img src={Images.LogoFeature} alt='logofeature' className='logo-ft-img' />
					<ul className='ft-content'>
						<li className='ft-unique'>
							<span className='ft-order'>1</span>
							<p className='ft-unique-content'>Stake to play game</p>
						</li>
						<li className='ft-unique'>
							<span className='ft-order'>2</span>
							<p className='ft-unique-content'>Decentralize match simulation</p>
						</li>
						<li className='ft-unique'>
							<span className='ft-order'>3</span>
							<p className='ft-unique-content'>NFT marketplace</p>
						</li>
						<li className='ft-unique'>
							<span className='ft-order'>4</span>
							<p className='ft-unique-content'>Play to earn</p>
						</li>
						<li className='ft-unique'>
							<span className='ft-order'>5</span>
							<p className='ft-unique-content'>Game voting</p>
						</li>
					</ul>
				</div>
			</div>

			{/* Ecosystem */}
			<div id='ecosystem'>
				<h1>Hool Ecosystem</h1>
				{renderImage(Images.Ecosystem, Images.EcosystemMobile, 'ecosystem', 'ecosystem-img')}
			</div>

			{/* Milestones */}
			<div id='milestones'>
				<h1 className='title'>Milestones</h1>
				{renderImage(Images.Milestones, Images.MilestonesMb, 'Milestones', 'milestones-img')}
			</div>

			{/* Founding Team */}
			<div className='teams' id='teams'>
				<h1 className='title'>Founding team</h1>
				<div className='teams-content'>
					{TeamMembers.map((member, index) => (
						<div key={member + index} className='person'>
							{renderImage(member.avatar, member.avatar_mb, 'team', 'person-img')}

							<p className='person-name'>{member.name}</p>
							<div className='person-description'>
								{member.intro.map((item, index) => (
									<p key={index}>{item}</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Advisors */}
			<div className='teams'>
				<h1 className='title'>Advisors</h1>
				<div className='teams-content'>
					{AdvisorMembers.map((member, index) => (
						<div key={member + index} className='person'>
							{renderImage(member.avatar, member.avatar_mb, 'team', 'person-img')}

							<p className='person-name'>{member.name}</p>
							<div className='person-description'>
								{member.intro.map((item, index) => (
									<p key={index}>{item}</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Footer */}
			<div id='footer'>
				<div className='footer-left'>
					<img src={Images.Logo} alt='logo' className='logo-image' />
					<a href='/' className='footer-button'>
						HOME
					</a>
					<a href={LINK_CONTACT_US} rel='noreferrer' target='_blank' className='footer-button'>
						CONTACT
					</a>
				</div>
				<div className='footer-right'>
					<img loading='lazy' onClick={() => openInNewTab(LINK_TELEGRAM)} src={Images.TelegramLogo} alt='Telegram' />
					<img loading='lazy' onClick={() => openInNewTab(LINK_GITHUB)} src={Images.GithubLogo} alt='Github' />
				</div>
			</div>
		</div>
	</>
);

export default HomePage;
