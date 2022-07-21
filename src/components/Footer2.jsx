import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    }
  },
  copy: {
    textAlign: 'center'
  }
}));

export default function Footer2() {
  const classes = useStyles();

  const content = {
    'brand': { image: 'https://i.postimg.cc/QN6LVjDb/ava-2.png', width: 120 },
    'copy': '© 2020 Pied Piper. All rights reserved.',
    'link1': 'Features',
    'link2': 'Enterprise',
    'link3': 'Support',
    'link4': 'ICO'
  };

  let brand;

  if (content.brand.image) {
    brand = <img src={ content.brand.image } alt="" width={ content.brand.width } />;
  } else {
    brand = content.brand.text || '';
  }

  return (
    <footer>
      <Container maxWidth="lg">
        <Box py={6}  display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
          <Link href="#" variant="h5" color="inherit" underline="none">
            {brand}
          </Link>
          <Box component="nav" className={classes.footerNav}>
            <Link href="#" variant="body1" color="textSecondary" className={classes.footerLink}>{content['link1']}</Link>
            <Link href="#" variant="body1" color="textSecondary" className={classes.footerLink}>{content['link2']}</Link>
            <Link href="#" variant="body1" color="textSecondary" className={classes.footerLink}>{content['link3']}</Link>
            <Link href="#" variant="body1" color="textSecondary" className={classes.footerLink}>{content['link4']}</Link>
          </Box>
          <Typography color="textSecondary" component="p" variant="body2" gutterBottom={false} className={classes.copy}>{content['copy']}</Typography>
        </Box>
      </Container>
    </footer>
  );
}