import React from 'react';
import GuestComponent from '../Guest/GuestComponent.jsx';
import AddGuest from '../AddGuest/AddGuest.jsx';

class PartyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'Halloween',
      guests: [{
        name: 'Jack',
        key: 1
      },
      {
        name: 'Jill',
        key: 2
      },
      {
        name:'Spot',
        key: 3
      }]
    }

    this.handleAddGuest = this.handleAddGuest.bind(this);

  }

  handleAddGuest(guest) {
    const newGuests = this.state.guests;

    newGuests.push({
      key: newGuests.length + 1,
      name: guest
    })

    this.setState({
      guests: newGuests
    })
  }

  render() {
    // basic version //need to add key so we don't get warning
    const guestList = this.state.guests.map(function(guest){
      return (
        <p>{guest.name}</p>
      )
    });

    // using 'dumb' Component
    const guestList2 = this.state.guests.map(function(guest){
      return(
            <GuestComponent
                key = {guest.key}
                guest={guest.name}/>
            )
    });

    console.log(guestList,'|',guestList2)

    return ( // everything must be wrapped in a single element
      <div>
        <h3>{this.state.theme} Party List!</h3>
        <p>METHOD ONE:</p>
        {guestList}
        <hr></hr>
        <p>METHOD TWO:</p>
        {guestList2}
        <AddGuest
            addGuest={this.handleAddGuest} />
      </div>
    )
  }
}

export default PartyList;
