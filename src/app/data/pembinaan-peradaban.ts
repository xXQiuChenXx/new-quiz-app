import { Quiz } from "@/app/types/quiz";

export const pembinaanPeradaban: Quiz = {
  id: "pembinaan-peradaban",
  categoryId: "etika",
  subcategoryId: "topik-5",
  title: "Pembinaan Peradaban Majmuk di Malaysia",
  questions: [
    {
      id: "sej1-q1",
      text: "Berdasarkan sinopsis pembinaan peradaban di Malaysia, apakah urutan kronologi yang paling tepat menggambarkan lapisan-lapisan peradaban yang membentuk identiti negara?",
      options: [
        { id: "a", text: "Asia → Pribumi Alam Melayu → Barat → Globalisasi" },
        { id: "b", text: "Pribumi Alam Melayu → Asia → Barat → Globalisasi" },
        { id: "c", text: "Pribumi Alam Melayu → Barat → Globalisasi → Asia" },
        { id: "d", text: "Asia → Barat → Pribumi Alam Melayu → Globalisasi" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Urutan ini tepat mengikut nota, di mana peradaban Pribumi Alam Melayu adalah asas terawal, diikuti oleh pengaruh peradaban Asia (India, Cina, Timur Tengah), kemudian peradaban Barat melalui kolonialisme, dan diakhiri dengan peradaban globalisasi melalui teknologi digital.",
        incorrect: {
          a: "Salah. Peradaban Pribumi Alam Melayu adalah fondasi yang mendahului kedatangan pengaruh peradaban dari Asia.",
          c: "Salah. Pengaruh peradaban Barat dan Globalisasi merupakan lapisan yang hadir lebih lewat berbanding peradaban Pribumi dan Asia.",
          d: "Salah. Peradaban Pribumi Alam Melayu adalah titik mula, diikuti oleh peradaban Asia sebelum era peradaban Barat.",
        },
      },
    },
    {
      id: "sej1-q2",
      text: "Apakah peristiwa sejarah yang menjadi titik pemisah antara Zaman Proto Sejarah dengan Zaman Pensejarahan di Alam Melayu, yang turut memulakan pembentukan masyarakat kepelbagaian?",
      options: [
        {
          id: "a",
          text: "Penemuan artifak Zaman Logam di tapak arkeologi utama.",
        },
        {
          id: "b",
          text: "Kemunculan kerajaan-kerajaan purba seperti Langkasuka dan Kedah Tua.",
        },
        {
          id: "c",
          text: "Kedatangan kuasa penjajah Portugis yang menawan Melaka.",
        },
        {
          id: "d",
          text: "Kewujudan Kerajaan Kesultanan Melayu Melaka sebagai pusat perdagangan.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Nota secara jelas meletakkan 'Kewujudan Kerajaan Kesultanan Melayu Melaka' sebagai permulaan Zaman Pensejarahan, yang mana peranannya sebagai pusat perdagangan antarabangsa telah memulakan pembentukan masyarakat yang pelbagai.",
        incorrect: {
          a: "Salah. Zaman Logam tergolong dalam Zaman Pra-Sejarah, bukan penanda peralihan ke Zaman Pensejarahan.",
          b: "Salah. Kerajaan-kerajaan ini adalah ciri utama Zaman Proto Sejarah itu sendiri, bukan penanda permulaan zaman seterusnya.",
          c: "Salah. Kedatangan Portugis berlaku dalam Zaman Pensejarahan, tetapi titik permulaannya adalah Kesultanan Melayu Melaka.",
        },
      },
    },
    {
      id: "sej1-q3",
      text: "Kuasa Barat manakah yang memulakan era penjajahan di Alam Melayu dengan menawan Melaka pada tahun 1511?",
      options: [
        {
          id: "a",
          text: "Belanda, yang kemudiannya mengambil alih pentadbiran Melaka.",
        },
        {
          id: "b",
          text: "British, yang memperkenalkan sistem Residen di negeri-negeri Melayu.",
        },
        {
          id: "c",
          text: "Portugis, yang mendirikan kubu A Famosa sebagai pusat pertahanan.",
        },
        {
          id: "d",
          text: "Sepanyol, yang memfokuskan pengaruhnya di kepulauan Filipina.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Portugis merupakan kuasa Barat pertama yang menawan Melaka pada tahun 1511, menandakan permulaan era penjajahan Eropah di rantau ini.",
        incorrect: {
          a: "Salah. Belanda menawan Melaka dari Portugis pada tahun 1641, bukan kuasa penjajah yang pertama.",
          b: "Salah. Pengaruh British di Tanah Melayu bermula jauh lebih lewat, misalnya melalui penguasaan Pulau Pinang pada 1786.",
          d: "Salah. Sepanyol tidak pernah menjajah Melaka; tumpuan mereka adalah di Filipina.",
        },
      },
    },
    {
      id: "sej1-q4",
      text: "Apakah ciri utama yang mendefinisikan 'peradaban globalisasi' dalam konteks pembentukan peradaban majmuk Malaysia?",
      options: [
        {
          id: "a",
          text: "Penyerapan budaya Barat secara total ke dalam budaya tempatan.",
        },
        {
          id: "b",
          text: "Interaksi peradaban yang berlaku secara formal melalui hubungan diplomatik.",
        },
        {
          id: "c",
          text: "Kacukan pelbagai peradaban tanpa sempadan yang dimangkin oleh jaringan digital.",
        },
        {
          id: "d",
          text: "Pengukuhan peradaban pribumi melalui pengasingan daripada pengaruh luar.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota mentakrifkan peradaban ini sebagai 'kacukan pelbagai punca peradaban tanpa sempadan melalui jaringan digital yang kompleks,' yang didorong oleh internet dan media sosial.",
        incorrect: {
          a: "Salah. Globalisasi digambarkan sebagai 'kacukan pelbagai punca peradaban,' bukan dominasi tunggal oleh mana-mana peradaban.",
          b: "Salah. Interaksi globalisasi melangkaui hubungan rasmi negara dan berlaku secara meluas dalam masyarakat melalui teknologi.",
          d: "Salah. Globalisasi adalah antitesis kepada pengasingan; ia merujuk kepada interaksi dan jaringan rentas sempadan yang intensif.",
        },
      },
    },
    {
      id: "sej1-q5",
      text: "Menurut Abdul Rahman Embong (2001), apakah realiti sosio-politik yang wujud sejurus pengisytiharan kemerdekaan Persekutuan Tanah Melayu pada 31 Ogos 1957?",
      options: [
        {
          id: "a",
          text: "Sebuah negara-bangsa yang lengkap dan bersepadu telah dilahirkan.",
        },
        {
          id: "b",
          text: "Sebuah bangsa yang bersatu padu sepenuhnya telah berjaya dibentuk.",
        },
        {
          id: "c",
          text: "Sebuah negara telah lahir, tetapi proses pembinaan bangsanya baru bermula.",
        },
        {
          id: "d",
          text: "Sebuah sistem kesultanan mutlak telah dikembalikan kuasanya.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota memetik pandangan beliau dengan jelas: 'apabila Malaysia diisytiharkan merdeka pada 31 Ogos 1957, apa yang lahir ialah sebuah negara dan bukannya sebuah bangsa'. Ini menunjukkan pembinaan bangsa adalah satu proses pasca-kemerdekaan.",
        incorrect: {
          a: "Salah. Ini bertentangan dengan hujah beliau bahawa pembinaan bangsa adalah satu perjalanan yang panjang selepas kewujudan negara.",
          b: "Salah. Pembinaan bangsa Malaysia yang sepunya merupakan satu proses berterusan yang menyusul kemudian, bukan sesuatu yang selesai pada hari kemerdekaan.",
          d: "Salah. Negara moden yang lahir adalah sebuah negara Raja Berperlembagaan, bukan kesultanan mutlak.",
        },
      },
    },
    {
      id: "sej1-q6",
      text: "Bagaimanakah Karl Marx mentakrifkan 'Negara' (State) dari perspektif perjuangan kelas?",
      options: [
        {
          id: "a",
          text: "Sebagai komuniti manusia yang berhak memonopoli penggunaan kekerasan yang sah.",
        },
        {
          id: "b",
          text: "Sebagai produk percanggahan kelas yang dikawal oleh kelas dominan dari segi ekonomi.",
        },
        {
          id: "c",
          text: "Sebagai sistem politik yang didirikan oleh sekumpulan manusia dalam satu wilayah.",
        },
        {
          id: "d",
          text: "Sebagai organisasi politik berkuasa yang boleh menggunakan kekerasan untuk memerintah.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota memetik takrifan Marx: '...the state is the product of class contradictions and class struggle and is controlled by the economically-diminant class...'.",
        incorrect: {
          a: "Salah. Ini adalah takrifan negara oleh Max Weber, bukan Karl Marx.",
          c: "Salah. Ini adalah takrifan negara yang lebih menjurus kepada pandangan Robert Dahl.",
          d: "Salah. Ini adalah takrifan negara yang dikemukakan oleh Anthony Giddens.",
        },
      },
    },
    {
      id: "sej1-q7",
      text: "Manakah antara berikut merupakan empat elemen asas yang universal bagi pembentukan sesebuah 'Negara' (State)?",
      options: [
        {
          id: "a",
          text: "Parti politik, pilihan raya, parlimen, dan raja atau presiden.",
        },
        {
          id: "b",
          text: "Bahasa rasmi, agama rasmi, budaya kebangsaan, dan sejarah sepunya.",
        },
        {
          id: "c",
          text: "Penduduk, sempadan wilayah, kerajaan yang mentadbir, dan kedaulatan.",
        },
        {
          id: "d",
          text: "Tentera, polis, mahkamah, dan sistem percukaian yang teratur.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa ciri-ciri utama pembentukan sesebuah negara merangkumi penduduk (rakyat), sempadan (wilayah), kerajaan, dan kedaulatan.",
        incorrect: {
          a: "Salah. Ini adalah institusi dalam sebuah negara demokrasi moden, bukan elemen asas yang universal bagi semua jenis negara.",
          b: "Salah. Ini adalah ciri-ciri yang lebih berkait rapat dengan pembentukan 'Bangsa' (Nation), bukan 'Negara' (State).",
          d: "Salah. Ini adalah jentera atau aparatus sesebuah negara untuk melaksanakan kuasanya, bukan elemen asas kewujudannya.",
        },
      },
    },
    {
      id: "sej1-q8",
      text: "Apakah perbezaan fundamental antara model 'negara bangsa tamu' dengan 'negara bangsa settler' dari segi kedudukan anak watan?",
      options: [
        {
          id: "a",
          text: "Negara bangsa tamu meminggirkan anak watan, manakala negara bangsa settler mengiktiraf mereka.",
        },
        {
          id: "b",
          text: "Negara bangsa tamu mengiktiraf hegemoni politik anak watan, manakala negara bangsa settler meminggirkan mereka.",
        },
        {
          id: "c",
          text: "Negara bangsa tamu dibentuk melalui asimilasi penuh, manakala negara bangsa settler melalui integrasi separa.",
        },
        {
          id: "d",
          text: "Negara bangsa tamu mengamalkan ekonomi sosialis, manakala negara bangsa settler mengamalkan ekonomi kapitalis.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menjelaskan bahawa dalam negara bangsa tamu, 'hegemoni politik menjadi amalan adalah di mana anak watan diperakui dan diterima,' manakala dalam negara bangsa settler, komuniti migran 'telah meminggirkan... anak-anak watan asalnya'.",
        incorrect: {
          a: "Salah. Pernyataan ini terbalik. Negara bangsa tamu mengiktiraf anak watan, manakala negara bangsa settler didominasi oleh komuniti migran yang meminggirkan anak watan.",
          c: "Salah. Kaedah asimilasi atau integrasi boleh berlaku dalam kedua-dua jenis negara dan bukan faktor pembeza utama dari segi kedudukan anak watan.",
          d: "Salah. Sistem ekonomi tidak menentukan klasifikasi sesebuah negara sebagai tamu atau settler.",
        },
      },
    },
    {
      id: "sej1-q9",
      text: "Berdasarkan contoh dalam nota, yang manakah merupakan contoh 'bangsa tanpa negara' (nation without state)?\nI. Bangsa Jepun\nII. Bangsa Melayu Patani\nIII. Bangsa Jerman\nIV. Bangsa Kurdis",
      options: [
        { id: "a", text: "I dan III sahaja" },
        { id: "b", text: "II dan IV sahaja" },
        { id: "c", text: "I, II dan III sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara spesifik menyebut bangsa Melayu Patani di Selatan Thailand dan bangsa Kurdis di utara Iraq sebagai contoh bangsa yang mempunyai identiti tersendiri tetapi tidak memiliki negara berdaulat mereka sendiri.",
        incorrect: {
          a: "Salah. Bangsa Jepun dan Jerman adalah contoh klasik 'satu bangsa satu negara' (one state one nation).",
          c: "Salah. Bangsa Jepun dan Jerman masing-masing mempunyai negara berdaulat.",
          d: "Salah. Hanya II dan IV yang betul berdasarkan contoh yang diberikan dalam nota.",
        },
      },
    },
    {
      id: "sej1-q10",
      text: "Benedict Anderson mentakrifkan bangsa sebagai sebuah ‘imagined political community’. Apakah maksud sebenar di sebalik konsep ini?",
      options: [
        {
          id: "a",
          text: "Bangsa adalah sebuah rekaan golongan elit politik yang tidak mempunyai asas sosial nyata.",
        },
        {
          id: "b",
          text: "Bangsa wujud kerana ahlinya membayangkan ikatan kebersamaan, walaupun tidak saling mengenali.",
        },
        {
          id: "c",
          text: "Bangsa adalah sebuah komuniti utopia yang mustahil untuk direalisasikan dalam dunia sebenar.",
        },
        {
          id: "d",
          text: "Bangsa hanya boleh dibayangkan kewujudannya selepas kejayaan satu revolusi politik.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Konsep ini merujuk kepada fakta bahawa ahli-ahli sesebuah bangsa tidak akan mengenali majoriti ahli yang lain, namun dalam minda setiap individu wujud imej perpaduan dan kebersamaan (communion) mereka.",
        incorrect: {
          a: "Salah. 'Imagined' (dibayangkan) tidak bermaksud ia palsu, tetapi merujuk kepada cara kewujudannya dalam kesedaran kolektif, bukan sebagai rekaan semata-mata.",
          c: "Salah. Komuniti ini adalah nyata dari segi impak sosial dan politiknya, bukan sekadar angan-angan yang tidak boleh dicapai.",
          d: "Salah. Konsep ini menerangkan sifat bangsa yang sedia wujud, bukan sesuatu yang hanya akan muncul pada masa hadapan.",
        },
      },
    },
    {
      id: "sej1-q12",
      text: "Antara konsep 'Bangsa Idaman' berikut, yang manakah diterima oleh pihak British sebelum kemerdekaan dan menjadi asas kepada kontrak sosial negara?",
      options: [
        {
          id: "a",
          text: "Konsep Melayu Raya yang digagaskan oleh golongan kiri Melayu.",
        },
        {
          id: "b",
          text: "Konsep Negara Islam yang diwacanakan oleh kelompok Islam.",
        },
        {
          id: "c",
          text: "Konsep masyarakat majmuk pimpinan Melayu (Malay-led plural society).",
        },
        {
          id: "d",
          text: "Konsep Malaysian Malaysia yang dipopularkan selepas kemerdekaan.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa konsep ini adalah yang 'diterima oleh pihak British pada ketika itu,' yang dibuktikan melalui penubuhan Jawatankuasa Perhubungan Masyarakat (CLC) 1949 dan menjadi asas kepada perlembagaan.",
        incorrect: {
          a: "Salah. Konsep ini tidak diterima oleh British dan merupakan gagasan alternatif.",
          b: "Salah. Konsep ini diperkenalkan oleh kelompok Islam dan bukan merupakan asas utama rundingan kemerdekaan dengan British.",
          d: "Salah. Konsep ini dipopularkan oleh Lee Kuan Yew pada tahun 1960-an, iaitu selepas kemerdekaan Malaya.",
        },
      },
    },
    {
      id: "sej1-q14",
      text: "Apakah elemen-elemen yang menjadi 'PASAK PERLEMBAGAAN' dalam kerangka negara bangsa Malaysia?",
      options: [
        {
          id: "a",
          text: "Hak kesamarataan mutlak bagi semua warganegara tanpa sebarang pengecualian.",
        },
        {
          id: "b",
          text: "Kedudukan Raja-raja, agama Islam, Bahasa Melayu, dan hak istimewa orang Melayu.",
        },
        {
          id: "c",
          text: "Penggunaan undang-undang Inggeris (Common Law) sebagai sumber perundangan tertinggi.",
        },
        {
          id: "d",
          text: "Jaminan kebebasan mutlak bagi mana-mana negeri untuk keluar daripada Persekutuan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara spesifik menyenaraikan 'Melayu, Islam, Bahasa Melayu, Raja dan AKTA 153 kedudukan Melayu dalam negara dijadikan PASAK Perlembagaan'. Ini adalah teras kepada kontrak sosial.",
        incorrect: {
          a: "Salah. Ini lebih menjurus kepada idea 'TAPAK INTEGRASI' dan wacana 'Malaysian Malaysia,' bukan 'PASAK' utama Perlembagaan.",
          c: "Salah. Walaupun Common Law digunakan, ia bukan pasak utama identiti negara bangsa dalam konteks yang dibincangkan.",
          d: "Salah. Perlembagaan Persekutuan tidak memperuntukkan hak untuk mana-mana negeri keluar daripada Persekutuan.",
        },
      },
    },
    {
      id: "sej1-q15",
      text: "Apakah fungsi utama 'TAPAK INTEGRASI' dalam struktur Perlembagaan Persekutuan Malaysia?",
      options: [
        {
          id: "a",
          text: "Untuk mengasimilasikan sepenuhnya kaum minoriti ke dalam budaya Melayu.",
        },
        {
          id: "b",
          text: "Untuk memastikan hegemoni politik Melayu tidak boleh dicabar oleh kaum lain.",
        },
        {
          id: "c",
          text: "Untuk mengikat komuniti bukan Bumiputera kepada negara dengan menjamin hak dan kepentingan mereka.",
        },
        {
          id: "d",
          text: "Untuk memisahkan urusan pentadbiran antara kaum Bumiputera dan bukan Bumiputera.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menjelaskan bahawa kaum minoriti 'diikat di TAPAK INTEGRASI' melalui simbol perpaduan (YDPA), jaminan kebebasan beragama, hak bahasa ibunda, dan jaminan perlindungan kepentingan sah mereka oleh YDPA.",
        incorrect: {
          a: "Salah. Konsepnya adalah integrasi, bukan asimilasi, seperti yang dibuktikan dengan jaminan hak mempelajari bahasa ibunda dan mengamalkan agama lain.",
          b: "Salah. Tapak Integrasi berfungsi sebagai mekanisme penyatuan dan jaminan hak, bukan penegasan hegemoni semata-mata.",
          d: "Salah. Tapak Integrasi bertujuan menyatukan semua kaum di bawah satu payung perlembagaan, bukan memisahkan mereka.",
        },
      },
    },
    {
      id: "sej1-q17",
      text: "Shamsul A.B. memperkenalkan konsep ‘nation of intent’. Apakah implikasi utama konsep ini terhadap pemahaman kita tentang negara-bangsa Malaysia?",
      options: [
        {
          id: "a",
          text: "Pembinaan bangsa adalah satu projek yang telah selesai dengan termeterainya Perlembagaan Persekutuan.",
        },
        {
          id: "b",
          text: "Pembinaan bangsa adalah satu niat murni yang telah gagal sepenuhnya di Malaysia kerana kepelbagaian kaum.",
        },
        {
          id: "c",
          text: "Pembinaan bangsa adalah satu proses 'sedang berjalan' (work in progress) yang sentiasa dipertandingkan.",
        },
        {
          id: "d",
          text: "Pembinaan bangsa hanya boleh dicapai melalui niat bersama semua parti politik yang memerintah.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota memetik pandangan Shamsul A.B. bahawa 'sebuah negara bangsa adalah a project work in progress dan sentiasa berlaku contestation bangsa'. Ini bermakna ia adalah satu proses yang dinamik dan tidak pernah selesai.",
        incorrect: {
          a: "Salah. Konsep ini secara langsung menafikan bahawa pembinaan bangsa adalah satu projek yang telah berakhir.",
          b: "Salah. Konsep ini bukan tentang kegagalan total, tetapi tentang sifatnya yang berterusan dan sentiasa menjadi medan perbahasan.",
          d: "Salah. Walaupun niat politik penting, konsep ini merujuk kepada proses perdebatan yang lebih luas dalam masyarakat, bukan hanya dalam kalangan parti politik.",
        },
      },
    },
    {
      id: "sej1-q19",
      text: "Menurut Tun Dr. Mahathir Mohamad (1992), etos bangsa perlu merangkumi semua perkara berikut KECUALI:",
      options: [
        {
          id: "a",
          text: "Perkongsian pengalaman sejarah dan nilai-nilai bersama.",
        },
        {
          id: "b",
          text: "Perasaan mempunyai identiti sepunya dan perkongsian takdir.",
        },
        {
          id: "c",
          text: "Kesetiaan dan komitmen emosi yang mendalam terhadap negara.",
        },
        {
          id: "d",
          text: "Penyeragaman identiti etnik demi membentuk satu budaya tunggal.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Petikan daripada Tun Dr. Mahathir secara eksplisit menyebut bahawa etos bangsa perlu 'melangkaui batas etnik **tanpa menjejaskan identiti etnik**' (without undermining ethnic identity), yang secara langsung bertentangan dengan idea penyeragaman penuh atau asimilasi.",
        incorrect: {
          a: "Salah. Perkongsian pengalaman sejarah (shared historical experiences) dan nilai bersama (shared values) adalah elemen (1) dan (2) yang disenaraikan.",
          b: "Salah. Perasaan identiti sepunya (feeling of common identity) dan perkongsian takdir (shared destiny) adalah elemen (3) dan (4) yang disenaraikan.",
          c: "Salah. Kesetiaan (loyalty) dan komitmen (commitment) adalah elemen (6) dan (7) yang disenaraikan.",
        },
      },
    },
    {
      id: "sej1-q20",
      text: "Apakah yang dimaksudkan dengan 'kerencaman sosial' yang lahir daripada transformasi sosial di Malaysia pasca-pembangunan?",
      options: [
        {
          id: "a",
          text: "Pengukuhan batas etnik dan hubungan sosial yang bersifat vertikal serta berhierarki.",
        },
        {
          id: "b",
          text: "Kepelbagaian sosial di mana batas etnik menipis dan hubungan sosial lebih bersifat horizontal.",
        },
        {
          id: "c",
          text: "Kembalinya masyarakat kepada budaya tradisi dan menolak sepenuhnya budaya moden dan global.",
        },
        {
          id: "d",
          text: "Penumpuan semula masyarakat di kawasan luar bandar dan penglibatan dalam ekonomi sara hidup.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menghuraikan transformasi sosial melahirkan 'KERENCAMAN SOSIAL berpaksikan BUDAYA MODERNITI DAN KEPELBAGAIAN' dengan ciri 'Batas etnik nipis' dan 'Tingkah laku horizontal bukan vertikal,' yang merujuk kepada hubungan rentas etnik.",
        incorrect: {
          a: "Salah. Nota menyatakan sebaliknya, iaitu batas etnik menjadi semakin nipis dan hubungan sosial menjadi lebih horizontal (setara).",
          c: "Salah. Kerencaman sosial ini berpaksikan 'BUDAYA MODERNITI', bukan penolakan terhadapnya.",
          d: "Salah. Transformasi sosial yang dihuraikan adalah dari perdesaan ke kosmopolitan dan dari ekonomi sara hidup ke komersial-industri.",
        },
      },
    },
    {
      id: "sej1-q22",
      text: "Apakah impak utama kerencaman sosial terhadap budaya dan nilai politik di Malaysia?",
      options: [
        {
          id: "a",
          text: "Rakyat menjadi semakin pasif dan kurang peduli tentang isu-isu tadbir urus negara.",
        },
        {
          id: "b",
          text: "Tuntutan terhadap nilai seperti akauntabiliti, integriti, dan keterangkuman semakin meningkat.",
        },
        {
          id: "c",
          text: "Sokongan terhadap sistem pemerintahan berasaskan hegemoni kaum semakin menguat.",
        },
        {
          id: "d",
          text: "Isu-isu seperti rasuah dan salah guna kuasa mula dianggap sebagai perkara biasa dan diterima.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyenaraikan 'NILAI POLITIK' baharu yang dituntut oleh masyarakat yang lebih rencam termasuk 'Amanah-Integriti, Keadilan, Akauntabiliti, Transparensi, Keterangkuman'.",
        incorrect: {
          a: "Salah. Nota menunjukkan sebaliknya; budaya politik baru menuntut lebih banyak penglibatan, demokrasi dan kebebasan bersuara.",
          c: "Salah. Budaya politik baru lebih cenderung kepada demokrasi dan tadbir urus baik, berbanding hegemoni semata-mata.",
          d: "Salah. Isu-isu ini menjadi fokus utama kritikan dalam budaya politik baru, bukan sesuatu yang diterima.",
        },
      },
    },
    {
      id: "sej1-q23",
      text: "Bagaimanakah kedudukan rakyat Sabah dan Sarawak distrukturkan dalam kerangka negara bangsa selepas pembentukan Malaysia pada 1963?",
      options: [
        {
          id: "a",
          text: "Dianggap sebagai komuniti migran dengan kerakyatan yang terhad.",
        },
        {
          id: "b",
          text: "Diberi status autonomi penuh sebagai negara bersekutu yang bebas.",
        },
        {
          id: "c",
          text: "Diperakui sebagai Bumiputera dan menjadi sebahagian daripada 'Pasak' negara bangsa.",
        },
        {
          id: "d",
          text: "Diserapkan sepenuhnya di bawah pentadbiran negeri-negeri Melayu sedia ada.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan dengan jelas: 'rakyat Sabah dan Sarawak diperakui sebagai Bumiputera dan dijadikan sebahagian PASAK negara bangsa bersama Melayu'.",
        incorrect: {
          a: "Salah. Mereka adalah anak watan (pribumi) di wilayah mereka dan mendapat kerakyatan penuh dalam Persekutuan.",
          b: "Salah. Mereka menyertai Persekutuan sebagai negeri-negeri, bukan sebagai negara bersekutu yang bebas sepenuhnya.",
          d: "Salah. Sabah dan Sarawak membentuk negeri mereka sendiri dalam Persekutuan dan tidak diserapkan ke negeri lain.",
        },
      },
    },
    {
      id: "sej1-q25",
      text: "Mengapakah Malaysia, dalam sesetengah wacana, dirujuk sebagai sebuah 'negara tanpa bangsa' (state without nation)?",
      options: [
        {
          id: "a",
          text: "Kerana Malaysia tidak mempunyai perlembagaan yang diiktiraf di peringkat antarabangsa.",
        },
        {
          id: "b",
          text: "Kerana kedaulatan wilayah Malaysia sering dicabar oleh kuasa-kuasa besar dunia.",
        },
        {
          id: "c",
          text: "Kerana satu 'Bangsa Malaysia' yang sepunya masih belum terbentuk sepenuhnya di kalangan rakyat.",
        },
        {
          id: "d",
          text: "Kerana negara ditadbir tanpa sistem kerajaan yang jelas dan teratur sejak merdeka.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menjelaskan senario ini berlaku apabila 'wujudnya sesebuah negara yang diperakui kedaulatannya, tetapi tidak jelas dari segi identiti bangsa yang dibina,' dan merujuknya kepada konteks Malaysia di mana 'Satu Bangsa Malaysia masih belum terbina'.",
        incorrect: {
          a: "Salah. Malaysia mempunyai Perlembagaan Persekutuan yang menjadi undang-undang tertinggi negara dan diiktiraf.",
          b: "Salah. Malaysia adalah sebuah negara berdaulat yang diiktiraf di peringkat antarabangsa, walaupun cabaran kedaulatan adalah isu berbeza.",
          d: "Salah. Malaysia mempunyai sistem Kerajaan Persekutuan yang berfungsi sejak kemerdekaan.",
        },
      },
    },
  ],
};
