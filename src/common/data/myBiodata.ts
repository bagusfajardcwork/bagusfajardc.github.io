import MyPhoto from '../../assets/img/user/my-photo.png';
import MyPhotoGhibli from '../../assets/img/user/my-photo-ghibli-ver.png';
import CV from '../../assets/pdf/dummyCV.pdf'

function calcUmur() {
	const today = new Date();
	const birthDate = new Date('1996-12-04');
	let umur = today.getFullYear() - birthDate.getFullYear();
	const bulan = today.getMonth() - birthDate.getMonth();

	if (bulan < 0 || (bulan === 0 && today.getDate() < birthDate.getDate())) {
		// eslint-disable-next-line no-plusplus
		umur--;
	}

	return umur;
};

const bagusfajardc = {
	surename: 'Bagus Fajar Dwicahyo',
	frontname: 'Bagus',
	Lastname: 'Fajar Dwicahyo',
	nickname: 'Bagus',
	birthday: '04 Desember 1996',
	status: 'Menikah',
	gender: 'Laki-laki',
	birtplace: 'Jakarta',
	age: calcUmur(),
	address: 'Jl. Kemiri Jaya II, Beji, Depok, Jawa Barat',
	handphone: '+62 851-6191-9679',
	degree: 'S1 - Teknik Informatika',
	college: 'Universitas Gunadarma',
	score: '3.15',
	position: 'Programmer',
	email: 'bagusfajardcwork@gmail.com',
	src: MyPhoto,
	srcGhibli: MyPhotoGhibli,
	srcSet: MyPhoto,
	cv: CV,
};

const data = {
	user: bagusfajardc,
};

export default data;
