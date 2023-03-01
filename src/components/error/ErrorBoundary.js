import React, { Component } from 'react'
import { Modal, Button } from '@salesforce/design-system-react'

export class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // do something with the error
  }

  reloadPage = () => {
    window.location.reload()
  }
  render() {
    const { hasError } = this.state
    const title = <span>Service Unavailable</span>

    const buttons = [
      <Button label='Reload' key='promptBtn' onClick={this.reloadPage} />
    ]

    return hasError ? (
      <Modal
        align='top'
        disableClose
        title={title}
        size='medium'
        prompt='error'
        footer={buttons}
        isOpen={hasError}
        ariaHideApp={false}
        onRequestClose={null}>
        <div className='slds-m-around_medium'>
          Error message
        </div>
      </Modal>
    ) : (
      this.props.children
    )
  }
}
export default ErrorBoundary
