let employeeData = '';
let totalEmployees = '';
let newSearch = '';

const openModal = function () {
    $(document).on('click', '.card', function () {
        let employeeNumber = $(this).data('employee-number');
        console.log("Card was clicked");
        console.log(employeeNumber);
        createModal(employeeNumber);
    });
};

// Make jQuery :contains Case-Insensitive - via "https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/"
$.expr[":"].contains = $.expr.createPseudo(function (arg) {
    return function (elem) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

const createModal = function (employeeNumber) {
    let newModal = new Modal(employeeNumber);
    newModal.createModal();
};

const search = function () {
    $(document).on('change paste keyup', '#search-input', function () {
        let filter = $(this).val();
        newSearch.listFilter(filter);
    })
};


const destroyModal = function (modal) {
    $(modal).closest('.modal-container').remove();
};

const modalPrev = function () {
    $(document).on('click', '#modal-prev', function () {
        let employeeNumber = $(this).closest('.modal-container').attr('id');
        if (employeeNumber <= 0) {
            return
        }
        destroyModal($(this));
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