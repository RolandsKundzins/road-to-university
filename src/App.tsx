import { Container} from '@mui/material';
import HeaderSection from './pages/Header';
import HeroSection from './pages/HeroSection';
import WhyStartSection from './pages/WhyStart';
import WhereBeforeUni from './pages/WhereBeforeUni';
import IAlreadyKnowSection from './pages/IAlreadyKnowSection';

function App() {
  return (
    <Container 
      maxWidth={false}
      disableGutters
      sx={{
        height: '100vh',
        width: '100vw',
      }}>
      
        <HeaderSection />
        <HeroSection />
        <WhyStartSection />
        <WhereBeforeUni />
        <IAlreadyKnowSection />

    </Container>
  );
}

export default App
