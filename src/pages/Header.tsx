import { AppBar, Button, Toolbar, Typography } from "@mui/material";

interface HeaderSectionProps {
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  contactRef: React.RefObject<HTMLDivElement>;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ scrollToSection, contactRef }) => {
  return (
    <AppBar position="fixed" sx={{padding: "15px", backgroundColor: "primary.light"}}>
      <Toolbar>
        <Typography variant="h2" sx={{flexGrow: 1}}>Rolands Kundziņš</Typography>
        <Button variant='contained' size='large' sx={{
          backgroundColor: 'primary.dark',
          color: 'primary.main',
          borderRadius: '100px', 
          fontSize: '2rem',
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