import { Box, Container, Grid, Typography } from "@mui/material";
import computerIllustration1 from "../assets/iedomīgs.svg";

const IAlreadyKnowSection = () => {
  return (
    <Container 
      maxWidth={false} 
      sx={{
        backgroundColor: "secondary.main",
        padding: "4rem"
      }}
    >
      <Grid container p={8} spacing={7} alignItems="center">
        <Grid item xs={5}>
          <Box
            component="img"
            sx={{
              width: '100%',
            }}
            alt="Illustration of computer and programming"
            src={computerIllustration1}
          />
        </Grid>

        <Grid item xs={7}>
          <Typography variant="h2">
            Es taču jau māku kodēt!
          </Typography>

          <Typography variant="h3" mt={2}>
            Tādas bija arī manas domas pirms studiju sākšanas.
          </Typography>

          <Typography variant="h3" mt={2}>
            Bet ņem vērā, ka{' '}
            <Box component="span" sx={{ color: "secondary.dark" }}>
              Universitāte dos plašāku ieskatu{' '}
            </Box>
            industrijā un ļaus vieglāk sasniegt lielos mērķus.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IAlreadyKnowSection;
