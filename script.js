// Interactive Scripts per Silvia Terranova Website - Solo Foto
document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. Filtro Categorie Gallery Foto
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategories = item.getAttribute('data-category').split(' ');

        if (filterValue === 'all' || itemCategories.includes(filterValue)) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 3. Modal Lightbox per Ingrandire le Foto
  const modal = document.getElementById('media-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const modalOverlay = document.getElementById('modal-overlay');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('h4')?.textContent || 'Lavoro Silvia Terranova';
      const category = item.querySelector('.gallery-category')?.textContent || 'Nail Art';
      const imgSrc = img ? img.src : 'images/work1.jpg';

      if (modal && modalBody) {
        modalBody.innerHTML = `
          <div style="position: relative; background: #FFF; border-radius: 16px; overflow: hidden;">
            <img src="${imgSrc}" alt="${title}" style="width: 100%; max-height: 75vh; object-fit: contain; background: #F7EBE8; display: block;">
            <div style="padding: 20px; text-align: center;">
              <span style="font-size: 0.8rem; text-transform: uppercase; color: #B87D70; font-weight: 700;">${category}</span>
              <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: #2B2321; margin: 4px 0 16px;">${title}</h3>
              <a href="https://ig.me/m/silvia_terranova_nailartist" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
                Chiedi Info in Direct su Instagram
              </a>
            </div>
          </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // 4. Header Shadow on Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(43, 35, 33, 0.08)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

});

// Keyframe animation per filtro
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);
