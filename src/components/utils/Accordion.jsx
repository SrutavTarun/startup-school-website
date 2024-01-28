/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "../../styles/accordion.css"

function RightIcon({className}) {

	return <div className={"arrow p-2.5 rounded-full border-[2px] border-[#E0E0E0] " + className}>
		<svg className="w-3.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M20 11.4286H11.4286V20H8.57143V11.4286H0V8.57143H8.57143V0H11.4286V8.57143H20V11.4286Z" fill="#837F7F"/>
		</svg>
	</div>
}

function AccordionItem({question, answer, isOpen, onClick}) {
	const contentHeight = useRef();
	return (
		<div className="accordion_wrapper">
			<button
				className={`question-container ${isOpen ? "active" : ""}`}
				onClick={onClick}
			>
				<p className="question-content">{question}</p>
				<RightIcon className={isOpen ? "active" : ""}/>
			</button>

			<div
				ref={contentHeight}
				className="answer-container"
				style={
					isOpen
						? { height: contentHeight.current.scrollHeight }
						: { height: "0px" }
				}
			>
				<p className="answer-content">{answer}</p>
			</div>
		</div>
	);
}

function Accordion({data}) {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleItemClick = (index) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (<>
			{data.map((item, index) => (
				<AccordionItem
					key={index}
					question={item.question}
					answer={item.answer}
					isOpen={activeIndex === index}
					onClick={() => handleItemClick(index)}
				/>
			))}
        </>);
}

export default Accordion;
