import React, {Component} from 'react';

class MyForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            message: 'Hello World'
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
                <label>
                    Nome:
                    <input type="text" name="name" value={state.name} onChange={handleChange} /> {state.name}
                    <input type="submit" value="Enviar" />
                </label>
                <label>
                    Message:
                    <textarea value={state.message} />
                </label>
            </form>
        );
    }
}

export default MyForm;