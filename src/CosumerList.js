import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PageCommidityDetailM from './PageCommidityDetailM';
import Avatar from '@material-ui/core/Avatar';;





const styles = theme => ({
  card: {
    display: 'flex',
    maxHeight: 90,
    minHeight: 90,
  },

  details: {
    display: 'flex',
    // flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  listItem:{
    display: 'flex',
  },
  cover: {
    width: 130,
    marginTop:1,
    marginBottom:1,
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
    marginTop:'2rem',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: "1080px",
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  optionDiv:{
    display:"flex",
    marginLeft:'auto',
    marginRight:"1rem",

    marginBottom:"1rem",
    marginTop:"auto",
  },
  avatar: {
    backgroundColor: red[500],
  },
});

function CardItem(props) {
  const { classes, theme } = props;
  const { data }= props;
  const {listData} = props;
  return (
    <div>
    
    <List className={classes.root} subheader={<li />}>
      {data.map(cusmuer => (

          <ul className={classes.ul}>

              <Card className={classes.card} key={cusmuer.id}>
              <CardHeader 
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  {cusmuer.cusmuer_name["0"]}
                </Avatar>
              }/>

            <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography>
                {cusmuer.cusmuer_name}
              </Typography>
              <Typography color="textSecondary" style={{fontSize:'smaller', overflow:'hidden', textOverflow:'ellipsis', width:'40rem'}}>
              购买次数: {cusmuer.buy_times}
              </Typography>


            </CardContent>
            
          </div>
          <div className={classes.optionDiv}><PageCommidityDetailM buttonName={'详情'} cusmuerId={cusmuer.id}/></div> </Card>

          </ul>

      ))}
    </List>
    </div>
  );
}

CardItem.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(CardItem);