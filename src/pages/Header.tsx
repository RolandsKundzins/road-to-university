import { AppBar, Button, Toolbar, Typography } from "@mui/material";

interface HeaderSectionProps {
  changeLightMode: () => void;
  isDarkMode: boolean;
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  contactRef: React.RefObject<HTMLDivElement>;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ changeLightMode, isDarkMode, scrollToSection, contactRef }) => {
  const fontSizeButton = {xs: '4vw', md: '2rem'};
  const paddingButton = {xs: '1.5vw', md: '15px 30px'};

  return (
    <AppBar position="fixed" sx={{padding: {xs: '15px 2.5vw', lg: '15px'}, backgroundColor: "primary.light"}}>
      <Toolbar sx={{display: 'flex', flexWrap: 'wrap', padding: 0}}>
        {/* For desktop show full */}
        <Typography 
          variant="h1" 
          display={{ xs: 'none', lg: 'block' }}
          sx={{
            flexGrow: 1,
            wordSpacing: '8px'
          }}
        > 
          Rolands Kundziņš
        </Typography>
        
        {/* For mobile show shortened */}
        <Typography 
          variant="h1"
          fontSize={{xs: '9vw'}}
          display={{ xs: 'block', lg: 'none' }}
          
          sx={{flexGrow: 1}}
        > 
          Kundziņš
        </Typography>

        <Button 
          variant='contained' 
          size='large'
          sx={{
            backgroundColor: 'primary.main',
            color: 'primary.dark',
            borderRadius: '100px', 
            fontSize: fontSizeButton,
            marginLeft: '10px',
            padding: paddingButton,
            
            ":hover": {
              color: 'primary.light'
            }
          }}
          onClick={() => changeLightMode()}
        >
          {isDarkMode ? "Tumšais": "Gaišais"}
        </Button>

        <Button 
          variant='contained' 
          size='large'
          sx={{
            backgroundColor: 'primary.dark',
            color: 'primary.main',
            borderRadius: '100px', 
            fontSize: fontSizeButton,
            marginLeft: {xs: '2vw', md:'20px'},
            padding: paddingButton,

            ":hover":{
              backgroundColor: 'primary.main',
              color: 'primary.dark',
            }
          }}
          onClick={() => scrollToSection(contactRef)}
        >
          Sazināties
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderSection;