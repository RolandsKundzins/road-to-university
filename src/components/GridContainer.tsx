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


const CustomTwoColGrid: React.FC<TwoChildrenProps> = ({ firstCol, secondCol, desktopWidthFirstCol, mobileReverse = false, colorScheme = "primary" }) => {
  return (
    <Container 
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: `${colorScheme}.main`,
        padding: "150px 70px",
        display: 'flex'
      }}
    >
      <Grid container spacing={8} alignItems="center">
        <Grid item xs={12} lg={desktopWidthFirstCol} order={{ xs: mobileReverse ? 2 : 1, md: 1 }}>
          {firstCol}
        </Grid>

        <Grid item xs={12} lg={12 - desktopWidthFirstCol} order={{ xs: mobileReverse ? 1 : 2, md: 2 }} sx={{flex: 1, height: '100%'}}>
          {secondCol}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomTwoColGrid;
