import { Box, Typography } from "@mui/material";
import bicycleIllustration from "../assets/bicycle_illustration.svg";
import CustomTwoColGrid, {Image, Text} from "../components/GridContainer";

const KaVeicasSection = () => {
  return (
    <CustomTwoColGrid
      firstCol={
        <Image 
          src={bicycleIllustration} 
          alt="Mans hobijs - velobraukšana. Ilustrācija ar velosipēdu mēness gaismā."
        />
      }
      secondCol={
        <Text>
          <Typography variant="h2">
            Kā šobrīd veicās?
          </Typography>

          <Typography variant="h3" mt={2}>
            <Box component="span" sx={{ color: "secondary.dark" }}>
              Lieliski!{' '}
            </Box>
            Šobrīd studēju trešajā kursā, sestajā semestrī un veiksmīgi esmu ieguvis pirmo augstāko izglītību, kuru iegūst pēc piektā semestra pabeigšanas.
          </Typography>

          <Typography variant="h3" mt={2}>
            Lai arī tās ir pilna laika studijas, paralēli tām apvienoju{' '}
            <Box component="span" sx={{ color: "secondary.dark" }}>
              gan pilnas slodzes darbu, gan savus hobijus,{' '}
            </Box>
            piemēram, kalnu riteņbraukšanu.
          </Typography>
        </Text>
      }

      desktopWidthFirstCol={5}
      colorScheme='secondary'
    />
  );
};

export default KaVeicasSection;
