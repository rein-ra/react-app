import React, {Component, useState} from "react";

/*class Greetings extends React.Component{
    render(){
    return <h1>Greetings {this.props.name}</h1>
    }

    render = () => <h1>Greetings 2</h1>
}*/

//lifecycles

/*function Greetings(props){
return <h1>Greetings 3, {props.name}</h1>
}/*

//useEffect

/*const Greetings = () => <h1>Greetings 4, arrow function</h1>*/

/*class Greetings extends Component{
    state = {
        counter : 0
    }

    //constructor(){
    //    super()
    //    this.increaseCounter = this.increaseCounter.bind(this)
    //}

    increaseCounter = () =>{
        this.setState({counter: this.state.counter + 1})
    }

    render(){
    return <h1 onClick={this.increaseCounter}>Greetings counter {this.state.counter}</h1>
    }
}*/

const Greetings = ({name}) =>{
    const [info, setInfo] = useState('empty')

    return(
    <>
        <h1>{name} {info}</h1>
        <input type="text" onChange={event => setInfo(event.target.value)}/>

    </>
    )
}


export default Greetings