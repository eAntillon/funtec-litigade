import { Icon } from "@iconify/react/dist/iconify.js";

function FooterSocialMedia() {
  return (
    <div className="flex gap-5 ">
      <button className="group">
        <Icon
          icon="fe:facebook"
          className="w-6 h-6 text-[#335BF5] hover:text-[#335BF5]/50"
        />
      </button>
      <button className="group">
        <Icon
          icon="fe:instagram"
          className="w-6 h-6 text-[#E51F5A] hover:text-[#E51F5A]/50"
        />
      </button>
      <button className="group">
        <Icon
          icon="fe:twitter"
          className="w-6 h-6 text-[#21A6DF] hover:text-[#21A6DF]/50"
        />
      </button>
      <button className="group">
        <Icon
          icon="fe:youtube"
          className="w-6 h-6 text-[#E42F08] hover:text-[#E42F08]/50"
        />
      </button>
    </div>
  );
}

export default FooterSocialMedia;
