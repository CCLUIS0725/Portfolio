const STUDIES = {
    lumen: {
        title: 'Lumen Analytics Platform',
        tagline: 'Enterprise intelligence that keeps pace with product velocity.',
        description: 'We re-architected the data cockpit for product operators so they could see health, risks, and next best actions inside a single adaptive workspace.',
        summary: 'Redefined analytics workflow for enterprise product teams with modular insights and responsive data states.',
        tools: ['Figma', 'FigJam', 'Principle', 'After Effects'],
        role: 'Product Design Lead',
        timeline: '12-week sprint',
        impact: '32% faster reporting cycles',
        overview: 'Lumen centralizes telemetry, adoption signals, and release health into one canvas. We paired qualitative interviews with a telemetry audit to understand why reporting felt brittle and time-consuming.',
        problem: 'Operators bounced between eight tools to prepare executive readouts. Insights arrived stale, no one trusted the metrics, and handoffs broke momentum.',
        featureLabel: 'Modular dashboard hero concept',
        problemLabel: 'Research mural and prioritization grid',
        goals: [
            { title: 'Unify the signal', description: 'Design a single pane where ops teams could read squad health without reconciling spreadsheets.' },
            { title: 'Motivate action', description: 'Frame insights as living stories with next best actions so leads knew exactly what to do next.' },
            { title: 'Build trust', description: 'Expose provenance and alert fatigue controls to increase confidence in the numbers.' }
        ],
        userProblems: [
            'Insights lived across dashboards, emails, and ad hoc decks with no canonical source.',
            'Review rituals turned into debates about data freshness rather than action.',
            'Teams could not see downstream impact of blocking work, so escalations came too late.',
            'Executives wanted calm summaries while analysts wanted power tools, so there was no shared surface.'
        ],
        persona: {
            name: 'Maya Torres',
            role: 'Director of Product Operations',
            bio: 'Owns the health of six product squads and runs weekly readiness reviews. Lives in spreadsheets at 6 AM and still feels behind.',
            goals: ['See blockers before they spike churn', 'Orchestrate meetings with one living document', 'Give leaders a confident, visual story'],
            quote: 'If I spend more time reconciling decks than guiding our teams, the org is already late.'
        },
        researchHighlights: [
            { title: '12 stakeholder interviews', detail: 'Mapped four usage archetypes and how each consumes insight.' },
            { title: 'Telemetry audit', detail: 'Paired product analytics with service tickets to spot decay in reporting trust.' },
            { title: 'Shadowed 5 ops reviews', detail: 'Clocked 47 minutes of wasted prep per meeting due to duplicated screenshots.' }
        ],
        process: [
            { phase: 'Discover', detail: 'Shadowed sprint rituals, crafted opportunity tree, benchmarked workflows.' },
            { phase: 'Define', detail: 'Story mapped the north-star journey and prioritized KPIs with ops leaders.' },
            { phase: 'Design', detail: 'Built modular card system with breakpoints for desktop and tablet.' },
            { phase: 'Validate', detail: 'Ran hybrid usability plus quant test, iterated alert language, shipped beta.' }
        ],
        solutionIntro: 'We translated the research into guardrail concepts that pair guidance with measurable outcomes.',
        solutions: [
            { title: 'Adaptive command center', detail: 'Responsive layout that reorders tiles by decision priority and team role.' },
            { title: 'Contextual stories', detail: 'Narrative headers that summarize trend and impact before the chart loads.' },
            { title: 'Health timeline', detail: 'Comparative timeline showing when each squad drifted from target.' },
            { title: 'Focus alerts', detail: 'Noise-aware system that batches nudges with clear next steps.' },
            { title: 'Cheat day controls', detail: 'Allows teams to pause metrics for planned maintenance without losing history.' },
            { title: 'Guided rituals', detail: 'Facilitated review mode that prompts who speaks next and captures decisions.' },
            { title: 'Peer channel', detail: 'Lightweight chat so analysts can push clarifying context inside the dashboard.' }
        ],
        deliverables: {
            lowFi: ['North-star journey map', 'Information architecture and card stack', 'Alert escalation storyboard'],
            hiFi: ['Live data cockpit (desktop and tablet)', 'Mobile executive digest', 'Motion spec for card transitions']
        },
        outcomes: [
            { label: 'Adoption', value: '+32%', detail: 'Ops teams consolidated reporting workflows into Lumen within six weeks.' },
            { label: 'Cycle time', value: '-41%', detail: 'Prep for weekly reviews dropped from 110 minutes to 65 minutes.' },
            { label: 'Confidence', value: '+18 NPS', detail: 'Exec sponsors rated trust in telemetry 18 points higher post-launch.' }
        ],
        learnings: [
            'Pair telemetry with story-driven prototypes to unblock prioritization debates.',
            'Instrument every friction point in the ritual so you can prove before and after ROI.',
            'Ship open data provenance quickly, because transparency is the fastest trust builder.'
        ]
    },
    nova: {
        title: 'Nova Health Companion',
        tagline: 'A calm coach that turns biometrics into empathetic rituals.',
        description: 'Nova helps patients translate biometric spikes into tiny, doable steps across phone and wearable surfaces.',
        summary: 'Designed a calm, assistive mobile experience translating biometrics into empathetic guidance.',
        tools: ['Figma', 'FigJam', 'Maze', 'After Effects'],
        role: 'Lead Product Designer',
        timeline: '6 sprint cycles',
        impact: '41% increase in daily adherence',
        overview: 'Nova ingests wearable data, medication schedules, and clinician notes to build a ritual playlist for each patient. The work combined service design with motion to convey reassurance.',
        problem: 'Patients saw jagged charts with no interpretation, resulting in anxiety and abandoned care plans.',
        featureLabel: 'Empathetic ritual playlist',
        problemLabel: 'Interview wall and mood map',
        goals: [
            { title: 'Reduce anxiety', description: 'Translate spikes into plain-language guidance and breathing room.' },
            { title: 'Drive adherence', description: 'Reward streaks and make rituals stackable across the week.' },
            { title: 'Create shared context', description: 'Give clinicians and caregivers a synchronized view of progress.' }
        ],
        userProblems: [
            'Wearable alerts fired without a why, so users ignored them.',
            'Rigid routines ignored flare-ups or travel days, causing guilt spirals.',
            'Caregivers had no clue if instructions were followed until the next appointment.'
        ],
        persona: {
            name: 'Jordan Ellis',
            role: 'Remote patient living with hypertension',
            bio: 'Balances contract work with medical appointments and needs rituals that flex around unpredictable energy.',
            goals: ['Keep vitals in agreed ranges', 'Avoid alarm fatigue', 'Share clear updates with clinician'],
            quote: 'If the app panics, I panic. I need a coach, not a siren.'
        },
        researchHighlights: [
            { title: '8 diary studies', detail: 'Captured how patients react to biometric spikes in the moment.' },
            { title: 'Care-team workshops', detail: 'Co-created escalation ladders with nurses and caregivers.' },
            { title: 'Accessibility review', detail: 'Ensured color, copy, and motion supported low-vision patients.' }
        ],
        process: [
            { phase: 'Discover', detail: 'Diary study, service blueprint, emotion mapping.' },
            { phase: 'Define', detail: 'Co-authored rituals with clinicians and prioritized alerts.' },
            { phase: 'Design', detail: 'Motion prototypes for calm feedback loops.' },
            { phase: 'Validate', detail: 'Remote usability and biometric stress testing.' }
        ],
        solutionIntro: 'We choreographed interventions that flex with patient bandwidth while keeping clinicians in the loop.',
        solutions: [
            { title: 'Welcome back ritual', detail: 'Morning check-in blends breath work with medication reminders.' },
            { title: 'Contextual nudges', detail: 'Alerts use empathetic tone and cite the biometric driving the suggestion.' },
            { title: 'Cheat-day planner', detail: 'Patients can reschedule rituals and log why to keep streak logic intact.' },
            { title: 'Care circle updates', detail: 'One tap sends a status card to loved ones or clinicians.' },
            { title: 'Content studio', detail: 'Library of short clinician videos and success stories for inspiration.' },
            { title: 'Challenge hub', detail: 'Gamified weekly challenges with incentives from insurers.' },
            { title: 'Quiet hours', detail: 'Adaptive notification schedule that honors rest windows.' }
        ],
        deliverables: {
            lowFi: ['Service blueprint', 'Adaptive ritual flow', 'Escalation ladder wireframes'],
            hiFi: ['Calm UI kit', 'Wearable companion screens', 'Motion spec for vital alerts']
        },
        outcomes: [
            { label: 'Adherence', value: '+41%', detail: 'Daily ritual completion jumped after launch.' },
            { label: 'Alert fatigue', value: '-36%', detail: 'Noise-aware nudges cut ignored alerts dramatically.' },
            { label: 'CSAT', value: '4.7/5', detail: 'Patients rated the experience as supportive and clear.' }
        ],
        learnings: [
            'Language cues mood, so rewrite alerts until they feel like a human coach.',
            'Let patients bend the plan without breaking measurement.',
            'Clinician co-design keeps trust high when sharing biometric data.'
        ]
    },
    aero: {
        title: 'Aero Essential Store',
        tagline: 'Editorial storytelling for high-consideration retail.',
        description: 'We blended tactile commerce with immersive content so shoppers could feel craftsmanship before purchase.',
        summary: 'Elevated a premium retail brand with editorial storytelling and tactile commerce patterns.',
        tools: ['Figma', 'After Effects', 'WebGL', 'Photoshop'],
        role: 'Principal UX/UI Designer',
        timeline: '10-week engagement',
        impact: '18% uplift in AOV',
        overview: 'Aero sells travel essentials built with aerospace-grade materials. The new storefront pairs cinematic layouts with guided fit to increase confidence.',
        problem: 'The previous e-commerce template buried the brand story and gave shoppers no context on feel or fit.',
        featureLabel: 'Hero module and responsive grid',
        problemLabel: 'Experience storyboard and swatch wall',
        goals: [
            { title: 'Lead with narrative', description: 'Introduce each product with a crafted vignette.' },
            { title: 'Build tactile confidence', description: 'Show texture, scale, and packing scenarios interactively.' },
            { title: 'Streamline checkout', description: 'Remove friction so cross-device shoppers glide through payment.' }
        ],
        userProblems: [
            'All products felt identical in the grid with no sense of craft.',
            'Sizing and fit guidance lived in PDF spec sheets.',
            'Mobile checkout forced five different panels and restarts.'
        ],
        persona: {
            name: 'Nadia Byrne',
            role: 'Creative director and frequent traveler',
            bio: 'Moves between shoots weekly and invests in gear that blends form with longevity.',
            goals: ['Understand materials before purchase', 'See how items style with the collection', 'Check out privately on any device'],
            quote: 'If I can see the textures breathe and know it will fit the cabin, I am sold.'
        },
        researchHighlights: [
            { title: 'Shop-alongs', detail: 'Observed seven customers shopping luxury competitors online.' },
            { title: '3D scans', detail: 'Captured textures and lighting to inform interactive swatches.' },
            { title: 'Checkout teardown', detail: 'Benchmarked best-in-class express flows to remove steps.' }
        ],
        process: [
            { phase: 'Discover', detail: 'Brand immersion, conversion audit, qualitative shop-alongs.' },
            { phase: 'Define', detail: 'Storyboarded hero narratives and prioritized merch rules.' },
            { phase: 'Design', detail: 'Built modular editorial blocks with a WebGL product viewer.' },
            { phase: 'Validate', detail: 'Ran moderated usability plus multivariate checkout test.' }
        ],
        solutionIntro: 'We built a modular system that blends visual storytelling with utility so every launch feels curated.',
        solutions: [
            { title: 'Hero story rail', detail: 'Scroll-triggered panels that reveal craftsmanship details.' },
            { title: 'Lookbook grid', detail: 'Swappable editorial layouts for merch teams to mix quickly.' },
            { title: 'Smart fit guide', detail: 'Interactive quiz and cabin-fit AR preview.' },
            { title: 'Packing planner', detail: 'Drag items into the case to test volume and pairings.' },
            { title: 'Texture swatches', detail: 'WebGL viewer that reacts to cursor and device motion.' },
            { title: 'Express checkout', detail: 'One adaptive panel across mobile and desktop with wallet support.' },
            { title: 'Membership moments', detail: 'Loyalty stories woven into PDP to highlight premium tier.' }
        ],
        deliverables: {
            lowFi: ['Content hierarchy wireframes', 'Merch rules system', 'Checkout storyboard'],
            hiFi: ['Editorial design system', '3D viewer UI', 'Animation spec for hero rail']
        },
        outcomes: [
            { label: 'Avg. order value', value: '+18%', detail: 'Bundles increased as shoppers paired complementary pieces.' },
            { label: 'Checkout speed', value: '-27%', detail: 'Single-panel checkout cut abandonments significantly.' },
            { label: 'Brand engagement', value: '+42%', detail: 'Visitors spent longer exploring interactive narratives.' }
        ],
        learnings: [
            'Give merch teams flexible storytelling blocks so they can iterate weekly.',
            'Interactive fit guidance reduces returns more than discounting.',
            'Motion guidelines keep premium stories feeling intentional rather than flashy.'
        ]
    }
};
