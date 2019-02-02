const openModal = function () {
    $(document).on('click', '.card', function () {
        let employeeNumber = $(this).data('employee-number');
        console.log("Card was clicked");
        console.log(employeeNumber);
        let newModal = new Modal(employeeNumber);
        let modal = newModal.createModal();

        $('body').append(modal);

    });
};

const closeModal = function () {

    $(document).on('click', '#modal-close-btn', function () {
        $(this).closest('.modal-container').remove();
    });

    $(document).keydown(function (e) {
        if (e.which === 27) {
            $('.modal-container').remove();
        }
    });
};

let employeeData = '';

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
        let newDirectory = new Directory(data);
        newDirectory.generateDirectory();
        console.log(employeeData);
    };

    let modal = `
    <div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>

    <div class="modal-btn-container">
        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" id="modal-next" class="modal-next btn">Next</button>
    </div>
</div>
    `
    // $('body').append(modal);
    openModal();
    closeModal();
});