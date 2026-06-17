'use client'

import Lottie from 'lottie-react'
import blockchainAnim from '@/public/animation/Global.json'

export default function Animate() {
  return (
    <div>
      <Lottie
        animationData={blockchainAnim}
        loop={true}
        style={{ width: 400, height: 400 }}
      />
    </div>
  )
}