var contacts = [
    {
        id:1,
        firstName: 'Jan',
        lastName: 'Kowalski',
        email: 'jan.kowalski@gmail.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@example.com',
    },
    {
        id: 3,
        firstName: 'Zbigniew',
        lastName: 'Koziol',
        email: 'zbigniew.koziol@example.com',
    }
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};
var App = React.createClass({
   render: function () {
       return (
           React.createElement('div', {className: 'app'}),
           React.createElement(ContactForm, {contact: contactForm}),
           React.createElement(Contact, {contacts: items}, {})
       )
   }
});