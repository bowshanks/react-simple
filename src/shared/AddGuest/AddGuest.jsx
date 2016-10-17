import React from 'react';

class AddGuest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: 'Change Me!'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.addGuest(this.state.text);
    }

    handleChange(event) {
      this.setState({
        text: event.target.value
      })
    }


    render() {

      var divStyle = {
        color: 'green'
      };

        return (
            <div className="add-class-container">
              <h3 style={divStyle}>Add A Guest:</h3>
                <input
                value={this.state.text}
                onChange={this.handleChange}/>
                <button
                  onClick={this.handleSubmit}>
                  Add Guest
                </button>
            </div>
        )
    }
}

export default AddGuest;
