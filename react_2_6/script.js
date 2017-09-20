var Counter = React.createClass({
    getInitialState: function () {
       return {
           counter: 0
       }
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
        return (
            React.createElement('div', {className: 'counter'},
                React.createElement('span', {className: 'counterLabel'}, 'Licznik ' + this.state.counter),
                React.createElement('button', {onClick: this.increment}, '+'),
                React.createElement('button', {onClick: this.decrement}, '-')
            )
        )
    }
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

