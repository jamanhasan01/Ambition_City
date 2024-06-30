import React from 'react'
import StoryMission from '../components/StoryMission/StoryMission'
import AboutSec from "../components/AboutSec/AboutSec"
import QualityPolicy from '../components/QualityPolicy/QualityPolicy'
import Team from '../components/Team/Team'
import ChooseUs from '../components/ChooseUs/ChooseUs'
import GetSupportBannser from '../components/GetSupportBanner/GetSupportBannser'

const AboutUs = () => {
  return (
    <>
      <StoryMission/>
      <AboutSec/>
      <QualityPolicy/>
      <Team/>
      <ChooseUs/>
      <GetSupportBannser/>
    </>
  )
}

export default AboutUs