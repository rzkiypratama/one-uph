import Registering from '@/components/Registering'
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