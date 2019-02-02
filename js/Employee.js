class Employee {
    constructor(data, employeeNumber) {
        this.pictureId = data.results[employeeNumber].picture.large;
        this.employeeId = data.results[employeeNumber].id.name;
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
        <h3 id="employee-id-${this.employeeId}" class="card-name cap">${this.firstName} ${this.lastName}</h3>
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