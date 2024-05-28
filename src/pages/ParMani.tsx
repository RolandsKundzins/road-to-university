import { Typography } from "@mui/material";
import portraitImg from "../assets/my_portrait.svg"
import CustomTwoColGrid, {Image, Text} from "../components/GridContainer";

const ParManiSection = () => {
  return (
    <CustomTwoColGrid
      firstCol={
        <Image 
          src={portraitImg} 
          alt="Es, Rolands Kundziņš, skaisti saģērbies uzvalkā, ar skaistu dzeltenīgu fonu"
        />
      }
      secondCol={
        <Text>
          <Typography variant="h2">
            Rolands Kundziņš
          </Typography>

          <Typography variant="h2" mt={3} color="secondary.dark">
            Sāc šodien!
          </Typography>

          <Typography variant="h3">
            Ja vēl neesi sācis studijas, tad iesaku sākt iepazīties ar programmēšanu un varbūt arī doties uz kādu ēnu dienu.
          </Typography>

          <Typography variant="h3" mt={2}>
            Paldies, ka lasīji un uz drīzu tikšanos Latvijas Universitātes koridoros!
          </Typography>
        </Text>
      }

      desktopWidthFirstCol={5}
    />
  );
};

export default ParManiSection;
