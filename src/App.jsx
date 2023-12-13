import { useState } from "react";
import Card from "./components/Card";
import FormAdd from "./components/FormAdd";
import MyVerticallyCenteredModal from "./components/Modal";
import corolla from "./assets/corolla.png";

import Button from 'react-bootstrap/Button';


function App() {
  const [modalShow, setModalShow] = useState(false);
  var lineStyle = { // style for separation line
    borderBottom: "1px solid black",
    marginBottom: "10px",
  };

  // a default list of cars for first try
  const [carsList, setCarsList] = useState([
    {
      id:1,
      mark: "Hyundai",
      model: "Elantra",
      year: 2016,
      desc: "Bon vehicule",
      photo: corolla,
    },
    {
      id:2,
      mark: "Toyota",
      model: "Yaris",
      year: 2016,
      desc: "A posseder à tout prix",
      photo: corolla,
    },
    {
      id:3,
      mark: "Toyota",
      model: "Yaris",
      year: 2016,
      desc: "Bon vehicule",
      photo: corolla,
    },

  ]);
  // simple function to add a car
  function addCar(newCar){
    // NB : the new does'nt have neither id nor photo
    // need to set them before adding to the list
   var car = {...newCar, id:carsList.length+1, "photo":corolla}
    setCarsList([car, ...carsList]);
  }

  // function to delete a car from the list using the id
  function deleteCar(id){
    console.log("deleted ", id);
      const newCarsList = carsList.filter((car)=> car.id !== id);
      setCarsList(newCarsList);
  }

  // func to save edits
  function saveEdit(carNew){
    const newCarsList = carsList.map((car)=>{
      if(car.id === carNew.id){
        return {...carNew, image:car.image}
      }
      return car;
    });
    setCarsList(newCarsList);
  }

  return (
    <>
      <div>
        <h2
          className="row justify-content-center"
          style={{ marginTop: "15px" }}
        >
          My Favorite Cars List
        </h2>
        <div style={lineStyle}></div>
      </div>

      <FormAdd add={addCar} buttonType={true} />

      <div style={lineStyle}></div>

      <div className="row justify-content-center">
        {
        carsList.length === 0 ? <h4>No cars</h4> :
        carsList.map((item)=>{
            return (
            <Card id={item.id} key={item.id} mark={item.mark} model={item.model} desc={item.desc} del={deleteCar} 
                modal={setModalShow}
                year={item.year}
                saveEdit={saveEdit}/>
            )
        })
      }

      </div>



      <div style={lineStyle}></div>
    </>
  );
}

export default App;
