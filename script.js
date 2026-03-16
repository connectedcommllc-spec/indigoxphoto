
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
    copy: "Bakersfield is one of the core markets IndigoXPhoto serves, with listing media built for agents who want cleaner presentation, stronger marketing, and a more premium first impression.",
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
    copy: "Los Angeles is served with a more editorial approach, designed for agents and listings that need modern presentation, architectural storytelling, and a cleaner luxury feel.",
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
    copy: "Las Vegas is served with cinematic listing media built for dramatic presentation, luxury architecture, and launch content that feels polished across web, MLS, and social media.",
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
        image: "assets/Las Vegas/DJI_0841-HDR.jpeg"
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
