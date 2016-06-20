/**
 * Created by katrna on 18/06/16.
 */
function getChamp() {
    $.get( "drivers.json", function( data ) {
        console.log(data);
        var allDrivers = "";
        for(var i = 0; i < data.drivers.length; i++) {
            allDrivers += " " + data.drivers[i].name
        //    console.log(data.drivers[i]['name']);
        }
        console.log(allDrivers);
        $( ".drivers" ).html( "<p>"+allDrivers+"</p>" );
    });
}