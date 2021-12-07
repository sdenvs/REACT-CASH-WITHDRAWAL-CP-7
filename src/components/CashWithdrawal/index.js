// Write your code here

import './index.css'
import {Component} from 'react'
import DenominationsItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  widthdrawFun = event => {
    const {balance} = this.state
    const val = event.target.value
    if (balance >= val) {
      this.setState(prevObj => ({balance: prevObj.balance - val}))
    }
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bgContainer">
        <div className="card">
          <div className="style1">
            <p className="logo">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balanceDiv">
            <p className="style2">Your Balance</p>
            <div>
              <h1 className="balance">{balance}</h1>
              <p className="style3">In Rupees</p>
            </div>
          </div>
          <h1 className="balance">Withdraw</h1>
          <p className="style2">CHOOSE SUM (IN RUPEES)</p>
          <ul className="valueList">
            {denominationsList.map(eachItem => (
              <DenominationsItem
                key={eachItem.id}
                widthdraw={this.widthdrawFun}
                amount={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
