// Welcome sequence pages
    const welcomeSequence = [
      {
        type: "welcome",
        content: {
          title: "Welcome to the November 6, 2024, VSAP",
          subtitle: "PRESIDENTIAL ELECTION",
          year: "2024",
          startText: "Touch the circle to start",
          startTextSpanish: "Toque el círculo para empezar"
        }
      },
      {
        type: "get-started",
        content: {
          title: "Let's get started",
          buttonText: "I want to start voting"
        }
      },
      {
        type: "instruction",
        content: {
          title: "Make your selections",
          mainText: "There are 28 contests on today's ballot",
          subText: "When you reach the end, you will be able to review your selections."
        }
      }
    ];

    // Voting questions
    const questions = [
      {
        type: "candidate",
        category: "CITY/LOCAL",
        title: "WILLIAM S. HART UNION HIGH SCHOOL DISTRICT Governing Board Member, Trustee Area No. 1",
        voteFor: "Vote for ONE",
        options: [
          {
            name: "GLORIA MERCADO-FORTINE",
            description: "Educator/Small Businessowner"
          },
          {
            name: "AAKASH AHUJA",
            description: "Father/Psychiatrist/Educator"
          },
          {
            name: "LINDA HOVIS STORLI",
            description: "Governing Board Member, William S. Hart Union High School District, Trustee Area 1"
          }
        ]
      },
      {
        type: "measure",
        category: "STATE",
        title: "STATE MEASURE 3",
        voteFor: "Vote for YES or NO",
        measureText: "CONSTITUTIONAL RIGHT TO MARRIAGE. LEGISLATIVE CONSTITUTIONAL AMENDMENT. Amends California Constitution to recognize fundamental right to marry, regardless of sex or race. Removes language in California Constitution stating that marriage is only between a man and a woman. Fiscal Impact: No change in revenues or costs for state and local governments.\n\nSupporters: Sierra Pacific Synod of The Evangelical Lutheran Church in America; Dolores Huerta Foundation; Equality California Opponents: Jonathan Keller, California Family Council; Rev. Tanner DiBella",
        options: [
          {
            name: "YES on Measure 3",
            description: ""
          },
          {
            name: "NO on Measure 3",
            description: ""
          }
        ]
      }
    ];

    const allPages = [...welcomeSequence, ...questions];
    let currentPage = 0;
    const answers = new Array(allPages.length).fill(null);
    const container = document.getElementById('pagesContainer');

    function createPageElement(page, index) {
      const div = document.createElement('div');
      div.className = `page-container ${index === 0 ? 'active' : ''}`;

      switch(page.type) {
        case "welcome":
          div.innerHTML = `
            <div class="welcome-page">
              <div class="welcome-content">
                <div class="welcome-header">
                  <h1>${page.content.title}</h1>
                  <h2>${page.content.subtitle}</h2>
                </div>
                <div class="welcome-year">${page.content.year}</div>
                <div>
                  <button class="start-circle" onclick="nextPage()"></button>
                  <p>${page.content.startText}</p>
                  <p>${page.content.startTextSpanish}</p>
                </div>
                <div class="headphones-icon">🎧</div>
                <p>For audio, please put on the headphones</p>
              </div>
            </div>
          `;
          break;

        case "get-started":
          div.innerHTML = `
            <div class="main-container">
              <div class="top-bar">
                <button class="top-bar-button">
                  <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 6V12M12 12V18M12 12H18M12 12H6' stroke='%23666666' stroke-width='2'/%3E%3C/svg%3E">
                  Settings
                </button>
                <button class="top-bar-button">
                  <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='%23666666' stroke-width='2'/%3E%3Cpath d='M12 16V12M12 8H12.01' stroke='%23666666' stroke-width='2'/%3E%3C/svg%3E">
                  Help
                </button>
              </div>
              
              <div class="get-started-container">
                <h1>${page.content.title}</h1>
                <div class="start-button-container" onclick="nextPage()">
                  ${page.content.buttonText}
                  <img class="touch-icon" src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 12H12M12 12H16M12 12V8M12 12V16' stroke='%23000000' stroke-width='2'/%3E%3C/svg%3E">
                </div>
              </div>
              
              <div class="navigation">
                <button class="nav-button single-nav-button" onclick="nextPage()">Start →</button>
              </div>
            </div>
          `;
          break;

        case "instruction":
          div.innerHTML = `
            <div class="main-container">
              <div class="top-bar">
                <button class="top-bar-button">
                  <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 6V12M12 12V18M12 12H18M12 12H6' stroke='%23666666' stroke-width='2'/%3E%3C/svg%3E">
                  Settings
                </button>
                <button class="top-bar-button">
                  <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='%23666666' stroke-width='2'/%3E%3Cpath d='M12 16V12M12 8H12.01' stroke='%23666666' stroke-width='2'/%3E%3C/svg%3E">
                  Help
                </button>
              </div>
              
              <div class="instruction-page">
                <h1 class="instruction-title">${page.content.title}</h1>
                <p class="instruction-text">${page.content.mainText}</p>
                <p class="instruction-text">${page.content.subText}</p>
              </div>
              
              <div class="navigation">
                <button class="nav-button" onclick="previousPage()">← Back</button>
                <button class="nav-button" onclick="nextPage()">Next →</button>
              </div>
            </div>
          `;
          break;
          case "candidate":
        case "measure":
          div.innerHTML = `
            <div class="main-container">
              <div class="top-bar">
                <button class="top-bar-button">
                  <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 6V12M12 12V18M12 12H18M12 12H6' stroke='%23666666' stroke-width='2'/%3E%3C/svg%3E">
                  Settings
                </button>
                <button class="top-bar-button">
                  <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='%23666666' stroke-width='2'/%3E%3Cpath d='M12 16V12M12 8H12.01' stroke='%23666666' stroke-width='2'/%3E%3C/svg%3E">
                  Help
                </button>
              </div>
              
              <div class="header">
                <div class="contest-number">Contest ${index + 1 - welcomeSequence.length}/${questions.length}</div>
                <div class="category">${page.category}</div>
                <div class="title">${page.title}</div>
                <div class="vote-instructions">
                  <span>${page.voteFor}</span>
                  <span>Selections left: 1</span>
                </div>
              </div>
              
              ${page.type === "measure" ? `<div class="measure-text">${page.measureText}</div>` : ''}
              
              <div class="options-wrapper">
                <div class="options">
                  ${page.options.map((option, optionIndex) => `
                    <button class="option-button" onclick="selectOption(${index}, ${optionIndex})">
                      <div class="candidate-name">${option.name}</div>
                      ${option.description ? `<div class="candidate-description">${option.description}</div>` : ''}
                    </button>
                  `).join('')}
                  ${page.type === "candidate" ? `
                    <div class="write-in-option">
                      <div class="candidate-name">Write-in candidate</div>
                    </div>
                  ` : ''}
                </div>
              </div>
              
              <div class="navigation">
                <button class="nav-button" onclick="previousPage()">← Back</button>
                <button class="nav-button" onclick="nextPage()">Next →</button>
              </div>
            </div>
          `;
          break;
      }
      
      return div;
    }

    function selectOption(pageIndex, optionIndex) {
      const pageContainer = document.querySelectorAll('.page-container')[pageIndex];
      const options = pageContainer.querySelectorAll('.option-button');
      
      options.forEach((option, i) => {
        if (i === optionIndex) {
          option.classList.toggle('selected');
          answers[pageIndex] = option.classList.contains('selected') ? optionIndex : null;
        } else {
          option.classList.remove('selected');
        }
      });
    }

    function previousPage() {
      if (currentPage > 0) {
        const current = document.querySelectorAll('.page-container')[currentPage];
        const previous = document.querySelectorAll('.page-container')[currentPage - 1];
        
        current.classList.remove('active');
        previous.classList.remove('previous');
        previous.classList.add('active');
        
        currentPage--;
      }
    }

    function nextPage() {
      if (currentPage < allPages.length - 1) {
        const current = document.querySelectorAll('.page-container')[currentPage];
        const next = document.querySelectorAll('.page-container')[currentPage + 1];
        
        current.classList.remove('active');
        current.classList.add('previous');
        next.classList.add('active');
        
        currentPage++;
      }
    }

    // Initialize pages
    allPages.forEach((page, index) => {
      container.appendChild(createPageElement(page, index));
    });