import { Box, Typography } from "@mui/material";
import networkingIllustration from "../assets/networking_illustration.svg"
import CustomTwoColGrid, {Image, Text} from "../components/GridContainer";

const KurStudetSection = () => {
  return (
    <CustomTwoColGrid
      firstCol={
        <Text>
          <Typography variant="h2">
            Nu labi, bet kur studēt?
          </Typography>

          <Typography variant="h3" mt={2}>
            Piesakoties daudz uzklausīju dažādu cilvēku viedokļus un kā labāko Latvijas universitāti atradu{' '}
            <Box component="span" sx={{ color: "secondary.dark" }}>
              LU DF.{' '}
            </Box>
          </Typography>

          <Typography variant="h3" mt={2}>
            Ja vien nevēlies doties uz ārzemēm, tad ieteiktu šo. Ņem vērā, ka universitāte vien neiedos tev zināšanas un{' '}
            <Box component="span" sx={{ color: "secondary.dark" }}>
              pašam daudz jāattīstās.{' '}
            </Box>
          </Typography>
        </Text>
      }
      secondCol={
        <Image 
          src={networkingIllustration} 
          alt="Ilustrāciju ar cilvēkiem, kur socializējas"
        />
      }

      desktopWidthFirstCol={7}
      mobileReverse
    />
  );
};

export default KurStudetSection;
