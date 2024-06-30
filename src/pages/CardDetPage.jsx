import React from 'react'
import PackageDetail from '../components/PackageDetail'
import CustomerReview from '../components/CustomerReview/CustomerReview'
import CardPackagesInfo from '../components/CardPackagesInfo/CardPackagesInfo'

const CardDetPage = () => {
  return (
    <>
      <PackageDetail/>
      <CustomerReview/>
      <CardPackagesInfo/>
    </>
  )
}

export default CardDetPage