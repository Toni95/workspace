var persons = [
    {
    name: 'Tina',
    gender: 'F',
    weight: '1.60',
    height: '50'
    },
    
    {
    name: 'Turner',
    gender: 'M',
    weight: '1.70',
    height: '90'
    },
    
    {
    name: 'Toni',
    gender: 'M',
    weight: '1.50',
    height: '50'
    },
    
    {
    name: 'Ioan',
    gender: 'M',
    weight: '1.70',
    height: '70'
    }
    
];

for(var i=0; i<persons.length; i++) {
    var person = persons[i],
        bmi = person.weight / (person.height * person.height);
        
    console.log(person.name + '|' + person.gender + '|' + bmi);
}