import { Box, Container, Grid, Typography } from "@mui/material";
import programmerIllustration from "../assets/sitting_at_computer.svg";

const WhereBeforeUni = () => {
  return (
    <Container 
      maxWidth={false} 
      sx={{
        backgroundColor: "primary.main",
        padding: "4rem"
      }}
    >
      <Grid container p={8} spacing={7} alignItems="center">
        <Grid item xs={7}>
          <Typography variant="h2">
            Kur pirms universitātes?
            </Typography>

          <Typography variant="h3" mt={2}>
            Vidusskolā sāku doties uz programmēšanas pulciņu.
            Tur ieguvu {' '}
            <Box component="span" sx={{ color: "secondary.dark" }}>
              pirmo pieredzi ar kodu.
            </Box>
          </Typography>

          <Typography variant="h3" mt={2}>
            Arī tev ieteiktu{' '}
            <Box component="span" sx={{ color: "secondary.dark" }}>
              atrast kādu pulciņu,{' '}
            </Box>
            taču priekšzināšanas nav obligātas, ja vēlies iestāties universitātē.
          </Typography>
        </Grid>
        
        <Grid item xs={5}>
          <Box
            component="img"
            sx={{
              width: '100%',
            }}
            alt="Illustration of boy programming"
            src={programmerIllustration}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhereBeforeUni;
