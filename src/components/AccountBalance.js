import React, {Component} from 'react';


class AccountBalance extends Component {
    render() {
        return (
            <div>
                <strong>
                    {`Current Balance: $${this.props.accountBalance}`}
                </strong>
            </div>
        );
    }
}



export default AccountBalance;

