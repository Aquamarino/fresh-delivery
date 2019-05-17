import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SalesChart from './CommodityChart2';
import FruitList from './FruitList';
import SalesData from "./DataModels/sales.json";
import fakeCommodity from './DataModels/Commodity.json';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
  
  class PageAnalyseSales extends React.Component {
    state = {
      open: false,
      value:"sales",
      data:null,
      createdData:fakeCommodity[0],
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };

    render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    const saleDetail = <div>
      <Card className={classes.paper} elevation={1}>
      营业额
      </Card>
      <br/>
      水果总销量——过去一周
      <Card className={classes.card}>
        <CardContent>
          <SalesChart salesdata={SalesData}/>
        </CardContent>
      </Card>
    </div>

    const ratingDetail = <div><Card className={classes.paper} elevation={1}>
    总利润——过去一周
    </Card></div>

    const inventoryDetail = <div><Card className={classes.paper} elevation={1}>
    水果需求量
      <Card className={classes.card}>
        <CardContent>
          <FruitList/>
        </CardContent>
      </Card>
    </Card></div>
  
    return (
      <div>
        <br/>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h5" >
              销售分析
            </Typography>
          
          </CardContent>
        </Card>
        <br/>

        <Card className={classes.card}>
          <Tabs
            value={this.state.value}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleChange}
            
          >
            <Tab label="周销量" value="sales"/>
            <Tab label="周利润" value="ratings"/>
            <Tab label="需求" value='inventory'/>
          </Tabs>
          <CardContent>
          {
            this.state.value=="sales"?saleDetail:
            this.state.value=="ratings"?ratingDetail:
            this.state.value=="inventory"?inventoryDetail:<div/>
          }
          </CardContent>
        </Card>
          
          
        <br/>
      </div>
    );
      }
  }
  
  PageAnalyseSales.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PageAnalyseSales);