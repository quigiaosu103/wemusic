import styles from './Login.module.css';
import clsx from 'clsx';
import Authen from '.';
import Button from '~/components/Button';
import BackIcon from '~/images/BackIcon.svg';
import { useState } from 'react';
import InputField from '~/components/InputField';

function Signup() {
    const [errLabel, setErrLabel] = useState('');
    const [mailErr, setMailErr] = useState('');
    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [confirmMess, setConfirmMess] = useState('');
    const [errId, setErrId] = useState(-1);
    const inputFileds = [
        {
            hook: { value: username, setValue: setUsername },
            mess: 'Enter username',
            filed: 'Username',
            type: 'text',
        },
        {
            hook: { value: mail, setValue: setMail },
            mess: mailErr,
            filed: 'Email',
            type: 'email',
        },
        {
            hook: { value: password, setValue: setPassword },
            mess: 'Enter password',
            filed: 'Password',
            type: 'password',
        },
        {
            hook: { value: confirm, setValue: setConfirm },
            mess: confirmMess,
            filed: 'Confirm Password',
            type: 'password',
        },
    ];

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function handleSubmit() {
        if (username == '') {
            setErrId(0);
        } else if (mail == '') {
            setMailErr('Enter email');
            setErrId(1);
        } else if (!isValidEmail(mail)) {
            setMailErr('Invalid mail');
            setErrId(1);
        } else if (password == '') {
            setErrId(2);
        } else if (confirm == '') {
            setConfirmMess('Enter password');
            setErrId(3);
        } else if (confirm != password) {
            setConfirmMess('Password is not mess');
            setErrId(3);
        } else {
            alert('success');
        }
    }
    console.log(isValidEmail('a@gmail.com'), isValidEmail('a@gmail'));
    return (
        <>
            <div className={clsx(styles.backBtn)}>
                <Button to="/login">
                    <img src={BackIcon} /> <span className={clsx(styles.backBtnText)}>Login</span>
                </Button>
            </div>
            <Authen>
                <div className={clsx(styles.wrapper)}>
                    <span className={clsx(styles.title)}>Sign Up</span>
                    {inputFileds.map((item, index) => {
                        return (
                            <InputField
                                eId={errId}
                                key={index}
                                field={item.filed}
                                errId={index}
                                type={item.type}
                                valueHook={item.hook}
                                errHook={{ errId, setErrId }}
                                mess={item.mess}
                            />
                        );
                    })}
                    <span className={clsx(styles.errLabel)}>{errLabel == '5' && ''}</span>
                    <div className={clsx(styles.btnsWrapper)}>
                        <Button onClick={handleSubmit} to="/signup" back="#F0FB54">
                            <span className={clsx(styles.btnInner, styles.blackText)}>Siggn up</span>
                        </Button>
                    </div>
                </div>
            </Authen>
        </>
    );
}

export default Signup;
//
