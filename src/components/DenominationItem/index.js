// Write your code here
import './index.css'

const DenominationsItem = props => {
  const {amount, widthdraw} = props

  return (
    <li value={amount.value} onClick={widthdraw} className="button">
      {amount.value}
    </li>
  )
}

export default DenominationsItem
