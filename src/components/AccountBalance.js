import React, {Component} from 'react';


class AccountBalance extends Component {
    render() {
        return (
            <div>
                {`Current Balance: ${this.props.accountBalance}`}
            </div>
        );
    }
}



export default AccountBalance;

