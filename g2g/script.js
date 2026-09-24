// Toggle menu mobile
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if(toggle){
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Filter produk (hanya jalan di halaman produk)
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.filter;

    productCards.forEach(card => {
      if(category === 'all' || card.dataset.category === category){
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Validasi form kontak
const contactForm = document.querySelector('#contact-form');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    const msgEl = document.querySelector('.form-msg');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!name || !email || !message){
      msgEl.textContent = 'Semua field wajib diisi.';
      msgEl.className = 'form-msg error';
      return;
    }
    if(!emailPattern.test(email)){
      msgEl.textContent = 'Format email tidak valid.';
      msgEl.className = 'form-msg error';
      return;
    }

    msgEl.textContent = 'Pesan terkirim! Terima kasih, ' + name + '.';
    msgEl.className = 'form-msg success';
    contactForm.reset();
  });
}
