(function () {
    'use strict';

    // ----- Year in footer -----
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ----- Mobile nav toggle -----
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
        });
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });
    }

    // ----- Navbar scroll style -----
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    const onScroll = () => {
        const y = window.scrollY;
        if (navbar) navbar.classList.toggle('scrolled', y > 30);
        if (backToTop) backToTop.classList.toggle('show', y > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ----- Typed effect -----
    const typedEl = document.getElementById('typed');
    if (typedEl) {
        const phrases = [
            'Full Stack Developer',
            'MERN Stack Engineer',
            'React.js Developer',
            'Frontend Developer',
            'Backend Developer',
            'Node.js & API Builder',
            'Problem Solver'
        ];

        let phraseIdx = 0, charIdx = 0, deleting = false;

        const tick = () => {
            const current = phrases[phraseIdx];

            if (!deleting) {
                typedEl.textContent = current.slice(0, ++charIdx);
                if (charIdx === current.length) {
                    deleting = true;
                    return setTimeout(tick, 1500);
                }
            } else {
                typedEl.textContent = current.slice(0, --charIdx);
                if (charIdx === 0) {
                    deleting = false;
                    phraseIdx = (phraseIdx + 1) % phrases.length;
                }
            }

            setTimeout(tick, deleting ? 40 : 80);
        };

        tick();
    }

    // ----- Contact form (backend connected CLEAN) -----
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            status.textContent = "Sending...";
            status.className = "form-status";

            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const subject = form.subject.value.trim();
            const message = form.message.value.trim();

            // Validation
            if (!name || !email || !subject || !message) {
                status.textContent = "Please fill all fields.";
                status.className = "form-status error";
                return;
            }

            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            if (!emailValid) {
                status.textContent = "Invalid email address.";
                status.className = "form-status error";
                return;
            }

            try {
                const res = await fetch("http://localhost:5000/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, subject, message })
                });

                const data = await res.json();

                if (res.ok) {
                    status.textContent = "✅ Message sent successfully!";
                    status.className = "form-status success";
                    form.reset();
                } else {
                    status.textContent = data.msg || "❌ Failed to send";
                    status.className = "form-status error";
                }

            } catch (err) {
                console.error(err);
                status.textContent = "❌ Cannot connect to server";
                status.className = "form-status error";
            }
        });
    }

})();