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
// import FormGroup from '../../../components/bootstrap/forms/FormGroup';
// import Input from '../../../components/bootstrap/forms/Input';
import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
// import Alert from '../../../components/bootstrap/Alert';
import Avatar from '../../../components/Avatar';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../../../components/bootstrap/Modal';
import { myBiodata } from '../../../menu';
import Carousel from '../../../components/bootstrap/Carousel';
import CarouselSlide from '../../../components/bootstrap/CarouselSlide';
import useDarkMode from '../../../hooks/useDarkMode';
import Accordion, { AccordionItem } from '../../../components/bootstrap/Accordion';
import '/src/styles/custom/custom-style.css'; //

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
const sertifikasi = userData.sertifikasi;

const Biodata = () => {
	const { darkModeStatus } = useDarkMode();
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

	const SERTIFIKASI = (
		<Card hasTab>
			{sertifikasi.map((item, index) => (
				<CardTabItem id={item.id} title={item.judul} icon={item.icon} >
					<Card className='rounded-2'>
						<CardHeader>
							<CardLabel icon={item.icon}>
								<CardTitle>{item.judul}</CardTitle>
							</CardLabel>
						</CardHeader>
						<CardBody>
							<div className='row g-4'>
								<blockquote className='blockquote'>
									<p>{item.deskripsi}</p>
								</blockquote>
							</div>
						</CardBody>
						<CardFooter>
							<CardFooterRight>
								<div className='align-content-center'>
									<p className='fst-italic fw-bold'>
										<Icon icon='DateRange' size='2x' color={darkModeStatus ? 'warning' : 'dark'} className='mx-2' />
										{item.tanggal}
									</p>
								</div>
								{/*<Button type='submit' color='info' icon='Save'>*/}
								{/*	Change Password*/}
								{/*</Button>*/}
							</CardFooterRight>
						</CardFooter>
					</Card>
				</CardTabItem>
			))}
		</Card>
	)

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
												<div
													className={`${darkModeStatus ? 'text-light' : 'text-muted'} h5`}>
													{user.position}
												</div>
											</div>
										</div>
									</div>
									<div className='col-12'>
										<div className='row g-3'>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon
															icon='Mail'
															size='3x'
															color='danger'
														/>
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															{user.email || '-'}
														</div>
														<div className='text-muted'>Email</div>
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
														<div className='text-muted'>
															No. Handphone (Whatsapp)
														</div>
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
									<CardTitle
										className={`${darkModeStatus ? 'text-warning' : 'text-dark'}`}>
										Get In Touch !
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Halo saya{' '}
									<span className='fst-italic fw-bold'>Bagus Fajar Dwicahyo</span>{' '}
									bisa panggil saya{' '}
									<span className='fst-italic fw-bold'>Bagus</span>. <br />
									Saya sudah beberapa tahun menjadi programmer baik{' '}
									<span className='fst-italic fw-bold'>backend</span> maupun{' '}
									<span className='fst-italic fw-bold'>frontend. </span> <br />
									Tetapi saat ini lebih terfokus untuk pengembangan disisi
									tampilannya (frontend). Saya juga biasa membuat{' '}
									<span className='fst-italic fw-bold'>
										query (MySQL / PostgreSQL)
									</span>{' '}
									untuk kebutuhan{' '}
									<span className='fst-italic fw-bold'>reporting </span>
									sesuai kebutuhan data yang ingin ditampilkan menggunakan{' '}
									<span className='fst-italic fw-bold'> JasperReport </span> untuk
									tools yang digunakan.
								</p>
								<p
									className={`${darkModeStatus ? 'text-light' : 'text-primary'} fst-italic`}>
									Untuk informasi lainnya bisa kontak melalui nomor diatas atau
									dengan informasi pada halaman ini.
								</p>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<CardLabel
									icon='School'
									iconColor={darkModeStatus ? 'warning' : 'dark'}
									className={classNames({
										'text-dark': darkModeStatus,
										'text-light': !darkModeStatus,
									})}>
									<CardTitle
										className={`${darkModeStatus ? 'text-warning' : 'text-dark'}`}>
										Pendidikan
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='p-4'>
									<div
										className={`${darkModeStatus ? 'border-warning' : ''} border-start border-2 ps-3`}>
										{pendidikan.map((item, index) => (
											<div key={index} className='mb-3'>
												<div className='row align-items-center'>
													<div className='col-2'>
														<img
															src={item.path}
															style={{
																maxWidth: '3rem',
																maxHeight: '3rem',
															}}
															alt='Edukasi'
														/>
													</div>
													<div className='col-10'>
														<div className='d-flex align-items-center'>
															<span className='me-2'>
																{item.icon}
															</span>
															<strong>{item.place}</strong>
														</div>
														<div>
															{item.jurusan}{' '}
															<strong>
																{item.skor
																	? `, IPK ${item.skor}`
																	: ''}
															</strong>
														</div>
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
											<h2
												className={
													darkModeStatus ? 'text-dark' : 'text-light'
												}>
												Curriculum Vitae
											</h2>
											<p
												className={
													darkModeStatus ? 'text-dark' : 'text-light'
												}>
												Unduh CV saya :
											</p>
											<Button
												color={darkModeStatus ? 'dark' : 'warning'}
												icon='Download'
												hoverShadow='lg'
												shadow='lg'
												onClick={() =>
													downloadFile(
														user.cv,
														'CV-BagusFajarDwicahyo.pdf',
													)
												}>
												Unduh
											</Button>
										</div>
									</div>
								</CarouselSlide>
								<CarouselSlide>
									<div className='row align-items-center h-100'>
										<div className='col-6 text-end text-light'>
											<h2
												className={
													darkModeStatus ? 'text-dark' : 'text-warning'
												}>
												Halo,
											</h2>
											<h5
												className={
													darkModeStatus ? 'text-dark' : 'text-warning'
												}>
												Selamat datang di halaman Curriculum Vitae saya
											</h5>
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
							<CardHeader
								className={classNames(
									{
										'bg-warning': darkModeStatus,
										'bg-dark': !darkModeStatus,
									},
									'bg-gradient',
								)}>
								<CardLabel
									icon='VerifiedUser'
									iconColor={darkModeStatus ? 'dark' : 'light'}
									className={classNames({
										'text-dark': darkModeStatus,
										'text-light': !darkModeStatus,
									})}>
									<CardTitle
										className={`${darkModeStatus ? 'text-dark' : 'text-light'}`}>
										Biodata
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>{BIODATA}</CardBody>
						</Card>
						<Card>
							<CardHeader
								className={classNames(
									{
										'bg-warning': darkModeStatus,
										'bg-dark': !darkModeStatus,
									},
									'bg-gradient',
								)}>
								<CardLabel
									icon='Work'
									iconColor={darkModeStatus ? 'dark' : 'light'}
									className={classNames({
										'text-dark': darkModeStatus,
										'text-light': !darkModeStatus,
									})}>
									<CardTitle
										className={`${darkModeStatus ? 'text-dark' : 'text-light'}`}>
										Pengalaman Kerja
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>{PENGALAMANKERJA}</CardBody>
						</Card>
						<div>
							{SERTIFIKASI}
						</div>
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
