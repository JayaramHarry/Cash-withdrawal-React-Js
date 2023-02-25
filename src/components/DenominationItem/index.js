// Write your code here

import './index.css'

const DenominationItem = props => {
  const {sumAmount, onDecrease} = props
  const {value} = sumAmount

  const onDecreaseAmount = () => {
    onDecrease(value)
  }
  return (
    <li className="button-list">
      <button className="button" type="button" onClick={onDecreaseAmount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
