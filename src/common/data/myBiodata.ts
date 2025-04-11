import MyPhoto from '../../assets/img/user/my-photo.png';
import MyPhotoGhibli from '../../assets/img/user/my-photo-ghibli-ver.png';
import Gundarma from '../../assets/img/other/gunadarma.png';
import Sejahtera1 from '../../assets/img/other/sejahtera1depok.png';
import CV from '../../assets/pdf/dummyCV.pdf';

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

type BiodataItem = {
	icon: string;
	judul: string;
	deskripsi: string;
};

type EdukasiItem = {
	judul: string;
	place: string;
	icon: string;
	jurusan: string;
	skor: string;
	tanggal: string;
	path: String;
};

type ProfileItem = {
	surename: string;
	frontname: string;
	Lastname: string;
	nickname: string;
	birthday: string;
	status: string;
	gender: string;
	birtplace: string;
	age: string;
	address: string;
	handphone: string;
	degree: string;
	college: string;
	score: string;
	position: string;
	email: string;
	src: StaticImageData;
	srcGhibli: StaticImageData;
	srcSet: StaticImageData;
	cv: string;
};

type PengalamanKerjaItem = {
	id: number;
	posisi: string;
	tanggal: string;
	lokasi: string;
	warna: string;
	icon: string;
	active: boolean;
	detail: any;
};

type SertifikasiItem = {
	id: string;
	judul: string;
	icon: string;
	deskripsi: string;
	tanggal: string;
};

const profile: ProfileItem[] = {
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

const edukasi: EdukasiItem[] = [
	{ judul: "Universitas", place: "Universitas Gunadarma", icon: "🟣", jurusan: "Teknik Informatika", skor: "IPK 3.25", tanggal: "Agt. 2015 - Sept. 2019", path: Gundarma },
	{ judul: "Sekolah Menengah Pertama", place: "Sejahtera 1 Depok", icon: "🟣", jurusan: "IPA", skor: "", tanggal: "Jan. 2012 - Jan. 2025", path: Sejahtera1 },
];

const biodataItem: BiodataItem[] = [
	{
		icon: 'DriveFileRenameOutline',
		judul: 'Nama Lengkap',
		deskripsi: 'Bagus Fajar Dwicahyo, (Bagus)',
	},
	{
		icon: 'DateRange',
		judul: 'Tempat, Tgl. Lahir',
		deskripsi: `Jakarta, 04 Desember 1996 (${calcUmur()} tahun)`,
	},
	{
		icon: 'Transgender',
		judul: 'Jenis Kelamin',
		deskripsi: 'Laki-laki',
	},
	{
		icon: 'EditLocation',
		judul: 'Alamat',
		deskripsi: 'Jl. Kemiri Jaya II, Beji, Depok, Jawa Barat',
	},
	{
		icon: 'Mail',
		judul: 'Email',
		deskripsi: 'bagusfajardcwork@gmail.com',
	},
	{
		icon: 'PhoneAndroid',
		judul: 'Whatsapp',
		deskripsi: '+62 851-6191-9679',
	},
];

const pengalamankerjaItem: PengalamanKerjaItem[] = [
	{
		id: 1,
		posisi: "Jr. Programmer",
		tanggal: "Agt 2020 - Agt. 2021",
		lokasi: "PT. ALTRAK 1978",
		warna: 'info',
		icon: 'MapsHomeWork',
		active: false,
		detail: [
			{ deskripsi: "Pembuatan website perusahaan (Company Profile)" }
		]
	},
	{
		id: 2,
		posisi: "Programmer",
		tanggal: "Feb 2022 - Sekarang",
		lokasi: "RS. Fatmawati",
		warna: 'success',
		icon: 'MedicalServices',
		active: true,
		detail: [
			{ deskripsi: "Pengembangan dan pembuatan Rekam Medis Elektronik (SIMRSGOS2 Development internal RS. Fatmawati)" },
			{ deskripsi: "Pengembangan dan pembuatan Rekam Medis Elektronik SIMRSF (RME RS. Fatmawati)" },
			{ deskripsi: "Pengembangan website RS. Fatmawati" },
			{ deskripsi: "Pembuatan reporting untuk Rekam Medis Elektronik RS. Fatmawati" },
		]
	}
];

const sertifikasiItem: SertifikasiItem[] = [
	{ id: "srt1", judul: "Dicoding Indonesia", icon: "TipsAndUpdates", deskripsi: "Dasar Pemrograman Web", tanggal: "April 2023" },
	{ id: "srt2", judul: "Digitalent Kominfo", icon: "TipsAndUpdates", deskripsi: "Konfigurasi Dasar Kemampuan Komputer", tanggal: "Juni 2020" },
	{ id: "srt3", judul: "PT. Multi Inti Digital Bisnis", icon: "TipsAndUpdates", deskripsi: "ERP Next Functional Program", tanggal: "Feb 2020" },
	{ id: "srt4", judul: "Database Administration Fundamentals", icon: "TipsAndUpdates", deskripsi: "Dasar-dasar Query", tanggal: "Oktober 2019" },
	{ id: "srt5", judul: "Fundamental DBMS", icon: "TipsAndUpdates", deskripsi: "Fundamental (dasar-dasar) DBMS", tanggal: "Agustus 2016" },
	// { id: "", judul: "", icon: "", deskripsi: "", tanggal: "" },
];


const data = {
	user: profile,
	pendidikan: edukasi,
	biodata: biodataItem,
	pengalamankerja: pengalamankerjaItem,
	sertifikasi: sertifikasiItem,
};

export default data;
