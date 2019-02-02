import $ from 'jquery';

$(document).ready(function () {

    class Employee {
        constructor(picture) {
            // constructor(picture, firstName, lastName, email, city, state, gender: male) {
            this.pictureId = picture;
            // this.firstName = firstName;
            // this.lastName = lastName;
            // this.email = email;
            // this.city = city;
            // this.state = state;
            // this.gender = gender;
            // this.employeeTemplate = employeeTemplate;
        }
        createEmployee () {
            // let employeeCard = '<div class="card">';
            let employeePicture = `
         <div class="card-img-container">
            <img class="card-img" src="${this.pictureId}" alt="profile picture">
        </div>
        `
            // return employeePicture;
            // return this.employeeTemplate = employeePicture;
        }
        greet() {
            // return `${this.pictureId} says hello.`;
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
        url: 'https://randomuser.me/api/?results=12&?nat=us,de,fr,gb,br&?gender=male',
        dataType: 'json',
        success: function(data) {
            // console.log(data.results);
            // let employee1 = new Employee(data.results.picture.large);
            // $('#gallery').html(employee1.createEmployee());
            let thisData = data.results;

            // let emp1 = new Employee(data.results[0].picture.large);
            // emp1.createEmployee();
            // console.log(emp1.createEmployee());
            console.log(data.results[0].picture.large);
        }
    });

});
