// Tools Page Specific JavaScript

// Tool modal functionality
function openTool(toolId) {
    const modal = document.getElementById('toolModal');
    const modalTitle = document.getElementById('modalTitle');
    
    // Set tool name based on ID
    const toolNames = {
        'quick-explain': 'Geopolitics Explained in 3 Minutes',
        'summary-generator': 'Geopolitics Summary Generator',
        'concept-explorer': 'Concept Explorer',
        'case-studies': 'Case Study Library',
        'economic-impact': 'Economic Impact Explainer',
        'inflation-calc': 'Inflation Impact Calculator',
        'trade-flow': 'Trade Flow Analyzer',
        'sanctions-tracker': 'Sanctions Impact Tracker',
        'oil-prices': 'War Impact on Oil Prices Tool',
        'commodity-monitor': 'Commodity Shock Monitor',
        'currency-risk': 'Currency Risk Assessor',
        'volatility-predictor': 'Market Volatility Predictor',
        'conflict-map': 'Global Conflict Risk Map',
        'country-risk': 'Country Risk Level Tool',
        'trade-routes': 'Global Trade Route Map',
        'alliance-db': 'Alliance & Treaty Database',
        'sentiment-analyzer': 'News Sentiment Analyzer',
        'data-exporter': 'Research Data Exporter'
    };
    
    if (modalTitle && toolNames[toolId]) {
        modalTitle.textContent = toolNames[toolId];
    }
    
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('toolModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('toolModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Category tabs active state management
document.addEventListener('DOMContentLoaded', function() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const categorySections = document.querySelectorAll('.tools-category');
    
    // Update active tab on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 200;
        
        categorySections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                categoryTabs.forEach(tab => {
                    tab.classList.remove('active');
                    if (tab.getAttribute('href') === '#' + sectionId) {
                        tab.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Animate sections on scroll
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    categorySections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Handle hash links from homepage
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
});

// Add hover effects to tool cards
document.addEventListener('DOMContentLoaded', function() {
    const toolCards = document.querySelectorAll('.tool-card.detailed');
    
    toolCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

console.log('Tools page initialized successfully.');
