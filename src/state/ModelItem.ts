export class ModelItem {
    public value: string = '';
    public current = false;
    public eliminated = false;

    constructor(value?: string) {
        if (value) this.value = value;
    }
}
