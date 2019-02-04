/**
 * This class is responsible for building the directory of all employees.
 * @param {Array} - The JSON array of objects with all the employees.
 */
class Directory {
    constructor(data) {
        this.data = data;
    }
    /**
     * generateDirectory()
     * method that loops through all employees in the array
     */
    generateDirectory() {
        // Variable that will be used to create the template for employees
        let directory = '';
        this.data.forEach(function (element, index) {
            let newEmployee = new Employee(element, index);
            let createdEmployee = newEmployee.createEmployee();
            // At the end of the loop we concatenate the employees in the template
            directory += createdEmployee;
        });
        // We append the created template to the `#gallery` DOM node.
        $('#gallery').html(directory)
    }
}