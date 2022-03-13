import React,{ Component } from "react";
import Modal from "./modal";
import Form from "./form";
import './dashboard.css'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal = () => {
        this.setState({show: true})
    }
    hideModal = () => {
        this.setState({show: false})
    }

    render() {
        return (
            <div>
                <h1>React Modal</h1>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <Form />
                </Modal>
                <h3>Team Members</h3>
                <button type="button" onClick={this.showModal}>
                    Add Members +
                </button>
            </div>
        )
    }
}

export default Dashboard;