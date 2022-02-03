export default class Options {
    Morty: boolean;
    Rick: boolean;

    constructor(filter: string[]) {
        this.Rick = !!filter.find((f: string) => f === "Rick");
        this.Morty = !!filter.find((f: string) => f === "Morty");
    }

    private setOption(option: OPTION_TYPE) {
        this[option] = !this[option]
    }

    public getCloned(optionType: OPTION_TYPE) {
        const filter = [];
        if (this.Rick)
            filter.push("Rick")
        if (this.Morty)
            filter.push("Morty")
        const cloned = new Options(filter)
        cloned.setOption(optionType);
        return cloned;
    }

}

export enum OPTION_TYPE {
    Rick = "Rick",
    Morty = "Morty"
}