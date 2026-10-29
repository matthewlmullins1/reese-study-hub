// Study hub data. To add a test: push an entry to UNITS and add CONTENT[id].
// UNITS: {id, title, emoji, subject, testDate:"YYYY-MM-DD" (optional; omit for no test date), subtitle}
// CONTENT[id] = {notice:"optional banner shown on the guide and quiz", sections:[{title, bullets:[], highlight:[]}],
//   flashcards:[{front, back}], quiz:[{sourceId, q, choices:[], answer:(index or exact text), explain}]}
// Quiz rounds draw ~15 questions, at most one version per sourceId.
window.UNITS = [
 {
  "id": "apgov-u2-congress",
  "title": "Unit 2: Congress (2.1–2.3)",
  "emoji": "🏛️",
  "subject": "AP Government",
  "testDate": "2026-10-15",
  "subtitle": "11th Grade · Quiz 10/15/2026 · Congress"
 },
 {
  "id": "precalc-trig-identities",
  "title": "Precalc: Trig Identities Quick Sheet",
  "emoji": "📐",
  "subject": "Precalculus",
  "subtitle": "11th Grade · Precalculus · Formulas to memorize · No test date set"
 },
 {
  "id": "apgov-u5-presidency",
  "title": "Unit 5: The Presidency (2.4–2.7)",
  "emoji": "🇺🇸",
  "subject": "AP Government",
  "subtitle": "11th Grade · AP Gov · Chapter 5 · Quiz 10/29/2026",
  "testDate": "2026-10-29"
 }
];
window.CONTENT = {
 "apgov-u2-congress": {
  "sections": [
   {
    "title": "2.1 The House & Senate",
    "bullets": [
     "The Senate represents the states; the House represents the people as a whole.",
     "The legislative branch is defined in Article I.",
     "There are 100 senators and 435 representatives. Both chambers have 3 non-voting members, and there are about 30,000 support staff.",
     "To be in the House you must be 25+; the Senate, 30+.",
     "Citizenship: 7+ years for the House, 9+ for the Senate.",
     "1/3 of the Senate is reelected every 2 years, so it is not all changing at once.",
     "The U.S. census occurs every 10 years.",
     "The framers intentionally designed the legislative process to be slow, to avoid rash decision making.",
     "The Senate slows down the lawmaking process.",
     "The Senate is called the upper house because of its higher age and citizenship requirements.",
     "Bills can originate in either the House or the Senate, but tax/revenue bills have to originate in the House (Ways & Means Committee).",
     "Caucus examples: Doctors Caucus, House Freedom Caucus, Wine Caucus. Caucuses can elect leaders, draft bills, and appoint committee members.",
     "Caucuses share an interest/passion in something nongovernmental.",
     "The U.S. government cannot spend money without congressional approval. Budget process: 1) POTUS prepares a budget; 2) committees debate how much should be spent in various areas; 3) both chambers pass the exact same bill; 4) the president signs the bill into law."
    ],
    "highlight": [
     "17th Amendment: direct election of senators, broadening democracy (senators used to be elected by state legislatures).",
     "535 members elected in total to Congress.",
     "Reapportionment: distribution of the 435 House seats among the 50 states according to population.",
     "Congressional caucus: a group of like-minded people within Congress."
    ]
   },
   {
    "title": "2.1 ctd: Powers & War Powers",
    "bullets": [
     "Congress can raise armies and navies, mandate a military draft, and has sole authority to declare war.",
     "Congress sets the salary for all military personnel and determines the money spent on the military.",
     "The framers also wanted a strong military leader: POTUS, aka \"Commander in Chief.\"",
     "The War Powers Resolution of 1973 limited presidential war power. It was caused by how much power the Gulf of Tonkin Resolution gave the president (LBJ got almost unlimited military power).",
     "1964: Gulf of Tonkin Resolution gave LBJ almost unlimited military power.",
     "1973: Tonkin Resolution repealed; War Powers Act put in place. POTUS has 48 hours to engage in combat without informing Congress. Within 60 (or 90) days Congress must take action to approve/deny any use of military force.",
     "House: power to select POTUS if the Electoral College doesn't reach 270; power to impeach federal officials.",
     "Senate: advice & consent power; power to approve/deny treaties; power to remove federal officials and declare them guilty."
    ],
    "highlight": [
     "16th Amendment: allows Congress to create a federal income tax.",
     "Foreign and military policy are made jointly by Congress and POTUS.",
     "★ Congress does NOT have the power to deploy troops or receive ambassadors.",
     "War Powers Act (1973)."
    ]
   },
   {
    "title": "2.2 Leadership",
    "bullets": [
     "The \"real work\" of Congress is done in committees, especially in the House.",
     "The Constitution lets the House and Senate each choose their own officers. Committee members and chairs are chosen by the Speaker of the House and the President Pro Tempore.",
     "Current Speaker of the House: Mike Johnson. Recognizes members to speak, organizes members for conference committees, has great influence in most matters of lawmaking.",
     "In the Senate, leaders set the legislative agenda for which bills are seen.",
     "Whips keep the tally of votes among party members, help determine the best time to vote, strong-arm members to vote with the party, and make sure members stay in good standing (deal with members during scandals).",
     "Vice President: JD Vance. Rarely in the actual Senate chamber; usually delegates moderating debate to other members.",
     "President pro tempore doesn't actually do much.",
     "In the House, the Speaker has the most power. In the Senate, the majority leader has the most power."
    ],
    "highlight": [
     "★ Majority & minority leaders (House & Senate): lead debates among their party; first speaker recognized in a debate; party spokesperson in press conferences & interviews.",
     "★ Majority & minority whips: in charge of party discipline, aka \"the party deputies.\"",
     "★ Vice President: meant to rule on procedure and organize the Senate; acts similarly to the Speaker of the House.",
     "★ President pro tempore: \"temporary president\"; traditionally the most senior member of the majority party; presides when the VP is absent."
    ]
   },
   {
    "title": "2.2 Committees & Oversight",
    "bullets": [
     "Smaller groups can take on tough issues and draft more precise laws; lets lawmakers use their expertise; makes moving legislation more manageable.",
     "Committee leadership: chaired by a senior, experienced member of the majority party; the vice chair is from the minority party, aka the ranking member; leadership is determined by the majority party.",
     "A bill must pass a vote in a committee, then be introduced onto the floor by someone who is not part of that committee (a member can't introduce a bill from their own committee).",
     "Each full chamber votes to approve committee membership.",
     "Standing committees discuss and either polish or reject a variety of bills. Examples: Agriculture, Appropriations, Finance.",
     "Select committees: things like scandals and major events; conduct research to determine if further action is necessary.",
     "Conference committees (aka the reconciliation committee): formed temporarily to combine multiple versions of a bill into 1 bill; can be considered permanent but only meet when needed; can last from a week to about a year.",
     "5 functions of Congress: 1) oversight, 2) overseeing the bureaucracy, 3) confirmation of presidential appointments, 4) lawmaking, 5) representation."
    ],
    "highlight": [
     "Committees: the \"Fantastic 4\": standing, select, joint, and conference.",
     "Standing committee: permanent and focused on a particular subject.",
     "Joint committee: members from both the House & Senate; addresses a long-term issue or program.",
     "Select committee: temporary, formed for a limited period of time.",
     "Conference committee: combines multiple versions of a bill into 1 bill.",
     "Congressional oversight: overseeing how the executive agencies (executive branch) administer the laws Congress creates (ex: FBI, TSA).",
     "★ 5 functions of Congress (see list)."
    ]
   },
   {
    "title": "2.2 Unique House & Senate Rules",
    "bullets": [
     "Unique to the House: House Rules Committee assigns bills to standing committees, schedules bills for debate (nothing reaches the floor without its approval), defines guidelines for debate.",
     "Committee of the Whole: only for the House; 100 representatives must be present for it to be the Committee of the Whole and carry out its functions.",
     "Unique to the Senate: the presiding officer must recognize anyone who stands to speak; does not have control over who is speaking.",
     "Filibuster record = 24 h 19 min, held by Strom Thurmond (teacher's notes; this record has since been broken).",
     "Cloture is the only thing that can end a filibuster.",
     "The Senate has more power over foreign relations.",
     "Unanimous consent: it takes just 1 senator to stop it."
    ],
    "highlight": [
     "House Rules Committee.",
     "Germane: the House can only offer germane revisions (has to relate to the bill).",
     "Committee of the Whole: the whole chamber.",
     "Discharge petition: forces a bill out of a reluctant committee and onto the floor.",
     "Filibuster: senators can stall or kill a bill by speaking for an extremely long time.",
     "Cloture rule: needs 60 votes to end a filibuster.",
     "Non-germane: the Senate can offer non-germane revisions (doesn't have to relate to the bill).",
     "Unanimous consent: agreement of all senators to move a bill forward."
    ]
   },
   {
    "title": "2.2 Introducing & Amending Bills, Referral & Spending",
    "bullets": [
     "Congress sees more than 10,000 bills in committee; only 300 to 500 are passed.",
     "In the House, the House Rules Committee assigns bills to committees.",
     "Logrolling is legal.",
     "Congress can overrule a veto with a 2/3 vote in each chamber.",
     "Mandatory spending examples: Social Security, Medicare, Medicaid. About 60% of the budget; takes priority.",
     "Discretionary spending example: military spending. About 38% of the budget.",
     "The other ~2% is for miscellaneous things or shifts year to year between mandatory and discretionary.",
     "Paying off the national/federal debt is mandatory spending."
    ],
    "highlight": [
     "Rider: another word for a non-germane (not relating) amendment to a bill.",
     "Omnibus bill: a bill that grows to a mammoth size and covers several aspects of law or multiple programs, aka a Christmas tree bill.",
     "Pork-barrel spending: sending funds back to a member's district to \"bring home the bacon\" (for reelection).",
     "Multiple referral: allows multiple committees to address a bill simultaneously.",
     "Sequential referral: gives 1 committee priority to review a bill before others.",
     "Pigeonhole: when a bill is killed in a committee (doesn't pass the vote).",
     "Logrolling: trading votes to gain support for your bill.",
     "★ Mandatory spending: expenditures required by law for certain programs.",
     "★ Discretionary spending: pays the rest of the budget that isn't mandatory."
    ]
   },
   {
    "title": "2.3 Congressional Behavior",
    "bullets": [
     "Gridlock is a \"congestion\" of opposing forces; it makes it harder for members of Congress to be friends with each other.",
     "The party in power in the state legislature determines district lines; this benefits the party in power (they get more seats).",
     "Gerrymandering is illegal in a court of law if proven it was done intentionally (usually based on race or party); hard to catch.",
     "Divided government can lead to gridlock."
    ],
    "highlight": [
     "Gridlock: opposing parties that cause blockades in lawmaking.",
     "Partisan model: voting with the party group.",
     "Delegate model: voting to reflect the will of their constituency.",
     "Politico model: blending the delegate & trustee models.",
     "Trustee model: representatives believe in themselves and make decisions on a case-by-case basis.",
     "★ Redistricting: state legislatures redraw congressional districts to reflect population changes.",
     "Baker v. Carr: brought to the Supreme Court because Tennessee had not redrawn its district lines in almost 60 years; voters who weren't being represented needed to do something about it.",
     "Gerrymandering: district lines drawn to favor/hurt a specific party or group of people.",
     "Divided government: POTUS is from 1 party, but Congress is controlled by the other party."
    ]
   }
  ],
  "flashcards": [
   {
    "front": "Direct election of senators (used to be elected by state legislatures)",
    "back": "17th Amendment"
   },
   {
    "front": "Total members elected to Congress",
    "back": "535"
   },
   {
    "front": "Distribution of the 435 House seats among the 50 states by population",
    "back": "Reapportionment"
   },
   {
    "front": "A group of like-minded people within Congress",
    "back": "Congressional caucus"
   },
   {
    "front": "Allows Congress to create a federal income tax",
    "back": "16th Amendment"
   },
   {
    "front": "Foreign & military policy are made jointly by…",
    "back": "Congress and POTUS"
   },
   {
    "front": "1973 law: POTUS has 48 hours to engage in combat without informing Congress",
    "back": "War Powers Act"
   },
   {
    "front": "Lead party debates; first recognized in debate; party spokesperson",
    "back": "Majority & minority leaders"
   },
   {
    "front": "In charge of party discipline, aka \"the party deputies\"",
    "back": "Whips"
   },
   {
    "front": "Rules on procedure and organizes the Senate (JD Vance)",
    "back": "Vice President"
   },
   {
    "front": "\"Temporary president\"; most senior majority member; presides when VP is absent",
    "back": "President pro tempore"
   },
   {
    "front": "The \"Fantastic 4\" committee types",
    "back": "Standing, select, joint, conference"
   },
   {
    "front": "Permanent committee focused on a particular subject",
    "back": "Standing committee"
   },
   {
    "front": "Committee with members from both chambers on a long-term issue",
    "back": "Joint committee"
   },
   {
    "front": "Temporary committee for a limited time (scandals, major events)",
    "back": "Select committee"
   },
   {
    "front": "Combines multiple versions of a bill into 1 bill",
    "back": "Conference committee"
   },
   {
    "front": "Minority-party vice chair of a committee",
    "back": "Ranking member"
   },
   {
    "front": "Overseeing how executive agencies administer the laws Congress creates",
    "back": "Congressional oversight"
   },
   {
    "front": "The 5 functions of Congress (per notes)",
    "back": "Oversight, overseeing the bureaucracy, confirmation of presidential appointments, lawmaking, representation"
   },
   {
    "front": "House committee that assigns bills and schedules debate",
    "back": "House Rules Committee"
   },
   {
    "front": "Revisions that have to relate to the bill (House)",
    "back": "Germane"
   },
   {
    "front": "Revisions that don't have to relate to the bill (Senate)",
    "back": "Non-germane"
   },
   {
    "front": "The whole House chamber acting as a committee",
    "back": "Committee of the Whole"
   },
   {
    "front": "Forces a bill out of a reluctant committee onto the floor",
    "back": "Discharge petition"
   },
   {
    "front": "Stalling or killing a bill by speaking for an extremely long time",
    "back": "Filibuster"
   },
   {
    "front": "Needs 60 votes to end a filibuster",
    "back": "Cloture rule"
   },
   {
    "front": "Agreement of all senators to move a bill forward (1 senator can stop it)",
    "back": "Unanimous consent"
   },
   {
    "front": "A non-germane amendment to a bill",
    "back": "Rider"
   },
   {
    "front": "Mammoth bill covering multiple programs, aka Christmas tree bill",
    "back": "Omnibus bill"
   },
   {
    "front": "Sending funds back to a member's district to \"bring home the bacon\"",
    "back": "Pork-barrel spending"
   },
   {
    "front": "Multiple committees address a bill simultaneously",
    "back": "Multiple referral"
   },
   {
    "front": "1 committee gets priority to review a bill before others",
    "back": "Sequential referral"
   },
   {
    "front": "When a bill is killed in committee",
    "back": "Pigeonhole"
   },
   {
    "front": "Trading votes to gain support for your bill",
    "back": "Logrolling"
   },
   {
    "front": "Expenditures required by law (Social Security, Medicare, Medicaid)",
    "back": "Mandatory spending"
   },
   {
    "front": "Pays the rest of the budget that isn't mandatory (ex: military)",
    "back": "Discretionary spending"
   },
   {
    "front": "Opposing parties causing blockades in lawmaking",
    "back": "Gridlock"
   },
   {
    "front": "Voting with the party group",
    "back": "Partisan model"
   },
   {
    "front": "Voting to reflect the will of the constituency",
    "back": "Delegate model"
   },
   {
    "front": "Blending delegate & trustee models",
    "back": "Politico model"
   },
   {
    "front": "Representatives decide case by case on their own judgment",
    "back": "Trustee model"
   },
   {
    "front": "State legislatures redraw districts to reflect population changes",
    "back": "Redistricting"
   },
   {
    "front": "Case about Tennessee not redrawing district lines",
    "back": "Baker v. Carr"
   },
   {
    "front": "District lines drawn to favor/hurt a specific party or group",
    "back": "Gerrymandering"
   },
   {
    "front": "POTUS from 1 party, Congress controlled by the other",
    "back": "Divided government"
   }
  ],
  "quiz": [
   {
    "sourceId": "senrep",
    "q": "According to the notes, the Senate represents…",
    "choices": [
     "The states",
     "The people as a whole",
     "The political parties",
     "The executive agencies"
    ],
    "answer": 0,
    "explain": "The Senate represents states; the House represents the people as a whole."
   },
   {
    "sourceId": "senrep",
    "q": "Which chamber represents the people as a whole?",
    "choices": [
     "The House of Representatives",
     "The Senate",
     "The Supreme Court",
     "The Electoral College"
    ],
    "answer": 0,
    "explain": "The House represents the people as a whole."
   },
   {
    "sourceId": "art1",
    "q": "Which article of the Constitution defines the legislative branch?",
    "choices": [
     "Article I",
     "Article II",
     "Article III",
     "Article V"
    ],
    "answer": 0,
    "explain": "The legislative branch is defined in Article I."
   },
   {
    "sourceId": "art1",
    "q": "The legislative branch is defined in…",
    "choices": [
     "Article I of the Constitution",
     "The 17th Amendment",
     "The 16th Amendment",
     "The War Powers Act"
    ],
    "answer": 0,
    "explain": "Article I defines the legislative branch."
   },
   {
    "sourceId": "17am",
    "q": "What did the 17th Amendment do?",
    "choices": [
     "Created direct election of senators",
     "Allowed a federal income tax",
     "Gave the president war powers",
     "Set up the Electoral College"
    ],
    "answer": 0,
    "explain": "The 17th Amendment gave voters direct election of senators, broadening democracy."
   },
   {
    "sourceId": "17am",
    "q": "Before the 17th Amendment, senators were elected by…",
    "choices": [
     "State legislatures",
     "The House of Representatives",
     "The president",
     "Congressional caucuses"
    ],
    "answer": 0,
    "explain": "Senators used to be elected by state legislatures."
   },
   {
    "sourceId": "535",
    "q": "How many members are elected in total to Congress?",
    "choices": [
     "535",
     "435",
     "100",
     "538"
    ],
    "answer": 0,
    "explain": "100 senators + 435 representatives = 535."
   },
   {
    "sourceId": "535",
    "q": "How many representatives are in the House?",
    "choices": [
     "435",
     "100",
     "535",
     "270"
    ],
    "answer": 0,
    "explain": "The House has 435 representatives."
   },
   {
    "sourceId": "age",
    "q": "Minimum age to serve in the House?",
    "choices": [
     "25",
     "30",
     "35",
     "21"
    ],
    "answer": 0,
    "explain": "House members must be at least 25."
   },
   {
    "sourceId": "age",
    "q": "Minimum age to serve in the Senate?",
    "choices": [
     "30",
     "25",
     "35",
     "40"
    ],
    "answer": 0,
    "explain": "Senators must be at least 30."
   },
   {
    "sourceId": "cit",
    "q": "How long must you be a citizen to serve in the House?",
    "choices": [
     "7 years",
     "9 years",
     "5 years",
     "14 years"
    ],
    "answer": 0,
    "explain": "House: 7 years of citizenship; Senate: 9."
   },
   {
    "sourceId": "cit",
    "q": "How long must you be a citizen to serve in the Senate?",
    "choices": [
     "9 years",
     "7 years",
     "10 years",
     "14 years"
    ],
    "answer": 0,
    "explain": "Senate: 9 years of citizenship."
   },
   {
    "sourceId": "census",
    "q": "How often does the U.S. census occur?",
    "choices": [
     "Every 10 years",
     "Every 2 years",
     "Every 6 years",
     "Every 4 years"
    ],
    "answer": 0,
    "explain": "The census occurs every 10 years."
   },
   {
    "sourceId": "reapp",
    "q": "Distribution of the 435 House seats among the 50 states by population is called…",
    "choices": [
     "Reapportionment",
     "Redistricting",
     "Gerrymandering",
     "Sequential referral"
    ],
    "answer": 0,
    "explain": "That is the definition of reapportionment."
   },
   {
    "sourceId": "reapp",
    "q": "What is reapportionment?",
    "choices": [
     "Distributing the 435 House seats among the states according to population",
     "Redrawing district lines to favor a party",
     "Moving a bill to a new committee",
     "Sending funds back to a district"
    ],
    "answer": 0,
    "explain": "Reapportionment divides House seats by population."
   },
   {
    "sourceId": "slow",
    "q": "Why did the framers design the legislative process to be slow?",
    "choices": [
     "To avoid rash decision making",
     "To give the president more power",
     "To keep the census accurate",
     "To reduce support staff"
    ],
    "answer": 0,
    "explain": "Framers made it slow on purpose to avoid rash decisions."
   },
   {
    "sourceId": "slow",
    "q": "Which chamber slows down the lawmaking process?",
    "choices": [
     "The Senate",
     "The House",
     "The House Rules Committee",
     "The Committee of the Whole"
    ],
    "answer": 0,
    "explain": "The notes say the Senate slows down lawmaking."
   },
   {
    "sourceId": "upper",
    "q": "Why is the Senate called the \"upper house\"?",
    "choices": [
     "Higher age and citizenship requirements",
     "It meets on the top floor",
     "It has more members",
     "It writes tax bills"
    ],
    "answer": 0,
    "explain": "Higher age/citizenship requirements make it the upper house."
   },
   {
    "sourceId": "origin",
    "q": "Where must tax/revenue bills originate?",
    "choices": [
     "In the House (Ways & Means Committee)",
     "In the Senate",
     "In the Finance Committee of the Senate",
     "With the president"
    ],
    "answer": 0,
    "explain": "Revenue bills have to start in the House."
   },
   {
    "sourceId": "origin",
    "q": "Which statement about where bills start is correct?",
    "choices": [
     "Most bills can start in either chamber, but tax bills must start in the House",
     "All bills must start in the Senate",
     "All bills must start in the House",
     "Tax bills must start in the Senate"
    ],
    "answer": 0,
    "explain": "Bills can originate in either chamber; tax/revenue bills start in the House."
   },
   {
    "sourceId": "caucus",
    "q": "A group of like-minded people within Congress is a…",
    "choices": [
     "Congressional caucus",
     "Standing committee",
     "Joint committee",
     "Whip"
    ],
    "answer": 0,
    "explain": "That is the definition of a congressional caucus."
   },
   {
    "sourceId": "caucus",
    "q": "What is a congressional caucus?",
    "choices": [
     "A group of like-minded people within Congress",
     "A temporary committee for scandals",
     "The whole House acting as one committee",
     "A vote to end a filibuster"
    ],
    "answer": 0,
    "explain": "Caucuses group like-minded members around a shared interest."
   },
   {
    "sourceId": "budget",
    "q": "What is the FIRST step in the budget process?",
    "choices": [
     "The president prepares a budget",
     "Both chambers pass the exact same bill",
     "The president signs the bill",
     "Committees debate spending"
    ],
    "answer": 0,
    "explain": "Step 1: POTUS prepares a budget."
   },
   {
    "sourceId": "budget",
    "q": "In the budget process, what must both chambers do?",
    "choices": [
     "Pass the exact same bill",
     "Hold a filibuster",
     "Form a select committee",
     "Pass different versions"
    ],
    "answer": 0,
    "explain": "Both chambers must pass the exact same bill."
   },
   {
    "sourceId": "16am",
    "q": "What does the 16th Amendment allow?",
    "choices": [
     "Congress to create a federal income tax",
     "Direct election of senators",
     "War Powers Act",
     "Reapportionment"
    ],
    "answer": 0,
    "explain": "16th Amendment: federal income tax."
   },
   {
    "sourceId": "16am",
    "q": "Which amendment allows a federal income tax?",
    "choices": [
     "16th Amendment",
     "17th Amendment",
     "10th Amendment",
     "14th Amendment"
    ],
    "answer": 0,
    "explain": "The 16th Amendment allows the income tax."
   },
   {
    "sourceId": "warpow",
    "q": "Which power belongs to Congress per the notes?",
    "choices": [
     "Sole authority to declare war",
     "Deploying troops",
     "Receiving ambassadors",
     "Being commander in chief"
    ],
    "answer": 0,
    "explain": "Congress has sole authority to declare war."
   },
   {
    "sourceId": "warpow",
    "q": "Which is a military power of Congress?",
    "choices": [
     "Mandating a military draft",
     "Serving as commander in chief",
     "Receiving ambassadors",
     "Deploying troops"
    ],
    "answer": 0,
    "explain": "Congress can raise armies/navies and mandate a draft."
   },
   {
    "sourceId": "joint",
    "q": "Foreign and military policy are made by…",
    "choices": [
     "Congress and the president jointly",
     "Congress alone",
     "The president alone",
     "The Senate alone"
    ],
    "answer": 0,
    "explain": "Foreign and military policy are joint."
   },
   {
    "sourceId": "joint",
    "q": "The president is also known as…",
    "choices": [
     "Commander in chief",
     "President pro tempore",
     "Majority leader",
     "Whip"
    ],
    "answer": 0,
    "explain": "Framers wanted a strong military leader: POTUS as commander in chief."
   },
   {
    "sourceId": "tonkin",
    "q": "What did the 1964 Gulf of Tonkin Resolution do?",
    "choices": [
     "Gave LBJ almost unlimited military power",
     "Limited the president to 48 hours of combat",
     "Created direct election of senators",
     "Created a federal income tax"
    ],
    "answer": 0,
    "explain": "It gave LBJ almost unlimited military power."
   },
   {
    "sourceId": "tonkin",
    "q": "What happened in 1973?",
    "choices": [
     "The Tonkin Resolution was repealed and the War Powers Act was put in place",
     "The 17th Amendment was ratified",
     "The Gulf of Tonkin Resolution was passed",
     "Baker v. Carr was decided"
    ],
    "answer": 0,
    "explain": "1973: Tonkin repealed, War Powers Act in place."
   },
   {
    "sourceId": "wpa",
    "q": "Under the War Powers Act, the president may engage in combat without informing Congress for…",
    "choices": [
     "48 hours",
     "10 days",
     "60 hours",
     "2 years"
    ],
    "answer": 0,
    "explain": "POTUS has 48 hours before informing Congress."
   },
   {
    "sourceId": "wpa",
    "q": "Under the War Powers Act, Congress must act within how many days?",
    "choices": [
     "60 (or 90) days",
     "48 days",
     "10 days",
     "2 years"
    ],
    "answer": 0,
    "explain": "Congress must act within 60 (or 90) days to approve/deny force."
   },
   {
    "sourceId": "hpow",
    "q": "Which power belongs to the House?",
    "choices": [
     "Power to impeach federal officials",
     "Advice and consent",
     "Approving treaties",
     "Declaring impeached officials guilty"
    ],
    "answer": 0,
    "explain": "The House impeaches; the Senate removes."
   },
   {
    "sourceId": "hpow",
    "q": "If the Electoral College does not reach 270, who selects the president?",
    "choices": [
     "The House",
     "The Senate",
     "The Supreme Court",
     "The vice president"
    ],
    "answer": 0,
    "explain": "The House selects POTUS if no one reaches 270."
   },
   {
    "sourceId": "spow",
    "q": "Which power belongs to the Senate?",
    "choices": [
     "Power to approve or deny treaties",
     "Power to impeach",
     "Selecting the president without 270 votes",
     "Originating tax bills"
    ],
    "answer": 0,
    "explain": "Senate: advice & consent, treaties, removal."
   },
   {
    "sourceId": "spow",
    "q": "Which chamber removes federal officials and declares them guilty?",
    "choices": [
     "Senate",
     "House",
     "Supreme Court",
     "House Rules Committee"
    ],
    "answer": 0,
    "explain": "The Senate removes officials and declares them guilty."
   },
   {
    "sourceId": "cmtwork",
    "q": "Where is the \"real work\" of Congress done?",
    "choices": [
     "In committees",
     "On the floor",
     "In caucuses",
     "In the White House"
    ],
    "answer": 0,
    "explain": "The real work is done in committees, especially in the House."
   },
   {
    "sourceId": "speaker",
    "q": "Who is the current Speaker of the House?",
    "choices": [
     "Mike Johnson",
     "JD Vance",
     "Strom Thurmond",
     "LBJ"
    ],
    "answer": 0,
    "explain": "The notes list Mike Johnson."
   },
   {
    "sourceId": "speaker",
    "q": "Who has the most power in the House?",
    "choices": [
     "Speaker of the House",
     "Majority whip",
     "President pro tempore",
     "Vice president"
    ],
    "answer": 0,
    "explain": "In the House, the Speaker has the most power."
   },
   {
    "sourceId": "lead",
    "q": "Who is the first speaker recognized in a debate?",
    "choices": [
     "The majority/minority leader",
     "The whip",
     "The president pro tempore",
     "A committee ranking member"
    ],
    "answer": 0,
    "explain": "Leaders lead debates and are recognized first."
   },
   {
    "sourceId": "lead",
    "q": "Who has the most power in the Senate?",
    "choices": [
     "The majority leader",
     "The vice president",
     "The president pro tempore",
     "The Speaker"
    ],
    "answer": 0,
    "explain": "In the Senate, the majority leader has the most power."
   },
   {
    "sourceId": "whip",
    "q": "Party leaders \"in charge of party discipline,\" aka \"the party deputies,\" are…",
    "choices": [
     "Whips",
     "Majority leaders",
     "Ranking members",
     "Presidents pro tempore"
    ],
    "answer": 0,
    "explain": "Whips handle party discipline."
   },
   {
    "sourceId": "whip",
    "q": "Which is a job of a whip?",
    "choices": [
     "Keeping a tally of votes among party members",
     "Presiding when the VP is absent",
     "Selecting the president",
     "Assigning bills to committees"
    ],
    "answer": 0,
    "explain": "Whips tally votes and strong-arm members to vote with the party."
   },
   {
    "sourceId": "vp",
    "q": "Who is the vice president according to the notes?",
    "choices": [
     "JD Vance",
     "Mike Johnson",
     "LBJ",
     "Strom Thurmond"
    ],
    "answer": 0,
    "explain": "The notes list JD Vance."
   },
   {
    "sourceId": "vp",
    "q": "What is the vice president's role in the Senate?",
    "choices": [
     "Rule on procedure and organize the Senate",
     "Lead the House",
     "Tally party votes",
     "Chair standing committees"
    ],
    "answer": 0,
    "explain": "The VP rules on procedure, but is rarely in the chamber."
   },
   {
    "sourceId": "ppt",
    "q": "\"Temporary president\" of the Senate who presides when the VP is absent is the…",
    "choices": [
     "President pro tempore",
     "Majority whip",
     "Speaker of the House",
     "Ranking member"
    ],
    "answer": 0,
    "explain": "That is the president pro tempore."
   },
   {
    "sourceId": "ppt",
    "q": "The president pro tempore is traditionally…",
    "choices": [
     "The most senior member of the majority party",
     "The youngest senator",
     "A member of the minority party",
     "The vice president"
    ],
    "answer": 0,
    "explain": "Traditionally the most senior majority member."
   },
   {
    "sourceId": "cmtwhy",
    "q": "Why use committees?",
    "choices": [
     "Smaller groups can take on tough issues and draft more precise laws",
     "To end filibusters",
     "To redraw districts",
     "To elect senators"
    ],
    "answer": 0,
    "explain": "Committees let lawmakers use expertise and draft precise laws."
   },
   {
    "sourceId": "fant4",
    "q": "Which are the \"Fantastic 4\" committee types?",
    "choices": [
     "Standing, select, joint, and conference",
     "Standing, rules, whole, and caucus",
     "Select, joint, ways & means, and finance",
     "Joint, caucus, conference, and rules"
    ],
    "answer": 0,
    "explain": "The four: standing, select, joint, conference."
   },
   {
    "sourceId": "rank",
    "q": "The vice chair of a committee from the minority party is called the…",
    "choices": [
     "Ranking member",
     "Whip",
     "President pro tempore",
     "Majority leader"
    ],
    "answer": 0,
    "explain": "aka the ranking member."
   },
   {
    "sourceId": "rank",
    "q": "Committee chairs are usually…",
    "choices": [
     "Senior, experienced members of the majority party",
     "Members of the minority party",
     "The vice president",
     "Newly elected members"
    ],
    "answer": 0,
    "explain": "Chairs are senior majority members; leadership is set by the majority."
   },
   {
    "sourceId": "stand",
    "q": "A permanent committee focused on a particular subject is a…",
    "choices": [
     "Standing committee",
     "Select committee",
     "Conference committee",
     "Joint committee"
    ],
    "answer": 0,
    "explain": "Standing committees are permanent and subject-focused."
   },
   {
    "sourceId": "stand",
    "q": "Which is an example of a standing committee?",
    "choices": [
     "Appropriations Committee",
     "Committee of the Whole",
     "Doctors Caucus",
     "House Freedom Caucus"
    ],
    "answer": 0,
    "explain": "Examples: Agriculture, Appropriations, Finance."
   },
   {
    "sourceId": "jointc",
    "q": "A committee with members from both the House and Senate addressing a long-term issue is a…",
    "choices": [
     "Joint committee",
     "Standing committee",
     "Select committee",
     "House Rules Committee"
    ],
    "answer": 0,
    "explain": "Joint committees include both chambers."
   },
   {
    "sourceId": "jointc",
    "q": "What is a joint committee?",
    "choices": [
     "Members from both chambers addressing a long-term issue or program",
     "A temporary committee for scandals",
     "The whole House acting as a committee",
     "A group of like-minded members"
    ],
    "answer": 0,
    "explain": "Joint = both chambers, long-term issue."
   },
   {
    "sourceId": "select",
    "q": "A temporary committee formed for scandals or major events is a…",
    "choices": [
     "Select committee",
     "Standing committee",
     "Joint committee",
     "Appropriations committee"
    ],
    "answer": 0,
    "explain": "Select committees are temporary and do research."
   },
   {
    "sourceId": "select",
    "q": "What do select committees do?",
    "choices": [
     "Conduct research to determine if further action is necessary",
     "Combine two versions of a bill",
     "Assign bills to committees",
     "End filibusters"
    ],
    "answer": 0,
    "explain": "Select committees research whether more action is needed."
   },
   {
    "sourceId": "conf",
    "q": "Which committee combines multiple versions of a bill into one bill?",
    "choices": [
     "Conference committee",
     "Select committee",
     "Standing committee",
     "House Rules Committee"
    ],
    "answer": 0,
    "explain": "Conference committees merge versions of a bill."
   },
   {
    "sourceId": "conf",
    "q": "What does a conference committee do?",
    "choices": [
     "Takes multiple versions of a bill and combines them into one",
     "Investigates scandals",
     "Assigns bills to committees",
     "Forces a bill out of committee"
    ],
    "answer": 0,
    "explain": "It combines versions into one bill."
   },
   {
    "sourceId": "oversight",
    "q": "Overseeing how executive agencies administer the laws Congress creates is…",
    "choices": [
     "Congressional oversight",
     "Logrolling",
     "Reapportionment",
     "Gridlock"
    ],
    "answer": 0,
    "explain": "That is congressional oversight."
   },
   {
    "sourceId": "oversight",
    "q": "What is congressional oversight?",
    "choices": [
     "Overseeing how executive agencies administer the laws Congress creates",
     "Trading votes for support",
     "Redrawing district lines",
     "Combining versions of a bill"
    ],
    "answer": 0,
    "explain": "Oversight watches executive agencies like the FBI and TSA."
   },
   {
    "sourceId": "rules",
    "q": "Which committee assigns bills to standing committees and schedules debate in the House?",
    "choices": [
     "House Rules Committee",
     "Appropriations Committee",
     "Committee of the Whole",
     "Conference committee"
    ],
    "answer": 0,
    "explain": "Nothing reaches the floor without Rules Committee approval."
   },
   {
    "sourceId": "rules",
    "q": "Which statement about the House Rules Committee is correct?",
    "choices": [
     "Nothing reaches the House floor without its approval",
     "It is unique to the Senate",
     "It ends filibusters",
     "It combines bills from both chambers"
    ],
    "answer": 0,
    "explain": "The Rules Committee controls what reaches the floor."
   },
   {
    "sourceId": "germane",
    "q": "Revisions that must relate to the bill are called…",
    "choices": [
     "Germane revisions",
     "Non-germane revisions",
     "Riders",
     "Cloture"
    ],
    "answer": 0,
    "explain": "Germane = has to relate to the bill."
   },
   {
    "sourceId": "germane",
    "q": "The House can only offer which kind of revisions?",
    "choices": [
     "Germane (must relate to the bill)",
     "Non-germane",
     "Unanimous",
     "Omnibus"
    ],
    "answer": 0,
    "explain": "The House allows only germane revisions."
   },
   {
    "sourceId": "cotw",
    "q": "When the whole House chamber acts as a committee, it is called the…",
    "choices": [
     "Committee of the Whole",
     "Joint committee",
     "Conference committee",
     "House Rules Committee"
    ],
    "answer": 0,
    "explain": "Committee of the Whole is only for the House."
   },
   {
    "sourceId": "discharge",
    "q": "What forces a bill out of a reluctant committee and onto the floor?",
    "choices": [
     "Discharge petition",
     "Cloture",
     "Filibuster",
     "Pigeonhole"
    ],
    "answer": 0,
    "explain": "A discharge petition pulls a bill out of committee."
   },
   {
    "sourceId": "discharge",
    "q": "What is a discharge petition?",
    "choices": [
     "A way to force a bill out of a reluctant committee onto the floor",
     "A vote to end a filibuster",
     "Killing a bill in committee",
     "Trading votes"
    ],
    "answer": 0,
    "explain": "It forces a stuck bill to the floor."
   },
   {
    "sourceId": "recog",
    "q": "In the Senate, the presiding officer must…",
    "choices": [
     "Recognize anyone who stands to speak",
     "Control who is speaking",
     "Assign bills to committees",
     "Approve every revision"
    ],
    "answer": 0,
    "explain": "The Senate presiding officer has no control over who speaks."
   },
   {
    "sourceId": "filib",
    "q": "Senators stalling or killing a bill by speaking for an extremely long time is a…",
    "choices": [
     "Filibuster",
     "Cloture",
     "Discharge petition",
     "Logroll"
    ],
    "answer": 0,
    "explain": "That is a filibuster."
   },
   {
    "sourceId": "filib",
    "q": "What is a filibuster?",
    "choices": [
     "Stalling or killing a bill by speaking for an extremely long time",
     "Ending debate with 60 votes",
     "Killing a bill in committee",
     "Trading votes for support"
    ],
    "answer": 0,
    "explain": "Filibuster = long speech to stall a bill."
   },
   {
    "sourceId": "cloture",
    "q": "The rule needing 60 votes to end a filibuster is…",
    "choices": [
     "Cloture rule",
     "Discharge petition",
     "Unanimous consent",
     "Sequential referral"
    ],
    "answer": 0,
    "explain": "Cloture is the only thing that can end a filibuster."
   },
   {
    "sourceId": "cloture",
    "q": "How many votes does cloture need?",
    "choices": [
     "60",
     "51",
     "67",
     "100"
    ],
    "answer": 0,
    "explain": "Cloture needs 60 votes."
   },
   {
    "sourceId": "foreign",
    "q": "Which chamber has more power over foreign relations?",
    "choices": [
     "Senate",
     "House",
     "Committee of the Whole",
     "House Rules Committee"
    ],
    "answer": 0,
    "explain": "The Senate has more foreign relations power."
   },
   {
    "sourceId": "rider",
    "q": "Another word for a non-germane amendment to a bill is a…",
    "choices": [
     "Rider",
     "Omnibus bill",
     "Cloture",
     "Pigeonhole"
    ],
    "answer": 0,
    "explain": "A rider is a non-germane amendment."
   },
   {
    "sourceId": "rider",
    "q": "What is a rider?",
    "choices": [
     "A non-germane amendment to a bill",
     "A bill that addresses multiple programs",
     "A vote to end debate",
     "A committee vice chair"
    ],
    "answer": 0,
    "explain": "Rider = non-germane amendment."
   },
   {
    "sourceId": "omni",
    "q": "A bill that grows to a mammoth size and covers multiple programs is a(n)…",
    "choices": [
     "Omnibus bill",
     "Rider",
     "Discharge petition",
     "Pork-barrel bill"
    ],
    "answer": 0,
    "explain": "aka a Christmas tree bill."
   },
   {
    "sourceId": "omni",
    "q": "An omnibus bill is also known as a…",
    "choices": [
     "Christmas tree bill",
     "Pork-barrel bill",
     "Rider",
     "Conference bill"
    ],
    "answer": 0,
    "explain": "Omnibus bill aka Christmas tree bill."
   },
   {
    "sourceId": "pork",
    "q": "Sending funds back to a member's district to \"bring home the bacon\" is…",
    "choices": [
     "Pork-barrel spending",
     "Discretionary spending",
     "Logrolling",
     "Mandatory spending"
    ],
    "answer": 0,
    "explain": "Pork-barrel spending helps with reelection."
   },
   {
    "sourceId": "pork",
    "q": "What is pork-barrel spending?",
    "choices": [
     "Sending funds back to a member's district",
     "Spending required by law",
     "Trading votes",
     "Military spending"
    ],
    "answer": 0,
    "explain": "Pork-barrel = funds for the home district."
   },
   {
    "sourceId": "multi",
    "q": "Allowing multiple committees to address a bill at the same time is…",
    "choices": [
     "Multiple referral",
     "Sequential referral",
     "Logrolling",
     "Pigeonhole"
    ],
    "answer": 0,
    "explain": "Multiple referral = simultaneous committees."
   },
   {
    "sourceId": "seq",
    "q": "Giving one committee priority to review a bill before others is…",
    "choices": [
     "Sequential referral",
     "Multiple referral",
     "Discharge petition",
     "Cloture"
    ],
    "answer": 0,
    "explain": "Sequential referral gives one committee priority."
   },
   {
    "sourceId": "seq",
    "q": "What is sequential referral?",
    "choices": [
     "Giving one committee priority to review a bill before others",
     "Many committees reviewing at once",
     "Killing a bill in committee",
     "Ending a filibuster"
    ],
    "answer": 0,
    "explain": "One committee first, then others."
   },
   {
    "sourceId": "pigeon",
    "q": "When a bill is killed in a committee, it is…",
    "choices": [
     "Pigeonholed",
     "Logrolled",
     "Discharged",
     "Vetoed"
    ],
    "answer": 0,
    "explain": "Pigeonhole = bill dies in committee."
   },
   {
    "sourceId": "pigeon",
    "q": "What does \"pigeonhole\" mean?",
    "choices": [
     "A bill is killed in a committee",
     "A bill is forced to the floor",
     "Votes are traded",
     "A veto is overruled"
    ],
    "answer": 0,
    "explain": "A pigeonholed bill does not pass its committee vote."
   },
   {
    "sourceId": "logroll",
    "q": "Trading votes to gain support for your bill is…",
    "choices": [
     "Logrolling",
     "Pork-barrel spending",
     "Gerrymandering",
     "Cloture"
    ],
    "answer": 0,
    "explain": "Logrolling is trading votes; it is legal."
   },
   {
    "sourceId": "logroll",
    "q": "What is logrolling?",
    "choices": [
     "Trading votes to gain support for your bill",
     "Sending funds to a district",
     "Killing a bill in committee",
     "Redrawing district lines"
    ],
    "answer": 0,
    "explain": "Logrolling = vote trading."
   },
   {
    "sourceId": "veto",
    "q": "How can Congress overrule a veto?",
    "choices": [
     "2/3 vote in each chamber",
     "Simple majority in the House",
     "60 votes in the Senate only",
     "Unanimous consent"
    ],
    "answer": 0,
    "explain": "A 2/3 vote in each chamber overrides a veto."
   },
   {
    "sourceId": "mand",
    "q": "Expenditures required by law for certain programs are…",
    "choices": [
     "Mandatory spending",
     "Discretionary spending",
     "Pork-barrel spending",
     "Logrolling"
    ],
    "answer": 0,
    "explain": "e.g., Social Security, Medicare, Medicaid."
   },
   {
    "sourceId": "mand",
    "q": "Which is an example of mandatory spending?",
    "choices": [
     "Social Security",
     "Military spending",
     "Pork-barrel projects",
     "Riders"
    ],
    "answer": 0,
    "explain": "Social Security, Medicare, Medicaid are mandatory."
   },
   {
    "sourceId": "disc",
    "q": "Spending that pays for the rest of the budget that isn't mandatory is…",
    "choices": [
     "Discretionary spending",
     "Mandatory spending",
     "Pork-barrel spending",
     "Omnibus spending"
    ],
    "answer": 0,
    "explain": "Discretionary covers the non-mandatory budget."
   },
   {
    "sourceId": "disc",
    "q": "Which is an example of discretionary spending?",
    "choices": [
     "Military spending",
     "Medicare",
     "Medicaid",
     "Social Security"
    ],
    "answer": 0,
    "explain": "Military spending is discretionary."
   },
   {
    "sourceId": "grid",
    "q": "Opposing parties causing blockades in lawmaking is…",
    "choices": [
     "Gridlock",
     "Divided government",
     "Logrolling",
     "Cloture"
    ],
    "answer": 0,
    "explain": "Gridlock = congestion of opposing forces."
   },
   {
    "sourceId": "grid",
    "q": "What is gridlock?",
    "choices": [
     "Opposing parties causing blockades in lawmaking",
     "Redrawing district lines",
     "Trading votes",
     "Ending a filibuster"
    ],
    "answer": 0,
    "explain": "Gridlock blocks lawmaking."
   },
   {
    "sourceId": "partisan",
    "q": "Voting with the party group is the…",
    "choices": [
     "Partisan model",
     "Delegate model",
     "Trustee model",
     "Politico model"
    ],
    "answer": 0,
    "explain": "Partisan = vote with the party."
   },
   {
    "sourceId": "deleg",
    "q": "Voting to reflect the will of their constituency is the…",
    "choices": [
     "Delegate model",
     "Trustee model",
     "Partisan model",
     "Politico model"
    ],
    "answer": 0,
    "explain": "Delegate = constituents' will."
   },
   {
    "sourceId": "deleg",
    "q": "What is the delegate model?",
    "choices": [
     "Voting to reflect the will of the constituency",
     "Voting with the party",
     "Blending trustee and delegate",
     "Deciding case by case on own judgment"
    ],
    "answer": 0,
    "explain": "Delegates follow constituents."
   },
   {
    "sourceId": "politico",
    "q": "Blending the delegate and trustee models is the…",
    "choices": [
     "Politico model",
     "Partisan model",
     "Delegate model",
     "Trustee model"
    ],
    "answer": 0,
    "explain": "Politico = blend."
   },
   {
    "sourceId": "trustee",
    "q": "Representatives who trust their own judgment and decide case by case follow the…",
    "choices": [
     "Trustee model",
     "Delegate model",
     "Partisan model",
     "Politico model"
    ],
    "answer": 0,
    "explain": "Trustee = own judgment, case by case."
   },
   {
    "sourceId": "trustee",
    "q": "What is the trustee model?",
    "choices": [
     "Representatives believe in themselves and decide case by case",
     "Voting with the party",
     "Voting the will of constituents",
     "Trading votes"
    ],
    "answer": 0,
    "explain": "Trustees make decisions case by case."
   },
   {
    "sourceId": "redist",
    "q": "State legislatures redrawing congressional districts to reflect population changes is…",
    "choices": [
     "Redistricting",
     "Reapportionment",
     "Gerrymandering",
     "Logrolling"
    ],
    "answer": 0,
    "explain": "That is redistricting."
   },
   {
    "sourceId": "redist",
    "q": "Who determines district lines?",
    "choices": [
     "The party in power in the state legislature",
     "The Speaker of the House",
     "The Supreme Court",
     "The census bureau"
    ],
    "answer": 0,
    "explain": "The party in power draws lines, benefiting itself."
   },
   {
    "sourceId": "baker",
    "q": "Which case involved Tennessee not redrawing its district lines?",
    "choices": [
     "Baker v. Carr",
     "Gulf of Tonkin",
     "Committee of the Whole",
     "War Powers Act"
    ],
    "answer": 0,
    "explain": "Baker v. Carr went to the Supreme Court over Tennessee's lines."
   },
   {
    "sourceId": "baker",
    "q": "Baker v. Carr was about…",
    "choices": [
     "Tennessee not redrawing its district lines",
     "The president's war powers",
     "Direct election of senators",
     "The federal income tax"
    ],
    "answer": 0,
    "explain": "Unrepresented voters challenged old district lines."
   },
   {
    "sourceId": "gerry",
    "q": "Drawing district lines to favor or hurt a specific party or group is…",
    "choices": [
     "Gerrymandering",
     "Redistricting",
     "Reapportionment",
     "Pork-barrel spending"
    ],
    "answer": 0,
    "explain": "That is gerrymandering."
   },
   {
    "sourceId": "gerry",
    "q": "What is gerrymandering?",
    "choices": [
     "Drawing district lines to favor or hurt a party/group",
     "Redistributing House seats by population",
     "Trading votes",
     "Killing a bill in committee"
    ],
    "answer": 0,
    "explain": "Gerrymandering is drawing lines for advantage."
   },
   {
    "sourceId": "divided",
    "q": "When the president is from one party but Congress is controlled by the other, it is…",
    "choices": [
     "Divided government",
     "Gridlock",
     "Partisan model",
     "Logrolling"
    ],
    "answer": 0,
    "explain": "Divided government can lead to gridlock."
   },
   {
    "sourceId": "divided",
    "q": "Divided government can lead to…",
    "choices": [
     "Gridlock",
     "Cloture",
     "Reapportionment",
     "Redistricting"
    ],
    "answer": 0,
    "explain": "Opposing control can cause gridlock."
   },
   {
    "sourceId": "senterm",
    "q": "According to the notes, how much of the Senate is reelected every 2 years?",
    "choices": [
     "1/3",
     "All of it",
     "1/2",
     "2/3"
    ],
    "answer": 0,
    "explain": "1/3 of the Senate is reelected every 2 years, so it never all changes at once."
   },
   {
    "sourceId": "senterm",
    "q": "Why doesn't the whole Senate change at once?",
    "choices": [
     "Only 1/3 of the Senate is reelected every 2 years",
     "Senators serve for life",
     "The House chooses senators",
     "Elections happen every 10 years"
    ],
    "answer": 0,
    "explain": "Staggered terms: 1/3 every 2 years."
   },
   {
    "sourceId": "nonvote",
    "q": "How many non-voting members does each chamber have, per the notes?",
    "choices": [
     "3",
     "0",
     "100",
     "435"
    ],
    "answer": 0,
    "explain": "Both chambers have 3 non-voting members."
   },
   {
    "sourceId": "nonvote",
    "q": "Which chambers have 3 non-voting members?",
    "choices": [
     "Both the House and the Senate",
     "Only the House",
     "Only the Senate",
     "Neither chamber"
    ],
    "answer": 0,
    "explain": "Both chambers have 3 non-voting members."
   },
   {
    "sourceId": "intro",
    "q": "After a bill passes a committee vote, who introduces it onto the floor?",
    "choices": [
     "Someone who is not part of that committee",
     "The committee chair",
     "The vice president",
     "The House Rules Committee chair only"
    ],
    "answer": 0,
    "explain": "A member can't introduce a bill from their own committee."
   },
   {
    "sourceId": "intro",
    "q": "What must happen before a bill goes to the floor?",
    "choices": [
     "It must pass a vote in a committee",
     "It must be signed by the president",
     "It must survive a filibuster",
     "It must be approved by a caucus"
    ],
    "answer": 0,
    "explain": "A bill must pass a committee vote first."
   },
   {
    "sourceId": "chairs",
    "q": "Who chooses committee members and chairs?",
    "choices": [
     "The Speaker of the House and the President Pro Tempore",
     "The vice president and the whips",
     "The president",
     "The minority leaders"
    ],
    "answer": 0,
    "explain": "The Speaker and the President Pro Tempore choose them."
   },
   {
    "sourceId": "chairs",
    "q": "The Constitution lets each chamber…",
    "choices": [
     "Choose its own officers",
     "Choose the president",
     "Pick Supreme Court justices",
     "Redraw district lines"
    ],
    "answer": 0,
    "explain": "Each chamber chooses its own officers."
   },
   {
    "sourceId": "wpcause",
    "q": "What caused the War Powers Resolution of 1973?",
    "choices": [
     "How much power the Gulf of Tonkin Resolution gave the president",
     "The 17th Amendment",
     "Baker v. Carr",
     "A filibuster by Strom Thurmond"
    ],
    "answer": 0,
    "explain": "Tonkin gave LBJ almost unlimited power, so the War Powers Act limited it."
   },
   {
    "sourceId": "wpcause",
    "q": "What did the War Powers Resolution of 1973 do to presidential war power?",
    "choices": [
     "Limited it",
     "Made it unlimited",
     "Gave it to the Senate alone",
     "Removed the commander in chief title"
    ],
    "answer": 0,
    "explain": "It limited presidential war power after Tonkin."
   },
   {
    "sourceId": "conflen",
    "q": "How long can a conference committee last, per the notes?",
    "choices": [
     "From a week to about a year",
     "Exactly 48 hours",
     "Exactly 2 years",
     "Only one day"
    ],
    "answer": 0,
    "explain": "Conference committees can last a week or about a year."
   },
   {
    "sourceId": "conflen",
    "q": "A conference committee is also known as the…",
    "choices": [
     "Reconciliation committee",
     "Ranking committee",
     "Rules committee",
     "Committee of the Whole"
    ],
    "answer": 0,
    "explain": "Conference committee aka reconciliation committee."
   },
   {
    "sourceId": "conflen",
    "q": "When does a conference committee meet?",
    "choices": [
     "Only when needed",
     "Every day of the session",
     "Only during filibusters",
     "Only during the census"
    ],
    "answer": 0,
    "explain": "It can be considered permanent but only meets when needed."
   },
   {
    "sourceId": "func",
    "q": "Which is one of the 5 functions of Congress in the notes?",
    "choices": [
     "Confirmation of presidential appointments",
     "Deploying troops",
     "Receiving ambassadors",
     "Redrawing districts"
    ],
    "answer": 0,
    "explain": "The 5: oversight, overseeing the bureaucracy, confirming appointments, lawmaking, representation."
   },
   {
    "sourceId": "func",
    "q": "Which is NOT one of the 5 functions of Congress in the notes?",
    "choices": [
     "Receiving ambassadors",
     "Lawmaking",
     "Representation",
     "Overseeing the bureaucracy"
    ],
    "answer": 0,
    "explain": "Congress does not receive ambassadors."
   },
   {
    "sourceId": "cotw100",
    "q": "How many representatives must be present for the Committee of the Whole?",
    "choices": [
     "100",
     "60",
     "435",
     "218"
    ],
    "answer": 0,
    "explain": "100 representatives must be present."
   },
   {
    "sourceId": "cotw100",
    "q": "The Committee of the Whole is used by…",
    "choices": [
     "Only the House",
     "Only the Senate",
     "Both chambers jointly",
     "Only conference committees"
    ],
    "answer": 0,
    "explain": "It is only for the House."
   },
   {
    "sourceId": "filrec",
    "q": "According to class notes, who held the filibuster record of 24 h 19 min?",
    "choices": [
     "Strom Thurmond",
     "Mike Johnson",
     "JD Vance",
     "LBJ"
    ],
    "answer": 0,
    "explain": "Class notes: Strom Thurmond, 24 h 19 min (since broken)."
   },
   {
    "sourceId": "uc",
    "q": "What is unanimous consent?",
    "choices": [
     "Agreement of all senators to move a bill forward",
     "60 votes to end a filibuster",
     "A 2/3 vote to override a veto",
     "Trading votes for support"
    ],
    "answer": 0,
    "explain": "Unanimous consent = all senators agree to move forward."
   },
   {
    "sourceId": "uc",
    "q": "How many senators does it take to stop unanimous consent?",
    "choices": [
     "1",
     "60",
     "51",
     "67"
    ],
    "answer": 0,
    "explain": "Just 1 senator can stop it."
   },
   {
    "sourceId": "uc",
    "q": "All senators agreeing to move a bill forward is called…",
    "choices": [
     "Unanimous consent",
     "Cloture",
     "Logrolling",
     "Sequential referral"
    ],
    "answer": 0,
    "explain": "That is unanimous consent."
   },
   {
    "sourceId": "pct",
    "q": "About what share of the budget is mandatory spending?",
    "choices": [
     "About 60%",
     "About 38%",
     "About 2%",
     "About 90%"
    ],
    "answer": 0,
    "explain": "Mandatory ~60%, discretionary ~38%."
   },
   {
    "sourceId": "pct",
    "q": "About what share of the budget is discretionary spending?",
    "choices": [
     "About 38%",
     "About 60%",
     "About 2%",
     "About 10%"
    ],
    "answer": 0,
    "explain": "Discretionary is ~38%."
   },
   {
    "sourceId": "pct",
    "q": "What is the leftover ~2% of the budget, per the notes?",
    "choices": [
     "Miscellaneous or shifts year to year between mandatory and discretionary",
     "Military spending only",
     "Pork-barrel spending",
     "Paying senators"
    ],
    "answer": 0,
    "explain": "The ~2% is miscellaneous or shifts yearly."
   },
   {
    "sourceId": "debt",
    "q": "Paying off the national debt is what kind of spending?",
    "choices": [
     "Mandatory spending",
     "Discretionary spending",
     "Pork-barrel spending",
     "Omnibus spending"
    ],
    "answer": 0,
    "explain": "Debt payment is mandatory."
   },
   {
    "sourceId": "debt",
    "q": "Which is considered mandatory spending?",
    "choices": [
     "Paying off the federal debt",
     "Military spending",
     "Pork-barrel projects",
     "Riders"
    ],
    "answer": 0,
    "explain": "Federal debt payment is mandatory."
   },
   {
    "sourceId": "gerryill",
    "q": "When is gerrymandering illegal in a court of law?",
    "choices": [
     "When it is proven it was done intentionally",
     "Always, no matter what",
     "Never",
     "Only in the Senate"
    ],
    "answer": 0,
    "explain": "It is illegal if proven intentional (usually race or party)."
   },
   {
    "sourceId": "gerryill",
    "q": "Illegal gerrymandering is usually based on…",
    "choices": [
     "Race or party",
     "Age or citizenship",
     "Census errors",
     "Committee membership"
    ],
    "answer": 0,
    "explain": "Usually based on race or party."
   },
   {
    "sourceId": "bakeryrs",
    "q": "In Baker v. Carr, how long had Tennessee gone without redrawing its lines?",
    "choices": [
     "Almost 60 years",
     "Almost 100 years",
     "10 years",
     "2 years"
    ],
    "answer": 0,
    "explain": "Tennessee hadn't redrawn lines in almost 60 years."
   },
   {
    "sourceId": "bakeryrs",
    "q": "Who brought the Baker v. Carr issue forward?",
    "choices": [
     "Voters who weren't being represented",
     "The Speaker of the House",
     "The president",
     "The Senate majority leader"
    ],
    "answer": 0,
    "explain": "Unrepresented voters needed to do something about it."
   }
  ]
 },
 "precalc-trig-identities": {
  "notice": "⚠️ Heads up: this sheet uses the standard textbook formulas, NOT your class notes or your teacher's sheet. Check it against your teacher's version, since notation or form can differ.",
  "sections": [
   {
    "title": "Sum & Difference",
    "bullets": [
     "sin(α + β) = sin α cos β + cos α sin β",
     "sin(α − β) = sin α cos β − cos α sin β",
     "cos(α + β) = cos α cos β − sin α sin β",
     "cos(α − β) = cos α cos β + sin α sin β",
     "tan(α + β) = (tan α + tan β) / (1 − tan α tan β)",
     "tan(α − β) = (tan α − tan β) / (1 + tan α tan β)",
     "Tip: sine keeps the sign; cosine flips it; tangent has the sign on top and the opposite sign on the bottom."
    ],
    "highlight": []
   },
   {
    "title": "Double-Angle",
    "bullets": [
     "sin 2x = 2 sin x cos x",
     "cos 2x = cos²x − sin²x",
     "cos 2x = 2cos²x − 1",
     "cos 2x = 1 − 2sin²x",
     "tan 2x = 2 tan x / (1 − tan²x)",
     "Tip: cos 2x has three forms: both functions, cosine only, sine only."
    ],
    "highlight": []
   },
   {
    "title": "Half-Angle",
    "bullets": [
     "sin(x/2) = ±√((1 − cos x) / 2)",
     "cos(x/2) = ±√((1 + cos x) / 2)",
     "The ± sign depends on the quadrant of x/2.",
     "Tip: sine gets 1 − cos x, cosine gets 1 + cos x."
    ],
    "highlight": []
   }
  ],
  "flashcards": [
   {
    "front": "Sine sum formula: sin(α + β) = ?",
    "back": "sin(α + β) = sin α cos β + cos α sin β"
   },
   {
    "front": "Sine difference formula: sin(α − β) = ?",
    "back": "sin(α − β) = sin α cos β − cos α sin β"
   },
   {
    "front": "Cosine sum formula: cos(α + β) = ?",
    "back": "cos(α + β) = cos α cos β − sin α sin β"
   },
   {
    "front": "Cosine difference formula: cos(α − β) = ?",
    "back": "cos(α − β) = cos α cos β + sin α sin β"
   },
   {
    "front": "Tangent sum formula: tan(α + β) = ?",
    "back": "tan(α + β) = (tan α + tan β) / (1 − tan α tan β)"
   },
   {
    "front": "Tangent difference formula: tan(α − β) = ?",
    "back": "tan(α − β) = (tan α − tan β) / (1 + tan α tan β)"
   },
   {
    "front": "Sine double-angle: sin 2x = ?",
    "back": "sin 2x = 2 sin x cos x"
   },
   {
    "front": "Cosine double-angle (sine & cosine form): cos 2x = ?",
    "back": "cos 2x = cos²x − sin²x"
   },
   {
    "front": "Cosine double-angle (cosine-only form): cos 2x = ?",
    "back": "cos 2x = 2cos²x − 1"
   },
   {
    "front": "Cosine double-angle (sine-only form): cos 2x = ?",
    "back": "cos 2x = 1 − 2sin²x"
   },
   {
    "front": "Tangent double-angle: tan 2x = ?",
    "back": "tan 2x = 2 tan x / (1 − tan²x)"
   },
   {
    "front": "Sine half-angle: sin(x/2) = ?",
    "back": "sin(x/2) = ±√((1 − cos x) / 2)  (sign depends on the quadrant of x/2)"
   },
   {
    "front": "Cosine half-angle: cos(x/2) = ?",
    "back": "cos(x/2) = ±√((1 + cos x) / 2)  (sign depends on the quadrant of x/2)"
   }
  ],
  "quiz": [
   {
    "sourceId": "sinS-nf",
    "q": "sin(α + β) = ?",
    "choices": [
     "sin α cos β + cos α sin β",
     "sin α cos β − cos α sin β",
     "cos α cos β − sin α sin β",
     "cos α cos β + sin α sin β"
    ],
    "answer": 0,
    "explain": "Sine sum: sin α cos β + cos α sin β (sine keeps the sign)."
   },
   {
    "sourceId": "sinS-nf",
    "q": "Sum formula for sine:",
    "choices": [
     "sin(α + β) = sin α cos β + cos α sin β",
     "sin(α + β) = sin α + sin β",
     "sin(α + β) = cos α cos β + sin α sin β",
     "sin(α + β) = cos α cos β − sin α sin β"
    ],
    "answer": 0,
    "explain": "sin(α + β) = sin α cos β + cos α sin β."
   },
   {
    "sourceId": "sinS-fn",
    "q": "sin α cos β + cos α sin β = ?",
    "choices": [
     "sin(α + β)",
     "sin(α − β)",
     "cos(α + β)",
     "cos(α − β)"
    ],
    "answer": 0,
    "explain": "Mixed sin·cos terms joined by + is sin(α + β)."
   },
   {
    "sourceId": "sinS-fn",
    "q": "Which formula is this?  sin(α + β) = sin α cos β + cos α sin β",
    "choices": [
     "Sum formula for sine",
     "Difference formula for sine",
     "Sum formula for cosine",
     "Double-angle formula for sine"
    ],
    "answer": 0,
    "explain": "It expands sin(α + β), so it is the sine sum formula."
   },
   {
    "sourceId": "sinS-fill",
    "q": "sin(α + β) = sin α cos β ___",
    "choices": [
     "+ cos α sin β",
     "− cos α sin β",
     "+ sin α sin β",
     "− cos α cos β"
    ],
    "answer": 0,
    "explain": "Sine sum: sin α cos β + cos α sin β."
   },
   {
    "sourceId": "sinS-fill",
    "q": "sin(α + β) = ___ + cos α sin β",
    "choices": [
     "sin α cos β",
     "cos α cos β",
     "sin α sin β",
     "cos α sin β"
    ],
    "answer": 0,
    "explain": "Sine sum starts with sin α cos β."
   },
   {
    "sourceId": "sinD-nf",
    "q": "sin(α − β) = ?",
    "choices": [
     "sin α cos β − cos α sin β",
     "sin α cos β + cos α sin β",
     "cos α cos β + sin α sin β",
     "cos α cos β − sin α sin β"
    ],
    "answer": 0,
    "explain": "Sine difference: sin α cos β − cos α sin β (sine keeps the sign)."
   },
   {
    "sourceId": "sinD-nf",
    "q": "Difference formula for sine:",
    "choices": [
     "sin(α − β) = sin α cos β − cos α sin β",
     "sin(α − β) = sin α − sin β",
     "sin(α − β) = cos α cos β − sin α sin β",
     "sin(α − β) = sin α cos β + cos α sin β"
    ],
    "answer": 0,
    "explain": "sin(α − β) = sin α cos β − cos α sin β."
   },
   {
    "sourceId": "sinD-fn",
    "q": "sin α cos β − cos α sin β = ?",
    "choices": [
     "sin(α − β)",
     "sin(α + β)",
     "cos(α − β)",
     "cos(α + β)"
    ],
    "answer": 0,
    "explain": "Mixed sin·cos terms joined by − is sin(α − β)."
   },
   {
    "sourceId": "sinD-fn",
    "q": "Which formula is this?  sin(α − β) = sin α cos β − cos α sin β",
    "choices": [
     "Difference formula for sine",
     "Sum formula for sine",
     "Difference formula for cosine",
     "Half-angle formula for sine"
    ],
    "answer": 0,
    "explain": "It expands sin(α − β), so it is the sine difference formula."
   },
   {
    "sourceId": "sinD-fill",
    "q": "sin(α − β) = sin α cos β ___",
    "choices": [
     "− cos α sin β",
     "+ cos α sin β",
     "− sin α sin β",
     "+ sin α sin β"
    ],
    "answer": 0,
    "explain": "Sine difference: sin α cos β − cos α sin β."
   },
   {
    "sourceId": "sinD-fill",
    "q": "sin(α − β) = ___ − cos α sin β",
    "choices": [
     "sin α cos β",
     "cos α cos β",
     "sin α sin β",
     "cos α sin β"
    ],
    "answer": 0,
    "explain": "Sine difference starts with sin α cos β."
   },
   {
    "sourceId": "cosS-nf",
    "q": "cos(α + β) = ?",
    "choices": [
     "cos α cos β − sin α sin β",
     "cos α cos β + sin α sin β",
     "sin α cos β + cos α sin β",
     "sin α cos β − cos α sin β"
    ],
    "answer": 0,
    "explain": "Cosine sum: cos α cos β − sin α sin β (cosine flips the sign)."
   },
   {
    "sourceId": "cosS-nf",
    "q": "Sum formula for cosine:",
    "choices": [
     "cos(α + β) = cos α cos β − sin α sin β",
     "cos(α + β) = cos α + cos β",
     "cos(α + β) = cos α cos β + sin α sin β",
     "cos(α + β) = sin α cos β + cos α sin β"
    ],
    "answer": 0,
    "explain": "cos(α + β) = cos α cos β − sin α sin β."
   },
   {
    "sourceId": "cosS-fn",
    "q": "cos α cos β − sin α sin β = ?",
    "choices": [
     "cos(α + β)",
     "cos(α − β)",
     "sin(α + β)",
     "sin(α − β)"
    ],
    "answer": 0,
    "explain": "cos·cos − sin·sin is cos(α + β): the minus sign means a sum."
   },
   {
    "sourceId": "cosS-fn",
    "q": "Which formula is this?  cos(α + β) = cos α cos β − sin α sin β",
    "choices": [
     "Sum formula for cosine",
     "Difference formula for cosine",
     "Sum formula for sine",
     "Double-angle formula for cosine"
    ],
    "answer": 0,
    "explain": "It expands cos(α + β), so it is the cosine sum formula."
   },
   {
    "sourceId": "cosS-fill",
    "q": "cos(α + β) = cos α cos β ___",
    "choices": [
     "− sin α sin β",
     "+ sin α sin β",
     "− cos α sin β",
     "+ sin α cos β"
    ],
    "answer": 0,
    "explain": "Cosine sum: cos α cos β − sin α sin β (sign flips)."
   },
   {
    "sourceId": "cosS-fill",
    "q": "cos(α + β) = ___ − sin α sin β",
    "choices": [
     "cos α cos β",
     "sin α cos β",
     "cos α sin β",
     "sin α sin β"
    ],
    "answer": 0,
    "explain": "Cosine sum starts with cos α cos β."
   },
   {
    "sourceId": "cosD-nf",
    "q": "cos(α − β) = ?",
    "choices": [
     "cos α cos β + sin α sin β",
     "cos α cos β − sin α sin β",
     "sin α cos β − cos α sin β",
     "sin α cos β + cos α sin β"
    ],
    "answer": 0,
    "explain": "Cosine difference: cos α cos β + sin α sin β (cosine flips the sign)."
   },
   {
    "sourceId": "cosD-nf",
    "q": "Difference formula for cosine:",
    "choices": [
     "cos(α − β) = cos α cos β + sin α sin β",
     "cos(α − β) = cos α − cos β",
     "cos(α − β) = cos α cos β − sin α sin β",
     "cos(α − β) = sin α cos β − cos α sin β"
    ],
    "answer": 0,
    "explain": "cos(α − β) = cos α cos β + sin α sin β."
   },
   {
    "sourceId": "cosD-fn",
    "q": "cos α cos β + sin α sin β = ?",
    "choices": [
     "cos(α − β)",
     "cos(α + β)",
     "sin(α − β)",
     "sin(α + β)"
    ],
    "answer": 0,
    "explain": "cos·cos + sin·sin is cos(α − β): the plus sign means a difference."
   },
   {
    "sourceId": "cosD-fn",
    "q": "Which formula is this?  cos(α − β) = cos α cos β + sin α sin β",
    "choices": [
     "Difference formula for cosine",
     "Sum formula for cosine",
     "Difference formula for sine",
     "Half-angle formula for cosine"
    ],
    "answer": 0,
    "explain": "It expands cos(α − β), so it is the cosine difference formula."
   },
   {
    "sourceId": "cosD-fill",
    "q": "cos(α − β) = cos α cos β ___",
    "choices": [
     "+ sin α sin β",
     "− sin α sin β",
     "+ cos α sin β",
     "− sin α cos β"
    ],
    "answer": 0,
    "explain": "Cosine difference: cos α cos β + sin α sin β (sign flips)."
   },
   {
    "sourceId": "cosD-fill",
    "q": "cos(α − β) = ___ + sin α sin β",
    "choices": [
     "cos α cos β",
     "sin α cos β",
     "cos α sin β",
     "sin α sin β"
    ],
    "answer": 0,
    "explain": "Cosine difference starts with cos α cos β."
   },
   {
    "sourceId": "tanS-nf",
    "q": "tan(α + β) = ?",
    "choices": [
     "(tan α + tan β) / (1 − tan α tan β)",
     "(tan α − tan β) / (1 + tan α tan β)",
     "(tan α + tan β) / (1 + tan α tan β)",
     "(tan α − tan β) / (1 − tan α tan β)"
    ],
    "answer": 0,
    "explain": "Tangent sum: top keeps +, bottom is 1 − tan α tan β."
   },
   {
    "sourceId": "tanS-nf",
    "q": "Sum formula for tangent:",
    "choices": [
     "tan(α + β) = (tan α + tan β) / (1 − tan α tan β)",
     "tan(α + β) = tan α + tan β",
     "tan(α + β) = (tan α − tan β) / (1 + tan α tan β)",
     "tan(α + β) = (1 − tan α tan β) / (tan α + tan β)"
    ],
    "answer": 0,
    "explain": "tan(α + β) = (tan α + tan β) / (1 − tan α tan β)."
   },
   {
    "sourceId": "tanS-fn",
    "q": "(tan α + tan β) / (1 − tan α tan β) = ?",
    "choices": [
     "tan(α + β)",
     "tan(α − β)",
     "tan 2α",
     "cot(α + β)"
    ],
    "answer": 0,
    "explain": "+ on top, − on the bottom is tan(α + β)."
   },
   {
    "sourceId": "tanS-fn",
    "q": "Which formula is this?  tan(α + β) = (tan α + tan β) / (1 − tan α tan β)",
    "choices": [
     "Sum formula for tangent",
     "Difference formula for tangent",
     "Double-angle formula for tangent",
     "Sum formula for sine"
    ],
    "answer": 0,
    "explain": "It expands tan(α + β), so it is the tangent sum formula."
   },
   {
    "sourceId": "tanS-fill",
    "q": "tan(α + β) = (tan α + tan β) / ( ___ )",
    "choices": [
     "1 − tan α tan β",
     "1 + tan α tan β",
     "tan α tan β − 1",
     "1 − tan α − tan β"
    ],
    "answer": 0,
    "explain": "Tangent sum denominator: 1 − tan α tan β."
   },
   {
    "sourceId": "tanS-fill",
    "q": "tan(α + β) = (tan α ☐ tan β) / (1 ☐ tan α tan β). Which signs go in the boxes, in order?",
    "choices": [
     "+, −",
     "+, +",
     "−, +",
     "−, −"
    ],
    "answer": 0,
    "explain": "Sum: + on top, − on the bottom."
   },
   {
    "sourceId": "tanD-nf",
    "q": "tan(α − β) = ?",
    "choices": [
     "(tan α − tan β) / (1 + tan α tan β)",
     "(tan α + tan β) / (1 − tan α tan β)",
     "(tan α − tan β) / (1 − tan α tan β)",
     "(tan α + tan β) / (1 + tan α tan β)"
    ],
    "answer": 0,
    "explain": "Tangent difference: top has −, bottom is 1 + tan α tan β."
   },
   {
    "sourceId": "tanD-nf",
    "q": "Difference formula for tangent:",
    "choices": [
     "tan(α − β) = (tan α − tan β) / (1 + tan α tan β)",
     "tan(α − β) = tan α − tan β",
     "tan(α − β) = (tan α + tan β) / (1 − tan α tan β)",
     "tan(α − β) = (1 + tan α tan β) / (tan α − tan β)"
    ],
    "answer": 0,
    "explain": "tan(α − β) = (tan α − tan β) / (1 + tan α tan β)."
   },
   {
    "sourceId": "tanD-fn",
    "q": "(tan α − tan β) / (1 + tan α tan β) = ?",
    "choices": [
     "tan(α − β)",
     "tan(α + β)",
     "tan 2α",
     "cot(α − β)"
    ],
    "answer": 0,
    "explain": "− on top, + on the bottom is tan(α − β)."
   },
   {
    "sourceId": "tanD-fn",
    "q": "Which formula is this?  tan(α − β) = (tan α − tan β) / (1 + tan α tan β)",
    "choices": [
     "Difference formula for tangent",
     "Sum formula for tangent",
     "Double-angle formula for tangent",
     "Difference formula for sine"
    ],
    "answer": 0,
    "explain": "It expands tan(α − β), so it is the tangent difference formula."
   },
   {
    "sourceId": "tanD-fill",
    "q": "tan(α − β) = (tan α − tan β) / ( ___ )",
    "choices": [
     "1 + tan α tan β",
     "1 − tan α tan β",
     "tan α tan β − 1",
     "1 + tan α − tan β"
    ],
    "answer": 0,
    "explain": "Tangent difference denominator: 1 + tan α tan β."
   },
   {
    "sourceId": "tanD-fill",
    "q": "tan(α − β) = (tan α ☐ tan β) / (1 ☐ tan α tan β). Which signs go in the boxes, in order?",
    "choices": [
     "−, +",
     "+, −",
     "−, −",
     "+, +"
    ],
    "answer": 0,
    "explain": "Difference: − on top, + on the bottom."
   },
   {
    "sourceId": "sin2-nf",
    "q": "sin 2x = ?",
    "choices": [
     "2 sin x cos x",
     "2 sin x",
     "sin x cos x",
     "cos²x − sin²x"
    ],
    "answer": 0,
    "explain": "sin 2x = 2 sin x cos x."
   },
   {
    "sourceId": "sin2-nf",
    "q": "Double-angle formula for sine:",
    "choices": [
     "sin 2x = 2 sin x cos x",
     "sin 2x = 2 sin x",
     "sin 2x = sin²x − cos²x",
     "sin 2x = 2 tan x / (1 − tan²x)"
    ],
    "answer": 0,
    "explain": "sin 2x = 2 sin x cos x."
   },
   {
    "sourceId": "sin2-fn",
    "q": "2 sin x cos x = ?",
    "choices": [
     "sin 2x",
     "cos 2x",
     "sin²x",
     "tan 2x"
    ],
    "answer": 0,
    "explain": "2 sin x cos x is sin 2x."
   },
   {
    "sourceId": "sin2-fn",
    "q": "Which formula is this?  sin 2x = 2 sin x cos x",
    "choices": [
     "Double-angle formula for sine",
     "Double-angle formula for cosine",
     "Half-angle formula for sine",
     "Sum formula for cosine"
    ],
    "answer": 0,
    "explain": "sin 2x = 2 sin x cos x is the sine double-angle formula."
   },
   {
    "sourceId": "sin2-fill",
    "q": "sin 2x = 2 sin x ___",
    "choices": [
     "cos x",
     "sin x",
     "tan x",
     "cos 2x"
    ],
    "answer": 0,
    "explain": "sin 2x = 2 sin x cos x."
   },
   {
    "sourceId": "sin2-fill",
    "q": "sin 2x = ___ sin x cos x",
    "choices": [
     "2",
     "½",
     "4",
     "−2"
    ],
    "answer": 0,
    "explain": "The coefficient is 2: sin 2x = 2 sin x cos x."
   },
   {
    "sourceId": "cos2a-nf",
    "q": "cos 2x = ? (the form with both sine and cosine)",
    "choices": [
     "cos²x − sin²x",
     "sin²x − cos²x",
     "cos²x + sin²x",
     "2 sin x cos x"
    ],
    "answer": 0,
    "explain": "cos 2x = cos²x − sin²x (cosine squared first)."
   },
   {
    "sourceId": "cos2a-nf",
    "q": "Double-angle formula for cosine, sine-and-cosine form:",
    "choices": [
     "cos 2x = cos²x − sin²x",
     "cos 2x = sin²x − cos²x",
     "cos 2x = cos²x + sin²x",
     "cos 2x = 2 cos x sin x"
    ],
    "answer": 0,
    "explain": "cos 2x = cos²x − sin²x."
   },
   {
    "sourceId": "cos2a-fn",
    "q": "cos²x − sin²x = ?",
    "choices": [
     "cos 2x",
     "sin 2x",
     "1",
     "cos(x/2)"
    ],
    "answer": 0,
    "explain": "cos²x − sin²x is cos 2x (cos²x + sin²x would be 1)."
   },
   {
    "sourceId": "cos2a-fn",
    "q": "Which formula is this?  cos 2x = cos²x − sin²x",
    "choices": [
     "Double-angle formula for cosine",
     "Double-angle formula for sine",
     "Half-angle formula for sine",
     "Difference formula for cosine"
    ],
    "answer": 0,
    "explain": "It rewrites cos 2x, so it is a cosine double-angle form."
   },
   {
    "sourceId": "cos2a-fill",
    "q": "cos 2x = cos²x ___",
    "choices": [
     "− sin²x",
     "+ sin²x",
     "− 2sin²x",
     "− sin x"
    ],
    "answer": 0,
    "explain": "cos 2x = cos²x − sin²x."
   },
   {
    "sourceId": "cos2a-fill",
    "q": "cos 2x = ___ − sin²x",
    "choices": [
     "cos²x",
     "2cos²x",
     "1",
     "cos x"
    ],
    "answer": 0,
    "explain": "cos 2x = cos²x − sin²x."
   },
   {
    "sourceId": "cos2b-nf",
    "q": "cos 2x = ? (the cosine-only form)",
    "choices": [
     "2cos²x − 1",
     "1 − 2cos²x",
     "2cos²x + 1",
     "cos²x − 1"
    ],
    "answer": 0,
    "explain": "Cosine-only form: cos 2x = 2cos²x − 1."
   },
   {
    "sourceId": "cos2b-nf",
    "q": "Double-angle formula for cosine, written with cosine only:",
    "choices": [
     "cos 2x = 2cos²x − 1",
     "cos 2x = 1 − 2cos²x",
     "cos 2x = 2cos x − 1",
     "cos 2x = 2cos²x + 1"
    ],
    "answer": 0,
    "explain": "cos 2x = 2cos²x − 1."
   },
   {
    "sourceId": "cos2b-fn",
    "q": "2cos²x − 1 = ?",
    "choices": [
     "cos 2x",
     "sin 2x",
     "cos(x/2)",
     "tan 2x"
    ],
    "answer": 0,
    "explain": "2cos²x − 1 is cos 2x."
   },
   {
    "sourceId": "cos2b-fn",
    "q": "Which formula is this?  cos 2x = 2cos²x − 1",
    "choices": [
     "Double-angle formula for cosine",
     "Double-angle formula for sine",
     "Half-angle formula for sine",
     "Sum formula for tangent"
    ],
    "answer": 0,
    "explain": "It rewrites cos 2x, so it is a cosine double-angle form."
   },
   {
    "sourceId": "cos2b-fill",
    "q": "cos 2x = 2cos²x ___",
    "choices": [
     "− 1",
     "+ 1",
     "− 2",
     "− sin²x"
    ],
    "answer": 0,
    "explain": "cos 2x = 2cos²x − 1."
   },
   {
    "sourceId": "cos2b-fill",
    "q": "cos 2x = ___ − 1",
    "choices": [
     "2cos²x",
     "2sin²x",
     "cos²x",
     "2cos x"
    ],
    "answer": 0,
    "explain": "cos 2x = 2cos²x − 1."
   },
   {
    "sourceId": "cos2c-nf",
    "q": "cos 2x = ? (the sine-only form)",
    "choices": [
     "1 − 2sin²x",
     "2sin²x − 1",
     "1 + 2sin²x",
     "1 − sin²x"
    ],
    "answer": 0,
    "explain": "Sine-only form: cos 2x = 1 − 2sin²x."
   },
   {
    "sourceId": "cos2c-nf",
    "q": "Double-angle formula for cosine, written with sine only:",
    "choices": [
     "cos 2x = 1 − 2sin²x",
     "cos 2x = 2sin²x − 1",
     "cos 2x = 1 − 2sin x",
     "cos 2x = 1 + 2sin²x"
    ],
    "answer": 0,
    "explain": "cos 2x = 1 − 2sin²x."
   },
   {
    "sourceId": "cos2c-fn",
    "q": "1 − 2sin²x = ?",
    "choices": [
     "cos 2x",
     "sin 2x",
     "cos²x",
     "tan 2x"
    ],
    "answer": 0,
    "explain": "1 − 2sin²x is cos 2x (1 − sin²x would be cos²x)."
   },
   {
    "sourceId": "cos2c-fn",
    "q": "Which formula is this?  cos 2x = 1 − 2sin²x",
    "choices": [
     "Double-angle formula for cosine",
     "Double-angle formula for sine",
     "Half-angle formula for sine",
     "Difference formula for sine"
    ],
    "answer": 0,
    "explain": "It rewrites cos 2x, so it is a cosine double-angle form."
   },
   {
    "sourceId": "cos2c-fill",
    "q": "cos 2x = 1 − ___",
    "choices": [
     "2sin²x",
     "2cos²x",
     "sin²x",
     "2sin x"
    ],
    "answer": 0,
    "explain": "cos 2x = 1 − 2sin²x."
   },
   {
    "sourceId": "cos2c-fill",
    "q": "cos 2x = ___ − 2sin²x",
    "choices": [
     "1",
     "2",
     "cos²x",
     "−1"
    ],
    "answer": 0,
    "explain": "cos 2x = 1 − 2sin²x."
   },
   {
    "sourceId": "cos2not",
    "q": "Which is NOT a form of cos 2x?",
    "choices": [
     "2 sin x cos x",
     "cos²x − sin²x",
     "2cos²x − 1",
     "1 − 2sin²x"
    ],
    "answer": 0,
    "explain": "2 sin x cos x is sin 2x; the other three are the cos 2x forms."
   },
   {
    "sourceId": "cos2not",
    "q": "Which is NOT a form of cos 2x?",
    "choices": [
     "1 − 2cos²x",
     "cos²x − sin²x",
     "2cos²x − 1",
     "1 − 2sin²x"
    ],
    "answer": 0,
    "explain": "1 − 2cos²x has the signs backwards; the cos-only form is 2cos²x − 1."
   },
   {
    "sourceId": "cos2not",
    "q": "Which is NOT a form of cos 2x?",
    "choices": [
     "sin²x − cos²x",
     "cos²x − sin²x",
     "2cos²x − 1",
     "1 − 2sin²x"
    ],
    "answer": 0,
    "explain": "sin²x − cos²x is backwards; the right form is cos²x − sin²x."
   },
   {
    "sourceId": "tan2-nf",
    "q": "tan 2x = ?",
    "choices": [
     "2 tan x / (1 − tan²x)",
     "2 tan x / (1 + tan²x)",
     "2 tan x",
     "(1 − tan²x) / (2 tan x)"
    ],
    "answer": 0,
    "explain": "tan 2x = 2 tan x / (1 − tan²x)."
   },
   {
    "sourceId": "tan2-nf",
    "q": "Double-angle formula for tangent:",
    "choices": [
     "tan 2x = 2 tan x / (1 − tan²x)",
     "tan 2x = 2 tan x",
     "tan 2x = 2 tan x / (1 + tan²x)",
     "tan 2x = tan²x / (1 − 2 tan x)"
    ],
    "answer": 0,
    "explain": "tan 2x = 2 tan x / (1 − tan²x)."
   },
   {
    "sourceId": "tan2-fn",
    "q": "2 tan x / (1 − tan²x) = ?",
    "choices": [
     "tan 2x",
     "sin 2x",
     "tan²x",
     "cot 2x"
    ],
    "answer": 0,
    "explain": "2 tan x over 1 − tan²x is tan 2x."
   },
   {
    "sourceId": "tan2-fn",
    "q": "Which formula is this?  tan 2x = 2 tan x / (1 − tan²x)",
    "choices": [
     "Double-angle formula for tangent",
     "Sum formula for tangent",
     "Double-angle formula for sine",
     "Half-angle formula for cosine"
    ],
    "answer": 0,
    "explain": "It rewrites tan 2x, so it is the tangent double-angle formula."
   },
   {
    "sourceId": "tan2-fill",
    "q": "tan 2x = 2 tan x / ( ___ )",
    "choices": [
     "1 − tan²x",
     "1 + tan²x",
     "tan²x − 1",
     "1 − 2 tan x"
    ],
    "answer": 0,
    "explain": "tan 2x = 2 tan x / (1 − tan²x)."
   },
   {
    "sourceId": "tan2-fill",
    "q": "tan 2x = ___ / (1 − tan²x)",
    "choices": [
     "2 tan x",
     "tan x",
     "2 tan²x",
     "tan 2x"
    ],
    "answer": 0,
    "explain": "tan 2x = 2 tan x / (1 − tan²x)."
   },
   {
    "sourceId": "sinH-nf",
    "q": "sin(x/2) = ?",
    "choices": [
     "±√((1 − cos x) / 2)",
     "±√((1 + cos x) / 2)",
     "±√((1 − sin x) / 2)",
     "±(1 − cos x) / 2"
    ],
    "answer": 0,
    "explain": "sin(x/2) = ±√((1 − cos x) / 2): sine gets the minus."
   },
   {
    "sourceId": "sinH-nf",
    "q": "Half-angle formula for sine:",
    "choices": [
     "sin(x/2) = ±√((1 − cos x) / 2)",
     "sin(x/2) = ±√((1 + cos x) / 2)",
     "sin(x/2) = ½ sin x",
     "sin(x/2) = ±√(1 − cos x)"
    ],
    "answer": 0,
    "explain": "sin(x/2) = ±√((1 − cos x) / 2)."
   },
   {
    "sourceId": "sinH-fn",
    "q": "±√((1 − cos x) / 2) = ?",
    "choices": [
     "sin(x/2)",
     "cos(x/2)",
     "sin 2x",
     "cos 2x"
    ],
    "answer": 0,
    "explain": "1 − cos x under the root is sin(x/2)."
   },
   {
    "sourceId": "sinH-fn",
    "q": "Which formula is this?  sin(x/2) = ±√((1 − cos x) / 2)",
    "choices": [
     "Half-angle formula for sine",
     "Half-angle formula for cosine",
     "Double-angle formula for sine",
     "Difference formula for sine"
    ],
    "answer": 0,
    "explain": "It gives sin(x/2), so it is the sine half-angle formula."
   },
   {
    "sourceId": "sinH-fill",
    "q": "sin(x/2) = ±√(( ___ ) / 2)",
    "choices": [
     "1 − cos x",
     "1 + cos x",
     "1 − sin x",
     "cos x − 1"
    ],
    "answer": 0,
    "explain": "sin(x/2) = ±√((1 − cos x) / 2)."
   },
   {
    "sourceId": "sinH-fill",
    "q": "sin(x/2) = ___ √((1 − cos x) / 2)",
    "choices": [
     "±",
     "+ only",
     "− only",
     "½"
    ],
    "answer": 0,
    "explain": "Half-angle formulas have ±; pick the sign from the quadrant of x/2."
   },
   {
    "sourceId": "cosH-nf",
    "q": "cos(x/2) = ?",
    "choices": [
     "±√((1 + cos x) / 2)",
     "±√((1 − cos x) / 2)",
     "±√((1 + sin x) / 2)",
     "±(1 + cos x) / 2"
    ],
    "answer": 0,
    "explain": "cos(x/2) = ±√((1 + cos x) / 2): cosine gets the plus."
   },
   {
    "sourceId": "cosH-nf",
    "q": "Half-angle formula for cosine:",
    "choices": [
     "cos(x/2) = ±√((1 + cos x) / 2)",
     "cos(x/2) = ±√((1 − cos x) / 2)",
     "cos(x/2) = ½ cos x",
     "cos(x/2) = ±√(1 + cos x)"
    ],
    "answer": 0,
    "explain": "cos(x/2) = ±√((1 + cos x) / 2)."
   },
   {
    "sourceId": "cosH-fn",
    "q": "±√((1 + cos x) / 2) = ?",
    "choices": [
     "cos(x/2)",
     "sin(x/2)",
     "cos 2x",
     "sin 2x"
    ],
    "answer": 0,
    "explain": "1 + cos x under the root is cos(x/2)."
   },
   {
    "sourceId": "cosH-fn",
    "q": "Which formula is this?  cos(x/2) = ±√((1 + cos x) / 2)",
    "choices": [
     "Half-angle formula for cosine",
     "Half-angle formula for sine",
     "Double-angle formula for sine",
     "Sum formula for cosine"
    ],
    "answer": 0,
    "explain": "It gives cos(x/2), so it is the cosine half-angle formula."
   },
   {
    "sourceId": "cosH-fill",
    "q": "cos(x/2) = ±√(( ___ ) / 2)",
    "choices": [
     "1 + cos x",
     "1 − cos x",
     "1 + sin x",
     "cos x − 1"
    ],
    "answer": 0,
    "explain": "cos(x/2) = ±√((1 + cos x) / 2)."
   },
   {
    "sourceId": "cosH-fill",
    "q": "cos(x/2) = ±√((1 + cos x) / ___ )",
    "choices": [
     "2",
     "4",
     "x",
     "cos x"
    ],
    "answer": 0,
    "explain": "cos(x/2) = ±√((1 + cos x) / 2)."
   },
   {
    "sourceId": "halfsign",
    "q": "In the half-angle formulas, how do you choose + or − ?",
    "choices": [
     "By the quadrant of x/2",
     "By the quadrant of x",
     "By whether x is positive or negative",
     "You always keep both answers"
    ],
    "answer": 0,
    "explain": "The sign depends on the quadrant where x/2 lands."
   },
   {
    "sourceId": "halfsign",
    "q": "If x/2 is in Quadrant II, sin(x/2) is…",
    "choices": [
     "Positive (+)",
     "Negative (−)",
     "Either sign",
     "Undefined"
    ],
    "answer": 0,
    "explain": "Sine is positive in Quadrant II, so use +."
   },
   {
    "sourceId": "halfsign",
    "q": "If x/2 is in Quadrant III, cos(x/2) is…",
    "choices": [
     "Negative (−)",
     "Positive (+)",
     "Either sign",
     "Undefined"
    ],
    "answer": 0,
    "explain": "Cosine is negative in Quadrant III, so use −."
   }
  ]
 },
 "apgov-u5-presidency": {
  "notice": "⚠️ Chapter 5 notes: built from your AMSCO worksheet and your two notebook pages. Terms you highlighted in your notebook show as \"★ Likely on test\". A few worksheet answers are still unreadable (see \"Still not included\" at the end of the guide). Federalist No. 70 is the one exception: it is added from the essay's own text (not your notes), and those four guide sections are marked with an orange banner. Its quiz explanations start with \"Fed 70:\". Everything else comes only from your notes. Check it against your own sheets.",
  "sections": [
   {
    "title": "Essential Questions & Checkpoint Tip",
    "bullets": [
     "1. How can a president implement a policy agenda?",
     "2. How could the president's agenda contribute to confrontations with Congress?",
     "3. How have presidents interpreted and explained their use of formal and informal powers?",
     "4. How has communication technology changed the president's relationship with the American people and other branches?",
     "Chapter 5 Checkpoint tip: use process of elimination with an internal monologue, and make sure you can verbally justify why the correct answer is correct and the incorrect options are incorrect."
    ],
    "highlight": []
   },
   {
    "title": "2.4 Roles & Powers: Policy Agenda, Framers, Article II",
    "bullets": [
     "A. Framers' Vision: the framers wanted a single executive for clear leadership and accountability.",
     "B. Article II: the president must be a natural-born citizen and a U.S. resident for 14 years. (The age requirement and the list of powers are not readable; check your sheet.)",
     "C. Formal powers are written in the Constitution. Examples from her notes: power to appoint judges, issue pardons, veto or approve bills."
    ],
    "highlight": [
     "Policy agenda: a set of issues significant to people involved in policymaking with the president.",
     "Formal powers: powers stated in the Constitution (appoint judges, issue pardons, veto/approve bills).",
     "Power of the sword: the president has the \"power of the sword\" (highlighted, no explanation in her notes)."
    ]
   },
   {
    "title": "2.4 Chief Legislator & the Veto",
    "bullets": [
     "D. Chief Legislator: the president can't introduce bills directly but can recommend laws and pressure Congress.",
     "Examples: State of the Union, bargaining and persuasion, threatening a veto.",
     "Congressional override: if 2/3 of Congress votes to override the president's veto, the law is put in place.",
     "Line-item veto: the president could veto or remove a certain line of a bill. It is not allowed anymore (but presidents want it back); the Supreme Court struck down the 1996 law that granted it."
    ],
    "highlight": [
     "Chief legislator: the president may recommend to Congress if necessary.",
     "Veto: the final stamp of approval or rejection.",
     "Pocket veto: Congress is not in session and gets no response from the president, so the bill just dies. It is a formal power."
    ]
   },
   {
    "title": "2.4 Commander in Chief & Chief Diplomat",
    "bullets": [
     "G. Commander in Chief: the president commands the military, but must have congressional approval to wage war (Congress declares war).",
     "Presidents claim \"in self-defense\" lets them use force to respond to immediate threats.",
     "By the Constitution, the Senate deals with treaties only (the House is not involved). The House has basically no power in foreign policy except voting on war.",
     "Executive agreements: a \"contract\" between 2 heads of state; they ensure security, speed things up, and avoid clashes with senators.",
     "Executive agreements cannot violate prior treaties or Congressional Acts, are only binding while the current president is in office, and can cause conflicts because members of Congress may not agree.",
     "Kennedy used an executive agreement to help end the Cuban Missile Crisis."
    ],
    "highlight": [
     "Commander in chief: commands the military, but needs congressional approval to wage war.",
     "Chief diplomat: handles foreign affairs.",
     "Executive agreement: doesn't require Senate approval, so it is easier to obtain.",
     "Treaty: requires a 2/3 vote by the Senate, so it is harder to obtain.",
     "Executive agreements: a \"contract\" between 2 heads of state (highlighted again in her notes)."
    ]
   },
   {
    "title": "2.4 Panama Canal, Chief Executive & Executive Orders",
    "bullets": [
     "I. Panama Canal: Theodore Roosevelt used \"gunboat diplomacy\" to gain control of the Canal Zone.",
     "Jimmy Carter supported returning the canal to Panama because he believed it was fair and improved relations.",
     "As chief executive, the president oversees all federal agencies, appoints directors, creates policies, and appoints federal and Supreme Court judges. He acts like a CEO of a corporation.",
     "J. Executive orders direct the executive branch but cannot violate laws or the Constitution."
    ],
    "highlight": [
     "Executive order: a presidential directive that has the force of a law. It is temporary (only during his or her time in office). Example: EO 9066 (Japanese internment camps).",
     "Executive orders can't alter the tax code, redesign currency, or make new interstate commerce laws, and can't overstep into Congress' territory (informal power)."
    ]
   },
   {
    "title": "2.4 cont'd Informal Powers of the President",
    "bullets": [
     "Signing statement: HATED by Congress, seen as stepping into \"their territory.\" It is sometimes seen as violating the separation of powers (this is why critics say it violates the lawmaking design).",
     "Signing statements are sometimes used to express discontent with a bill instead of vetoing it, so that Congress can't override the veto.",
     "Executive privilege: claimed as necessary by past presidents because they do not need to make public what they have talked about with their advisors.",
     "On the worksheet: executive privilege protects some presidential information but is not absolute (U.S. v. Nixon)."
    ],
    "highlight": [
     "Informal powers of the president (her notes bracket signing statement and executive privilege together).",
     "Signing statement: the president's commentary when signing a bill into law; he puts in writing his interpretation of the bill and how he plans to enforce it.",
     "Executive privilege: the right to withhold information or decision-making from another branch, especially Congress."
    ]
   },
   {
    "title": "2.5 Checks on the Presidency: Team, VP, Cabinet (pp. 200–209)",
    "bullets": [
     "Congress checks the president by overriding vetoes, controlling spending, confirming appointments, and impeachment.",
     "A. The President's Team: the president appoints officials, while the Senate confirms many of them.",
     "Cabinet heads, ambassadors, and federal and Supreme Court judges must be approved by the Senate. Judges are heavily contested because they are lifetime appointments.",
     "B. The Vice President: presides over the Senate and replaces the president if necessary.",
     "The VP can have a lot of power or very little, and the job title is not super concrete.",
     "C. Cabinet & Bureaucracy: Cabinet secretaries lead departments and help carry out presidential policies.",
     "The Secretary of Defense serves the president, not the military, and must be confirmed by the Senate.",
     "The State Department handles foreign affairs, while the Defense Department handles the military.",
     "Federal agencies carry out laws and government programs."
    ],
    "highlight": [
     "Advice and consent: the Senate's confirmation or rejection of appointments.",
     "Vice president: president of the Senate, second in line to the president."
    ]
   },
   {
    "title": "2.5 Immediate Staff, Other Branches, Checks",
    "bullets": [
     "D. Immediate Staff: the Executive Office of the President (EOP, aka the West Wing) provides advice and support to the president.",
     "No one on the White House staff has to be confirmed by the Senate, and they don't even have to have experience.",
     "White House staff usually have a closer relationship with the president than Cabinet secretaries.",
     "The president seeks the chief of staff's opinions on many issues.",
     "E. Interactions with Other Branches: conflict can occur because the president needs Congress to provide funding. The president should have a good relationship with Congress so his bills can pass and he can avoid gridlock.",
     "F. Checks on Presidential Powers: Congress and the courts check the president, while inherent powers are powers claimed as necessary."
    ],
    "highlight": [
     "Chief of staff: makes sure the White House staff runs smoothly (also manages the White House and controls access to the president)."
    ]
   },
   {
    "title": "2.5 Senate & Appointees, Removal, Courts",
    "bullets": [
     "G. The Senate confirms many presidential appointees.",
     "A recess appointee serves as a replacement until the Senate reconvenes and votes on a new official.",
     "John Tower faced concerns about his conduct, while Betsy DeVos faced opposition over her education views and qualifications.",
     "H. Removal: presidents generally have the power to remove executive officials; the Supreme Court says some limits exist.",
     "I. Judicial Interactions: courts can review presidential actions for legality and constitutionality.",
     "Judicial appointments matter because judges have life terms."
    ],
    "highlight": [
     "Recess appointment: appointing someone while Congress isn't in session."
    ]
   },
   {
    "title": "2.6 Expansion of Presidential Power (pp. 210–217)",
    "bullets": [
     "The presidency grew stronger because of wars, crises, technology, and government growth.",
     "A. An Enhanced Presidency: wars, crises, and technology have increased presidential power.",
     "B. Interpretation of Power: Washington established precedents like creating a cabinet.",
     "The \"imperial presidency\" (characterized by historian Arthur Schlesinger Jr.) is a very powerful presidency.",
     "C. Personality & Popularity: Andrew Jackson used his popularity and veto power to expand presidential influence.",
     "D. National Crisis: Lincoln suspended habeas corpus and took emergency actions during the Civil War.",
     "E. On the World Stage: Theodore Roosevelt and Woodrow Wilson expanded presidential involvement in foreign affairs.",
     "F. The Turning Point: FDR expanded government through the New Deal and WWII leadership.",
     "FDR's court-packing plan would have added Supreme Court justices.",
     "The 22nd Amendment limits presidents to 2 elected terms.",
     "G. Contemporary Expansion: the Gulf of Tonkin Resolution gave LBJ broad authority in Vietnam.",
     "The War Powers Act limits presidential military action and requires congressional notification.",
     "Trump declared a border emergency and redirected funds toward a border wall."
    ],
    "highlight": []
   },
   {
    "title": "2.7 Presidential Communication (pp. 218–223)",
    "bullets": [
     "Technology allows presidents to communicate directly and quickly with Americans.",
     "A. Communicator in Chief: communication helps presidents gain public support for their policies.",
     "B. Relationship with the Press: the bully pulpit is the president's ability to influence public opinion (Theodore Roosevelt on the worksheet).",
     "FDR used fireside chats to explain his policies.",
     "C. State of the Union: informs Congress about the country's condition and priorities.",
     "Woodrow Wilson delivered it in person, making it a stronger political tool.",
     "D. Communications Staff: the press secretary communicates the administration's views to the media.",
     "George W. Bush's administration used controlled media access to influence coverage.",
     "E. Modern Technology & a Social Media President: Obama used social media and digital platforms to reach Americans.",
     "Obama's team used photos and digital content to shape his public image.",
     "Trump used Twitter to communicate directly and immediately with the public."
    ],
    "highlight": []
   },
   {
    "title": "Federalist No. 70 (1/4): Energy in the Executive",
    "bullets": [
     "Title: “The Executive Department Further Considered.” Written by Hamilton (signed Publius), March 18, 1788, “To the People of the State of New York.”",
     "Hamilton starts by rejecting the idea that a vigorous Executive is inconsistent with republican government. He hopes that idea is “destitute of foundation.”",
     "Energy in the Executive is essential to: protecting the community against foreign attacks; the steady administration of the laws; protecting property against high-handed combinations that interrupt justice; and securing liberty against ambition, faction, and anarchy.",
     "Rome example: Rome often had to take refuge in the absolute power of a single man, the Dictator, against ambitious individuals, seditions, and foreign enemies.",
     "A feeble Executive means a feeble execution of the government. A feeble execution is a bad execution, and a government ill executed is, in practice, a bad government.",
     "Hamilton's three questions: (1) What ingredients make up energy? (2) How far can they combine with the ingredients of safety? (3) How far does that combination describe the plan reported by the convention?",
     "In this essay Hamilton only lists duration, adequate provision for support, competent powers, and dependence on the people. The essay itself spends its time on unity and on responsibility."
    ],
    "highlight": [
     "Energy in the Executive is “a leading character in the definition of good government.”",
     "The four ingredients of energy: unity, duration, an adequate provision for its support, and competent powers.",
     "The two ingredients of safety in the republican sense: a due dependence on the people and a due responsibility."
    ],
    "banner": "📜 This section comes from the text of Federalist No. 70, not from Reese's notes."
   },
   {
    "title": "Federalist No. 70 (2/4): Unity vs. Plurality",
    "bullets": [
     "Celebrated statesmen favored a single Executive and a numerous legislature. They saw energy as most applicable to power in a single hand, and the legislature as best for deliberation and wisdom.",
     "Decision, activity, secrecy, and despatch (speed) mark one man's proceedings more than any greater number's. As the number grows, these qualities shrink.",
     "Example of two equal magistrates: the two Consuls of Rome. Example of one man controlled by counsellors: the constitutions of several States.",
     "Hamilton says (“if I recollect right”) that New York and New Jersey are the only States that gave executive authority wholly to single men.",
     "The votaries of an executive council are the most numerous. The objections to both plural methods are similar, so he examines them together.",
     "Experience of other nations: it teaches us not to be enamoured of plurality. The Achaeans tried two Praetors and abolished one. Rome had many mischiefs from dissensions between the Consuls and between the military Tribunes.",
     "Why Rome's dissensions weren't worse: the Consuls were usually patricians, united by defending their order's privileges, and they divided the administration by lot (one at Rome, one in the distant provinces).",
     "Using reason and good sense, Hamilton finds much greater cause to reject plurality than to approve it."
    ],
    "highlight": [
     "Unity is conducive to energy: decision, activity, secrecy, and despatch.",
     "Unity can be destroyed two ways: (1) two or more magistrates of equal dignity and authority, or (2) one man controlled by counsellors.",
     "Hamilton rejects plurality in the Executive “under any modification whatever.”"
    ],
    "banner": "📜 This section comes from the text of Federalist No. 70, not from Reese's notes."
   },
   {
    "title": "Federalist No. 70 (3/4): Dissension and Councils",
    "bullets": [
     "Where two or more people share an enterprise, there is danger of differing opinions. With equal dignity and authority, there is danger of personal emulation and animosity, and bitter dissensions.",
     "Dissensions lessen respectability, weaken authority, and distract plans. In an emergency they could block important measures and split the community into violent, irreconcilable factions.",
     "Men often oppose a thing because they had no part in planning it or dislike its planners. If consulted and they disapprove, opposition becomes “an indispensable duty of self-love.” Society's interests get sacrificed to “vanity,” “conceit,” and “obstinacy.”",
     "In the legislature, differences promote deliberation and circumspection and check the majority's excesses. There, promptitude of decision is oftener an evil than a benefit. So dissensions must be accepted there.",
     "In the Executive, dissension is “pure and unmixed.” It weakens vigor and expedition from the first step to the last, with no counterbalancing good.",
     "A council whose agreement is required: Hamilton says his objections apply with considerable weight (principal weight applies to equal magistrates). An artful cabal could distract and enervate (weaken) the administration. Even without one, a diversity of views gives “habitual feebleness and dilatoriness” (a habit of delay)."
    ],
    "highlight": [
     "Dissensions are tolerable in the legislature but unnecessary and unwise in the Executive: they weaken vigor and expedition with no balancing good.",
     "In war, the energy of the Executive is “the bulwark of the national security.”"
    ],
    "banner": "📜 This section comes from the text of Federalist No. 70, not from Reese's notes."
   },
   {
    "title": "Federalist No. 70 (4/4): Responsibility and the Case Against a Council",
    "bullets": [
     "Plurality tends to conceal faults and destroy responsibility. Responsibility is of two kinds: censure (public blame) and punishment. Censure is more important, especially in an elective office.",
     "In a plural executive it is often impossible to tell who deserves the blame. It gets shifted around, with excuses like “I was overruled by my council.” Few will take the trouble to look closely, and collusion makes things ambiguous.",
     "New York's governor has a council only for appointing to offices. Scandalous appointments were made; the governor blamed the council and the council blamed his nomination. Hamilton gives no names “in tenderness to individuals.”",
     "Plurality deprives the people of two greatest securities: (1) the restraints of public opinion, and (2) the chance to discover misconduct so a person can be removed or punished.",
     "England: the king is a perpetual magistrate, unaccountable, and his person is sacred. So a council responsible for its advice makes sense there, though he can disregard it. In a republic every magistrate should be personally responsible, and a council would destroy or greatly diminish the Chief Magistrate's responsibility.",
     "The council idea comes from “republican jealousy,” the maxim that power is safer in a number of men than one. Hamilton disagrees and agrees with the writer (Junius called him “deep, solid, and ingenious”) that the executive power is more easily confined when it is ONE. The people then have a single object for their jealousy and watchfulness.",
     "Security from numbers is unattainable: numbers must be great enough to make combination hard, or they are a danger. A small group easily combined by an artful leader is more liable to abuse, and more dangerous when abused, than one man, who is more narrowly watched and more readily suspected. The Decemvirs of Rome (the name denotes their number) were more to be dreaded than any one of them. A council of six to a dozen is still easy to combine.",
     "Expense: the salaries of council members, drawn from their homes to the seat of government, would be too serious a cost for an object of “equivocal utility.”",
     "Closing: before the Constitution, Hamilton rarely met an intelligent man from any State who didn't admit that the UNITY of New York's executive was one of the best features of its constitution."
    ],
    "highlight": [
     "Plurality tends to conceal faults and destroy responsibility. Responsibility is of two kinds: censure and punishment (censure is more important).",
     "“The executive power is more easily confined when it is ONE.”",
     "A council to a responsible magistrate is “a clog upon his good intentions,” often the “instruments and accomplices of his bad,” and “almost always a cloak to his faults.”",
     "In a republic every magistrate ought to be personally responsible; a council would destroy or greatly diminish the Chief Magistrate's responsibility."
    ],
    "banner": "📜 This section comes from the text of Federalist No. 70, not from Reese's notes."
   },
   {
    "title": "Still not included (couldn't read or not in the photos)",
    "bullets": [
     "2.4 E. Veto worksheet answers (presidential veto, veto override, pocket veto): your notebook covers these ideas, but the worksheet answers themselves were not readable.",
     "2.4 A. Framers: the end of the second sentence. 2.4 B. Article II: the age requirement and the list of powers.",
     "2.4 F. Line-Item Veto: the exact reason the Court struck it down is not in your notes.",
     "2.4 C: what informal powers come from (your notebook only lists signing statement and executive privilege).",
     "Chapter 5 Checkpoint answer table (1–3).",
     "One photo (image3) did not come through in the email."
    ],
    "highlight": []
   }
  ],
  "flashcards": [
   {
    "front": "A set of issues significant to people involved in policymaking with the president",
    "back": "Policy agenda"
   },
   {
    "front": "Powers stated in the Constitution (appoint judges, issue pardons, veto/approve bills)",
    "back": "Formal powers"
   },
   {
    "front": "Powers claimed as necessary",
    "back": "Inherent powers"
   },
   {
    "front": "The president has the \"power of the ___\" (highlighted in her notes)",
    "back": "Sword"
   },
   {
    "front": "Why the framers created a single executive: clear leadership and ___",
    "back": "Accountability"
   },
   {
    "front": "The role in which the president recommends laws and pressures Congress (State of the Union, bargaining, veto threats)",
    "back": "Chief legislator"
   },
   {
    "front": "The final stamp of approval or rejection of a bill",
    "back": "Veto"
   },
   {
    "front": "If 2/3 of Congress votes this, the law is put in place despite the veto",
    "back": "Congressional override"
   },
   {
    "front": "Congress is not in session, gets no response from the president, and the bill just dies",
    "back": "Pocket veto"
   },
   {
    "front": "The president could veto or remove a certain line of a bill (not allowed anymore)",
    "back": "Line-item veto"
   },
   {
    "front": "The role in which the president commands the military (needs congressional approval to wage war)",
    "back": "Commander in chief"
   },
   {
    "front": "The role in which the president handles foreign affairs",
    "back": "Chief diplomat"
   },
   {
    "front": "Needs a 2/3 Senate vote; harder to obtain",
    "back": "Treaty"
   },
   {
    "front": "Doesn't need Senate approval; easier to obtain; Kennedy used one in the Cuban Missile Crisis",
    "back": "Executive agreement"
   },
   {
    "front": "A \"contract\" between 2 heads of state that is only binding while the current president is in office",
    "back": "Executive agreement"
   },
   {
    "front": "Theodore Roosevelt's approach to gain control of the Canal Zone",
    "back": "Gunboat diplomacy"
   },
   {
    "front": "The president oversees all federal agencies and acts like a CEO of a corporation",
    "back": "Chief executive"
   },
   {
    "front": "A presidential directive that has the force of a law (temporary; EO 9066 is an example)",
    "back": "Executive order"
   },
   {
    "front": "The executive order about Japanese internment camps",
    "back": "EO 9066"
   },
   {
    "front": "Her notes bracket signing statement and executive privilege under these powers",
    "back": "Informal powers of the president"
   },
   {
    "front": "The president's commentary when signing a bill, with his interpretation of it (HATED by Congress)",
    "back": "Signing statement"
   },
   {
    "front": "The right to withhold information or decision-making from another branch, especially Congress",
    "back": "Executive privilege"
   },
   {
    "front": "The Senate's confirmation or rejection of appointments",
    "back": "Advice and consent"
   },
   {
    "front": "The president appoints officials; this body confirms many of them",
    "back": "The Senate"
   },
   {
    "front": "President of the Senate and second in line to the president",
    "back": "Vice president"
   },
   {
    "front": "Serves the president, not the military; must be confirmed by the Senate",
    "back": "Secretary of Defense"
   },
   {
    "front": "Lead departments and help carry out presidential policies",
    "back": "Cabinet secretaries"
   },
   {
    "front": "Handles foreign affairs",
    "back": "State Department"
   },
   {
    "front": "Handles the military",
    "back": "Defense Department"
   },
   {
    "front": "Carry out laws and government programs",
    "back": "Federal agencies"
   },
   {
    "front": "Provides advice and support to the president (aka the West Wing)",
    "back": "Executive Office of the President (EOP)"
   },
   {
    "front": "Makes sure the White House staff runs smoothly and controls access to the president",
    "back": "Chief of staff"
   },
   {
    "front": "Appointing someone while Congress isn't in session; serves until the Senate reconvenes and votes",
    "back": "Recess appointment"
   },
   {
    "front": "The president's power to remove executive officials (some limits exist)",
    "back": "Removal power"
   },
   {
    "front": "Judges have these, which is why judicial appointments matter",
    "back": "Life terms"
   },
   {
    "front": "A very powerful presidency (term used by Arthur Schlesinger Jr.)",
    "back": "Imperial presidency"
   },
   {
    "front": "Lincoln suspended this during the Civil War",
    "back": "Habeas corpus"
   },
   {
    "front": "FDR's plan that would have added Supreme Court justices",
    "back": "Court-packing plan"
   },
   {
    "front": "Limits presidents to 2 elected terms",
    "back": "22nd Amendment"
   },
   {
    "front": "Gave LBJ broad authority in Vietnam",
    "back": "Gulf of Tonkin Resolution"
   },
   {
    "front": "Limits presidential military action and requires congressional notification",
    "back": "War Powers Act"
   },
   {
    "front": "Trump declared this and redirected funds toward a border wall",
    "back": "Border emergency"
   },
   {
    "front": "The president's ability to influence public opinion",
    "back": "Bully pulpit"
   },
   {
    "front": "FDR's radio talks to explain his policies",
    "back": "Fireside chats"
   },
   {
    "front": "Informs Congress about the country's condition and priorities",
    "back": "State of the Union address"
   },
   {
    "front": "Delivered the State of the Union in person, making it a stronger political tool",
    "back": "Woodrow Wilson"
   },
   {
    "front": "Communicates the administration's views to the media",
    "back": "Press secretary"
   },
   {
    "front": "Used controlled media access to influence coverage",
    "back": "George W. Bush's administration"
   },
   {
    "front": "Used social media and digital platforms to reach Americans; his team used photos and digital content to shape his image",
    "back": "Obama"
   },
   {
    "front": "Used Twitter to communicate directly and immediately with the public",
    "back": "Trump"
   },
   {
    "front": "Hamilton says this “is a leading character in the definition of good government” (Federalist 70)",
    "back": "Energy in the Executive"
   },
   {
    "front": "Four ingredients of energy: unity, duration, adequate provision for its support, and ___ (Federalist 70)",
    "back": "Competent powers"
   },
   {
    "front": "The two ingredients of safety in the republican sense (Federalist 70)",
    "back": "Due dependence on the people and due responsibility"
   },
   {
    "front": "Executive power held by one person; Hamilton says it is conducive to energy (Federalist 70)",
    "back": "Unity"
   },
   {
    "front": "More than one person sharing executive power (Federalist 70)",
    "back": "Plurality"
   },
   {
    "front": "Decision, activity, secrecy, and ___: qualities of one man's proceedings (Federalist 70)",
    "back": "Despatch"
   },
   {
    "front": "The two kinds of responsibility (Federalist 70)",
    "back": "Censure and punishment"
   },
   {
    "front": "Public blame or disapproval; Hamilton says it is the more important kind of responsibility",
    "back": "Censure"
   },
   {
    "front": "A scheming group acting together in secret, such as in a council",
    "back": "Cabal"
   },
   {
    "front": "To weaken (\"distract and ___\" the administration)",
    "back": "Enervate"
   },
   {
    "front": "A tendency to delay; a council's diversity of views leads to feebleness and this",
    "back": "Dilatoriness"
   },
   {
    "front": "The Roman title for the absolute power of a single man (Federalist 70)",
    "back": "Dictator"
   },
   {
    "front": "Roman magistrates of equal authority, Hamilton's example of plurality",
    "back": "Consuls"
   },
   {
    "front": "Roman group more to be dreaded in usurpation than any one of them (their name denotes their number)",
    "back": "Decemvirs"
   },
   {
    "front": "“The executive power is more easily confined when it is ___.”",
    "back": "ONE"
   }
  ],
  "quiz": [
   {
    "sourceId": "agenda",
    "q": "What is a policy agenda?",
    "choices": [
     "A set of issues significant to people involved in policymaking with the president",
     "A list of Senate-confirmed appointees",
     "A schedule of the president's foreign trips",
     "A set of Supreme Court rulings"
    ],
    "answer": 0,
    "explain": "Her notes: a set of issues significant to people involved in policymaking with the president."
   },
   {
    "sourceId": "agenda",
    "q": "A set of issues significant to people involved in policymaking with the president is the…",
    "choices": [
     "Policy agenda",
     "Executive order",
     "Signing statement",
     "Advice and consent"
    ],
    "answer": 0,
    "explain": "That is the definition of a policy agenda in her notes."
   },
   {
    "sourceId": "formal",
    "q": "Which is an example of a formal power?",
    "choices": [
     "Issuing pardons",
     "Issuing signing statements",
     "Claiming executive privilege",
     "Giving fireside chats"
    ],
    "answer": 0,
    "explain": "Her notes list appointing judges, issuing pardons, and vetoing or approving bills as formal powers."
   },
   {
    "sourceId": "chiefleg",
    "q": "Which is an example of the president acting as chief legislator?",
    "choices": [
     "Threatening a veto",
     "Confirming a treaty",
     "Declaring war",
     "Overriding a veto"
    ],
    "answer": 0,
    "explain": "Her notes list the State of the Union, bargaining and persuasion, and threatening a veto."
   },
   {
    "sourceId": "veto",
    "q": "What is a veto?",
    "choices": [
     "The president's final stamp of approval or rejection of a bill",
     "A Senate vote to confirm an appointment",
     "A written comment made when signing a bill",
     "A directive that has the force of a law"
    ],
    "answer": 0,
    "explain": "Her notes: a veto is the final stamp of approval or rejection."
   },
   {
    "sourceId": "veto",
    "q": "The president's final stamp of approval or rejection of a bill is a…",
    "choices": [
     "Veto",
     "Signing statement",
     "Executive order",
     "Treaty"
    ],
    "answer": 0,
    "explain": "Her notes define a veto as the final stamp of approval or rejection."
   },
   {
    "sourceId": "override",
    "q": "What does it take for Congress to override a veto?",
    "choices": [
     "A 2/3 vote of Congress",
     "A signature from the president",
     "A ruling by the Supreme Court",
     "A simple majority in the House only"
    ],
    "answer": 0,
    "explain": "If 2/3 of Congress votes to override the veto, the law is put in place."
   },
   {
    "sourceId": "override",
    "q": "If 2/3 of Congress votes to override the president's veto, the law…",
    "choices": [
     "Is put in place",
     "Goes to the Supreme Court",
     "Dies",
     "Goes back to the president for a final decision"
    ],
    "answer": 0,
    "explain": "Her notes: with a 2/3 override vote, the law is put in place."
   },
   {
    "sourceId": "pocket",
    "q": "What is a pocket veto?",
    "choices": [
     "When Congress is not in session and gets no response from the president, the bill just dies",
     "A veto of one line of a bill",
     "A veto that Congress overrides with a 2/3 vote",
     "A veto that can only be used during war"
    ],
    "answer": 0,
    "explain": "Her notes: Congress is not in session, gets no response from the president, and the bill just dies."
   },
   {
    "sourceId": "pocket",
    "q": "When Congress is not in session and gets no response from the president, the bill just dies. This is a…",
    "choices": [
     "Pocket veto",
     "Line-item veto",
     "Congressional override",
     "Signing statement"
    ],
    "answer": 0,
    "explain": "That is a pocket veto."
   },
   {
    "sourceId": "pocket",
    "q": "A pocket veto is a ___ power of the president.",
    "choices": [
     "Formal",
     "Informal",
     "Recess",
     "Judicial"
    ],
    "answer": 0,
    "explain": "Her notes label the pocket veto a formal power."
   },
   {
    "sourceId": "lineitem",
    "q": "What did a line-item veto let the president do?",
    "choices": [
     "Veto or remove a certain line of a bill",
     "Veto a bill before Congress passed it",
     "Override Congress's veto",
     "Wait until Congress is back in session to sign a bill"
    ],
    "answer": 0,
    "explain": "Her notes: the president can veto or remove a certain line of a bill (not allowed anymore, but presidents want it back)."
   },
   {
    "sourceId": "sword",
    "q": "Her notes say the president has the \"power of the ___\".",
    "choices": [
     "Sword",
     "Pen",
     "Purse",
     "Gavel"
    ],
    "answer": 0,
    "explain": "Her notes highlight that the president has the \"power of the sword\"."
   },
   {
    "sourceId": "cic",
    "q": "As commander in chief, the president must have ___ to wage war.",
    "choices": [
     "Congressional approval",
     "Supreme Court approval",
     "An executive order",
     "A signing statement"
    ],
    "answer": 0,
    "explain": "Her notes: the president must have congressional approval to wage war."
   },
   {
    "sourceId": "treaty23",
    "q": "Which is harder to obtain because it requires a 2/3 vote by the Senate?",
    "choices": [
     "Treaty",
     "Executive agreement",
     "Executive order",
     "Signing statement"
    ],
    "answer": 0,
    "explain": "A treaty needs a 2/3 Senate vote, so it is harder to obtain; an executive agreement is easier."
   },
   {
    "sourceId": "treaty23",
    "q": "How many votes in the Senate does a treaty require?",
    "choices": [
     "A 2/3 vote",
     "A simple majority",
     "A 3/4 vote",
     "Unanimous consent"
    ],
    "answer": 0,
    "explain": "Her notes: a treaty requires a 2/3 vote by the Senate."
   },
   {
    "sourceId": "treatyhouse",
    "q": "By the Constitution, which chamber deals with treaties?",
    "choices": [
     "Only the Senate",
     "Only the House",
     "Both chambers equally",
     "The Supreme Court"
    ],
    "answer": 0,
    "explain": "Her notes: the Senate deals with treaties only; the House is not involved."
   },
   {
    "sourceId": "treatyhouse",
    "q": "In foreign policy, the House basically has no power except…",
    "choices": [
     "Voting on war",
     "Confirming treaties",
     "Appointing ambassadors",
     "Negotiating executive agreements"
    ],
    "answer": 0,
    "explain": "Her notes: the House has basically no power in foreign policy except voting on war."
   },
   {
    "sourceId": "ea",
    "q": "An executive agreement is like a \"contract\" between…",
    "choices": [
     "Two heads of state",
     "Two Senate committees",
     "The president and the Supreme Court",
     "Two political parties"
    ],
    "answer": 0,
    "explain": "Her notes call an executive agreement a \"contract\" between 2 heads of state."
   },
   {
    "sourceId": "ea",
    "q": "An executive agreement is only binding…",
    "choices": [
     "While the current president is in office",
     "For 50 years",
     "Until the next Senate election",
     "Until Congress adjourns"
    ],
    "answer": 0,
    "explain": "Her notes: executive agreements are only binding while the current president is in office."
   },
   {
    "sourceId": "ea",
    "q": "An executive agreement cannot…",
    "choices": [
     "Violate prior treaties or Congressional Acts",
     "Be made by the president",
     "Speed things up",
     "Avoid clashes with senators"
    ],
    "answer": 0,
    "explain": "Her notes: executive agreements cannot violate prior treaties or Congressional Acts."
   },
   {
    "sourceId": "eo",
    "q": "What is an executive order?",
    "choices": [
     "A presidential directive that has the force of a law",
     "A bill passed by both chambers",
     "A Senate confirmation vote",
     "A Supreme Court ruling"
    ],
    "answer": 0,
    "explain": "Her notes: an executive order is a presidential directive with the force of a law."
   },
   {
    "sourceId": "eo",
    "q": "Executive Order 9066 is an example that dealt with…",
    "choices": [
     "Japanese internment camps",
     "The Panama Canal",
     "The line-item veto",
     "The Cuban Missile Crisis"
    ],
    "answer": 0,
    "explain": "Her notes list EO 9066 (Japanese internment camps) as an example."
   },
   {
    "sourceId": "eolimits",
    "q": "Which can a president NOT do with an executive order?",
    "choices": [
     "Alter the tax code",
     "Direct the executive branch",
     "Issue a directive with the force of a law",
     "Act during his or her time in office"
    ],
    "answer": 0,
    "explain": "Her notes: executive orders can't alter the tax code, redesign currency, or make new interstate commerce laws."
   },
   {
    "sourceId": "eolimits",
    "q": "Executive orders are temporary: they last only…",
    "choices": [
     "During the president's time in office",
     "Until the next election",
     "One year",
     "Until Congress adjourns"
    ],
    "answer": 0,
    "explain": "Her notes: executive orders are temporary, only during the president's time in office."
   },
   {
    "sourceId": "sign",
    "q": "A president may use a signing statement instead of a ___, so Congress can't override it.",
    "choices": [
     "Veto",
     "Treaty",
     "Recess appointment",
     "Executive agreement"
    ],
    "answer": 0,
    "explain": "Her notes: signing statements are sometimes used to express discontent instead of vetoing, so Congress can't override."
   },
   {
    "sourceId": "priv",
    "q": "What is executive privilege?",
    "choices": [
     "The right to withhold information or decision-making from another branch, especially Congress",
     "The right to appoint judges without Senate approval",
     "The right to veto any bill",
     "The right to declare war"
    ],
    "answer": 0,
    "explain": "Her notes: the right to withhold information or decision-making from another branch, especially Congress."
   },
   {
    "sourceId": "priv",
    "q": "Past presidents claimed executive privilege because they do not need to make public…",
    "choices": [
     "What they have talked about with their advisors",
     "How they voted in the Senate",
     "Rulings of the Supreme Court",
     "Treaties they have signed"
    ],
    "answer": 0,
    "explain": "Her notes: they do not need to make public what they have talked about with their advisors."
   },
   {
    "sourceId": "informal",
    "q": "Which is an informal power of the president?",
    "choices": [
     "Signing statement",
     "Appointing judges",
     "Issuing pardons",
     "Approving bills"
    ],
    "answer": 0,
    "explain": "Her notes group signing statements and executive privilege under informal powers; the others are formal."
   },
   {
    "sourceId": "ac",
    "q": "What is advice and consent?",
    "choices": [
     "The Senate's confirmation or rejection of appointments",
     "The president's veto of a bill",
     "Congress's power to declare war",
     "The president's power to issue pardons"
    ],
    "answer": 0,
    "explain": "Her notes: advice and consent is the Senate's confirmation or rejection of appointments."
   },
   {
    "sourceId": "ac",
    "q": "The Senate's confirmation or rejection of appointments is called…",
    "choices": [
     "Advice and consent",
     "Recess appointment",
     "Executive privilege",
     "Congressional override"
    ],
    "answer": 0,
    "explain": "That is advice and consent."
   },
   {
    "sourceId": "ac",
    "q": "Which must be approved by the Senate?",
    "choices": [
     "Ambassadors",
     "White House staff members",
     "The chief of staff",
     "The press secretary"
    ],
    "answer": 0,
    "explain": "Cabinet heads, ambassadors, and federal and Supreme Court judges need Senate approval; White House staff do not."
   },
   {
    "sourceId": "vp",
    "q": "Who is second in line to the president?",
    "choices": [
     "The vice president",
     "The chief of staff",
     "The press secretary",
     "A Supreme Court justice"
    ],
    "answer": 0,
    "explain": "Her notes: the vice president is second in line to the president."
   },
   {
    "sourceId": "vp",
    "q": "How much power does the vice president have?",
    "choices": [
     "It varies: either a lot or very little",
     "Always a great deal",
     "Always none",
     "Exactly the same under every president"
    ],
    "answer": 0,
    "explain": "Her notes: the VP can have a lot of power or very little; the job title is not super concrete."
   },
   {
    "sourceId": "secdef",
    "q": "The Secretary of Defense serves…",
    "choices": [
     "The president, not the military",
     "The military, not the president",
     "Congress",
     "The Supreme Court"
    ],
    "answer": 0,
    "explain": "Her notes: the Secretary of Defense serves the president, not the military."
   },
   {
    "sourceId": "secdef",
    "q": "Who must confirm the Secretary of Defense?",
    "choices": [
     "The Senate",
     "The House",
     "The Supreme Court",
     "The vice president alone"
    ],
    "answer": 0,
    "explain": "Her notes: the Secretary of Defense must be confirmed by the Senate."
   },
   {
    "sourceId": "recess",
    "q": "A recess appointee serves as a replacement until…",
    "choices": [
     "The Senate reconvenes and votes on a new official",
     "The next presidential election",
     "The Supreme Court approves",
     "Congress declares war"
    ],
    "answer": 0,
    "explain": "Her notes: a recess appointee serves until the Senate reconvenes and votes on a new official."
   },
   {
    "sourceId": "ceo",
    "q": "Since the president is chief executive, he acts like…",
    "choices": [
     "A CEO of a corporation",
     "A judge on the Supreme Court",
     "A member of the Senate",
     "A press secretary"
    ],
    "answer": 0,
    "explain": "Her notes compare the chief executive to a CEO of a corporation."
   },
   {
    "sourceId": "carter",
    "q": "Carter supported returning the canal because he believed it was fair and…",
    "choices": [
     "Improved relations",
     "Would expand the Canal Zone",
     "Would end the Civil War",
     "Would limit presidents to two terms"
    ],
    "answer": 0,
    "explain": "Her answer: he believed it was fair and improved relations."
   },
   {
    "sourceId": "single",
    "q": "Why did the framers create a single executive?",
    "choices": [
     "For clear leadership and accountability",
     "So the Senate could run the executive branch",
     "So the president could declare war",
     "So the Supreme Court could lead the government"
    ],
    "answer": 0,
    "explain": "The framers wanted one executive for clear leadership and accountability."
   },
   {
    "sourceId": "article2",
    "q": "How many years must a president have been a U.S. resident?",
    "choices": [
     "14 years",
     "7 years",
     "9 years",
     "2 years"
    ],
    "answer": 0,
    "explain": "Her notes: a U.S. resident for 14 years."
   },
   {
    "sourceId": "article2",
    "q": "The president must be a ___ citizen.",
    "choices": [
     "Natural-born",
     "Naturalized",
     "Dual",
     "State-appointed"
    ],
    "answer": 0,
    "explain": "Her notes list natural-born citizen as a requirement."
   },
   {
    "sourceId": "formal",
    "q": "What are formal powers?",
    "choices": [
     "Powers written in the Constitution",
     "Powers claimed as necessary by the president",
     "Powers that only Congress can use",
     "Powers the Senate votes to give each president"
    ],
    "answer": 0,
    "explain": "Formal powers are written in the Constitution."
   },
   {
    "sourceId": "formal",
    "q": "Powers written in the Constitution are called…",
    "choices": [
     "Formal powers",
     "Inherent powers",
     "Recess powers",
     "Signing powers"
    ],
    "answer": 0,
    "explain": "Formal powers are the ones written in the Constitution."
   },
   {
    "sourceId": "chiefleg",
    "q": "How can the president act as chief legislator without introducing bills directly?",
    "choices": [
     "By recommending laws and pressuring Congress",
     "By writing and voting on bills in the Senate",
     "By appointing members of Congress",
     "By signing bills before Congress votes on them"
    ],
    "answer": 0,
    "explain": "The president can't introduce bills directly but can recommend laws and pressure Congress."
   },
   {
    "sourceId": "chiefleg",
    "q": "Which role has the president recommending laws and pressuring Congress?",
    "choices": [
     "Chief legislator",
     "Commander in chief",
     "Chief diplomat",
     "Communicator in chief"
    ],
    "answer": 0,
    "explain": "As chief legislator, the president recommends laws and pressures Congress."
   },
   {
    "sourceId": "persuade",
    "q": "Which is NOT a method presidents use to persuade Congress?",
    "choices": [
     "Holding a filibuster",
     "Persuasion",
     "Bargaining",
     "Giving speeches"
    ],
    "answer": 0,
    "explain": "Presidents use persuasion, bargaining, and speeches; a filibuster isn't one of them."
   },
   {
    "sourceId": "trpanama",
    "q": "Which president used \"gunboat diplomacy\" to gain control of the Canal Zone?",
    "choices": [
     "Theodore Roosevelt",
     "Jimmy Carter",
     "John F. Kennedy",
     "Abraham Lincoln"
    ],
    "answer": 0,
    "explain": "Theodore Roosevelt used gunboat diplomacy to gain control of the Canal Zone."
   },
   {
    "sourceId": "carter",
    "q": "Which president supported returning the Panama Canal to Panama?",
    "choices": [
     "Jimmy Carter",
     "Theodore Roosevelt",
     "John F. Kennedy",
     "Abraham Lincoln"
    ],
    "answer": 0,
    "explain": "Carter supported returning the canal to Panama."
   },
   {
    "sourceId": "eo",
    "q": "Which tool directs the executive branch?",
    "choices": [
     "Executive order",
     "Fireside chat",
     "Gunboat diplomacy",
     "Line-item veto"
    ],
    "answer": 0,
    "explain": "An executive order directs the executive branch."
   },
   {
    "sourceId": "sign",
    "q": "What is a signing statement?",
    "choices": [
     "An explanation of how the president interprets a new law",
     "A veto message returned to Congress",
     "A speech to Congress about the country's condition",
     "A court's explanation of its ruling"
    ],
    "answer": 0,
    "explain": "A signing statement explains how the president interprets a new law."
   },
   {
    "sourceId": "sign",
    "q": "Which is an explanation of how the president interprets a new law?",
    "choices": [
     "Signing statement",
     "Executive order",
     "Executive agreement",
     "Fireside chat"
    ],
    "answer": 0,
    "explain": "A signing statement explains how the president interprets a new law."
   },
   {
    "sourceId": "priv",
    "q": "Which protects some presidential information but is not absolute?",
    "choices": [
     "Executive privilege",
     "Executive agreement",
     "Signing statement",
     "Bully pulpit"
    ],
    "answer": 0,
    "explain": "That describes executive privilege."
   },
   {
    "sourceId": "lineitem",
    "q": "Which body struck down the 1996 law granting the president a line-item veto?",
    "choices": [
     "The Supreme Court",
     "Congress",
     "The Senate",
     "The president"
    ],
    "answer": 0,
    "explain": "The worksheet asks why the Supreme Court struck down the 1996 line-item veto law."
   },
   {
    "sourceId": "lineitem",
    "q": "The 1996 law that the Supreme Court struck down granted the president a…",
    "choices": [
     "Line-item veto",
     "Signing statement",
     "Executive agreement",
     "Recess appointment"
    ],
    "answer": 0,
    "explain": "The Supreme Court struck down the 1996 line-item veto law."
   },
   {
    "sourceId": "cic",
    "q": "Who declares war?",
    "choices": [
     "Congress",
     "The president",
     "The Supreme Court",
     "The Secretary of Defense"
    ],
    "answer": 0,
    "explain": "The president commands the military, while Congress declares war."
   },
   {
    "sourceId": "cic",
    "q": "In which role does the president command the military?",
    "choices": [
     "Commander in chief",
     "Chief diplomat",
     "Chief legislator",
     "Communicator in chief"
    ],
    "answer": 0,
    "explain": "As commander in chief, the president commands the military."
   },
   {
    "sourceId": "selfdef",
    "q": "Presidents claim \"in self-defense\" lets them…",
    "choices": [
     "Use force to respond to immediate threats",
     "Override a veto",
     "Confirm Cabinet appointees",
     "Remove Supreme Court justices"
    ],
    "answer": 0,
    "explain": "Presidents claim they can use force to respond to immediate threats."
   },
   {
    "sourceId": "treaty",
    "q": "Which needs Senate approval?",
    "choices": [
     "Treaties",
     "Executive agreements",
     "Fireside chats",
     "State of the Union addresses"
    ],
    "answer": 0,
    "explain": "Treaties need Senate approval, while executive agreements do not."
   },
   {
    "sourceId": "treaty",
    "q": "Which requires NO Senate approval?",
    "choices": [
     "Executive agreement",
     "Treaty",
     "Cabinet secretary appointment",
     "Federal judge appointment"
    ],
    "answer": 0,
    "explain": "Executive agreements do not need Senate approval."
   },
   {
    "sourceId": "kennedy",
    "q": "Which president used an executive agreement to help end the Cuban Missile Crisis?",
    "choices": [
     "John F. Kennedy",
     "Theodore Roosevelt",
     "Franklin D. Roosevelt",
     "Jimmy Carter"
    ],
    "answer": 0,
    "explain": "Kennedy used an executive agreement to help end the Cuban Missile Crisis."
   },
   {
    "sourceId": "congresschecks",
    "q": "Which is a check Congress has on the president?",
    "choices": [
     "Impeachment",
     "Issuing executive orders",
     "Delivering fireside chats",
     "Writing signing statements"
    ],
    "answer": 0,
    "explain": "Congress can override vetoes, control spending, confirm appointments, and impeach."
   },
   {
    "sourceId": "appoint",
    "q": "Who confirms many presidential appointees?",
    "choices": [
     "The Senate",
     "The House",
     "The Supreme Court",
     "The vice president"
    ],
    "answer": 0,
    "explain": "The president appoints officials, while the Senate confirms many of them."
   },
   {
    "sourceId": "vp",
    "q": "Who presides over the Senate?",
    "choices": [
     "The vice president",
     "The chief of staff",
     "The Secretary of State",
     "The press secretary"
    ],
    "answer": 0,
    "explain": "The vice president presides over the Senate."
   },
   {
    "sourceId": "cabinet",
    "q": "What do Cabinet secretaries do?",
    "choices": [
     "Lead departments and help carry out presidential policies",
     "Write laws for Congress",
     "Review whether laws are constitutional",
     "Confirm presidential appointees"
    ],
    "answer": 0,
    "explain": "Cabinet secretaries lead departments and help carry out presidential policies."
   },
   {
    "sourceId": "statedefense",
    "q": "Which department handles foreign affairs?",
    "choices": [
     "The State Department",
     "The Defense Department",
     "The Executive Office of the President",
     "The White House Office"
    ],
    "answer": 0,
    "explain": "State handles foreign affairs, while Defense handles the military."
   },
   {
    "sourceId": "agencies",
    "q": "What do federal agencies do?",
    "choices": [
     "Carry out laws and government programs",
     "Write laws for Congress",
     "Confirm presidential appointees",
     "Declare war"
    ],
    "answer": 0,
    "explain": "Federal agencies carry out laws and government programs."
   },
   {
    "sourceId": "eop",
    "q": "Which provides advice and support to the president?",
    "choices": [
     "The Executive Office of the President (EOP)",
     "The Senate",
     "The Supreme Court",
     "Federal agencies"
    ],
    "answer": 0,
    "explain": "The EOP provides advice and support to the president."
   },
   {
    "sourceId": "staff",
    "q": "Who usually has a closer relationship with the president?",
    "choices": [
     "White House staff",
     "Cabinet secretaries",
     "Federal agencies",
     "Senators"
    ],
    "answer": 0,
    "explain": "White House staff usually have a closer relationship with the president than Cabinet secretaries."
   },
   {
    "sourceId": "staff",
    "q": "What does the chief of staff do?",
    "choices": [
     "Manages the White House and controls access to the president",
     "Presides over the Senate",
     "Communicates the administration's views to the media",
     "Leads the Defense Department"
    ],
    "answer": 0,
    "explain": "The chief of staff manages the White House and controls access to the president."
   },
   {
    "sourceId": "staff",
    "q": "Who manages the White House and controls access to the president?",
    "choices": [
     "The chief of staff",
     "The press secretary",
     "The vice president",
     "The Secretary of State"
    ],
    "answer": 0,
    "explain": "That is the chief of staff."
   },
   {
    "sourceId": "conflict",
    "q": "Why can conflict occur between the president and Congress?",
    "choices": [
     "The president needs Congress to provide funding",
     "The president can appoint members of Congress",
     "Congress cannot pass any laws",
     "Cabinet secretaries lead Congress"
    ],
    "answer": 0,
    "explain": "Conflict can occur because the president needs Congress to provide funding."
   },
   {
    "sourceId": "inherent",
    "q": "What are inherent powers?",
    "choices": [
     "Powers claimed as necessary",
     "Powers written in the Constitution",
     "Powers granted by the 22nd Amendment",
     "Powers the Senate votes to give"
    ],
    "answer": 0,
    "explain": "Inherent powers are powers claimed as necessary."
   },
   {
    "sourceId": "inherent",
    "q": "Powers claimed as necessary are called…",
    "choices": [
     "Inherent powers",
     "Formal powers",
     "Impeachment powers",
     "Appointment powers"
    ],
    "answer": 0,
    "explain": "Inherent powers are powers claimed as necessary."
   },
   {
    "sourceId": "congresschecks",
    "q": "Which two institutions check the president?",
    "choices": [
     "Congress and the courts",
     "The Cabinet and the EOP",
     "The press secretary and chief of staff",
     "White House staff and federal agencies"
    ],
    "answer": 0,
    "explain": "Congress and the courts check the president."
   },
   {
    "sourceId": "recess",
    "q": "What do recess appointments do?",
    "choices": [
     "Temporarily fill positions while the Senate is away",
     "Permanently confirm judges for life",
     "Declare war while Congress is away",
     "Remove Cabinet secretaries"
    ],
    "answer": 0,
    "explain": "Recess appointments temporarily fill positions while the Senate is away."
   },
   {
    "sourceId": "recess",
    "q": "What is it called when a president temporarily fills positions while the Senate is away?",
    "choices": [
     "Recess appointment",
     "Signing statement",
     "Executive agreement",
     "Line-item veto"
    ],
    "answer": 0,
    "explain": "That is a recess appointment."
   },
   {
    "sourceId": "nominees",
    "q": "John Tower's nomination as secretary of defense faced concerns about his…",
    "choices": [
     "Conduct",
     "Education views",
     "Use of executive privilege",
     "Support for the line-item veto"
    ],
    "answer": 0,
    "explain": "Tower faced conduct concerns."
   },
   {
    "sourceId": "nominees",
    "q": "Betsy DeVos, nominated as education secretary, faced opposition over her…",
    "choices": [
     "Education views and qualifications",
     "Conduct",
     "Use of executive orders",
     "Use of executive privilege"
    ],
    "answer": 0,
    "explain": "DeVos faced opposition over her education views and qualifications."
   },
   {
    "sourceId": "remove",
    "q": "Which statement about the president's removal power is correct?",
    "choices": [
     "Presidents generally can remove executive officials, with some limits",
     "Presidents can never remove executive officials",
     "Presidents can remove anyone with no limits at all",
     "Only the Senate can remove executive officials"
    ],
    "answer": 0,
    "explain": "Presidents generally have the power to remove executive officials, and some limits exist."
   },
   {
    "sourceId": "review",
    "q": "What can courts review presidential actions for?",
    "choices": [
     "Legality and constitutionality",
     "Popularity",
     "Speed",
     "Party loyalty"
    ],
    "answer": 0,
    "explain": "Courts can review presidential actions for legality and constitutionality."
   },
   {
    "sourceId": "judges",
    "q": "Why do judicial appointments matter so much?",
    "choices": [
     "Judges have life terms",
     "Judges serve 2-year terms",
     "Judges are elected by voters",
     "Judges can be removed by the president at will"
    ],
    "answer": 0,
    "explain": "Judicial appointments matter because judges have life terms."
   },
   {
    "sourceId": "grew",
    "q": "Which factor helped make the presidency more powerful?",
    "choices": [
     "Wars and crises",
     "Fewer government programs",
     "Less use of technology",
     "Shorter Senate terms"
    ],
    "answer": 0,
    "explain": "The presidency grew stronger because of wars, crises, technology, and government growth."
   },
   {
    "sourceId": "grew",
    "q": "Which is NOT a reason the presidency grew stronger?",
    "choices": [
     "A decline in the size of government",
     "Wars",
     "Crises",
     "Technology"
    ],
    "answer": 0,
    "explain": "Wars, crises, technology, and government growth made the presidency stronger."
   },
   {
    "sourceId": "wash",
    "q": "Which president established precedents like creating a cabinet?",
    "choices": [
     "George Washington",
     "Andrew Jackson",
     "Abraham Lincoln",
     "Franklin D. Roosevelt"
    ],
    "answer": 0,
    "explain": "Washington established precedents like creating a cabinet."
   },
   {
    "sourceId": "imperial",
    "q": "What is the \"imperial presidency\"?",
    "choices": [
     "A very powerful presidency",
     "A presidency limited to one term",
     "A presidency controlled by Congress",
     "A presidency with no cabinet"
    ],
    "answer": 0,
    "explain": "The imperial presidency is a very powerful presidency."
   },
   {
    "sourceId": "imperial",
    "q": "A very powerful presidency is called the…",
    "choices": [
     "Imperial presidency",
     "Bully pulpit",
     "Court-packing plan",
     "Gunboat diplomacy"
    ],
    "answer": 0,
    "explain": "The imperial presidency is a very powerful presidency."
   },
   {
    "sourceId": "jackson",
    "q": "Which president used his popularity and veto power to expand presidential influence?",
    "choices": [
     "Andrew Jackson",
     "Abraham Lincoln",
     "Jimmy Carter",
     "John F. Kennedy"
    ],
    "answer": 0,
    "explain": "Jackson used his popularity and veto power to expand presidential influence."
   },
   {
    "sourceId": "lincoln",
    "q": "Which president suspended habeas corpus during the Civil War?",
    "choices": [
     "Abraham Lincoln",
     "George Washington",
     "Andrew Jackson",
     "Franklin D. Roosevelt"
    ],
    "answer": 0,
    "explain": "Lincoln suspended habeas corpus and took emergency actions during the Civil War."
   },
   {
    "sourceId": "trwilson",
    "q": "Which two presidents expanded presidential involvement in foreign affairs?",
    "choices": [
     "Theodore Roosevelt and Woodrow Wilson",
     "George Washington and Andrew Jackson",
     "Andrew Jackson and Abraham Lincoln",
     "Abraham Lincoln and George Washington"
    ],
    "answer": 0,
    "explain": "Roosevelt and Wilson expanded presidential involvement in foreign affairs."
   },
   {
    "sourceId": "fdr",
    "q": "Which president expanded government through the New Deal and WWII leadership?",
    "choices": [
     "Franklin D. Roosevelt",
     "Woodrow Wilson",
     "Abraham Lincoln",
     "Andrew Jackson"
    ],
    "answer": 0,
    "explain": "FDR expanded government through the New Deal and WWII leadership."
   },
   {
    "sourceId": "court",
    "q": "FDR's court-packing plan would have…",
    "choices": [
     "Added Supreme Court justices",
     "Removed all Supreme Court justices",
     "Limited presidents to 2 terms",
     "Let Congress declare war"
    ],
    "answer": 0,
    "explain": "FDR's court-packing plan would have added Supreme Court justices."
   },
   {
    "sourceId": "court",
    "q": "Which FDR plan would have added Supreme Court justices?",
    "choices": [
     "Court-packing plan",
     "New Deal",
     "Fireside chats",
     "Gunboat diplomacy"
    ],
    "answer": 0,
    "explain": "The court-packing plan would have added Supreme Court justices."
   },
   {
    "sourceId": "amend22",
    "q": "Which amendment limits presidents to 2 elected terms?",
    "choices": [
     "The 22nd Amendment",
     "The 17th Amendment",
     "The 16th Amendment",
     "The 19th Amendment"
    ],
    "answer": 0,
    "explain": "The 22nd Amendment limits presidents to 2 elected terms."
   },
   {
    "sourceId": "tonkin",
    "q": "Which resolution gave LBJ broad authority in Vietnam?",
    "choices": [
     "The Gulf of Tonkin Resolution",
     "The War Powers Act",
     "The 22nd Amendment",
     "An executive agreement"
    ],
    "answer": 0,
    "explain": "The Gulf of Tonkin Resolution gave LBJ broad authority in Vietnam."
   },
   {
    "sourceId": "wpa",
    "q": "Which law limits presidential military action and requires congressional notification?",
    "choices": [
     "The War Powers Act",
     "The Gulf of Tonkin Resolution",
     "The 22nd Amendment",
     "The line-item veto law"
    ],
    "answer": 0,
    "explain": "The War Powers Act limits presidential military action and requires congressional notification."
   },
   {
    "sourceId": "trumpborder",
    "q": "Which president declared a border emergency and redirected funds toward a border wall?",
    "choices": [
     "Donald Trump",
     "Barack Obama",
     "George W. Bush",
     "Jimmy Carter"
    ],
    "answer": 0,
    "explain": "Trump declared a border emergency and redirected funds toward a border wall."
   },
   {
    "sourceId": "tech",
    "q": "How has communication technology changed the presidency?",
    "choices": [
     "Presidents can communicate directly and quickly with Americans",
     "Presidents must go through Congress to speak to the public",
     "Presidents can no longer reach Americans directly",
     "The Senate now gives the president's speeches"
    ],
    "answer": 0,
    "explain": "Technology allows presidents to communicate directly and quickly with Americans."
   },
   {
    "sourceId": "bully",
    "q": "What is the \"bully pulpit\"?",
    "choices": [
     "The president's ability to influence public opinion",
     "The president's power to veto a bill",
     "The president's power to appoint judges",
     "The president's authority over the military"
    ],
    "answer": 0,
    "explain": "The bully pulpit is the president's ability to influence public opinion."
   },
   {
    "sourceId": "bully",
    "q": "The president's ability to influence public opinion is called the…",
    "choices": [
     "Bully pulpit",
     "Signing statement",
     "Fireside chat",
     "Imperial presidency"
    ],
    "answer": 0,
    "explain": "The bully pulpit is the president's ability to influence public opinion."
   },
   {
    "sourceId": "fire",
    "q": "Which president used fireside chats to explain his policies?",
    "choices": [
     "Franklin D. Roosevelt",
     "Abraham Lincoln",
     "Andrew Jackson",
     "Woodrow Wilson"
    ],
    "answer": 0,
    "explain": "FDR used fireside chats to explain his policies."
   },
   {
    "sourceId": "fire",
    "q": "FDR's radio talks to explain his policies were called…",
    "choices": [
     "Fireside chats",
     "Signing statements",
     "The bully pulpit",
     "Executive agreements"
    ],
    "answer": 0,
    "explain": "FDR used fireside chats to explain his policies."
   },
   {
    "sourceId": "sotu",
    "q": "What is the State of the Union address for?",
    "choices": [
     "To inform Congress about the country's condition and priorities",
     "To declare war",
     "To confirm presidential appointees",
     "To override a veto"
    ],
    "answer": 0,
    "explain": "The State of the Union informs Congress about the country's condition and priorities."
   },
   {
    "sourceId": "wilson",
    "q": "Which president's decision to deliver the State of the Union in person made it a stronger political tool?",
    "choices": [
     "Woodrow Wilson",
     "Abraham Lincoln",
     "Andrew Jackson",
     "Thomas Jefferson"
    ],
    "answer": 0,
    "explain": "Wilson delivered it in person, making it a stronger political tool."
   },
   {
    "sourceId": "presssec",
    "q": "What does the White House press secretary do?",
    "choices": [
     "Communicates the administration's views to the media",
     "Manages the White House and controls access to the president",
     "Presides over the Senate",
     "Leads the Defense Department"
    ],
    "answer": 0,
    "explain": "The press secretary communicates the administration's views to the media."
   },
   {
    "sourceId": "bush",
    "q": "Which administration used controlled media access to influence coverage?",
    "choices": [
     "George W. Bush's",
     "Woodrow Wilson's",
     "Andrew Jackson's",
     "Abraham Lincoln's"
    ],
    "answer": 0,
    "explain": "Bush's administration used controlled media access to influence coverage."
   },
   {
    "sourceId": "obamasocial",
    "q": "Obama used social media and digital platforms to…",
    "choices": [
     "Reach Americans",
     "Declare war",
     "Confirm appointees",
     "Override vetoes"
    ],
    "answer": 0,
    "explain": "Obama used social media and digital platforms to reach Americans."
   },
   {
    "sourceId": "obamaimage",
    "q": "Obama's team used photos and digital content to…",
    "choices": [
     "Shape his public image",
     "Declare a national emergency",
     "Return the Panama Canal",
     "Expand the Court"
    ],
    "answer": 0,
    "explain": "Obama's team used photos and digital content to shape his public image."
   },
   {
    "sourceId": "trumptw",
    "q": "Which president used Twitter to communicate directly and immediately with the public?",
    "choices": [
     "Donald Trump",
     "Woodrow Wilson",
     "Abraham Lincoln",
     "Andrew Jackson"
    ],
    "answer": 0,
    "explain": "Trump used Twitter to communicate directly and immediately with the public."
   },
   {
    "sourceId": "tip",
    "q": "What test-taking strategy does the Chapter 5 Checkpoint remind you to use?",
    "choices": [
     "Process of elimination with an internal monologue",
     "Always choose the longest answer",
     "Skip every question you are unsure about",
     "Pick the first answer choice"
    ],
    "answer": 0,
    "explain": "The checkpoint says to use process of elimination with an internal monologue."
   },
   {
    "sourceId": "f70energy",
    "q": "According to Hamilton, which is “a leading character in the definition of good government”?",
    "choices": [
     "Energy in the Executive",
     "A numerous legislature",
     "An executive council",
     "The absolute power of a single man"
    ],
    "answer": 0,
    "explain": "Fed 70: Hamilton: “Energy in the Executive is a leading character in the definition of good government.”"
   },
   {
    "sourceId": "f70energy",
    "q": "Energy in the Executive is a leading character in the definition of…",
    "choices": [
     "Good government",
     "A monarchy",
     "A dictatorship",
     "A feeble legislature"
    ],
    "answer": 0,
    "explain": "Fed 70: That is the famous line in the opening paragraph."
   },
   {
    "sourceId": "f70uses",
    "q": "Which is something energy in the Executive is essential to?",
    "choices": [
     "Steady administration of the laws",
     "Making the legislature smaller",
     "Giving the Executive a council",
     "Keeping the Executive weak so it can be watched"
    ],
    "answer": 0,
    "explain": "Fed 70: He says energy is essential to the steady administration of the laws."
   },
   {
    "sourceId": "f70feeble",
    "q": "A feeble Executive implies…",
    "choices": [
     "A feeble execution of the government",
     "A safer government",
     "A more responsible government",
     "A larger legislature"
    ],
    "answer": 0,
    "explain": "Fed 70: Hamilton: a feeble Executive implies a feeble execution of the government."
   },
   {
    "sourceId": "f70feeble",
    "q": "Hamilton says a feeble execution is another phrase for a…",
    "choices": [
     "Bad execution",
     "Safe execution",
     "Responsible execution",
     "United execution"
    ],
    "answer": 0,
    "explain": "Fed 70: A feeble execution is “but another phrase for a bad execution.”"
   },
   {
    "sourceId": "f70feeble",
    "q": "Hamilton says a government ill executed must be, in practice, a…",
    "choices": [
     "Bad government",
     "Dictatorship",
     "United government",
     "Responsible government"
    ],
    "answer": 0,
    "explain": "Fed 70: A government ill executed, whatever it is in theory, must be a bad government in practice."
   },
   {
    "sourceId": "f70ingred",
    "q": "Which is an ingredient of energy in the Executive?",
    "choices": [
     "Unity",
     "Due responsibility",
     "Due dependence on the people",
     "A council"
    ],
    "answer": 0,
    "explain": "Fed 70: The four ingredients of energy are unity, duration, adequate provision for support, and competent powers."
   },
   {
    "sourceId": "f70ingred",
    "q": "Which is NOT an ingredient of energy in the Executive?",
    "choices": [
     "Due dependence on the people",
     "Duration",
     "Competent powers",
     "An adequate provision for its support"
    ],
    "answer": 0,
    "explain": "Fed 70: Due dependence on the people is an ingredient of safety, not energy."
   },
   {
    "sourceId": "f70safe",
    "q": "Which is an ingredient of safety in the republican sense?",
    "choices": [
     "Due responsibility",
     "Unity",
     "Duration",
     "Competent powers"
    ],
    "answer": 0,
    "explain": "Fed 70: Safety needs a due dependence on the people and a due responsibility."
   },
   {
    "sourceId": "f70safe",
    "q": "Safety in the republican sense requires a due dependence on the people and a due…",
    "choices": [
     "Responsibility",
     "Unity",
     "Duration",
     "Provision"
    ],
    "answer": 0,
    "explain": "Fed 70: Those are the two ingredients of safety."
   },
   {
    "sourceId": "f70unity",
    "q": "Which qualities does Hamilton say mark one man's proceedings more than any greater number's?",
    "choices": [
     "Decision, activity, secrecy, and despatch",
     "Deliberation, wisdom, caution, and delay",
     "Dissension, rivalry, jealousy, and delay",
     "Censure, punishment, expense, and doubt"
    ],
    "answer": 0,
    "explain": "Fed 70: He says one man has these qualities in a more eminent degree."
   },
   {
    "sourceId": "f70unity",
    "q": "As the number in the executive increases, decision, activity, secrecy, and despatch…",
    "choices": [
     "Are diminished",
     "Are increased",
     "Stay exactly the same",
     "Are strengthened"
    ],
    "answer": 0,
    "explain": "Fed 70: “In proportion as the number is increased, these qualities will be diminished.”"
   },
   {
    "sourceId": "f70unity",
    "q": "Hamilton says it “will not be disputed” that ___ is conducive to energy.",
    "choices": [
     "Unity",
     "Plurality",
     "A council",
     "Division of power"
    ],
    "answer": 0,
    "explain": "Fed 70: Unity is conducive to energy."
   },
   {
    "sourceId": "f70dissent",
    "q": "When people of equal dignity and authority share an office, there is peculiar danger of…",
    "choices": [
     "Personal emulation and even animosity",
     "Too much agreement among them",
     "Too little expense for the public",
     "Rapid and decisive action"
    ],
    "answer": 0,
    "explain": "Fed 70: Hamilton warns of personal emulation and even animosity."
   },
   {
    "sourceId": "f70dissent",
    "q": "Dissensions lessen respectability, weaken authority, and…",
    "choices": [
     "Distract the plans and operation of those they divide",
     "Speed up the plans of those whom they divide",
     "Strengthen the people's trust in the officials",
     "Unite the whole community behind one plan"
    ],
    "answer": 0,
    "explain": "Fed 70: They distract the plans and operation of those whom they divide."
   },
   {
    "sourceId": "f70legis",
    "q": "Dissensions must be accepted in the legislature but are unnecessary and unwise in the…",
    "choices": [
     "Executive",
     "Roman Senate",
     "Press",
     "Voters"
    ],
    "answer": 0,
    "explain": "Fed 70: It is unnecessary, and therefore unwise, to introduce them into the Executive."
   },
   {
    "sourceId": "f70resp",
    "q": "Which does Hamilton call one of the weightiest objections to plurality in the Executive?",
    "choices": [
     "It tends to conceal faults and destroy responsibility",
     "It costs the public far too little",
     "It makes the Executive act too quickly",
     "It gives the people too much say in government"
    ],
    "answer": 0,
    "explain": "Fed 70: It tends to conceal faults and destroy responsibility."
   },
   {
    "sourceId": "f70resp",
    "q": "Hamilton says responsibility is of two kinds…",
    "choices": [
     "Censure and punishment",
     "Unity and duration",
     "Dependence and safety",
     "Energy and expense"
    ],
    "answer": 0,
    "explain": "Fed 70: “Responsibility is of two kinds, to censure and to punishment.”"
   },
   {
    "sourceId": "f70resp",
    "q": "Which kind of responsibility is more important, especially in an elective office?",
    "choices": [
     "Censure",
     "Punishment",
     "Expense",
     "Duration"
    ],
    "answer": 0,
    "explain": "Fed 70: He says censure is the more important of the two."
   },
   {
    "sourceId": "f70blame",
    "q": "In a plural executive, the blame for a bad measure…",
    "choices": [
     "Can be shifted around so the public can't tell who is at fault",
     "Always falls on the oldest member of the group",
     "Falls equally on every member of the group",
     "Is easy for the public to assign correctly"
    ],
    "answer": 0,
    "explain": "Fed 70: Blame is shifted from one to another so the public is left in suspense about the real author."
   },
   {
    "sourceId": "f70blame",
    "q": "Which excuse does Hamilton say is constantly at hand in a plural executive?",
    "choices": [
     "“I was overruled by my council.”",
     "“I acted alone.”",
     "“I was following the people's orders.”",
     "“I obeyed the Dictator.”"
    ],
    "answer": 0,
    "explain": "Fed 70: He quotes: “I was overruled by my council.”"
   },
   {
    "sourceId": "f70jealousy",
    "q": "Why does Hamilton say it is safer to have a single executive?",
    "choices": [
     "The people then have a single object for their jealousy and watchfulness",
     "One man needs no council to guide him",
     "A single man can never be removed from office",
     "The people trust him without needing to watch him"
    ],
    "answer": 0,
    "explain": "Fed 70: A single object for the jealousy and watchfulness of the people is safer."
   },
   {
    "sourceId": "f70vplural",
    "q": "In Federalist 70, “plurality in the Executive” means…",
    "choices": [
     "More than one person sharing executive power",
     "One person holding all executive power",
     "The people choosing the Executive",
     "A long term in office"
    ],
    "answer": 0,
    "explain": "Fed 70: Plurality is the opposite of unity: two or more persons share executive power."
   },
   {
    "sourceId": "f70vplural",
    "q": "More than one person sharing executive power is called…",
    "choices": [
     "Plurality",
     "Unity",
     "Duration",
     "Responsibility"
    ],
    "answer": 0,
    "explain": "Fed 70: Hamilton argues against plurality in the Executive."
   },
   {
    "sourceId": "f70vunity",
    "q": "In Federalist 70, “unity” in the Executive means…",
    "choices": [
     "Executive power held by one person",
     "Agreement between two Consuls",
     "A council of equals",
     "A permanent office"
    ],
    "answer": 0,
    "explain": "Fed 70: Unity means the power is in one person, not shared."
   },
   {
    "sourceId": "f70vunity",
    "q": "Executive power held by one person is called…",
    "choices": [
     "Unity",
     "Plurality",
     "Censure",
     "A cabal"
    ],
    "answer": 0,
    "explain": "Fed 70: Unity is the first ingredient of energy."
   }
  ]
 }
};
