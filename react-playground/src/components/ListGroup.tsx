import { useState } from "react";

interface Props {
  items: string[];
  heading: string;

}

function ListGroup({items, heading}: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              key={item}
              className={
                selectedIndex === index
                  ? `list-group-item active`
                  : `list-group-item`
              }
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
