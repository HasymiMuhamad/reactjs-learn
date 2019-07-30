import React, {Component} from 'react'


export default class Header extends Component {

    constructor (props){
        super (props);
        this.state = { salam : 'Halo'}
    }

    ucapSalam = ()=>{
        alert('ini hasilnya')
    }
    render (){
        return (
            <div>
                 <h1>{this.state.salam}</h1>
            <button onClick={this.ucapSalam} >Ucap Salam</button>
            </div>
           
        )
    }
}