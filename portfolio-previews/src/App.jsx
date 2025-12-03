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

import IntroPage from './components/intro/IntroPage';
import NavigationLayout from './components/NavigationLayout';

function Home() {
  return <IntroPage />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<NavigationLayout />}>
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
