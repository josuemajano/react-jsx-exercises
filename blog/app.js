let Header = () => {
    return(
        <header>
            <h1>Blog Title</h1>
            <h2>Your Name</h2>
        </header>
    )
}
let Article = () => {
    return(
        <p>Write and design your blog article</p>
    )
}
let Footer = () => {
    return(
        <footer>
            <p>Coppyright © 2021</p>
        </footer>
    )
}

let Blog = () => {
    return <div>
        <Header/>
        <Article/>
        <Footer/>
    </div>
}


ReactDOM.render(<Blog />, document.getElementById('root'))