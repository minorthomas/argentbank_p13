import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleName } from '../features/user/user';
import { useFetch } from '../hooks/useFetch';

export function UserProfile({ firstName, lastName, token }) {
    const { fetchData, isLoading, data } = useFetch();
    const [toggleEditBtn, setToggleEditBtn] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const dispatch = useDispatch();
    const regex = /^[a-zA-Z ]{2,30}$/;

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

        const config = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userInfos),
        };

        if (regex.test(userInfos.firstName) && regex.test(userInfos.lastName)) {
            fetchData(`${process.env.REACT_APP_API_URL}/profile`, config)
        } else {
            setErrorName(true);
        }
    }

    useEffect(() => {
        if (!isLoading && data.body) {
            dispatch(handleName({
                firstName: data.body.firstName,
                lastName: data.body.lastName
            }));
            setToggleEditBtn(!toggleEditBtn);
            setErrorName(false);
        }
    }, [isLoading, data])

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
