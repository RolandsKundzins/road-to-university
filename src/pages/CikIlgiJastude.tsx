import { Box, Typography } from "@mui/material";
import timeIllustration from "../assets/time_running_illustration.svg"
import CustomTwoColGrid, {Image, Text} from "../components/GridContainer";

const CikIlgiJastudeSection = () => {
  return (
    <CustomTwoColGrid
      firstCol={
        <Text>
          <Typography variant="h2">
            Cik ilgi jāstudē?
          </Typography>

          <Typography variant="h3" mt={2}>
            Studijas ilgst{' '}
            <Box component="span" sx={{ color: "secondary.dark" }}>
              četrus gadus.{' '}
            </Box>
            Jā, tas nav īss laiciņš, taču ņem vērā, ka drošvien strādāsi daudz ilgāku laiku un šis mazais ieguldījums palīdzēs vēl ilgi pēc studiju beigšanas.
          </Typography>

          <Typography variant="h3" mt={2}>
            Un ja salīdzini ar RTU, tad ņem vērā, ka viņu trīs gadu programma neiekļauj {' '}
            <Box component="span" sx={{ color: "secondary.dark" }}>
              praksi,{' '}
            </Box>
            kura ir viennozīmīgi nepieciešama mācību pieredze.
          </Typography>
        </Text>
      }
      secondCol={
        <Image 
          src={timeIllustration} 
          alt="Ilustrācija par skrienošu laiku"
        />
      }

      desktopWidthFirstCol={7}
      mobileReverse
    />
  );
};

export default CikIlgiJastudeSection;
