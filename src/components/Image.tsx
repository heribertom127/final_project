import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const images = [
  '../../assets/img/Kanye_2.png',
  '../../assets/img/Kanye_3.png',
  '../../assets/img/Kanye_4.png',
  '../../assets/img/Kanye_5.png'
]

function Image({ imageindex }) {
  return (
    <motion.div
      className="overflow-hidden absolute right-0 bottom-0 w-3/5 h-4/5"
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.75 }}
    >
      <AnimatePresence>
        <motion.img
          key={imageindex}
          className="object-contain absolute right-[-100px] bottom-[-70px] w-full h-full"
          src={images[imageindex]}
          alt="Kanye 1"
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          exit={{ y: 1000, opacity: 0 }}
        ></motion.img>
      </AnimatePresence>
    </motion.div>
  )
}

export default Image
