import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia'
import PageLogin from './PageLogin';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://gw.alicdn.com/mt/TB1NNebGv5TBuNjSspcXXbnGFXa-1920-624.png_q70',
  },
  {
    label: 'Bird',
    imgPath:
      'https://gw.alicdn.com/mt/TB1jjS9GpOWBuNjy0FiXXXFxVXa-1920-624.png_q70',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://gw.alicdn.com/mt/TB1ejS1Gr5YBuNjSspoXXbeNFXa-1920-624.png_q70',
  },

];

const styles = theme => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {

    display: 'block',
    maxWidth: "100%",
    overflow: 'hidden',
    width: '100%',
  },
  imgwrapper: {
      overflow: 'hidden',
      height: '30rem',
  },
  title:
    {
    position:'absolute',
    left:100,
    top:150,
    color:'white',
    fontSize:'xx-large'
    },
    card:{
        padding:'1rem',
        alignItems:'center'
    }
});

class PageWelcome extends React.Component {
  state = {
    activeStep: 0,
  };
  

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
    const pics = ['https://gw.alicdn.com/tfs/TB13G63SXXXXXaNXVXXXXXXXXXX-300-300.png', 'https://gw.alicdn.com/tfs/TB1QqnTSXXXXXXoapXXXXXXXXXX-300-300.png', 'https://gw.alicdn.com/tfs/TB1VMnKSXXXXXXpaFXXXXXXXXXX-300-300.png', 'https://gw.alicdn.com/mt/TB1Jn_wo2DH8KJjy1XcXXcpdXXa-300-300.png',]
    return (
        <div>
            
        
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (<div className={classes.imgwrapper}>
                <img className={classes.img} src={step.imgPath} alt={step.label} /></div>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
            variant = 'progress'
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={<div/>
            // <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
            //   Next
            //   {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            // </Button>
          }
          backButton={<div/>
            // <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
            //   {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            //   Back
            // </Button>
          }
        />
        <div className={classes.title}>欢迎使用鲜果篮子。<br/>       <br/>
      <PageLogin buttonName='我是商家'></PageLogin>
      <PageLogin buttonName='我是顾客'></PageLogin></div>
      </div>
      <Grid container>
      {pics.map((resource)=>(<Grid item xs={3} key={resource} className={classes.card}><Card className={classes.card}><img src={resource} style={{maxWidth:'10rem'}}></img><p>快速</p>
        </Card>
      </Grid>))}
      

      
      </Grid>
      </div>
    );
  }
}

PageWelcome.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PageWelcome);