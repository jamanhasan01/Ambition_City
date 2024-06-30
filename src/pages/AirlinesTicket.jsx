import Accommodation from '../components/Accommodation/Accommodation'
import BookedTour from '../components/BookedTour/BookedTour'
import GetSupportBannser from '../components/GetSupportBanner/GetSupportBannser'
import Packages from '../components/Packages/Packages'
import TicketForm from '../components/TicketForm/TicketForm'
import TourPlanWithUs from '../components/TourPlanWithUs/TourPlanWithUs'

const AirlinesTicket = () => {
  return (
    <>
      <TourPlanWithUs title="Book Your Flight"/>
      <BookedTour/>
      <TicketForm/>
      <Accommodation/>
      <Packages showManu={false}/>
      <GetSupportBannser/>
    </>
  )
}

export default AirlinesTicket