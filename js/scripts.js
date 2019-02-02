$(document).ready(function () {
    $.ajax({
        url: 'https://randomuser.me/api/?results=12&?inc=id&?nat=us,de,fr,gb,br',
        dataType: 'json',
        success: function (data) {
            let thisData = data.results;
            console.log(thisData);
            let emp1 = new Employee(data, 0);
            console.log(emp1);
            emp1.appendEmployee();
        }
    });

});