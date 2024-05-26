import { Box, Typography } from "@mui/material";
import computerIllustration1 from "../assets/computer_light_bulb.svg";
import CustomTwoColGrid, {Image, Text} from "../components/GridContainer";
import React from "react";

const KapecSaktProgSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <CustomTwoColGrid 
        firstCol={
          <Image 
            src={computerIllustration1} 
            alt="Programmēšana var būt interesanta nodarbošanās" 
          />
        } 
        secondCol={
          <Text>
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
          </Text>
        }
        desktopWidthFirstCol={5}
        colorScheme='secondary'
      />
    </div>
  );
});

export default KapecSaktProgSection;
