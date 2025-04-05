import React, { useContext } from 'react';
// import classNames from 'classnames';
// import { useTranslation } from 'react-i18next';
import Brand from '../../../layout/Brand/Brand';
import Navigation, { NavigationLine } from '../../../layout/Navigation/Navigation';
// import User from '../../../layout/User/User';
import { myBiodata } from '../../../menu';
import ThemeContext from '../../../contexts/themeContext';
// import Icon from '../../../components/icon/Icon';
import Aside, { AsideBody, AsideHead } from '../../../layout/Aside/Aside';
// import Popovers from '../../../components/bootstrap/Popovers';

const DefaultAside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);

	// const [doc, setDoc] = useState(
	// 	localStorage.getItem('facit_asideDocStatus') === 'true' || false,
	// );

	// const { t } = useTranslation(['translation', 'menu']);

	return (
		<Aside>
			<AsideHead>
				<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
			</AsideHead>
			<AsideBody>
				<Navigation menu={myBiodata} id='biodata' />
				<NavigationLine />
			</AsideBody>
		</Aside>
	);
};

export default DefaultAside;
