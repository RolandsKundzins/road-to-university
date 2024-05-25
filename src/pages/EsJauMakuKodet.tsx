import { Box, Typography } from "@mui/material";
import iedomigsIllustration from "../assets/iedomīgs.svg";
import CustomTwoColGrid, {Image, Text} from "../components/GridContainer";

const EsJauMakuKodetSection = () => {
  return (
    <CustomTwoColGrid
      firstCol={
        <Image 
          src={iedomigsIllustration} 
          alt="Iedomīgas personas ilustrācija"
        />
      }
      secondCol={
        <Text>
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
        </Text>
      }

      desktopWidthFirstCol={5}
      colorScheme='secondary'
    />
  );
};

export default EsJauMakuKodetSection;
