import React, {Fragment, useState} from 'react';

const Form = () => {

    const [schedule, newSchedule] = useState({
        pet: "",
        name: "",
        date: "",
        time: "",
        symptoms: ""
    });
    const [error, updateError] = useState(false);

    const handleChange = e => {
        newSchedule({
            ...schedule,
            [e.target.name]: e.target.value
        })
    }

    const { pet, name, date, time, symptoms } = schedule;

    const submitSchedule = e => {
        e.preventDefault();
        //Validate
        if (pet.trim() === "" || name.trim() === "" || date.trim() === "" || time.trim() === "" ||
        symptoms.trim() === "") {
            updateError(true)
        }
        //Assign ID

        //Create Schedule

        //Restart form

    }

    return(
        <Fragment>
            <h1>Create New Appointment</h1>

            { error ?  <p className="alert-error">All fields are required</p>   : null }

            <form
                onSubmit={submitSchedule}
            >
                <label>Pet Patient Name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet Patient Name"
                    onChange={handleChange}
                    value={pet}
                />

                <label>Owner Name</label>
                <input
                    type="text"
                    name="name"
                    className="u-full-width"
                    placeholder="Owner's Name"
                    onChange={handleChange}
                    value={name}
                />

                <label>Appointment Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />
                
                <label>Appointment Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />

                <label>Symptoms</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    placeholder="Please, provide symptoms description that present the patient"
                    onChange={handleChange}
                    value={symptoms}
                >
                </textarea>

                <button
                type="submit"
                className="u-full-width button-primary"
                >Add Appointment</button>
            </form>

        </Fragment>
    );
}

export default Form;