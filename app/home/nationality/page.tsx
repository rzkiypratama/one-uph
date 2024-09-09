import Registering from '@/components/Registering'
import WelcomePage from '@/components/WelcomePage'
import React, { Suspense } from 'react'

type Props = {}

function Page({}: Props) {
  return (
    <div>
      <Suspense>
        <Registering/>
      </Suspense>
    </div>
  )
}

export default Page