

import React from 'react'

const AnimationCard = () => {
    return (
        <div>

            {/* overlay pop up from bottom */}
            <div class="card my_card" style={{width: "18rem"}}>
                <img class="card-img-top" src="..." alt="Card image cap" />

                <div class="card-body card-body_data">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>

                <p className='animation_card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla laboriosam veniam sit porro, debitis ex quam harum totam. Esse est fugiat qui quidem accusamus aut perspiciatis possimus expedita minima!</p>
            </div>



            <div class="card my_card" style={{width: "18rem"}}>
                <img class="card-img-top" src="..." alt="Card image cap" />

                <div class="card-body card-body_data">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>

                <p className='animation_card2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla laboriosam veniam sit porro, debitis ex quam harum totam. Esse est fugiat qui quidem accusamus aut perspiciatis possimus expedita minima!</p>
            </div>
        </div>
    )
}

export default AnimationCard