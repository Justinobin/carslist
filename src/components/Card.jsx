import corolla from "../assets/corolla.png";
import { useState } from "react";
import MyVerticallyCenteredModal from "./Modal";

// this component will hold the information about a car to be presented
// in form of a bootstrap card
function Card(params) {
  const [modalShow, setModalShow] = useState(false);
  const [toDeleteId, setToDeleteId] = useState(-1); // will hold the id of the car to be deleted
  const [edit, setEdit] = useState(false); // set to true if editing a car, used in the modal

  return (
    <>
      <div className="card" style={{ width: "18rem", margin: "3px" }}>
        <img src={corolla} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {params.mark} {params.model} {params.year}
          </h5>
          <p className="card-text">{params.desc}</p>

          <div className="d-flex justify-content-between">
            <a
              href="#"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                setEdit(true);
                setModalShow(true);
              }}
            >
              Edit
            </a>
            <a
              href="#"
              className="btn btn-danger"
              onClick={(e) => {
                e.preventDefault();
                setEdit(false);
                setToDeleteId(params.id); // update the delete car id
                setModalShow(true); // and show the modal
              }}
            >
              Delete
            </a>
          </div>
        </div>
      </div>

      <div
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <img src="..." className="rounded me-2" alt="..." />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-body-secondary">just now</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">See? Just like this.</div>
      </div>

      <MyVerticallyCenteredModal
        // values to fill the form when editing
        mark={params.mark}
        model={params.model}
        desc={params.desc}
        year={params.year}
        id={params.id}
        saveEdit={params.saveEdit}
        //end values
        edit={edit} //
        toDeleteId={toDeleteId} // pass the id of the car to be deleted to the modal
        del={params.del} // This is the delete func in the App.jsx file
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Card;
