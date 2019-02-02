$(document).ready(function () {

    class Employee {
        // constructor(picture) {
        constructor(data, employeeNumber) {
            this.pictureId = data.results[employeeNumber].picture.large;
            this.firstName = data.results[employeeNumber].name.first;
            this.lastName = data.results[employeeNumber].name.last;
            this.email = data.results[employeeNumber].email;
            this.city = data.results[employeeNumber].location.city;
            this.state = data.results[employeeNumber].location.state;
            this.gender = data.results[employeeNumber].gender;
            this.employeeTemplate = '';
        }
        createEmployee() {
            this.employeeTemplate = '<div class="card">';
            let employeePicture = `
                <div class="card-img-container">
                    <img class="card-img" src="${this.pictureId}" alt="profile picture">
                </div>
                `
            this.employeeTemplate += employeePicture;
            let employeeInfo = '<div class="card-info-container">';
            let employeeInfoDetails = `
            <h3 id="name" class="card-name cap">first last</h3>
                <p class="card-text">email</p>
            <p class="card-text cap">city, state</p>
            `



            this.employeeTemplate += '</div>';
            // return employeePicture;
            return this.employeeTemplate;
        }
        greet() {
            return `${this.pictureId} says hello.`;
        }
        appendEmployee() {
            $('#gallery').html(this.createEmployee());
        }
    }

    // let generatedEmployees = `
    //        <div class="card">
    //         <div class="card-img-container">
    //             <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
    //         </div>
    //         <div class="card-info-container">
    //             <h3 id="name" class="card-name cap">first last</h3>
    //             <p class="card-text">email</p>
    //             <p class="card-text cap">city, state</p>
    //         </div>
    //     </div>
    // `
    $.ajax({
        url: 'https://randomuser.me/api/?results=12&?nat=us,de,fr,gb,br',
        dataType: 'json',
        success: function (data) {
            // console.log(data.results);
            // let employee1 = new Employee(data.results.picture.large);
            // $('#gallery').html(employee1.createEmployee());
            let thisData = data.results;
            console.log(thisData);
            let emp1 = new Employee(data, 0);
            // console.log(emp1.greet());
            console.log(emp1);
            emp1.appendEmployee();
            // console.log(emp1.createEmployee());
            // console.log(data.results, 0);
        }
    });

});
