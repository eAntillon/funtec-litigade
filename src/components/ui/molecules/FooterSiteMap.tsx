const cols = [
  {
    title: "Company Info",
    sites: ["About Us", "Carriers", "We are hiring", "Blog"]
  }, {
    title: "Legal",
    sites: ["About Us", "Carriers", "We are hiring", "Blog"]
  }, {
    title: "Features",
    sites: ["Business Address", "User Analytic", "Live Chat", "Unlimited Support"]
  }, {
    title: "Resources",
    sites: ["IOS & Android", "Wath a Demo", "Customers", "API"]
  }
]


function FooterSiteMap() {
  return (
    <div className="w-full py-16 pb-0 lg:pb-16">
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        <div className="flex flex-col gap-16 sm:flex-row">
          {cols.map((col, index) => (
            <div key={index} className="flex flex-col gap-5">
              <h5 className="font-bold text-h5 font-martel text-light-text">{col.title}</h5>
              <div className="flex flex-col gap-2">
                {col.sites.map((site, index) => (
                  <a key={index} href="#" className="font-semibold text-link text-light-text lg:text-muted hover:text-primary">{site}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <h5 className="mb-5 font-bold text-h5 font-martel text-light-text">Get In Touch</h5>
          <div className="flex border rounded-md">
            <input type="text" name="" id="" placeholder="Your Email" className="w-2/3 px-5 py-4 rounded-l-md text-second-text" />
            <button className="flex-1 px-5 py-4 text-white bg-primary hover:bg-primary/90 ">
              Subscribe
            </button>
          </div>
          <p className="mt-2 text-link text-muted">Lorem impsum dolor amit</p>
        </div>
      </div>

    </div>
  )
}

export default FooterSiteMap