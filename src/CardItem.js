import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';



const styles = theme => ({
  card: {
    display: 'flex',
    marginTop: "2rem",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },

  root: {
    width: '100%',
    
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

function CardItem(props) {
  const { classes, theme } = props;

  return (
    <div>
    <Card className={classes.card}>
    <CardMedia
        className={classes.cover}
        image="https://images.unsplash.com/photo-1512578659172-63a4634c05ec"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            青苹果
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            详细描述
          </Typography>
        </CardContent>
        
      </div>
        <br/>
    </Card>
    <br/>
    <Card className={classes.card}>
        <CardMedia
        className={classes.cover}
        image="https://images.unsplash.com/photo-1512578659172-63a4634c05ec"
        title="Live from space album cover"
      /><div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          青苹果
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          详细描述
        </Typography>
      </CardContent>
      
    </div> </Card>
    <List className={classes.root} subheader={<li />}>
      {[0, 1, 2, 3, 4].map(sectionId => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
            {[0, 1, 2].map(item => (
              <ListItem key={`item-${sectionId}-${item}`} component={Card}>
              <img
        className={classes.cover}
        src="https://images.unsplash.com/photo-1512578659172-63a4634c05ec"
        title="Live from space album cover"
      />
                <Typography component="h5" variant="h5">
            青苹果
          </Typography>
          <br/>
          <Typography variant="subtitle1" color="textSecondary">
            详细描述
          </Typography>
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
    </div>
  );
}

CardItem.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CardItem);