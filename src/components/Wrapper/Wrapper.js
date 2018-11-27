import React from 'react';
import './Wrapper.css';
import templates from '../../templates.json';
import guests from '../../guests.json';
import companies from '../../companies.json'
import MessageCard from '../MessageCard';
import FormOptions from '../FormOptions';
import TemplateForm from '../TemplateForm';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Modal } from 'react-materialize';
import moment from 'moment';

//Form class to create Form objects that will render form options (guests and hotels)
class Form {
    constructor(id, value){
        this.id = id;
        this.value = value;
    }
    buildForm(){
        return (
            <FormOptions
            key={this.id}
            id={this.id}
            value={this.value}
            />
        )
    }
}


class Wrapper extends React.Component {

    state = {
        templates: templates,
        guests: guests,
        companies: companies,
        greeting: "",
        guestName: "",
        guestInfo: "",
        hotel: "",
        room: "", 
        messageId: "",
        newTemplate: ""
    }
    
    //on component mount, initializes selection forms and modal, runs setGreeting function
    componentDidMount(){
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
        this.setGreeting();
    }

    //gets the current time and sets the greeting based on the time of day
    setGreeting = () => {
        var currentTime = moment().format("HH");

        if(currentTime < 12 ) {
            this.setState({ greeting: "Good morning"})
        } else if (currentTime >= 12 && currentTime < 18) {
            this.setState({ greeting: "Good afternoon"})
        } else if (currentTime >= 18) {
            this.setState({ greeting: "Good evening"})
        }
    }

    //sets the hotel as the hotel selected from the hotel form
    handleHotelChange = event => {
        var index=event.target.value -1
        this.setState({
            hotel: companies[index].company
        })
    }

    //sets the guest as the guest selected from the guest form
    handleGuestChange = event => {
        var index=event.target.value -1
        this.setState({
            guestInfo: guests[index],
            guestName: guests[index].firstName,
            room: guests[index].reservation.roomNumber
        })
    }
    
    //sets the messageId as the id of the message selected, then displays the modal
    send = (id) => {
        this.setState({
            messageId: id
        }, () => {
        var modal = window.$("#sendModal");
        modal.modal('open')
        })
    }

    //creates a new template object, then pushes it onto the list of templates
    save = () => {
        var id = this.state.templates.length +1
        var body = this.state.newTemplate
        var newTemplate = {
            "id": id,
            "body": body
        }
        console.log(newTemplate)
        this.setState({ templates: [...this.state.templates, newTemplate], newTemplate: ""})
        
    }

    //updates the newTemplate state as the user enters their custom message into the form
    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            
            <div className="container">
                <img src="https://www.innatlagunabeach.com/wp-content/uploads/2013/12/banner-room.jpg" alt="hotel banner" className="z-depth-4"></img>
                <div>
                    <Modal
                        id="sendModal"
                        header='Sent!'>
                        <p>Message #{this.state.messageId} has been sent to {this.state.guestName}!</p>
                    </Modal>
                </div>

                <div className="row">

                    <div className="input-field col s6">
                        <select onChange={this.handleHotelChange}>
                        <option value="" disabled selected>Choose your hotel</option>
                            {this.state.companies.map(company => (
                                new Form(company.id, company.company).buildForm()
                            ))}
                        </select>
                        <label>Hotels</label>
                    </div>

                    <div className="input-field col s6">
                        <select onChange={this.handleGuestChange}>
                        <option value="" disabled selected>Choose your guest</option>
                            {this.state.guests.map(guest => (
                                new Form(guest.id, guest.firstName + " " + guest.lastName).buildForm()
                            ))}
                        </select>
                        <label>Guests</label>
                    </div>

                </div>

                <div>
                    {this.state.guestName !== "" && this.state.hotel !== "" ? (
                        this.state.templates.map(message => (
                            <MessageCard
                            key={message.id}
                            id={message.id}
                            send={this.send}
                            message={
                                message.body
                                .replace('{greeting}', this.state.greeting)
                                .replace('{guest}', this.state.guestName)
                                .replace('{hotel}', this.state.hotel)
                                .replace('{room}', this.state.room)}
                            />
                        ))
                    ): ""}
                </div>

                <div>
                    {this.state.guestName !== "" && this.state.hotel !== "" ? (
                        <TemplateForm
                            handleInputChange={this.handleInputChange}
                            value={this.state.newTemplate}
                            save={this.save}
                        />
                    ): ""}
                </div>
                
            </div>
        )
    }
}

export default Wrapper;