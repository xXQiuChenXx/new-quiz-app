import { Quiz } from "@/app/types/quiz";

export const pembinaanPeradaban: Quiz = {
  id: "pembinaan-peradaban",
  categoryId: "etika",
  subcategoryId: "topik-5",
  title: "Pembinaan Peradaban Majmuk di Malaysia ",
  questions: [
    {
      id: "sej1-q1",
      text: "Berdasarkan nota, apakah urutan kronologi yang betul bagi lapisan-lapisan peradaban yang membentuk peradaban majmuk di Malaysia?",
      options: [
        { id: "a", text: "Asia → Pribumi Alam Melayu → Barat → Globalisasi" },
        { id: "b", text: "Pribumi Alam Melayu → Asia → Barat → Globalisasi" },
        { id: "c", text: "Barat → Pribumi Alam Melayu → Globalisasi → Asia" },
        { id: "d", text: "Pribumi Alam Melayu → Barat → Asia → Globalisasi" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Urutan ini tepat mengikut nota, di mana peradaban Pribumi Alam Melayu adalah yang terawal, diikuti oleh peradaban Asia, kemudian peradaban Barat, dan diakhiri dengan peradaban globalisasi.",
        incorrect: {
          a: "Salah. Peradaban Pribumi Alam Melayu adalah asas yang mendahului peradaban Asia.",
          c: "Salah. Peradaban Barat dan Globalisasi adalah pengaruh yang hadir jauh lebih lewat berbanding peradaban Pribumi dan Asia.",
          d: "Salah. Peradaban Asia tiba di Alam Melayu sebelum kedatangan peradaban Barat.",
        },
      },
    },
    {
      id: "sej1-q2",
      text: "Apakah peristiwa sejarah yang menandakan peralihan dari Zaman Proto Sejarah ke Zaman Pensejarahan di Alam Melayu?",
      options: [
        { id: "a", text: "Penemuan artifak Zaman Logam di tapak arkeologi." },
        {
          id: "b",
          text: "Kewujudan kerajaan purba seperti Langkasuka dan Kedah Tua.",
        },
        { id: "c", text: "Kedatangan kuasa penjajah Portugis ke Melaka." },
        { id: "d", text: "Kewujudan Kerajaan Kesultanan Melayu Melaka." },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Nota secara jelas meletakkan 'Kewujudan Kerajaan Kesultanan Melayu Melaka' sebagai permulaan Zaman Pensejarahan, yang juga memulakan pembentukan masyarakat kepelbagaian melalui perdagangan.",
        incorrect: {
          a: "Salah. Zaman Logam adalah sebahagian daripada Zaman Pra-Sejarah.",
          b: "Salah. Kerajaan-kerajaan ini adalah ciri utama Zaman Proto Sejarah itu sendiri, bukan penanda peralihan ke zaman seterusnya.",
          c: "Salah. Kedatangan Portugis berlaku pada Zaman Pensejarahan, tetapi bukan titik permulaannya.",
        },
      },
    },
    {
      id: "sej1-q3",
      text: "Kuasa Barat manakah yang pertama sekali menjajah Melaka pada tahun 1511?",
      options: [
        { id: "a", text: "Belanda" },
        { id: "b", text: "British" },
        { id: "c", text: "Portugis" },
        { id: "d", text: "Sepanyol" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Portugis merupakan kuasa Barat pertama yang menawan Melaka pada tahun 1511, menandakan permulaan era penjajahan di rantau ini.",
        incorrect: {
          a: "Salah. Belanda menawan Melaka dari Portugis pada tahun 1641, bukan yang pertama menjajah.",
          b: "Salah. Pengaruh British di Tanah Melayu bermula lebih lewat, misalnya penguasaan Pulau Pinang pada 1786.",
          d: "Salah. Sepanyol menumpukan penjajahan mereka di Filipina dan tidak pernah menjajah Melaka.",
        },
      },
    },
    {
      id: "sej1-q4",
      text: "Apakah yang dimaksudkan dengan 'peradaban globalisasi' dalam konteks pembinaan peradaban Malaysia?",
      options: [
        {
          id: "a",
          text: "Penyerapan sepenuhnya budaya Barat ke dalam budaya tempatan.",
        },
        {
          id: "b",
          text: "Proses interaksi peradaban yang berlaku secara eksklusif melalui hubungan diplomatik.",
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
          "Nota mentakrifkan peradaban ini sebagai 'kacukan pelbagai punca peradaban tanpa sempadan melalui jaringan digital yang kompleks'.",
        incorrect: {
          a: "Salah. Globalisasi digambarkan sebagai 'kacukan pelbagai punca peradaban,' bukan dominasi tunggal oleh peradaban Barat.",
          b: "Salah. Interaksi globalisasi melangkaui hubungan rasmi antara negara dan berlaku secara meluas dalam masyarakat sivil melalui teknologi.",
          d: "Salah. Globalisasi adalah antitesis kepada pengasingan; ia merujuk kepada interaksi dan jaringan rentas benua.",
        },
      },
    },
    {
      id: "sej1-q5",
      text: "Menurut Abdul Rahman Embong (2001), apakah realiti politik yang wujud sejurus selepas pengisytiharan kemerdekaan Persekutuan Tanah Melayu pada 31 Ogos 1957?",
      options: [
        { id: "a", text: "Sebuah negara-bangsa yang lengkap telah lahir." },
        { id: "b", text: "Sebuah bangsa yang bersatu padu telah terbentuk." },
        {
          id: "c",
          text: "Sebuah negara telah lahir, tetapi sebuah bangsa belum terbina.",
        },
        {
          id: "d",
          text: "Sebuah sistem kesultanan yang mutlak telah dipulihkan.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota memetik pandangan beliau dengan jelas: 'apabila Malaysia diisytiharkan merdeka pada 31 Ogos 1957, apa yang lahir ialah sebuah negara dan bukannya sebuah bangsa'.",
        incorrect: {
          a: "Salah. Ini bertentangan dengan hujah beliau bahawa proses pembinaan bangsa adalah satu perjalanan yang panjang selepas kemerdekaan.",
          b: "Salah. Pembinaan bangsa Malaysia yang sepunya merupakan satu proses yang menyusul kemudian.",
          d: "Salah. Negara moden yang lahir adalah sebuah negara Raja Berperlembagaan, bukan kesultanan mutlak.",
        },
      },
    },
    {
      id: "sej1-q6",
      text: "Karl Marx mentakrifkan 'Negara' (State) sebagai...",
      options: [
        {
          id: "a",
          text: "Sebuah komuniti manusia yang memonopoli penggunaan kekerasan yang sah.",
        },
        {
          id: "b",
          text: "Sebuah produk daripada percanggahan dan perjuangan kelas, yang dikawal oleh kelas dominan ekonomi.",
        },
        {
          id: "c",
          text: "Satu sistem politik yang didirikan oleh sekumpulan manusia dalam sesebuah wilayah.",
        },
        {
          id: "d",
          text: "Sebuah organisasi politik yang berkuasa memerintah dan boleh menggunakan kekerasan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota memetik takrifan Marx: '...the state is the product of class contradictions and class struggle and is controlled by the economically-diminant class...'.",
        incorrect: {
          a: "Salah. Ini adalah takrifan negara oleh Max Weber.",
          c: "Salah. Ini adalah takrifan negara oleh Robert Dahl.",
          d: "Salah. Ini adalah takrifan negara oleh Anthony Giddens.",
        },
      },
    },
    {
      id: "sej1-q7",
      text: "Manakah antara berikut merupakan empat elemen asas yang membentuk sesebuah 'Negara' (State) seperti yang diperincikan dalam nota?",
      options: [
        { id: "a", text: "Parti politik, pilihan raya, parlimen, dan raja." },
        { id: "b", text: "Bahasa, agama, budaya, dan sejarah." },
        {
          id: "c",
          text: "Penduduk, sempadan wilayah, kerajaan, dan kedaulatan.",
        },
        { id: "d", text: "Tentera, polis, mahkamah, dan sistem cukai." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa ciri-ciri utama pembentukan sesebuah negara merangkumi penduduk, sempadan, kerajaan, dan kedaulatan.",
        incorrect: {
          a: "Salah. Ini adalah institusi dalam sebuah negara demokrasi, bukan elemen asas yang universal bagi semua negara.",
          b: "Salah. Ini adalah ciri-ciri yang lebih berkait rapat dengan pembentukan 'Bangsa' (Nation).",
          d: "Salah. Ini adalah jentera atau aparatus sesebuah negara, bukan elemen asas kewujudannya.",
        },
      },
    },
    {
      id: "sej1-q8",
      text: "Apakah perbezaan fundamental antara 'negara bangsa tamu' dan 'negara bangsa settler'?",
      options: [
        {
          id: "a",
          text: "Negara bangsa tamu mengutamakan hak komuniti migran manakala negara bangsa settler mengutamakan hak anak watan.",
        },
        {
          id: "b",
          text: "Negara bangsa tamu mengiktiraf dan menerima hegemoni politik anak watan manakala negara bangsa settler meminggirkan anak watan.",
        },
        {
          id: "c",
          text: "Negara bangsa tamu dibentuk melalui asimilasi manakala negara bangsa settler dibentuk melalui integrasi.",
        },
        {
          id: "d",
          text: "Negara bangsa tamu mengamalkan sistem ekonomi kapitalis manakala negara bangsa settler mengamalkan sistem sosialis.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menjelaskan bahawa dalam negara bangsa tamu, 'hegemoni politik menjadi amalan adalah di mana anak watan diperakui dan diterima,' manakala dalam negara bangsa settler, komuniti migran 'telah meminggirkan... anak-anak watan asalnya'.",
        incorrect: {
          a: "Salah. Pernyataan ini terbalik; negara bangsa tamu mengiktiraf anak watan, manakala negara bangsa settler didominasi oleh komuniti migran.",
          c: "Salah. Kaedah integrasi atau asimilasi boleh berlaku dalam kedua-dua jenis negara dan bukan faktor pembeza utama.",
          d: "Salah. Sistem ekonomi tidak menentukan klasifikasi sesebuah negara sebagai tamu atau settler.",
        },
      },
    },
    {
      id: "sej1-q9",
      text: "Berdasarkan nota, yang manakah merupakan contoh 'bangsa tanpa negara' (nation without state)?\nI. Bangsa Jepun\nII. Bangsa Melayu Patani\nIII. Bangsa Jerman\nIV. Bangsa Kurdis",
      options: [
        { id: "a", text: "I dan III sahaja" },
        { id: "b", text: "II dan IV sahaja" },
        { id: "c", text: "I, II dan III sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara spesifik menyebut bangsa Melayu Patani di Selatan Thailand dan bangsa Kurdis di utara Iraq sebagai contoh bangsa yang mempunyai identiti tersendiri tetapi tidak memiliki negara berdaulat.",
        incorrect: {
          a: "Salah. Bangsa Jepun dan Jerman adalah contoh klasik 'satu bangsa satu negara'.",
          c: "Salah. Bangsa Jepun dan Jerman mempunyai negara mereka sendiri.",
          d: "Salah. Hanya II dan IV yang betul berdasarkan contoh dalam nota.",
        },
      },
    },
    {
      id: "sej1-q10",
      text: "Benedict Anderson mentakrifkan bangsa sebagai sebuah ‘imagined political community’. Apakah maksud sebenar konsep ini?",
      options: [
        {
          id: "a",
          text: "Bangsa adalah sebuah rekaan ahli politik yang tidak mempunyai asas sosial yang nyata.",
        },
        {
          id: "b",
          text: "Bangsa wujud kerana ahlinya membayangkan kewujudan satu ikatan dan kebersamaan, walaupun tidak pernah mengenali antara satu sama lain.",
        },
        {
          id: "c",
          text: "Bangsa adalah sebuah komuniti utopia yang hanya boleh wujud dalam angan-angan dan mustahil untuk direalisasikan.",
        },
        {
          id: "d",
          text: "Bangsa dibayangkan akan terbentuk pada masa hadapan selepas kejayaan satu revolusi politik.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Konsep ini merujuk kepada fakta bahawa ahli-ahli sesebuah bangsa tidak mengenali majoriti ahli yang lain, namun dalam minda setiap orang wujud imej perpaduan dan kebersamaan mereka.",
        incorrect: {
          a: "Salah. 'Imagined' (dibayangkan) tidak bermaksud ia palsu atau rekaan, tetapi merujuk kepada cara ia wujud dalam kesedaran kolektif.",
          c: "Salah. Komuniti ini adalah nyata dari segi impak sosial dan politiknya, bukan sekadar angan-angan yang tidak boleh dicapai.",
          d: "Salah. Konsep ini menerangkan sifat bangsa yang sedia wujud, bukan sesuatu yang hanya akan muncul pada masa hadapan.",
        },
      },
    },
    {
      id: "sej1-q11",
      text: "Apakah sentimen utama yang membentuk sebuah 'bangsa' walaupun wujud pelbagai perspektif lain?",
      options: [
        { id: "a", text: "Penggunaan satu bahasa yang standard sepenuhnya." },
        { id: "b", text: "Penganutan satu agama yang sama oleh semua ahli." },
        { id: "c", text: "Perasaan kebersamaan atau ‘belonging together’." },
        {
          id: "d",
          text: "Ketaatan kepada seorang pemimpin politik yang berkarisma.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota merumuskan bahawa di sebalik pelbagai takrifan, 'sentimen yang membentuk bangsa ialah perasaan kebersamaan atau ‘belonging together’'.",
        incorrect: {
          a: "Salah. Walaupun bahasa penting, banyak bangsa mempunyai pelbagai dialek atau lebih dari satu bahasa.",
          b: "Salah. Banyak bangsa di dunia terdiri daripada penganut pelbagai agama.",
          d: "Salah. Pemimpin datang dan pergi, tetapi perasaan kebangsaan lazimnya kekal dan lebih mendalam.",
        },
      },
    },
    {
      id: "sej1-q12",
      text: "Manakah antara konsep 'Bangsa Idaman' berikut yang telah diterima oleh pihak British sebelum kemerdekaan, yang kemudiannya menjadi asas kepada kontrak sosial negara?",
      options: [
        { id: "a", text: "Konsep Melayu Raya" },
        { id: "b", text: "Konsep Negara Islam" },
        { id: "c", text: "Konsep Malay-led plural society" },
        { id: "d", text: "Konsep Malaysian Malaysia" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa konsep ini adalah yang 'diterima oleh pihak British pada ketika itu,' yang dibuktikan melalui penubuhan Jawatankuasa Perhubungan Masyarakat (CLC) 1949.",
        incorrect: {
          a: "Salah. Konsep ini digagaskan oleh golongan kiri Melayu dan tidak diterima oleh British.",
          b: "Salah. Konsep ini diperkenalkan oleh kelompok Islam dan bukan merupakan asas rundingan kemerdekaan.",
          d: "Salah. Konsep ini dipopularkan oleh Lee Kuan Yew pada tahun 1960-an, iaitu selepas kemerdekaan Malaya.",
        },
      },
    },
    {
      id: "sej1-q13",
      text: "Konsep 'Malaysian Malaysia' yang diperkenalkan oleh Lee Kuan Yew pada tahun 1960-an dan kemudiannya diwacanakan semula pada era 1990-an dan pasca-2018 memperjuangkan...",
      options: [
        { id: "a", text: "Hegemoni politik Melayu secara mutlak." },
        { id: "b", text: "Pembentukan sebuah negara Islam sepenuhnya." },
        {
          id: "c",
          text: "Kesamarataan, kebebasan, hak asasi, dan multikulturalisme.",
        },
        {
          id: "d",
          text: "Pengasingan kaum untuk memelihara identiti masing-masing.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota mengaitkan konsep ini dengan wacana pasca-2018 oleh PH yang menekankan 'Kesamarataan, kebebasan, hak asasi, multikulturalisme'.",
        incorrect: {
          a: "Salah. Konsep ini secara langsung mencabar idea hegemoni berasaskan kaum.",
          b: "Salah. Perjuangan utamanya adalah sekular dan sivil, bukan berteraskan agama.",
          d: "Salah. Konsep ini menggalakkan integrasi dan identiti nasional sepunya, bukan pengasingan.",
        },
      },
    },
    {
      id: "sej1-q14",
      text: "Menurut nota, apakah yang menjadi 'PASAK PERLEMBAGAAN' dalam kerangka negara bangsa Malaysia?",
      options: [
        {
          id: "a",
          text: "Hak kesamarataan mutlak bagi semua individu tanpa mengira kaum dan agama.",
        },
        {
          id: "b",
          text: "Kedudukan Raja-raja, Islam, Bahasa Melayu, dan hak istimewa orang Melayu.",
        },
        {
          id: "c",
          text: "Penggunaan undang-undang Inggeris (Common Law) sebagai sumber perundangan utama.",
        },
        {
          id: "d",
          text: "Jaminan kebebasan mutlak untuk mana-mana negeri keluar daripada Persekutuan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara spesifik menyenaraikan 'Melayu, Islam, Bahasa Melayu, Raja dan AKTA 153 kedudukan Melayu dalam negara dijadikan PASAK Perlembagaan'.",
        incorrect: {
          a: "Salah. Ini lebih menjurus kepada idea 'TAPAK INTEGRASI' dan 'Malaysian Malaysia,' bukan 'PASAK' utama.",
          c: "Salah. Walaupun Common Law digunakan, ia bukan pasak utama identiti negara bangsa dalam konteks yang dibincangkan.",
          d: "Salah. Perlembagaan tidak memperuntukkan hak untuk keluar daripada Persekutuan.",
        },
      },
    },
    {
      id: "sej1-q15",
      text: "Apakah fungsi 'TAPAK INTEGRASI' dalam Perlembagaan Persekutuan?",
      options: [
        {
          id: "a",
          text: "Untuk mengasimilasikan sepenuhnya kaum minoriti ke dalam budaya Melayu.",
        },
        {
          id: "b",
          text: "Untuk memastikan hegemoni politik Melayu tidak boleh dicabar.",
        },
        {
          id: "c",
          text: "Untuk mengikat komuniti minoriti kepada negara dengan menjamin hak dan kepentingan mereka.",
        },
        {
          id: "d",
          text: "Untuk memisahkan urusan pentadbiran antara kaum Bumiputera dan bukan Bumiputera.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menjelaskan bahawa kaum minoriti 'diikat di TAPAK INTEGRASI' melalui simbol perpaduan (YDPA), jaminan kebebasan beragama, hak bahasa ibunda, dan jaminan kepentingan mereka oleh YDPA.",
        incorrect: {
          a: "Salah. Konsepnya adalah integrasi, bukan asimilasi, seperti yang dibuktikan dengan jaminan hak mempelajari bahasa ibunda dan mengamalkan agama lain.",
          b: "Salah. Tapak Integrasi berfungsi sebagai mekanisme penyatuan, bukan penegasan hegemoni semata-mata.",
          d: "Salah. Tapak Integrasi bertujuan menyatukan semua kaum di bawah satu payung perlembagaan, bukan memisahkan.",
        },
      },
    },
    {
      id: "sej1-q16",
      text: "Siapakah yang memperkenalkan gagasan '1Malaysia' dan 'Bangsa Malaysia' (Wawasan 2020)?",
      options: [
        {
          id: "a",
          text: "1Malaysia (Tun Dr. Mahathir); Bangsa Malaysia (Dato' Sri Najib Razak)",
        },
        {
          id: "b",
          text: "1Malaysia (Dato' Sri Najib Razak); Bangsa Malaysia (Tun Dr. Mahathir Mohamad)",
        },
        {
          id: "c",
          text: "1Malaysia (Lee Kuan Yew); Bangsa Malaysia (Shamsul A.B.)",
        },
        {
          id: "d",
          text: "1Malaysia (Tun Hussein Onn); Bangsa Malaysia (Tunku Abdul Rahman)",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan '1990- Tun M... Bangsa Malaysia' dan 'DSNajib 1Malaysia'.",
        incorrect: {
          a: "Salah. Urutan ini terbalik.",
          c: "Salah. Lee Kuan Yew memperkenalkan 'Malaysian Malaysia' dan Shamsul A.B. adalah seorang ahli akademik yang mengkaji konsep ini.",
          d: "Salah. Kedua-dua gagasan ini diperkenalkan oleh pemimpin yang lebih terkemudian.",
        },
      },
    },
    {
      id: "sej1-q17",
      text: "Apakah yang dimaksudkan oleh Shamsul A.B. dengan konsep ‘nation of intent’?",
      options: [
        {
          id: "a",
          text: "Pembinaan bangsa adalah satu projek yang telah berjaya dan selesai dengan termeterainya Perlembagaan.",
        },
        {
          id: "b",
          text: "Pembinaan bangsa adalah satu niat murni yang gagal sepenuhnya di Malaysia.",
        },
        {
          id: "c",
          text: "Pembinaan bangsa adalah satu projek 'sedang berjalan' (work in progress) yang sentiasa dipertandingkan.",
        },
        {
          id: "d",
          text: "Pembinaan bangsa hanya boleh dicapai melalui niat bersama semua parti politik.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota memetik pandangan Shamsul A.B. bahawa 'sebuah negara bangsa adalah a project work in progress dan sentiasa berlaku contestation bangsa'.",
        incorrect: {
          a: "Salah. Konsep ini menegaskan bahawa pembinaan bangsa tidak pernah selesai.",
          b: "Salah. Ia bukan tentang kegagalan total, tetapi tentang proses yang berterusan dan dinamik.",
          d: "Salah. Walaupun niat politik penting, konsep ini merujuk kepada proses perdebatan yang lebih luas dalam masyarakat.",
        },
      },
    },
    {
      id: "sej1-q18",
      text: "Apakah kritikan Shamsul A.B. terhadap wacana hubungan kaum di Malaysia pasca-PRU14?",
      options: [
        {
          id: "a",
          text: "Terlalu memfokuskan kepada hubungan dalaman kaum (intra-ethnic) sehingga mengabaikan hubungan antara kaum.",
        },
        {
          id: "b",
          text: "Gagal meraikan perbezaan antara kaum dan melihatnya sebagai sesuatu yang negatif.",
        },
        {
          id: "c",
          text: "Terlalu banyak memberi penekanan kepada hubungan antara kaum (inter-ethnic) sambil meminggirkan hubungan dalaman kaum (intra-ethnic).",
        },
        {
          id: "d",
          text: "Terlalu bergantung kepada model perpaduan dari negara-negara Barat.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan dengan jelas pandangan beliau bahawa 'penekanan banyak diberikan kepada hubungan antara kaum atau “inter-ethnic” tetapi meminggirkan peri penting hubungan dalam kaum atau “intra-ethnic”'.",
        incorrect: {
          a: "Salah. Kritikan beliau adalah sebaliknya.",
          b: "Salah. Walaupun ini adalah sebahagian daripada pandangan beliau, kritikan utamanya yang dinyatakan adalah mengenai fokus wacana tersebut.",
          d: "Salah. Kritikan spesifik yang direkodkan dalam nota tidak merujuk kepada model Barat.",
        },
      },
    },
    {
      id: "sej1-q19",
      text: "Menurut Tun Dr. Mahathir Mohamad (1992), etos bangsa merangkumi semua perkara berikut KECUALI:",
      options: [
        { id: "a", text: "Perkongsian pengalaman sejarah dan nilai bersama." },
        { id: "b", text: "Perasaan identiti sepunya dan perkongsian takdir." },
        { id: "c", text: "Kesetiaan dan komitmen emosi terhadap negara." },
        {
          id: "d",
          text: "Penyeragaman penuh identiti etnik untuk membentuk satu budaya tunggal.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Petikan itu secara eksplisit menyebut bahawa etos bangsa perlu 'melangkaui batas etnik **tanpa menjejaskan identiti etnik**' (without undermining ethnic identity), yang bertentangan dengan idea penyeragaman penuh.",
        incorrect: {
          a: "Salah. Ini adalah elemen (1) dan (2) yang disenaraikan oleh beliau.",
          b: "Salah. Ini adalah elemen (3) dan (4) yang disenaraikan.",
          c: "Salah. Ini adalah elemen (6) dan (7) yang disenaraikan.",
        },
      },
    },
    {
      id: "sej1-q20",
      text: "Apakah yang dimaksudkan dengan 'kerencaman sosial' yang lahir daripada transformasi sosial di Malaysia?",
      options: [
        {
          id: "a",
          text: "Pengukuhan batas etnik dan hubungan sosial yang bersifat vertikal (berhierarki).",
        },
        {
          id: "b",
          text: "Kepelbagaian sosial di mana batas etnik menipis dan hubungan sosial lebih bersifat horizontal (rentas etnik).",
        },
        {
          id: "c",
          text: "Kembalinya masyarakat kepada budaya tradisi dan menolak sepenuhnya budaya moden.",
        },
        {
          id: "d",
          text: "Penumpuan masyarakat di kawasan luar bandar dan penglibatan dalam ekonomi sara hidup.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menghuraikan transformasi sosial melahirkan 'KERENCAMAN SOSIAL berpaksikan BUDAYA MODERNITI DAN KEPELBAGAIAN' dengan ciri 'Batas etnik nipis' dan 'Tingkah laku horizontal bukan vertikal'.",
        incorrect: {
          a: "Salah. Nota menyatakan sebaliknya, iaitu batas etnik menipis dan hubungan menjadi horizontal.",
          c: "Salah. Kerencaman sosial ini berpaksikan 'BUDAYA MODERNITI'.",
          d: "Salah. Transformasi sosial adalah dari perdesaan ke kosmopolitan dan dari sara hidup ke komersial-industri.",
        },
      },
    },
    {
      id: "sej1-q21",
      text: "Antara berikut, yang manakah termasuk dalam warisan etno-simbolisme yang menjadi asas sesebuah bangsa?\nI. Bendera dan bahasa\nII. Kerabat diraja dan pahlawan\nIII. Buku sekolah dan seni bina bangunan\nIV. Indeks bursa saham dan kadar pertukaran mata wang",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "I, II, dan III sahaja" },
        { id: "c", text: "II, III, dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyenaraikan 'bendara, bahasa... kerabat diraja, pahlawan, buku sekolah dan... arkitek bangunan' sebagai contoh warisan etno-simbolisme.",
        incorrect: {
          a: "Salah. Terdapat lebih banyak elemen etno-simbolisme yang disenaraikan.",
          c: "Salah. Indeks bursa saham dan kadar mata wang adalah penunjuk ekonomi, bukan simbol identiti bangsa yang berakar umbi dalam sejarah.",
          d: "Salah. Elemen IV tidak termasuk dalam takrifan etno-simbolisme.",
        },
      },
    },
    {
      id: "sej1-q22",
      text: "Apakah impak utama kerencaman sosial terhadap budaya dan nilai politik di Malaysia?",
      options: [
        {
          id: "a",
          text: "Rakyat menjadi semakin pasif dan tidak mengambil peduli tentang isu tadbir urus.",
        },
        {
          id: "b",
          text: "Tuntutan terhadap nilai-nilai seperti akauntabiliti, integriti, dan keterangkuman semakin meningkat.",
        },
        {
          id: "c",
          text: "Sokongan terhadap sistem pemerintahan berasaskan keturunan dan hegemoni semakin kuat.",
        },
        {
          id: "d",
          text: "Isu-isu seperti rasuah dan salah guna kuasa dianggap sebagai perkara biasa dan diterima umum.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyenaraikan 'NILAI POLITIK' baharu yang dituntut termasuk 'Amanah-Integriti, Keadilan, Akauntabiliti, Transparensi, Keterangkuman'.",
        incorrect: {
          a: "Salah. Nota menunjukkan sebaliknya; budaya politik baru menuntut lebih banyak penglibatan dan demokrasi.",
          c: "Salah. Budaya politik baru lebih cenderung kepada demokrasi dan merit, berbanding keturunan.",
          d: "Salah. Isu-isu ini menjadi fokus utama kritikan dalam budaya politik baru, bukan diterima.",
        },
      },
    },
    {
      id: "sej1-q23",
      text: "Bagaimanakah kedudukan rakyat Sabah dan Sarawak selepas pembentukan Malaysia pada tahun 1963?",
      options: [
        {
          id: "a",
          text: "Dianggap sebagai komuniti migran dengan kerakyatan terhad.",
        },
        {
          id: "b",
          text: "Diberi status autonomi sebagai negara bersekutu yang bebas.",
        },
        {
          id: "c",
          text: "Diperakui sebagai Bumiputera dan menjadi sebahagian daripada 'Pasak' negara bangsa.",
        },
        {
          id: "d",
          text: "Diserapkan di bawah pentadbiran negeri-negeri Melayu sedia ada.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan 'rakyat Sabah dan Sarawak diperakui sebagai Bumiputera dan dijadikan sebahagian PASAK negara bangsa bersama Melayu'.",
        incorrect: {
          a: "Salah. Mereka adalah anak watan (pribumi) dan mendapat kerakyatan penuh.",
          b: "Salah. Mereka menyertai Persekutuan sebagai negeri, bukan negara bersekutu yang bebas.",
          d: "Salah. Mereka membentuk negeri mereka sendiri dalam Persekutuan.",
        },
      },
    },
    {
      id: "sej1-q24",
      text: "Konsep 'Bangsa Idaman' yang paling dominan dan dikekalkan dalam wacana politik arus perdana Malaysia sehingga kini ialah:",
      options: [
        { id: "a", text: "Negara Islam (Daulah Islamiah)" },
        { id: "b", text: "Melayu Raya" },
        { id: "c", text: "Malay-led plural society" },
        { id: "d", text: "Malaysian Malaysia" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menegaskan bahawa konsep ini diterima British, dikekalkan selepas merdeka, dan terus diangkat oleh parti-parti politik utama Melayu sehingga ke hari ini.",
        incorrect: {
          a: "Salah. Ini adalah aspirasi sesetengah kelompok tetapi bukan konsep dominan yang membentuk pentadbiran negara.",
          b: "Salah. Ini adalah idea golongan kiri Melayu yang tidak pernah menjadi dasar rasmi negara.",
          d: "Salah. Walaupun konsep ini sentiasa menjadi wacana alternatif yang kuat, ia bukanlah konsep dominan yang diamalkan secara konsisten oleh kerajaan pemerintah.",
        },
      },
    },
    {
      id: "sej1-q25",
      text: "Mengapakah Malaysia boleh dirujuk sebagai sebuah 'negara tanpa bangsa' (state without nation)?",
      options: [
        {
          id: "a",
          text: "Kerana Malaysia tidak mempunyai perlembagaan yang diiktiraf.",
        },
        {
          id: "b",
          text: "Kerana kedaulatan Malaysia sering dicabar oleh kuasa-kuasa luar.",
        },
        {
          id: "c",
          text: "Kerana kewujudan pelbagai kumpulan etnik yang masih mengekalkan identiti masing-masing dan satu 'Bangsa Malaysia' yang sepunya masih belum terbina.",
        },
        {
          id: "d",
          text: "Kerana negara ditadbir tanpa sistem kerajaan yang jelas.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menjelaskan senario ini berlaku apabila 'wujudnya sesebuah negara yang diperakui kedaulatannya, tetapi tidak jelas dari segi identiti bangsa yang dibina,' dan merujuknya kepada konteks Malaysia.",
        incorrect: {
          a: "Salah. Malaysia mempunyai Perlembagaan Persekutuan yang menjadi undang-undang tertinggi negara.",
          b: "Salah. Malaysia adalah sebuah negara berdaulat yang diiktiraf di peringkat antarabangsa.",
          d: "Salah. Malaysia mempunyai sistem Kerajaan Persekutuan yang stabil.",
        },
      },
    },
    {
      id: "sej1-q26",
      text: "Antara berikut, yang manakah BUKAN ciri sebuah negara bangsa settler?",
      options: [
        { id: "a", text: "Komuniti migran menguasai ekonomi dan politik." },
        {
          id: "b",
          text: "Anak watan asal sering dipinggirkan atau diletakkan di tanah rizab.",
        },
        {
          id: "c",
          text: "Hegemoni politik anak watan diiktiraf dan diterima sebagai teras negara.",
        },
        {
          id: "d",
          text: "Kedudukan anak watan tidak diperakui sebagai asas pembentukan negara.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Pengiktirafan hegemoni politik anak watan adalah ciri utama 'negara bangsa tamu,' bukan settler.",
        incorrect: {
          a: "Salah. Ini adalah ciri utama negara bangsa settler.",
          b: "Salah. Ini adalah nasib yang sering menimpa anak watan di negara bangsa settler.",
          d: "Salah. Ini adalah ciri negara bangsa settler di mana hegemoni politik digantikan oleh kumpulan etnik migran yang dominan.",
        },
      },
    },
    {
      id: "sej1-q27",
      text: "Manakah antara negara berikut yang digolongkan sebagai 'negara bangsa settler'?",
      options: [
        { id: "a", text: "Malaysia dan Thailand" },
        { id: "b", text: "Amerika Syarikat dan Kanada" },
        { id: "c", text: "China dan Jepun" },
        { id: "d", text: "Indonesia dan Brunei" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara spesifik menyenaraikan Amerika Syarikat, Kanada, Australia, dan New Zealand sebagai contoh negara bangsa settler.",
        incorrect: {
          a: "Salah. Malaysia dan Thailand dikategorikan sebagai negara bangsa tamu.",
          c: "Salah. China dan Jepun adalah contoh negara bangsa tamu atau negara bangsa homogen.",
          d: "Salah. Indonesia dan Brunei dikategorikan sebagai negara bangsa tamu.",
        },
      },
    },
    {
      id: "sej1-q28",
      text: "Apakah maksud 'kewarganegaraan'?",
      options: [
        {
          id: "a",
          text: "Hak untuk menetap di sesebuah negara tanpa sebarang ikatan undang-undang.",
        },
        {
          id: "b",
          text: "Identiti budaya yang dikongsi oleh sesebuah kumpulan etnik.",
        },
        {
          id: "c",
          text: "Satu kedudukan atau ikatan sah di sisi undang-undang yang mengikat individu dengan negaranya.",
        },
        {
          id: "d",
          text: "Status yang hanya diberikan kepada golongan bangsawan atau kerabat diraja.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa 'kewarganegaraan adalah suatu bentuk kerakyatan atau kedudukan sah yang mengikat seseorang individu dengan negaranya'.",
        incorrect: {
          a: "Salah. Kewarganegaraan adalah satu ikatan sah, bukan sekadar hak menetap.",
          b: "Salah. Ini lebih merujuk kepada konsep etnisiti, bukan kewarganegaraan.",
          d: "Salah. Kewarganegaraan dalam negara moden adalah hak bagi rakyat, bukan eksklusif untuk golongan tertentu.",
        },
      },
    },
    {
      id: "sej1-q29",
      text: "Apakah peranan utama Akta 153 Perlembagaan Persekutuan dalam konteks hubungan kaum di Malaysia?",
      options: [
        {
          id: "a",
          text: "Memberi hak kerakyatan kepada semua komuniti migran secara automatik.",
        },
        {
          id: "b",
          text: "Menjamin kedudukan istimewa orang Melayu dan Bumiputera sambil melindungi kepentingan sah kaum-kaum lain.",
        },
        {
          id: "c",
          text: "Menjadikan Bahasa Inggeris sebagai bahasa rasmi kedua Persekutuan.",
        },
        {
          id: "d",
          text: "Memansuhkan sistem Raja Berperlembagaan dan menubuhkan sebuah republik.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Akta 153 adalah mengenai perizaban kuota berkenaan perkhidmatan, permit, dan sebagainya untuk orang Melayu dan Bumiputera, dan ia juga mengandungi klausa di mana YDPA bertanggungjawab melindungi kepentingan sah komuniti lain.",
        incorrect: {
          a: "Salah. Pemberian kerakyatan diuruskan di bawah peruntukan lain, bukan Akta 153.",
          c: "Salah. Perkara 152 Perlembagaan adalah mengenai Bahasa Kebangsaan (Bahasa Melayu).",
          d: "Salah. Akta 153 wujud dalam kerangka sistem Raja Berperlembagaan dan tidak bertujuan memansuhkannya.",
        },
      },
    },
    {
      id: "sej1-q30",
      text: "Menurut Etzioni (2009), 'etos bangsa' merujuk kepada...",
      options: [
        {
          id: "a",
          text: "Kekuatan ketenteraan dan penguasaan teknologi sesebuah bangsa.",
        },
        {
          id: "b",
          text: "Sistem perundangan dan peraturan yang mengawal masyarakat.",
        },
        {
          id: "c",
          text: "Nilai-nilai khas, tradisi, identiti, dan wawasan masa depan sesebuah bangsa.",
        },
        {
          id: "d",
          text: "Tahap pembangunan ekonomi dan pendapatan per kapita rakyat.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota memetik takrifan Etzioni bahawa etos bangsa merujuk kepada 'nilai-nilai khas, tradisi, identiti dan wawasan masa depan (atau takdir) sesebuah bangsa'.",
        incorrect: {
          a: "Salah. Ini adalah aspek material, manakala etos lebih bersifat nilai dan identiti.",
          b: "Salah. Undang-undang bersifat formal, manakala etos adalah semangat atau sentimen yang dikongsi bersama.",
          d: "Salah. Ini adalah penunjuk ekonomi, bukan etos bangsa.",
        },
      },
    },
    {
      id: "sej1-q31",
      text: "Manakah antara berikut merupakan ciri-ciri 'Budaya Politik Baru' yang lahir dari kerencaman sosial di Malaysia?\nI. Tuntutan terhadap kebebasan bersuara dan akses maklumat.\nII. Peningkatan kesedaran mengenai isu tadbir urus baik dan integriti.\nIII. Hubungan sosial politik yang lebih horizontal dan rentas etnik.\nIV. Pengukuhan sistem politik feudal dan ketaatan mutlak kepada pemimpin.",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "I, II, dan III sahaja" },
        { id: "c", text: "II, III, dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyenaraikan 'Kebebasan Bersuara, Akses Maklumat', nilai seperti 'Amanah-Integriti' dan 'Tadbir Urus Baik', serta 'hubungan sosial rentas etnik' sebagai impak kerencaman sosial.",
        incorrect: {
          a: "Salah. Terdapat ciri lain yang relevan iaitu hubungan horizontal.",
          c: "Salah. Sistem feudal dan ketaatan mutlak adalah ciri pra-moden yang bertentangan dengan budaya politik baru.",
          d: "Salah. Elemen IV adalah tidak benar.",
        },
      },
    },
    {
      id: "sej1-q32",
      text: "Kepelbagaian kaum di Tanah Melayu mula terbentuk secara signifikan pada zaman...",
      options: [
        {
          id: "a",
          text: "Zaman Pra-Sejarah di mana hanya wujud masyarakat pribumi.",
        },
        {
          id: "b",
          text: "Zaman Proto-Sejarah dengan kewujudan kerajaan awal seperti Gangga Negara.",
        },
        {
          id: "c",
          text: "Zaman Kesultanan Melayu Melaka yang menjadi pusat perdagangan antarabangsa.",
        },
        { id: "d", text: "Zaman Darurat selepas Perang Dunia Kedua." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa pada zaman Kesultanan Melayu Melaka, 'Bermula pembentukan masyarakat kepelbagaian - perdagangan'.",
        incorrect: {
          a: "Salah. Pada zaman ini, masyarakatnya agak homogen.",
          b: "Salah. Walaupun sudah ada hubungan dengan dunia luar, pembentukan masyarakat majmuk belum signifikan.",
          d: "Salah. Masyarakat majmuk telah kukuh terbentuk sebelum Zaman Darurat.",
        },
      },
    },
    {
      id: "sej1-q33",
      text: "Apakah faktor utama yang membolehkan berlakunya 'interaksi dan jaringan peradaban merentasi benua' pada era globalisasi?",
      options: [
        { id: "a", text: "Penaklukan ketenteraan dan imperialisme." },
        {
          id: "b",
          text: "Perkembangan teknologi maklumat seperti internet dan media sosial.",
        },
        {
          id: "c",
          text: "Perjanjian perkongsian budaya yang ditandatangani antara negara.",
        },
        { id: "d", text: "Aktiviti mubaligh agama secara besar-besaran." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menekankan bahawa era globalisasi dimungkinkan oleh 'Perkembangan teknologi maklumat dan informasi – Internet, Komputer, SmartPhone' dan 'Penggunaan media sosial yang berleluasa'.",
        incorrect: {
          a: "Salah. Ini adalah ciri era kolonialisme, bukan globalisasi digital.",
          c: "Salah. Interaksi globalisasi berlaku secara organik dan melangkaui perjanjian rasmi.",
          d: "Salah. Walaupun ini berlaku, ia bukan faktor pemangkin utama yang mencirikan era globalisasi moden.",
        },
      },
    },
    {
      id: "sej1-q34",
      text: "Apakah kesimpulan yang boleh dibuat mengenai proses pembentukan masyarakat di Malaysia dari zaman pra-penjajah hingga kini?",
      options: [
        {
          id: "a",
          text: "Masyarakat Malaysia sentiasa bersifat statik dan tidak berubah.",
        },
        {
          id: "b",
          text: "Ia beralih dari peradaban majmuk, kepada masyarakat majmuk era kolonial, dan kini ke arah masyarakat kepelbagaian.",
        },
        {
          id: "c",
          text: "Ia bermula sebagai masyarakat majmuk dan kini kembali menjadi peradaban homogen.",
        },
        {
          id: "d",
          text: "Proses pembentukannya hanya dipengaruhi oleh penjajahan British semata-mata.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slaid kesimpulan merumuskan evolusi ini: 'Pra Penjajah - Peradaban majmuk → Penjajahan - Masyarakat Majmuk → Pasca Kolonial... Masyarakat Kepelbagaian'.",
        incorrect: {
          a: "Salah. Nota menunjukkan satu proses transformasi yang sangat dinamik.",
          c: "Salah. Masyarakat Malaysia menjadi semakin rencam dan pelbagai, bukan homogen.",
          d: "Salah. Pembentukannya adalah hasil gabungan pelbagai lapisan peradaban (Pribumi, Asia, Barat, Global).",
        },
      },
    },
    {
      id: "sej1-q35",
      text: "Apakah teras kepada 'Peradaban Acuan Malaysia' seperti yang dirumuskan dalam nota?",
      options: [
        {
          id: "a",
          text: "Gabungan peradaban pribumi (Melayu, Sabah, Sarawak) dan Islam dengan pengaruh peradaban luar serta etika sivik.",
        },
        {
          id: "b",
          text: "Asimilasi sepenuhnya semua budaya kepada satu budaya dominan tunggal.",
        },
        {
          id: "c",
          text: "Pengasingan setiap kumpulan etnik untuk mengekalkan ketulenan budaya masing-masing.",
        },
        {
          id: "d",
          text: "Penerimaan sepenuhnya peradaban global dan penolakan terhadap unsur-unsur tradisi.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Rumusan akhir nota menggambarkan Peradaban Acuan Malaysia sebagai gabungan 'Pribumi Melayu + peradaban Asia, timur Tenah & Barat' yang melibatkan 'Melayu, Sabah, Sarawak dan Islam' serta 'Etnik-etnik lain,' dan diikat oleh etika sivik dan tadbir urus yang baik.",
        incorrect: {
          b: "Salah. Konsep yang digunakan adalah integrasi dalam kepelbagaian, bukan asimilasi.",
          c: "Salah. Ini adalah konsep segregasi, yang bertentangan dengan idea peradaban acuan Malaysia.",
          d: "Salah. Peradaban acuan Malaysia mengintegrasikan unsur global sambil mengekalkan teras pribumi dan tradisi.",
        },
      },
    },
    {
      id: "sej1-q36",
      text: "Antara berikut, manakah BUKAN sebahagian daripada idea 'Bangsa Idaman' yang pernah atau sedang diwacanakan di Malaysia?",
      options: [
        { id: "a", text: "Gagasan 1 Malaysia" },
        { id: "b", text: "Sabah for Sabahan" },
        { id: "c", text: "Malayan Union" },
        { id: "d", text: "Melayu Raya" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Malayan Union 1946 adalah satu bentuk pentadbiran yang diperkenalkan oleh British dan ditentang hebat. Ia bukanlah satu konsep 'Bangsa Idaman' yang lahir dari wacana masyarakat tempatan seperti yang lain.",
        incorrect: {
          a: "Salah. Gagasan 1 Malaysia disenaraikan sebagai salah satu konsep yang wujud.",
          b: "Salah. Konsep 'Sabah for Sabahan' juga disebut sebagai salah satu idea yang wujud di Borneo.",
          d: "Salah. Konsep Melayu Raya digagaskan oleh pergerakan Kiri Melayu dan disenaraikan dalam nota.",
        },
      },
    },
    {
      id: "sej1-q37",
      text: "Apakah perubahan sosial utama yang berlaku pada tahun 1980-90an yang membentuk masyarakat Malaysia moden?",
      options: [
        {
          id: "a",
          text: "Kemunculan isu kemiskinan dan ketidaksamarataan yang melampau.",
        },
        {
          id: "b",
          text: "Proses perbandaran dan pembentukan kelas menengah secara besar-besaran.",
        },
        {
          id: "c",
          text: "Tumpuan kepada pembangunan, perindustrian, dan penghijrahan ke bandar.",
        },
        {
          id: "d",
          text: "Permulaan era globalisasi digital dan media sosial.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota meletakkan '1980-90-an Pembangunan, Industri & Penghijrahan' sebagai fasa penting dalam transformasi sosial negara.",
        incorrect: {
          a: "Salah. Ini adalah ciri utama era 1970-an, sebelum DEB dilaksanakan sepenuhnya.",
          b: "Salah. Proses ini menjadi lebih ketara pada tahun 2000-an.",
          d: "Salah. Ini adalah ciri era pasca-2000.",
        },
      },
    },
    {
      id: "sej1-q38",
      text: "Manakah antara berikut merupakan padanan yang TEPAT antara sarjana dan konsep yang diperkenalkan oleh mereka?",
      options: [
        { id: "a", text: "Max Weber → Negara adalah produk konflik kelas." },
        {
          id: "b",
          text: "Benedict Anderson → Nation of Intent (Bangsa Niat).",
        },
        { id: "c", text: "Shamsul A.B. → Imagined Political Community." },
        {
          id: "d",
          text: "Abdul Rahman Embong → Di Malaysia, negara lahir dahulu sebelum bangsa.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Ini adalah pandangan Abdul Rahman Embong yang dipetik dalam nota, yang menyatakan bahawa apa yang lahir pada tahun 1957 ialah sebuah negara, dan bukannya sebuah bangsa.",
        incorrect: {
          a: "Salah. Konsep konflik kelas diperkenalkan oleh Karl Marx. Weber memperkenalkan konsep monopoli penggunaan kekerasan yang sah.",
          b: "Salah. Nation of Intent adalah konsep oleh Shamsul A.B.. Anderson memperkenalkan Imagined Political Community.",
          c: "Salah. Ini adalah konsep oleh Benedict Anderson. Shamsul A.B. memperkenalkan Nation of Intent.",
        },
      },
    },
    {
      id: "sej1-q39",
      text: "Yang manakah antara berikut BUKAN sebahagian daripada 'Tapak Integrasi' yang mengikat kaum minoriti dalam Perlembagaan Persekutuan?\nI. Yang di-Pertuan Agong sebagai simbol perpaduan negara.\nII. Islam adalah agama rasmi tetapi agama lain bebas diamalkan.\nIII. Bahasa Melayu adalah bahasa kebangsaan tetapi bahasa ibunda lain boleh dipelajari.\nIV. Hak istimewa orang Melayu dan Bumiputera di bawah Akta 153.",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "IV sahaja" },
        { id: "c", text: "III dan IV sahaja" },
        { id: "d", text: "Tiada yang di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Hak istimewa orang Melayu (Akta 153) dikategorikan sebagai 'PASAK Perlembagaan,' bukan 'TAPAK INTEGRASI.' Tapak Integrasi merujuk kepada jaminan YDPA di bawah Akta 153 untuk melindungi kepentingan kaum lain, bukan Akta 153 itu sendiri.",
        incorrect: {
          a: "Salah. Elemen I dan II adalah sebahagian daripada Tapak Integrasi.",
          c: "Salah. Elemen III adalah sebahagian daripada Tapak Integrasi, manakala elemen IV adalah Pasak.",
          d: "Salah. Elemen IV adalah Pasak, bukan Tapak Integrasi.",
        },
      },
    },
    {
      id: "sej1-q40",
      text: "Berdasarkan keseluruhan nota, apakah cabaran utama dalam pembinaan peradaban beridentitikan Malaysia?",
      options: [
        { id: "a", text: "Kekurangan sumber asli untuk pembangunan negara." },
        {
          id: "b",
          text: "Ancaman daripada kuasa-kuasa besar dunia secara berterusan.",
        },
        {
          id: "c",
          text: "Kewujudan pelbagai 'Bangsa Idaman' yang bersaing dan proses pembinaan bangsa yang masih berterusan.",
        },
        {
          id: "d",
          text: "Kegagalan untuk menyesuaikan diri dengan peradaban globalisasi.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota berulang kali menekankan bahawa 'Usaha membina peradaban beridentitikan Malaysia sangat mencabar' kerana wujudnya pelbagai 'Bangsa Idaman' yang bersaing dan hakikat bahawa pembinaan bangsa adalah satu 'work in progress'.",
        incorrect: {
          a: "Salah. Nota tidak membincangkan kekurangan sumber asli sebagai cabaran utama.",
          b: "Salah. Walaupun geopolitik penting, cabaran dalaman lebih ditekankan dalam nota ini.",
          d: "Salah. Nota menunjukkan Malaysia telah terkesan dan menjadi sebahagian daripada peradaban globalisasi.",
        },
      },
    },
  ],
};
