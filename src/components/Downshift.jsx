import React from "react";
import Downshift from "downshift";

export const DownshiftExample = () => {
  const items = [
    { value: "value1", id: "id1" },
    { value: "value2", id: "id2" },
    { value: "value3", id: "id3" },
  ];

  const itemToString = (item) => (item.value ? item.value : "");
  return (
    <div>
      <h1>Downshift Example</h1>
      <div>
        <Downshift itemToString={itemToString}>
          {({
            getLabelProps,
            getInputProps,
            getMenuProps,
            getItemProps,
            getToggleButtonProps,
            isOpen,
            highlightedIndex,
          }) => (
            <div>
              <label {...getLabelProps()}> Test Screen Reader</label>

              <input
                readOnly={true}
                placeholder="select"
                {...getInputProps()}
              ></input>
              <button {...getToggleButtonProps()}>
                {isOpen ? "Close Menu" : "Open Menu"}
              </button>

              <ul {...getMenuProps()}>
                {isOpen
                  ? items.map((item, i) => (
                      <li
                        key={item.id}
                        {...getItemProps({
                          item,
                          key: item.id,
                          style: {
                            backgroundColor:
                              highlightedIndex === i ? "green" : "blue",
                          },
                        })}
                      >
                        {item.value}
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          )}
        </Downshift>
      </div>
    </div>
  );
};
