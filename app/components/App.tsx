import * as React from "react";
import * as nacl from "tweetnacl";
import * as naclutil from "tweetnacl-util";
import {EncryptBox} from './EncryptBox';
import {DecryptBox} from './DecryptBox';

const {publicKey, secretKey} = nacl.box.keyPair();

export interface AppState {
    message : string
};

export class App extends React.Component<undefined, AppState>{
    state: {
        message: string
    };

    constructor(){
        super();
        this.state = {
            message: ''
        };
    }

    setMessage(message: string){
        const nonce = nacl.randomBytes(24);

        const encryptedBox = naclutil.encodeBase64(nacl.box(naclutil.decodeUTF8(message), nonce, publicKey, secretKey));
        console.log(encryptedBox);

        const decryptedBox = naclutil.decodeBase64(encryptedBox);

        const decrypted = nacl.box.open(decryptedBox, nonce, publicKey, secretKey);
        if(decrypted === false){
            console.log('failed decryption');
            return;
        }
        console.log(naclutil.encodeUTF8(decrypted));
        this.state.message = message;
    }

    render(){
        return (
            <div>
                <EncryptBox onEncrypt={(message) => this.setMessage(message)}/>
                <br/>
                <DecryptBox publicKey={publicKey} secretKey={secretKey} message={this.state.message}/>
            </div>
        );
    }
};