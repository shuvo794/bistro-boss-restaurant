import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner/01.jpg'
import img2 from '../../../assets/banner/02.jpg'
import img3 from '../../../assets/banner/03.png'
import img4 from '../../../assets/banner/04.jpg'
import img5 from '../../../assets/banner/05.png'
import img6 from '../../../assets/banner/06.png'


function Banner() {
  return (
    <Carousel>
                <div>
                    <img src={img1} />
                   
                </div>
                <div>
                    <img src={img2} />
                   
                </div>
                <div>
                    <img src={img3} />
                   
                </div>
                <div>
                    <img src={img4} />
                   
                </div>
                <div>
                    <img src={img5} />
                   
                </div>
                <div>
                    <img src={img6} />
                   
                </div>
                {/* <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>
  )
}

export default Banner