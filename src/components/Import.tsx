import React from "react";
import { Modal, Button } from "react-bootstrap";

const Import = (props: object) => {
  return (
    <div>
      <Modal size="lg" show={props.showImport}>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {props.importResult === null ? (
            <div>
              <textarea
                defaultValue={props.importResult ? props.importResult : ""}
              />
            </div>
          ) : (
            <div>{JSON.stringify(props.importResult)}</div>
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
export default Import;
