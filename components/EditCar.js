//components/EditCar.js

import { Dialog, DialogContent, DialogTitle, DialogActions, Button, IconButton, Stack, TextField} from "@mui/material"
import { useState } from "react"
import { Edit } from "@mui/icons-material"

function EditCar({fetchCars,data}){
    const[open,setOpen]=useState(false)
    const[car,setCar]=useState({
        brand:"",model:"",color:"",
        year:"",price:""
    })
    const handleClickOpen=()=>{
        setCar({
          brand:data.row.brand,
          model:data.row.model,
          color:data.row.color,
          year:data.row.year,
          price:data.row.price,
        })
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
        setCar({
            brand: "",model: "",color: "",
            year: "",price: "",
          });
    }

    const handleChange=(event)=>{
        setCar({...car,[event.target.name]:event.target.value})
    }

    //자동차를 업데이트하고 모달 폼을 닫음
    const handleSave=()=>{
      updateCar(data.id)
      handleClose()
    }

    //자동차 업데이트
    const updateCar=(link)=>{
        fetch(link,
            {
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(car)
            }
        )
        .then(reponse=>{
            if(reponse.ok){
                fetchCars();
            }else{
                alert("Something went wrong!")
            }
        })
        .catch(err=>console.error(err))

    }

    return(
        <div>
            <IconButton  onClick={handleClickOpen}>
              <Edit color="info"></Edit>
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit car</DialogTitle>
                <DialogContent>
                  <Stack>
                    <TextField 
                      label="Brand"
                      name="brand"
                      variant="standard"
                      value={car.brand}
                      onChange={handleChange}
                    />
                    <TextField 
                      label="Model"
                      name="model"
                      variant="standard"
                      value={car.model}
                      onChange={handleChange}
                    />
                    <TextField 
                      label="Color"
                      name="color"
                      variant="standard"
                      value={car.color}
                      onChange={handleChange}
                    />
                    <TextField 
                      label="Year"
                      name="year"
                      variant="standard"
                      value={car.year}
                      onChange={handleChange}
                    />
                    <TextField 
                      label="Price"
                      name="price"
                      variant="standard"
                      value={car.price}
                      onChange={handleChange}
                    />
                  </Stack>
                    {/* <input placeholder="Brand" name="brand"
                            value={car.brand} onChange={handleChange} />
                    <br/>
                    <input placeholder="Model" name="model"
                        value={car.model} onChange={handleChange} />
                    <br/>
                    <input placeholder="Color" name="color"
                        value={car.color} onChange={handleChange} />
                    <br/>
                    <input placeholder="Year" name="year"
                        value={car.year} onChange={handleChange} />
                    <br/>
                    <input placeholder="Price" name="price"
                        value={car.price} onChange={handleChange} /> */}
                </DialogContent>
                <DialogActions>
                  <button onClick={handleClose}>Canel</button>
                  <button onClick={handleClose}>Save</button>
                </DialogActions>
            </Dialog>
        </div>
    )

}

export default EditCar