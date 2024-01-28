import "../styles/faq.css"
import Accordion from "./utils/Accordion.jsx";
import faqData from "../data/faqData.js";

export default function Faq() {
  return (
  <>
    <h1 className="text-center text-ttOrange h1_font font-semibold">FAQ</h1>
    <h2 className="text-center h2_font font-bold mx-24 ">Learn more about through us FAQ</h2>
    <br/>
    <section>
      <Accordion data={faqData}/>
    </section>
  </>
  )
}

