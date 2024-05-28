import React from 'react';
import { Container, CssBaseline, ThemeProvider} from '@mui/material';
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
import { useRef, useState } from 'react';
import { darkTheme, lightTheme } from './theme';


const App = () => {
  const [isDarkmode, setIsDarkMode] = useState<boolean>(false);

  const contactRef = useRef<HTMLDivElement>(null);
  const kapecSaktProgRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeLightMode = () => {
    console.log("dark_mode:" + isDarkmode)
    setIsDarkMode(!isDarkmode);
  }

  return (
    <ThemeProvider theme={isDarkmode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container  maxWidth={false} disableGutters>

        <HeaderSection changeLightMode={changeLightMode} isDarkMode={isDarkmode} scrollToSection={scrollToSection} contactRef={contactRef} />
        <HeroSection scrollToSection={scrollToSection} SecondSectionRef={kapecSaktProgRef} />

        <KapecSaktProgSection ref={kapecSaktProgRef}/>
        <KurPirmsUniSection />
        <EsJauMakuKodetSection />
        <KurStudetSection />
        <KoTurMacaSection />
        <CikIlgiJastudeSection />
        <KaVeicasSection />
        <ParManiSection />

        <SazinatiesSection ref={contactRef} />
      </Container>
    </ThemeProvider>
  );
}

export default App
