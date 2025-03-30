import { FC, useMemo } from "react";
import { CheckboxType } from "../../types";

const Checkbox: FC<CheckboxType> = ({
 data,
  handleTreeChange,
}) => {
  const { id, name, selected, children } = data
  const allChildrenSelected = (children || [])?.length > 0 && (children || [])?.every(child => child.selected);
  const anyChildSelected = (children || [])?.some(child => child.selected) && !allChildrenSelected;

  const childCheckBox = useMemo(() => {
    return (children || [])?.map((item) => {
      return (
        <Checkbox
          key={item.id}
          data={item}
          handleTreeChange={handleTreeChange}
        />
      );
    });
  }, [children, handleTreeChange]);

  return (
    <div className="checkboxContainer">
      <div className="checkbox">
        <input type="checkbox" name={name} data-id={id} checked={selected} onChange={() => handleTreeChange(id, !selected)}/>
        <span className={`${anyChildSelected ? 'text-amber-500' : 'text-green-500'}`}>{name}</span>
      </div>
      {childCheckBox}
    </div>
  );
};

export default Checkbox;
