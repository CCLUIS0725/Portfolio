import { useRoutes, useLocation } from 'react-router-dom';
import { lazy, Suspense, cloneElement } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroPage from './components/intro/IntroPage';
import NavigationLayout from './components/NavigationLayout';
import LoadingSpinner from './components/LoadingSpinner';
import PageTransition from './components/PageTransition';
import ErrorBoundary from './components/ErrorBoundary';
import SmoothScroll from './components/SmoothScroll';

// Dynamic imports for code splitting
const Preview1 = lazy(() => import('./pages/Preview1'));
const Preview2 = lazy(() => import('./pages/Preview2'));
const Preview3 = lazy(() => import('./pages/Preview3'));
const Preview4 = lazy(() => import('./pages/Preview4'));
const Preview5 = lazy(() => import('./pages/Preview5'));
const Preview6 = lazy(() => import('./pages/Preview6'));
const Preview7 = lazy(() => import('./pages/Preview7'));
const Preview8 = lazy(() => import('./pages/Preview8'));
const Preview9 = lazy(() => import('./pages/Preview9'));
const Preview10 = lazy(() => import('./pages/Preview10'));

const Preview1CaseStudy = lazy(() => import('./pages/Preview1CaseStudy'));
const Preview2CaseStudy = lazy(() => import('./pages/Preview2CaseStudy'));
const Preview3CaseStudy = lazy(() => import('./pages/Preview3CaseStudy'));
const Preview4CaseStudy = lazy(() => import('./pages/Preview4CaseStudy'));
const Preview5CaseStudy = lazy(() => import('./pages/Preview5CaseStudy'));
const Preview6CaseStudy = lazy(() => import('./pages/Preview6CaseStudy'));
const Preview7CaseStudy = lazy(() => import('./pages/Preview7CaseStudy'));
const Preview8CaseStudy = lazy(() => import('./pages/Preview8CaseStudy'));
const Preview9CaseStudy = lazy(() => import('./pages/Preview9CaseStudy'));
const Preview10CaseStudy = lazy(() => import('./pages/Preview10CaseStudy'));
const NotFound = lazy(() => import('./pages/NotFound'));

function Home() {
  return <IntroPage />;
}

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: (
        <PageTransition>
          <Home />
        </PageTransition>
      )
    },
    {
      element: (
        <PageTransition>
          <NavigationLayout />
        </PageTransition>
      ),
      children: [
        { path: "/preview1", element: <Preview1 /> },
        { path: "/preview2", element: <Preview2 /> },
        { path: "/preview3", element: <Preview3 /> },
        { path: "/preview4", element: <Preview4 /> },
        { path: "/preview5", element: <Preview5 /> },
        { path: "/preview6", element: <Preview6 /> },
        { path: "/preview7", element: <Preview7 /> },
        { path: "/preview8", element: <Preview8 /> },
        { path: "/preview9", element: <Preview9 /> },
        { path: "/preview10", element: <Preview10 /> },
        { path: "/preview1/case-study", element: <Preview1CaseStudy /> },
        { path: "/preview2/case-study", element: <Preview2CaseStudy /> },
        { path: "/preview3/case-study", element: <Preview3CaseStudy /> },
        { path: "/preview4/case-study", element: <Preview4CaseStudy /> },
        { path: "/preview5/case-study", element: <Preview5CaseStudy /> },
        { path: "/preview6/case-study", element: <Preview6CaseStudy /> },
        { path: "/preview7/case-study", element: <Preview7CaseStudy /> },
        { path: "/preview8/case-study", element: <Preview8CaseStudy /> },
        { path: "/preview9/case-study", element: <Preview9CaseStudy /> },
        { path: "/preview10/case-study", element: <Preview10CaseStudy /> },
        { path: "*", element: <NotFound /> },
      ]
    }
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <ErrorBoundary>
      <SmoothScroll />
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatePresence mode="wait">
          {cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
