import React, {Component} from 'react';

class MyForm2 extends Component{
    constructor(props){
        super(props);
        this.initialName = "Nome inicial";
    
        this.inputName = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            repos: []
        }
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(`https://api.github.com/search/repositories?q=${this.inputName.current.value}`)
        .then(response => response.json())
        .then(data => {
            
            this.setState({
                repos: data.items
            })
   
        });
    }

    render(){
        const {state} = this;
        return(
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Nome:
                    <input type="text" name="name" ref={this.inputName} />
                        </label>
                    </div>
                    <input type="submit" value="Enviar" />
                <ul>
                    {state.repos.map(item => <li>{item.full_name}</li>)}
                </ul>
                </form>
       
        );
    }
}

export default MyForm2;