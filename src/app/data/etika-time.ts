import { Quiz } from "@/app/types/quiz";

export const garisMasa: Quiz = {
  id: "garis-masa",
  categoryId: "etika",
  subcategoryId: "garis-masa",
  title: "Garis Masa Peristiwa",
  questions: [
    {
      id: "sejarah-timeline-q1",
      text: "Dasar Ekonomi Baru (DEB) telah dilancarkan pada dekad 1970-an sebagai tindak balas kepada keadaan sosioekonomi negara pada masa itu. Apakah situasi yang paling tepat menggambarkan konteks sosioekonomi pada awal dekad 1970-an yang menjadi pemangkin kepada pengenalan DEB?",
      options: [
        {
          id: "a",
          text: "Negara mengalami masalah kemelesetan ekonomi yang teruk akibat kejatuhan harga komoditi timah dan getah di pasaran dunia.",
        },
        {
          id: "b",
          text: "Wujudnya fenomena 'shared prosperity' (kesejahteraan bersama) di mana kekayaan negara diagihkan secara saksama tetapi menimbulkan rasa tidak puas hati golongan pemodal.",
        },
        {
          id: "c",
          text: "Berlakunya fenomena 'shared poverty' (kemiskinan bersama) dan ketidakseimbangan sosioekonomi yang ketara antara kumpulan etnik dan antara kawasan bandar-luar bandar.",
        },
        {
          id: "d",
          text: "Peningkatan besar dalam pelaburan asing dalam sektor perindustrian yang menyebabkan pengabaian sektor pertanian luar bandar secara total.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah jawapan yang paling tepat. Nota kuliah secara eksplisit menyatakan bahawa pada dekad awal kemerdekaan, berlakunya 'shared poverty' (kemiskinan bersama). Pelaksanaan DEB bermula pada tahun 1971 bertujuan untuk membasmi kemiskinan dan menyusun semula masyarakat bagi mengurangkan ketidakseimbangan yang wujud.",
        incorrect: {
          a: "Pencetus utama DEB bukanlah kemelesetan ekonomi semata-mata, tetapi ketidakseimbangan pengagihan kekayaan yang menjadi punca ketegangan sosial selepas peristiwa 13 Mei 1969.",
          b: "Konsep 'shared prosperity' adalah matlamat yang ingin dicapai kemudian, bukan keadaan pada tahun 1970-an. Nota menyatakan DEB gagal membawa 'shared prosperity' sepenuhnya.",
          d: "Peralihan ke arah perindustrian adalah sebahagian daripada strategi DEB. Isu utamanya ialah ketidakseimbangan, bukan pengabaian total sektor pertanian.",
        },
      },
    },
    {
      id: "sejarah-timeline-q2",
      text: "Selepas penentangan hebat terhadap Malayan Union, Perlembagaan Persekutuan Tanah Melayu 1948 telah digubal. Manakah antara ciri-ciri berikut yang membezakannya secara signifikan daripada perlembagaan Malayan Union 1946?",
      options: [
        {
          id: "a",
          text: "Singapura disatukan ke dalam persekutuan bersama negeri-negeri Melayu yang lain.",
        },
        {
          id: "b",
          text: "Kuasa Raja-Raja Melayu dikembalikan sepenuhnya, manakala syarat kewarganegaraan dilonggarkan berdasarkan prinsip jus soli.",
        },
        {
          id: "c",
          text: "Kedudukan Raja-Raja Melayu sebagai ketua negeri dipulihkan, dan syarat kewarganegaraan diketatkan berbanding Malayan Union.",
        },
        {
          id: "d",
          text: "Sistem pentadbiran berpusat di bawah seorang Gabenor British dikekalkan, tetapi Majlis Raja-Raja diberi kuasa veto.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah perbezaan paling utama. Malayan Union menghapuskan kedaulatan Raja-Raja Melayu, tetapi PTM 1948 mengembalikannya. Selain itu, prinsip kewarganegaraan jus soli yang longgar dalam Malayan Union telah diketatkan dengan ketara dalam PTM 1948.",
        incorrect: {
          a: "Di bawah PTM 1948, Singapura kekal sebagai tanah jajahan British yang berasingan, sama seperti dalam gagasan Malayan Union.",
          b: "Walaupun kedaulatan raja dipulihkan, syarat kewarganegaraan PTM 1948 adalah lebih ketat, bukan lebih longgar.",
          d: "Kerajaan persekutuan masih diketuai oleh Pesuruhjaya Tinggi British, dan Majlis Raja-Raja tidak diberi kuasa veto ke atas semua undang-undang.",
        },
      },
    },
    {
      id: "sejarah-timeline-q3",
      text: "Susun peristiwa-peristiwa berikut mengikut urutan kronologi yang betul mengenai campur tangan British di Tanah Melayu: I. Penubuhan NNMB (1896), II. Perjanjian Bangkok (1909), III. Pendudukan Pulau Pinang (1786), IV. Perjanjian Pangkor (1874).",
      options: [
        { id: "a", text: "III, IV, I, II" },
        { id: "b", text: "I, III, IV, II" },
        { id: "c", text: "III, I, II, IV" },
        { id: "d", text: "IV, III, I, II" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Urutan kronologi yang betul ialah: Pendudukan Pulau Pinang (1786) sebagai titik permulaan, diikuti Perjanjian Pangkor (1874) yang memulakan Sistem Residen, kemudian Penubuhan NNMB (1896) yang menyatukan negeri-negeri di bawah sistem Residen, dan diakhiri dengan Perjanjian Bangkok (1909) yang membawa negeri-negeri utara di bawah pengaruh British.",
        incorrect: {
          b: "Urutan ini tidak betul kerana meletakkan penubuhan NNMB (1896) sebelum pendudukan Pulau Pinang (1786).",
          c: "Urutan ini salah kerana meletakkan Perjanjian Pangkor (1874) selepas penubuhan NNMB (1896).",
          d: "Urutan ini salah kerana meletakkan pendudukan Pulau Pinang (1786) selepas Perjanjian Pangkor (1874).",
        },
      },
    },
    {
      id: "sejarah-timeline-q4",
      text: "Tragedi 13 Mei 1969 membawa kepada perubahan besar dalam wacana negara. Apakah perubahan terminologi paling signifikan yang berlaku dalam dokumen rasmi kerajaan, seperti Rancangan Malaysia Kedua (1971-1975)?",
      options: [
        {
          id: "a",
          text: "Istilah 'Masyarakat Majmuk' digantikan dengan 'Masyarakat Kepelbagaian'.",
        },
        {
          id: "b",
          text: "Istilah 'Kesatuan' yang digunakan sejak era kemerdekaan digantikan dengan istilah 'Perpaduan'.",
        },
        {
          id: "c",
          text: "Konsep 'Bangsa Idaman' tidak lagi digunakan dan diganti dengan konsep 'Satu Negara'.",
        },
        {
          id: "d",
          text: "Konsep 'Asimilasi' secara rasmi digantikan dengan 'Akomodasi'.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota kuliah dengan jelas menyatakan bahawa selepas 13 Mei 1969, perkataan 'Kesatuan' digantikan dengan 'Perpaduan', bermula secara rasmi dalam Rancangan Malaysia Kedua (RMK2) untuk menekankan usaha penyatuan sosial.",
        incorrect: {
          a: "Peralihan dari 'majmuk' ke 'kepelbagaian' lebih merujuk kepada evolusi sosiologi yang berlaku dalam dekad-dekad kemudian, bukan perubahan terminologi utama pasca-1969.",
          c: "Konsep 'Bangsa Idaman' terus wujud dan diperdebatkan walaupun selepas 1969, contohnya melalui Wawasan 2020.",
          d: "Walaupun dasar negara lebih cenderung ke arah akomodasi, tiada perubahan terminologi rasmi yang spesifik dari 'asimilasi' kepada 'akomodasi' pada ketika itu.",
        },
      },
    },
    {
      id: "sejarah-timeline-q5",
      text: "Dasar Ekonomi Baru (DEB) yang berlangsung dari tahun 1970 hingga 1990 mempunyai sasaran yang jelas. Berdasarkan jadual data dalam nota, apakah sasaran pemilikan ekuiti korporat bagi golongan Bumiputera pada tahun 1990?",
      options: [
        { id: "a", text: "16.7%" },
        { id: "b", text: "40%" },
        { id: "c", text: "30%" },
        { id: "d", text: "2.4%" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Jadual dalam nota dengan jelas menunjukkan bahawa pemilikan Bumiputera pada tahun 1970 adalah 2.4% dan 'Sasaran pada 1990' adalah 30%.",
        incorrect: {
          a: "Ini adalah sasaran untuk kadar kemiskinan keseluruhan pada tahun 1990, bukan pemilikan ekuiti.",
          b: "Ini adalah sasaran pemilikan ekuiti untuk golongan Bukan Bumiputera pada tahun 1990.",
          d: "Ini adalah peratusan pemilikan ekuiti oleh Bumiputera pada tahun 1970, bukan sasaran untuk 1990.",
        },
      },
    },
    {
      id: "sejarah-timeline-q6",
      text: "Sejarah pembentukan Malaysia moden dibahagikan kepada tiga era: Prakolonial, Kolonial, dan Pascakolonial. Manakah antara padanan peristiwa dan era berikut adalah yang paling tepat?",
      options: [
        {
          id: "a",
          text: "Prakolonial: Undang-Undang Tubuh Kerajaan Johor (1895); Kolonial: Penubuhan JARING (1991); Pascakolonial: Kerajaan Islam Perlak (840 M)",
        },
        {
          id: "b",
          text: "Prakolonial: Kedatangan Portugis (1511); Kolonial: Rancangan Malaysia Kedua (1971); Pascakolonial: Wawasan Kemakmuran Bersama (2020-2030)",
        },
        {
          id: "c",
          text: "Prakolonial: Kegemilangan Kesultanan Melaka (kurun ke-15); Kolonial: Undang-Undang Tubuh Kerajaan Johor (1895); Pascakolonial: Wawasan Kemakmuran Bersama (2020-2030)",
        },
        {
          id: "d",
          text: "Prakolonial: Penubuhan Negeri-Negeri Selat (1826); Kolonial: Peristiwa 13 Mei 1969; Pascakolonial: Hubungan dengan Dinasti Han",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Padanan ini tepat. Kegemilangan Melaka adalah era Prakolonial. Undang-Undang Tubuh Kerajaan Johor (1895) digubal dalam konteks tekanan British, menjadikannya sebahagian era Kolonial. Wawasan Kemakmuran Bersama adalah dasar moden dalam era Pascakolonial.",
        incorrect: {
          a: "Semua padanan salah. Undang-Undang Johor (1895) adalah Kolonial, JARING (1991) adalah Pascakolonial, dan Perlak (840 M) adalah Prakolonial.",
          b: "Kedatangan Portugis (1511) menandakan permulaan era Kolonial. Rancangan Malaysia Kedua (1971) adalah peristiwa Pascakolonial.",
          d: "Semua padanan salah. Negeri-Negeri Selat (1826) adalah Kolonial, 13 Mei 1969 adalah Pascakolonial, dan hubungan dengan Dinasti Han adalah Prakolonial.",
        },
      },
    },
    {
      id: "sejarah-timeline-q7",
      text: "Perlembagaan Persekutuan Tanah Melayu 1957 adalah kemuncak kepada beberapa siri peristiwa. Susunkan peristiwa berikut mengikut urutan kronologi yang betul: I. Suruhanjaya Reid (1956), II. CLC (1949), III. Pilihan Raya Umum (1955), IV. Jawatankuasa Kerja (1946).",
      options: [
        { id: "a", text: "II, IV, III, I" },
        { id: "b", text: "IV, II, III, I" },
        { id: "c", text: "IV, III, II, I" },
        { id: "d", text: "II, III, IV, I" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Urutan yang betul ialah: Jawatankuasa Kerja (1946) untuk menggantikan Malayan Union, diikuti CLC (1949) sebagai platform rundingan kaum, kemudian Pilihan Raya Umum (1955) yang memberi mandat, dan akhirnya Suruhanjaya Reid (1956) untuk merangka perlembagaan.",
        incorrect: {
          a: "Urutan ini salah kerana meletakkan CLC (1949) sebelum Jawatankuasa Kerja (1946).",
          c: "Urutan ini salah kerana meletakkan Pilihan Raya 1955 sebelum CLC 1949.",
          d: "Urutan ini salah kerana meletakkan Jawatankuasa Kerja (1946) selepas CLC (1949) dan Pilihan Raya 1955.",
        },
      },
    },
    {
      id: "sejarah-timeline-q8",
      text: "Sejarah internet di Malaysia bermula dengan inisiatif ahli akademik. Manakah antara berikut merupakan garis masa yang tepat bagi peristiwa penting dalam sejarah awal internet di negara ini?",
      options: [
        {
          id: "a",
          text: "1970: Pelancaran JARING; 1983: Rukun Negara; 1989: Penubuhan RangKoM",
        },
        {
          id: "b",
          text: "1970: Rukun Negara; 1983: Idea oleh Dr. Mohamed Awang-Lah; 1991: Pelancaran JARING",
        },
        {
          id: "c",
          text: "1983: Penubuhan RangKoM; 1989: Idea oleh Dr. Mohamed Awang-Lah; 1991: Pelancaran JARING",
        },
        {
          id: "d",
          text: "1970: Idea oleh Dr. Mohamed Awang-Lah; 1983: Penubuhan RangKoM; 1989: Pelancaran JARING",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Garis masa ini tepat. Rukun Negara (1970) meletakkan asas falsafah. Idea awal oleh Dr. Mohamed Awang-Lah (1983) memulakan projek teknikal. RangKoM (1989) adalah fasa pembangunan, dan JARING (1991) menandakan fasa pengkomersialan.",
        incorrect: {
          a: "Tarikh untuk JARING dan Rukun Negara adalah salah.",
          c: "Urutan idea awal dan penubuhan RangKoM adalah terbalik.",
          d: "Semua tarikh yang diberikan adalah salah.",
        },
      },
    },
    {
      id: "sejarah-timeline-q9",
      text: "Konsep 'Malaysian Malaysia' sering diperdebatkan dalam sejarah politik negara. Bilakah konsep ini mula dipopularkan dan menjadi wacana utama?",
      options: [
        { id: "a", text: "Pada era 1950-an, semasa rundingan kemerdekaan." },
        {
          id: "b",
          text: "Pada era 1960-an, semasa Singapura masih dalam Persekutuan Malaysia.",
        },
        {
          id: "c",
          text: "Pada era 1980-an, sebagai sebahagian daripada usaha penerapan nilai-nilai Islam.",
        },
        {
          id: "d",
          text: "Pada era pasca-2000, serentak dengan kemunculan gagasan 'Bangsa Malaysia'.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara spesifik menyebut bahawa konsep 'Malaysian Malaysia' menjadi popular pada tahun 1960-an dan diperkenalkan oleh Lee Kuan Yew semasa Singapura berada di dalam Malaysia (1963-1965).",
        incorrect: {
          a: "Pada era 1950-an, konsep yang dominan adalah 'Malay-led plural society'.",
          c: "Era 1980-an lebih tertumpu kepada dasar pembangunan di bawah DEB.",
          d: "Walaupun ideanya mempunyai persamaan dengan wacana pasca-2000, kemunculan asalnya adalah pada era 1960-an.",
        },
      },
    },
    {
      id: "sejarah-timeline-q10",
      text: "Sejarah Alam Melayu menyaksikan kemunculan pelbagai kerajaan. Berdasarkan jangka masa dalam nota, susun kerajaan berikut mengikut tahun penubuhannya, dari yang paling awal: I. Brunei, II. Perlak, III. Melaka, IV. Pasai.",
      options: [
        { id: "a", text: "I, II, IV, III" },
        { id: "b", text: "II, I, IV, III" },
        { id: "c", text: "II, IV, I, III" },
        { id: "d", text: "I, IV, II, III" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Berdasarkan tarikh yang dinyatakan dalam nota: Perlak (840 M), diikuti oleh Pasai (1042 M), kemudian Brunei (1368 M), dan akhirnya Melaka (1402 M).",
        incorrect: {
          a: "Urutan ini salah kerana meletakkan Brunei (1368) sebagai yang paling awal.",
          b: "Urutan ini salah kerana meletakkan Brunei (1368) sebelum Pasai (1042).",
          d: "Urutan ini salah kerana memulakan dengan Brunei dan tidak mengikut kronologi yang betul.",
        },
      },
    },
  ],
};
