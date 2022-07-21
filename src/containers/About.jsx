import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const About = () => {
    return (
        <Box sx={{ 
            display:'flex', 
            flexDirection:'column',
            alignSelf:'flex-start',
            margin:'1em' }}>
            <Typography variant="h4" gutterBottom component="div">
                About this site
            </Typography>
            <Typography variant="body1" gutterBottom>
                This site is made as a mini project for DTS React course. There are lots of feature that will be implemented on this
                site as shown below. Apologies if said feature wasn't able to be implemented since I got Covid-19 and the symptomps caused
                by it affects my ability to work on those features. This, however, isn't mean as an excuse.
            </Typography>
            <Typography variant="h4" gutterBottom component="div">
                Planned Features
            </Typography>
            <Typography variant="body1" gutterBottom>
                <ul>
                    <li>Auto search movies/ shows by title</li>
                    <li>Site styling with custom MUI color scheme (current styling is vanilla MUI)</li>
                    <li>Footer with link navigation</li>
                    <li>Movies/ shows trailer</li>
                </ul>
            </Typography>
    </Box>
  )
}

export default About;