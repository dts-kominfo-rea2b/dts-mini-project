
import { Box, Paper } from "@mui/material";

function Layout({ children, ml = '20px', mr = '20px' }) {
  return (
    <>
      <Paper square sx={{ minHeight: '100vh' }} >

        <Box sx={{
          marginLeft: ml,
          marginRight: mr,
        }}>

          {children}
        </Box>
      </Paper>
    </>
  );
}

export default Layout;