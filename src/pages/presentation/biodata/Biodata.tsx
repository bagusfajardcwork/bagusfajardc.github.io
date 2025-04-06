import React, { useState } from 'react';
import { useFormik } from 'formik';
// import dayjs from 'dayjs';
import classNames from 'classnames';
import { useMeasure } from 'react-use';
// import { useNavigate } from 'react-router-dom';
import Button from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, {
	// CardActions,
	CardBody,
	CardFooter,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardTabItem,
	CardTitle,
} from '../../../components/bootstrap/Card';
import userData from '../../../common/data/myBiodata';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
import Alert from '../../../components/bootstrap/Alert';
import Avatar from '../../../components/Avatar';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../../../components/bootstrap/Modal';
import { myBiodata } from '../../../menu';
import Carousel from '../../../components/bootstrap/Carousel';
import CarouselSlide from '../../../components/bootstrap/CarouselSlide';
import useDarkMode from '../../../hooks/useDarkMode';
import Accordion, { AccordionItem } from '../../../components/bootstrap/Accordion';
import '/src/styles/custom/custom-style.css'; // ✅ benar

function downloadFile(fileUrl: string, fileName: string) {
	const link = document.createElement('a');
	link.href = fileUrl;
	link.download = fileName || 'download';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

const user = userData.user;
const biodataItem = userData.biodata;
const pendidikan = userData.pendidikan;
const pengalamankerja = userData.pengalamankerja;

const Biodata = () => {
	const { darkModeStatus } = useDarkMode();

	const formik = useFormik({
		initialValues: {
			formPrefix: 'Prof.',
			formName: 'Timothy',
			formMiddleName: 'John',
			formSurName: 'Doe',
			formEmailAddress: 'tjohndoe@site.com',
			formPhone: '2575637401',
			formAddressLine: '711-2880 Nulla St.',
			formAddressLine2: 'Mankato',
			formCity: 'Mississippi',
			formState: 'USA',
			formZIP: '96522',
			formCurrentPassword: '',
			formNewPassword: '',
			formConfirmNewPassword: '',
		},
		onSubmit: (values) => {
			// eslint-disable-next-line no-console
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Information</span>
				</span>,
				JSON.stringify(values, null, 2),
			);
		},
	});
	const [ref, { height }] = useMeasure<HTMLDivElement>();
	const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

	const BIODATA = (
		<div className='row g-5 align-content-center'>
			{biodataItem.map((item, index) => (
				<div className='col-6'>
					<div className='d-flex align-items-center'>
						<div className='flex-shrink-0'>
							<Icon icon={item.icon} size='3x' color={darkModeStatus ? 'warning' : 'dark'} />
						</div>
						<div className='flex-grow-1 ms-3'>
							<div className='text-muted'>
								{item.judul}
							</div>
							<div className='fw-bold fs-5 mb-0'>
								{item.deskripsi}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);

	const PENGALAMANKERJA = (
		<div className='row g-4'>
			<Accordion>
				{pengalamankerja.map((item, index) => (
					<AccordionItem
						key={item.id}
						id={`accor3-color-${item.id}`}
						title={
							<div className="d-flex flex-row justify-content-between align-items-center w-25">
								<div>
									{item.posisi} - {item.lokasi}
								</div>
								<div>
									{item.active && (
										<>
											<Icon className='blink' icon="CheckCircleOutline" size="2x" color={darkModeStatus ? 'warning' : 'success'} />
										</>
									)}
								</div>
							</div>
						}
						icon={item.icon}
						overWriteColor={item.warna}>
						<p className='fw-bold fst-italic'><Icon className='mx-2' icon="DateRange" size="1x" color={item.warna} /> {item.tanggal}</p>
						<div>
							{item.detail.map((desc, index) => (
								<span className='fw-medium fs-5'> {`${index + 1}. ${desc.deskripsi}`} <br/> </span>
							))}
						</div>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);

	return (
		<PageWrapper title={myBiodata.biodata.text}>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-xxl-4 col-xl-6'>
						<Card ref={ref} className='shadow-3d-primary'>
							<CardBody>
								<div className='row g-5'>
									<div className='col-12'>
										<div className='d-flex align-items-center'>
											<div className='flex-shrink-0'>
												<Avatar
													srcSet={user.src}
													src={user.src}
													className='rounded-circle'
													color='dark'
												/>
											</div>
											<div className='flex-grow-1 ms-3'>
												<div className='h2 fw-bold'>
													{user.surename || '-'}
												</div>
												<div className={`${darkModeStatus ? 'text-light' : 'text-muted'} h5`}>{ user.position }</div>
											</div>
										</div>
									</div>
									<div className='col-12'>
										<div className='row g-3'>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon icon='Mail' size='3x' color='danger' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															{user.email || '-'}
														</div>
														<div className='text-muted'>
															Email
														</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon
															icon='PhoneIphone'
															size='3x'
															color='info'
														/>
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															{user.handphone || '-'}
														</div>
														<div className='text-muted'>No. Handphone (Whatsapp)</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<CardLabel>
									<CardTitle className={`${darkModeStatus ? 'text-warning' : 'text-dark'}`}>Get In Touch !</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Halo saya <span className='fst-italic fw-bold'>Bagus Fajar Dwicahyo</span> bisa panggil saya <span className='fst-italic fw-bold'>Bagus</span>. <br/>
									Saya sudah beberapa tahun menjadi programmer baik <span className='fst-italic fw-bold'>backend</span> maupun  <span className='fst-italic fw-bold'>frontend. </span> <br/>
									Tetapi saat ini lebih terfokus untuk pengembangan disisi tampilannya (frontend).
									Saya juga biasa membuat <span className='fst-italic fw-bold'>query (MySQL / PostgreSQL)</span> untuk kebutuhan <span className='fst-italic fw-bold'>reporting </span>
									sesuai kebutuhan data yang ingin ditampilkan menggunakan <span className='fst-italic fw-bold'> JasperReport </span> untuk tools yang digunakan.
								</p>
								<p className={`${darkModeStatus ? 'text-light' : 'text-primary'} fst-italic`}>
									Untuk informasi lainnya bisa kontak melalui nomor diatas atau dengan informasi pada halaman ini.
								</p>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<CardLabel icon='School' iconColor={darkModeStatus ? 'warning' : 'dark'} className={
									classNames({
										'text-dark': darkModeStatus,
										'text-light': !darkModeStatus,
									})
								}>
									<CardTitle className={`${darkModeStatus ? 'text-warning' : 'text-dark'}`}>Pendidikan</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className="p-4">
									<div className={`${darkModeStatus ? 'border-warning' : ''} border-start border-2 ps-3`}>
										{pendidikan.map((item, index) => (
											<div key={index} className="mb-3">
												<div className='row align-items-center'>
													<div className='col-2'>
														<img src={item.path} style={{ maxWidth: '3rem', maxHeight: '3rem' }} alt="Edukasi" />
													</div>
													<div className='col-10'>
														<div className="d-flex align-items-center">
															<span className="me-2">{item.icon}</span>
															<strong>{item.place}</strong>
														</div>
														<div>{item.jurusan} <strong>{item.skor ? `, IPK ${  item.skor}` : ''}</strong></div>
														<div>{item.tanggal}</div>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xxl-8 col-xl-6'>
						<Card
							className={classNames('shadow-3d-info', 'mb-5', {
								'bg-warning bg-gradient': darkModeStatus,
								'bg-dark bg-gradient': !darkModeStatus,
							})}>
							<Carousel
								isHoverPause
								isRide
								height={height || 305}
								isDark={darkModeStatus}>
								<CarouselSlide>
									<div className='row align-items-center h-100'>
										<div className='col-6 text-center align-content-center carousel-slide-bg'>
											<Icon
												icon='FileCopy'
												size='10x'
												color={darkModeStatus ? 'dark' : 'warning'}
											/>
										</div>
										<div className='col-6 text-light'>
											<h2 className={darkModeStatus ? 'text-dark' : 'text-light'}>Curriculum Vitae</h2>
											<p className={darkModeStatus ? 'text-dark' : 'text-light'}>Unduh CV saya :</p>
											<Button
												color={darkModeStatus ? 'dark' : 'warning'}
												icon='Download'
												hoverShadow='lg'
												shadow='lg'
												onClick={() => downloadFile(user.cv, 'CV-BagusFajarDwicahyo.pdf')}
											>
												Unduh
											</Button>
										</div>
									</div>
								</CarouselSlide>
								<CarouselSlide>
									<div className='row align-items-center h-100'>
										<div className='col-6 text-end text-light'>
											<h2 className={darkModeStatus ? 'text-dark' : 'text-warning'}>Halo,</h2>
											<h5 className={darkModeStatus ? 'text-dark' : 'text-warning'}>Selamat datang di halaman Curriculum Vitae saya</h5>
										</div>
										<div
											className='col-6 carousel-slide-bg'
											style={{ backgroundImage: `url(${user.srcGhibli})` }}
										/>
									</div>
								</CarouselSlide>
							</Carousel>
						</Card>
						<Card>
							<CardHeader className={classNames({
								'bg-warning': darkModeStatus,
								'bg-dark': !darkModeStatus,
							}, 'bg-gradient')}>
								<CardLabel icon='VerifiedUser' iconColor={darkModeStatus ? 'dark' : 'light'} className={
									classNames({
										'text-dark': darkModeStatus,
										'text-light': !darkModeStatus,
									})
								}>
									<CardTitle className={`${darkModeStatus ? 'text-dark' : 'text-light'}`}>Biodata</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>{BIODATA}</CardBody>
						</Card>
						<Card>
							<CardHeader className={classNames({
								'bg-warning': darkModeStatus,
								'bg-dark': !darkModeStatus,
							}, 'bg-gradient')}>
								<CardLabel icon='Work' iconColor={darkModeStatus ? 'dark' : 'light'} className={
									classNames({
										'text-dark': darkModeStatus,
										'text-light': !darkModeStatus,
									})
								}>
									<CardTitle className={`${darkModeStatus ? 'text-dark' : 'text-light'}`}>Pengalaman Kerja</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								{PENGALAMANKERJA}
							</CardBody>
						</Card>
						<Card hasTab>
							<CardTabItem id='profile' title='Profile' icon='Contacts'>
								<Alert isLight className='border-0' shadow='md' icon='LocalPolice'>
									The information is not shared with third parties.
								</Alert>

								<Card
									className='rounded-2'
									tag='form'
									onSubmit={formik.handleSubmit}>
									<CardHeader>
										<CardLabel icon='Person'>
											<CardTitle>Personal Information</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<div className='row g-4'>
											<FormGroup
												className='col-md-2'
												id='formPrefix'
												label='Prefix'>
												<Input
													placeholder='Dr.'
													autoComplete='honorific-prefix'
													onChange={formik.handleChange}
													value={formik.values.formPrefix}
												/>
											</FormGroup>
											<FormGroup
												className='col-md-3'
												id='formName'
												label='Name'>
												<Input
													placeholder='Timothy'
													autoComplete='given-name'
													onChange={formik.handleChange}
													value={formik.values.formName}
												/>
											</FormGroup>
											<FormGroup
												className='col-md-3'
												id='formMiddleName'
												label='Middle Name'>
												<Input
													placeholder='John'
													autoComplete='additional-name'
													onChange={formik.handleChange}
													value={formik.values.formMiddleName}
												/>
											</FormGroup>
											<FormGroup
												className='col-md-4'
												id='formSurName'
												label='Sur Name'>
												<Input
													placeholder='Doe'
													autoComplete='family-name'
													onChange={formik.handleChange}
													value={formik.values.formSurName}
												/>
											</FormGroup>
											<FormGroup
												className='col-lg-6'
												id='formEmailAddress'
												label='Email Address'>
												<Input
													type='email'
													placeholder='john@domain.com'
													autoComplete='email'
													onChange={formik.handleChange}
													value={formik.values.formEmailAddress}
												/>
											</FormGroup>
											<FormGroup
												className='col-lg-6'
												id='formPhone'
												label='Phone'>
												<Input
													type='tel'
													placeholder='+1 (999) 999-9999'
													autoComplete='tel'
													mask='+1 (999) 999-9999'
													onChange={formik.handleChange}
													value={formik.values.formPhone}
												/>
											</FormGroup>
										</div>
									</CardBody>
									<CardFooter>
										<CardFooterRight>
											<Button type='submit' color='primary' icon='Save'>
												Save
											</Button>
										</CardFooterRight>
									</CardFooter>
								</Card>
								<Alert
									isLight
									className='border-0'
									shadow='md'
									icon='Public'
									color='warning'>
									As soon as you save the information, it will be shown to
									everyone automatically.
								</Alert>
							</CardTabItem>
							<CardTabItem id='address' title='Address' icon='HolidayVillage'>
								<Card
									className='rounded-2'
									tag='form'
									onSubmit={formik.handleSubmit}>
									<CardHeader>
										<CardLabel icon='HolidayVillage'>
											<CardTitle>Address Information</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<div className='row g-4'>
											<FormGroup
												className='col-12'
												id='formAddressLine'
												label='Address Line'>
												<Input
													placeholder='Address Line'
													autoComplete='address-line1'
													onChange={formik.handleChange}
													value={formik.values.formAddressLine}
												/>
											</FormGroup>
											<FormGroup
												className='col-12'
												id='formAddressLine2'
												label='Address Line 2'>
												<Input
													placeholder='Address Line 2'
													autoComplete='address-line2'
													onChange={formik.handleChange}
													value={formik.values.formAddressLine2}
												/>
											</FormGroup>
											<FormGroup
												className='col-md-6'
												id='formCity'
												label='City'>
												<Input
													placeholder='City'
													autoComplete='address-level2'
													onChange={formik.handleChange}
													value={formik.values.formCity}
												/>
											</FormGroup>
											<FormGroup
												className='col-md-4'
												id='formState'
												label='State'>
												<Input
													placeholder='State'
													autoComplete='country-name'
													onChange={formik.handleChange}
													value={formik.values.formState}
												/>
											</FormGroup>
											<FormGroup
												className='col-md-2'
												id='formZIP'
												label='ZIP Code'>
												<Input
													placeholder='ZIP'
													autoComplete='postal-code'
													onChange={formik.handleChange}
													value={formik.values.formZIP}
												/>
											</FormGroup>
										</div>
									</CardBody>
									<CardFooter>
										<CardFooterRight>
											<Button type='submit' color='info' icon='Save'>
												Save
											</Button>
										</CardFooterRight>
									</CardFooter>
								</Card>
							</CardTabItem>
							<CardTabItem id='profile2' title='Password' icon='Lock'>
								<Card
									className='rounded-2'
									tag='form'
									onSubmit={formik.handleSubmit}>
									<CardHeader>
										<CardLabel icon='Lock'>
											<CardTitle>Change Password</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<div className='row g-4'>
											<FormGroup
												className='col-lg-4'
												id='formCurrentPassword'
												label='Current Password'>
												<Input
													type='password'
													placeholder='Current Password'
													autoComplete='current-password'
													onChange={formik.handleChange}
													value={formik.values.formCurrentPassword}
												/>
											</FormGroup>
											<div className='w-100 m-0' />
											<FormGroup
												className='col-lg-4'
												id='formNewPassword'
												label='New Password'>
												<Input
													type='password'
													placeholder='New Password'
													autoComplete='new-password'
													onChange={formik.handleChange}
													value={formik.values.formNewPassword}
												/>
											</FormGroup>
											<div className='w-100 m-0' />
											<FormGroup
												className='col-lg-4'
												id='formConfirmNewPassword'
												label='Confirm New Password'>
												<Input
													type='password'
													placeholder='Confirm New Password'
													autoComplete='new-password'
													onChange={formik.handleChange}
													value={formik.values.formConfirmNewPassword}
												/>
											</FormGroup>
										</div>
									</CardBody>
									<CardFooter>
										<CardFooterRight>
											<Button type='submit' color='info' icon='Save'>
												Change Password
											</Button>
										</CardFooterRight>
									</CardFooter>
								</Card>
							</CardTabItem>
						</Card>
					</div>
				</div>

				<Modal setIsOpen={setSelectedImage} isOpen={!!selectedImage} isCentered>
					<ModalHeader setIsOpen={setSelectedImage}>
						<ModalTitle id='preview'>Preview</ModalTitle>
					</ModalHeader>
					<ModalBody>
						<img src={selectedImage} alt='eneme' />
					</ModalBody>
				</Modal>

			</Page>
		</PageWrapper>
	);
};

export default Biodata;
