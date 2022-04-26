// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Banner from 'components/Banner'
import Nav from 'components/Nav'
import QuoteBox from 'components/QuoteBox'
import Image from 'components/Image'
function App() {
  return (
    <div>
      <div className="w-screen h-screen bg-[#FCE373]">
        <Banner />
        <Nav />
        <div className="flex m-auto mt-16 w-11/12">
          <QuoteBox />
        </div>
        <Image />
      </div>
    </div>
  )
}

export default App
