import React, {Component} from 'react'
import ReactDOM from 'react-dom'


import Inc from './components/increase'
import Dec from './components/decrease'
import Dis from './components/display'
import TimeDec from './components/time _decrease'
import TimeInc from './components/time_increase'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: 100
        };


    }

    render() {

        return (
            <div>
                <TimeInc val={() => this.onClickTimeInc()}/>
                <Inc val={(term) => (this.onClick(term))}
                     value={this.state.currentValue}/>
                < Dis value={this.state.currentValue}/>
                < Dec val={(term) => (this.onClick(term))}
                      value={this.state.currentValue}/>

                <TimeDec val={() => this.onClickTimeDec()}/>
            </div>

        );
    }

    onClick(term) {

        this.setState(
            {currentValue: term}
        )
    }

    onClickTimeInc() {

        if (this.state.currentValue < 100) {
            setInterval(() => {
                this.setState({currentValue: this.state.currentValue + 1})
            }, 1000)
        }
    }


    onClickTimeDec() {
        if (this.state.currentValue > 0) {
            setInterval(() => {
                this.setState({currentValue: this.state.currentValue - 1})
            }, 1000)
        }
    }

}

ReactDOM.render(<App/>, document.querySelector(".container"));
