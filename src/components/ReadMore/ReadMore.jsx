import { useState } from "react";

function ReadMore({ text, maxLength = 200 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded((prev) => !prev);

  const displayedText = isExpanded
    ? text
    : `${text.substring(0, maxLength)}...`;

  return (
    <div>
      <p className="whitespace-pre-line">{displayedText}</p>
      <button className="bg-green-800" onClick={toggleReadMore}>
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}

export default ReadMore;
