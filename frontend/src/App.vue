<script setup>
import { computed } from 'vue';
const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
const isServicePage = computed(() => currentPath === '/service' || currentPath.startsWith('/service/'));
const serviceDetail = computed(() => services.find((item) => currentPath === '/service/' + item.slug));
const services = [
  { slug: 'konsultasi-kulit', category: 'KONSULTASI', number: '01', title: 'Konsultasi kulit', text: 'Kenali kondisi kulit dan susun rencana perawatan bersama tim kami.', tags: 'Analisis kulit · Rekomendasi personal' },
  { slug: 'signature-facial', category: 'FACIAL', number: '02', title: 'NARA Signature Facial', text: 'Ritual facial untuk membersihkan dan merawat kulit dengan nyaman.', tags: 'Pembersihan · Hidrasi · Relaksasi' },
  { slug: 'acne-care', category: 'ACNE CARE', number: '03', title: 'Perawatan kulit berjerawat', text: 'Pendampingan untuk kulit rentan berjerawat dengan pendekatan sesuai kebutuhan.', tags: 'Acne prone · Skin barrier' },
  { slug: 'brightening', category: 'BRIGHTENING', number: '04', title: 'Perawatan kulit kusam', text: 'Pilihan perawatan untuk membantu kulit tampak lebih segar dan bercahaya.', tags: 'Kulit kusam · Warna kulit tidak merata' },
  { slug: 'skin-rejuvenation', category: 'REJUVENATION', number: '05', title: 'Skin rejuvenation', text: 'Diskusikan perawatan lanjutan untuk menjaga tampilan kulit tetap terawat.', tags: 'Peremajaan · Perawatan berkala' },
  { slug: 'skin-barrier', category: 'SKIN HEALTH', number: '06', title: 'Perawatan skin barrier', text: 'Fokus pada kenyamanan dan kelembapan kulit dengan perawatan lembut.', tags: 'Kulit sensitif · Hidrasi' },
];
const treatments = [
  { number: '01', title: 'Konsultasi kulit', text: 'Mulai dengan percakapan dan pemahaman akan kebutuhan kulitmu.', icon: 'KENALI' },
  { number: '02', title: 'Perawatan wajah', text: 'Pilihan perawatan yang disesuaikan dengan kondisi dan rutinitas kulit.', icon: 'RAWAT' },
  { number: '03', title: 'Skin rejuvenation', text: 'Diskusikan pilihan perawatan lanjutan bersama tim NARA.', icon: 'JAGA' },
];
</script>

