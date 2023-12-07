import { useState } from "react";

const PunForm = ({ onNewFanSubmission }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");


    const updateFanName = (event) => {
        setName(event.target.value);
    }
    const updateFanEmail = (event) => {
        setEmail(event.target.value);
    }
    const updateFanComment = (event) => {
        setComment(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !comment) {
            alert("We need your details, chief!🧐🧐");
            return;
        }

        const newFan = {
            name: name,
            email: email,
            comment: comment,
            id: Date.now()
        }

        setName("");
        setEmail("");
        setComment("");
        onNewFanSubmission(newFan);
        console.log(newFan);
    }

    return (
        <section className="pun-form">
            <h2>Post new comment:</h2>
            <form onSubmit={(event) => handleFormSubmit(event)}>
                <label htmlFor="name-input">Name:</label>
                <input
                    type="text"
                    id="name-input"
                    onInput={(event) => updateFanName(event)}
                    value={name}
                />
                <label htmlFor="email-input">Email:</label>
                <input
                    type="email"
                    id="email-input"
                    onInput={(event) => updateFanEmail(event)}
                    value={email}
                />
                <label htmlFor="comment-input">Comment:</label>
                <input
                    type="text"
                    id="comment-input"
                    onInput={(event) => updateFanComment(event)}
                    value={comment}
                />
                <input className="submit" type="submit" value="🎸🎸🎸" />
            </form>
        </section>
    )
}

export default PunForm;