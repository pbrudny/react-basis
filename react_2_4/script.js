var movies = [
    {
        id: 1,
        title: 'Opowieści z Narni',
        desc: 'Super film o świecie'
    },
    {
        id: 2,
        title: 'Listy starego diabła',
        desc: 'Ciekawa pozycja'
    }
];
var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h1', {}, movie.title),
        React.createElement('p', {}, movie.desc)
    );
});
var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));
