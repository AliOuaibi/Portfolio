import React, { Component } from 'react';
import axios from 'axios';
import '../style/Contact.css';

class Contact extends Component {

    state = {
        name: '',
        message: '',
        email: '',
    }

    handleSubmit(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:"http://localhost:3002/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("Message envoyer."); 
            this.resetForm()
          }else if(response.data.status === 'fail'){
            alert("Message non envoyer.")
          }
        })
      }

    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }

    render() {
        return(
            <div>
				<div className="border" ></div>
                <div className="row">
                    <div className="contact" >
                        <h2>CONTACT</h2>
             
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Votre nom" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Votre mail" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="5" placeholder="Votre message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                        </div>
                        <button type="submit" className="button-submit">Envoyer</button>
                        </form>
                    </div>
                </div>
			</div> 
        );
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
}

export default Contact;
