export const PORTFOLIO_THEMES = [
    {
        id: 'RETRO',
        title: "Game Boy!",
        description: "A nostalgic journey back to 8-bit handheld gaming.",
        narrative: "Insert cartridge. Power on. The blue screen glows with infinite potential. A portfolio that fits in your pocket.",
        designPhilosophy: "Pixel-perfect nostalgia meets modern functionality.",
        inspiration: ["Game Boy", "Pixel Art", "Retro Gaming"],
        previewImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=60&w=600&auto=format&fit=crop",
        accentColor: "#facc15", // Pokemon Yellow
        contrastColor: "#1d4ed8", // Blue 700
        fontFamily: "font-['Press_Start_2P']",
        bgStyle: "bg-gradient-to-b from-blue-500 to-blue-600 text-white",
        buttonStyle: "bg-yellow-400 text-black border-4 border-blue-800 shadow-[4px_4px_0px_0px_#1e40af] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#1e40af] rounded-lg text-xs tracking-widest",
        route: "/preview1",
        music: "/music/theme1.mp3"
    },
    {
        id: 'BLUEPRINT',
        title: "The Blueprint",
        description: "Technical architectural design with precise grid lines.",
        narrative: "Drafting the digital world. Precision, measurement, and structural integrity.",
        designPhilosophy: "Structure is beauty. Everything has a purpose.",
        inspiration: ["Architectural Plans", "CAD", "Technical Drawing"],
        previewImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=60&w=600&auto=format&fit=crop",
        accentColor: "#60a5fa", // Blue 400
        contrastColor: "#ffffff",
        fontFamily: "font-mono",
        bgStyle: "bg-[#1e293b] text-blue-100", // Slate 800
        buttonStyle: "bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-none uppercase tracking-widest dashed-border",
        route: "/preview2",
        music: "/music/theme2.mp3"
    },
    {
        id: 'MINIMAL',
        title: "Canvas Zero",
        description: "Pure minimalism where whitespace is the main feature.",
        narrative: "Silence is golden. In a noisy web, clarity is the ultimate luxury. Stripped back to the essential.",
        designPhilosophy: "Less is more. Much more.",
        inspiration: ["Swiss Design", "Art Galleries", "Print Editorial"],
        previewImage: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=60&w=600&auto=format&fit=crop",
        accentColor: "#f97316", // Orange 500
        contrastColor: "#000000",
        fontFamily: "font-sans",
        bgStyle: "bg-[#F2F2F2] text-zinc-900",
        buttonStyle: "bg-zinc-900 text-white hover:bg-orange-500 transition-colors rounded-full px-8 border-none",
        route: "/preview3",
        music: "/music/theme3.mp3"
    },
    {
        id: 'COMIC',
        title: "Hero's Saga",
        description: "Dynamic comic book layout with vibrant panels.",
        narrative: "POW! ZAP! A portfolio that packs a punch. Storytelling through panels, speech bubbles, and action.",
        designPhilosophy: "Life is a story. Tell it with impact.",
        inspiration: ["Classic Comics", "Pop Art", "Graphic Novels"],
        previewImage: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=60&w=600&auto=format&fit=crop",
        accentColor: "#1e40af", // Blue 800
        contrastColor: "#facc15", // Yellow
        fontFamily: "font-['Bangers'] tracking-wider",
        bgStyle: "bg-yellow-400 text-black",
        buttonStyle: "bg-red-600 text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase font-black rounded-none skew-x-[-10deg]",
        route: "/preview4",
        music: "/music/theme4.mp3"
    },
    {
        id: 'EDITORIAL',
        title: "Vantage Point",
        description: "Cinematic photography portfolio with parallax effects.",
        narrative: "Through the lens. Capturing moments, freezing time, and presenting work with cinematic grandeur.",
        designPhilosophy: "Visual storytelling first. Let the images speak.",
        inspiration: ["Cinema", "Photography Books", "Parallax"],
        previewImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=60&w=600&auto=format&fit=crop",
        accentColor: "#ffffff",
        contrastColor: "#000000",
        fontFamily: "font-sans",
        bgStyle: "bg-black text-zinc-300",
        buttonStyle: "bg-transparent border-b border-white hover:text-white transition-colors rounded-none px-0 pb-1 hover:bg-transparent uppercase tracking-widest text-xs",
        route: "/preview5",
        music: "/music/theme5.mp3"
    },
    {
        id: 'BRUTAL',
        title: "The Gridlock",
        description: "Neo-Brutalist design with high contrast and bold type.",
        narrative: "Raw. Unfiltered. Bold. A design that doesn't apologize for being digital. High contrast, hard edges.",
        designPhilosophy: "Function over form. Brutal honesty.",
        inspiration: ["Neo-Brutalism", "Web 1.0", "Punk Design"],
        previewImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=60&w=600&auto=format&fit=crop",
        accentColor: "#FF6B6B",
        contrastColor: "#000000",
        fontFamily: "font-mono font-bold",
        bgStyle: "bg-[#FFFDF5] text-black",
        buttonStyle: "bg-[#FF6B6B] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase font-bold rounded-none",
        route: "/preview6",
        music: "/music/theme6.mp3"
    },
    {
        id: 'CYBER',
        title: "Neon Pulse",
        description: "Cyberpunk aesthetic with glitch effects and HUD elements.",
        narrative: "High tech, low life. Jack into the matrix. A portfolio from the year 2077.",
        designPhilosophy: "The future is now. Glitch is aesthetic.",
        inspiration: ["Cyberpunk 2077", "Sci-Fi Interfaces", "Neon Lights"],
        previewImage: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=60&w=600&auto=format&fit=crop",
        accentColor: "#FCEE0A", // Cyber Yellow
        contrastColor: "#000000",
        fontFamily: "font-mono",
        bgStyle: "bg-[#050505] text-zinc-300",
        buttonStyle: "bg-[#FCEE0A] text-black hover:bg-white hover:shadow-[0_0_20px_#FCEE0A] uppercase tracking-widest rounded-none clip-path-polygon",
        route: "/preview7",
        music: "/music/theme7.mp3"
    },
    {
        id: 'PLAYFUL',
        title: "Daydream",
        description: "Soft, playful design with organic blobs and pastel colors.",
        narrative: "Floating on a cloud. Soft shapes, gentle colors, and a friendly welcome. The web should be fun.",
        designPhilosophy: "Joyful interactions. Organic shapes. Approachable design.",
        inspiration: ["Kawaii", "Soft UI", "Doodles"],
        previewImage: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=60&w=600&auto=format&fit=crop",
        accentColor: "#FF6B6B",
        contrastColor: "#000000",
        fontFamily: "font-sans",
        bgStyle: "bg-[#FFF0F5] text-[#4A4A4A]",
        buttonStyle: "bg-[#FF6B6B] text-white rounded-full shadow-lg hover:scale-105 transition-transform border-none px-8",
        route: "/preview8",
        music: "/music/theme8.mp3"
    },
    {
        id: 'SWISS',
        title: "The Simple Modernist",
        description: "Clean typography and grid systems inspired by Swiss Design.",
        narrative: "Grid systems. Helvetica. Order. A tribute to the masters of graphic design.",
        designPhilosophy: "Typography is the interface.",
        inspiration: ["Swiss Style", "International Typographic Style", "Posters"],
        previewImage: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=60&w=600&auto=format&fit=crop",
        accentColor: "#000000",
        contrastColor: "#ffffff",
        fontFamily: "font-sans font-bold tracking-tight",
        bgStyle: "bg-white text-black",
        buttonStyle: "bg-black text-white hover:bg-zinc-800 transition-colors rounded-none border-none px-8",
        route: "/preview9",
        music: "/music/theme9.mp3"
    },
    {
        id: '3D',
        title: "Celestial LogBook",
        description: "Experimental 3D navigation and treasure map aesthetic.",
        narrative: "Charting the unknown. A journey through the stars to discover hidden treasures.",
        designPhilosophy: "The web is a space to explore.",
        inspiration: ["Treasure Planet", "Steampunk", "Three.js"],
        previewImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=600&auto=format&fit=crop",
        accentColor: "#FFD700", // Gold
        contrastColor: "#000000",
        fontFamily: "font-serif",
        bgStyle: "bg-[#0B0B15] text-[#E0E0E0]",
        buttonStyle: "bg-transparent border border-[#B8860B] text-[#FFD700] hover:bg-[#B8860B]/10 rounded-lg transition-colors",
        route: "/preview10",
        music: "/music/theme10.mp3"
    }
];
