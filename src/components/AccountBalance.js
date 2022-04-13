import React, {Component} from 'react';



const AccountBalance = (props) => {
    return (
        <div>
            <strong>
                {`Current Balance: $${props.accountBalance}`}
            </strong>
        </div>
    );
}



export default AccountBalance;

