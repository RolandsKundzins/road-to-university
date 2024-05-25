import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const HeaderSection = () => {
  return (
    <AppBar position="static" sx={{padding: "15px", backgroundColor: "primary.light"}}>
      <Toolbar>
        <Typography variant="h2" sx={{flexGrow: 1}}>Rolands Kundziņš</Typography>
        <Button variant='contained' size='large' sx={{
          backgroundColor: 'primary.dark',
          color: 'primary.main',
          borderRadius: '100px', 
          fontSize: '2rem',
        }}>
          Sazināties
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderSection;