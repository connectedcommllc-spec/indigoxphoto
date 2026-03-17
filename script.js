
document.querySelectorAll('.mobile-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const panel = document.querySelector('.mobile-panel');
    if (panel) panel.classList.toggle('open');
  });
});

document.querySelectorAll('.faq-item').forEach((item) => {
  const button = item.querySelector('.faq-question');
  if (button) {
    button.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  }
});

const marketData = {
  bakersfield: {
    title: "Bakersfield",
    subtitle: "",
    copy: "Bakersfield is the home base, covering everything from everyday listings to higher-end homes across the city with photography, video, drone coverage, reels, Matterport, and Zillow 3D for properties at every price point.",
    cards: [
      {
        kicker: "Property Photography",
        market: "Bakersfield",
        title: "Polished listing presentation",
        text: "Clean, refined visuals built to give Bakersfield listings a stronger first impression across MLS, websites, and social media.",
        image: "assets/Bakersfield/3-web-or-mls-Photo-3140.jpg"
      },
      {
        kicker: "Photo + Social Content",
        market: "Bakersfield",
        title: "Marketing content for modern listings",
        text: "A flexible media package designed to support listing launches, social promotion, and a more elevated overall presentation.",
        image: "assets/Bakersfield/1-web-or-mls-Photo-3300.jpg"
      },
      {
        kicker: "Drone + Listing Media",
        market: "Bakersfield",
        title: "Full-service visual coverage",
        text: "Built for Bakersfield listings that need a complete presentation with photography, aerial coverage, and stronger marketing assets.",
        image: "assets/Bakersfield/5-web-or-mls-DJI_0920.jpg"
      }
    ]
  },
  losangeles: {
    title: "Los Angeles",
    subtitle: "",
    copy: "Los Angeles coverage runs from the Hollywood Hills to the San Fernando Valley, with a stronger luxury focus for listings that need refined presentation, cleaner branding, and a more editorial feel, while still offering media for a wide range of properties.",
    cards: [
      {
        kicker: "Editorial Listing Media",
        market: "Los Angeles",
        title: "Refined property presentation",
        text: "Luxury-focused visuals designed to give Los Angeles listings a cleaner, more elevated look across digital marketing and listing launches.",
        image: "assets/Los Angeles/DSC07625-HDR.jpg"
      },
      {
        kicker: "Photo + Video",
        market: "Los Angeles",
        title: "Architectural and lifestyle coverage",
        text: "A polished approach built for homes that need strong interiors, premium detail, and a more design-forward presentation.",
        image: "assets/Los Angeles/DSC08170-HDR.jpg"
      },
      {
        kicker: "Social + Listing Assets",
        market: "Los Angeles",
        title: "Digital launch support",
        text: "Built for agents who want polished stills, social-ready content, and a presentation style that feels clean, modern, and premium.",
        image: "assets/Los Angeles/DSC07645-HDR.jpg"
      }
    ]
  },
  lasvegas: {
    title: "Las Vegas",
    subtitle: "",
    copy: "Las Vegas coverage includes everything from everyday listings to higher-end properties across Henderson, Summerlin, and Ascaya, with a stronger luxury focus while still providing polished media for a wide range of homes.",
    cards: [
      {
        kicker: "Luxury Listing Media",
        market: "Las Vegas",
        title: "Elevated visual presentation",
        text: "Designed to create a stronger first impression for Las Vegas listings with polished photography, premium detail, and a clean luxury feel.",
        image: "assets/Las Vegas/DSC05042-HDR.jpeg"
      },
      {
        kicker: "Photo + Marketing Assets",
        market: "Las Vegas",
        title: "Website and social support",
        text: "A polished media package built to support listing websites, social promotion, and a stronger overall presentation for agents and sellers.",
        image: "assets/Las Vegas/DJI_20240412182520_0049_D-2-HDR.jpg"
      },
      {
        kicker: "Reels + Drone Coverage",
        market: "Las Vegas",
        title: "Strong launch content",
        text: "Built for listings that need visual impact, cleaner branding, and media that performs across MLS, websites, and social channels.",
        image: "assets/Las Vegas/DSC05057-HDR.jpeg"
      }
    ]
  }
};

function renderMarket(key){
  const data = marketData[key];
  const title = document.getElementById('marketTitle');
  const copy = document.getElementById('marketCopy');
  const subtitle = document.getElementById('marketSubtitle');
  const grid = document.getElementById('marketGrid');
  if(!title || !copy || !grid) return;
  title.textContent = data.title;
  if(subtitle) subtitle.textContent = data.subtitle;
  copy.textContent = data.copy;
  grid.innerHTML = data.cards.map(card => `
    <article class="card">
      <div class="card-image" style="background-image:url('${card.image}')"></div>
      <div class="card-body">
        <div class="card-kicker"><span>${card.kicker}</span><span>${card.market}</span></div>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </div>
    </article>
  `).join('');
}

document.querySelectorAll('.market-tab').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.market-tab').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderMarket(btn.dataset.market);
  });
});

if(document.getElementById('marketGrid')){
  renderMarket('bakersfield');
}

function applyRevealTargets(){
  const selectors = [
    '.hero-pill',
    '.hero h1',
    '.hero p',
    '.hero-actions',
    '.hero-stats .stat',
    '.section .eyebrow',
    '.section .section-title',
    '.section .section-copy',
    '.card',
    '.quote',
    '.reel-tip',
    '.faq-item',
    '.info-card',
    '.form-card',
    '.about-image',
    '.about-copy',
    '.logo-marquee'
  ];

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
        const mod = index % 3;
        if (mod === 1) el.classList.add('reveal-delay-1');
        if (mod === 2) el.classList.add('reveal-delay-2');
      }
    });
  });
}

applyRevealTargets();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal').forEach((el, index) => {
    setTimeout(() => el.classList.add('in-view'), 120 + index * 90);
  });
});

function animateCount(el) {
  const target = Number(el.dataset.count || 0);
  const duration = 3000;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased).toString();
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target.toString();
    }
  }

  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.why-stat-number').forEach((num, index) => {
        const delay = index === 2 ? 0 : index * 120;
        setTimeout(() => animateCount(num), delay);
      });
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.35 });

document.querySelectorAll('.why-stats').forEach((el) => statObserver.observe(el));
