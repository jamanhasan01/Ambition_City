import React from 'react'
import TourPlanWithUs from '../components/TourPlanWithUs/TourPlanWithUs'
import BookedTour from '../components/BookedTour/BookedTour'
import Packages from "../components/Packages/Packages"
import GetSupportBannser from '../components/GetSupportBanner/GetSupportBannser'

const TourPlanner = () => {
  return (
    <>
      <TourPlanWithUs/>
      <BookedTour/>
      <Packages showTitle={false}/>
      <GetSupportBannser/>
    </>
  )
}

export default TourPlanner