// src/config.js
export const invite = {
  siteUrl: 'https://undangan-kamu.vercel.app', // ganti setelah deploy

  bride: 'Damayantie Nur Aisyah',
  brideParents: 'Daughter of Mr. Eman Sudirman & Mrs. Yani Suryani Nur',
  groom: 'Garzia Rizaldi',
  groomParents: 'Son of Mr. R. Erzi Rizal & Mrs. Helga Handarawati',
  short: 'Damayantie & Garzia',

  // dipakai countdown dan file kalender: jam akad 10.00 WIB
  dateISO: '2026-12-02T10:00:00+07:00',
  dateLabel: '2 December 2026',
  monthYear: 'December 2026',
  day: '02',

  events: [
    {
      title: 'Wedding Ceremony',
      time: '10.00 WIB',
      place: 'KUA (Office of Religious Affairs)',
      address: '', // isi nama/alamat KUA
      mapsUrl: '' // isi link Google Maps KUA (kosongkan kalau tidak ada)
    },
    {
      title: 'Reception',
      time: '', // isi jamnya, misalnya '12.00 WIB'
      place: 'Lalana Space',
      address: '', // isi alamat Lalana Space
      mapsUrl: 'https://maps.app.goo.gl/mLvbYBr61J9Zht9H6?g_st=ic'
    }
  ],

  ayat: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya.',
  ayatRef: 'QS. Ar-Rum: 21',

  accounts: [
    { bank: 'Bank Jago', number: '503919222576', name: 'Garzia Rizaldi' },
    { bank: 'ShopeePay / GoPay', number: '087739008832', name: 'Damayantie Nur Aisyah' }
  ],

  photos: ['/img/1.webp', '/img/2.webp', '/img/3.webp', '/img/4.webp'],
  coverPhoto: '/img/cover.webp'
};
