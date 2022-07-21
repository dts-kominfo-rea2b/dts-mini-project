import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

function Copyright(props) {
  return (
    <Typography variant="body2" color="#FFFFFF" align="start" {...props}>
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
      <Typography color="inherit" variant="body2">
        Movies, All Right Reserved
      </Typography>{" "}
    </Typography>
  );
}

const FooterComp = () => {
  const footers = [
    {
      title: "Company",
      description: [
        "Audio and Subtitles",
        "Media Center",
        "Security",
        "Contact us",
        "Service Code",
      ],
    },
    {
      title: "Features",
      description: [
        "Audio Description",
        "Investor Relations",
        "Legal Provisions",
      ],
    },
    {
      title: "Resources",
      description: ["Help center", "Jobs", "Cookie Preferences"],
    },
    {
      title: "Legal",
      description: ["Gift Cards", "Terms of Use", "Corporate Information"],
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#141414", mt: 5, padding: 10 }}>
      <Grid container spacing={4}>
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            {footer.description.map((item) => (
              <Typography key={item} variant="subtitle1" color="#FFFFFF">
                {item}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="success" sx={{ marginY: 4 }} >
        Service Code
      </Button>
      <Copyright/>
    </Box>
  );
};

export default FooterComp;
