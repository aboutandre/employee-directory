class Search {
    constructor(data) {
        this.data = data;
    }
    addSearch() {
        let searchTemplate = `
        <form action="#" method="get">
            <input type="search" id="search-input" class="search-input" placeholder="Search...">
        </form>
        `
        $('#search-container').append(searchTemplate);
    }

    listFilter(query) {
        // If we have a filter query
        if (query) {
            // This finds all the students that contain the value in the filter and show them
            $(".card-name:not(:contains(" + query + "))").closest('.card').addClass('filtered').hide();
            // While hiding all the others that do not match the query
            $(".card-name:contains(" + query + ")").closest('.card').removeClass('filtered').show();
            // else, if the filter is empty
        } else {
            $(".card-name:contains(" + query + ")").closest('.card').removeClass('filtered').show();
        }
        if ($('.filtered').length === totalEmployees) {
            if ($('#empty-message').length > 0) {
                return
            }
            const emptyMessage = `
            <div id="empty-message">
                <h1>😓</h1>
                <h3>Oh noes!<br> There is no employee with the searched name!
                </h3>
            </div>
            `
            $('#gallery').append(emptyMessage);
        } else if (($('.filtered').length !== totalEmployees)) {
            $('#empty-message').remove();
        }
    }
}