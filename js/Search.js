/**
 * This class is responsible for searching the directory of all employees.
 * @param {Array} - The JSON array of objects with all the employees.
 */
class Search {
    constructor(data) {
        this.data = data;
    }
    /**
     * addSearch()
     * method that appends the search container to the page
     */
    addSearch() {
        let searchTemplate = '<input type="search" id="search-input" class="search-input" placeholder="Search...">'
        $('#search-container').append(searchTemplate);
    }
    /**
     * listFilter(query)
     * method used to filter the list using the input field
     * @param {String} query 
     */
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
        // We test to see if all the employees have been filtered.
        // We will use this to display a message on the page to let the user
        // know that there are no employees with that queried name.
        if ($('.filtered').length === totalEmployees) {
            // Now we test if there is already a "no employee with that name" 
            // message on the page 
            if ($('#empty-message').length > 0) {
                return
            }
            // The desired message to be shown on an empty search
            const emptyMessage = `
            <div id="empty-message">
                <h1>😓</h1>
                <h3>Oh noes!<br> There is no employee with the searched name!
                </h3>
            </div>
            `
            // We append the message
            $('#gallery').append(emptyMessage);
            // This conditional checks if the filtered employees is 
            // less than the total employees number
        } else if (($('.filtered').length <= totalEmployees)) {
            // If yes, then we remove the "no employee with that name" message
            $('#empty-message').remove();
        }
    }
}