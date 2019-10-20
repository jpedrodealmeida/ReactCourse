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
        this.setState({
            name: event.target.value
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
                    <select value={state.fruit}>
                        {this.fruits.map(fruit => <option value={fruit.value}>{fruit.name}</option>)}
                    </select>
                </label>
                </div>

                <div>
                <label>
                    Message:
                    <textarea value={state.message} />
                </label>
                </div>
                
                
            </form>
        );
    }
}

export default MyForm;