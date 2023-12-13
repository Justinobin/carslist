import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormAdd from "./FormAdd";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Attention !
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.edit === false ? (
          <p>Voulez-vous vraiment supprimer cette voiture ?</p>
        ) : null}
        {props.edit === true ? <FormAdd 
            mark={props.mark}
            model={props.model}
            desc={props.desc}
            year={props.year}
            id={props.id}
            saveEdit={props.saveEdit}
            hiddeModal={props.onHide}
        buttonType={false} /> : null}
      </Modal.Body>

      {props.edit === false ? (
        <Modal.Footer>
          <div>
            <Button onClick={props.onHide}>Annuler</Button>
            <Button
              onClick={() => props.del(props.toDeleteId)} // delete the car here
              className="btn-danger"
            >
              Supprimer
            </Button>
          </div>
        </Modal.Footer>
      ) : null}
    </Modal>
  );
}
