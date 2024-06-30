import React from 'react'
import ContactForSupport from '../components/ContactForSupport/ContactUs'
import ContactForm from "../components/ContactForm/ContactForm"
import VisitOfficeBanner from '../components/visitOfficeBanner/VisitOfficeBanner'
import GetSupportBannser from '../components/GetSupportBanner/GetSupportBannser'

const ContactUs = () => {
  return (
    <>
      <ContactForSupport/>
      <ContactForm/>
      <VisitOfficeBanner/>
      <GetSupportBannser/>
    </>
  )
}

export default ContactUs