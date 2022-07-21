import { Box } from "@mui/system";
import { Container } from "@mui/system";

export default function Footer() {
  return (
    <>
      <Box
        px={{ xs: 3, sm: 4 }}
        py={{ xs: 5, sm: 8 }}
        style={{backgroundColor:'#E26D5A'}}
        color="white"
      >
        <Container maxWidth="lg">
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Copyright &copy; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </>
  );
}