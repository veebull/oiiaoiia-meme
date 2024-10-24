import { ThemeProvider } from '@/components/theme-provider';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='min-h-screen bg-background text-foreground'>
        <Header />
        <main className='container mx-auto px-4 py-8'>
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
