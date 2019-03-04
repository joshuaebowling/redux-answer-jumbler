import React from "react";
import { Modal, Button } from "react-bootstrap";

const Export = (props: object) => {
  console.log(props);
  return (
    <div>
      <Modal size="lg" show={props.exportData !== null}>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {props.exportData !== null ? (
            <div>
              <textarea defaultValue={props.exportData} />
            </div>
          ) : (
            <h3>Nothing to Export</h3>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.dismiss}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Export;
