// تكملة لملف script.js بعد جزء تأثيرات Pixi.js

// تأثيرات الكتابة (Typing Effect)
const heroText = 'فريق الامن السيبراني للإبداع الرقمي';
const devNames = [
  ' رواسي',
  'طيبه',
  '  غالب',
  'حيدر',
];

function typeEffect(element, text, speed = 100) {
  let i = 0;
  const typing = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);
}

// تطبيق تأثير الكتابة على النصوص
document.addEventListener('DOMContentLoaded', () => {
  const heroHeading = document.querySelector('.hero-content h1');
  heroHeading.textContent = '';
  typeEffect(heroHeading, heroText, 150);

  // تأثير الكتابة على أسماء المطورين
  const devNameElements = document.querySelectorAll('.dev-info h3');
  devNameElements.forEach((el, index) => {
    el.textContent = '';
    setTimeout(() => {
      typeEffect(el, devNames[index], 100);
    }, 500 * (index + 1));
  });
});

// تأثيرات ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. تأثيرات شريط التنقل (Navbar)
gsap.to('#navbar', {
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
  padding: '10px 0',
  duration: 0.3,
  scrollTrigger: {
    trigger: 'body',
    start: '50px top',
    toggleActions: 'play none none reverse',
    markers: false,
  },
});

// 2. تأثيرات قسم "من نحن"
gsap.utils.toArray('.stat-item').forEach((item, i) => {
  gsap.from(item, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.2,
    scrollTrigger: {
      trigger: '#about',
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  });
});

// تأثيرات الأرقام المتزايدة
const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach((number) => {
  const target = +number.getAttribute('data-count');
  const countUp = gsap.to(number, {
    innerText: target,
    duration: 2,
    snap: { innerText: 1 },
    scrollTrigger: {
      trigger: number,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
});

// 3. تأثيرات بطاقات المطورين
gsap.utils.toArray('.dev-card').forEach((card, i) => {
  gsap.from(card, {
    x: i % 2 === 0 ? 100 : -100,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.2,
    scrollTrigger: {
      trigger: '#developers',
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  });
});

// 4. تأثيرات تفاصيل المطورين
gsap.utils.toArray('.dev-detail-section').forEach((section, i) => {
  // تأثير الصورة
  gsap.from(section.querySelector('.dev-detail-image'), {
    x: i % 2 === 0 ? -100 : 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  });

  // تأثير النص
  gsap.from(section.querySelector('.dev-detail-info'), {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: section,
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  });

  // تأثير شريط الخبرة
  const expBar = section.querySelector('.experience-bar');
  gsap.to(expBar, {
    width: expBar.getAttribute('data-experience') + '%',
    duration: 2,
    scrollTrigger: {
      trigger: expBar,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
});

// 5. تأثيرات قسم المشاريع
gsap.utils.toArray('.project-card').forEach((card, i) => {
  gsap.from(card, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.15,
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  });
});

// 6. تأثيرات قسم التواصل
gsap.from('.contact-info', {
  x: -50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '#contact',
    start: 'top 70%',
    toggleActions: 'play none none none',
  },
});

gsap.from('.contact-form', {
  x: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '#contact',
    start: 'top 70%',
    toggleActions: 'play none none none',
  },
});

// 7. تأثيرات الفوتر
gsap.from('.footer-content', {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: 'footer',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
});

// تأثيرات إضافية للتمرير السلس
gsap.utils.toArray('section').forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
});

// تأثيرات للعناوين
gsap.utils.toArray('.section-title').forEach((title) => {
  gsap.from(title, {
    y: -30,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: title,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
  });
});

// تأثيرات للعناوين الفرعية
gsap.utils.toArray('.section-subtitle').forEach((subtitle) => {
  gsap.from(subtitle, {
    y: -20,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    scrollTrigger: {
      trigger: subtitle,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
  });
});

// تأثيرات خاصة للبطاقات عند التمرير
gsap.utils.toArray('.dev-card').forEach((card) => {
  ScrollTrigger.create({
    trigger: card,
    start: 'top 80%',
    onEnter: () => {
      gsap.to(card, {
        scale: 1.05,
        boxShadow: '0 15px 30px rgba(108, 99, 255, 0.3)',
        duration: 0.5,
      });
    },
    onLeaveBack: () => {
      gsap.to(card, {
        scale: 1,
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        duration: 0.5,
      });
    },
  });
});

// تأثيرات القسم البطولي (Hero) عند التمرير
ScrollTrigger.create({
  trigger: '.hero',
  start: 'top top',
  end: 'bottom top',
  onLeave: () => {
    gsap.to('.hero-content', {
      y: -50,
      opacity: 0,
      duration: 0.5,
    });
  },
  onEnterBack: () => {
    gsap.to('.hero-content', {
      y: 0,
      opacity: 1,
      duration: 0.5,
    });
  },
});

// تأثيرات القوائم عند التمرير
gsap.utils.toArray('.footer-links ul li').forEach((item, i) => {
  gsap.from(item, {
    x: 30,
    opacity: 0,
    duration: 0.5,
    delay: i * 0.1,
    scrollTrigger: {
      trigger: item,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
  });
});

// تأثيرات الأيقونات الاجتماعية
gsap.utils.toArray('.dev-social a').forEach((icon, i) => {
  gsap.from(icon, {
    y: 20,
    opacity: 0,
    duration: 0.5,
    delay: i * 0.1,
    scrollTrigger: {
      trigger: icon,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
  });
});

// تأثيرات شريط المهارات
gsap.utils.toArray('.dev-skills li').forEach((skill, i) => {
  gsap.from(skill, {
    x: i % 2 === 0 ? 30 : -30,
    opacity: 0,
    duration: 0.5,
    delay: i * 0.1,
    scrollTrigger: {
      trigger: skill,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
  });
});

// تأثيرات النصوص البرمجية
gsap.utils.toArray('.dev-detail-info p').forEach((para, i) => {
  gsap.from(para, {
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.2,
    scrollTrigger: {
      trigger: para,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
  });
});
