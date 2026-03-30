import React from "react";

export function UserForm() {
    const [state, setState] = React.useState({ name: '', age: 0, email: '', tell: '', nameValid: false, ageValid: false, emailValid: false, tellValid: false });

    function validateAge(age) {
        return (age >= 16 && age <= 90);
    }
    function validateName(name) {
        return name.length > 2;
    }
    function validateTell(tell) {
        return tell.length >= 10;
    }
    function validateEmail(email) {
        return email.includes("@");
    }

    function onAgeChange(e) {
        var val = e.target.value;
        var valid = validateAge(val);
        setState({ ...state, age: val, ageValid: valid });
    }
    function onNameChange(e) {
        var val = e.target.value;
        var valid = validateName(val);
        setState({ ...state, name: val, nameValid: valid });
    }
    function onTellChange(e) {
        var val = e.target.value;
        var valid = validateTell(val);
        setState({ ...state, tell: val, tellValid: valid });
    }
    function onEmailChange(e) {
        var val = e.target.value;
        var valid = validateEmail(val);
        setState({ ...state, email: val, emailValid: valid });
    }

    function handleSubmit(e) {
        if (state.nameValid === true && state.ageValid === true && state.emailValid === true && state.tellValid === true) {
            alert(`Имя: ${state.name} Возраст: ${state.age} Почта: ${state.email} Номер телефона: ${state.tell}`);
        }
        else {
            e.preventDefault();
        }
    }

    var agevalid = state.ageValid === true ? "valid" : "invalid";
    var namevalid = state.nameValid === true ? "valid" : "invalid";
    var emailvalid = state.emailValid === true ? "valid" : "invalid";
    var tellvalid = state.tellValid === true ? "valid" : "invalid";
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><img className='user' src="./aa.png" /></div>
                <div class="g">

                <p>
                    <label>Имя:</label><br />
                    <input type="text" value={state.name} onChange={onNameChange} />
                    <span className={namevalid}> Больше 3х символов</span>
                </p>
                <p>
                    <label>Возраст:</label><br />
                    <input type="number" value={state.age} onChange={onAgeChange} />
                    <span className={agevalid}> от 16 до 90</span>
                </p>
                <p>
                    <label>Номер телефона:</label><br />
                    <input type="text" value={state.tell} onChange={onTellChange} />
                    <span className={tellvalid}> Должен содержать 10 символов</span>
                </p>
                <p>
                    <label>Почта:</label><br />
                    <input type="text" value={state.email} onChange={onEmailChange} />
                    <span className={emailvalid}> Должен содержать @</span>
                </p>
                          </div>
                <input type="submit" value="Отправить" />
            </form>
        </div>
    );
}
