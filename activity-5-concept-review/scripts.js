var hotels = [];

function Hotel (name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function (){
        return this.rooms - this.booked;
    };
}

var init = function() {

    hotels.push(new Hotel('Hilton', 200, 150));
    hotels.push(new Hotel('Pfister', 100, 50));
    hotels.push(new Hotel('Days Inn', 150, 140));

    var today = new Date();
    document.getElementById('date').textContent = today.getFullYear();
};

var hotelClick = function (event){
    var hotelName = event.target.innerHTML;

    var hotel = hotels.find(function(hotel) {return hotel.name == hotelName});
    if (hotel !== undefined){
        var name = document.getElementById('name');
        name.textContent = hotel.name;

        var rooms = document.getElementById('rooms');
        rooms.textContent = hotel.rooms;

        var booked = document.getElementById('booked');
        booked.textContent = hotel.booked;

        document.getElementById('available').textContent = hotel.checkAvailability();
    }
};

var list = document.getElementById('hotel-list');
list.onclick = hotelClick;

init();

