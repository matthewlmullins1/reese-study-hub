// ACT format facts (checked against act.org in Oct 2026) + official links.
window.ACT_DATA=window.ACT_DATA||{};
ACT_DATA.official=[
 {title:"ACT free full-length practice tests (Practice Tests 1–4, timed & untimed)",url:"https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/free-act-test-prep.html",note:"Official digital practice tests with timed and untimed versions of every section, plus PDF booklets and scoring keys. Practice Test 2 was ACT's first all-new test written for the enhanced format."},
 {title:"Preparing for the ACT (2025–2026 guide, PDF)",url:"https://www.act.org/content/dam/act/unsecured/documents/Preparing-for-the-ACT-e.pdf",note:"ACT's free guide for the enhanced ACT: test strategies, content of each section, a full practice test, and how to score it."},
 {title:"ACT Practice Test 2 (PDF booklet)",url:"https://www.act.org/content/dam/act/unsecured/documents/ACT-Test-Prep-ACT-Practice-Test-2-Form.pdf",note:"Paper version of an enhanced-format practice test with an answer key and scoring instructions."},
 {title:"Official ACT sample questions by subject",url:"https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/free-act-test-prep/act-online-test-sample-questions.html",note:"Short sets of official English, math, reading, science, and writing questions."},
 {title:"What's on the ACT: sections & structure",url:"https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/act-exam-sections-and-structure.html",note:"ACT's official table of questions and minutes per section."},
 {title:"ACT calculator policy",url:"https://www.act.org/content/act/en/products-and-services/the-act/test-day/calculator-policy.html",note:"Check that your calculator is allowed before test day."}
];
const T=`<table class="fmt"><tr><th>Order</th><th>Section</th><th>Questions</th><th>Minutes</th><th>≈ Time per question</th></tr>
<tr><td>1</td><td>English</td><td>50 (40 scored)</td><td>35</td><td>42 sec</td></tr>
<tr><td>2</td><td>Math</td><td>45 (41 scored)</td><td>50</td><td>67 sec</td></tr>
<tr><td colspan="5"><i>Break (10–15 min)</i></td></tr>
<tr><td>3</td><td>Reading</td><td>36 (27 scored)</td><td>40</td><td>67 sec (including reading time)</td></tr>
<tr><td>4</td><td>Science <b>(optional)</b></td><td>40 (34 scored)</td><td>40</td><td>60 sec (including reading time)</td></tr>
<tr><td>5</td><td>Writing <b>(optional)</b></td><td>1 essay</td><td>40</td><td>n/a</td></tr></table>
<p class="muted">Core test (English + Math + Reading) = 131 questions in 125 minutes, about 2 hr 20 min with the break. With Science, about 3 hours.</p>`;
const C=`<table class="fmt"><tr><th></th><th>Legacy ACT</th><th>Enhanced ACT</th></tr>
<tr><td>English</td><td>75 Q / 45 min</td><td>50 Q / 35 min</td></tr><tr><td>Math</td><td>60 Q / 60 min, 5 choices</td><td>45 Q / 50 min, 4 choices</td></tr>
<tr><td>Reading</td><td>40 Q / 35 min</td><td>36 Q / 40 min</td></tr><tr><td>Science</td><td>40 Q / 35 min, required</td><td>40 Q / 40 min, optional</td></tr>
<tr><td>Composite</td><td>avg of E, M, R, S</td><td>avg of E, M, R</td></tr><tr><td>Total (core)</td><td>215 Q / 175 min</td><td>131 Q / 125 min</td></tr></table>`;
ACT_DATA.format={sections:[
 {title:"The enhanced ACT at a glance",html:T,bullets:[
  "Every multiple-choice question has <b>4 answer choices</b>. Math used to have 5, so a blind guess is now a 1-in-4 shot.",
  "There is <b>no penalty for guessing</b>. Never leave a blank.",
  "Answer letters alternate: odd questions use A B C D, even questions use F G H J. This hub does the same.",
  "Calculator: allowed on Math only (a permitted model), and every Math problem can be solved without one. On the online ACT, a Desmos on-screen calculator is built in. No calculator on Science.",
  "Embedded field-test questions: some questions in every section are tryouts that don't count (10 English, 4 Math, 9 Reading, 6 Science). They aren't labeled, so treat every question as if it counts."].map(x=>x.replace(/<\/?b>/g,'')) },
 {title:"What changed in 2025",html:C,bullets:[
  "Rollout: the enhanced ACT started with national online testing in April 2025 and paper national testing in September 2025. School-day (state and district) testing switched in spring 2026.",
  "The test is shorter overall: about 85 fewer questions and 50 fewer minutes for the core test, so you get more time per question than before.",
  "Science is now optional and is NOT part of the Composite. If you take it, you get a Science score and a STEM score (Math + Science).",
  "Writing is still optional, 40 minutes, scored 2–12, and does not affect your Composite.",
  "Questions in English and Math changed structure the most. English passages each come with a short set of questions (in ACT's sample test the sets run 5 or 10 questions), and the questions are shorter.",
  "The skills tested didn't change. ACT says older official practice still covers the right content, just in a longer format.",
  "Superscore: from September 2025 on, the Superscore Composite uses your best English, Math, and Reading from any test dates, and older (legacy) tests still count."]},
 {title:"Scoring",bullets:[
  "Each section is scored 1–36. Your raw score is the number of scored questions you got right, and ACT converts it to a scale score using that test form's table.",
  "Composite = (English + Math + Reading) ÷ 3, rounded to the nearest whole number (.5 rounds up). Example: 31 + 28 + 30 = 89 → 29.67 → 30.",
  "STEM score = average of Math and Science (only if you take Science). ELA score = English, Reading, and Writing (only if you take Writing).",
  "On ACT's 2025–26 practice test, about 30/40 in English was roughly a 24, and about 20/41 in Math was about a 19. Each form is curved a little differently.",
  "The scores in this hub are rough ESTIMATES from a curve modeled loosely on those tables. They are not official ACT scores."]},
 {title:"Pacing plan",bullets:[
  "English (42 sec per question): about 6 minutes per 10-question passage and 3 minutes per 5-question passage, which leaves about 2 minutes to check.",
  "Math (67 sec per question): go fast on the first 20 or so, which are usually easier. Bank time for the last 15. If a question takes more than 2 minutes, guess, flag it, and move on.",
  "Reading (40 min, 4 passages, 9 questions each): about 9–10 minutes per passage. Spend 3–4 minutes reading and 5–6 answering.",
  "Science (40 min, about 6–7 passages): about 5–6 minutes per passage. Go to the questions first and read only the figures you need. Conflicting Viewpoints passages need more reading, so do them last if they slow you down.",
  "Start your watch at the section start and check it at the halfway point: around question 25 in English, 23 in Math, after passage 2 in Reading, and after passage 3 or 4 in Science."]},
 {title:"Test-day strategy",bullets:[
  "Bring: your admission ticket, photo ID, No. 2 pencils, an eraser, a permitted calculator with fresh batteries, and a watch with no alarm. Phones and smartwatches are not allowed.",
  "Do the easy questions first, flag the hard ones, and come back to them. Every question is worth the same.",
  "Eliminate, then guess. Crossing out even one choice raises your odds from 25% to 33%.",
  "English: read the full sentence, not just the underlined part. Shorter is usually better if it's grammatically correct and keeps the meaning. Use NO CHANGE when the original really is right. It's correct about as often as any other choice.",
  "Math: watch for answers that are a midway step, like finding x when the question asks for 2x. Check whether your answer is reasonable.",
  "Reading: answer from the text, not from what you already know. The right answer is supported by specific lines.",
  "Science: it's mostly reading graphs and tables. Check axis labels and units, and look for trends (increases, decreases, peaks).",
  "In the week before: take at least one full official practice test with the timer, sleep well, and don't cram the night before."]}
],sources:[
 {title:"ACT: What's on the ACT Test? Exam sections & structure",url:"https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/act-exam-sections-and-structure.html"},
 {title:"ACT: Enhanced ACT FAQs",url:"https://www.act.org/content/act/en/products-and-services/the-act-educator/the-act-test/enhancements-k12/faqs.html"},
 {title:"ACT: Comparison of the Legacy and Enhanced ACT (PDF)",url:"https://www.act.org/content/dam/act/unsecured/documents/ACT-Reporting-Category-Tables-Comparison.pdf"},
 {title:"ACT: Preparing for the ACT 2025–2026 (PDF)",url:"https://www.act.org/content/dam/act/unsecured/documents/Preparing-for-the-ACT-e.pdf"},
 {title:"ACT: The ACT test for students",url:"https://www.act.org/content/act/en/products-and-services/the-act.html"}]};
