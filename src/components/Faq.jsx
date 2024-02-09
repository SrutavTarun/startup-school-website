import "../styles/faq.css"
import Accordion from "./utils/Accordion.jsx";
import faqData from "../data/faqData.js";

export default function Faq() {
  return (
  <>
    <h1 className="h1_font" id="faq">FAQ</h1>
    <h2 className="h2_font">Learn more about us</h2>
    <br/>
    <section>
      <Accordion data={faqData}/>
    </section>
  </>
  )
}

