import WelcomePage from '@/components/WelcomePage'
import React, { Suspense } from 'react'

type Props = {}

function Page({}: Props) {
  return (
    <div>
      <Suspense>
        <WelcomePage/>
      </Suspense>
    </div>
  )
}

export default Page