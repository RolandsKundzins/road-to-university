import { Container} from '@mui/material';
import HeaderSection from './pages/Header';
import HeroSection from './pages/HeroSection';
import KapecSaktProgSection from './pages/KapecSaktProgrammet';
import KurPirmsUniSection from './pages/KurPirmsUniversitates';
import EsJauMakuKodetSection from './pages/EsJauMakuKodet';
import KurStudetSection from './pages/KurStudet';
import KoTurMacaSection from './pages/KoTurMaca';
import CikIlgiJastudeSection from './pages/CikIlgiJastude';
import KaVeicasSection from './pages/KaVeicas';
import ParManiSection from './pages/ParMani';
import SazinatiesSection from './pages/Sazinaties';
import { useRef } from 'react';

function App() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container 
      maxWidth={false}
      disableGutters
      sx={{
        height: '100vh',
        width: '100vw',
      }}>

      {/* TODO: DARK MODE */}

      
      <HeaderSection scrollToSection={scrollToSection} contactRef={contactRef} />
      <HeroSection />

      <KapecSaktProgSection />
      <KurPirmsUniSection />
      <EsJauMakuKodetSection />
      <KurStudetSection />
      <KoTurMacaSection />
      <CikIlgiJastudeSection />
      <KaVeicasSection />
      <ParManiSection />

      <SazinatiesSection ref={contactRef} />
    </Container>
  );
}

export default App
