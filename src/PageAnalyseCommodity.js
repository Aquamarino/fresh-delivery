import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MovieList from "./MovieList"

const styles = {
    card: {
      minWidth: "5rem",
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
  
  function PageAnalyseCommodity(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <div>
        <br/>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h5" >
            商品分析
          </Typography>
          <MovieList/>
        </CardContent>
      </Card>
      </div>
    );
  }
  
  PageAnalyseCommodity.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PageAnalyseCommodity);