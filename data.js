/* Data dummy terpusat — Wijaya & Rekan Law Firm */
window.FIRM_DATA = {
  firm: {
    name: "Wijaya & Rekan",
    nameFull: "Kantor Hukum Wijaya & Rekan",
    tagline: { id: "Pendampingan hukum yang objektif, transparan, dan terpercaya sejak 2009.", en: "Objective, transparent, and trusted legal counsel since 2009." },
    phone: "+62 21 5080 2288",
    wa: "6281234567890",
    waDisplay: "+62 812-3456-7890",
    email: "sekretariat@wijayarekan.id",
    mediaEmail: "media@wijayarekan.id",
    address: "Menara Sudirman Lt. 18, Jl. Jenderal Sudirman Kav. 52–53, Jakarta Selatan 12190",
    hours: "Senin–Jumat 09.00–18.00 WIB",
    peradi: "Anggota PERADI No. 08.0942/DPC-Jaksel/2009"
  },
  practices: [
    {
      slug: "hukum-korporasi", icon: "building-2",
      name: { id: "Hukum Korporasi", en: "Corporate Law" },
      short: { id: "Pendirian & tata kelola perusahaan, kontrak komersial, M&A, dan kepatuhan.", en: "Company formation, governance, commercial contracts, M&A, and compliance." },
      problem: { id: "Sengketa kontrak, restrukturisasi, kepatuhan OSS, dan tata kelola perusahaan yang belum rapi.", en: "Contract disputes, restructuring, OSS compliance, and weak corporate governance." },
      scope: ["Pendirian & perubahan AD/ART, persetujuan BKPM/OSS", "Penyusunan & negosiasi kontrak komersial (NDA, MoU, vendor, distribusi)", "Restrukturisasi, akuisisi, dan uji tuntas (due diligence)", "Kajian kepatuhan, GCG, dan kebijakan internal perusahaan"],
      workflow: ["Diagnosa & Conflict Check", "Kajian Dokumen & Risiko", "Penyusunan / Negosiasi", "Pendampingan Penandatanganan"],
      illustration: { title: "Ilustrasi Kasus Umum (Anonim)", text: "Perusahaan distribusi di Jabodetabek bersengketa atas klausul denda keterlambatan dalam kontrak vendor. Setelah kajian ulang klausul dan mediasi, kedua belah pihak mencapai addendum yang menurunkan denda 60% tanpa litigasi." },
      faq: [
        { q: "Dokumen apa yang perlu disiapkan sebelum konsultasi awal?", a: "Siapkan AD/ART terakhir, kontrak terkait, dan kronologi singkat. Jangan mengunggah dokumen rahasia sebelum conflict check selesai." },
        { q: "Berapa lama proses due diligence M&A?", a: "Umumnya 2–4 minggu tergantung kelengkapan dokumen. Kami berikan estimasi tertulis setelah intake." },
        { q: "Apakah Anda menangani perusahaan asing (PMA)?", a: "Ya, kami mendampingi PMA untuk OSS, KBLI, dan kepatuhan ketenagakerjaan." },
        { q: "Bagaimana struktur biaya?", a: "Transparan sejak awal: retainer bulanan atau proyek tetap dengan engagement letter tertulis." },
        { q: "Bisakah konsultasi dilakukan secara video call?", a: "Bisa. Pilih metode Google Meet atau telepon saat menjadwalkan." }
      ],
      lawyerSlugs: ["hendra-wijaya", "ratna-puspita"]
    },
    {
      slug: "litigasi-sengketa", icon: "scale",
      name: { id: "Litigasi & Sengketa", en: "Litigation & Dispute Resolution" },
      short: { id: "Gugatan perdata, pidana, arbitrase, dan mediasi di pengadilan.", en: "Civil & criminal claims, arbitration, and court mediation." },
      problem: { id: "Sengketa perdata, wanprestasi, perbuatan melawan hukum, dan sengketa pidana pengaduan.", en: "Civil disputes, breach of contract, torts, and criminal complaints." },
      scope: ["Gugatan perdata & wanprestasi di Pengadilan Negeri", "Pendampingan perkara pidana (penyidikan hingga putusan)", "Arbitrase (BANI) dan mediasi non-litigasi", "Somasi, negosiasi penyelesaian, dan eksekusi putusan"],
      workflow: ["Evaluasi Bukti & Kekuatan Perkara", "Somasi / Mediasi Terlebih Dahulu", "Gugatan & Pembuktian", "Putusan, PK, dan Eksekusi"],
      illustration: { title: "Ilustrasi Kasus Umum (Anonim)", text: "Sengketa utang-piutang usaha senilai ratusan juta rupiah diselesaikan melalui mediasi pengadilan dalam 3 sidang, tanpa perlu pembuktian panjang — menghemat waktu dan biaya klien." },
      faq: [
        { q: "Kapan sengketa harus lewat mediasi dulu?", a: "Sejak PERMA 1/2016, mediasi adalah tahap wajib sebelum pembuktian di Pengadilan Negeri." },
        { q: "Apakah ada janji kemenangan perkara?", a: "Tidak. Kami memberikan evaluasi objektif atas kekuatan perkara dan tidak memberikan janji hasil, sesuai Kode Etik PERADI." },
        { q: "Dokumen apa yang penting untuk gugatan?", a: "Perjanjian, bukti pembayaran/serah terima, korespondensi, dan identitas para pihak." },
        { q: "Berapa lama proses litigasi?", a: "Bervariasi tergantung pengadilan dan kompleksitas. Kami sampaikan estimasi dan laporan berkala." },
        { q: "Apakah bisa konsultasi awal tanpa komitmen?", a: "Ya, konsultasi awal 30–45 menit untuk evaluasi perkara." }
      ],
      lawyerSlugs: ["hendra-wijaya", "dimas-pratama"]
    },
    {
      slug: "hukum-ketenagakerjaan", icon: "briefcase",
      name: { id: "Hukum Ketenagakerjaan", en: "Employment Law" },
      short: { id: "Hubungan industrial, PHK, perjanjian kerja, dan kepatuhan BPJS.", en: "Industrial relations, termination, employment agreements, and BPJS compliance." },
      problem: { id: "PHK, pesangon, sengketa upah, dan kewajiban kepatuhan ketenagakerjaan perusahaan.", en: "Layoffs, severance, wage disputes, and employment compliance obligations." },
      scope: ["Perjanjian kerja (PKWT/PKWTT) dan peraturan perusahaan", "PHK, pesangon, dan sengketa Pengadilan Hubungan Industrial", "Auditing kepatuhan BPJS, upah minimum, dan K3", "Perundingan bipartit dan mediasi hubungan industrial"],
      workflow: ["Kajian Status & Dokumen", "Perundingan Bipartit", "Mediasi PHI", "Putusan & Eksekusi"],
      illustration: { title: "Ilustrasi Kasus Umum (Anonim)", text: "Perusahaan rintisan menata ulang 40 perjanjian kerja agar selaras UU Cipta Kerja pasca-perubahan, menghindari denda administratif dan sengketa pesangon di masa depan." },
      faq: [
        { q: "Apa beda PKWT dan PKWTT?", a: "PKWT untuk pekerjaan tertentu/berjangka waktu, PKWTT untuk pekerjaan tetap. Salah pilih berisiko menjadi PKWTT demi hukum." },
        { q: "Bagaimana perhitungan pesangon saat ini?", a: "Mengacu pada PP 35/2021 dengan komponen Uang Pesangon, Uang Penghargaan Masa Kerja, dan Uang Penggantian Hak." },
        { q: "Apakah PHK bisa sepihak?", a: "PHK wajib melalui perundingan dan penetapan lembaga (PHI/Dinas). PHK sepihak tidak sah." },
        { q: "Apakah Anda membantu audit kepatuhan?", a: "Ya, kami melakukan audit dokumen ketenagakerjaan dan rekomendasi perbaikannya." },
        { q: "Berapa lama sengketa PHI?", a: "Tingkat pertama umumnya 2–4 bulan, dapat diperpanjang pada tahap kasasi." }
      ],
      lawyerSlugs: ["ratna-puspita", "sinta-maharani"]
    },
    {
      slug: "hukum-keluarga-waris", icon: "heart-handshake",
      name: { id: "Hukum Keluarga & Waris", en: "Family & Inheritance Law" },
      short: { id: "Perceraian, hak asuh anak, harta bersama, dan penetapan ahli waris.", en: "Divorce, child custody, marital property, and inheritance determination." },
      problem: { id: "Perceraian, sengketa hak asuh, pembagian harta bersama, dan penentuan ahli waris.", en: "Divorce, child custody disputes, joint property division, and heir determination." },
      scope: ["Gugatan cerai & permohonan cerai (PA/PN)", "Hak asuh anak, nafkah, dan perlindungan anak", "Harta bersama, perjanjian perkawinan, dan hibah", "Wasiat, penetapan ahli waris, dan surat keterangan waris"],
      workflow: ["Konsultasi Privat & Conflict Check", "Mediasi & Upaya Damai", "Gugatan di Pengadilan", "Pembagian & Pelaksanaan Putusan"],
      illustration: { title: "Ilustrasi Kasus Umum (Anonim)", text: "Keluarga menyelesaikan pembagian warisan rumah dan tanah melalui musyawarah pendampingan notaris, tanpa sengketa pengadilan — seluruh ahli waris mendapat bagian tertulis yang sah." },
      faq: [
        { q: "Apakah mediasi wajib dalam perceraian?", a: "Ya, mediasi wajib diupayakan terlebih dahulu sebelum putusan." },
        { q: "Siapa yang berhak atas harta bersama?", a: "Pada umumnya harta yang diperoleh selama perkawinan dibagi 50:50, kecuali harta bawaan/hibah/warisan pribadi." },
        { q: "Dokumen apa untuk penetapan ahli waris?", a: "KK, KTP, akta kematian, akta kelahiran, akta perkawinan, dan keterangan ahli waris dari RT/RW/kelurahan." },
        { q: "Apakah proses ini bersifat rahasia?", a: "Ya. Perkara keluarga bersifat tertutup dan seluruh dokumen dijaga kerahasiaannya." },
        { q: "Berapa lama prosesnya?", a: "Tergantung mediasi dan jadwal sidang, umumnya 2–5 bulan." }
      ],
      lawyerSlugs: ["sinta-maharani", "ratna-puspita"]
    },
    {
      slug: "pertanahan-properti", icon: "landmark",
      name: { id: "Pertanahan & Properti", en: "Land & Property Law" },
      short: { id: "Sengketa tanah, peralihan hak, sertifikat, dan sengketa developer.", en: "Land disputes, title transfer, certificates, and developer disputes." },
      problem: { id: "Sengketa kepemilikan tanah, sertifikat ganda, peralihan hak, dan pengembang properti.", en: "Ownership disputes, overlapping certificates, title transfer, and developer claims." },
      scope: ["Sengketa kepemilikan & penguasaan tanah", "Peralihan hak (AJB, balik nama, wakaf, hibah)", "Pengurusan sertifikat & pengukuran ulang (BPN)", "Sengketa developer, wanprestasi PPJB, dan ganti rugi"],
      workflow: ["Verifikasi Sertifikat & Riwayat Tanah", "Klarifikasi BPN & Mediasi", "Gugatan / Penyelesaian Administratif", "Balik Nama & Serah Terima"],
      illustration: { title: "Ilustrasi Kasus Umum (Anonim)", text: "Pembeli apartemen menghadapi keterlambatan serah terima 18 bulan. Pendampingan somasi dan negosiasi menghasilkan serah terima + kompensasi sewa tanpa litigasi penuh." },
      faq: [
        { q: "Apa beda sertifikat SHM dan HGB?", a: "SHM hak milik penuh (perorangan), HGB hak guna bangunan di atas tanah pihak lain, umumnya untuk badan hukum." },
        { q: "Bagaimana jika sertifikat tumpang tindih?", a: "Dilaporkan ke BPN untuk mediasi administrasi, atau gugatan ke Pengadilan Negeri bila berlanjut." },
        { q: "Dokumen apa untuk balik nama?", a: "Sertifikat asli, AJB/PPJB, KTP & KK para pihak, SPPT PBB, dan surat keterangan dari kelurahan." },
        { q: "Apakah bisa mengurus pengukuran ulang?", a: "Ya, kami dampingi proses pengukuran dan pemetaan ulang di BPN." },
        { q: "Berapa lama balik nama?", a: "Umumnya 1–3 bulan setelah AJB, tergantung kelengkapan berkas di BPN." }
      ],
      lawyerSlugs: ["dimas-pratama", "hendra-wijaya"]
    }
  ],
  lawyers: [
    { slug: "hendra-wijaya", name: "Hendra Wijaya, S.H., LL.M.", role: "Managing Partner", peradi: "08.0942/DPC-Jaksel/2009", languages: "Indonesia, Inggris", education: ["S.H. Universitas Indonesia (2005)", "LL.M. Erasmus University Rotterdam (2009)"], practices: ["hukum-korporasi", "litigasi-sengketa", "pertanahan-properti"], bio: "Berpengalaman 17 tahun menangani litigasi korporasi dan sengketa properti bernilai besar. Memimpin tim litigasi firma sejak 2014." },
    { slug: "ratna-puspita", name: "Ratna Puspita, S.H., M.H.", role: "Partner", peradi: "12.3310/DPC-Jaksel/2012", languages: "Indonesia, Inggris", education: ["S.H. Universitas Gadjah Mada (2009)", "M.H. Universitas Indonesia (2013)"], practices: ["hukum-korporasi", "hukum-ketenagakerjaan", "hukum-keluarga-waris"], bio: "Spesialis hukum korporasi dan ketenagakerjaan. Aktif menyusun pedoman kepatuhan untuk klien perusahaan nasional." },
    { slug: "dimas-pratama", name: "Dimas Pratama, S.H.", role: "Partner", peradi: "15.7781/DPC-Jaksel/2015", languages: "Indonesia, Inggris", education: ["S.H. Universitas Padjadjaran (2012)"], practices: ["litigasi-sengketa", "pertanahan-properti"], bio: "Fokus pada litigasi sengketa dan pertanahan. Terdaftar sebagai mediator bersertifikat dan pernah menjadi kuasa dalam sengketa komersial lintas provinsi." },
    { slug: "sinta-maharani", name: "Sinta Maharani, S.H., M.Kn.", role: "Associate Senior", peradi: "18.5521/DPC-Jaksel/2018", languages: "Indonesia", education: ["S.H. Universitas Indonesia (2015)", "M.Kn. Universitas Indonesia (2019)"], practices: ["hukum-keluarga-waris", "hukum-ketenagakerjaan"], bio: "Menangani perkara keluarga, waris, dan hubungan industrial dengan pendekatan mediasi yang mengutamakan penyelesaian damai." },
    { slug: "bima-aditya", name: "Bima Aditya, S.H.", role: "Associate", peradi: "20.4419/DPC-Jaksel/2020", languages: "Indonesia, Inggris", education: ["S.H. Universitas Brawijaya (2017)"], practices: ["hukum-korporasi"], bio: "Associate bidang korporasi dengan fokus kontrak komersial dan legal research untuk transaksi M&A." },
    { slug: "dewi-anggraini", name: "Dewi Anggraini, S.H.", role: "Associate", peradi: "19.9032/DPC-Jaksel/2019", languages: "Indonesia", education: ["S.H. Universitas Airlangga (2016)"], practices: ["pertanahan-properti"], bio: "Menangani sengketa tanah dan peralihan hak, termasuk pendampingan proses di BPN dan Pengadilan Negeri." },
    { slug: "farhan-ramadhan", name: "Farhan Ramadhan, S.H.", role: "Associate", peradi: "21.2210/DPC-Jaksel/2021", languages: "Indonesia, Inggris", education: ["S.H. Universitas Indonesia (2018)"], practices: ["hukum-ketenagakerjaan", "litigasi-sengketa"], bio: "Associate litigasi dan ketenagakerjaan, mendukung persidangan di PHI dan Pengadilan Negeri." },
    { slug: "ayu-lestari", name: "Ayu Lestari, S.H.", role: "Associate", peradi: "22.8830/DPC-Jaksel/2022", languages: "Indonesia", education: ["S.H. Universitas Diponegoro (2019)"], practices: ["hukum-keluarga-waris"], bio: "Associate hukum keluarga dengan pendampingan mediasi dan penyusunan perjanjian perkawinan." }
  ],
  articles: [
    {
      slug: "perjanjian-perkawinan", title: "Perjanjian Perkawinan: Kapan Dibutuhkan dan Cara Membuatnya", category: "hukum-keluarga-waris", date: "2026-10-28", author: "sinta-maharani", reviewer: "ratna-puspita", read: "6 menit",
      excerpt: "Panduan praktis kapan perjanjian perkawinan perlu dibuat, isi pokoknya, dan proses pembuatan di notaris.",
      content: ["<p>Perjanjian perkawinan (perjanjian pisah harta) adalah kesepakatan tertulis antara calon suami istri yang mengatur pemisahan harta sejak perkawinan. Dokumen ini dibuat di hadapan notaris sebelum atau selama perkawinan berlangsung.</p>", "<p>Isi pokoknya meliputi: pemisahan harta bawaan dan harta bersama, pengelolaan aset dan utang, serta pembagian saat terjadi perceraian atau wafat. Tanpa perjanjian, seluruh harta yang diperoleh selama perkawinan pada prinsipnya menjadi harta bersama.</p>", "<p>Proses pembuatannya relatif singkat: konsultasi kebutuhan, penyusunan draf, penandatanganan di notaris, dan pencatatan. Kami rekomendasikan menyusunnya sebelum pendaftaran perkawinan agar tidak berisiko dianggap merugikan salah satu pihak.</p>", "<p>Perjanjian yang baik bersifat seimbang, jelas, dan dapat dieksekusi. Hindari klausul yang melanggar hukum atau bertentangan dengan kesusilaan.</p>"]
    },
    {
      slug: "phk-dan-pesangon-2026", title: "PHK 2026: Hak Atas Pesangon Menurut PP 35/2021", category: "hukum-ketenagakerjaan", date: "2026-10-15", author: "farhan-ramadhan", reviewer: "ratna-puspita", read: "5 menit",
      excerpt: "Pahami komposisi pesangon, alasan PHK yang sah, dan jalur perundingan sebelum ke Pengadilan Hubungan Industrial.",
      content: ["<p>Pemutusan Hubungan Kerja (PHK) hanya sah jika melalui perundingan dan penetapan lembaga bila tidak mencapai kesepakatan. PHK sepihak tanpa proses dapat dinyatakan batal.</p>", "<p>Komposisi pesangon menurut PP 35/2021 terdiri dari Uang Pesangon (UP), Uang Penghargaan Masa Kerja (UPMK), dan Uang Penggantian Hak (UPH) yang meliputi cuti yang belum diambil, biaya pulang, dan kompensasi lainnya.</p>", "<p>Besaran UP tergantung masa kerja dan alasan PHK: efisiensi, pelanggaran berat, atau pengunduran diri masing-masing diatur berbeda. Simpan bukti perjanjian kerja, slip gaji, dan surat pemberitahuan PHK.</p>", "<p>Jika perundingan bipartit gagal, sengketa dilanjutkan ke mediasi Dinas, lalu ke Pengadilan Hubungan Industrial. Batas waktu gugatan adalah 1 tahun sejak PHK.</p>"]
    },
    {
      slug: "sengketa-tanah-cara-lapor", title: "Sengketa Tanah: Cara Lapor Penyerobotan dan Bukti yang Dibutuhkan", category: "pertanahan-properti", date: "2026-09-30", author: "dewi-anggraini", reviewer: "dimas-pratama", read: "7 menit",
      excerpt: "Langkah praktis melaporkan penyerobotan tanah: verifikasi sertifikat, somasi, laporan kepolisian, dan gugatan perdata.",
      content: ["<p>Penyerobotan tanah adalah penguasaan tanah tanpa hak oleh pihak lain. Langkah pertama adalah verifikasi sertifikat dan riwayat tanah di BPN untuk memastikan batas dan bukti kepemilikan Anda.</p>", "<p>Selanjutnya kirim somasi tertulis dengan batas waktu penyelesaian. Jika tidak diindahkan, Anda dapat melaporkan ke kepolisian untuk dugaan tindak pidana dan/atau mengajukan gugatan perbuatan melawan hukum ke Pengadilan Negeri.</p>", "<p>Bukti yang dibutuhkan: sertifikat asli, SPPT PBB, bukti penguasaan fisik (foto, patok batas), keterangan saksi, dan riwayat peralihan hak bila ada.</p>", "<p>Penyelesaian damai melalui mediasi seringkali lebih cepat dan lebih murah. Pertimbangkan pendampingan advokat untuk menyusun somasi dan strategi pembuktian.</p>"]
    },
    {
      slug: "checklist-kontrak-bisnis", title: "Checklist Klausul Wajib Kontrak Bisnis agar Tidak Merugikan", category: "hukum-korporasi", date: "2026-09-12", author: "bima-aditya", reviewer: "hendra-wijaya", read: "8 menit",
      excerpt: "11 klausul yang wajib ada dalam kontrak bisnis: ruang lingkup, pembayaran, denda, wanprestasi, hingga sengketa.",
      content: ["<p>Kontrak yang baik melindungi kedua belah pihak. Berikut klausul yang wajib ada: para pihak dan definisi, ruang lingkup pekerjaan, harga dan skema pembayaran, jangka waktu, serta penyerahan.</p>", "<p>Selanjutnya: denda dan wanprestasi, kerahasiaan (NDA), keadaan memaksa (force majeure), garansi, pembatasan tanggung jawab, dan penyelesaian sengketa.</p>", "<p>Klausul ambigu adalah sumber sengketa. Gunakan bahasa yang terukur, lampirkan spesifikasi/terminologi, dan hindari penafsiran ganda. Tentukan hukum yang berlaku dan forum penyelesaian secara eksplisit.</p>", "<p>Sebelum penandatanganan, lakukan uji tuntas atas lawan bisnis Anda dan simpan seluruh korespondensi. Konsultasikan draf kontrak kepada penasihat hukum Anda.</p>"]
    },
    {
      slug: "mediasi-vs-litigasi", title: "Mediasi vs Litigasi: Mana yang Lebih Tepat untuk Sengketa Anda?", category: "litigasi-sengketa", date: "2026-08-25", author: "farhan-ramadhan", reviewer: "dimas-pratama", read: "5 menit",
      excerpt: "Perbandingan biaya, waktu, dan hasil mediasi dibanding litigasi — serta kapan mediasi menjadi kewajiban hukum.",
      content: ["<p>Mediasi adalah penyelesaian sengketa melalui perantara netral yang membantu para pihak mencapai kesepakatan damai. Sejak PERMA 1/2016, mediasi wajib diupayakan di pengadilan sebelum pembuktian.</p>", "<p>Keunggulan mediasi: lebih cepat (biasanya 1–3 bulan), biaya lebih rendah, hasilnya bersifat win-win, dan kerahasiaannya terjaga karena tidak terbuka untuk umum.</p>", "<p>Litigasi lebih tepat bila lawan tidak beritikad baik, sengketa menyangkut kepemilikan aset besar, atau diperlukan putusan yang dapat dieksekusi secara paksa.</p>", "<p>Strategi terbaik umumnya: mulai dari somasi dan mediasi non-litigasi, lalu litigasi bila tidak tercapai kesepakatan. Evaluasi kekuatan bukti Anda sebelum memutuskan.</p>"]
    },
    {
      slug: "wasiat-dan-ahli-waris", title: "Wasiat dan Penanganan Ahli Waris: Panduan Keluarga Indonesia", category: "hukum-keluarga-waris", date: "2026-08-10", author: "ayu-lestari", reviewer: "sinta-maharani", read: "6 menit",
      excerpt: "Cara membuat wasiat yang sah, menentukan ahli waris, dan membagi harta peninggalan secara damai.",
      content: ["<p>Wasiat (testament) adalah pernyataan tertulis seseorang mengenai pembagian hartanya setelah meninggal dunia. Wasiat yang dibuat di hadapan notaris memiliki kekuatan pembuktian paling kuat.</p>", "<p>Penentuan ahli waris bergantung pada hukum yang berlaku bagi keluarga Anda: KUHPerdata, Kompilasi Hukum Islam (KHI), atau hukum adat. Masing-masing memiliki skema pembagian yang berbeda.</p>", "<p>Dokumen yang dibutuhkan untuk penetapan ahli waris: akta kematian, KK, KTP, akta kelahiran, akta perkawinan, dan surat keterangan ahli waris dari kelurahan setempat.</p>", "<p>Pembagian secara musyawarah dengan pendampingan notaris/advokat menghindari sengketa berkepanjangan dan memastikan seluruh ahli waris menerima bagian tertulis yang sah.</p>"]
    },
    {
      slug: "nma-and-nda", title: "NDA: Kapan Dibutuhkan dan Klausul yang Sering Dilupakan", category: "hukum-korporasi", date: "2026-07-22", author: "bima-aditya", reviewer: "ratna-puspita", read: "4 menit",
      excerpt: "Perjanjian kerahasiaan untuk negosiasi bisnis: definisi informasi, jangka waktu, dan konsekuensi pelanggaran.",
      content: ["<p>Perjanjian kerahasiaan (Non-Disclosure Agreement/NDA) wajib ditandatangani sebelum berbagi informasi sensitif dalam negosiasi bisnis, M&A, atau kemitraan.</p>", "<p>Klausul kunci: definisi informasi rahasia, pengecualian (informasi publik), kewajiban penerima, jangka waktu kerahasiaan (umumnya 2–5 tahun), serta konsekuensi pelanggaran.</p>", "<p>Klausul yang sering dilupakan: pengecualian untuk kewajiban hukum, hak mengajukan perintah pengadilan, dan mekanisme pengembalian/pemusnahan dokumen.</p>", "<p>NDA dapat bersifat satu arah (unilateral) atau dua arah (mutual). Pilih sesuai posisi kedua belah pihak dalam negosiasi.</p>"]
    },
    {
      slug: "perjanjian-kerja-waktu-ttertentu", title: "PKWT vs PKWTT: Memilih Bentuk Perjanjian Kerja yang Tepat", category: "hukum-ketenagakerjaan", date: "2026-07-05", author: "farhan-ramadhan", reviewer: "ratna-puspita", read: "5 menit",
      excerpt: "Perbedaan PKWT dan PKWTT, batas maksimal kontrak, kompensasi, dan risiko salah pilih bentuk perjanjian.",
      content: ["<p>PKWT (perjanjian kerja waktu tertentu) hanya untuk pekerjaan yang sifatnya sementara, musiman, atau proyek khusus. PKWTT (waktu tidak tertentu) untuk pekerjaan yang bersifat tetap.</p>", "<p>Batas maksimal PKWT adalah 5 tahun secara kumulatif termasuk perpanjangan. Setelah itu, pekerja berhak atas kompensasi PKWT sebesar 1 bulan upah per tahun masa kerja.</p>", "<p>PKWT yang tidak memenuhi syarat akan beralih menjadi PKWTT karena hukum. Ini berisiko bagi perusahaan yang menginginkan fleksibilitas jangka pendek.</p>", "<p>Pilih bentuk perjanjian sesuai analisis jabatan dan risiko. Dampingi penyusunan dengan penasihat hukum agar sah dan tidak merugikan kedua belah pihak.</p>"]
    },
    {
      slug: "balik-nama-sertifikat", title: "Panduan Balik Nama Sertifikat Tanah setelah AJB", category: "pertanahan-properti", date: "2026-06-18", author: "dewi-anggraini", reviewer: "dimas-pratama", read: "6 menit",
      excerpt: "Proses balik nama sertifikat di BPN setelah AJB: dokumen, biaya, dan estimasi waktu penyelesaian.",
      content: ["<p>Setelah penandatanganan Akta Jual Beli (AJB) di PPAT/notaris, pembeli wajib mengurus balik nama sertifikat ke Badan Pertanahan Nasional (BPN).</p>", "<p>Dokumen yang dibutuhkan: sertifikat asli, AJB, KTP dan KK pembeli dan penjual, SPPT PBB tahun berjalan, serta surat keterangan dari kelurahan.</p>", "<p>Biaya meliputi BPHTB (5% dari nilai perolehan dikurangi NPOP), PNBP BPN, dan biaya PPAT. Estimasi waktu penyelesaian 1–3 bulan tergantung antrean BPN setempat.</p>", "<p>Pastikan penjual telah melunasi PBB dan PPh atas pengalihan hak sebelum AJB agar proses lancar. Simpan seluruh tanda terima dan bukti bayar.</p>"]
    }
  ],
  jobs: [
    { id: "assoc-2026", title: "Associate Litigasi (1 posisi)", type: "Full-time", req: ["Pengalaman minimal 2 tahun di firma hukum", "Terdaftar sebagai advokat PERADI atau siap sumpah", "Menguasai hukum acara perdata dan pidana"] },
    { id: "magang-2026", title: "Magang PKPA (2 posisi)", type: "Magang", req: ["Mahasiswa hukum semester akhir atau fresh graduate", "IPK minimal 3.0", "Bersedia magang 3 bulan di Jakarta"] }
  ],
  waNumber: "6281234567890"
};
window.__PRACTICE_BY_SLUG = Object.fromEntries(window.FIRM_DATA.practices.map(p => [p.slug, p]));
window.__LAWYER_BY_SLUG = Object.fromEntries(window.FIRM_DATA.lawyers.map(l => [l.slug, l]));
window.__ARTICLE_BY_SLUG = Object.fromEntries(window.FIRM_DATA.articles.map(a => [a.slug, a]));
window.__LANG = localStorage.getItem("wr_lang") || "id";
window.t = (obj) => obj && typeof obj === "object" ? (obj[window.__LANG] || obj.id) : obj;
window.__BASE = ".";
window.__HREF = (path) => path.replace(/^\//, "") + ".html";
window.__PARAM = new URLSearchParams(location.search);
window.__WA_DEFAULT = "Halo Wijaya & Rekan, saya ingin bertanya tentang layanan hukum. ";
window.__WA = (msg) => "https://wa.me/" + window.FIRM_DATA.waNumber + "?text=" + encodeURIComponent(msg || window.__WA_DEFAULT);
