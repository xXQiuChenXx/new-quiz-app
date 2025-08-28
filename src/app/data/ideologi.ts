import { Quiz } from "@/app/types/quiz";

export const ideologi: Quiz = {
  id: "falsafah-topik-7",
  categoryId: "falsafah",
  subcategoryId: "topik-7",
  title: "Topik 7 - Ideologi",
  questions: [
    {
      id: "ict-q1",
      text: 'Siapakah tokoh yang dikenali sebagai "Bapa Internet Malaysia" kerana mencetuskan idea menghubungkan Malaysia dengan Internet pada tahun 1983?',
      options: [
        { id: "a", text: "Tun Dr. Mahathir Mohamad" },
        { id: "b", text: "Dr. Mohamed Awang-Lah" },
        { id: "c", text: "Prof. Shamsul Amri Baharuddin" },
        { id: "d", text: "Datuk Seri Anwar Ibrahim" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Dr. Mohamed Awang-Lah memulakan idea dan projek perintis ini di makmal Universiti Malaya, yang membawa kepada penubuhan RangKOM dan JARING.",
        incorrect: {
          a: "Tun Dr. Mahathir ialah negarawan yang melancarkan agenda seperti Koridor Raya Multimedia (MSC), tetapi idea awal Internet dicetuskan oleh tokoh akademik.",
          c: "Beliau merupakan seorang ahli akademik terkemuka dalam bidang antropologi dan sosiologi, bukan perintis ICT.",
          d: "Beliau ialah seorang tokoh politik dan tidak terlibat secara langsung dalam perintisan teknikal Internet di Malaysia.",
        },
      },
    },
    {
      id: "ict-q2",
      text: "Bilakah JARING (Joint Advanced Research Integrated Networking) dilancarkan secara rasmi di Malaysia?",
      options: [
        { id: "a", text: "1987" },
        { id: "b", text: "1989" },
        { id: "c", text: "1991" },
        { id: "d", text: "1996" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "JARING telah dilancarkan secara rasmi pada tahun 1991, menjadi penyedia perkhidmatan Internet pertama di Malaysia.",
        incorrect: {
          a: "Pada tahun ini, projek rangkaian masih di peringkat awal perbincangan di institusi pengajian tinggi.",
          b: "Tahun 1989 adalah tahun pelancaran Rangkaian Komputer Malaysia (RangKOM), iaitu pelopor kepada JARING.",
          d: "Tahun 1996 adalah tahun pelancaran Koridor Raya Multimedia (MSC), satu fasa perkembangan ICT yang lebih pesat.",
        },
      },
    },
    {
      id: "ict-q3",
      text: "Apakah inisiatif yang menjadi titik permulaan evolusi Internet di Malaysia sebelum kewujudan JARING?",
      options: [
        { id: "a", text: "Penubuhan Telekom Malaysia" },
        { id: "b", text: "Rangkaian Komputer Malaysia (RangKOM)" },
        { id: "c", text: "Pelancaran MEASAT" },
        {
          id: "d",
          text: "Penubuhan Suruhanjaya Komunikasi dan Multimedia Malaysia (SKMM)",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "RangKOM, yang dilancarkan pada tahun 1989, merupakan rangkaian perintis yang menghubungkan universiti-universiti tempatan dan menjadi asas kepada JARING.",
        incorrect: {
          a: "Telekom Malaysia ditubuhkan pada 1984, tetapi peranannya sebagai penyedia infrastruktur, bukan titik mula rangkaian Internet akademik.",
          c: "MEASAT ialah satelit komunikasi Malaysia yang dilancarkan pada 1996, menandakan perkembangan infrastruktur, bukan permulaan Internet.",
          d: "SKMM ditubuhkan pada 1998 untuk mengawal selia industri, iaitu selepas Internet sudahpun berkembang.",
        },
      },
    },
    {
      id: "ict-q4",
      text: "Apakah matlamat utama Rukun Negara (1970) yang relevan dengan pembangunan sains & teknologi di Malaysia?",
      options: [
        {
          id: "a",
          text: "Memastikan semua syarikat ICT mencapai keuntungan maksimum.",
        },
        {
          id: "b",
          text: "Membina sebuah masyarakat progresif yang akan menggunakan sains dan teknologi moden.",
        },
        {
          id: "c",
          text: "Memberi fokus kepada pengurangan jurang digital antara bandar dan luar bandar sahaja.",
        },
        {
          id: "d",
          text: "Menghapuskan kebergantungan sepenuhnya terhadap teknologi dari negara asing.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          'Cita-cita kelima Rukun Negara secara jelas menyatakan hasrat untuk "Membina sebuah masyarakat progresif yang akan menggunakan sains dan teknologi moden".',
        incorrect: {
          a: "Matlamat Rukun Negara adalah bersifat nasional dan sosial, bukan tertumpu kepada keuntungan komersial.",
          c: "Pengurangan jurang digital adalah salah satu strategi pelaksanaan, tetapi bukan matlamat utama yang termaktub dalam Rukun Negara itu sendiri.",
          d: "Walaupun mengurangkan kebergantungan adalah baik, ia bukan objektif eksplisit yang dinyatakan dalam teks Rukun Negara berkaitan sains & teknologi.",
        },
      },
    },
    {
      id: "ict-q5",
      text: "Istilah “technostress” merujuk kepada:",
      options: [
        {
          id: "a",
          text: "Ketagihan melampau terhadap permainan video dalam talian.",
        },
        {
          id: "b",
          text: "Tekanan psikologi yang dialami akibat kegagalan untuk menyesuaikan diri dengan teknologi baharu.",
        },
        {
          id: "c",
          text: "Perasaan takut atau fobia terhadap penggunaan mesin automatik dan komputer.",
        },
        {
          id: "d",
          text: "Keinginan yang tidak terkawal untuk membeli gajet elektronik terkini.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Technostress ialah tekanan negatif yang timbul apabila seseorang rasa terbeban dan tidak mampu mengikuti kepantasan perubahan teknologi di tempat kerja atau kehidupan.",
        incorrect: {
          a: "Ini lebih tepat dirujuk sebagai ketagihan permainan (gaming addiction).",
          c: "Ini adalah definisi bagi technophobia.",
          d: "Ini lebih merujuk kepada sifat konsumerisme atau pembelian kompulsif.",
        },
      },
    },
    {
      id: "ict-q6",
      text: "Apakah definisi yang paling tepat bagi “technophobia”?",
      options: [
        {
          id: "a",
          text: "Kebimbangan mengenai isu pencerobohan data peribadi dan privasi.",
        },
        {
          id: "b",
          text: "Ketakutan atau kebencian tidak rasional terhadap teknologi baharu, terutamanya komputer.",
        },
        {
          id: "c",
          text: "Perasaan ragu-ragu terhadap kesahihan berita yang tersebar di media sosial.",
        },
        {
          id: "d",
          text: "Ketidakselesaan untuk berinteraksi secara sosial melalui platform digital.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Technophobia secara literal bermaksud ketakutan terhadap teknologi, yang menyebabkan seseorang mengelak daripada menggunakan peranti moden.",
        incorrect: {
          a: "Ini adalah kebimbangan mengenai keselamatan siber (cybersecurity concern), bukan fobia terhadap teknologi itu sendiri.",
          c: "Ini lebih merujuk kepada sikap skeptikal terhadap maklumat dalam talian.",
          d: "Ini mungkin satu simptom, tetapi definisi utamanya ialah ketakutan terhadap teknologi itu sendiri.",
        },
      },
    },
    {
      id: "ict-q7",
      text: "Mengapakah ICT sering dianggap sebagai “alat” dalam kehidupan manusia?",
      options: [
        {
          id: "a",
          text: "Kerana ia boleh menyebabkan tekanan kerja yang melampau.",
        },
        {
          id: "b",
          text: "Kerana ia berfungsi sebagai medium untuk membolehkan urusan harian menjadi lebih pantas dan efisien.",
        },
        {
          id: "c",
          text: "Kerana ia terhad kepada fungsi hiburan dan rekreasi semata-mata.",
        },
        {
          id: "d",
          text: "Kerana ia menambah kerumitan dalam menyelesaikan tugasan seharian.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          'Sebagai "alat", fungsi utama ICT adalah untuk membantu, mempermudah, dan mempercepatkan tugasan manusia, sama seperti tukul atau kalkulator.',
        incorrect: {
          a: 'Ini adalah ciri ICT sebagai "beban", bukan "alat".',
          c: "Skop ICT adalah sangat luas merangkumi pendidikan, perniagaan, dan pentadbiran, bukan hanya hiburan.",
          d: "Jika ia merumitkan, ia bukanlah alat yang berkesan. Matlamat alat adalah untuk mempermudah.",
        },
      },
    },
    {
      id: "ict-q8",
      text: "Bilakah ICT boleh dianggap sebagai “beban”?",
      options: [
        {
          id: "a",
          text: "Apabila ia membantu komunikasi merentasi sempadan geografi.",
        },
        {
          id: "b",
          text: "Apabila ia membuka peluang ekonomi baharu seperti e-dagang.",
        },
        {
          id: "c",
          text: "Apabila ia mengaburkan sempadan antara waktu kerja dan waktu peribadi (kehidupan 24/7).",
        },
        {
          id: "d",
          text: "Apabila ia menyediakan akses pantas kepada maklumat dan pengetahuan.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          'ICT menjadi "beban" apabila ia menyebabkan seseorang sentiasa dihubungi untuk urusan kerja di luar waktu pejabat, sehingga menjejaskan rehat dan kehidupan peribadi.',
        incorrect: {
          a: "Ini adalah kelebihan dan fungsi positif ICT.",
          b: "Ini adalah manfaat ekonomi yang dibawa oleh ICT.",
          d: "Ini adalah kelebihan ICT dalam bidang pendidikan dan penyelidikan.",
        },
      },
    },
    {
      id: "ict-q9",
      text: "Apakah amalan yang mencerminkan etika digital “Hormati masa dan data orang lain”?",
      options: [
        {
          id: "a",
          text: "Menghantar mesej yang ringkas, padat dan tidak berulang kali tanpa tujuan mustahak.",
        },
        {
          id: "b",
          text: "Sentiasa berada dalam talian untuk membalas mesej dengan segera.",
        },
        {
          id: "c",
          text: "Menanda (tag) rakan dalam semua hantaran media sosial untuk mendapat perhatian.",
        },
        {
          id: "d",
          text: "Menggunakan e-mel rasmi rakan sekerja untuk mendaftar masuk ke laman web peribadi.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Menghormati masa orang lain bermakna tidak mengganggu mereka dengan komunikasi yang tidak perlu atau membuang masa.",
        incorrect: {
          b: "Tiada etika yang mewajibkan seseorang untuk sentiasa berada dalam talian; setiap orang berhak ke atas masa peribadi mereka.",
          c: "Menanda orang lain tanpa kebenaran atau kaitan adalah satu bentuk pencerobohan ruang digital peribadi mereka.",
          d: "Ini adalah pelanggaran privasi dan penyalahgunaan data.",
        },
      },
    },
    {
      id: "ict-q10",
      text: "Prinsip etika paling asas dalam dunia siber adalah:",
      options: [
        {
          id: "a",
          text: "Menggunakan identiti palsu untuk melindungi privasi diri.",
        },
        {
          id: "b",
          text: "Mengamalkan piawai kelakuan yang sama seperti dalam dunia nyata.",
        },
        {
          id: "c",
          text: "Berkongsi semua maklumat yang diterima untuk memastikan ketelusan.",
        },
        {
          id: "d",
          text: "Mengutamakan kebebasan bersuara tanpa had dan batasan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          'Peraturan emas netiquette ialah: "Jangan lakukan sesuatu dalam talian yang anda tidak akan lakukan dalam dunia sebenar." Ini termasuk adab, hormat, dan kejujuran.',
        incorrect: {
          a: "Walaupun privasi penting, penyamaran untuk tujuan menipu atau mengganggu adalah tidak beretika.",
          c: "Berkongsi maklumat tanpa tapisan adalah berbahaya kerana ia boleh menyebarkan berita palsu atau fitnah.",
          d: "Kebebasan bersuara dalam dunia siber masih tertakluk kepada undang-undang dan norma etika untuk mengelakkan ucapan kebencian atau fitnah.",
        },
      },
    },
    {
      id: "ict-q11",
      text: "Manakah antara berikut cara menjaga peradaban di media sosial?",
      options: [
        {
          id: "a",
          text: "Berkongsi gambar kemalangan ngeri tanpa meletakkan amaran visual.",
        },
        {
          id: "b",
          text: "Menegur kesilapan orang lain secara terbuka di ruangan komen dengan bahasa yang kasar.",
        },
        {
          id: "c",
          text: "Menghormati pandangan orang yang lebih tua walaupun berbeza pendapat.",
        },
        {
          id: "d",
          text: "Menyertai kumpulan yang menyebarkan gosip dan maklumat tidak sahih mengenai orang lain.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Menghormati orang yang lebih tua adalah sebahagian daripada adab dan peradaban, sama ada di dunia nyata atau maya.",
        incorrect: {
          a: "Ini tidak sensitif terhadap perasaan audiens dan mangsa.",
          b: "Menegur secara terbuka dan kasar boleh menjatuhkan maruah seseorang; teguran sebaiknya dibuat secara peribadi dan berhemah.",
          d: "Menyebar gosip adalah perbuatan tidak beretika yang boleh merosakkan hubungan sosial.",
        },
      },
    },
    {
      id: "ict-q12",
      text: 'Peraturan "Ketahui di mana anda berada di dunia siber" membawa maksud:',
      options: [
        {
          id: "a",
          text: "Memahami norma, budaya, dan etika khusus sesebuah platform dalam talian sebelum berinteraksi.",
        },
        {
          id: "b",
          text: "Sentiasa mengaktifkan perkhidmatan lokasi (GPS) pada peranti anda.",
        },
        {
          id: "c",
          text: "Menyimpan kata laluan dan maklumat log masuk dengan selamat.",
        },
        {
          id: "d",
          text: "Hanya melayari laman web yang popular dan dipercayai sahaja.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Etika di platform profesional seperti LinkedIn berbeza dengan platform santai seperti Reddit. Memahami konteks ini adalah penting untuk komunikasi yang berkesan dan beradab.",
        incorrect: {
          b: "Ini berkaitan dengan privasi lokasi, bukan etika interaksi.",
          c: "Ini adalah amalan keselamatan akaun.",
          d: "Ini adalah amalan keselamatan siber, tetapi bukan maksud peraturan etika tersebut.",
        },
      },
    },
    {
      id: "ict-q13",
      text: "Apakah nilai utama yang perlu dipupuk dalam penggunaan ICT untuk mengukuhkan kesepaduan nasional?",
      options: [
        {
          id: "a",
          text: "Menyantuni dan menghormati perbezaan pandangan antara etnik dan agama.",
        },
        {
          id: "b",
          text: "Mencipta akaun tanpa nama (anonymous) untuk mengkritik dasar kerajaan.",
        },
        {
          id: "c",
          text: "Menyebarkan ucapan kebencian (hate speech) terhadap kumpulan yang tidak disukai.",
        },
        {
          id: "d",
          text: "Menganjurkan kempen buli siber secara terancang terhadap individu tertentu.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "ICT harus menjadi platform untuk membina jambatan pemahaman antara pelbagai kaum, bukan tembok perpecahan.",
        incorrect: {
          b: "Walaupun kritikan dibenarkan, penggunaan akaun palsu sering membawa kepada interaksi tidak beretika.",
          c: "Ucapan kebencian adalah jenayah dan agen pemusnah perpaduan.",
          d: "Buli siber adalah jenayah dan bertentangan dengan semua nilai peradaban.",
        },
      },
    },
    {
      id: "ict-q14",
      text: "Manakah antara berikut dianggap disiplin asas bagi pengguna ICT yang beradab?",
      options: [
        {
          id: "a",
          text: "Memberi nasihat atau teguran secara berhemah dan santun.",
        },
        {
          id: "b",
          text: "Menyimpan koleksi maklumat palsu untuk rujukan peribadi.",
        },
        {
          id: "c",
          text: 'Melakukan "spam" di ruangan komen untuk tujuan promosi.',
        },
        {
          id: "d",
          text: "Mengintip (stalking) akaun peribadi orang lain secara berlebihan.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Cara menasihati yang baik mencerminkan disiplin diri dan peradaban digital yang tinggi.",
        incorrect: {
          b: "Menyimpan maklumat palsu adalah tidak bermanfaat dan berisiko untuk disebarkan.",
          c: "Spamming adalah satu bentuk gangguan dan tidak menghormati ruang digital orang lain.",
          d: "Mengintip secara berlebihan adalah satu bentuk pencerobohan privasi.",
        },
      },
    },
    {
      id: "ict-q15",
      text: "Penggunaan ICT sebagai agen perpaduan dapat dicapai melalui:",
      options: [
        {
          id: "a",
          text: "Pembinaan platform dialog dan debat antara budaya yang diuruskan secara beretika.",
        },
        {
          id: "b",
          text: 'Pembukaan ruang "troll farm" untuk menguji ketahanan mental pengguna.',
        },
        {
          id: "c",
          text: "Pewujudan kumpulan tertutup untuk menyebarkan fitnah politik.",
        },
        {
          id: "d",
          text: "Penyebaran propaganda dan naratif palsu untuk menaikkan satu kaum sahaja.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Dialog yang sihat dan beretika dapat meningkatkan persefahaman dan merapatkan jurang antara masyarakat.",
        incorrect: {
          b: "Troll adalah unsur negatif yang merosakkan perbincangan sihat.",
          c: "Fitnah politik adalah agen pemecahbelahan masyarakat.",
          d: "Propaganda perkauman akan meruntuhkan asas perpaduan negara.",
        },
      },
    },
    {
      id: "ict-q16",
      text: "Antara cabaran utama berkaitan ICT yang dihadapi Malaysia pada masa kini ialah:",
      options: [
        {
          id: "a",
          text: "Penularan maklumat palsu (fake news) dan salah maklumat.",
        },
        { id: "b", text: "Kekurangan stesen televisyen siaran percuma." },
        {
          id: "c",
          text: "Penurunan populariti bahan bacaan bercetak seperti surat khabar.",
        },
        { id: "d", text: "Kos pemilikan telefon pintar yang masih tinggi." },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Berita palsu merupakan ancaman serius kepada kestabilan sosial, politik, dan kesihatan awam di Malaysia.",
        incorrect: {
          b: "Malaysia mempunyai pelbagai stesen TV dan platform penstriman; ini bukan isu utama.",
          c: "Ini adalah peralihan media, bukan satu isu negatif ICT secara langsung.",
          d: "Pemilikan telefon pintar di Malaysia adalah antara yang tertinggi di rantau ini; isu sekarang lebih kepada akses internet berkualiti.",
        },
      },
    },
    {
      id: "ict-q17",
      text: "Apakah yang dimaksudkan dengan teknologi “deepfake”?",
      options: [
        {
          id: "a",
          text: "Satu kaedah penyimpanan data rahsia di lapisan dalam internet (deep web).",
        },
        {
          id: "b",
          text: "Media sintetik di mana imej atau video seseorang digantikan dengan wajah orang lain menggunakan AI.",
        },
        {
          id: "c",
          text: "Maklumat yang telah dipadamkan tetapi masih boleh dijumpai dalam pangkalan data.",
        },
        {
          id: "d",
          text: "Perisian hasad (malware) yang sukar dikesan oleh antivirus.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Deepfake ialah teknologi kecerdasan buatan (AI) yang digunakan untuk memanipulasi video atau audio bagi mencipta kandungan palsu yang kelihatan sangat realistik.",
        incorrect: {
          a: "Ini lebih merujuk kepada konsep deep web, bukan deepfake.",
          c: "Ini berkaitan dengan pemulihan data (data recovery).",
          d: "Ini adalah sejenis perisian hasad, bukan teknologi manipulasi media.",
        },
      },
    },
    {
      id: "ict-q18",
      text: "Apakah fungsi utama “Social Listening Tools” dalam era digital?",
      options: [
        {
          id: "a",
          text: "Peranti yang digunakan oleh penguat kuasa untuk mendengar perbualan telefon.",
        },
        {
          id: "b",
          text: "Perisian untuk memantau, menjejak, dan menganalisis perbualan awam di media sosial mengenai sesuatu jenama atau topik.",
        },
        {
          id: "c",
          text: "Aplikasi yang membolehkan pengguna mendengar e-buku secara beramai-ramai.",
        },
        {
          id: "d",
          text: "Sistem penggera pintar yang diaktifkan menggunakan arahan suara.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Syarikat dan organisasi menggunakan alatan ini untuk memahami sentimen awam, mengurus reputasi, dan mengenal pasti trend di platform seperti Twitter, Facebook, dan Instagram.",
        incorrect: {
          a: "Ini merujuk kepada pengintipan, bukan analisis data awam.",
          c: "Ini adalah aplikasi buku audio (audiobook).",
          d: "Ini adalah teknologi rumah pintar (smart home).",
        },
      },
    },
    {
      id: "ict-q19",
      text: "Semua berikut adalah kesan negatif ICT, KECUALI:",
      options: [
        { id: "a", text: "Penipuan kewangan dalam talian (online scam)." },
        { id: "b", text: "Penyebaran ucapan kebencian (hate speech)." },
        {
          id: "c",
          text: "Pembentukan jalinan sosial yang positif antara etnik.",
        },
        { id: "d", text: "Peningkatan kes buli siber dalam kalangan remaja." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Membina jalinan sosial yang positif adalah salah satu manfaat dan kesan positif utama ICT.",
        incorrect: {
          a: "Penipuan kewangan adalah kesan negatif yang serius.",
          b: "Ucapan kebencian memecahbelahkan masyarakat.",
          d: "Buli siber memberi kesan buruk kepada kesihatan mental mangsa.",
        },
      },
    },
    {
      id: "ict-q20",
      text: "Bilakah ICT paling berkesan menjadi agen kesepaduan nasional?",
      options: [
        {
          id: "a",
          text: "Apabila ia digunakan secara strategik untuk membina jaringan komunikasi antara masyarakat majmuk.",
        },
        {
          id: "b",
          text: "Apabila ia menjadi medan untuk menyebarkan fitnah politik secara berterusan.",
        },
        {
          id: "c",
          text: "Apabila ia disalahgunakan untuk memperjuangkan kepentingan politik perkauman.",
        },
        {
          id: "d",
          text: "Apabila ia digunakan oleh masyarakat tanpa sebarang kawalan etika atau undang-undang.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "ICT yang dimanfaatkan untuk dialog, perkongsian budaya, dan projek komuniti bersama dapat mengukuhkan perpaduan.",
        incorrect: {
          b: "Fitnah akan sentiasa meruntuhkan kepercayaan dan kesepaduan.",
          c: "Politik perkauman adalah agen perpecahan, bukan perpaduan.",
          d: "Penggunaan tanpa kawalan akan membawa kepada anarki digital dan konflik.",
        },
      },
    },
    {
      id: "ict-q21",
      text: "Antara berikut, yang manakah merupakan kelebihan utama ICT?",
      options: [
        { id: "a", text: "Mempercepatkan urusan dan transaksi harian." },
        { id: "b", text: "Menjadi platform komunikasi tanpa sempadan." },
        { id: "c", text: "Membuka akses kepada sumber ilmu yang luas." },
        { id: "d", text: "Meningkatkan risiko pencerobohan data peribadi." },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Kelebihan utama ICT termasuk mempercepatkan urusan, komunikasi tanpa sempadan, dan akses ilmu. Pilihan A, B, dan C adalah betul.",
        incorrect: {
          d: "Ini adalah kelemahan, bukan kelebihan.",
        },
      },
    },
    {
      id: "ict-q22",
      text: "Pilih pernyataan yang BENAR mengenai technophobia.",
      options: [
        {
          id: "a",
          text: "Ia adalah ketakutan tidak rasional terhadap teknologi baharu.",
        },
        {
          id: "b",
          text: "Ia sering berlaku dalam kalangan individu yang kurang pendedahan atau kemahiran ICT.",
        },
        {
          id: "c",
          text: "Ia boleh menjadi penghalang kepada inovasi dan kemajuan peribadi.",
        },
        { id: "d", text: "Ia adalah nama lain bagi ketagihan media sosial." },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Pernyataan A, B, dan C adalah ciri-ciri dan kesan technophobia yang tepat.",
        incorrect: {
          d: "Ini adalah definisi yang salah.",
        },
      },
    },
    {
      id: "ict-q23",
      text: "Apakah amalan yang tergolong sebagai etika siber yang baik?",
      options: [
        { id: "a", text: "Mengelakkan penghantaran mesej spam." },
        {
          id: "b",
          text: "Menghormati privasi dan tidak berkongsi maklumat peribadi orang lain.",
        },
        {
          id: "c",
          text: "Menyebarkan maklumat hanya selepas mengesahkan kesahihannya.",
        },
        {
          id: "d",
          text: "Menggunakan bahasa yang sopan dan tidak provokatif.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Semua amalan (A, B, C, dan D) adalah tonggak utama etika siber yang baik.",
        incorrect: {},
      },
    },
    {
      id: "ict-q24",
      text: "Antara berikut, manakah merupakan isu semasa utama berkaitan ICT di Malaysia?",
      options: [
        { id: "a", text: "Berita palsu (Fake news)." },
        { id: "b", text: "Manipulasi media menggunakan deepfake." },
        { id: "c", text: "Penggunaan social listening tools oleh organisasi." },
        { id: "d", text: "Kekurangan telefon awam di kawasan bandar." },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "A, B, dan C adalah isu dan teknologi semasa yang relevan. Social listening ialah alat yang menimbulkan persoalan etika privasi.",
        incorrect: {
          d: "Kekurangan telefon awam bukan lagi isu ICT yang relevan dalam era telefon pintar.",
        },
      },
    },
    {
      id: "ict-q25",
      text: "Kesepaduan nasional melalui ICT boleh dipupuk melalui amalan berikut:",
      options: [
        { id: "a", text: "Menegur secara berhemah dan bukan menghina." },
        {
          id: "b",
          text: "Berkongsi kandungan yang meraikan kepelbagaian budaya.",
        },
        {
          id: "c",
          text: "Menonjolkan kehebatan kaum sendiri secara keterlaluan.",
        },
        { id: "d", text: "Menghormati perbezaan pendapat dalam perbincangan." },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "A, B, dan D adalah amalan positif yang membina jambatan persefahaman dan memupuk perpaduan.",
        incorrect: {
          c: "Menonjolkan kehebatan kaum sendiri secara keterlaluan boleh membawa kepada etnosentrisme dan merenggangkan hubungan antara kaum.",
        },
      },
    },
    {
      id: "ict-q26",
      text: "Mengapakah ruang siber sering diibaratkan sebagai ‘digital jungle’ (hutan digital)?",
      options: [
        { id: "a", text: "Kerana ia dipenuhi dengan imej flora dan fauna." },
        {
          id: "b",
          text: "Kerana tiada satu institusi atau badan berkuasa tunggal yang mengawalnya secara global.",
        },
        {
          id: "c",
          text: "Kerana semua pengguna diwajibkan berada dalam talian selama 24 jam.",
        },
        {
          id: "d",
          text: "Kerana ia hanya boleh diakses di kawasan pedalaman.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Seperti hutan, ruang siber adalah luas, tidak berpusat, dan kurang dikawal selia secara universal, menjadikannya tempat di mana sesiapa sahaja boleh menjadi 'pemangsa' atau 'mangsa'.",
        incorrect: {
          a: "Ini adalah tafsiran literal yang salah.",
          c: "Ini adalah kesan sampingan budaya 'sentiasa terhubung', bukan sebab ia dipanggil 'hutan'.",
          d: "Akses internet lebih meluas di bandar, bukan pedalaman.",
        },
      },
    },
    {
      id: "ict-q27",
      text: "Revolusi Industri 4.0 (IR 4.0) menimbulkan persoalan tentang:",
      options: [
        {
          id: "a",
          text: "Kepentingan memulihara sumber ekonomi tradisional seperti pertanian.",
        },
        {
          id: "b",
          text: "Bagaimana ia akan membentuk warna kehidupan baharu masyarakat dari segi sosial dan ekonomi.",
        },
        {
          id: "c",
          text: "Kemungkinan teknologi akan mencapai tahap tepu dan tidak lagi berkembang.",
        },
        {
          id: "d",
          text: "Cara untuk menghentikan penggunaan Internet secara menyeluruh.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "IR 4.0, dengan gabungan AI, IoT, dan automasi, dijangka akan mengubah cara manusia bekerja, hidup, dan berinteraksi secara fundamental.",
        incorrect: {
          a: "Walaupun penting, ini bukan persoalan utama yang dicetuskan oleh IR 4.0.",
          c: "IR 4.0 adalah bukti teknologi berkembang pesat, bukan sebaliknya.",
          d: "Ini adalah pandangan yang tidak realistik dan bertentangan dengan arus kemajuan.",
        },
      },
    },
    {
      id: "ict-q28",
      text: "Antara berikut, manakah contoh aplikasi Internet of Things (IoT)?",
      options: [
        {
          id: "a",
          text: "Jam tangan pintar yang memantau degupan jantung dan menghantar data ke telefon.",
        },
        {
          id: "b",
          text: "Mesin taip elektrik yang boleh memadamkan kesilapan taip.",
        },
        {
          id: "c",
          text: "Menonton siaran langsung televisyen melalui laman web.",
        },
        {
          id: "d",
          text: "Berbual dengan rakan melalui aplikasi permesejan seperti WhatsApp.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "IoT merujuk kepada rangkaian peranti fizikal yang saling berhubung dan bertukar data melalui internet. Jam tangan pintar adalah contoh klasik.",
        incorrect: {
          b: "Ini adalah teknologi lama, bukan sebahagian daripada IoT.",
          c: "Ini adalah penstriman video (video streaming).",
          d: "Ini adalah komunikasi dalam talian, bukan IoT.",
        },
      },
    },
    {
      id: "ict-q29",
      text: "ICT sebagai “kawan” merujuk kepada peranannya dalam:",
      options: [
        {
          id: "a",
          text: "Membantu memudahkan komunikasi dan urusan harian manusia.",
        },
        { id: "b", text: "Menyebabkan ketagihan dan pengasingan sosial." },
        { id: "c", text: "Meningkatkan penyebaran berita palsu dan fitnah." },
        { id: "d", text: "Menjadi platform untuk melakukan buli siber." },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          'Apabila ICT membantu, memudahkan, dan menghubungkan, ia berfungsi seperti "kawan" yang baik.',
        incorrect: {
          b: 'Ini adalah sisi gelap ICT, di mana ia menjadi "musuh".',
          c: "Ini adalah penyalahgunaan ICT.",
          d: 'Ini adalah salah guna ICT yang menjadikannya "musuh".',
        },
      },
    },
    {
      id: "ict-q30",
      text: "Antara berikut, manakah contoh salah guna ICT untuk tujuan jenayah?",
      options: [
        { id: "a", text: "Menjalankan perniagaan e-dagang yang sah." },
        {
          id: "b",
          text: "Melakukan serangan phishing untuk mencuri maklumat perbankan.",
        },
        { id: "c", text: "Mengikuti kelas pembelajaran secara dalam talian." },
        {
          id: "d",
          text: "Membina jaringan profesional melalui platform LinkedIn.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Phishing ialah satu bentuk penipuan siber di mana penjenayah menyamar sebagai entiti yang sah untuk memperdaya mangsa supaya mendedahkan maklumat sensitif.",
        incorrect: {
          a: "Ini adalah penggunaan ICT yang sah dan positif.",
          c: "Ini adalah manfaat ICT dalam pendidikan.",
          d: "Ini adalah penggunaan ICT yang positif untuk kemajuan kerjaya.",
        },
      },
    },
    {
      id: "ict-q31",
      text: "Penggunaan ICT tanpa kawalan etika yang jelas boleh mengakibatkan:",
      options: [
        {
          id: "a",
          text: "Peningkatan tahap perpaduan dalam kalangan masyarakat.",
        },
        {
          id: "b",
          text: "Normalisasi penyebaran maklumat palsu dan ucapan kebencian.",
        },
        {
          id: "c",
          text: "Pembudayaan penggunaan bahasa yang sopan dan santun.",
        },
        {
          id: "d",
          text: "Perkongsian maklumat yang bermanfaat secara meluas.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Tanpa etika, tiada sempadan antara benar dan salah, menyebabkan perkara negatif seperti berita palsu menjadi lumrah.",
        incorrect: {
          a: "Tanpa kawalan, ICT lebih cenderung memecahbelahkan.",
          c: "Tanpa etika, bahasa kasar dan kesat lebih mudah menular.",
          d: "Maklumat yang tersebar mungkin lebih banyak yang berbahaya berbanding yang bermanfaat.",
        },
      },
    },
    {
      id: "ict-q32",
      text: "Bagaimanakah ICT dapat membantu dalam tadbir urus negara?",
      options: [
        {
          id: "a",
          text: "Mengawal keselamatan sempadan melalui sistem dron dan penderia pintar.",
        },
        {
          id: "b",
          text: "Menghapuskan sepenuhnya semua bentuk jenayah konvensional.",
        },
        {
          id: "c",
          text: "Menggantikan peranan hakim di mahkamah dengan kecerdasan buatan (AI).",
        },
        {
          id: "d",
          text: "Mengurangkan keperluan kepada undang-undang sedia ada.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "ICT, melalui teknologi seperti dron, CCTV pintar, dan analisis data raya, memainkan peranan penting dalam keselamatan dan penguatkuasaan.",
        incorrect: {
          b: "ICT boleh membantu mengurangkan jenayah, tetapi tidak boleh menghapuskannya sepenuhnya.",
          c: "Walaupun AI boleh membantu, peranan manusia seperti hakim yang melibatkan pertimbangan moral masih tidak boleh diganti.",
          d: "Perkembangan ICT justru memerlukan undang-undang baharu (seperti akta siber) untuk mengawal selianya.",
        },
      },
    },
    {
      id: "ict-q33",
      text: "Etika digital secara ringkasnya boleh dirumuskan sebagai:",
      options: [
        {
          id: "a",
          text: "Kebebasan tanpa had untuk melakukan apa sahaja di dunia siber.",
        },
        {
          id: "b",
          text: "Satu set piawai kelakuan yang diterima umum untuk interaksi dalam dunia maya.",
        },
        {
          id: "c",
          text: "Peraturan yang hanya terpakai kepada golongan pengaturcara dan pembangun perisian.",
        },
        {
          id: "d",
          text: "Larangan sepenuhnya ke atas penggunaan media sosial oleh golongan muda.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Rumusan ini paling tepat, di mana etika digital ialah panduan adab dan kelakuan di ruang siber.",
        incorrect: {
          a: "Tiada kebebasan mutlak; ia sentiasa diimbangi dengan tanggungjawab.",
          c: "Etika digital terpakai kepada semua pengguna, bukan hanya golongan teknikal.",
          d: "Etika digital bukan tentang larangan, tetapi tentang penggunaan yang berhemah.",
        },
      },
    },
    {
      id: "ict-q34",
      text: "Antara berikut, manakah peluang perniagaan baharu yang diwujudkan oleh ICT?",
      options: [
        {
          id: "a",
          text: "Perkhidmatan penghantaran makanan (food delivery) berasaskan aplikasi.",
        },
        { id: "b", text: "Perniagaan pasar malam secara tradisional." },
        {
          id: "c",
          text: "Sistem jual beli menggunakan kaedah pertukaran barang (barter).",
        },
        {
          id: "d",
          text: "Aktiviti pertanian sara diri untuk kegunaan keluarga.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Platform seperti GrabFood dan Foodpanda adalah model perniagaan yang lahir sepenuhnya daripada ekosistem ICT (aplikasi, GPS, pembayaran digital).",
        incorrect: {
          b: "Pasar malam adalah perniagaan fizikal tradisional.",
          c: "Sistem barter adalah kaedah ekonomi pra-moden.",
          d: "Ini adalah aktiviti ekonomi sara diri, bukan perniagaan berasaskan ICT.",
        },
      },
    },
    {
      id: "ict-q35",
      text: "Apakah kesan psikologi utama buli siber terhadap mangsa?",
      options: [
        { id: "a", text: "Mengeratkan hubungan persahabatan dengan pembuli." },
        {
          id: "b",
          text: "Meningkatkan tahap technophobia atau ketakutan terhadap interaksi dalam talian.",
        },
        { id: "c", text: "Mempercepatkan penyelesaian tugasan kerja harian." },
        { id: "d", text: "Memupuk sikap menyantuni golongan yang lebih muda." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Mangsa buli siber sering mengalami trauma yang menyebabkan mereka takut untuk menggunakan media sosial atau platform dalam talian lain.",
        incorrect: {
          a: "Buli merosakkan hubungan, bukan mengeratkannya.",
          c: "Buli siber mengganggu fokus dan produktiviti, bukan sebaliknya.",
          d: "Buli siber adalah perbuatan yang bertentangan dengan sikap santun.",
        },
      },
    },
    {
      id: "ict-q36",
      text: "Manakah antara situasi berikut paling tepat menggambarkan technostress?",
      options: [
        {
          id: "a",
          text: "Berasa tertekan dan cemas kerana dijangka perlu mempelajari tiga perisian baharu di tempat kerja dalam masa sebulan.",
        },
        {
          id: "b",
          text: "Berasa gembira dan teruja selepas berjaya membeli model telefon pintar terkini.",
        },
        {
          id: "c",
          text: "Berasa seronok kerana dapat mengikuti kursus kemahiran teknologi baharu.",
        },
        {
          id: "d",
          text: "Berasa puas hati kerana dapat menyelesaikan tugasan dengan cekap menggunakan aplikasi moden.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Perasaan tertekan, cemas, dan terbeban akibat tuntutan untuk menguasai teknologi baharu dengan pantas adalah intipati technostress.",
        incorrect: {
          b: "Ini adalah perasaan positif yang dikaitkan dengan konsumerisme.",
          c: "Ini adalah sikap proaktif dan positif terhadap pembelajaran.",
          d: "Ini adalah tanda penguasaan teknologi, bukan stres akibatnya.",
        },
      },
    },
    {
      id: "ict-q37",
      text: "Apakah peranan utama ICT dalam pembangunan sesebuah negara?",
      options: [
        {
          id: "a",
          text: "Sebagai pemangkin dan alat untuk tadbir urus moden, ekonomi digital, dan pembangunan sosial.",
        },
        {
          id: "b",
          text: "Sebagai alat untuk menggantikan sepenuhnya budaya dan warisan tradisional.",
        },
        {
          id: "c",
          text: "Sebagai cara untuk menghapuskan semua bentuk kerja manual dan fizikal.",
        },
        {
          id: "d",
          text: "Sebagai faktor yang menyumbang kepada kemalasan dalam kalangan masyarakat.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "ICT adalah enjin penting yang memacu hampir semua sektor pembangunan negara pada hari ini.",
        incorrect: {
          b: "ICT sepatutnya digunakan untuk memelihara dan mempromosikan budaya, bukan menghapuskannya.",
          c: "Banyak kerja manual masih relevan dan tidak boleh digantikan oleh teknologi.",
          d: "Walaupun boleh disalahgunakan, peranan utama dan tujuan ICT adalah untuk meningkatkan produktiviti, bukan menyebabkan kemalasan.",
        },
      },
    },
    {
      id: "ict-q38",
      text: "Apakah impak terbesar IR 4.0 terhadap pasaran pekerjaan?",
      options: [
        { id: "a", text: "Semua pekerjaan akan digantikan oleh robot." },
        {
          id: "b",
          text: "Keperluan terhadap pekerjaan berkemahiran rendah akan meningkat.",
        },
        {
          id: "c",
          text: "Wujudnya pekerjaan baharu dan kepupusan beberapa pekerjaan lama.",
        },
        { id: "d", text: "Gaji pekerja akan menurun secara mendadak." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah impak yang paling realistik. Pekerjaan seperti penganalisis data dan pakar AI akan meningkat, manakala pekerjaan seperti operator data manual mungkin berkurangan.",
        incorrect: {
          a: "Ini adalah pandangan yang keterlaluan. Banyak pekerjaan, terutamanya yang memerlukan kreativiti dan empati, tidak akan diganti.",
          b: "Sebaliknya, pekerjaan berkemahiran rendah yang berulang-ulang adalah yang paling berisiko untuk diautomasikan.",
          d: "Tidak semestinya. Gaji untuk pekerjaan berkemahiran tinggi yang relevan dengan IR 4.0 dijangka akan meningkat.",
        },
      },
    },
    {
      id: "ict-q39",
      text: "Mengapakah penting untuk mengesahkan maklumat sebelum berkongsi di media sosial?",
      options: [
        {
          id: "a",
          text: "Untuk memastikan hanya berita yang sensasi sahaja disebarkan.",
        },
        {
          id: "b",
          text: "Untuk mengelakkan diri daripada menjadi agen penyebaran fitnah atau berita palsu.",
        },
        {
          id: "c",
          text: "Untuk meningkatkan jumlah pengikut di akaun media sosial.",
        },
        {
          id: "d",
          text: "Untuk menunjukkan bahawa kita lebih berpengetahuan daripada orang lain.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah tanggungjawab etika setiap pengguna media sosial untuk memecahkan rantaian penyebaran maklumat palsu.",
        incorrect: {
          a: "Mengejar sensasi sering membawa kepada penyebaran maklumat yang tidak sahih.",
          c: "Walaupun perkongsian maklumat yang sahih boleh meningkatkan kredibiliti, itu bukan tujuan etika utamanya.",
          d: "Ini lebih kepada motif ego, bukan tanggungjawab sosial.",
        },
      },
    },
    {
      id: "ict-q40",
      text: "Apakah kesimpulan paling tepat mengenai peranan ICT dalam masyarakat moden?",
      options: [
        {
          id: "a",
          text: "ICT adalah satu ancaman yang perlu dielakkan sepenuhnya oleh masyarakat.",
        },
        {
          id: "b",
          text: "ICT hanyalah satu alat hiburan dan tidak mempunyai impak besar kepada pembangunan negara.",
        },
        {
          id: "c",
          text: "ICT perlu dipelajari, dikuasai, dan dimanfaatkan secara bijaksana dan beretika untuk kebaikan bersama.",
        },
        {
          id: "d",
          text: "ICT perlu dihadkan penggunaannya kepada golongan profesional sahaja.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Rumusan ini merangkumi semua aspek penting: penguasaan kemahiran, pemanfaatan untuk kebaikan, serta kawalan diri melalui etika.",
        incorrect: {
          a: "Mengelakkan ICT adalah mustahil dan merugikan dalam dunia hari ini.",
          b: "ICT mempunyai impak yang sangat besar dalam semua aspek kehidupan, jauh lebih daripada sekadar hiburan.",
          d: "ICT adalah untuk semua; menghadkannya akan mewujudkan jurang digital yang lebih besar.",
        },
      },
    },
  ],
};
