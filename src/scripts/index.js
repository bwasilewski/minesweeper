import '../styles/index.scss';
import * as p5 from 'p5'

const P5 = new p5( (sk) => { 
	sk.setup = () => {
		sk.createCanvas(window.innerWidth, window.innerHeight)
	}
	sk.draw = () => {  }
})

