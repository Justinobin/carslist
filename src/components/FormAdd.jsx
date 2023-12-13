import React from "react";

// the form to add a new car
// problem of serving images...
const FormAdd = (params) => {
  var rowStyle = {marginBottom:"3px"}
  function submitform(e){
    e.preventDefault();
    // create a new car item
    const newCar = 
    {
      mark: e.target[0].value,
      model: e.target[1].value,
      year: e.target[2].value,
      desc: e.target[3].value,
    };
    // clear the form
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
    e.target[3].value = '';
    
    params.buttonType ? params.add(newCar):newCar.id=params.id;params.saveEdit(newCar);params.hiddeModal();
  }

  return (
    <form onSubmit={submitform}>
      <div className="row" >
        <div className="col-6" style={rowStyle}>
          <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="marque de voiture (ex. Toyota, Hyundai, ...)"
          aria-label="default input example"
          defaultValue={params.buttonType===false? params.mark : ""}
          required
        ></input>
        </div>
        </div>
        <div className="col-6" style={rowStyle}>
        <input
          className="form-control"
          type="text"
          placeholder="Modèle de voiture (ex. Yaris, sonata, ...)"
          aria-label="default input example"
          defaultValue={params.buttonType===false? params.model : ""}
          required
        ></input>
        </div>
        <div className="col-6" style={rowStyle}>
        <input
          className="form-control"
          type="number"
          placeholder="Année de sortie de la voiture (ex. 2016)"
          aria-label=""
          defaultValue={params.buttonType===false? params.year : ""}
          required
        ></input>
        </div>
        <div className="col-6" style={rowStyle}>
        <input
          className="form-control"
          type="text"
          placeholder="Petite description"
          aria-label="default input example"
          defaultValue={params.buttonType===false? params.desc : ""}
        ></input>
      </div>
      <div className="col-6" style={rowStyle}>
        <div className="mb-3 input-group">
        <label className="input-group-text" htmlFor="formFile">Image</label>
          <input placeholder="image" className="form-control custom-file-input" type="file" accept="image/png, image/jpeg" id="formFile" />
        </div>
        </div>
        <div className="col-6">
          <div className="input-group">
          <button type="submit" className="btn btn-primary btn-block w-100">{params.buttonType ? "Add" : "Sauvegarder"}</button>
          </div>
        </div>

        <div className="col-6" style={rowStyle}>

        </div>
      </div>
    </form>
  );
};

export default FormAdd;
