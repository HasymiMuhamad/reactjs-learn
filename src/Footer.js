import React,{Component} from 'react'


export default class Footer extends Component {
    constructor (props){
        super (props);
        this.state = { hari : ''}
    }

    inputHari = (event)=>{
        this.setState({ hari : event.target.value})
    }


    render (){
        return (
            <div>
                <input type='text' onChange={this.inputHari} />
                <h1>{this.state.hari}</h1>
            </div>
        )
    }
}