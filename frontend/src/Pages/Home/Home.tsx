import { FC, ReactElement } from "react";
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from "@mui/material/styles";
import './Home.scss';
import Grid from '@mui/material/Grid';

interface Props {

};

const ColorContainedButton = styled(Button)(({ theme }) => ({
  
  backgroundColor: '#EC3257',
  '&:hover': {
    backgroundColor: '#DC143C',
  },
}));

const ColorOutlinedButton = styled(Button)(({ theme }) => ({
  color: '#EC3257',
  borderColor: '#EC3257',
  '&:hover': {
    borderColor: '#EC3257'
  }
}))


const Home: FC<Props> = (): ReactElement => {
  return (
    <div className="home">
      <h1 className="title">DS.js</h1>
      <ColorOutlinedButton className="source-code-button" variant="outlined" size="large">
        Source Code
        &nbsp;&nbsp;
        <GitHubIcon />
      </ColorOutlinedButton>
      <p className="description">
        A library that helps developers to draw and create interactions for end-users visualizing data structures. 
      </p>
      <Grid container spacing={2}>
        <Grid xs={4} sx={{textAlign: "center"}}>
          <ColorContainedButton variant="contained" size="large">Get Started <NavigateNextIcon /></ColorContainedButton>
        </Grid>
        <Grid xs={4} sx={{textAlign: "center"}}>
          <ColorOutlinedButton variant="outlined" size="large">Documentation</ColorOutlinedButton>
        </Grid>
        <Grid xs={4} sx={{textAlign: "center"}}>
          <ColorContainedButton variant="contained" size="large">Demo</ColorContainedButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;