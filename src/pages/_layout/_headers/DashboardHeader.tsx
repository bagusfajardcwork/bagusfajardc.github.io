import React, { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header, { HeaderLeft, HeaderRight } from '../../../layout/Header/Header';
import Popovers from '../../../components/bootstrap/Popovers';
import Button, { IButtonProps } from '../../../components/bootstrap/Button';
import useDarkMode from '../../../hooks/useDarkMode';
// import LANG, { getLangWithKey, ILang } from '../../../lang';
// import Dropdown, {
// 	DropdownItem,
// 	DropdownMenu,
// 	DropdownToggle,
// } from '../../../components/bootstrap/Dropdown';
// import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
// import Spinner from '../../../components/bootstrap/Spinner';

const DashboardHeader = () => {
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();
	const styledBtn: IButtonProps = {
		color: darkModeStatus ? 'dark' : 'light',
		hoverShadow: 'default',
		isLight: !darkModeStatus,
		size: 'lg',
	};

	const { i18n } = useTranslation();

	// const changeLanguage = (lng: ILang['key']['lng']) => {
	// 	i18n.changeLanguage(lng).then(() =>
	// 		showNotification(
	// 			<span className='d-flex align-items-center'>
	// 				<Icon icon={getLangWithKey(lng)?.icon} size='lg' className='me-1' />
	// 				<span>{`Language changed to ${getLangWithKey(lng)?.text}`}</span>
	// 			</span>,
	// 			'You updated the language of the site. (Only "Aside" was prepared as an example.)',
	// 		),
	// 	);
	// };

	/**
	 * Language attribute
	 */
	useLayoutEffect(() => {
		document.documentElement.setAttribute('lang', i18n.language);
	});

	return (
		<Header>
			<HeaderLeft>
				<Popovers
					desc={<code>yuk kenal lebih dekat</code>}>
					Curriculum Vitae
				</Popovers>
				<code>bagusfajardc</code>
			</HeaderLeft>

			<HeaderRight>
				<div className='row g-3 align-items-center'>
					{/* Dark Mode */}
					<div className='col-auto'>
						<Popovers trigger='hover' desc='Dark / Light mode'>
							<Button
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...styledBtn}
								onClick={() => setDarkModeStatus(!darkModeStatus)}
								className='btn-only-icon'
								data-tour='dark-mode'
								aria-label='Toggle dark mode'>
								<Icon
									icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
									color={darkModeStatus ? 'info' : 'warning'}
									className='btn-icon'
								/>
							</Button>
						</Popovers>
					</div>
				</div>
			</HeaderRight>
		</Header>
	);
};

export default DashboardHeader;
