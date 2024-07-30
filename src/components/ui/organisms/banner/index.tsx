import AppointmentForm from "../../molecules/AppointmentForm"
import BannerHeader from "../../molecules/BannerHeader"

function Banner() {
  return (
    <div className="w-full px-48 pt-24 bg-cover pb-14">
      <div className="flex items-center justify-between mt-12">
        <BannerHeader />
        <AppointmentForm />
      </div>
    </div>
  )
}

export default Banner