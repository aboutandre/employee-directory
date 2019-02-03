let employeeData = '';
let totalEmployees = '';

const openModal = function () {
    $(document).on('click', '.card', function () {
        let employeeNumber = $(this).data('employee-number');
        console.log("Card was clicked");
        console.log(employeeNumber);
        createModal(employeeNumber);
    });
};

const createModal = function (employeeNumber) {
    let newModal = new Modal(employeeNumber);
    newModal.createModal();
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
        // url: 'https://randomuser.me/api/?inc=id,dob,picture,name,email,location,cell&results=12&nat=us,de,fr,gb,br',
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
        console.log(employeeData);
    };

    openModal();
    closeModal();
    modalPrev();
    modalNext();
});