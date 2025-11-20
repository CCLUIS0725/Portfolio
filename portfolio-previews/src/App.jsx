import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Preview1 from './pages/Preview1';
import Preview2 from './pages/Preview2';
import Preview3 from './pages/Preview3';
import Preview4 from './pages/Preview4';
import Preview5 from './pages/Preview5';
import Preview6 from './pages/Preview6';
import Preview7 from './pages/Preview7';
import Preview8 from './pages/Preview8';
import Preview9 from './pages/Preview9';
import Preview10 from './pages/Preview10';
import Preview1CaseStudy from './pages/Preview1CaseStudy';
import Preview2CaseStudy from './pages/Preview2CaseStudy';
import Preview3CaseStudy from './pages/Preview3CaseStudy';
import Preview4CaseStudy from './pages/Preview4CaseStudy';
import Preview5CaseStudy from './pages/Preview5CaseStudy';
import Preview6CaseStudy from './pages/Preview6CaseStudy';
import Preview7CaseStudy from './pages/Preview7CaseStudy';
import Preview8CaseStudy from './pages/Preview8CaseStudy';
import Preview9CaseStudy from './pages/Preview9CaseStudy';
import Preview10CaseStudy from './pages/Preview10CaseStudy';

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Portfolio Previews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/preview1" className="p-6 border rounded-xl hover:bg-accent transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Preview 1</h2>
          <p className="text-muted-foreground">Port of existing design with Tailwind</p>
        </Link>
        <Link to="/preview2" className="p-6 border rounded-xl hover:bg-accent transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Preview 2</h2>
          <p className="text-muted-foreground">React Bits & Shadcn UI</p>
        </Link>
        <Link to="/preview3" className="p-6 border rounded-xl hover:bg-accent transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Preview 3</h2>
          <p className="text-muted-foreground">Motion Primitives & Cult UI</p>
        </Link>
        <Link to="/preview4" className="p-6 border rounded-xl hover:bg-accent transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Preview 4</h2>
          <p className="text-muted-foreground">User Provided Design</p>
        </Link>
        <Link to="/preview5" className="p-6 border rounded-xl hover:bg-accent transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Preview 5</h2>
          <p className="text-muted-foreground">Smooth UI & Clean Aesthetic</p>
        </Link>
        <Link to="/preview6" className="p-6 border rounded-xl hover:bg-accent transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Preview 6</h2>
          <p className="text-muted-foreground">Neo-Brutalism & High Contrast</p>
        </Link>
        <Link to="/preview7" className="p-6 border rounded-xl hover:bg-accent transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Preview 7</h2>
          <p className="text-muted-foreground">Cyberpunk & Neon Glow</p>
        </Link>
        <Link to="/preview8" className="p-6 border rounded-xl hover:bg-accent transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Preview 8</h2>
          <p className="text-muted-foreground">Playful & Kokonut UI</p>
        </Link>
        <Link to="/preview9" className="p-6 border rounded-xl hover:bg-accent transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Preview 9</h2>
          <p className="text-muted-foreground">Minimalist Typography</p>
        </Link>
        <Link to="/preview10" className="p-6 border rounded-xl hover:bg-accent transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Preview 10</h2>
          <p className="text-muted-foreground">3D & Experimental</p>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview1" element={<Preview1 />} />
        <Route path="/preview2" element={<Preview2 />} />
        <Route path="/preview3" element={<Preview3 />} />
        <Route path="/preview4" element={<Preview4 />} />
        <Route path="/preview5" element={<Preview5 />} />
        <Route path="/preview6" element={<Preview6 />} />
        <Route path="/preview7" element={<Preview7 />} />
        <Route path="/preview8" element={<Preview8 />} />
        <Route path="/preview9" element={<Preview9 />} />
        <Route path="/preview10" element={<Preview10 />} />
        <Route path="/preview1/case-study" element={<Preview1CaseStudy />} />
        <Route path="/preview2/case-study" element={<Preview2CaseStudy />} />
        <Route path="/preview3/case-study" element={<Preview3CaseStudy />} />
        <Route path="/preview4/case-study" element={<Preview4CaseStudy />} />
        <Route path="/preview5/case-study" element={<Preview5CaseStudy />} />
        <Route path="/preview6/case-study" element={<Preview6CaseStudy />} />
        <Route path="/preview7/case-study" element={<Preview7CaseStudy />} />
        <Route path="/preview8/case-study" element={<Preview8CaseStudy />} />
        <Route path="/preview9/case-study" element={<Preview9CaseStudy />} />
        <Route path="/preview10/case-study" element={<Preview10CaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
