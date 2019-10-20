import React, {Component} from 'react';

class MyForm2 extends Component{
    constructor(props){
        super(props);
        this.initialName = "Nome inicial";
        this.inputName = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        alert(this.inputName.current.value);
        event.preventDefault();
    }

    render(){
        const {state} = this;
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Nome:
                    <input defaultValue={this.initialName} type="text" name="name" ref={this.inputName} />
                    </label>
                </div>
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

export default MyForm2;