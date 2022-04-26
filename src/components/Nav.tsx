import React from 'react'
import { motion } from 'framer-motion'
const hoverVariant = {
  hover: { scale: 1.05, transition: { duration: 0.25, ease: 'easeOut' } },
  tap: { scale: 0.75, transition: { duration: 0.25, ease: 'easeIn' } }
}
function Nav({ fetchQuote, changeIndex, showRespect }) {
  return (
    <div className="flex gap-4">
      <motion.button
        onClick={fetchQuote}
        className="py-2 px-4 font-serif text-[25.89px] text-[#FCE373] bg-neutral-900"
        variants={hoverVariant}
        whileHover="hover"
        whileTap="tap"
      >
        Get Inspired
      </motion.button>
      <motion.button
        onClick={showRespect}
        className="py-2 px-4 font-serif text-[25.89px] text-[#FCE373] bg-neutral-900"
        variants={hoverVariant}
        whileHover="hover"
        whileTap="tap"
      >
        Show Respect
      </motion.button>
      <motion.button
        onClick={changeIndex}
        className="py-2 px-4 font-serif text-[25.89px] text-[#FCE373] bg-neutral-900"
        variants={hoverVariant}
        whileHover="hover"
        whileTap="tap"
      >
        New Image
      </motion.button>
    </div>
  )
}

export default Nav
