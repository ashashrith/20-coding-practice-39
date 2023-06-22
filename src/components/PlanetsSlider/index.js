// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="bg-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <div className="container">
        <Slider {...settings}>
          <ul className="list-cont">
            {planetsList.map(each => (
              <PlanetItem item={each} key={each.name} />
            ))}
          </ul>
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
