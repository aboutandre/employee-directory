    class Employee {
        constructor(data, index) {
            this.pictureId = data.picture.large;
            this.employeeId = index;
            this.firstName = data.name.first;
            this.lastName = data.name.last;
            this.email = data.email;
            this.city = data.location.city;
            this.state = data.location.state;
            this.gender = data.gender;
            this.employeeTemplate = '';
        }
        createEmployee() {
            this.employeeTemplate = `<div class="card" data-employee-number="${this.employeeId}">`;
            let employeePicture = `
                <div class="card-img-container">
                    <img class="card-img" src="${this.pictureId}" alt="profile picture">
                </div>
                `
            this.employeeTemplate += employeePicture;
            let employeeInfo = '<div class="card-info-container">';
            let employeeInfoDetails = `
            <h3 class="card-name cap">${this.firstName} ${this.lastName}</h3>
                <p class="card-text">${this.email}</p>
            <p class="card-text cap">${this.city}, ${this.state}</p>
            `
            this.employeeTemplate += employeeInfo;
            this.employeeTemplate += employeeInfoDetails;
            this.employeeTemplate += '</div></div>';
            return this.employeeTemplate;
        }
        greet() {
            return `${this.pictureId} says hello.`;
        }
        appendEmployee() {
            $('#gallery').html(this.createEmployee());
        }
    }