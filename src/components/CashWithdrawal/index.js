// Write your code here

import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balanceAmount: 2000}

  onDecrease = value => {
    this.setState(prevState => ({
      balanceAmount: prevState.balanceAmount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balanceAmount} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="profile-container">
          <div className="profile-name">
            <div className="profile-pic-container">
              <p>{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="amount">
              {balanceAmount}
              <br />
              <span className="in-rupees">In Rupees</span>
            </p>
          </div>
          <div>
            <p className="withdraw">Withdraw</p>
            <p className="sum-amount">CHOOSE SUM (IN RUPEES)</p>
            <ul className="amount-container">
              {denominationsList.map(eachAmount => (
                <DenominationItem
                  sumAmount={eachAmount}
                  onDecrease={this.onDecrease}
                  key={eachAmount.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
