import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './shared/AwesomeComponent/AwesomeComponent.jsx';
import PartyList from './shared/PartyList/PartyList.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Hello React!</p>
                <AwesomeComponent />
                <PartyList />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));
