let ListGroupItem = () => {
    return(
        <li>Some list items</li>
    )
}

let ListGroup = () => {
    return(
        <ul>
            <ListGroupItem />
            <ListGroupItem />
            <ListGroupItem />
            <ListGroupItem />
        </ul>
    )
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))