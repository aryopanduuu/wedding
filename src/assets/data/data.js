export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Aryo Pandu D.A',
            child: 'Putra ke 2',
            father: 'Andi W',
            mother: 'Nuke E',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Nafika Siti Nur Annisa',
            child: 'Putri ke 1',
            father: 'Komari',
            mother: '',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Maret',
            date: '24',
            day: 'Selasa',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Maret',
            date: '24',
            day: 'Selasa',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Masjid Ulul Azmi Universitas Airlangga'
    },

    link: {
        calendar: 'https://calendar.app.google/2bkRUp277sVfnzGN8',
        map: 'https://maps.app.goo.gl/p7fWNaxpAXenS3w59',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'BCA',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'BRI',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbzZk1fVueKgx2uahLsCAeD4zj0nQ3UMY-IPqEJLR1gO6XpCuJ0nuvXA1mg5ssjNO4cl/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
