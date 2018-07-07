$(onHtmlLoaded);

var team = [
    {
        id: 1,
        name: 'Andreea',
        email: 'andreea@gmail.com'
    },
    {
        id: 2,
        name: 'Andrei',
        email: 'andrei@gmail.com'
    }
    ];

function onHtmlLoaded() {
    
    for(var i=0; i<team.length; i++) {
        var member = team[i];
        var html = '<tr>' +
                    '<td>' + member.name + '</td>' +
                    '<td>' + member.email + '</td>' +
                    '<td> buttons </td>' +
                    '</tr>';
    }
}