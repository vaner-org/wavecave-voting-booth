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
    
    let currentPage = 0;
    const answers = new Array(questions.length).fill(null);
    const container = document.getElementById('pagesContainer');
    
    function createPageElement(question, index) {
      const div = document.createElement('div');
      div.className = `page-container ${index === 0 ? 'active' : ''}`;
      
      let content = `
        <div class="main-container">
          <div class="top-bar">
            <button class="decorative-button settings-button"></button>
            <button class="decorative-button help-button"></button>
          </div>
          
          <div class="header">
            <div class="contest-number">Contest ${index + 1}/${questions.length}</div>
            <div class="category">${question.category}</div>
            <div class="title">${question.title}</div>
            <div class="vote-instructions">
              <span>${question.voteFor}</span>
              <span>Selections left: 1</span>
            </div>
          </div>`;

      if (question.type === "measure") {
        content += `<div class="measure-text">${question.measureText}</div>`;
      }
          
      content += `
          <div class="options-wrapper">
            <div class="options">
              ${question.options.map((option, optionIndex) => `
                <button class="option-button" onclick="selectOption(${index}, ${optionIndex})">
                  <div class="candidate-name">${option.name}</div>
                  ${option.description ? `<div class="candidate-description">${option.description}</div>` : ''}
                </button>
              `).join('')}
            </div>
          </div>
          
          <div class="navigation">
            <button class="nav-button" onclick="previousPage()">← Back</button>
            <button class="nav-button" onclick="nextPage()">Next →</button>
          </div>
        </div>
      `;
      
      div.innerHTML = content;
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
      if (currentPage < questions.length - 1) {
        const current = document.querySelectorAll('.page-container')[currentPage];
        const next = document.querySelectorAll('.page-container')[currentPage + 1];
        
        current.classList.remove('active');
        current.classList.add('previous');
        next.classList.add('active');
        
        currentPage++;
      }
    }
    
    // Initialize pages
    questions.forEach((question, index) => {
      container.appendChild(createPageElement(question, index));
    });