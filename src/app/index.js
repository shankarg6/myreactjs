import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeComp: true
        };        
    }

    greet() {
        alert("Welcome to ReactJS","Welcome");
    }

    onChangeLinkName(linkName) {
        this.setState({homeLink: linkName});                    
    }

    onOpenCloseHomeComponent() {
        this.setState({
            homeComp: !this.state.homeComp
        })
    }

    render() {
        var choice = {
            name: "Sports",
            hobbies: ["Cricket", "Football"]
        };
        var homeCompVal = "";
        var homeButtonName = "Open";
        if(this.state.homeComp) {
            homeCompVal = (
                <Home 
                    name={"Kavien"} 
                    age={5} ch={choice} 
                    greet={this.greet}
                    hlName={this.state.homeLink}
                    changeLink={this.onChangeLinkName.bind(this)}
                >
                    <p>I like Daddy.</p>
                </Home>
            );
            homeButtonName = "Close";
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-0">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>            
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-0">
                        <button className="btn btn-primary"
                            onClick={this.onOpenCloseHomeComponent.bind(this)}>
                            {homeButtonName} Home Component
                        </button>
                        {homeCompVal}
                    </div>
                </div>
            </div>            
        );
    }
}

render(<App/>, window.document.getElementById("app"));