<template>
  <div class="site-shell">
    <header class="header">
      <a class="brand" href="/" aria-label="NARA Skin and Aesthetic, beranda">
        <span class="brand-mark">N</span>
        <span class="brand-copy"><strong>NARA</strong><small>SKIN & AESTHETIC</small></span>
      </a>
      <nav class="nav" aria-label="Navigasi utama">
        <a href="/">Home</a><a href="/about">About</a><a href="/service">Service</a>
        <a href="/blog">Blog</a><a href="/promo">Promo</a><a href="/contact">Contact</a>
      </nav>
      <a class="header-cta" href="/contact">Contact Us</a>
    </header>

    <main>
      <section v-if="currentPath === '/'" id="beranda" class="hero">
        <div class="hero-copy">
          <div class="overline"><span class="overline-rule"></span> KLINIK KULIT · JAKARTA</div>
          <h1>Temukan versi<br>terbaik <em>kulitmu.</em></h1>
          <p class="hero-description">Ruang untuk memahami kulitmu lebih dekat. Kami membantu menyusun langkah perawatan yang sesuai, dimulai dari konsultasi.</p>
          <div class="hero-actions"><a class="button button-dark" href="/service">Jelajahi perawatan <span>↗</span></a><a class="text-link" href="/about">Kenali NARA <span>↓</span></a></div>
          <div class="hero-note"><span class="note-star">N</span><span>Konsultasi personal, dimulai dari kebutuhanmu.</span></div>
        </div>
        <div class="hero-visual" role="img" aria-label="Suasana perawatan kulit yang tenang dan natural">
          <div class="visual-shade"></div>
          <div class="image-caption"><span>RUANG PERAWATAN NARA</span><span>JAKARTA</span></div>
          <div class="round-stamp"><span>SKINCARE<br>AT YOUR PACE</span><b>N.</b></div>
        </div>
        <div class="hero-bottom"><span>PERAWATAN KULIT YANG LEBIH PERSONAL</span><span class="scroll-cue">JELAJAHI NARA <i>↓</i></span><span>01 — 04</span></div>
      </section>

      <template v-if="currentPath === '/about'">
        <section class="route-page about-page section-pad"><div class="about-page-image" role="img" aria-label="Suasana klinik NARA"></div><div class="about-page-copy"><div class="overline"><span class="overline-rule"></span> TENTANG NARA</div><h1>Perawatan yang<br>berangkat dari <em>kebutuhanmu.</em></h1><p>Kami percaya perawatan yang baik dimulai dengan informasi jelas dan percakapan yang nyaman. Tim NARA membantu memahami pilihan yang tersedia untuk kulitmu.</p><a class="button button-dark" href="/contact">Bicarakan dengan tim kami <span>↗</span></a></div></section>
      </template>
      <template v-else-if="currentPath === '/blog'">
        <section class="route-page section-pad"><div class="overline"><span class="overline-rule"></span> JURNAL NARA</div><h1>Kenali kulitmu,<br><em>rawat dengan bijak.</em></h1><p class="route-intro">Catatan sederhana dari tim NARA untuk menemani perjalanan merawat kulit.</p><div class="route-cards"><article><span>PANDUAN DASAR</span><h2>Menjaga skin barrier</h2><p>Kebiasaan lembut untuk mendukung kulit tetap nyaman dan terhidrasi.</p></article><article><span>KEBIASAAN HARIAN</span><h2>Perlindungan dari matahari</h2><p>Memahami peran perlindungan harian dalam rutinitas perawatan kulit.</p></article><article><span>KENALI KULIT</span><h2>Memahami kulit berjerawat</h2><p>Kenali kebutuhan kulit dan kapan sebaiknya berkonsultasi.</p></article></div><a class="button button-dark" href="/service">Jelajahi layanan <span>↗</span></a></section>
      </template>
      <template v-else-if="currentPath === '/promo'">
        <section class="route-page promo-page section-pad"><div class="overline"><span class="overline-rule"></span> PENAWARAN NARA</div><h1>Mulai perjalanan<br><em>kulit sehatmu.</em></h1><p class="route-intro">Mulai dari konsultasi kulit bersama tim NARA untuk mendiskusikan kebutuhan dan pilihan perawatan yang sesuai.</p><article class="promo-card"><span>KONSULTASI AWAL</span><h2>Waktu untuk memahami kulitmu</h2><p>Ceritakan kondisi serta tujuan perawatanmu. Tim kami akan menjelaskan langkah dan pilihan yang tersedia.</p><a class="button button-dark" href="/contact">Tanyakan penawaran <span>↗</span></a></article></section>
      </template>
      <template v-else-if="currentPath === '/contact'">
        <section class="route-page contact-page section-pad"><div class="overline"><span class="overline-rule"></span> CONTACT NARA</div><h1>Mulai dengan<br><em>satu percakapan.</em></h1><p class="route-intro">Ceritakan apa yang kulitmu butuhkan. Kami siap mendengarkan dan membantu menentukan langkah awal.</p><div class="contact-panel"><span>A MOMENT FOR YOU</span><h2>Hubungi tim NARA</h2><p>Kirim pesan untuk bertanya tentang layanan atau menjadwalkan konsultasi.</p><a class="button button-light" href="mailto:hello@naraskin.id?subject=Konsultasi%20NARA">hello@naraskin.id <span>↗</span></a></div></section>
      </template>
      <template v-else-if="isServicePage">
      <template v-if="!serviceDetail">
      <section class="service-hero section-pad"><div class="overline"><span class="overline-rule"></span> LAYANAN NARA · SKIN & AESTHETIC</div><div class="service-hero-layout"><div><h1>Perawatan yang<br><em>memahami kulitmu.</em></h1><p>Pilihan perawatan untuk kebutuhan kulit yang berbeda. Mulai dengan konsultasi, lalu temukan langkah yang tepat untukmu.</p><a class="button button-dark" href="#daftar-layanan">Lihat semua layanan <span>↓</span></a></div><div class="service-hero-image" role="img" aria-label="Perawatan wajah di NARA"></div></div></section>
      <section id="daftar-layanan" class="service-list section-pad"><div class="section-heading"><div><div class="overline"><span class="overline-rule"></span> PILIHAN PERAWATAN</div><h2>Setiap kulit punya<br><em>ceritanya sendiri.</em></h2></div><p>Perawatan akan dibicarakan terlebih dahulu agar sesuai dengan kondisi dan kenyamanan kulitmu.</p></div><div class="service-grid"><article v-for="item in services" :key="item.number" class="service-card"><div class="service-card-top"><span>{{ item.number }}</span><span>{{ item.category }}</span></div><h3>{{ item.title }}</h3><p>{{ item.text }}</p><div class="service-tags">{{ item.tags }}</div><a :href="'/service/' + item.slug">Lihat detail layanan <span>↗</span></a></article></div></section><section class="service-note section-pad"><div class="overline"><span class="overline-rule"></span> LANGKAH PERTAMA</div><h2>Belum tahu harus<br><em>mulai dari mana?</em></h2><p>Ceritakan kondisi dan tujuan kulitmu. Tim kami akan membantu menjelaskan pilihan yang tersedia.</p><a class="button button-dark" href="/contact">Jadwalkan konsultasi <span>↗</span></a></section>
      </template>
      <section v-else-if="serviceDetail" class="service-detail section-pad"><a class="text-link service-back" href="/service">← Semua layanan</a><div class="service-detail-layout"><div><div class="overline"><span class="overline-rule"></span> {{ serviceDetail.category }} · NARA SKIN & AESTHETIC</div><div class="service-card-top service-detail-number"><span>{{ serviceDetail.number }}</span><span>PERAWATAN PERSONAL</span></div><h1>{{ serviceDetail.title }}<em>.</em></h1><p class="service-detail-description">{{ serviceDetail.text }} Kami akan mendiskusikan kebutuhan dan kondisi kulitmu sebelum menentukan langkah perawatan.</p><div class="service-tags">{{ serviceDetail.tags }}</div><a class="button button-dark" href="/contact">Konsultasikan perawatan <span>↗</span></a></div><div class="service-hero-image" role="img" :aria-label="'Perawatan ' + serviceDetail.title + ' di NARA'"></div></div><div class="service-detail-note"><h2>Perawatan dimulai<br><em>dengan memahami.</em></h2><p>Setiap kulit memiliki kebutuhan yang berbeda. Tim NARA akan menjelaskan pilihan yang tersedia dan membantu menentukan langkah yang sesuai untukmu.</p><a class="text-link" href="/service">Jelajahi layanan lainnya <span>↗</span></a></div></section>
      </template>
      <template v-else>
      <section id="perawatan" class="home-service-teaser section-pad">
        <div class="overline"><span class="overline-rule"></span> LAYANAN NARA</div>
        <div class="home-service-content"><div><h2>Perawatan untuk<br><em>kebutuhan kulitmu.</em></h2><p>Temukan berbagai pilihan perawatan kulit yang dapat didiskusikan bersama tim NARA.</p></div><a class="button button-dark" href="/service">Jelajahi semua layanan <span>↗</span></a></div>
      </section>



      </template>
    </main>

    <footer class="footer"><a class="brand footer-brand" href="/"><span class="brand-mark">N</span><span class="brand-copy"><strong>NARA</strong><small>SKIN & AESTHETIC</small></span></a><span>Merawat kulit, merayakan diri.</span><span>© 2026 NARA SKIN & AESTHETIC</span></footer>
  </div>
</template>
