
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
    subtitle: "Luxury real estate photography in Bakersfield",
    copy: "Built around Bakersfield real estate photography, videography, reels, drone, Matterport 3D tours, Zillow Showcase, and twilight media for agents who want stronger presentation and a cleaner luxury image.",
    cards: [
      {
        kicker: "Seven Oaks Style Campaign",
        market: "Bakersfield",
        title: "Luxury estate presentation",
        text: "Cinematic stills and video designed to slow buyers down, elevate detail, and create a more premium first impression online.",
        image: "https://images.unsplash.com/photo-1600607687644-c7f34f0c806f?auto=format&fit=crop&w=1600&q=80"
      },
      {
        kicker: "Twilight + Reels",
        market: "Bakersfield",
        title: "Launch content for social and MLS",
        text: "A refined package built around twilight imagery, reels, and polished stills that make the listing feel more expensive from the first scroll.",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
      },
      {
        kicker: "Matterport + Video",
        market: "Bakersfield",
        title: "Full-stack listing media",
        text: "Perfect for higher-end Bakersfield launches where agents need premium visuals, layout understanding, and social-ready assets.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
      }
    ]
  },
  losangeles: {
    title: "Los Angeles",
    subtitle: "Design-forward media for Los Angeles listings",
    copy: "Editorial real estate visuals for Los Angeles agents who want architecture, styling, mood, and luxury brand image to feel more refined, modern, and elevated.",
    cards: [
      {
        kicker: "Hollywood Hills Style",
        market: "Los Angeles",
        title: "Editorial property marketing",
        text: "Luxury media designed for stronger presentation, higher-end branding, and a more expensive-looking online first impression.",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80"
      },
      {
        kicker: "Film + Website",
        market: "Los Angeles",
        title: "Architectural listing story",
        text: "A cinematic launch built around modern interiors, premium detail, and cleaner market positioning for design-conscious listings.",
        image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80"
      },
      {
        kicker: "Reels + Twilight",
        market: "Los Angeles",
        title: "Luxury digital launch package",
        text: "Best for agents who need vertical content, polished stills, and a presentation style that feels brokerage-level rather than generic.",
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80"
      }
    ]
  },
  lasvegas: {
    title: "Las Vegas",
    subtitle: "Luxury real estate media in Las Vegas",
    copy: "Premium listing visuals for Las Vegas agents who want dramatic presentation, stronger online perception, and cleaner launch materials for modern luxury properties.",
    cards: [
      {
        kicker: "Showcase Film",
        market: "Las Vegas",
        title: "Desert luxury visual campaign",
        text: "Designed to create mood, atmosphere, and stronger perceived value for upscale Las Vegas properties and luxury neighborhoods.",
        image: "https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=1600&q=80"
      },
      {
        kicker: "Photo + Ads",
        market: "Las Vegas",
        title: "Premium website and social rollout",
        text: "A polished media package that supports listing websites, ad creatives, social launch, and stronger seller-facing presentation.",
        image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1600&q=80"
      },
      {
        kicker: "Reels + Drone",
        market: "Las Vegas",
        title: "High-impact listing launch",
        text: "Perfect for luxury desert architecture, dramatic twilight scenes, and visually led brand positioning across digital channels.",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80"
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
