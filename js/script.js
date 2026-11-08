(function() {
    // ----- TOAST -----
    const toast = document.getElementById('toast');
    
    function showToast(message, duration = 2500) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(window.toastTimeout);
        window.toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    }

    // Делаем функцию доступной глобально
    window.showToast = showToast;

    // ----- КНОПКИ АВТОРИЗАЦИИ -----
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            showToast('🔐 Вход в личный кабинет (демо)');
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            showToast('📝 Форма записи откроется скоро!');
        });
    }

    // ----- КНОПКИ "ПОДРОБНЕЕ" НА КАРТОЧКАХ КУРСОВ -----
    document.querySelectorAll('.course-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const course = btn.dataset.course;
            showToast(`📘 Курс "${course}": подробнее на странице "Курсы"`);
        });
    });

    // ----- CTA-КНОПКА -----
    const ctaSignupBtn = document.getElementById('ctaSignupBtn');
    if (ctaSignupBtn) {
        ctaSignupBtn.addEventListener('click', () => {
            showToast('✨ Спасибо! Мы свяжемся с вами.');
        });
    }

    // ----- ГЕРОЙ-КНОПКИ (только на главной) -----
    const freeLessonBtn = document.getElementById('freeLessonBtn');
    if (freeLessonBtn) {
        freeLessonBtn.addEventListener('click', () => {
            showToast('🎁 Бесплатный урок: переходим к форме...');
            setTimeout(() => {
                window.location.href = 'contacts.html';
            }, 800);
        });
    }

    // ----- ФОРМА НА СТРАНИЦЕ КОНТАКТОВ -----
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('✨ Заявка отправлена! Мы скоро свяжемся с вами.', 3000);
            contactForm.reset();
        });
    }

    // Приветствие на главной
    if (document.body.dataset.page === 'home') {
        setTimeout(() => {
            showToast('👋 Добро пожаловать в ЛингваШколу!', 3000);
        }, 500);
    }
})();