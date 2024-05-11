import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {imgUrl, name} = userDetails
  return (
    <li className="user-card-container">
      <img src={imgUrl} className="search-icon" alt={name} />
      <div className="user-details-container">
        <p className="user-name">{name}</p>
      </div>
    </li>
  )
}
export default DestinationItem
