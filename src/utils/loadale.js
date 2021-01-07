import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../components/loading'

const LoadableComponents = (component, loadingStatus = false) => {
  return Loadable({
    loader: () => component,
    loading: () => {
      if (loadingStatus) {
        return <Loading style={{ background: 'none', height: 'calc(100vh-173px)' }}></Loading>
      }
      return null
    }
  })
}

export default LoadableComponents