// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useQuery } from 'react-query'
import Lottie from 'lottie-react-web'
import loading from '../assets/lottie/loading.json'
import confetti from '../assets/lottie/confetti2.json'
import { useState } from 'react'
import Banner from 'components/Banner'
import Nav from 'components/Nav'
import QuoteBox from 'components/QuoteBox'
import Image from 'components/Image'

function App() {
  const fetchQuote = async () => {
    console.log('Hello')
    const response = await fetch('https://api.kanye.rest')
    return response.json()
  }

  function setConfetti() {
    setlottieState(!lottieState)
  }
  const { data, isLoading, refetch } = useQuery('quote', fetchQuote, {
    refetchOnWindowFocus: false,
    enabled: false
  })

  const [imageIndex, setimageIndex] = useState(0)
  const [lottieState, setlottieState] = useState(true)

  const updateIndex = () => {
    if (imageIndex < 3) {
      setimageIndex(imageIndex + 1)
    } else if (imageIndex == 3) {
      setimageIndex(0)
    }
  }
  const getData = () => {
    refetch()
  }

  return (
    <div>
      <div className="w-screen h-screen bg-[#A385BD]">
        <motion.div
          className="w-screen bg-[#FCE373]"
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
        >
          <div className="m-auto w-11/12">
            <Banner />
            <Nav
              fetchQuote={getData}
              changeIndex={updateIndex}
              showRespect={setConfetti}
            />
          </div>
        </motion.div>

        <div className="flex  m-auto mt-16 w-11/12">
          {isLoading && (
            <div>
              <Lottie options={{ animationData: loading }} />
            </div>
          )}
          {data ? (
            <QuoteBox quote={data} />
          ) : (
            <motion.h2
              className="font-serif text-[67.77px]"
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75 }}
            >
              Get Inspired
            </motion.h2>
          )}

          <Image imageindex={imageIndex} />
          <div className="overflow-hidden absolute top-0 h-screen">
            <div className="object-cover" onClick={setConfetti}>
              {!lottieState && (
                <Lottie
                  options={{ animationData: confetti, autoplay: false }}
                  isStopped={lottieState}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
