import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, i) => {
    const active = i === activeIndex ? "active" : "";

    return (
      <React.Fragment key={i}>
        <div onClick={() => onTitleClick(i)} className={`title ${active}`}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className='ui styled accordion'>{renderedItems}</div>;
};

export default Accordion;
