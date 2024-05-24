import { Box, Container } from "@mui/material";
import tempMain from '../assets/temp_main.png';

function HeroSection() {
  return (
    <Container 
      maxWidth={false} 
      disableGutters
    >
    {/* Hero section */}


        {/* <Box>
          <Typography variant='h3'>Vēlies kļūt par programmētāju?</Typography>
          <Typography variant='h2' color='secondary'>Nāc ar mani!</Typography>
        </Box> */}
        
        {/* TODO: Fix fake design */}
        <Box
          component="img"
          sx={{
            width: '100%',
          }}
          alt="The house from the offer."
          src={tempMain}
        />

        {/* TODO: Add button to next section */}
    </Container>
  )
}

export default HeroSection;