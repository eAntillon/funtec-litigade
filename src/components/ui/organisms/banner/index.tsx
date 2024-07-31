import AppointmentForm from "../../molecules/AppointmentForm"
import BannerHeader from "../../molecules/BannerHeader"

function Banner() {
  return (
    <div className="w-full px-5 pt-24 bg-cover lg:px-24 xl:px-48 pb-14">
      <div className="flex flex-col items-center justify-between gap-12 mt-12 lg:flex-row">
        <BannerHeader />
        <AppointmentForm />
      </div>
    </div>
  )
}

export default Banner