import { Container, Grid, Box } from '@mui/material';

export type ImageProps = {
  src: string;
  alt: string;
};

export type TextProps = {
  children: React.ReactNode;
};

type TwoChildrenProps = {
  firstCol: React.ReactNode,
  secondCol: React.ReactNode,
  desktopWidthFirstCol: number,
  mobileReverse?: boolean,
  colorScheme?: string;
};

export const Text: React.FC<TextProps> = ({ children }) => {
  return <Box sx={{ width: '100%' }}>{children}</Box>;
};

export const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <Box
      component="img"
      sx={{
        width: '100%',
        maxWidth: '700px',
      }}
      alt={alt}
      src={src}
    />
  );
};


const CustomTwoColGrid: React.FC<TwoChildrenProps> = ({ 
  firstCol, secondCol, desktopWidthFirstCol, mobileReverse = false, colorScheme = "primary"
}) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: `${colorScheme}.main`,
        padding: {
          xs: '15vw 5vw',
          lg: '150px 70px'
        }, //check this
        display: 'flex',
      }}
    >
      <Grid container alignItems="center" sx={{
          maxWidth: "2000px",
          margin: '0 auto',
      }}>
        <Grid item 
          xs={12} 
          pt={{xs: 4}} 
          pr={{lg: 8}} 
          lg={desktopWidthFirstCol} 
          order={{ xs: mobileReverse ? 2 : 1, lg: 1 }} 
          height={{ xs: 'auto', lg: '100%' }} 
          sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
        >
          {firstCol}
        </Grid>

        <Grid item 
          xs={12} 
          pt={{xs: 4}} 
          lg={12 - desktopWidthFirstCol} 
          order={{ xs: mobileReverse ? 1 : 2, lg: 2 }} 
          height={{ xs: 'auto', lg: '100%' }} 
          sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
        >
          {secondCol}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomTwoColGrid;
