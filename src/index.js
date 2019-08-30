import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state={lat: null, errorMessage: ''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.Message })                            
        );
    }
    renderContent(){
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        if (!this.state.lat && this.state.errorMessage) {
            return <div>errorMessage:{this.state.errorMessage}</div>;
        }

        return <div><Spinner message="Please accept location request" /></div>

    }

    render() {
             return <div>
                 {this.renderContent()}
             </div>   
    }
}

 ReactDOM.render(<App/>, document.querySelector("#root"));