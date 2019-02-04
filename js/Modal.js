/**
 * Class to create a modal based on the selected user
 */
class Modal {
    /**
     * Constructor accepts one parameter and that is the number of the selected employee
     * With this number we can create the modal, based on the employee data.
     * @param {Object} employeeNumber 
     */
    constructor(employeeNumber) {
        this.employeeNumber = employeeNumber;
        this.employeePicture = employeeData[this.employeeNumber].picture.large;
        this.employeeFirstName = employeeData[this.employeeNumber].name.first;
        this.employeeLastName = employeeData[this.employeeNumber].name.last;
        this.employeeEmail = employeeData[this.employeeNumber].email;
        this.employeeCity = employeeData[this.employeeNumber].location.city;
        this.employeeStreet = employeeData[this.employeeNumber].location.street;
        this.employeeState = employeeData[this.employeeNumber].location.state;
        this.employeePostcode = employeeData[this.employeeNumber].location.postcode;
        this.employeeCell = employeeData[this.employeeNumber].cell;
        this.employeeDob = employeeData[this.employeeNumber].dob.date;
    }
    /**
     * createModal()
     * Method that accepts all the data from the object and populates the template
     * if the corresponding employee data
     */
    createModal() {
        let modalTemplate = ` 
        <div class="modal-container" id="${this.employeeNumber}">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                <img class="modal-img" src="${this.employeePicture}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${this.employeeFirstName} ${this.employeeLastName}</h3>
                <p class="modal-text">${this.employeeEmail}</p>
                <p class="modal-text cap">${this.employeeCity}</p>
                <hr>
                <p class="modal-text">${this.employeeCell}</p>
                <p class="modal-text cap">${this.employeeStreet}, ${this.employeeState}, ${this.employeePostcode}</p>
                <p class="modal-text">Birthday: ${this.dobFormatter(this.employeeDob)}</p>
            </div>
        </div>

        <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn">Next</button>
        </div>
        `
        // At the end we append the modal to the body
        $('body').append(modalTemplate);

    }
    /**
     * We beautify the data from the date of birthday received by the API
     * @param {return} formattedDob 
     */
    dobFormatter(dob) {
        let formattedDob = dob.replace(/T.*$/gm, '');
        return formattedDob;
    }
}