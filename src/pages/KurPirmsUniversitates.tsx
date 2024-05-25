import { Box, Typography } from "@mui/material";
import programmerIllustration from "../assets/sitting_at_computer.svg";
import CustomTwoColGrid, {Image, Text} from "../components/GridContainer";

const KurPirmsUniSection = () => {
  return (
    <CustomTwoColGrid
      firstCol={
        <Text>
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
        </Text>
      }
      secondCol={
        <Image 
          src={programmerIllustration} 
          alt="Jaunietis sēž pie datora un programmē"
        />
      }

      desktopWidthFirstCol={7}
      mobileReverse
    />
  );
};

export default KurPirmsUniSection;
