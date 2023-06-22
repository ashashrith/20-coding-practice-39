// Write your code here
import './index.css'

const PlanetItem = props => {
  const {item} = props
  const {name, imageUrl, description} = item

  return (
    <li className="list">
      <img src={imageUrl} alt={`planet ${name}`} className="img" />
      <h1 className="name">{name}</h1>
      <p className="para">{description}</p>
    </li>
  )
}

export default PlanetItem
