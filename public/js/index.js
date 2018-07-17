var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'josef',
        text: 'Hey. This is Josef'
    });
});

socket.on('disconnect', function () {
    console.log('Disonnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});