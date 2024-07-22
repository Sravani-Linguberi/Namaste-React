const User = (props) => {
    console.log(props, "funtional");
    return (
        <div className="user-card">
            <h3>name : {props.name}</h3>
            <h4>place: {props.place} </h4>
            <p>contact: sravanisrii</p>
        </div>
    )
}

export default User;