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
    $(document).on('click', '[data-delete-id]', onClickDelete);
    $('#searchName').on('input', onInputChange);
    
    
    var tblteam = $("#tblteam");
    buildTbl();
    
    function onClickDelete() {
        var id = $(this).data('delete-id'),
            index = findMember(id);
        if (index > -1) {
            team.splice(index, 1);
            buildTbl();
        }
            
        
    } 
    
    function onInputChange() {
        var input = $(this);
        setTimeout(function(){
            var search = input.val();
            alert(search);    
        },3000);
    }
    
    
    function findMember(id) {
        var index = -1;
        for(var i=0; i<team.length; i++) {
            if (team[i].id === id){
                index = i;
                break;
            }
        }
        return index;
    }
     
     function buildTbl(){
        var html = '';
        
        for(var i=0; i<team.length; i++) {
        var member = team[i];
        html += '<div>' +
                    '<div>' + member.name + '</div>' + 
                    '<div>' + member.email + '</div>' + 
                    '<div> <button data-delete-id="' + member.id + '">Delete</button> <button>Edit</button> </td>' + 
                    '</div>';  
                    
      
    }
          tblteam.html(html);  
     }
}