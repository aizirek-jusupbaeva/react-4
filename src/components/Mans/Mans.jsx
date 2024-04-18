import React from 'react';
import './Mans.css'

const Mans = () => {
	return (
		<div className='container'>
			<div className="man">
				<div className="flex1_row">
					<div className="1_card">
						<img className='img' src="https://static.zara.net/assets/public/6434/1f2f/a13d47c6bfaa/cdb018b5886f/03715307052-a1/03715307052-a1.jpg?ts=1713268169303&w=604" alt="" />
						<h5>Рубашка из хлопка</h5>
						<p>50$</p>
						<button className="btn">В корзину <img className='svg' src="https://www.svgrepo.com/show/522664/shopping-cart.svg" alt="" /></button>
					</div>
					<div className="2_card">
						<img className='img' src="https://static.zara.net/assets/public/e0d6/eca6/3359423c91ab/8d2fe8554409/01063455712-a1/01063455712-a1.jpg?ts=1713348241432&w=563" alt="" />
						<h5>Рубашка с коротким рукавами</h5>
						<p>46$</p>
						<button className="btn">В корзину <img className='svg' src="https://www.svgrepo.com/show/522664/shopping-cart.svg" alt="" /></button>
					</div>
					<div className="3_card">
						<img className='img' src="https://static.zara.net/assets/public/3728/4670/590b4bffa50c/e7131f6af814/02688450401-p/02688450401-p.jpg?ts=1712831956749&w=563" alt="" />
						<h5>Рубашка из шелка</h5>
						<p>62$</p>
						<button className="btn">В корзину <img className='svg' src="https://www.svgrepo.com/show/522664/shopping-cart.svg" alt="" /></button>
					</div>
					<div className="4_card">
						<img className='img' src="https://static.zara.net/assets/public/5628/b3ea/aadf473a8ad9/b67b3ec93250/04600778400-a1/04600778400-a1.jpg?ts=1712831964779&w=563" alt="" />
						<h5>Голубая рубашка в стиле Италии</h5>
						<p>58$</p>
						<button className="btn">В корзину <img className='svg' src="https://www.svgrepo.com/show/522664/shopping-cart.svg" alt="" /></button>
					</div>
					<div className="5_card">
						<img className='img' src="https://static.zara.net/assets/public/ba46/78f3/a3874ec994bb/e7bf93c9e3b6/03090472250-a1/03090472250-a1.jpg?ts=1712831965724&w=563" alt="" />
						<h5>Классическая рубашка</h5>
						<p>39$</p>
						<button className="btn">В корзину <img className='svg'  src="https://www.svgrepo.com/show/522664/shopping-cart.svg" alt="" /></button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Mans;