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
				type: "candidate",
				category: "CITY/LOCAL",
				title: "SANTA CLARITA COMMUNITY COLLEGE DISTRICT Member of the Board of Trustees, Trustee Area 2",
				voteFor: "Vote for ONE",
				options: [
					{
						name: "EDEL ALONSO",
						description: "Incumbent"
					},
					{
						name: "SCOTT SCHAUER",
						description: "Businessman/Foundation President"
					},
				]
			},
		{
				type: "candidate",
				category: "CITY/LOCAL",
				title: "STATE SENATOR, 23rd District",
				voteFor: "Vote for ONE",
				options: [
					{
						name: "SUZETTE MARTINEZ VALLADARES",
						description: "Party Preference: Republican\nSmall Business Owner"
					},
					{
						name: "KIPP MUELLER",
						description: "Party Preference: Democratic\nWorkers Rights Attorney"
					},
				]
			},  

			{
				type: "candidate",
				category: "CITY/LOCAL",
				title: "MEMBER OF THE STATE ASSEMBLY, 40th District",
				voteFor: "Vote for ONE",
				options: [
					{
						name: "PATRICK LEE GIPSON",
						description: "Party Preference: Republican\nRetired Deputy Sheriff"
					},
					{
						name: "PILAR SCHIAVO",
						description: "Party Preference: Democratic\nAssemblywoman"
					},
				]
			},  
			{
				type: "candidate",
				category: "CITY/LOCAL",
				title: "UNITED STATES REPRESENTATIVE, 27th District",
				voteFor: "Vote for ONE",
				options: [
					{
						name: "MIKE GARCIA",
						description: "Party Preference: Republican\nCongressman/Father"
					},
					{
						name: "GEORGE WHITESIDES",
						description: "Party Preference: Democratic\nAerospace Businessman/Father"
					},
				]
			},  
			{
				type: "candidate",
				category: "COUNTY",
				title: "DISTRICT ATTORNEY",
				voteFor: "Vote for ONE",
				options: [
					{
						name: "NATHAN HOCHMAN",
						description: "Criminal Law Attorney"
					},
					{
						name: "GEORGE GASCÓN",
						description: "District Attorney"
					},
				]
			}, 
			{
				type: "candidate",
				category: "COUNTY",
				title: "JUDGE OF THE SUPERIOR COURT Office No. 39",
				voteFor: "Vote for ONE",
				options: [
					{
						name: "GEORGE A. TURNER JR.",
						description: "Deputy Public Defender, County of Los Angeles"
					},
					{
						name: "STEVE NAPOLITANO",
						description: "Attorney/Councilmember, Manhattan Beach"
					},
				]
			}, 
			{
				type: "candidate",
				category: "COUNTY",
				title: "JUDGE OF THE SUPERIOR COURT Office No. 48",
				voteFor: "Vote for ONE",
				options: [
					{
						name: "RENEE ROSE",
						description: "Deputy District Attorney, County of Los Angeles"
					},
					{
						name: "ERICKA J. WILEY",
						description: "Deputy Public Defender, County of Los Angeles"
					},
				]
			}, 

			{
				type: "candidate",
				category: "COUNTY",
				title: "JUDGE OF THE SUPERIOR COURT Office No. 97",
				voteFor: "Vote for ONE",
				options: [
					{
						name: "LA SHAE HENDERSON",
						description: "Deputy Public Defender"
					},
					{
						name: "SHARON RANSOM",
						description: "Deputy District Attorney, County of Los Angeles"
					},
				]
			}, 

			{
				type: "candidate",
				category: "COUNTY",
				title: "JUDGE OF THE SUPERIOR COURT Office No. 135",
				voteFor: "Vote for ONE",
				options: [
					{
						name: "GEORGIA HUERTA",
						description: "Deputy District Attorney, County of Los Angeles"
					},
					{
						name: "STEVEN YEE MAC",
						description: "Deputy District Attorney, County of Los Angeles"
					},
				]
			}, 

			{
				type: "candidate",
				category: "COUNTY",
				title: "JUDGE OF THE SUPERIOR COURT Office 137",
				voteFor: "Vote for ONE",
				options: [
					{
						name: "LUZ E. HERRERA",
						description: "Attorney/Law Professor"
					},
					{
						name: "TRACEY M. BLOUNT",
						description: "Senior Deputy County Counsel, County of Los Angeles"
					},
				]
			}, 

						{
		type: "candidate",
		category: "NATIONAL ELECTION",
		title: "PRESIDENT AND VICE PRESIDENT",
		voteFor: "Vote for ONE",
		options: [
			{
				name: "ROBERT F. KENNEDY JR. / NICOLE SHANAHAN",
				description: "For President / For Vice President (American Independent)"
			},
			{
				name: "CHASE OLIVER / MIKE TER MAAT",
				description: "For President / For Vice President (Libertarian)"
			},
			{
				name: "JILL STEIN / RUDOLPH WARE",
				description: "For President / For Vice President (Green)"
			},
			{
				name: "DONALD J. TRUMP / JD VANCE",
				description: "For President / For Vice President (Republican)"
			},
			{
				name: "CLAUDIA DE LA CRUZ / KARINA GARCIA",
				description: "For President / For Vice President (Peace and Freedom)"
			},
			{
				name: "KAMALA D. HARRIS / TIM WALZ",
				description: "For President / For Vice President (Democratic)"
			}
		]
	},

			{
				type: "candidate",
				category: "NATIONAL ELECTION",
				title: "UNITED STATES SENATOR - Full Term",
				voteFor: "Vote for ONE",
				options: [
					{
						name: "ADAM B. SCHIFF",
						description: "Party Preference: Democratic\nUnited States Representative"
					},
					{
						name: "STEVE GARVEY",
						description: "Party Preference: Republican\nProfessional Baseball Representative"
					},
				]
			}, 

			{
				type: "candidate",
				category: "NATIONAL ELECTION",
				title: "UNITED STATES SENATOR - Short Term (Unexpired term ending January 3, 2025)",
				voteFor: "Vote for ONE",
				options: [
					{
						name: "ADAM B. SCHIFF",
						description: "Party Preference: Democratic\nUnited States Representative"
					},
					{
						name: "STEVE GARVEY",
						description: "Party Preference: Republican\nProfessional Baseball Representative"
					},
				]
			}, 
			{
				type: "measure",
				category: "CITY/LOCAL",
				title: "FIRE PROTECTION SPECIAL TAX MEASURE ELECTION - MEASURE E",
				voteFor: "Vote for YES or NO",
				measureText: "<strong>CONSOLIDATED FIRE PROTECTION DISTRICT OF LOS ANGELES COUNTY EMERGENCY RESPONSE AND INFRASTRUCTURE ORDINANCE.</strong> Shall an ordinance ensuring local firefighter/paramedic emergency response, involving wildfires, house fires, heart attacks, strokes, and car accidents; to hire/train firefighters/paramedics, upgrade/replace aging firefighter safety equipment, fire engines, helicopters, facilities, life-saving rescue tools, and 911 communications technology; by levying 6 cents per square foot of certain parcel improvements, providing $152 million annually, limited to 2% annual adjustment, until ended by voters, exempting low-income seniors, with independent citizens oversight, be adopted? <strong>Supporters:</strong> Firefighter Alexis Kendricks; AirOps Paramedic Johnny Gray; Assembly Mbr. Freddie Rodriguez; Firefighters IAFF Local 1014 <strong>Opponents:</strong> Howard Jarvis Taxpayers Association; Mike Antonovich, L.A. County Supervisor (ret.); Jack Humphreville",
				options: [
					{
						name: "YES on Measure E",
						description: ""
					},
					{
						name: "NO on Measure E",
						description: ""
					}
				]
			},

			{
				type: "measure",
				category: "COUNTY",
				title: "COUNTY MEASURE G",
				voteFor: "Vote for YES or NO",
				measureText: "<strong>PROPOSED COUNTY CHARTER AMENDMENT.</strong> LOS ANGELES COUNTY GOVERNMENT STRUCTURE, ETHICS AND ACCOUNTABILITY CHARTER AMENDMENT. Shall the measure amending the Los Angeles County Charter to create an elected County Executive; create an independent Ethics Commission to increase restrictions on lobbying and investigate misconduct; establish a nonpartisan Legislative Analyst to review proposed County policies; increase the Board of Supervisors from five to nine elected members; require County departments to present annual budgets in public meetings; using existing funding sources with no additional taxes to implement, as detailed in the charter amendment ordinance, be adopted? <strong>Supporters:</strong> None submitted. <strong>Opponents:</strong> LA County Firefighters & Sheriffs; Community Coalition; LA County Supervisors Kathryn Barger & Holly J. Mitchell",
				options: [
					{
						name: "YES on Measure G",
						description: ""
					},
					{
						name: "NO on Measure G",
						description: ""
					}
				]
			},

			{
				type: "measure",
				category: "COUNTY",
				title: "COUNTY MEASURE A",
				voteFor: "Vote for YES or NO",
				measureText: "<strong>HOMELESSNESS SERVICES AND AFFORDABLE HOUSING ORDINANCE.</strong> To require accountability and results, create affordable housing, support home ownership, provide rental assistance, increase mental health and addiction treatment, reduce and prevent homelessness; and provide services for children, families, veterans, domestic violence survivors, seniors, and disabled people experiencing homelessness; shall the measure repealing the Measure H tax and replacing it with a 1/2 cent sales tax, raising approximately $1,076,076,350 annually until voters decide to end it, with new audits and oversight, be adopted? <strong>Supporters:</strong> Women's & Children's Crisis Shelter; Habitat for Humanity of Greater Los Angeles; LA Family Housing. <strong>Opponents:</strong> Howard Jarvis Taxpayers Association; Mike Antonovich, L.A. County Supervisor (ret.); Jack Humphreville",
				options: [
					{
						name: "YES on Measure A",
						description: ""
					},
					{
						name: "NO on Measure A",
						description: ""
					}
				]
			},

			{
				type: "measure",
				category: "STATE",
				title: "STATE MEASURE 2",
				voteFor: "Vote for YES or NO",
				measureText: "<strong>AUTHORIZES BONDS FOR PUBLIC SCHOOL AND COMMUNITY COLLEGE FACILITIES. LEGISLATIVE STATUTE.</strong> Authorizes $10 billion in general obligation bonds for repair, upgrade, and construction of facilities at K-12 public schools (including charter schools), community colleges, and career technical education programs, including for improvement of health and safety conditions and classroom upgrades. Requires annual audits. <strong>Fiscal Impact:</strong> Increased state costs of about $500 million annually for 35 years to repay the bond. <strong>Supporters:</strong> California Teachers Association; California School Nurses Organization; Community College League of California <strong>Opponents:</strong> Howard Jarvis Taxpayers Association",
				options: [
					{
						name: "YES on Measure 2",
						description: ""
					},
					{
						name: "NO on Measure 2",
						description: ""
					}
				]
			},

			{
				type: "measure",
				category: "STATE",
				title: "STATE MEASURE 3",
				voteFor: "Vote for YES or NO",
				measureText: "<strong>CONSTITUTIONAL RIGHT TO MARRIAGE. LEGISLATIVE CONSTITUTIONAL AMENDMENT.</strong> Amends California Constitution to recognize fundamental right to marry, regardless of sex or race. Removes language in California Constitution stating that marriage is only between a man and a woman. <strong>Fiscal Impact:</strong> No change in revenues or costs for state and local governments.<strong>\nSupporters:</strong> Sierra Pacific Synod of The Evangelical Lutheran Church in America; Dolores Huerta Foundation; Equality California <strong>Opponents:</strong> Jonathan Keller, California Family Council; Rev. Tanner DiBella",
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
			},

			{
				type: "measure",
				category: "STATE",
				title: "STATE MEASURE 4",
				voteFor: "Vote for YES or NO",
				measureText: "<strong>AUTHORIZES BONDS FOR SAFE DRINKING WATER, WILDFIRE PREVENTION, AND PROTECTING COMMUNITIES AND NATURAL LANDS FROM CLIMATE RISKS. LEGISLATIVE STATUTE.</strong> Authorizes $10 billion in general obligation bonds for water, wildfire prevention, and protection of communities and lands. Requires annual audits. <strong>Fiscal Impact:</strong> Increased state costs of about $400 million annually for 40 years to repay the bond. <strong>Supporters:</strong> Clean Water Action; CALFIRE Firefighters; National Wildlife Federation; The Nature Conservancy <strong>Opponents:</strong> Howard Jarvis Taxpayers Association",
				options: [
					{
						name: "YES on Measure 4",
						description: ""
					},
					{
						name: "NO on Measure 4",
						description: ""
					}
				]
			},

			{
				type: "measure",
				category: "STATE",
				title: "STATE MEASURE 5",
				voteFor: "Vote for YES or NO",
				measureText: "<strong>ALLOWS LOCAL BONDS FOR AFFORDABLE HOUSING AND PUBLIC INFRASTRUCTURE WITH 55% VOTER APPROVAL. LEGISLATIVE CONSTITUTIONAL AMENDMENT.</strong> Allows approval of local infrastructure and housing bonds for low- and middle-income Californians with 55% vote. Accountability requirements. <strong>Fiscal Impact:</strong> Increased local borrowing to fund affordable housing, supportive housing, and public infrastructure. The amount would depend on decisions by local governments and voters. Borrowing would be repaid with higher property taxes. <strong>Supporters:</strong> California Professional Firefighters; League of Women Voters of California; Habitat for Humanity California <strong>Opponents:</strong> California Taxpayers Association; California Hispanic Chambers of Commerce; Women Veterans Alliance",
				options: [
					{
						name: "YES on Measure 5",
						description: ""
					},
					{
						name: "NO on Measure 5",
						description: ""
					}
				]
			},

			{
				type: "measure",
				category: "STATE",
				title: "STATE MEASURE 6",
				voteFor: "Vote for YES or NO",
				measureText: "<strong>ELIMINATES CONSTITUTIONAL PROVISION ALLOWING INVOLUNTARY SERVITUDE FOR INCARCERATED PERSONS. LEGISLATIVE CONSTITUTIONAL AMENDMENT.</strong> Amends the California Constitution to remove current provision that allows jails and prisons to impose involuntary servitude to punish crime (i.e., forcing incarcerated persons to work). <strong>Fiscal Impact:</strong> Potential increase or decrease in state and local costs, depending on how work for people in state prison and county jail changes. Any effect likely would not exceed the tens of millions of dollars annually. <strong>Supporters:</strong> Assemblymember Lori Wilson <strong>Opponents:</strong> None submitted.",
				options: [
					{
						name: "YES on Measure 6",
						description: ""
					},
					{
						name: "NO on Measure 6",
						description: ""
					}
				]
			},

			{
				type: "measure",
				category: "STATE",
				title: "STATE MEASURE 32",
				voteFor: "Vote for YES or NO",
				measureText: "<strong>RAISES MINIMUM WAGE. INITIATIVE STATUTE.</strong> Raises minimum wage as follows: For employers with 26 or more employees, to $17 immediately, $18 on January 1, 2025. For employers with 25 or fewer employees, $17 on January 1, 2025, $18 on January 1, 2026. <strong>Fiscal Impact:</strong> State and local government costs could increase or decrease by up to hundreds of millions of dollars annually. State and local revenues likely would decrease by no more than a few hundred million dollars annually. <strong>Supporters:</strong> None submitted. <strong>Opponents:</strong> California Chamber of Commerce; California Restaurant Association; California Grocers Association",
				options: [
					{
						name: "YES on Measure 32",
						description: ""
					},
					{
						name: "NO on Measure 32",
						description: ""
					}
				]
			},

			{
				type: "measure",
				category: "STATE",
				title: "STATE MEASURE 33",
				voteFor: "Vote for YES or NO",
				measureText: "<strong>EXPANDS LOCAL GOVERNMENTS' AUTHORITY TO ENACT RENT CONTROL ON RESIDENTIAL PROPERTY. INITIATIVE STATUTE.</strong> Repeals Costa-Hawkins Rental Housing Act of 1995, which currently prohibits local ordinances limiting initial residential rental rates for new tenants or rent increases for existing tenants in certain residential properties. <strong>Fiscal Impact:</strong> Reduction in local property tax revenues of at least tens of millions of dollars annually due to likely expansion of rent control in some communities. <strong>Supporters:</strong> CA Nurses Assoc.; CA Alliance for Retired Americans; Mental Health Advocacy; Coalition for Economic Survival; TenantsTogether <strong>Opponents:</strong> California Council for Affordable Housing; Women Veterans Alliance; California Chamber of Commerce",
				options: [
					{
						name: "YES on Measure 33",
						description: ""
					},
					{
						name: "NO on Measure 33",
						description: ""
					}
				]
			},

			{
				type: "measure",
				category: "STATE",
				title: "STATE MEASURE 34",
				voteFor: "Vote for YES or NO",
				measureText: "<strong>RESTRICTS SPENDING OF PRESCRIPTION DRUG REVENUES BY CERTAIN HEALTH CARE PROVIDERS. INITIATIVE STATUTE.</strong> Requires certain providers to spend 98% of revenues from federal discount prescription drug program on direct patient care. Authorizes statewide negotiation of Medi-Cal drug prices. <strong>Fiscal Impact:</strong> Increased state costs, likely in the millions of dollars annually, to enforce new rules on certain health care entities. Affected entities would pay fees to cover these costs. <strong>Supporters:</strong> The ALS Association; California Chronic Care Coalition; Latino Heritage Los Angeles <strong>Opponents:</strong> National Org. for Women; Consumer Watchdog; Coalition for Economic Survival; AIDS Healthcare Foundation; Dolores Huerta",
				options: [
					{
						name: "YES on Measure 34",
						description: ""
					},
					{
						name: "NO on Measure 34",
						description: ""
					}
				]
			},

			{
				type: "measure",
				category: "STATE",
				title: "STATE MEASURE 35",
				voteFor: "Vote for YES or NO",
				measureText: "<strong>PROVIDES PERMANENT FUNDING FOR MEDI-CAL HEALTH CARE SERVICES. INITIATIVE STATUTE.</strong> Makes permanent the existing tax on managed health care insurance plans, which, if approved by the federal government, provides revenues to pay for Medi-Cal health care services. <strong>Fiscal Impact:</strong> Short-term state costs between roughly $1 billion and $2 billion annually to increase funding for certain health programs. Total funding increase between roughly $2 billion to $5 billion annually. Unknown long-term fiscal effects. <strong>Supporters:</strong> Planned Parenthood Affiliates of CA; American College of Obstetricians & Gynecologists; American Academy of Pediatrics, CA <strong>Opponents:</strong> None submitted.",
				options: [
					{
						name: "YES on Measure 35",
						description: ""
					},
					{
						name: "NO on Measure 35",
						description: ""
					}
				]
			},

			{
				type: "measure",
				category: "STATE",
				title: "STATE MEASURE 36",
				voteFor: "Vote for YES or NO",
				measureText: "<strong>ALLOWS FELONY CHARGES AND INCREASES SENTENCES FOR CERTAIN DRUG AND THEFT CRIMES. INITIATIVE STATUTE.</strong> Allows felony charges for possessing certain drugs and for thefts under $950, if defendant has two prior drug or theft convictions. <strong>Fiscal Impact:</strong> State criminal justice costs likely ranging from several tens of millions of dollars to the low hundreds of millions of dollars annually. Local criminal justice costs likely in the tens of millions of dollars annually. <strong>Supporters:</strong> Crime Victims United of California; California District Attorneys Association; Family Business Association of California <strong>Opponents:</strong> Diana Becton, District Attorney Contra Costa County; Crime Survivors for Safety and Justice",
				options: [
					{
						name: "YES on Measure 36",
						description: ""
					},
					{
						name: "NO on Measure 36",
						description: ""
					}
				]
			},

		];

		// Add to existing state management
		const selections = {};
		let hasVisitedReviewPage = false;

		const allPages = [...welcomeSequence, ...questions];
		let currentPage = 0;
		const answers = new Array(allPages.length).fill(null);
		const container = document.getElementById('pagesContainer');

		function createPageElement(page, index) {
    const div = document.createElement('div');
    div.className = `page-container ${index === 0 ? 'active' : ''}`;

    // Create a standardized top bar HTML
    const topBarHtml = `
        <div class="top-bar">
            <button class="top-bar-button">
                <img src="./settings.svg" width="20" height="20" alt="Settings icon">
                Settings
            </button>
            <button class="top-bar-button">
                <img src="./help.svg" width="20" height="20" alt="Help icon">
                Help
            </button>
        </div>`;

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
            ${topBarHtml}
            <div class="get-started-container">
                <h1>${page.content.title}</h1>
                <div class="options-wrapper get-started">
                    <div class="options">
                        <button class="start-button-container" onclick="nextPage()">
                            <span>${page.content.buttonText}</span>
                            <img src="./tap.svg" alt="Touch icon">
                        </button>
                    </div>
                </div>
            </div>
            <div class="navigation">
                <button class="nav-button" onclick="nextPage()">Start →</button>
            </div>
        </div>
    `;
    break;

        case "instruction":
            div.innerHTML = `
                <div class="main-container">
                    ${topBarHtml}
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

            
        		${topBarHtml}
            

            <div class="header">

                <div class="contest-number">Contest ${index + 1 - welcomeSequence.length}/${questions.length}</div>

                <div class="category">${page.category}</div>

                <div class="title">${page.title}</div>

                <div class="vote-instructions">

                    <span>${page.voteFor.replace(/YES/g, '<strong>YES</strong>').replace(/NO/g, '<strong>NO</strong>').replace(/ONE/g, '<strong>ONE</strong>')}</span>

                    <span>Selections left: 1</span>

                </div>

            </div>

            

            <div class="content-wrapper">

                <div class="options-wrapper">

                    <div class="options">

                        ${page.options.map((option, optionIndex) => {

                            if (page.title.includes("PRESIDENT AND VICE PRESIDENT")) {

                                const [president, vicePresident] = option.name.split(" / ");

                                const party = option.description.split(" (").pop().replace(")", "");

                                return `

                                    <button class="option-button presidential-ticket" onclick="selectOption(${index}, ${optionIndex})">

                                        <div class="candidate-name">${president}</div>

                                        <div class="candidate-role">For President</div>

                                        <div class="candidate-name">${vicePresident}</div>

                                        <div class="candidate-role">For Vice President</div>

                                        <div class="party-affiliation">${party}</div>

                                    </button>

                                `;

                            } else {

                                return `

                                    <button class="option-button" onclick="selectOption(${index}, ${optionIndex})">

                                        <div class="candidate-name">${option.name}</div>

                                        ${option.description ? `<div class="candidate-description">${option.description}</div>` : ''}

                                    </button>

                                `;

                            }

                        }).join('')}

                        ${page.type === "candidate" ? `

                            <div class="write-in-option">

                                <div class="candidate-name">Write-in candidate</div>

                            </div>

                        ` : ''}

                    </div>

                </div>

                ${page.type === "measure" ? `<div class="measure-text">${page.measureText}</div>` : ''}

            </div>

            

            <div class="navigation">

                <button class="nav-button" onclick="previousPage()">← Back</button>

                <button class="nav-button" onclick="nextPage()">Next →</button>

            </div>

        </div>

    `;

    break;


        case "review":
            div.innerHTML = `
                <div class="main-container">
                    ${topBarHtml}
                    <div class="review-page">
                        <h1>${page.content.title}</h1>
                        <h2>${page.content.subtitle}</h2>
                        <div id="reviewList" class="review-list"></div>
                    </div>
                    <div class="navigation">
                        <button class="nav-button" onclick="previousPage()">← Back</button>
                        <button class="nav-button" onclick="nextPage()">Next →</button>
                    </div>
                </div>
            `;
            break;

        case "print-confirmation":
    div.innerHTML = `
        <div class="main-container print-confirmation-page">
            ${topBarHtml}
            <div class="get-started-container">
                <h1>${page.content.title}</h1>
                <h2>${page.content.subtitle}</h2>
                <div class="options-wrapper get-started">
                    <div class="options">
                        <button class="start-button-container" onclick="submitBallot()">
                            <span>${page.content.buttonText}</span>
                            <img src="./tap.svg" alt="Touch icon">
                        </button>
                    </div>
                </div>
            </div>
            <div class="navigation">
                <button class="nav-button" onclick="previousPage()">← Back</button>
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
	const page = allPages[pageIndex];
	
	options.forEach((option, i) => {
		if (i === optionIndex) {
			option.classList.toggle('selected');
			if (option.classList.contains('selected')) {
				selections[pageIndex] = {
					contestNumber: pageIndex - welcomeSequence.length,
					category: page.category,
					title: page.title,
					selection: page.options[optionIndex].name,
					pageIndex: pageIndex
				};
			} else {
				delete selections[pageIndex];
			}
		} else {
			option.classList.remove('selected');
		}
	});
}

// Modified reviewPage definition to change the Print button to Next
const reviewPage = {
    type: "review",
    content: {
        title: "Review Your Selections",
        subtitle: "Check your selections before submitting your ballot"
    }
};

// Add new confirmation page
const confirmationPage = {
    type: "print-confirmation",
    content: {
        title: "Ready to Print?",
        subtitle: "This is your last chance to go back and make any changes",
        buttonText: "Yes - I am ready to print"
    }
};

// Update allPages array to include the confirmation page
allPages.push(reviewPage, confirmationPage);

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

		function updateReviewPage() {
	const reviewList = document.getElementById('reviewList');
	if (!reviewList) return;

	reviewList.innerHTML = '';
	const contestCount = questions.length;
	const selectedCount = Object.keys(selections).length;

	reviewList.innerHTML = `
		<div class="review-summary">
			<p>You have made selections for ${selectedCount} out of ${contestCount} contests</p>
		</div>
	`;

	Object.values(selections)
		.sort((a, b) => a.contestNumber - b.contestNumber)
		.forEach(selection => {
			const reviewItem = document.createElement('div');
			reviewItem.className = 'review-item';
			reviewItem.innerHTML = `
				<div class="review-contest">
					<div class="review-contest-header">
						<span class="review-contest-number">Contest ${selection.contestNumber}</span>
						<span class="review-category">${selection.category}</span>
					</div>
					<div class="review-title">${selection.title}</div>
					<div class="review-selection">${selection.selection}</div>
				</div>
				<button class="change-selection-button" onclick="goToContest(${selection.pageIndex})">
					Change
				</button>
			`;
			reviewList.appendChild(reviewItem);
		});
}

