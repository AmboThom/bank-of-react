import React from 'react';

const AccountBalance = (props) => {
    return (
        <div>
            <strong><h4>{`Current Balance: $${props.accountBalance}`}</h4></strong>
        </div>
    );
}

export default AccountBalance;

