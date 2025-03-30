import { FC, useMemo } from "react";
import { CheckboxType } from "../../types";

const Checkbox: FC<CheckboxType> = ({
  id,
  name,
  selected,
  children,
  handleTreeChange,
}) => {
  const childCheckBox = useMemo(() => {
    return (children || [])?.map((item) => {
      return (
        <Checkbox
          key={item.id}
          id={item.id}
          name={item.name}
          selected={item.selected}
          children={item.children}
          handleTreeChange={handleTreeChange}
        />
      );
    });
  }, [children, handleTreeChange]);

  return (
    <div className="checkboxContainer">
      <div className="checkbox">
        <input
          type="checkbox"
          name={name}
          data-id={id}
          checked={selected}
          onChange={() => handleTreeChange(id, !selected)}
        />
        <span>{name}</span>
      </div>
      {childCheckBox}
    </div>
  );
};

export default Checkbox;
