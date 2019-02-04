/**
 * Global variables that need to be accessed from inside other functions
 */

let employeeData = '';
let totalEmployees = '';
let newSearch = '';

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
    let newModal = new Modal(employeeNumber);
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
 * destroyModal(modal)
 * @param {object} modal
 * Function that will remove the modal for the passed object
 */
const destroyModal = function (modal) {
    $(modal).closest('.modal-container').remove();
};

/**
 * Function that will navigate inside the modal window to the previous element
 */
const modalPrev = function () {
    $(document).on('click', '#modal-prev', function () {
        let employeeNumber = $(this).closest('.modal-container').attr('id');
        // Conditional to check if we are already in the last item/employee
        if (employeeNumber <= 0) {
            return
        }
        // If we are not we destroy the current modal
        destroyModal($(this));
        // We subtract the current employee number
        employeeNumber = parseInt(employeeNumber) - 1;
        createModal(employeeNumber);
    });
};

const modalNext = function () {
    $(document).on('click', '#modal-next', function () {
        let employeeNumber = $(this).closest('.modal-container').attr('id');
        if (employeeNumber >= totalEmployees - 1) {
            return
        }
        employeeNumber = parseInt(employeeNumber) + 1;
        destroyModal($(this));
        createModal(employeeNumber);
    });
};

const closeModal = function () {

    $(document).on('click', '#modal-close-btn', function () {
        destroyModal($(this));
    });

    $(document).keydown(function (e) {
        if (e.which === 27) {
            $('.modal-container').remove();
        }
    });
};

$(document).ready(function () {
    $.ajax({
        url: 'https://randomuser.me/api/?results=12&nat=us,de,fr,gb,br',
        dataType: 'json',
        success: function (data) {
            useReturnData(data.results)

        }
    });

    function useReturnData(data) {
        employeeData = data;
        totalEmployees = employeeData.length;
        let newDirectory = new Directory(data);
        newDirectory.generateDirectory();
        newSearch = new Search(data);
        newSearch.addSearch();
        console.log(employeeData);
    };

    openModal();
    closeModal();
    modalPrev();
    modalNext();
    search();
});