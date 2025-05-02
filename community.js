document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const showcaseCards = document.querySelectorAll('.showcase-card');
  const viewProjectButtons = document.querySelectorAll('.showcase-card .btn');
  const joinChallengeButton = document.querySelector('.challenge-card .primary-btn');
  const getNotifiedButton = document.querySelector('.challenge-card .secondary-btn');
  const registerButtons = document.querySelectorAll('.workshop-card .btn');
  const joinNowButton = document.querySelector('.join-community .btn');
  
  // Add event listeners to showcase cards
  if (showcaseCards.length > 0) {
    showcaseCards.forEach(card => {
      // Add hover effect
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      });
    });
  }
  
  // View project buttons
  if (viewProjectButtons.length > 0) {
    viewProjectButtons.forEach(button => {
      button.addEventListener('click', function() {
        const projectTitle = this.closest('.showcase-card').querySelector('h4').textContent;
        alert(`In a complete application, this would open the detailed view for "${projectTitle}"`);
      });
    });
  }
  
  // Join challenge button
  if (joinChallengeButton) {
    joinChallengeButton.addEventListener('click', function() {
      const challengeTitle = this.closest('.challenge-card').querySelector('h3').textContent;
      alert(`In a complete application, this would register you for the "${challengeTitle}" challenge.`);
    });
  }
  
  // Get notified button
  if (getNotifiedButton) {
    getNotifiedButton.addEventListener('click', function() {
      const challengeTitle = this.closest('.challenge-card').querySelector('h3').textContent;
      alert(`You will be notified when the "${challengeTitle}" challenge begins.`);
    });
  }
  
  // Workshop registration buttons
  if (registerButtons.length > 0) {
    registerButtons.forEach(button => {
      button.addEventListener('click', function() {
        const workshopTitle = this.closest('.workshop-card').querySelector('h3').textContent;
        const workshopDate = this.closest('.workshop-card').querySelector('.workshop-date').textContent;
        alert(`In a complete application, this would register you for the "${workshopTitle}" on ${workshopDate}.`);
      });
    });
  }
  
  // Join community button
  if (joinNowButton) {
    joinNowButton.addEventListener('click', function() {
      alert('In a complete application, this would take you to a registration page to join the community.');
    });
  }
  
  // Like and comment functionality (simulated)
  const likeElements = document.querySelectorAll('.likes');
  if (likeElements.length > 0) {
    likeElements.forEach(element => {
      element.addEventListener('click', function() {
        const currentLikes = parseInt(this.textContent.match(/\d+/)[0]);
        this.textContent = `❤️ ${currentLikes + 1} likes`;
        this.style.color = '#F44336'; // Red color for liked
      });
    });
  }
  
  // Comment elements
  const commentElements = document.querySelectorAll('.comments');
  if (commentElements.length > 0) {
    commentElements.forEach(element => {
      element.addEventListener('click', function() {
        const projectTitle = this.closest('.showcase-card').querySelector('h4').textContent;
        alert(`In a complete application, this would open the comments section for "${projectTitle}"`);
      });
    });
  }
  
  // Challenge countdown timer (simulated)
  const challengeTimeElement = document.querySelector('.challenge-time');
  if (challengeTimeElement && challengeTimeElement.textContent.includes('Ends in')) {
    // Update the countdown every day (in a real app, this would be more precise)
    let daysLeft = parseInt(challengeTimeElement.textContent.match(/\d+/)[0]);
    
    // Simulate countdown (in a real app, this would use actual dates)
    const updateCountdown = () => {
      if (daysLeft > 0) {
        daysLeft--;
        challengeTimeElement.textContent = `Ends in ${daysLeft} days`;
        
        if (daysLeft === 0) {
          challengeTimeElement.textContent = 'Ends today!';
          challengeTimeElement.style.color = '#F44336'; // Red for urgency
        }
      }
    };
    
    // For demo purposes, update every 10 seconds instead of every day
    setInterval(updateCountdown, 10000);
  }
  
  // Featured projects rotation (simulated)
  const showcaseGrid = document.querySelector('.showcase-grid');
  if (showcaseGrid && showcaseGrid.children.length > 0) {
    // In a real app, this would fetch new projects from an API
    const rotateProjects = () => {
      // Simulate new project by changing the order
      const firstCard = showcaseGrid.children[0];
      showcaseGrid.appendChild(firstCard);
    };
    
    // Rotate projects every 30 seconds
    setInterval(rotateProjects, 30000);
  }
});