
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
    copy: "Bakersfield is the home base, covering everything from everyday listings to higher-end homes across the city with polished media designed to work at every price point.",
    cards: [
      {
        kicker: "Seven Oaks Style Campaign",
        market: "Bakersfield",
        title: "Luxury estate presentation",
        text: "Cinematic stills and video designed to slow buyers down, elevate detail, and create a more premium first impression online.",
        image: "assets/Bakersfield/3-web-or-mls-Photo-3140.jpg"
      },
      {
        kicker: "Twilight + Reels",
        market: "Bakersfield",
        title: "Launch content for social and MLS",
        text: "A refined package built around twilight imagery, reels, and polished stills that make the listing feel more expensive from the first scroll.",
        image: "assets/Bakersfield/1-web-or-mls-Photo-3300.jpg"
      },
      {
        kicker: "Matterport + Video",
        market: "Bakersfield",
        title: "Full-stack listing media",
        text: "Perfect for higher-end Bakersfield launches where agents need premium visuals, layout understanding, and social-ready assets.",
        image: "assets/Bakersfield/5-web-or-mls-DJI_0920.jpg"
      }
    ]
  },
  losangeles: {
    title: "Los Angeles",
    subtitle: "",
    copy: "Los Angeles coverage runs from the Hollywood Hills to the San Fernando Valley, with a more editorial approach built for listings that need refined presentation, cleaner branding, and a stronger luxury feel.",
    cards: [
      {
        kicker: "Hollywood Hills Style",
        market: "Los Angeles",
        title: "Editorial property marketing",
        text: "Luxury media designed for stronger presentation, higher-end branding, and a more expensive-looking online first impression.",
        image: "assets/Los Angeles/DSC07625-HDR.jpg"
      },
      {
        kicker: "Film + Website",
        market: "Los Angeles",
        title: "Architectural listing story",
        text: "A cinematic launch built around modern interiors, premium detail, and cleaner market positioning for design-conscious listings.",
        image: "assets/Los Angeles/DSC08170-HDR.jpg"
      },
      {
        kicker: "Reels + Twilight",
        market: "Los Angeles",
        title: "Luxury digital launch package",
        text: "Best for agents who need vertical content, polished stills, and a presentation style that feels brokerage-level rather than generic.",
        image: "assets/Los Angeles/DSC07645-HDR.jpg"
      }
    ]
  },
  lasvegas: {
    title: "Las Vegas",
    subtitle: "",
    copy: "Las Vegas coverage includes everything from everyday listings to higher-end properties across Henderson, Summerlin, and Ascaya, with media built to handle both fast-moving homes and stronger luxury presentation.",
    cards: [
      {
        kicker: "Showcase Film",
        market: "Las Vegas",
        title: "Desert luxury visual campaign",
        text: "Designed to create mood, atmosphere, and stronger perceived value for upscale Las Vegas properties and luxury neighborhoods.",
        image: "assets/Las Vegas/DSC05042-HDR.jpeg"
      },
      {
        kicker: "Photo + Ads",
        market: "Las Vegas",
        title: "Premium website and social rollout",
        text: "A polished media package that supports listing websites, ad creatives, social launch, and stronger seller-facing presentation.",
        image: "assets/Las Vegas/DJI_20240412182520_0049_D-2-HDR.jpg"
      },
      {
        kicker: "Reels + Drone",
        market: "Las Vegas",
        title: "High-impact listing launch",
        text: "Perfect for luxury desert architecture, dramatic twilight scenes, and visually led brand positioning across digital channels.",
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
