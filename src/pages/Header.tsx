import { AppBar, Button, Toolbar, Typography } from "@mui/material";

interface HeaderSectionProps {
  changeLightMode: () => void;
  isDarkMode: boolean;
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  contactRef: React.RefObject<HTMLDivElement>;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ changeLightMode, isDarkMode, scrollToSection, contactRef }) => {
  return (
    <AppBar position="fixed" sx={{padding: "15px", backgroundColor: "primary.light"}}>
      <Toolbar sx={{display: 'flex', flexWrap: 'wrap'}}>
        <Typography variant="h2" sx={{flexGrow: 1}}>
          Rolands Kundziņš
        </Typography>

        <Button 
          variant='contained' 
          size='large' 
          sx={{
            backgroundColor: 'primary.main',
            color: 'primary.dark',
            borderRadius: '100px', 
            fontSize: '2rem',
            minWidth: '230px',
            marginLeft: '10px',

            ":hover": {
              color: 'primary.light'
            }
          }}
          onClick={() => changeLightMode()}
        >
          {isDarkMode ? "Dark mode": "Light mode"}
        </Button>

        <Button 
          variant='contained' 
          size='large' 
          sx={{
            backgroundColor: 'primary.dark',
            color: 'primary.main',
            borderRadius: '100px', 
            fontSize: '2rem',
            marginLeft: '20px',
            minWidth: '200px',

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