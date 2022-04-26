import { motion } from 'framer-motion'
const moveVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.5
    }
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function QuoteBox({ quote }: { quote: any }) {
  return (
    <motion.div
      layout
      className="p-8 w-1/2 bg-[#9CD08E]"
      variants={moveVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        layout
        className=" font-serif text-[25.89px] text-neutral-900"
        key={quote.quote}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        &quot;{quote?.quote}&quot;
      </motion.p>

      <h2 className="font-serif text-[19px] font-semibold text-neutral-800 ">
        {' '}
        - Kanye West
      </h2>
    </motion.div>
  )
}

export default QuoteBox
