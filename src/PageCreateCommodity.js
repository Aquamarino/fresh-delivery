import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField'
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Commodity from './DataModels/Commodity.json';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip'
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ImageUploader from 'react-images-upload';
import MenuItem from '@material-ui/core/MenuItem';

import Select from '@material-ui/core/Select';


const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,

  },

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
    root: {
        width: '90%',
      },
      button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
      actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
      },
      resetContainer: {
        padding: theme.spacing.unit * 3,
      },
      list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
      },
      formControl: {
        margin: theme.spacing.unit,
      },
      chip: {
        margin: theme.spacing.unit / 2,
      },
  });
  

  
  

  class PageCreateCommodity extends React.Component {
    componentDidMount(){
      this.handleImage= this.handleImage.bind(this)
    }

    state = {
        activeStep: 0,
        selectedHistory : null,
        createdData:{
          id:null,
          name:null,
          shop_id:null,
          price:null,
          unit:null,
          type:null,
          tag: ["1", "2"],
          inventory: null,
          resource: {pic_url:"", detail_pic_url:"", detail:"这将会是你一眼就爱上的香蕉。（省略1000字）"
          },
        },
        inputTag:"",
        pictures:[]
      };
    
    getSteps() {
    return ['从历史上架记录中选择商品', '创建商品属性', '创建商品详情','确认'];
  }

  handleImage(pictureFiles, pictureDataURLs) {
		this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
        });
	}

    handleInput(param, event){
      let plate=this.state.createdData
      if (param === "resource"){
        console.log()
        plate[param][event.target.id] = event.target.value
        this.setState({createdData : plate},()=>console.log(this.state.createdData))
        return
      }
        plate[param] = event.target.value
          this.setState({createdData : plate},()=>console.log(this.state.createdData))
    }
    handleSelection = event => {
      let plate=this.state.createdData
      plate[event.target.name] = event.target.value
      this.setState({createdData : plate}, ()=>console.log(this.state.createdData.type));
    };

    handleDeleteTag = data => () => {
      let plate = this.state.createdData;
      const chipToDelete = plate.tag.indexOf(data);
      plate.tag.splice(chipToDelete, 1);
      this.setState({createdData:plate});
    };
    handleAddTag =  () => {
      let plate = this.state.createdData;
      if(this.state.inputTag==="")return;
      plate.tag = plate.tag.concat(this.state.inputTag);
      this.setState({createdData:plate, inputTag:""}, console.log(this.state.createdData));
    };
    getStepContent(step) {
      const { classes } = this.props;
    switch (step) {
      case 0:
        return <div><List className={classes.list}>
              {Commodity.map(item => (
                <ListItem key={item.id} button onClick={()=>{this.setState({selectedHistory:item},()=>this.setState({createdData:this.state.selectedHistory}));}}>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
      </List>
      <br/>     
      <Fab color="secondary" aria-label="Add" disabled={this.state.selectedHistory===null} className={classes.fab} onClick={this.handleSkip}>
        <AddIcon />
      </Fab></div>;
      case 1:
        return <div className={classes.paper} elevation={1}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">名称</InputLabel>
          <Input id="name" value={this.state.createdData.name} onChange={this.handleInput.bind(this,"name")} />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">价格</InputLabel>
          <Input id="price" value={this.state.createdData.price} onChange={this.handleInput.bind(this,"price")} />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">单位</InputLabel>
          <Input id="price" value={this.state.createdData.unit} onChange={this.handleInput.bind(this,"unit")} />
        </FormControl>
        <br/>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">类型</InputLabel>
          <Select
            value={this.state.createdData.type}
            onChange={this.handleSelection}
            inputProps={{
              name: 'type',
              id: 'age-simple',
            }}
          >
            <MenuItem value={0}>新鲜水果</MenuItem>
            <MenuItem value={1}>水果篮子</MenuItem>
            <MenuItem value={2}>加工食品</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">库存</InputLabel>
          <Input id="price" value={this.state.createdData.inventory} onChange={this.handleInput.bind(this,"inventory")} />
        </FormControl>
        <br/>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">添加标签</InputLabel>
          <Input id="price" value={this.state.inputTag} onChange={(e)=>this.setState({inputTag:e.target.value},()=>console.log(this.state.inputTag))} />
        </FormControl>
        <IconButton className={classes.button} aria-label="Delete" color="secondary" onClick={(e)=>this.handleAddTag(e.target.value)}>
        <AddBoxIcon />
      </IconButton>
        <Paper className={classes.tagpaper}>
        {this.state.createdData.tag.map(data => {
          return (
        <Chip
              key={data}
              label={data}
              onDelete={this.handleDeleteTag(data)}
              className={classes.chip}
            />)})}</Paper>
      </div>;
      case 2:
        return <div className={classes.root} elevation={1}>
        <ImageUploader withIcon={true}
                	buttonText='上传商品图片'
                  onChange={this.handleImage}
                  withPreview
                	imgExtension={['.jpg', '.gif', '.png', '.gif']}
                	maxFileSize={5242880}
        ></ImageUploader>
          
        <TextField
          id="detail"
          label="详细介绍"
          onChange={this.handleInput.bind(this,"resource")}
          placeholder="请输入文字介绍"
          value = {this.state.createdData.resource.detail}
          fullWidth
          multiline
          rows="3"
          rowsMax="7"
          margin="normal"
          variant="outlined"
        />

        </div>;
        case 3:
        return<Card className={classes.paper} elevation={1}>
        <Typography variant="h5" component="h2">
        商品名称：{this.state.createdData.name}
        </Typography>
        <List>
          <ListItem>
            商品ID：{this.state.createdData.id===null?"即将生成新商品ID":this.state.createdData.id}
          {/* price:null,
          unit:null,
          type:null,
          tag: ["1", "2"],
          inventory: null,
          resource: {pic_url:"", detail_pic_url:"", detail:"这将会是你一眼就爱上的香蕉。（省略1000字）"}, */}
          </ListItem>
          <ListItem>商品价格：{this.state.createdData.price+" 元 / "+this.state.createdData.unit+" "}</ListItem>
          <ListItem>商品库存：{this.state.createdData.inventory+" "+this.state.createdData.unit+" "}</ListItem>
          <ListItem>商品描述：{this.state.createdData.resource.detail}</ListItem>
          <ListItem>商品类型：{this.state.createdData.type===0?"新鲜水果":this.state.createdData.type===1?"水果篮子":this.state.createdData.type===2?"加工水果":""}</ListItem>
          <ListItem>商品标签：{this.state.createdData.tag.map(data => {
          return (
        <Chip
              key={data}
              label={data}
              className={classes.chip}
            />)})}</ListItem>

        </List>
        </Card>
      default:
        return <div/>;
    }
  }
      handleNext = () => {
        this.setState(state => ({
          activeStep: state.activeStep + 1,
        }));
      };
    
      handleBack = () => {
        this.setState(state => ({
          activeStep: state.activeStep - 1,
        }));
      };
    
      handleSkip = ()=> {
        this.setState({activeStep: this.getSteps().length - 1})
      }

      handleReset = () => {
        this.setState({
          activeStep: 0,
        });
      };
    render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;
    return (
      <div>
        <br/>
      <Card className={classes.card}>
        <CardContent>
            <Typography variant = "h5">商品上架</Typography>
        <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{this.getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      上一步
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? '完成' :activeStep === 0 ? '跳过这步': '下一步'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
        
        </CardContent>
      </Card>
      </div>
    );
      }
  }
  
  PageCreateCommodity.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PageCreateCommodity);