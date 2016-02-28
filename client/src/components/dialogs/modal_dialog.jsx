import { Modal, Button } from 'react-bootstrap';
import { Component } from 'react'

class ModalDialog extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="static-modal">
        <Modal show={this.props.showModal} onHide={this.props.close}>
          <Modal.Header>
            <Modal.Title>{this.props.dialogTitle}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="alert alert-danger" role="alert">{this.props.message}</div>
            <p></p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>

        </Modal>
    </div>
    )
  }
}
module.exports = ModalDialog
