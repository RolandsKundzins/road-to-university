import { Box, Container, Grid, Typography } from "@mui/material";
import computerIllustration1 from "../assets/computer_light_bulb.svg";

const WhyStartSection = () => {
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
            Kāpēc sākt programmēt?
          </Typography>

          <Typography variant="h3" mt={2}>
            <Box component="span" sx={{ color: "secondary.dark" }}>
              Tev patīk eksperimentēt{' '}
            </Box>
            un skatīties kā dators dara brīnumus, tad drošvien programmēšana ir tev!
          </Typography>

          <Typography variant="h3" mt={2}>
            Varbūt vēl{' '}
            <Box component="span" sx={{ color: "secondary.dark" }}>
              neesi sācis? <br />
              Nebaidies,{' '}
            </Box>
            nekad nav par vēlu!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyStartSection;
