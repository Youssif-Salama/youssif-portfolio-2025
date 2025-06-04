import SectionHead from "../../features/SectionHead"
import {GlowEffectCardBackground } from "./features/ContactFeatures"

const Contact = () => {
  return (
    <section className="min-h-screen pt-8 relative" id="contact">
      <SectionHead title="Contact" />
      <div className="min-h-[70vh] flex items-center justify-center">
<GlowEffectCardBackground/>
      </div>
    </section>
  )
}

export default Contact
