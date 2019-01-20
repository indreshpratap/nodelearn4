$(function () {
    var socket = io('/', { path: '/chat/socket.io' });
    var name = prompt('What is your name?');
    $('#name').text(name);
    var $msgBox = $('#messages');
    var $typing = $('#typing');
    socket.on('get-message', (data) => {
        // console.log(data);
        $typing.text('');
        $msgBox.append('<p> <strong>' + data.name + ': </strong>' + data.text + "</p>");
    });

    socket.on('typing', (data) => {
        // console.log(data);
        $typing.text(data.name + " is typing..");
    });

    var $msg = $('#msg');
    $('#chat-form').on('submit', (ev) => {
        ev.preventDefault();
        var text = $msg.val();
        socket.emit('post-message', { name: name, text: text });
        $msg.val('');
    });

    $msg.on('keypress', () => {
        socket.emit('typing', { name: name });
    })
});