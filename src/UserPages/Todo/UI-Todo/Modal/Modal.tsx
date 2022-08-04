import React from 'react'
import './ModalModule.css'

export default class Modal extends React.Component {

    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button className='btn1' onClick={() => this.setState({ isOpen: true })}>
                    Open modal
                </button>

                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <h1>This is my first react app!</h1>
                            <p>I am awesome modal!</p>
                            <button className='btn1' onClick={() => this.setState({ isOpen: false })}>
                                Close modal
                            </button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}
