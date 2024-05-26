import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import CustomTwoColGrid from "../components/GridContainer";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from "react";

const SazinatiesSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  const boxBorderRadius = '20px';
  const boxBackgroundColor = 'white';
  const boxPadding = '30px 50px 30px 40px';

  return (
    <div ref={ref}>
      <CustomTwoColGrid
        firstCol={
          <>
            <Box sx={{ borderRadius: boxBorderRadius, backgroundColor: boxBackgroundColor, padding: boxPadding}}>
              <Typography variant="h2">
                Kontakti
              </Typography>
            </Box>

            <Box mt={2} sx={{ borderRadius: boxBorderRadius, backgroundColor: boxBackgroundColor, padding: boxPadding}}>
              <List>
                <ListItem>
                  <ListItemIcon>
                      <FiberManualRecordIcon fontSize="large" sx={{color: "#DFBF43"}}/>
                    </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h3" sx={{fontFamily: 'Lalezar'}}>
                      <Box component="span" sx={{ color: "black" }}>
                        Instagram:{" "}
                      </Box>
                      instaKonts
                    </Typography>
                  </ListItemText>
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                      <FiberManualRecordIcon fontSize="large" sx={{color: "primary.dark"}}/>
                    </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h3" sx={{fontFamily: 'Lalezar'}}>
                      <Box component="span" sx={{ color: "black" }}>
                        Facebook:{" "}
                      </Box>
                      fbKonts
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                      <FiberManualRecordIcon fontSize="large" color="info"/>
                    </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h3" sx={{fontFamily: 'Lalezar'}}>
                      <Box component="span" sx={{ color: "black" }}>
                        Email:{" "}
                      </Box>
                      email@email.com
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </>
        }
        secondCol = {
          <Box sx={{
              borderRadius: boxBorderRadius,
              backgroundColor: boxBackgroundColor,
              padding: boxPadding,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
          }}>
            <Typography variant="h2" color="secondary.dark">
              Droši raksti
            </Typography>

            <Box sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography variant="h3">
                Palīdzēšu jebkurā jautājumā. Šeit vari atrast manus kontaktus.
              </Typography>
            </Box>
          </Box>
        }

        desktopWidthFirstCol={6}
        colorScheme="secondary"
      />
    </div>
  );
});

export default SazinatiesSection;