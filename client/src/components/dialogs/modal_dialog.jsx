import { Modal, Button } from 'react-bootstrap';
import { Component } from 'react'

class ModalDialog extends Component {
  constructor(props) {
    super(props)
    this.getAlertClass = this.getAlertClass.bind(this)
  }
  getAlertClass() {
    let className = "alert "
    className += this.props.alertClassName
    return className
  }
  render() {
    return (
      <div className="static-modal">
        <Modal show={this.props.showModal} onHide={this.props.close}>
          <Modal.Header>
            <Modal.Title>{this.props.dialogTitle}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className={this.getAlertClass()} role="alert">{this.props.message}</div>
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
