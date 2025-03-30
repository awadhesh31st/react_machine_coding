export interface CheckboxTreeType{
	id: number;
	name: string;
	selected: boolean;
	children?: CheckboxTreeType[]
}

export interface CheckboxType extends CheckboxTreeType{
	handleTreeChange: (index: number, status: boolean) => void;
}