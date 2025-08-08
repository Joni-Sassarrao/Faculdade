console.log('Hello World')

// Sem Jsx
function App() {
    return React.createElement('h1', null, 'Hello World sem null')
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
)

// Com Jsx
//<h1>Hello World sem build</h1>