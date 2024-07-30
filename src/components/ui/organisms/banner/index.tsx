
function Banner() {
  return (
    <div className="w-full px-48 pt-24 bg-cover pb-14">
      <div className="flex">
        <div className="flex flex-col w-1/2 gap-6">
          <h1 className="font-black leading-tight text-h1 font-martel text-text">
            Help to reclaim your life and freedom
          </h1>
          <h4 className="font-medium tracking-tight text-second-text text-h4 font-montserrat">
            We know how large objects will act, but things on a
            small scale.
          </h4>
          <div>
            <button className="px-9 py-[10px] text-white rounded-full bg-secondary-2 text-btn-text font-open-sans font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner