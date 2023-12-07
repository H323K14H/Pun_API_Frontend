const Fan = ({ fan }) => {

    return (
        <div className="fan">
            <p><b>Name:</b> {fan.name}</p>
            <p><b>Email:</b> {fan.email}</p>
            <p><b>Comment:</b> {fan.comment}</p>
        </div>
    );
}

export default Fan;