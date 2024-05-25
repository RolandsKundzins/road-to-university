import { Box, Typography } from "@mui/material";
import knowledgeIllustration from "../assets/knowledge_illustration.svg";
import CustomTwoColGrid, {Image, Text} from "../components/GridContainer";

const KoTurMacaSection = () => {
  return (
    <CustomTwoColGrid
      firstCol={
        <Image 
          src={knowledgeIllustration} 
          alt="Ilustrācija ar dažādajiem novirzieniem ko var apgūt universitātē: matemātika, astronomiju, literatūru"
        />
      }
      secondCol={
        <Text>
          <Typography variant="h2">
            Ko tur māca?
          </Typography>

          <Typography variant="h3" mt={2}>
            <Box component="span" sx={{ color: "secondary.dark" }}>
              Visu. {' '}
            </Box>
            Studiju kursi sākas no pašiem pamatiem. Sākumā iemācīsies algoritmus un datu struktūras.
          </Typography>

          <Typography variant="h3" mt={2}>
            Vēlākos kursos, varēsi  {' '}
            <Box component="span" sx={{ color: "secondary.dark" }}>
              taisīt arī pats savus projektus.{' '}
            </Box>
            Vēl jo vairāk, LU DF studiju programma iekļauj apmēram semestri garu praksi, kuru varēsi iziet tevis izvēlētā uzņēmumā.
          </Typography>
        </Text>
      }

      desktopWidthFirstCol={5}
      colorScheme='secondary'
    />
  );
};

export default KoTurMacaSection;
