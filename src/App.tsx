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

      <KapecSaktProgSection />
      <KurPirmsUniSection />
      <EsJauMakuKodetSection />
      <KurStudetSection />
      <KoTurMacaSection />
      <CikIlgiJastudeSection />
      <KaVeicasSection />
      <ParManiSection />
    </Container>
  );
}

export default App
