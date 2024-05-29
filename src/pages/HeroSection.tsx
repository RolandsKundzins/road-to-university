import { Container, Grid, Typography, Box } from "@mui/material";
import busIllustration from "../assets/bus_illustration.svg";
import arrowIllustration from "../assets/arrow_hero_dekstop.svg";
// import busSmoke from "../assets/bus_smoke_numbers.svg";
import { useState } from "react";

interface HeroSection {
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  SecondSectionRef: React.RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<HeroSection>  = ({ scrollToSection, SecondSectionRef }) => {
  const [isMoving, setIsMoving] = useState(false);

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const startBusSmoke = async () => {
    setIsMoving(true);
    await delay(800); // Wait for 800ms
    scrollToSection(SecondSectionRef);
    await delay(1500); // Wait for another 1000ms
    setIsMoving(false);
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: `primary.main`,
        marginTop: '2vw'
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between" sx={{
      }}>
        <Grid item xs={12} lg={6} mt={10} p={{xs: '7%', lg: 5}}>
          <Typography variant="h1" fontSize="70px">
            Vēlies kļūt par programmētāju?
          </Typography>

          <Typography variant="h1" color="primary.dark" fontSize="120px">
            Nāc ar mani!
          </Typography>
        </Grid>

        <Grid item xs={12} lg={6} sx={{display: 'flex', justifyContent: 'flex-end', overflow: 'hidden'}}>
          <Box
            component="img"
            width={{ xs: '80%', lg: '100%' }}
            sx={{
              maxWidth: '800px',
              transition: 'transform 2300ms',
              transform: isMoving ? 'translateX(100%)' : 'none',

              ":hover":{
                cursor: "pointer"
              }
            }}
            alt="Autobusa ilustrācija, kura pārvietojas noklikšķinot"
            src={busIllustration}
            onClick={() => startBusSmoke()}
          />
        </Grid>

        <Grid item xs={12} mb={6} sx={{textAlign: 'center', position: 'relative'}}>
          <Typography 
            variant="h2"
            fontSize={{xs: '9vw', lg: '65px'}}
            sx={{position: 'absolute', transform: 'translateX(-45%)', left: '45%', top: '30%'}}
          >
            Uzklikšķini!
          </Typography>

          <Box
            component="img"
            width={{ xs: '85%', lg: '100%' }}
            sx={{
              maxWidth: '700px',

              ":hover":{
                cursor: "pointer"
              }
            }}
            alt="Bulta, kas norāda uz autobusu" 
            src={arrowIllustration}
            onClick={() => startBusSmoke()}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HeroSection;