  var socket = io();
  // socket.on('connect', function() {
  //   console.log('conn to server');
  // });

  $('#ottelu-lomake').on('submit', function(e) {
    e.preventDefault();

    socket.emit('lisaaOttelu', {
      hometeam: $('#hometeam').val(),
      awayteam: $('#awayteam').val(),
      homegoals: $('#homegoals').val(),
      awaygoals: $('#awaygoals').val(),
      homeposession: $('#homeposession').val(),
      awayposession: $('#awayposession').val(),
      homeshotsont: $('#homeshotsont').val(),
      awayshotsont: $('#awayshotsont').val(),
      homeshots: $('#homeshots').val(),
      awayshots: $('#awayshots').val(),
      homeredcards: $('#homeredcards').val(),
      awayredcards: $('#awayredcards').val()
    }, function () {
      // lisää
    });
  });
