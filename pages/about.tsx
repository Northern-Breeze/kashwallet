import * as React from 'react'
import { motion, AnimatePresence } from "framer-motion";

export default function about() {
  return (
    <div className='about_wrapper'>
      <div className='left-info'>
          <AnimatePresence>
            <motion.h1
              className='header'
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
            >
              About Kashwallet
            </motion.h1>
          </AnimatePresence>
        <AnimatePresence>
          <motion.p className='description'
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            Kashwallet is a payment platform that allow individuals and business to make and receive payments easily
          </motion.p>
        </AnimatePresence>
      </div>
      <div className='right-image'>
        <AnimatePresence>
          <motion.img
            src='/images/Phone_Screenshot_.jpg'
            className='mx-auto mt-0-widescreen is-block show-image-1'
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, rotate: -5 }}
            exit={{ x: -300, opacity: 0 }}
          />
        </AnimatePresence>
        <AnimatePresence>
          <motion.img
            src='/images/Phone_Screenshot__.jpg'
            className='mx-auto mt-0-widescreen is-block show-image'
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, rotate: 5 }}
            exit={{ x: -300, opacity: 0 }}
          />
        </AnimatePresence>
      </div>
    </div>
  )
}
