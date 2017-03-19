import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        };
    }

    greet() {
        alert("Welcome to ReactJS","Welcome");
    }

    onChangeLinkName(linkName) {
        this.setState({homeLink: linkName});                    
    }

    render() {
        var choice = {
            name: "Sports",
            hobbies: ["Cricket", "Football"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-0">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>            
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-0">
                        <Home 
                            name={"Kavien"} 
                            age={5} ch={choice} 
                            greet={this.greet}
                            greetMessage={this.state.greetMessage}
                            changeLink={this.onChangeLinkName.bind(this)}
                        >
                            <p>I like Daddy.</p>
                        </Home>
                    </div>
                </div>
            </div>            
        );
    }
}

render(<App/>, window.document.getElementById("app"));