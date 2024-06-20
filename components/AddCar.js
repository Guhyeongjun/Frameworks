import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack, TextField} from "@mui/material"
import { useState } from "react"
import { SERVER_URL } from "./constants";
import Transition from "./DownSlide";

function AddCar({ fetchCars = (f) => f }) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    color: "",
    year: "",
    price: "",
  });

  //대화상자 폼을 열고 닫는 두 함수를 추가해야 한다
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCar({
      brand: "",
      model: "",
      color: "",
      year: "",
      price: "",
    });
  };

  const handChange=(event)=>{
    // console.log(event.target.value)
    setCar({...car,[event.target.name]:event.target.name})
  }

  //새로운 자동차 추가
  const addCar=(car)=>{
    fetch(SERVER_URL+"api/cars",
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(car)
      }
    )
    .then(response=>{
      if(response.ok){
          fetchCars();
      }
    })
  }

  return(
    <div>
        <button 
          variant="contained"
          onClick={handleClickOpen}>New Car</button>
        <Dialog 
          open={open} 
          onClose={handleClose}
          TransitionComponent={Transition}
        >
            <DialogTitle>New car</DialogTitle>
            <DialogContent>
              <Stack spacing={1} mt={1}>
                <TextField 
                  label="Brand"
                  name="brand"
                  variant="standard"
                  value={car.brand}
                  onChange={handChange}
                />
                <TextField 
                  label="Model"
                  name="model"
                  variant="standard"
                  value={car.model}
                  onChange={handChange}
                />
                <TextField 
                  label="Color"
                  name="color"
                  variant="standard"
                  value={car.color}
                  onChange={handChange}
                />
                <TextField 
                  label="Year"
                  name="year"
                  variant="standard"
                  value={car.year}
                  onChange={handChange}
                />
                <TextField 
                  label="Price"
                  name="price"
                  variant="standard"
                  value={car.price}
                  onChange={handChange}
                />
              </Stack>
              {/* <input placeholder="Brand" name="brand"
                value={car.brand} onChange={handChange} />
              <br/>
              <input placeholder="Model" name="model"
                value={car.model} onChange={handChange} />
              <br/>
              <input placeholder="Color" name="color"
                value={car.color} onChange={handChange} />
              <br/>
              <input placeholder="Year" name="year"
                value={car.year} onChange={handChange} />
              <br/>
              <input placeholder="Price" name="price"
                value={car.price} onChange={handChange} /> */}
            </DialogContent>
            <DialogActions>
              <button onClick={handleClose}>Canel</button>
              <button onClick={handleClose}>Save</button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default AddCar