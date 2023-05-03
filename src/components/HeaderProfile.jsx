import { useState } from 'react';
import { handleName } from '../states/userSlice';
import { useDispatch } from 'react-redux';

export default function EditNameForm({ firstName, lastName, token }) {
    const [toggleEditBtn, setToggleEditBtn] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const dispatch = useDispatch();
    var regex = /^[a-zA-Z ]{2,30}$/;

    function handleEditBtn(event) {
        event.preventDefault();
        setToggleEditBtn(!toggleEditBtn);
    }

    async function handleUserName(event) {
        event.preventDefault();

        const userInfos = {
            firstName: event.target[0].value
                ? event.target[0].value
                : firstName,
            lastName: event.target[1].value ? event.target[1].value : lastName,
        };

        if (regex.test(userInfos.firstName) && regex.test(userInfos.lastName)) {
            await fetch(`${process.env.REACT_APP_API_URL}/profile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(userInfos),
            })
                .then((res) => res.json())
                .then((body) => {
                    if (body.body) {
                        dispatch(handleName(userInfos));
                        setToggleEditBtn(!toggleEditBtn);
                        setErrorName(false);
                    }
                })
                .catch((err) => console.log(err));
        } else {
            setErrorName(true);
        }
    }

    return (
        <div className='profile_header'>
            <h1>Welcome back</h1>
            {!toggleEditBtn ? (
                <>
                    <p>
                        {firstName} {lastName} !
                    </p>
                    <button className='green_btn' onClick={handleEditBtn}>
                        Edit name
                    </button>
                </>
            ) : (
                <>
                    <form
                        className='profile_header_form'
                        onSubmit={handleUserName}
                    >
                        <div className='profile_header_form_input'>
                            <input
                                type='text'
                                name='firstName'
                                placeholder={firstName}
                            />
                            <input
                                type='text'
                                name='lastName'
                                placeholder={lastName}
                            />
                        </div>
                        {errorName && (
                            <p className='error'>
                                Incorrect first or last name
                            </p>
                        )}
                        <div className='profile_header_form_btn'>
                            <button className='green_btn' type='submit'>
                                Save
                            </button>
                            <button
                                className='green_btn'
                                onClick={handleEditBtn}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
}
