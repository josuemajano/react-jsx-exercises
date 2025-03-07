let ProfilePic = () => {
    return(
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
    )
}

let CommentBody = () => {
    return(
        <div>
            <span style={{fontWeight:'bold'}}>Username</span>
            <p>Comment Body</p>
        </div>
    )
}

let Comment = () => {
    return(
        <div>
            <ProfilePic />
            <CommentBody/>
        </div>
    )
}

let Comments = () => {
    return(
        <div>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    )
}

ReactDOM.render(<Comments />, document.getElementById('root'))