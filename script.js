document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const searchInput = document.getElementById('waste-search');
  const searchBtn = document.getElementById('search-btn');
  const tagButtons = document.querySelectorAll('.tag-btn');
  const craftIdeasSection = document.getElementById('craft-ideas');
  const ideasContainer = document.getElementById('ideas-container');

  // Craft ideas database
  const craftIdeas = {
    'plastic bottle': [
      {
        title: 'Plastic Bottle Planter',
        image: 'pictures/plasticbottle-plantholder.jpg',
        description: 'Transform your plastic bottle into a beautiful hanging planter for your home.',
        difficulty: 'Easy',
        timeRequired: '30 minutes',
        materials: ['Plastic bottle', 'Scissors or craft knife', 'String or twine', 'Potting soil', 'Small plant or seeds', 'Paint (optional)'],
        steps: [
          'Clean the plastic bottle thoroughly and remove any labels.',
          'Cut the bottle in half horizontally using scissors or a craft knife.',
          'Make small drainage holes in the bottom of the top half of the bottle.',
          'Optionally, paint the outside of the bottle with weather-resistant paint.',
          'Punch 3-4 small holes around the top edge for hanging strings.',
          'Thread string or twine through the holes and tie them together at the top.',
          'Fill the bottle with potting soil and plant your chosen plant or seeds.',
          'Hang your planter in a suitable location with adequate sunlight.'
        ],
        estimatedValue: '₹150-250',
      },
      {
        title: 'Plastic Bottle Pen Holder',
        image: 'pictures/penholder.png',
        difficulty: 'Easy',
        time: '20 minutes',
        materials: ['Plastic bottle', 'Scissors', 'Sandpaper (optional, for smoothing edges)', 'Paint or decorative materials (optional)', 'Glue or tape (if adding extra decorations)'],
        steps: [
          'Clean the bottle thoroughly and remove any labels.',
          'Cut the bottle to the desired height using scissors or a craft knife.',
          'Smooth the edges with sandpaper to prevent rough or sharp areas.',
          'Optionally, decorate by painting the outside, wrapping it in fabric, or adding stickers.',
          'Place it on your desk and fill it with pens, pencils, or stationery.'
        ],
        estimatedValue: '₹50-100'
      }
    ],
    'newspaper': [
      {       
        title: 'Woven Basket',
        image: 'pictures/wovenbasket.png',
        difficulty: 'Medium',
        time: '2 hours',
        materials: ['Old newspapers', 'Glue', 'Paint', 'Scissors'],
        steps: [
          'Roll newspapers into tight tubes',
          'Create base with crossed tubes',
          'Weave sides up',
          'Secure with glue',
          'Paint and seal'
        ],
        estimatedValue: '₹100-130'
      }
    ],
    'tin can': [
      {
        title: 'Lantern',
        image: 'pictures/lantern.png',
        difficulty: 'Medium',
        time: '45 minutes',
        materials: ['Clean tin can', 'Hammer', 'Nail', 'Tea light', 'Wire for handle'],
        steps: [
          'Clean can thoroughly',
          'Draw pattern',
          'Create holes following pattern',
          'Sand edges',
          'Add wire handle',
          'Insert tea light'
        ],
        estimatedValue: '₹150-200'
      }
    ],
    'cardboard box': [
      {
        title: ' Mini drawer organizer',
        image: 'pictures/papercabinet.png',
        difficulty: 'Medium',
        time: '1 hours',
        materials: ['Thick paper or cardboard', 'Ruler and pencil', 'Scissors or craft knife', 'Glue or double-sided tape', 'Decorative paper or stickers', 'Small paper rolls or beads for handles'],
        steps: [
          'Measure and cut a rectangular piece for the outer covering (it should wrap around three drawers).',
          'Fold the edges to form a box shape.',
          'Cut three rectangular pieces to make the drawers.',
          'Fold and glue the sides to create a box-like shape.',
          'Use small rolled paper tubes or beads as handles.',
          'Glue them to the front center of each drawer.',
          'Cover the outer box and drawers with patterned paper.',
          'Add stickers or drawings for a cute aesthetic.',
          'Secure the edges of the outer covering to hold the drawers inside. Make sure the drawers can slide in and out smoothly.',
          'If making a multi-level organizer, glue multiple drawer units together.'
        ],
        estimatedValue: '₹200-300'
      }
    ],
    'glass jar': [
      {
        title: 'Terrarium',
        image: 'https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Easy',
        time: '30 minutes',
        materials: ['Glass jar', 'Small plants', 'Pebbles', 'Soil', 'Charcoal'],
        steps: [
          'Clean jar thoroughly',
          'Add layer of pebbles',
          'Add charcoal layer',
          'Add soil',
          'Plant succulents or moss',
          'Add decorative elements'
        ],
        estimatedValue: '₹150-250'
      }
    ],
    'wine bottle': [
      {
        title: 'Pendant Light',
        image: 'https://images.unsplash.com/photo-1550171362-78c9a56511c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Hard',
        time: '2 hours',
        materials: ['Wine bottle', 'Glass cutter', 'Sandpaper', 'Light fixture kit'],
        steps: [
          'Clean bottle',
          'Remove label',
          'Score with glass cutter',
          'Sand edges smooth',
          'Install light fixture',
          'Hang securely'
        ],
        estimatedValue: '₹400-600'
      }
    ],
    'old clothes': [
      {
        title: 'Tote Bag',
        image: 'https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Medium',
        time: '1.5 hours',
        materials: ['Old jeans/shirts', 'Scissors', 'Sewing machine', 'Thread'],
        steps: [
          'Cut fabric to size',
          'Sew sides together',
          'Create straps',
          'Attach straps',
          'Add pockets (optional)'
        ],
        estimatedValue: '₹200-300'
      }
    ],
    'wooden pallet': [
      {
        title: 'Coffee Table',
        image: 'https://images.unsplash.com/photo-1551503766-ac63dfa6401c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Hard',
        time: '3 hours',
        materials: ['Wooden pallet', 'Sandpaper', 'Wood stain', 'Wheels (optional)'],
        steps: [
          'Clean pallet',
          'Sand surfaces smooth',
          'Apply wood stain',
          'Add wheels if desired',
          'Seal surface'
        ],
        estimatedValue: '₹800-1200'
      }
    ],
    'tire': [
      {
        title: 'Garden Planter',
        image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Medium',
        time: '1 hour',
        materials: ['Old tire', 'Paint', 'Drill', 'Potting soil'],
        steps: [
          'Clean tire thoroughly',
          'Paint exterior',
          'Drill drainage holes',
          'Add soil',
          'Plant flowers or vegetables'
        ],
        estimatedValue: '₹300-400'
      }
    ],
    'egg carton': [
      {
        title: 'Seed Starter',
        image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Easy',
        time: '15 minutes',
        materials: ['Egg carton', 'Soil', 'Seeds', 'Spray bottle'],
        steps: [
          'Cut lid off carton',
          'Poke drainage holes',
          'Fill cups with soil',
          'Plant seeds',
          'Water gently',
          'Place in sunny spot'
        ],
        estimatedValue: '₹500-1000'
      }
    ]
  };

  // Search functionality
  function searchCraftIdeas(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    craftIdeasSection.classList.remove('hidden');
    ideasContainer.innerHTML = '';

    // Find matching ideas
    let found = false;
    for (const [item, ideas] of Object.entries(craftIdeas)) {
      if (item.includes(searchTerm)) {
        found = true;
        ideas.forEach(idea => {
          const ideaCard = createIdeaCard(idea);
          ideasContainer.appendChild(ideaCard);
        });
      }
    }

    if (!found) {
      ideasContainer.innerHTML = '<p class="no-results">No craft ideas found for this item. Try searching for something else!</p>';
    }
  }

  // Create idea card
  function createIdeaCard(idea) {
    const card = document.createElement('div');
    card.className = 'idea-card';
    
    card.innerHTML = `
      <img src="${idea.image}" alt="${idea.title}" class="idea-image">
      <div class="idea-content">
        <h3>${idea.title}</h3>
        <div class="idea-meta">
          <span>Difficulty: ${idea.difficulty}</span>
          <span>Time: ${idea.time}</span>
        </div>
        <div class="idea-materials">
          <h4>Materials Needed:</h4>
          <ul>
            ${idea.materials.map(material => `<li>${material}</li>`).join('')}
          </ul>
        </div>
        <div class="idea-steps">
          <h4>Steps:</h4>
          <ol>
            ${idea.steps.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
        <div class="idea-value">
          <p>Estimated Value: ${idea.estimatedValue}</p>
        </div>
        <a href="/marketplace.html" class="btn secondary-btn">Find Similar Items</a>
      </div>
    `;

    return card;
  }

  // Event listeners
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      searchCraftIdeas(searchInput.value);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchCraftIdeas(searchInput.value);
      }
    });
  }

  if (tagButtons) {
    tagButtons.forEach(button => {
      button.addEventListener('click', () => {
        const searchTerm = button.getAttribute('data-item');
        searchInput.value = searchTerm;
        searchCraftIdeas(searchTerm);
      });
    });
  }
});