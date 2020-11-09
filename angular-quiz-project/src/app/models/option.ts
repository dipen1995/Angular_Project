export class Option {
    id: number;   
    name: string;
    isSelected: boolean;
    selected: boolean;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;     
        this.name = data.name;
        this.isSelected = data.isSelected;
    }
}
