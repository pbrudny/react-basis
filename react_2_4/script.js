var movies = [
    {
        id: 1,
        title: 'Opowieści z Narni',
        desc: 'Klasyka C.S Lewisa',
        imagePath: 'http://1.fwcdn.pl/po/78/87/427887/7339887.3.jpg'
    },
    {
        id: 2,
        title: 'Zmartwychwstały',
        desc: 'Ciekawa perspektywa opisu zdarzeń biblijnych',
        imagePath: 'http://1.fwcdn.pl/po/96/41/699641/7728939.6.jpg'
    },
    {
        id: 3,
        title: 'Przełęcz ocalonych',
        desc: 'Krew, flaki i mocny przekaz',
        imagePath: 'http://1.fwcdn.pl/an/np/49468/2016/6188.7.jpg'
    },
    {
        id: 4,
        title: 'Dunkierka',
        desc: 'Niezły film wojenny',
        imagePath: 'https://i1.wp.com/szczere-recenzje.pl/wp-content/uploads/2017/07/Dunkierka.jpg?resize=800%2C445&ssl=1'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function () {
        return React.createElement('li', {},
            React.createElement(MovieTitle, {movie: this.props.movie}),
            React.createElement(MovieDescription, {movie: this.props.movie}),
            React.createElement(MovieImage, {movie: this.props.movie}),
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function () {
        return React.createElement('h1', {}, this.props.movie.title);
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function () {
        return React.createElement('p', {}, this.props.movie.desc)
    }
});

var MovieImage = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function () {
        return React.createElement('img', {src: this.props.movie.imagePath, width: '150px'})
    }
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array
    },
    render: function () {
       return React.createElement('div', {},
            React.createElement('h1', {}, 'Lista filmów'),
            React.createElement('ul', {},
                this.props.movies.map(function(movie) {
                    return React.createElement(Movie, {key: movie.id, movie: movie});
                })
            )
       )
    }
});

var element = React.createElement(MoviesList, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));