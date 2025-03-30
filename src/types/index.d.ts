export interface CheckboxTreeType{
	id: number;
	name: string;
	selected: boolean;
	children?: CheckboxTreeType[]
}

export interface CheckboxType{
	data: CheckboxTreeType;
	handleTreeChange: (index: number, status: boolean) => void;
}