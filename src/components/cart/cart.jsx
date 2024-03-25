import React from 'react'
import './carts.css'
import img1 from './assets/kub.jpg'
import img2 from './assets/загружено.jpeg'
import img3 from './assets/jincy.jpeg'
import img4 from './assets/iphone.jpeg'
import img5 from './assets/ru,ashka.jpeg'
import img6 from './assets/utuk.jpeg'
import img7 from './assets/krossovri.jpeg'
import img8 from './assets/очки.jpeg'

function Cart() {
    return (
        <div>
            <div className="cart-block">
                <div className="cart">
                    <img src={img1} alt="" className='img' />
                    <div className="text">
                    <span className='buy1'>$60.00</span>
                    <span className='buy2'>$115.00</span>
                    </div>
                    <button className='btn'>Add to cart</button>
                </div>
                <div className="cart">
                    <img src={img2} alt="" className='img'/>
                    <div className="text">
                    <span className='buy1'>$95.00</span>
                    <span className='buy2'>$195.00</span>
                    </div>
                    <button className='btn'>Add to cart</button>
                </div>
                <div className="cart">
                    <img src={img3} alt="" className='img'/>
                    <div className="text">
                    <span className='buy1'>$40.00</span>
                    <span className='buy2'>$95.00</span>
                    </div>
                    <button className='btn'>Add to cart</button>
                </div>
                <div className="cart">
                    <img src={img4} alt="" className='img'/>
                    <div className="text">
                    <span className='buy1'>$95.00</span>
                    <span className='buy2'>$195.00</span>
                    </div>
                    <button className='btn'>Add to cart</button>
                </div>
            </div>
            <div className="cart-block">
                <div className="cart">
                    <img src={img5} alt="" className='img'/>
                    <div className="text">
                    <span className='buy1'>$20.00</span>
                    <span className='buy2'>$45.00</span>
                    </div>
                    <button className='btn'>Add to cart</button>
                </div>
                <div className="cart">
                    <img src={img6} alt="" className='img'/>
                    <div className="text">
                    <span className='buy1'>$50.00</span>
                    <span className='buy2'>$95.00</span>
                    </div>
                    <button className='btn'>Add to cart</button>
                </div>
                <div className="cart">
                    <img src={img7} alt="" className='img'/>
                    <div className="text">
                    <span className='buy1'>$25.00</span>
                    <span className='buy2'>$65.00</span>
                    </div>
                    <button className='btn'>Add to cart</button>
                </div>
                <div className="cart">
                    <img src={img8} alt="" className='img'/>
                    <div className="text">
                    <span className='buy1'>$36.00</span>
                    <span className='buy2'>$84.00</span>
                    </div>
                    <button className='btn'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart