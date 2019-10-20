import React, {Component} from 'react';

class MyForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            name: event.target.value
        })
    }
    render(){
        const {state} = this;
        const {handleChange} = this;
        return(
            <form>
                Nome:
                <input type="text" name="name" value={state.name} onChange={handleChange}  /> {state.name}
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

export default MyForm;