import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function services() {
  return (
    <div className='service-container'>
      <div className='service'>
        <div className='show-case'>
          <motion.img src='/images/features/Phone_Screenshot_1.jpg'
            className='mx-auto mt-0-widescreen is-block show-image'
          />
        </div>
        <div className='explanation'>
          <div className='feature-header'>
            <h1 className='mb-4 is-size-1 is-size-3-mobile has-text-weight-bold'>Scan to pay</h1>
          </div>
          <div className='feature-description'>
            <p>
              Scan the QR Code present to you on the screen and make a payment. A payment gateway will be presented to you, enter your payment details and make payment
            </p>
          </div>
        </div>
      </div>
      <div className='service'>
        <div className='explanation'>
          <div className='feature-header'>
            <h1 className='mb-4 is-size-1 is-size-3-mobile has-text-weight-bold'>Search</h1>
          </div>
          <div className='feature-description'>
            <p>
              Search for a user on the app and make payment. Payment between user&#39;s is easy and secured
            </p>
          </div>
        </div>
        <div className='show-case'>
          <motion.img src='/images/features/Phone_Screenshot_2.jpg'
            className='mx-auto mt-0-widescreen is-block show-image'
          />
        </div>
      </div>
      <div className='service'>
        <div className='show-case'>
          <motion.img src='/images/features/Phone_Screenshot_3.jpg'
            className='mx-auto mt-0-widescreen is-block show-image'
          />
        </div>
        <div className='explanation'>
          <div className='feature-header'>
            <h1 className='mb-4 is-size-1 is-size-3-mobile has-text-weight-bold'>Generate a QR Code</h1>
          </div>
          <div className='feature-description'>
            <p>
              You can generate a QR Code and get paid.  Enter the name, email and amount you want to get paid. and a person with a QR Code app can scan the QR Code and you can get paid
            </p>
          </div>
        </div>
      </div>
      <div className='service'>
        <div className='explanation'>
          <div className='feature-header'>
            <h1 className='mb-4 is-size-1 is-size-3-mobile has-text-weight-bold'>Generate Payment link</h1>
          </div>
          <div className='feature-description'>
            <p>
              Generate a payment link and send to someone you want to get paid. First enter their name, email and amount you wanna get paid in
            </p>
          </div>
        </div>
        <div className='show-case'>
          <motion.img src='/images/features/Phone_Screenshot_4.jpg'
            className='mx-auto mt-0-widescreen is-block show-image'
          />
        </div>
      </div>
    </div>
  )
}
