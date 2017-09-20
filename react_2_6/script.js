var Counter = React.createClass({
    getDefaultProps: function () {
        console.log('Ustawienie domyślnych propsów');
    },
    getInitialState: function () {
        console.log('Ustawienie stanu początkowego');
       return {
           counter: 0
       }
    },
    componentWillMount: function () {
      console.log('Mamy propsy i stany to możemy przygotować dane przed wyświetleniem (np. jakieś obliczenia)');
    },
    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        })
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        })
    },
    render: function () {
        console.log('renderujemy DOM');
        return (
            React.createElement('div', {className: 'counter'},
                React.createElement('span', {className: 'counterLabel'}, 'Licznik ' + this.state.counter),
                React.createElement('button', {onClick: this.increment}, '+'),
                React.createElement('button', {onClick: this.decrement}, '-')
            )
        )
    },
    componentDidMount: function () {
        console.log('Możemy rozpocząć interakcje z elementami DOM');
    },
    componentWillReceiveProps: function () {
        console.log('Możemy np. zareagować na wpisywanie danych do formularza');
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        console.log('Możemy zoptymalizować komponent nie robiąc zawsze update');
        return true
    },
    componentWillUpdate: function (nextProps, nextState) {
        console.log('Możemy przygotować zmienne przed następnym renderem (obliczenia)');
    },
    componentDidUpdate: function () {
        console.log('Możemy przesłać dane do zewnętrznego komponentu np. chart.js');
    },
    componentWillUnmount: function () {
        console.log('Możemy zamknąć połączenia z zewnętrznymi serwisami');
    },
});

var Counters = React.createClass({
    render: function () {
        return (
            React.createElement('div', {className: 'counters'},
                React.createElement('h1', {}, 'Niezależne liczniki'),
                React.createElement(Counter),
                React.createElement(Counter),
                React.createElement(Counter),
                React.createElement(Counter)
                )
        )
    }
});
var element = React.createElement(Counters);
ReactDOM.render(element, document.getElementById('app'));

