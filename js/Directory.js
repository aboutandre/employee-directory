class Directory {
    constructor(data) {
        this.data = data;
    }
    generateDirectory() {
        let directory;
        for (let key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                let employee = new Employee(this.data)
            }
        }
    }
}