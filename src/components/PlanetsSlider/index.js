// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
    <div className="bg-container">
      <Slider {...settings}>
        <ul className="list-cont">
          {planetsList.map(each => (
            <div>
              <PlanetItem item={each} key={each.id} />
            </div>
          ))}
        </ul>
      </Slider>
    </div>
  )
}

export default PlanetsSlider
