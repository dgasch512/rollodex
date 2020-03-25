import React from 'react';
import MoreDet from './moreDet';
import './index.css'

class Rollodex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let newArr = [];
    fetch('https://randomuser.me/api?results=25')
      .then((res) => res.json())
      .then((res) => res.results.map( contact => {
        newArr = [...newArr, contact];
        return newArr
      }))
      .then(() => {
        this.setState({
          contacts: newArr
        })
      })

      .catch(error => console.log('There was an error', error))
  }


    render() {

      console.log(this.state.contacts);
        return (
          <div class="body">
            <h2>My Peoples</h2>
            <div class="container">
            {this.state.contacts.map((contact, index) => {
               return (
              
                <div class="card" key={contact.email}>
                  <h3>{contact.name.first} {contact.name.last} </h3>
                  <div class="media">
                      <img src={contact.picture.large} alt="No img"/>
                  </div>
                  <div class="cardMain">
                    <div>
                        <h5>{contact.login.username}, Age: {contact.dob.age} </h5>
                        <h5 class="text">{contact.email}</h5>
                    </div>

                    </div>
                    < MoreDet contact={this.state.contacts}/>
                </div>

              )
              })
            }
            </div>    
          </div>
  )}









}

export default Rollodex;