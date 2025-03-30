import { useState } from "react";
import { CheckboxTreeType } from "../../types";
import { CheckboxTreeData } from "../../context/CheckboxTreeData";
import Checkbox from "./Checkbox";


const CheckboxTree = () => {
  const [dataSet, setDataSet] = useState<CheckboxTreeType[]>(CheckboxTreeData);

	const handleTreeChange = (keyIndex: number, keyStatus: boolean) => {
		const changeTree = (data: CheckboxTreeType[], index: number, status: boolean): CheckboxTreeType[] => {
			return data?.map((item: CheckboxTreeType) => {
				if(item.id === index){
					return {
						...item,
						selected: status,
						children: updateChildTree(item?.children || [], status)
					}
				}
				const updateChild = changeTree(item?.children || [], index, status) || [];
				const allChildChecked = updateChild?.length > 0  && updateChild?.every((child: CheckboxTreeType) => child.selected);
				return {
					...item,
					selected: updateChild?.length > 0 ? allChildChecked : item.selected,
					children: updateChild
				}
			})
		}

		const updateChildTree = (childData: CheckboxTreeType[], presentStatus: boolean): CheckboxTreeType[] => {
			return childData?.map((child: CheckboxTreeType) => {
					return {
						...child,
						selected: presentStatus,
						children: updateChildTree(child?.children || [], presentStatus)
					}
			})
		}

		const updateDateSetTree: CheckboxTreeType[] = changeTree(dataSet, keyIndex, keyStatus);
		setDataSet(updateDateSetTree);
	}

  return (
    <div className="checkboxTreeContainer">
      {(dataSet || [])?.map((item) => {
        return (
          <Checkbox
            key={item.id}
            data={item}
						handleTreeChange={handleTreeChange}
          />
        );
      })}
    </div>
  );
};

export default CheckboxTree;
