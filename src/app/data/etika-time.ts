import { Quiz } from "@/app/types/quiz";

export const garisMasa: Quiz = {
  id: "garis-masa",
  categoryId: "etika",
  subcategoryId: "garis-masa",
  title: "Garis Masa Peristiwa",
  questions: [
    {
      id: "timeline-q1",
      text: "Pada tahun 1946, pihak British telah memperkenalkan Malayan Union. Apakah ciri utama gagasan ini yang menjadi punca penentangan hebat daripada orang Melayu?",
      options: [
        {
          id: "a",
          text: "Singapura dipisahkan daripada Tanah Melayu dan dijadikan tanah jajahan berasingan.",
        },
        {
          id: "b",
          text: "Hak kerakyatan diberikan berdasarkan prinsip jus soli dan kedaulatan Raja-Raja Melayu terhakis.",
        },
        {
          id: "c",
          text: "Sistem Residen diperkenalkan di setiap negeri untuk menasihati Sultan dalam semua urusan pentadbiran.",
        },
        {
          id: "d",
          text: "Negeri-Negeri Melayu Bersekutu dan Tidak Bersekutu digabungkan di bawah seorang Gabenor Jeneral.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Dua isu utama yang mencetuskan kemarahan orang Melayu ialah pemberian kerakyatan yang longgar melalui prinsip jus soli dan penghapusan kedaulatan Raja-Raja Melayu, yang mana kuasa mereka hanya terhad kepada hal ehwal agama Islam dan adat istiadat Melayu.",
        incorrect: {
          a: "Walaupun ini adalah salah satu ciri Malayan Union, ia bukanlah punca utama penentangan. Isu kedaulatan dan kerakyatan adalah lebih sensitif dan menjadi faktor utama penentangan orang Melayu.",
          c: "Sistem Residen diperkenalkan lebih awal, iaitu selepas Perjanjian Pangkor pada tahun 1874, dan merupakan ciri pentadbiran British sebelum Malayan Union.",
          d: "Walaupun semua negeri Melayu disatukan di bawah seorang Gabenor British, isu penggabungan ini sendiri bukanlah punca utama kemarahan berbanding isu kedaulatan raja dan hak kerakyatan.",
        },
      },
    },
    {
      id: "timeline-q2",
      text: "Berikutan penolakan Malayan Union, Perjanjian Persekutuan Tanah Melayu telah dikuatkuasakan pada 1 Februari 1948. Apakah perubahan UTAMA yang diperkenalkan melalui perjanjian ini berbanding Malayan Union?",
      options: [
        {
          id: "a",
          text: "Singapura dimasukkan semula ke dalam Persekutuan Tanah Melayu.",
        },
        {
          id: "b",
          text: "Syarat kewarganegaraan diketatkan dan kedudukan Raja-Raja Melayu dipulihkan.",
        },
        {
          id: "c",
          text: "Sistem Jemaah Menteri diperkenalkan untuk menggantikan Majlis Mesyuarat Kerajaan Persekutuan.",
        },
        {
          id: "d",
          text: "Hak istimewa orang Melayu dimansuhkan sepenuhnya untuk memberi hak sama rata kepada semua warganegara.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perjanjian ini secara langsung menangani dua bantahan utama terhadap Malayan Union dengan memulihkan kedaulatan Raja-Raja Melayu sebagai ketua negeri dan mengetatkan syarat-syarat untuk mendapatkan kewarganegaraan bagi bukan Melayu.",
        incorrect: {
          a: "Di bawah Perjanjian Persekutuan Tanah Melayu 1948, Singapura kekal sebagai tanah jajahan British yang berasingan.",
          c: "Sistem Jemaah Menteri hanya diperkenalkan selepas Pilihan Raya Umum 1955, di mana Tunku Abdul Rahman membentuk kabinet pertama. Perjanjian 1948 masih mengekalkan Pesuruhjaya Tinggi British sebagai ketua eksekutif.",
          d: "Perjanjian ini sebaliknya mengembalikan dan menjamin kedudukan istimewa orang Melayu sebagai kaum bumiputera, bertentangan dengan prinsip hak sama rata Malayan Union.",
        },
      },
    },
    {
      id: "timeline-q3",
      text: "Jawatankuasa Perhubungan Antara Kaum atau Communities Liaison Committee (CLC) telah ditubuhkan pada tahun 1949. Apakah peranan utama jawatankuasa ini dalam konteks sejarah menuju kemerdekaan?",
      options: [
        {
          id: "a",
          text: "Merangka draf perlembagaan pertama bagi Persekutuan Tanah Melayu.",
        },
        {
          id: "b",
          text: "Menjadi platform awal bagi pemimpin pelbagai etnik untuk berunding mengenai isu-isu sensitif.",
        },
        {
          id: "c",
          text: "Menguruskan pelaksanaan Pilihan Raya Umum Persekutuan yang pertama pada tahun 1955.",
        },
        {
          id: "d",
          text: "Menuntut kemerdekaan segera daripada pihak British tanpa melalui proses rundingan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "CLC merupakan tapak integrasi awal yang penting di mana pemimpin utama kaum Melayu, Cina, dan India bertemu untuk membincangkan dan mencari jalan penyelesaian secara muafakat terhadap isu-isu seperti kewarganegaraan dan kedudukan istimewa orang Melayu.",
        incorrect: {
          a: "Tugas merangka Perlembagaan Persekutuan Tanah Melayu yang merdeka dijalankan oleh Suruhanjaya Reid yang dibentuk pada tahun 1956.",
          c: "Pilihan raya diuruskan oleh suruhanjaya pilihan raya yang ditubuhkan oleh pentadbiran British. CLC lebih fokus kepada perbincangan dasar dan hubungan antara kaum.",
          d: "CLC adalah platform untuk rundingan dan kerjasama, bukan konfrontasi. Pendekatan kerjasama inilah yang akhirnya meyakinkan British untuk memberikan kemerdekaan.",
        },
      },
    },
    {
      id: "timeline-q4",
      text: "Pilihan Raya Umum Persekutuan Tanah Melayu yang pertama telah diadakan pada tahun 1955. Apakah signifikasi utama pilihan raya ini kepada landskap politik negara?",
      options: [
        {
          id: "a",
          text: "Ia menandakan berakhirnya pentadbiran British secara mutlak di Tanah Melayu.",
        },
        {
          id: "b",
          text: "Parti Perikatan memenangi semua kerusi yang dipertandingkan, menunjukkan penguasaan penuh.",
        },
        {
          id: "c",
          text: "Ia membuktikan model perkongsian kuasa antara kaum melalui Parti Perikatan diterima oleh rakyat.",
        },
        {
          id: "d",
          text: "Sistem kewarganegaraan jus soli diperkenalkan serta-merta selepas kemenangan Parti Perikatan.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Kemenangan besar Parti Perikatan, yang dianggotai oleh UMNO, MCA, dan MIC, menunjukkan bahawa rakyat pelbagai kaum menyokong formula kerjasama dan tolak ansur politik antara etnik sebagai asas untuk mentadbir negara.",
        incorrect: {
          a: "Walaupun pilihan raya ini memberikan autonomi pemerintahan dalaman, pentadbiran British masih mempunyai kuasa dalam aspek pertahanan dan hal ehwal luar negeri sehingga kemerdekaan penuh pada tahun 1957.",
          b: "Parti Perikatan menang besar dengan memenangi 51 daripada 52 kerusi yang dipertandingkan, bukan semua. Satu kerusi dimenangi oleh PAS.",
          d: "Isu kewarganegaraan, termasuk elemen jus soli, hanya dimuktamadkan dalam Perlembagaan Persekutuan pada tahun 1957 selepas rundingan dengan Suruhanjaya Reid, sebagai sebahagian daripada kontrak sosial.",
        },
      },
    },
    {
      id: "timeline-q5",
      text: "Selepas peristiwa 13 Mei 1969, kerajaan telah memperkenalkan satu ideologi kebangsaan pada 31 Ogos 1970 untuk memupuk semula perpaduan kaum. Apakah ideologi tersebut?",
      options: [
        { id: "a", text: "Dasar Ekonomi Baru" },
        { id: "b", text: "Rukun Negara" },
        { id: "c", text: "Wawasan 2020" },
        { id: "d", text: "Gagasan 1Malaysia" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Rukun Negara telah diisytiharkan oleh Yang di-Pertuan Agong pada 31 Ogos 1970 sebagai ideologi dan falsafah negara yang menggariskan lima prinsip untuk membimbing rakyat Malaysia ke arah perpaduan yang lebih erat.",
        incorrect: {
          a: "Dasar Ekonomi Baru (DEB) dilancarkan pada tahun 1971 di bawah Rancangan Malaysia Kedua. Walaupun matlamatnya untuk mengukuhkan perpaduan melalui pengagihan ekonomi, ia adalah sebuah dasar ekonomi, bukan ideologi kebangsaan.",
          c: "Wawasan 2020 diperkenalkan oleh Tun Dr. Mahathir Mohamad pada tahun 1991, dengan matlamat menjadikan Malaysia sebuah negara maju.",
          d: "Gagasan 1Malaysia diperkenalkan oleh Dato' Sri Najib Razak pada tahun 2009 untuk memupuk perpaduan dalam kepelbagaian.",
        },
      },
    },
    {
      id: "timeline-q6",
      text: 'Istilah "Perpaduan" secara rasmi diperkenalkan dan digunakan secara meluas dalam perancangan pembangunan negara bagi menggantikan konsep "Kesatuan" selepas satu peristiwa bersejarah. Bilakah perubahan istilah ini mula dilaksanakan secara dasar?',
      options: [
        {
          id: "a",
          text: "Sejurus selepas pembentukan Malaysia pada tahun 1963.",
        },
        { id: "b", text: "Selepas tragedi rusuhan kaum pada 13 Mei 1969." },
        { id: "c", text: "Melalui pengenalan Rukun Negara pada tahun 1970." },
        {
          id: "d",
          text: "Dalam Rancangan Malaysia Kedua yang bermula pada tahun 1971.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          'Dokumen Rancangan Malaysia Kedua (1971-1975) secara eksplisit menggunakan istilah "Perpaduan Negara" sebagai matlamat utamanya, menggantikan retorik "Kesatuan" yang digunakan sebelum ini, dan menggariskan strategi penyatuan sosial melalui DEB.',
        incorrect: {
          a: "Selepas 1963, konsep yang ditekankan masih lagi berkisar tentang 'Kesatuan' dalam sebuah persekutuan yang lebih luas.",
          b: "Walaupun peristiwa 1969 menjadi pencetus utama kepada perubahan ini, pelaksanaan dasar secara rasmi berlaku kemudian. Peristiwa itu sendiri adalah punca, bukan tarikh pelaksanaannya.",
          c: 'Rukun Negara diperkenalkan untuk membina perpaduan, tetapi penggunaan istilah "Perpaduan" secara spesifik dalam kerangka dasar pembangunan ekonomi dan sosial negara bermula selepas itu.',
        },
      },
    },
    {
      id: "timeline-q7",
      text: "Dasar Ekonomi Baru (DEB) telah dilancarkan pada tahun 1971 dengan matlamat serampang dua mata. Apakah matlamat tersebut?\nI. Membasmi kemiskinan tanpa mengira kaum.\nII. Menghapuskan pengenalan kaum mengikut fungsi ekonomi.\nIII. Mencapai pemilikan ekuiti korporat 50% oleh Bumiputera.\nIV. Membandarkan masyarakat luar bandar secara besar-besaran.",
      options: [
        { id: "a", text: "I dan II" },
        { id: "b", text: "I dan IV" },
        { id: "c", text: "II dan III" },
        { id: "d", text: "III dan IV" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Dua objektif rasmi DEB yang dinyatakan dengan jelas ialah membasmi kemiskinan semua kaum dan menyusun semula masyarakat untuk menghapuskan pengenalan kaum dengan fungsi ekonomi.",
        incorrect: {
          b: "Walaupun pembandaran berlaku sebagai kesan sampingan pembangunan di bawah DEB, ia bukanlah matlamat utama yang digariskan. Matlamatnya lebih kepada penyusunan semula masyarakat.",
          c: "Sasaran pemilikan ekuiti korporat untuk Bumiputera di bawah DEB adalah 30%, bukan 50%.",
          d: "Kedua-dua pernyataan ini tidak tepat. Sasaran ekuiti adalah 30% dan pembandaran bukanlah objektif teras DEB.",
        },
      },
    },
    {
      id: "timeline-q8",
      text: "Pada tahun bilakah idea untuk menghubungkan Malaysia dengan dunia melalui internet mula dicetuskan di sebuah makmal universiti tempatan, yang menjadi titik permulaan kepada pembangunan internet negara?",
      options: [
        { id: "a", text: "1970" },
        { id: "b", text: "1983" },
        { id: "c", text: "1991" },
        { id: "d", text: "1996" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Idea awal pembangunan internet di Malaysia telah dimulakan oleh Dr. Mohamed Awang-Lah di makmal Universiti Malaya pada tahun 1983, yang kemudiannya membawa kepada penubuhan RangKoM dan JARING.",
        incorrect: {
          a: "Pada tahun 1970, fokus negara adalah pada Rukun Negara dan perancangan DEB. Teknologi internet global masih di peringkat awal dan belum sampai ke Malaysia.",
          c: "Pada tahun 1991, JARING (Joint Advanced Integrated Networking) telah dilancarkan secara rasmi. Ini adalah hasil daripada idea dan usaha yang bermula lebih awal.",
          d: "Tahun 1996 adalah tahun pelancaran Koridor Raya Multimedia (MSC), satu fasa pembangunan ICT yang lebih pesat, tetapi bukan titik permulaan idea internet di Malaysia.",
        },
      },
    },
    {
      id: "timeline-q9",
      text: "Pembentukan Persekutuan Malaysia pada 16 September 1963 telah memperluaskan konsep 'Kesatuan' yang sedia ada. Negeri-negeri manakah yang terlibat dalam pembentukan ini?",
      options: [
        {
          id: "a",
          text: "Persekutuan Tanah Melayu, Singapura, Borneo Utara, dan Brunei.",
        },
        {
          id: "b",
          text: "Persekutuan Tanah Melayu, Singapura, Sarawak, dan Borneo Utara.",
        },
        {
          id: "c",
          text: "Persekutuan Tanah Melayu, Singapura, Sarawak, dan Kepulauan Riau.",
        },
        {
          id: "d",
          text: "Persekutuan Tanah Melayu, Sarawak, Borneo Utara, dan Filipina.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Malaysia dibentuk melalui penyatuan Persekutuan Tanah Melayu dengan tiga entiti baru iaitu Singapura, Sarawak, dan Borneo Utara (yang kemudiannya dinamakan Sabah). Singapura kemudiannya keluar dari persekutuan pada tahun 1965.",
        incorrect: {
          a: "Brunei pada awalnya terlibat dalam rundingan tetapi memilih untuk tidak menyertai Persekutuan Malaysia pada saat-saat akhir.",
          c: "Kepulauan Riau adalah sebahagian daripada Indonesia dan tidak pernah terlibat dalam rundingan pembentukan Malaysia.",
          d: "Filipina menentang pembentukan Malaysia kerana tuntutannya ke atas Borneo Utara (Sabah) dan tidak pernah menjadi sebahagian daripada rundingan penyertaan.",
        },
      },
    },
    {
      id: "timeline-q10",
      text: "Kerajaan Malaysia telah melaksanakan satu usaha serius untuk mengukur tahap perpaduan negara secara objektif buat pertama kalinya. Bilakah Indeks Perpaduan Nasional (IPNas) ini dilaksanakan?",
      options: [
        { id: "a", text: "1990-1991" },
        { id: "b", text: "2008-2009" },
        { id: "c", text: "2013-2014" },
        { id: "d", text: "2017-2018" },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Nota menyatakan dengan jelas bahawa usaha pertama kali dalam sejarah Malaysia untuk membina Indeks Perpaduan Nasional (IPNas) telah dilaksanakan pada tahun 2017-2018.",
        incorrect: {
          a: "Ini adalah era pelancaran Wawasan 2020. Tiada usaha untuk membina indeks perpaduan secara kuantitatif pada ketika ini.",
          b: "Ini adalah era pengenalan Gagasan 1Malaysia. Walaupun fokus pada perpaduan, IPNas belum dibangunkan.",
          c: "Ini adalah tempoh selepas PRU-13 di mana isu-isu perkauman semakin hangat, tetapi pembangunan IPNas belum dimulakan.",
        },
      },
    },
    {
      id: "timeline-q11",
      text: "Pada zaman Kesultanan Melayu Melaka (kurun ke-15), interaksi dengan pelbagai peradaban luar telah berlaku secara semula jadi. Apakah corak masyarakat yang terbentuk pada era ini?",
      options: [
        { id: "a", text: "Masyarakat Majmuk" },
        { id: "b", text: "Masyarakat Pluraliti" },
        { id: "c", text: "Masyarakat Segregasi" },
        { id: "d", text: "Masyarakat Asimilasi" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Zaman Melaka digambarkan sebagai zaman pluraliti, di mana penghijrahan dan interaksi antara peradaban berlaku secara sukarela dan semula jadi, terutamanya melalui perdagangan. Ini membawa kepada proses asimilasi dan amalgamasi budaya tanpa paksaan.",
        incorrect: {
          a: "Istilah 'Masyarakat Majmuk' secara spesifik merujuk kepada masyarakat yang dibentuk semasa era penjajahan British, di mana kaum-kaum dibawa masuk untuk tujuan ekonomi dan dipisahkan mengikut fungsi pekerjaan dan penempatan.",
          c: "Segregasi atau pemisahan kaum adalah ciri utama masyarakat majmuk era kolonial, bukan era pluraliti Melaka di mana interaksi dan pergaulan digalakkan.",
          d: "Walaupun proses asimilasi (seperti pembentukan komuniti Baba dan Nyonya) berlaku, ia adalah salah satu hasil daripada masyarakat pluraliti. 'Pluraliti' adalah istilah yang lebih tepat untuk menggambarkan keseluruhan corak masyarakat pada ketika itu.",
        },
      },
    },
    {
      id: "timeline-q12",
      text: "Sebelum kedatangan kuasa kolonial Barat, negeri-negeri Melayu telah mempunyai sistem perundangan bertulis mereka sendiri. Negeri Johor dan Terengganu telah memperkenalkan perlembagaan bertulis masing-masing pada tahun:",
      options: [
        { id: "a", text: "1874 dan 1888" },
        { id: "b", text: "1895 dan 1911" },
        { id: "c", text: "1909 dan 1914" },
        { id: "d", text: "1946 dan 1948" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan bahawa Negeri Johor telah menggubal Undang-undang Tubuh Kerajaan Johor pada tahun 1895, manakala Terengganu memperkenalkan Itqan-ilmuluk bi-ta'dil il-suluk pada tahun 1911.",
        incorrect: {
          a: "Ini adalah tahun-tahun campur tangan British di Perak dan Pahang.",
          c: "1909 adalah tahun Perjanjian Bangkok (penyerahan negeri-negeri utara kepada British) dan 1914 adalah tahun Johor menerima Penasihat British.",
          d: "Ini adalah tahun pengenalan Malayan Union dan Persekutuan Tanah Melayu.",
        },
      },
    },
    {
      id: "timeline-q13",
      text: "Era pasca-kolonial di Malaysia menyaksikan evolusi masyarakat daripada 'masyarakat majmuk' kepada 'masyarakat kepelbagaian'. Apakah faktor utama yang memacu transformasi sosial ini bermula dari dekad 1970-an?",
      options: [
        { id: "a", text: "Pengenalan sistem pendidikan vernakular." },
        {
          id: "b",
          text: "Pelaksanaan Dasar Ekonomi Baru (DEB) dan proses perindustrian.",
        },
        {
          id: "c",
          text: "Kemasukan beramai-ramai buruh asing dari Indonesia dan Bangladesh.",
        },
        {
          id: "d",
          text: "Penguatkuasaan Akta Hasutan yang menyekat perbincangan isu perkauman.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "DEB, bersama-sama dengan pembangunan ekonomi, industrialisasi, dan migrasi dalaman dari desa ke kota, telah mengubah struktur masyarakat Malaysia. Ia mengurangkan kemiskinan, melahirkan kelas menengah yang besar, dan mewujudkan masyarakat kosmopolitan di bandar, yang membawa kepada kerencaman sosial (kepelbagaian).",
        incorrect: {
          a: "Sistem pendidikan vernakular wujud sejak zaman kolonial dan sering dianggap sebagai faktor yang mengekalkan pemisahan kaum, bukan memacu transformasi ke arah kepelbagaian kosmopolitan.",
          c: "Kemasukan buruh asing menambah lapisan baharu kepada kepelbagaian, tetapi transformasi struktur masyarakat yang sedia ada (Melayu, Cina, India) lebih dipacu oleh pembangunan ekonomi dalaman dan DEB.",
          d: "Undang-undang mungkin mengawal ekspresi konflik, tetapi ia tidak memacu transformasi struktur sosio-ekonomi masyarakat secara langsung.",
        },
      },
    },
    {
      id: "timeline-q14",
      text: "Bilakah Rancangan Pembangunan Lima Tahun pertama kali diperkenalkan di Tanah Melayu sebagai satu bentuk tapak integrasi untuk menyusun pembangunan negara?",
      options: [
        { id: "a", text: "1948-1952" },
        { id: "b", text: "1950-1955" },
        { id: "c", text: "1957-1961" },
        { id: "d", text: "1963-1967" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          'Nota menyenaraikan "Rancangan Pembangunan Lima Tahun, 1950-55, 1956-60" sebagai salah satu contoh tapak integrasi awal yang dibina sebelum merdeka untuk menstrukturkan pembangunan.',
        incorrect: {
          a: "Ini adalah tempoh awal Persekutuan Tanah Melayu selepas penolakan Malayan Union.",
          c: "Ini adalah tempoh selepas kemerdekaan, di mana rancangan pembangunan diteruskan, tetapi pengenalannya adalah lebih awal.",
          d: "Ini adalah tempoh selepas pembentukan Malaysia.",
        },
      },
    },
    {
      id: "timeline-q15",
      text: 'Proses pembinaan negara bangsa Malaysia adalah satu proses yang berterusan. Bilakah Bangsa Idaman berkonsepkan "Malaysian Malaysia" mula popular dan menjadi wacana utama dalam politik negara?',
      options: [
        {
          id: "a",
          text: "Semasa rundingan kemerdekaan pada tahun 1950-an.",
        },
        {
          id: "b",
          text: "Ketika Singapura berada dalam Persekutuan Malaysia pada tahun 1960-an.",
        },
        {
          id: "c",
          text: "Selepas pelaksanaan Dasar Ekonomi Baru pada tahun 1970-an.",
        },
        {
          id: "d",
          text: "Semasa era pemerintahan Tun Abdullah Ahmad Badawi pada awal 2000-an.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          'Konsep "Malaysian Malaysia" diperkenalkan dan dipopularkan oleh Lee Kuan Yew dan partinya (PAP) semasa Singapura menjadi sebahagian daripada Malaysia (1963-1965) sebagai satu cabaran kepada konsep yang sedia ada.',
        incorrect: {
          a: 'Konsep yang dominan pada ketika ini ialah "Malay-led plural society" yang menjadi asas kontrak sosial.',
          c: 'Era 1970-an lebih tertumpu kepada agenda DEB dan penyusunan semula masyarakat, bukan wacana "Malaysian Malaysia".',
          d: 'Walaupun konsep seperti Islam Hadhari diperkenalkan, wacana "Malaysian Malaysia" tidak menjadi agenda utama pada era ini berbanding pada tahun 1960-an dan kemudiannya pada akhir 1990-an.',
        },
      },
    },
  ],
};
