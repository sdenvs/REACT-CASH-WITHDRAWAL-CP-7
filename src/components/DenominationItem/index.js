// Write your code here
import './index.css'

const DenominationsItem = props => {
  const {amount, widthdraw} = props

  return (
    <button value={amount.value} onClick={widthdraw} className="button">
      {amount.value}
    </button>
  )
}

export default DenominationsItem
