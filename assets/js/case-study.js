const params = new URLSearchParams(window.location.search);
const slug = params.get('project') || 'lumen';



const data = STUDIES[slug];

if (!data) {
    // Handle missing project
    document.body.innerHTML = '<div style="display:grid;place-items:center;height:100vh;text-align:center;"><div><h1>Project Not Found</h1><p>The project you are looking for does not exist.</p><a href="index.html" style="color:var(--accent);text-decoration:underline;">Return Home</a></div></div>';
} else {
    const qs = id => document.getElementById(id);
    qs('case-title').textContent = data.title;
    qs('case-tagline').textContent = data.tagline;
    qs('case-description').textContent = data.description;
    qs('case-role').textContent = data.role;
    qs('case-timeline').textContent = data.timeline;
    qs('case-impact').textContent = data.impact;
    qs('case-overview').textContent = data.overview;
    qs('case-problem').textContent = data.problem;
    qs('feature-visual').setAttribute('data-label', data.featureLabel || 'Concept hero');
    qs('problem-visual').setAttribute('data-label', data.problemLabel || 'Research focus');
    qs('solutions-intro').textContent = data.solutionIntro || data.summary;
    qs('persona-name').textContent = data.persona.name;
    qs('persona-role').textContent = data.persona.role;
    qs('persona-bio').textContent = data.persona.bio;
    qs('persona-quote').textContent = data.persona.quote;

    const personaGoals = qs('persona-goals');
    personaGoals.innerHTML = '';
    data.persona.goals.forEach(goal => {
        const li = document.createElement('li');
        li.textContent = goal;
        personaGoals.appendChild(li);
    });

    const heroTools = qs('case-tools');
    heroTools.innerHTML = '';
    (data.tools || []).forEach(tool => {
        const span = document.createElement('span');
        span.textContent = tool;
        heroTools.appendChild(span);
    });

    const goalsWrap = qs('case-goals');
    goalsWrap.innerHTML = '';
    (data.goals || []).forEach(goal => {
        const card = document.createElement('div');
        card.className = 'goal-card';
        card.innerHTML = `<div class="goal-icon">★</div><h4>${goal.title}</h4><p>${goal.description}</p>`;
        goalsWrap.appendChild(card);
    });

    const problems = qs('case-user-problems');
    problems.innerHTML = '';
    (data.userProblems || []).forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        problems.appendChild(li);
    });

    const researchList = qs('case-research');
    researchList.innerHTML = '';
    (data.researchHighlights || []).forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.title}:</strong> ${item.detail}`;
        researchList.appendChild(li);
    });

    const processWrap = qs('case-process');
    processWrap.innerHTML = '';
    (data.process || []).forEach(step => {
        const div = document.createElement('div');
        div.className = 'process-step';
        div.innerHTML = `<p>${step.phase}</p><p>${step.detail}</p>`;
        processWrap.appendChild(div);
    });

    const solutionWrap = qs('case-solutions');
    solutionWrap.innerHTML = '';
    (data.solutions || []).forEach(solution => {
        const div = document.createElement('div');
        div.className = 'solution-card';
        div.innerHTML = `<h4>${solution.title}</h4><p>${solution.detail}</p>`;
        solutionWrap.appendChild(div);
    });

    const lowFiWrap = qs('case-lowfi');
    lowFiWrap.innerHTML = '';
    (data.deliverables?.lowFi || []).forEach(item => {
        const div = document.createElement('div');
        div.className = 'artifact-thumb';
        div.textContent = item;
        lowFiWrap.appendChild(div);
    });

    const hiFiWrap = qs('case-hifi');
    hiFiWrap.innerHTML = '';
    (data.deliverables?.hiFi || []).forEach(item => {
        const div = document.createElement('div');
        div.className = 'artifact-thumb';
        div.textContent = item;
        hiFiWrap.appendChild(div);
    });

    const outcomeWrap = qs('case-outcomes');
    outcomeWrap.innerHTML = '';
    (data.outcomes || []).forEach(metric => {
        const div = document.createElement('div');
        div.className = 'metric-card';
        div.innerHTML = `<h4>${metric.value}</h4><p>${metric.label}</p><p>${metric.detail}</p>`;
        outcomeWrap.appendChild(div);
    });

    const learningsWrap = qs('case-learnings');
    learningsWrap.innerHTML = '';
    (data.learnings || []).forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        learningsWrap.appendChild(li);
    });

    document.getElementById('footer-year').textContent = new Date().getFullYear();

    const bodyEl = document.body;
    const toggle = document.querySelector('.theme-toggle');
    toggle.addEventListener('click', () => {
        bodyEl.classList.toggle('theme-dark');
        bodyEl.classList.add('theme-transition');
        setTimeout(() => bodyEl.classList.remove('theme-transition'), 500);
    });
}
