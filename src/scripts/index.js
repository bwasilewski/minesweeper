import '../styles/index.scss'
import * as p5 from 'p5'

const P5 = new p5( (sk) => { 
	sk.setup = () => {
		sk.createCanvas(300, 300)
		let r = sk.random(255)
		let g = sk.random(255)
		let b = sk.random(255)
		sk.background(r, g, b)
	}
	sk.draw = () => {  
		let xPos = 0
		let yPos = 0
		let size = 20

		for ( let i = 0; i < 225; i++ ) {
			sk.stroke('#cecece')
			sk.strokeWeight(1)
			sk.square(xPos, yPos, size)
			if ( xPos === 280 ) {
				xPos = 0
				yPos += size
			} else {
				xPos += size
			}
		}
	}
})

