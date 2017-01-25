import * as React from "react";
import * as nacl from "tweetnacl/nacl";

export interface EncryptBoxProps {
    onEncrypt: (message: string)=>void
};

interface EncryptBoxState {
    message: string
};

export class EncryptBox extends React.Component<EncryptBoxProps, EncryptBoxState>{
    constructor(){
        super();
        this.state = {
            message: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event: React.FormEvent<HTMLTextAreaElement>){
        this.setState({
            message: event.currentTarget.value
        });
    }

    render(){
        return (
            <div className="encrypt-box">
                <textarea value={this.state.message} onChange={this.onChange}/>
                <br/>
                <button onClick={() => this.props.onEncrypt(this.state.message)}>Encrypt!</button>
            </div>
        );
    }
};