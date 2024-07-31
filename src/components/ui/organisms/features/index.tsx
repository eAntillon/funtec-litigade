import SectionTitle from "../../atoms/SectionTitle"
import FeatureCard from "../../molecules/FeatureCard"

const descriptions = {
  frauds: [
    "The best products start with Figma",
    "Design with real data",
    "Lightning fast prototyping",
    "Fastest way to organize  ",
    "Work at the speed of thought."
  ],
  bailes: [
    "The best products start with Figma",
    "Design with real data",
    "Lightning fast prototyping",
    "Fastest way to organize  ",
    "Work at the speed of thought."
  ],
  federal: [
    "The best products start with Figma",
    "Design with real data",
    "Lightning fast prototyping",
    "Fastest way to organize  ",
    "Work at the speed of thought."
  ]
}

function Features() {
  return (
    <div className="flex flex-col items-center justify-between w-full px-5 py-20 md:px-14 lg:px-28 xl:px-48">
      <SectionTitle title="Practice Advice" description="Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <FeatureCard title="Frauds or Mislead" description={descriptions.frauds} image="ic:twotone-balance" />
        <FeatureCard title="Bailes & Warrants" description={descriptions.frauds} image="fluent:gavel-20-regular" />
        <FeatureCard title="Federal Drug Crimes" description={descriptions.frauds} image="fluent:tasks-app-28-regular" />
      </div>
    </div>
  )
}

export default Features