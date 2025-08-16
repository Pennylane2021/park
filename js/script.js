// 기본 설정
document.getElementById('year').textContent = new Date().getFullYear();

// 다크모드 토글
const themeBtn = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
  themeBtn.textContent = savedTheme === 'dark' ? '라이트' : '다크';
  themeBtn.setAttribute('aria-pressed', savedTheme === 'dark');
}

themeBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? '' : 'dark';
  if (next) {
    root.setAttribute('data-theme','dark');
    localStorage.setItem('theme','dark');
    themeBtn.textContent = '라이트';
    themeBtn.setAttribute('aria-pressed','true');
  } else {
    root.removeAttribute('data-theme');
    localStorage.removeItem('theme');
    themeBtn.textContent = '다크';
    themeBtn.setAttribute('aria-pressed','false');
  }
});

// 갤러리 모달
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.thumb').forEach(btn => {
  btn.addEventListener('click', () => {
    const src = btn.getAttribute('data-src');
    modalImg.src = src;
    modalImg.alt = btn.querySelector('img').alt || '';
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

function closeModal(){
  modal.setAttribute('aria-hidden','true');
  modalImg.src = '';
  document.body.style.overflow = '';
}

// 폼 제출 경고 (mailto 사용 시 안내)
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  // mailto는 브라우저/환경에 따라 동작이 다름 -> 안내 후 제출 허용
  alert('이 폼은 기본 mailto 동작을 사용합니다. 실제 운영 시에는 Formspree, Netlify Forms, Google Form 등 외부 폼 서비스 연동을 권장합니다.');
});
