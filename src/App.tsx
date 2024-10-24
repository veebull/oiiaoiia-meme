import { ThemeProvider } from '@/components/theme-provider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TokenomicsPage from './pages/TokenomicsPage';
import Roadmap from './pages/Roadmap';
import FAQ from './pages/FAQ';
import FloatingGif from './components/FloatingGif';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Router>
        <div className='min-h-screen flex flex-col bg-gradient-to-b from-yellow-300 to-pink-500 text-black'>
          <FloatingGif />
          <Header className='z-10' />
          <main className='flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/tokenomics' element={<TokenomicsPage />} />
              <Route path='/roadmap' element={<Roadmap />} />
              <Route path='/faq' element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
