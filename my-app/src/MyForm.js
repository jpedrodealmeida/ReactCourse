import React, {Component} from 'react';

class MyForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            message: 'Hello World',
            fruit: 'orange'
        }

        this.fruits = [
            {
                name: 'Apple',
                value: 'apple'
            },
            {
                name: 'Orange',
                value: 'orange'
            },
            {
                name: 'Banana',
                value: 'banana'
            }
        ]
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const element = event.target
        const value = element.type === 'checkbox' ? element.checked : element.value
        const name = element.name;

        this.setState({
            [name]: value
        })
    }
    render(){
        const {state} = this;
        const {handleChange} = this;
        return(
            <form>
                <div>
                <label>
                    Nome:
                    <input type="text" name="name" value={state.name} onChange={handleChange} /> {state.name}
                    <input type="submit" value="Enviar" />
                </label>
                </div>
                
                <div>
                <label>
                    Fruit:
                    <select value={state.fruit} name="fruit" onChange={handleChange}>
                        {this.fruits.map(fruit => <option value={fruit.value}>{fruit.name}</option>)}
                    </select>
                </label>
                </div>

                <div>
                <label>
                    Message:
                    <textarea value={state.message} name="message" onChange={handleChange}/>
                </label>
                </div>
                
                <h1>Show Results</h1>
                <div>
                    Nome: {state.name}
                </div>
                <div>
                    Fruit: {state.fruit}
                </div>
                <div>
                    Message: {state.message}
                </div>
                
            </form>
        );
    }
}

export default MyForm;