let TextInput = () => {
    return(
        <input type="text" placeholder="Text something here"></input>
    )
}

let YesNoRadio = () => {
    return(
        <div>
        <input type="radio" name="Yes"></input>
        <input type="radio" name="No"></input>
    </div>
    )
}

let SubmitButton = () => {
    return(
       <div>
           <button type="submit">Submit</button>
       </div> 
    )
}

let Form = () => {
    return(
        <div>
            <TextInput/>
            <YesNoRadio/>
            <SubmitButton/>
        </div>
    )
}


ReactDOM.render(<Form />, document.getElementById('root'))