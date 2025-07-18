(function () {
  'use strict';

  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSkin);
  } else {
    initializeSkin();
  }

  function initializeSkin() {
    try {
      console.log('URMS Skin: Initializing...');
      
      // Detect current page type
      const pageType = detectPageType();
      console.log('URMS Skin: Detected page type:', pageType);
      
      // Apply page-specific modifications
      switch (pageType) {
        case 'login':
          enhanceLoginPage();
          break;
        case 'dashboard':
          enhanceDashboardPage();
          break;
        case 'course-evaluation':
          enhanceCourseEvaluationPage();
          break;
        case 'schedule':
          enhanceSchedulePage();
          break;
        default:
          enhanceGenericPage();
      }
      
      // Add global enhancements
      addGlobalEnhancements();
      
      // Create toggle button
      createToggleButton();
      
      // Initially enable the skin
      document.documentElement.classList.add('urms-skin-enabled');
      
      console.log('URMS Skin: Initialization complete');
      
    } catch (error) {
      console.error('URMS Skin error during initialization:', error);
    }
  }

  function detectPageType() {
    const url = window.location.href;
    const bodyText = document.body.textContent.toLowerCase();
    
    if (bodyText.includes('please login') || bodyText.includes('studentid')) {
      return 'login';
    } else if (bodyText.includes('course evaluation submission')) {
      return 'course-evaluation';
    } else if (bodyText.includes('class schedule')) {
      return 'schedule';
    } else if (bodyText.includes('billing history') || bodyText.includes('current status')) {
      return 'dashboard';
    }
    
    return 'generic';
  }

  function enhanceLoginPage() {
    try {
      // Find the main table/container
      const tables = document.querySelectorAll('table');
      const mainTable = Array.from(tables).find(table => 
        table.textContent.includes('Please login')
      );
      
      if (mainTable) {
        mainTable.classList.add('login-container');
        
        // Inject icon, title, and subtitle if not already present
        if (!document.querySelector('.urms-login-visual')) {
          const visualDiv = document.createElement('div');
          visualDiv.className = 'urms-login-visual';
          visualDiv.innerHTML = `
            <div class="urms-login-icon"><span>→</span></div>
            <div class="urms-login-title">Sign in with email</div>
            <div class="urms-login-subtitle">Access your ULAB URMS account with your credentials.</div>
          `;
          mainTable.parentNode.insertBefore(visualDiv, mainTable);
        }
        
        // Find and enhance form elements
        const inputs = mainTable.querySelectorAll('input[type="text"], input[type="password"]');
        inputs.forEach(input => {
          input.classList.add('modern-input');
        });
        
        // Find and enhance buttons
        const buttons = mainTable.querySelectorAll('input[type="button"], input[type="submit"]');
        buttons.forEach(button => {
          button.classList.add('modern-button');
          button.value = 'Get Started';
        });
        
        // Align 'Forgot password?' right if present
        const forgot = Array.from(mainTable.querySelectorAll('a')).find(a => a.textContent.toLowerCase().includes('forgot'));
        if (forgot) {
          forgot.classList.add('urms-forgot-link');
        }
        
        // Add divider above the button if not present
        if (!mainTable.querySelector('.urms-login-divider')) {
          const divider = document.createElement('div');
          divider.className = 'urms-login-divider';
          divider.innerHTML = '<hr />';
          const btn = mainTable.querySelector('input[type="button"], input[type="submit"]');
          if (btn) btn.parentNode.insertBefore(divider, btn);
        }
      }
      
      console.log('URMS Skin: Login page enhanced');
    } catch (error) {
      console.error('URMS Skin: Error enhancing login page:', error);
    }
  }

  function enhanceDashboardPage() {
    try {
      // Add dashboard-specific classes
      const body = document.body;
      body.classList.add('dashboard-page');
      
      // Enhance navigation
      const navLinks = document.querySelectorAll('a');
      navLinks.forEach(link => {
        if (link.textContent.trim().match(/^(Home|Teacher Evaluation|Course Evaluation|Preregistration|Schedule|Billing|Result|Profile|Logout)$/)) {
          link.classList.add('nav-link');
        }
      });
      
      console.log('URMS Skin: Dashboard page enhanced');
    } catch (error) {
      console.error('URMS Skin: Error enhancing dashboard page:', error);
    }
  }

  function enhanceCourseEvaluationPage() {
    try {
      // Find and enhance tables
      const tables = document.querySelectorAll('table');
      tables.forEach(table => {
        if (table.querySelector('th')) {
          table.classList.add('modern-table');
        }
      });
      
      console.log('URMS Skin: Course evaluation page enhanced');
    } catch (error) {
      console.error('URMS Skin: Error enhancing course evaluation page:', error);
    }
  }

  function enhanceSchedulePage() {
    try {
      // Find and enhance schedule table
      const tables = document.querySelectorAll('table');
      tables.forEach(table => {
        if (table.textContent.includes('Course ID') || table.textContent.includes('Course Name')) {
          table.classList.add('schedule-table');
        }
      });
      
      console.log('URMS Skin: Schedule page enhanced');
    } catch (error) {
      console.error('URMS Skin: Error enhancing schedule page:', error);
    }
  }

  function enhanceGenericPage() {
    try {
      // Apply generic enhancements
      document.body.classList.add('generic-page');
      console.log('URMS Skin: Generic page enhanced');
    } catch (error) {
      console.error('URMS Skin: Error enhancing generic page:', error);
    }
  }

  function addGlobalEnhancements() {
    try {
      // Add a modern wrapper to the entire page
      if (!document.querySelector('.urms-modern-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'urms-modern-wrapper';
        
        // Move all body content into the wrapper
        while (document.body.firstChild) {
          wrapper.appendChild(document.body.firstChild);
        }
        
        document.body.appendChild(wrapper);
      }
      
      console.log('URMS Skin: Global enhancements applied');
    } catch (error) {
      console.error('URMS Skin: Error applying global enhancements:', error);
    }
  }

  function createToggleButton() {
    try {
      // Check if toggle button already exists
      if (document.querySelector('.urms-toggle-button')) {
        return;
      }
      
      const toggleButton = document.createElement('button');
      toggleButton.className = 'urms-toggle-button';
      toggleButton.textContent = '🎨';
      toggleButton.title = 'Toggle URMS Modern Skin';
      
      // Style the toggle button
      Object.assign(toggleButton.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        zIndex: '10000',
        boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
        transition: 'all 0.3s ease'
      });
      
      document.body.appendChild(toggleButton);
      
      let skinEnabled = true;
      toggleButton.addEventListener('click', () => {
        skinEnabled = !skinEnabled;
        if (skinEnabled) {
          document.documentElement.classList.add('urms-skin-enabled');
          toggleButton.style.backgroundColor = '#007BFF';
          toggleButton.textContent = '🎨';
        } else {
          document.documentElement.classList.remove('urms-skin-enabled');
          toggleButton.style.backgroundColor = '#6c757d';
          toggleButton.textContent = '📄';
        }
      });
      
      // Hover effects
      toggleButton.addEventListener('mouseenter', () => {
        toggleButton.style.transform = 'scale(1.1)';
      });
      
      toggleButton.addEventListener('mouseleave', () => {
        toggleButton.style.transform = 'scale(1)';
      });
      
      console.log('URMS Skin: Toggle button created');
    } catch (error) {
      console.error('URMS Skin: Error creating toggle button:', error);
    }
  }

  // Handle dynamic content changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // Re-apply enhancements if new content is added
        setTimeout(() => {
          if (document.documentElement.classList.contains('urms-skin-enabled')) {
            const pageType = detectPageType();
            switch (pageType) {
              case 'login':
                enhanceLoginPage();
                break;
              case 'dashboard':
                enhanceDashboardPage();
                break;
              case 'course-evaluation':
                enhanceCourseEvaluationPage();
                break;
              case 'schedule':
                enhanceSchedulePage();
                break;
            }
          }
        }, 100);
      }
    });
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

})();
