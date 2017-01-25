import * as React from "react";
import * as nacl from "tweetnacl/nacl";

export interface DecryptBoxProps {
    publicKey: Uint8Array,
    secretKey: Uint8Array,
    message: string
};

export class DecryptBox extends React.Component<DecryptBoxProps, undefined>{
    render(){
        return (
            <div>
            </div>
        );
    }
};