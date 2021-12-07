// Write your code here
import './index.css'

const DenominationsItem = props => {
  const {amount, widthdraw} = props

  return (
    <li>
      <button value={amount.value} onClick={widthdraw} className="button">
        {amount.value}
      </button>
    </li>
  )
}

export default DenominationsItem
