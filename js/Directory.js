class Directory {
    constructor(data) {
        this.data = data;
    }
    generateDirectory() {
        let directory = '';
        // console.log("This is the 'this.data':");
        // console.log(this.data);
        this.data.forEach( function(element, index) {
            // console.log("This is the current key:");
            // console.log(element);
            // console.log("This is the current index: " + i);
            let newEmployee = new Employee(element, index);
            let createdEmployee = newEmployee.createEmployee();
            // console.log("This should be the HTML for the employee");
            // console.log(createdEmployee);
            directory += createdEmployee;
        });
        // }
        $('#gallery').html(directory)
        // return this.directory = directory;
    }
}