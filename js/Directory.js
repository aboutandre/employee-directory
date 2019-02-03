class Directory {
    constructor(data) {
        this.data = data;
    }
    generateDirectory() {
        let directory = '';
        this.data.forEach( function(element, index) {
            let newEmployee = new Employee(element, index);
            let createdEmployee = newEmployee.createEmployee();
            directory += createdEmployee;
        });
        // }
        $('#gallery').html(directory)
    }
}