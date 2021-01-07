import React, { Suspense } from 'react'
import Loading from '../components/loading'

const SuspenseComponents = (component, loadingStatus = false) => {
  return (
    <Suspense fallback={}></Suspense>
  )
  // Suspense({
  //   loader: () => component,
  //   loading: () => {
  //     if (loadingStatus) {
  //       return <Loading style={{ background: 'none', height: 'calc(100vh-173px)' }}></Loading>
  //     }
  //     return null
  //   }
  // })
}

export default SuspenseComponents