import React from 'react'
import UiCard from '../components/UiCard'
import UiCard2 from '../components/UiCard2'
import UiCard3 from '../components/UiCard3'
import UiComp from '../components/UiComp'

const ui = () => {
  return (
    <div>
      <UiComp/>
      <UiCard/>
      <UiCard2/>
      <UiCard3/>
    </div>
  )
}

export default ui