// Function to navigate to a specific contest
function goToContest(pageIndex) {
	const pages = document.querySelectorAll('.page-container');
	pages.forEach(page => {
		page.classList.remove('active', 'previous');
	});
	
	pages[pageIndex].classList.add('active');
	currentPage = pageIndex;
}

// Modified nextPage function to update review page
function nextPage() {
	if (currentPage < allPages.length - 1) {
		const current = document.querySelectorAll('.page-container')[currentPage];
		const next = document.querySelectorAll('.page-container')[currentPage + 1];
		
		current.classList.remove('active');
		current.classList.add('previous');
		next.classList.add('active');
		
		currentPage++;
		
		if (allPages[currentPage].type === 'review') {
			updateReviewPage();
		}
	}
}
function createBallotSummaryElement() {
    const div = document.createElement('div');
    div.className = 'ballot-summary-page';
    div.style.display = 'none';
    
    div.innerHTML = `
        <div class="ballot-grid">
            <div class="ballot-column ballot-info">
                <div class="black-line"></div>
                <div class="ballot-year">2024</div>
                <div class="ballot-date">November 5</div>
                <div class="county-seal">
                    <img src="california.png" alt="County Seal" />
                </div>
                <div class="ballot-county">County of Los Angeles</div>
                <div class="black-line"></div>
                <div class="ballot-qr">
                    <img src="qr.svg" alt="QR Code" />
                </div>
            </div>
            
            <div class="selections-container">
                <div class="main-title">General Election</div>
                <div class="selections-columns">
                    <div class="ballot-column selections-column">
                        <div class="selections-list" id="column1"></div>
                    </div>
                    
                    <div class="ballot-column selections-column">
                        <div class="selections-list" id="column2"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return div;
}
// Function to update the ballot summary with selections
function updateBallotSummary() {
    const selectedContests = Object.values(selections)
        .sort((a, b) => a.contestNumber - b.contestNumber);
    
    const column1 = document.getElementById('column1');
    const column2 = document.getElementById('column2');
    column1.innerHTML = '';
    column2.innerHTML = '';
    
    // Calculate the midpoint for two columns
    const midpoint = Math.ceil(selectedContests.length / 2);
    
    // Fill first column
    selectedContests.slice(0, midpoint).forEach(contest => {
        const contestElement = document.createElement('div');
        contestElement.className = 'ballot-contest';
        contestElement.innerHTML = `
            <div class="contest-title">${contest.title}</div>
            <div class="contest-selection">${contest.selection}</div>
        `;
        column1.appendChild(contestElement);
    });
    
    // Fill second column
    selectedContests.slice(midpoint).forEach(contest => {
        const contestElement = document.createElement('div');
        contestElement.className = 'ballot-contest';
        contestElement.innerHTML = `
            <div class="contest-title">${contest.title}</div>
            <div class="contest-selection">${contest.selection}</div>
        `;
        column2.appendChild(contestElement);
    });
}

// Modify the existing submitBallot function
function submitBallot() {
    // Hide the review page
    document.querySelector('.review-page').style.display = 'none';
    
    // Show and update the ballot summary
    const ballotSummary = document.querySelector('.ballot-summary-page') || 
        document.body.appendChild(createBallotSummaryElement());
    ballotSummary.style.display = 'block';
    updateBallotSummary();
    
    // Add timestamp
    const timestamp = new Date().toLocaleString();
    ballotSummary.setAttribute('data-print-time', timestamp);
    
    // Trigger print
    setTimeout(() => {
        window.print();
        // Hide ballot summary and show review page after printing
        ballotSummary.style.display = 'none';
        document.querySelector('.review-page').style.display = 'block';
    }, 100);
}
		// Initialize pages
		allPages.forEach((page, index) => {
			container.appendChild(createPageElement(page, index));
		});