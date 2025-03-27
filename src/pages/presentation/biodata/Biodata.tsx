import React from 'react';

import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Popovers from '../../../components/bootstrap/Popovers';
// import * as Image from '../../../assets/img/wanna';

const Biodata = () => {
	return (
		<PageWrapper title='Halaman Biodata'>
			<Page>
				<div className='d-flex flex-column'>
					<div>
						<img
							srcSet='../../../assets/img/wanna/wanna7.png'
							src='../../../assets/img/wanna/wanna7.png'
							alt='Avatar'
							width={200}
							height={200}
						/>
					</div>
					<div className='d-flex justify-content-between'>
						<div>Flex item 1</div>
						<div>Flex item 2</div>
						<div>Flex item 3</div>
					</div>
				</div>
				<div className='row d-flex align-items-center h-100'>
					<div
						className='col-12 d-flex justify-content-center align-items-center'
						style={{ fontSize: 'calc(3rem + 3vw)' }}>
						<Popovers
							title='Blank.tsx'
							desc={<code>src/pages/presentation/page-layouts/Blank.tsx</code>}>
							Page
						</Popovers>
						<code className='ps-3'>Blank.tsx</code>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Biodata;
