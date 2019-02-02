$(document).ready(function () {
    $.ajax({
        url: 'https://randomuser.me/api/?results=12&?inc=id&?nat=us,de,fr,gb,br',
        dataType: 'json',
        success: function (data) {
            let thisData = data.results;
            // console.log("This is data we get from the API: ");
            // console.log(thisData);
            let newDirectory = new Directory(thisData);
            newDirectory.generateDirectory();
            // let emp1 = new Employee(data, 0);
            // console.log(emp1);
            // console.log('This is the data in Directory: ' + blob);
            // emp1.appendEmployee();
            // $('#gallery').html(blob.directory);
        }
    });

});