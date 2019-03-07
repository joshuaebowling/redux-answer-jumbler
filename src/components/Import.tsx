import React from "react";
import { Modal, Button } from "react-bootstrap";

const Import = (props: object) => {
  const [importData, setImportData] = React.useState("");

  return (
    <div>
      <Modal size="lg" show={props.showImport}>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {props.importResult === null || props.importResult === undefined ? (
            <div>
              <textarea
                defaultValue=""
                onChange={e => {
                  setImportData(e.currentTarget.value);
                }}
                onPaste={e => {
                  setImportData(e.currentTarget.value);
                }}
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
          <Button variant="secondary" onClick={() => props.import(importData)}>
            Import
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Import;
