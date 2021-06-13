/** React */
import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

/** App */
import * as Images from '../assets/images/index';
import {LINK_CONTACT_US} from '../helpers/constants';

export default function Header() {
	const [isMenuBurgerVisible, setIsMenuBurgerVisible] = React.useState(false);

	const classNameMenuBurger = isMenuBurgerVisible ? 'menu-burger open' : 'menu-burger';
	return (
		<>
			<div className='menu d-none d-xl-flex'>
				<div className='menu-background'>
					<img src={Images.LogoBg} alt='logo-bg' className='logo-background' />
				</div>
				<div className='menu-content'>
					<div className='menu-left'>
						<Link to='/' className='header-button active'>
							HOME
						</Link>
						<Link to='/whitepaper' className='header-button mx-2'>
							WHITEPAPER
						</Link>
						<HashLink className='header-button' smooth to='/#teams'>
							TEAM
						</HashLink>
					</div>
					<div className='logo-container'>
						<img src={Images.Logo} alt='logo' className='logo-image' />
					</div>
					<div className='menu-right'>
						<Link to='/testnest' className='header-button'>
							TESTNEST
						</Link>
						<Link href={LINK_CONTACT_US} rel='noreferrer' target='_blank' className='header-button contact-us ml-2'>
							Contact us
						</Link>
					</div>

					{/* <li>
						<Link to='/' className='header-button active'>
							HOME
						</Link>
					</li>
					<li>
						<Link to='/whitepaper' className='header-button'>
							WHITEPAPER
						</Link>
					</li>
					<li>
						<HashLink className='header-button' smooth to='/#teams'>
							TEAM
						</HashLink>
					</li>
					<li>
						<img src={Images.Logo} alt='logo' className='logo-image' />
					</li>
					<li>
						<Link to='/testnest' className='header-button'>
							TESTNEST
						</Link>
					</li>
					<li>
						<a href={LINK_CONTACT_US} rel='noreferrer' target='_blank' className='header-button contact-us'>
							Contact us
						</a>
					</li>
					<li></li> */}
				</div>
				{/* <div className='menu-content'>
					<div className='menu-left'>
						
						
						
					</div>
					<div className='logo'>
						
					</div>
					<div className='menu-right'>
						
						
					</div>
				</div> */}
			</div>

			<div className='menu-mobile d-flex d-xl-none'>
				<div className='menu-left d-flex'>
					<img loading='lazy' src={Images.Logo} alt='logo' className='logo-image' />
					<Link to='/' className='header-button active'>
						HOME
					</Link>
					<Link to='/whitepaper' className='header-button'>
						WHITEPAPER
					</Link>
					<HashLink className='header-button' smooth to='/#teams'>
						TEAM
					</HashLink>
				</div>
				<div className={classNameMenuBurger}>
					<button onClick={() => setIsMenuBurgerVisible(!isMenuBurgerVisible)}>
						<img loading='lazy' src={Images.MenuBurger} alt='burger' className='burger-image' />
					</button>
					<div class='sub-menu'>
						<Link to='/testnest' className='header-button'>
							TESTNEST
						</Link>
						<a href={LINK_CONTACT_US} rel='noreferrer' target='_blank' className='header-button contact-us'>
							Contact us
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
