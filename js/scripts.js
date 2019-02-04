/**
 * Global variables that need to be accessed from inside other functions
 */

let employeeData = '';
let totalEmployees = '';
let newSearch = '';
let newModal = '';

/**
 * openModal()
 * @template - Function that opens the modal for the employee that was clicked
 */
const openModal = function () {
    $(document).on('click', '.card', function () {
        // We fetch the employee number that was stored in the `data-employee-number` attribute
        let employeeNumber = $(this).data('employee-number');
        // The number is used to create a modal with the corresponding data
        createModal(employeeNumber);
    });
};

// Make jQuery :contains Case-Insensitive - via "https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/"
$.expr[":"].contains = $.expr.createPseudo(function (arg) {
    return function (elem) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
/**
 * createModal()
 * @param {number} - The employee number
 * Function that creates a modal with the passed employee number
 */
const createModal = function (employeeNumber) {
    newModal = new Modal(employeeNumber);
    newModal.createModal();
};

/**
 * search()
 * @return {string} - Return queried string
 * Calls the method `listFilter` with the passed query into the Search class
 */
const search = function () {
    $(document).on('change paste keyup', '#search-input', function () {
        let filter = $(this).val();
        newSearch.listFilter(filter);
    })
};

/**
 * destroyModal()
 * Function that will remove the modal for the passed object
 */
const destroyModal = function () {
    newModal.destroyModal();
};

/**
 * Function that will navigate inside the modal window to the previous employee
 */
const navigateModal = function () {
    $(document).on('click', '#modal-next', function () {
        newModal.navigateNextEmployee();
    });
    $(document).on('click', '#modal-prev', function () {
        newModal.navigatePreviousEmployee();
    });
};

/**
 * Function to close the modal
 */
const closeModal = function () {
    // Listener to see if the "#modal-close-btn" has been clicked
    $(document).on('click', '#modal-close-btn', function () {
        // If yes, destroy the current modal
        destroyModal();
    });
    // Listener to see if the "Escape" key has been pressed.
    $(document).keydown(function (e) {
        if (e.which === 27) {
            // Doing so will destroy the modal
            destroyModal();
        }
    });
};
/**
 * When the document is ready we call all the functions we need
 */
$(document).ready(function () {
    // Random User API call
    $.ajax({
        // We request 12 users from the USA, Germany, France, Great Britain and Brazil
        url: 'https://randomuser.me/api/?results=12&nat=us,de,fr,gb,br',
        // The data type that we want is JSON
        dataType: 'json',
        success: function (data) {
            // Function to deal with the received data results
            useReturnData(data.results)

        }
    });
    // When we receive the data we set multiple variables, create objects and run methods
    function useReturnData(data) {
        // We set the global "employeeData" variable to the received data from the AJAX call
        employeeData = data;
        // Its useful to know how many employees we receive.
        // Currently its 12 and we could hardcode the value here.
        // But doing like this makes the application more flexible
        totalEmployees = employeeData.length;
        // We create a new Directory using the Directory class and pass the received server data to it
        let newDirectory = new Directory(data);
        // We call the "generateDirectory()" method that will create all the employees with the received data
        newDirectory.generateDirectory();
        // We create a new search element
        newSearch = new Search(data);
        // And call the method on it to append it to the DOM
        newSearch.addSearch();
    };

    // We call all the functions we need when the document is ready
    openModal();
    closeModal();
    navigateModal();
    search();
});