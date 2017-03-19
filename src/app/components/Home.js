import React from "react";

export class Home extends React.Component {

    constructor(props) {
        super();
        console.log(props);
        this.state = {
            age: props.age,
            level: 1,
            hideButtons: true,
            homeLink: "Sweet-Home"
        };

        setTimeout (() => {
                this.setState({
                    hideButtons: false
                })
            }, 6000
        );
    }

    onGrow() {
        this.setState({age: this.state.age + 2});
    }

    onNextLevel() {
        this.setState({level: this.state.level + 1});
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    render() {
        return (
            <div>
                <p>Welcome {this.props.name}, your age is {this.state.age}</p>
                <div>
                    {this.props.ch.name} with Level {this.state.level}
                    <ul>
                        {this.props.ch.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>) }
                    </ul>
                </div>
                {this.props.children}
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
                <hr/>                
                <div hidden={this.state.hideButtons}>
                    <button className="btn btn-primary" onClick={() => this.onGrow()}>
                        Click Me to Grow
                    </button>&nbsp;
                    <button className="btn btn-primary" onClick={() => this.onNextLevel()}>
                        Next Level
                    </button>&nbsp;
                    <button className="btn btn-primary" onClick={() => this.onChangeLink()}>
                        Change Link
                    </button>
                </div>
            </div>
        );
    }
}

Home.PropTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    ch: React.PropTypes.object,
    greet: React.PropTypes.func,
    changeLink: React.PropTypes.func
};