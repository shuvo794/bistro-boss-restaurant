import React from 'react'
import SectionTittle from '../../../Components/SectionTittle/SectionTittle'
import slide1 from '../../../assets/home/slide1.jpg'

function Chef() {
  return (
    <section>
        <SectionTittle
        subHeading={"Should Try"}
        heading={'RECOMMENDS'}
        >

        </SectionTittle>

        <div className='grid md:grid-cols-3 gap-5 p-4'>
        <div className="card w-96 glass">
  <img style={{width:'424px',height:'300px'}} src={slide1} alt="car!"/>
  <div className="card-body ">
    <h2 className="card-title ">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center -mb-3">
      <button className="btn  uppercase">add to cart</button>
    </div>
  </div>
</div>
        <div className="card w-96 glass">
  <img style={{width:'424px',height:'300px'}} src={slide1} alt="car!"/>
  <div className="card-body ">
    <h2 className="card-title ">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center -mb-3">
      <button className="btn  uppercase">add to cart</button>
    </div>
  </div>
</div>
        <div className="card w-96 glass">
  <img style={{width:'424px',height:'300px'}} src={slide1} alt="car!"/>
  <div className="card-body ">
    <h2 className="card-title ">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center -mb-3">
      <button className="btn  uppercase">add to cart</button>
    </div>
  </div>
</div>
        </div>

    </section>
  )
}

export default Chef