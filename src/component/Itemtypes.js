import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Select from "@material-ui/core/Select";
import Avatar from "@material-ui/core/Avatar";
import { postDataAndImage } from "../Fetchnodeservices";
import swal from "sweetalert";
import Snackbar from "@material-ui/core/Snackbar";
import reactHTML from "react-render-html";
import CloseIcon from "@material-ui/icons/Close";

import { makeStyles } from "@material-ui/core/styles";
import { isAlphabets, isEmpty } from "../Checks";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    aliagnItems: "center",
    marginTop: 30,
    padding: 10,
  },
  subdiv: {
    width: 300,
    background: "#f5f6fa",
    padding: 20,
  },
  formControl: {
    minWidth: 167,
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  input: {
    display: "none",
  },
}));

export default function Itemtypes(props) {
  const classes = useStyles();
  const [itemImage, setItemImage] = useState({
    bytes: "",
    file: "/noimage.jpg",
  });
  console.log("PROPS:",props)
  const [itemid, setItemid] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [offertype, setOffertype] = useState("");
  const [ratings, setRatings] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  
 

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    var msg = "";
    var err = false;
   
    if (isEmpty(item)) {
      err = true;
      msg += "<b>Food Type Should Not Be Empty.</b><br>";
    } else if (!isAlphabets(item)) {
      err = true;
      msg += "<b>Food Type Must Contains Alphabets Only.</b><br>";
    }

    if (isEmpty(offer)) {
      err = true;
      msg += "<b>Ad Status Should Not Be Empty.</b><br>";
    }

    if (err) {
      setErrorMessage(msg);
      setOpen(true);
    }

    if (!err) {
      var formData = new FormData();
      formData.append("item", item);
      formData.append("price",price); 
      formData.append("offer",offer); 
      formData.append("offertype",offertype); 
      formData.append("ratings",ratings);
      formData.append("item_id",itemid); 
      formData.append("itemimage", itemImage.bytes);

      var config = { headers: { "content-type": "multipart/form-data" } };
      var res = await postDataAndImage(
        "itemtype/addnew",
        formData,
        config
      );
      if (res.result) {
        swal({
          title: "New Food Type Added Successfully",
          icon: "success",
          dangerMode: true,
        });
      } else {
        swal({
          title: "Food Type Not Added",
          icon: "warning",
          dangerMode: true,
        });
      }
    }
  };

  //end of handleSubmit

  return (
    <div className={classes.root}>
      <div className={classes.subdiv}>
        <Grid container spacing={1}>
         
        
         

           {/* start of restaurant Food type */}
           <Grid item xs={12} >
            <TextField
              label="Item Id"
              fullWidth
              variant="outlined"
              onChange={(event) => setItemid(event.target.value)}
            />
          </Grid>
          {/* End of Food type */}
             {/* start of restaurant Food type */}
          <Grid item xs={12} sm={6}> 
            <TextField
              label="Item name"
              fullWidth
              variant="outlined"
              onChange={(event) => setItem(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Price"
              fullWidth
              variant="outlined"
              onChange={(event) => setPrice(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Offer"
              fullWidth
              variant="outlined"
              onChange={(event) => setOffer(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Offer Type"
              fullWidth
              variant="outlined"
              onChange={(event) => setOffertype(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Ratings"
              fullWidth
              variant="outlined"
              onChange={(event) => setRatings(event.target.value)}
            />
          </Grid>
          {/* End of Food type */}
          
         

         {/* start of  Food image*/}
         <Grid item xs={12}  sm={6}>
            <div
              style={{
                display: "flex",
                flexdirection: "center",
                justifyContent: "center",
                aliagnItems: "center",
              }}
            >
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-foodimg"
                type="file"
                onChange={(event) =>
                  setItemImage({
                    bytes: event.target.files[0],
                    file: URL.createObjectURL(event.target.files[0]),
                  })
                }
              />
              <label htmlFor="icon-button-foodimg">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
              <Avatar
                alt="Remy Sharp"
                variant="rounded"
                src={itemImage.file}
                className={classes.large}
              />
            </div>
          </Grid>
          {/* End of Food image */}

          {/* Buttons  */}
          <Grid item xs={12} sm={6}>
            <Button
              onClick={() => handleSubmit()}
              variant="contained"
              fullWidth
              color="primary"
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" fullWidth color="primary">
              Reset
            </Button>
          </Grid>
        </Grid>
        {/* End of main Grid */}
      </div>
      {/* End of subdiv */}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        //onClose={handleClose}
        message={reactHTML(errorMessage)}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
  //  End of Final div
}
//   End of export function


