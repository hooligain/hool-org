/** React */
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import Pdf from '../assets/pdf/Hool_gameplay.pdf';

/** App */
import * as Images from '../assets/images/index';
import {LINK_CONTACT_US} from '../helpers/constants';
import {openInNewTab} from '../helpers/lib';

export default function Header() {
	const [isMenuBurgerVisible, setIsMenuBurgerVisible] = React.useState(false);
	const location = useLocation();

	const classNameMenuBurger = isMenuBurgerVisible ? 'header__mobile__menu-burger open' : 'header__mobile__menu-burger';

	const getActiveClassName = (to, otherClasses = '') => {
		let className = 'header__navigation__item ' + otherClasses;
		if (location.pathname === to) {
			className += ' header__navigation__item--active';
		}
		return className;
	};
	return (
		<div className='header'>
			{/* Navigation Desktop */}
			<div className='header__desktop d-none d-xl-block'>
				<div className='header__desktop__logo-container'>
					<img src={Images.LogoHeaderDesktop} alt='logo-hool' />
				</div>

				<div className='header__desktop__navigation'>
					<img
						src={Images.BackgroundHeaderNavigation}
						alt='navigation-background'
						className='header__desktop__navigation__background'
					/>
					<div className='header__desktop__navigation__contents'>
						<div className='header__desktop__navigation__items'>
							<Link to='/' className={getActiveClassName('/', 'mr-1')}>
								HOME
							</Link>
							<Link to='/resources' className={getActiveClassName('/resources', 'mx-1')}>
								RESOURCES
							</Link>
							<HashLink className='header__navigation__item mx-1' smooth to='/#teams'>
								TEAM
							</HashLink>
							<a href={Pdf} rel='noreferrer' target='_blank' className='header__navigation__item mx-1'>
								GAMEPLAY
							</a>
							<Link to='/testnest' className={getActiveClassName('/testnest', 'ml-1')}>
								TESTNET
							</Link>
						</div>

						<button onClick={() => openInNewTab(LINK_CONTACT_US)} className='header__desktop__navigation__contact-btn'>
							Contact us
						</button>
					</div>
				</div>
			</div>

			<div className='header__mobile d-flex d-xl-none'>
				<div className='header__mobile__items d-flex'>
					<img loading='lazy' src={Images.Logo} alt='logo' className='header__mobile__logo' />
					<Link to='/' className={getActiveClassName('/')}>
						HOME
					</Link>
					<Link to='/resources' className={getActiveClassName('/resources')}>
						RESOURCES
					</Link>
					<HashLink className='header__navigation__item' smooth to='/#teams'>
						TEAM
					</HashLink>
				</div>
				<div className={classNameMenuBurger}>
					<button
						onClick={() => setIsMenuBurgerVisible(!isMenuBurgerVisible)}
						className='header__mobile__menu-burger__icon'>
						<img loading='lazy' src={Images.MenuBurger} alt='burger' />
					</button>
					<div className='header__mobile__menu-burger__items'>
						<a href={Pdf} rel='noreferrer' target='_blank' className='header__navigation__item'>
							GAMEPLAY
						</a>
						<Link to='/testnest' className={getActiveClassName('/testnest')}>
							TESTNET
						</Link>
						<button
							onClick={() => openInNewTab(LINK_CONTACT_US)}
							className='header__navigation__item header__mobile__navigation__item__contact-btn'>
							Contact us
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
