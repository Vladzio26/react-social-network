import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { borderRadius } from '@material-ui/system';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles=makeStyles(them =>({
    root: {
        backgroundColor: "green",
        margin:"50px",
        padding: them.spacing(3, 2),
    },
    flex:{
        display: "flex",
        alignItems: "center"
    },
    topicsWindow:{
        width:"30%",
        height:"300px",
        borderRight:"1px solid grey"
    },
    chatWindow:{
        width:"70%",
        height:"300px",
        padding:"20px"
    },
    chatBox:{
        width:"85%"
    },
    button:{
        marginTop:"5px",
        width:"15%",
        height:"55px"
    },
 }));

 

const Dashboard = (props) =>{
    const classes = useStyles();


        //ctx store
      //  const[allChat] = React.useContext(CTX);
       // console.log({allChat})
    const [textValue, changeTextValue] = React.useState('');

    let user = props.login;

    return(
        <div>
            <Paper className = {classes.root}>
                <Typography variant="h5" component="h3">
                    Chat App
                </Typography>
                <Typography component="p">
                    Topic placess{props.login}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                ["topic"].map(topic=>(
                                    <ListItem key={topic} button>
                                   <ListItemText primary={topic} />
                                    </ListItem>
                                ))

                            }
                        <ListItem button>
                        <ListItemText />
                        </ListItem>
                        </List>
                    </div>

                    <div className={classes.chatWindow}>
              
                            { 
                                [
                                    {from: user, msg:'hello'}
                            ].map((chat, i)=>(
                                    <div className={classes.flex} key={i}>
                                              <Chip label={chat.from} className={classes.chip} />
                                            <Typography variant='p'>{chat.msg}</Typography>
                                    </div>
                                ))

                            }
                        
                        
                    </div>
                </div>

                <div className={classes.flex}>
                <TextField
             
                label="Message"
                className={classes.chatBox}
                value={textValue}
                onChange={e =>changeTextValue(e.target.value)}
                margin="normal"
                variant="outlined"

            />

                <Button variant="contained" color="primary" className={classes.button}>
                            Send
                </Button>
                </div>

            </Paper>
        </div>
    )
}

export default Dashboard;