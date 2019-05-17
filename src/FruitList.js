import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import fakeInventory from './DataModels/Inventory.json';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 750,
    height: 530,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  card1: {
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },

});

function FruitList(props) {
  const { classes } = props;

  const tiles = [];
  for (var tile of fakeInventory) {
      for (var val of tile.value) {
          tiles.push({"commodity_id": val.commodity_id, "pic_url": val.pic_url, "commodity_name": val.commodity_name, "price": val.price});
      }
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">水果</ListSubheader>
        </GridListTile>
        {tiles.map(tile => (
          
          <GridListTile key={tile.commodity_id}>
          <Card className={classes.card}>
            <CardMedia component="img" alt={tile.commodity_name} image={tile.pic_url} className={classes.media}/>

              {/* <img src={tile.pic_url} alt={tile.commodity_name} />   */}

            {/* <GridListTileBar
              title={tile.commodity_name}
              subtitle={<span>price: {tile.price}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            /> */}
            <CardContent>
              test
            </CardContent>
          </Card>
          <GridListTileBar
              title={tile.commodity_name}
              subtitle={<span>price: {tile.price}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          
        ))}
      </GridList>
    </div>
  );
}

FruitList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FruitList);