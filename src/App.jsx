import './App.css'
import {motion} from 'framer-motion'

const App = () => {
  const typingContainer = {
    hidden: { opacity: 0},
    show: { 
      opacity: 1,
      transition:{
        staggerChildren: 0.14,
      }}
  }
  const typingText = {
    hidden: { opacity: 0, y:"-20px"},
    show: { 
      opacity: 1, 
      y:"0",
      transition:{
        ease:'easeInOut',
      }
    }
  }
  const explainProduct = {
    hidden: { opacity: 0, y:"-20px"},
    show: { 
      opacity: 1, 
      y:"0", 
      transition:{
        delay:2.2,
        ease:"easeInOut"
      }
    }
  }
  const buttonProduct = {
    hidden: { opacity: 0, scaleX:0},
    show: { 
      opacity: 1, 
      scaleX:1,
      transition:{
        duration:.8,
        delay:2.3,
        type:'tween'
      }
    }
  }
  const imgProduct1 = {
    hidden: { 
      opacity: 0,
      y:'400px',
      width:'80px'
    },
    show: { 
      opacity: 1,
      y:0,
      width:'250px',
      transition:{
        duration:1,
        delay:2.5,
        ease:"easeInOut"
      }
    }
  }
  const imgProduct2 = {
    hidden: { 
      opacity: 0,
      y:'400px',
      x:'50px',
      width:'80px'
    },
    show: { 
      opacity: 1,
      y:0,
      x:0,
      width:'250px',
      transition:{
        duration:1,
        delay:3.4,
        ease:"easeInOut"
      }
    }
  }
  const navAnimation = {
    show: { 
      transition:{
        staggerChildren:.4,
        delayChildren:3.8,
        ease:"easeInOut"
      }
    }
  }
  const navText = {
    hidden: { 
      opacity: 0,
      y:'-10px',
    },
    show: { 
      opacity: 1,
      y:0,
      transition:{
        ease:"easeInOut"
      }
    }
  }
  const starAnimation = {
    hidden:{
      opacity:0,
      x:'-50px'
    },
    show: { 
      opacity:1,
      x:0,
      transition:{
        staggerChildren:.4,
        delayChildren:3.8,
      }
    }
  }
  const starItem = {
    hidden: { 
      opacity:0,
      x:'-100px',
      
    },
    show: { 
      opacity:1,
      x:0,
      transition:{
        duration:1.2,
        ease:"easeIn"
      }
    }
  }
  
  return (
    <div className='container'>
      <nav className='nav'>
        <motion.ul variants={navAnimation} initial="hidden" animate="show">
          <motion.li variants={navText}><a href="#">Home</a></motion.li>
          <motion.li variants={navText}><a href="#">Product</a></motion.li>
          <motion.li variants={navText}><a href="#">About</a></motion.li>
          <motion.li variants={navText}><a href="#">Contact</a></motion.li>
        </motion.ul>
      </nav>
      <section className='section'>
        <div className='left'>
          <motion.h1 className='text' variants={typingContainer} initial="hidden" animate="show">
            {
              Array.from("Coffee Nature").map((word,i) => (
              <motion.span key={i} variants={typingText}>{word}</motion.span>
              ))
            }
          </motion.h1>
          <div className='explain-product'>
            <motion.p variants={explainProduct} initial="hidden" animate="show">
              Coffee Nature is brand product that provides the best quality of coffee in the world. We dedicate the best quality of coffee in the world. For Coffee lover we will serve you
            </motion.p>
          </div>
          <div className='button'>
            <motion.button className='btn-order' variants={buttonProduct} initial="hidden" animate="show">Order now</motion.button>
          </div>
          <motion.div className='star-square' variants={starAnimation} initial="hidden" animate="show">
            <motion.img src="/images/star.png" alt="star-square" variants={starItem} />
            <motion.img src="/images/star.png" alt="star-square" variants={starItem} />
            <motion.img src="/images/star.png" alt="star-square" variants={starItem} />
          </motion.div>
        </div>
        <div className='right'>
          <motion.img src="/images/nature.jpg" alt="nature" className='img1' variants={imgProduct1} initial="hidden" animate="show" />
          <motion.img src="/images/coffee.jpg" alt="coffee" className='img2' variants={imgProduct2} initial="hidden" animate="show" />
        </div>
      </section>
    </div>
  )
}

export default App