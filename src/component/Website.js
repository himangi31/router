import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import { Button, Container } from '@material-ui/core';
import {ServerURL} from "../Fetchnodeservices"
import { Box,ButtonBase,Typography } from "@material-ui/core";
import { styled } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
  
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight:"1px",
   marginTop:"250px",
  
   
   
  },
  subbdiv: {
   
   
   bottom: "20px",
   right: "20px",
   padding:"10px 10px"
   
   
  
  },
  
 
 

  
}));

export default function Website(props) {
  const classes = useStyles();
 
const images = [
  {
    url: '/grocery.jpg',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: '/home3.jpg',
    title: 'Burgers',
    width: '30%',
  },
  {
    url: '/home1.jpg',
    title: 'Camera',
    width: '30%',
  },
];


const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));
 

  
  return (
    <div>
        <Header/>
    <div >
   
         
       <div className={classes.root} >
                <img src='/grocery5.jpg' width='100%' height='70%'   style={{ position:'absolute' , zIndex:'1',borderBottomLeftRadius:'20%', opacity:'0.7'}}/>
                </div>
 <div   style={{padding:'10px', top:'150px', position:'absolute' , zIndex:'1', marginLeft:'500px',  fontFamily:'Snell Roundhand', fontStyle:'italic',fontSize:'40px',color:'#fff', background: 'rgba(0, 0, 0, 0.5)'}}>
                 <h2    > MG Home Delivery</h2>
                                
                </div>
     
      </div>
    </div>
    
  );
}
