import React, {FC, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Alert, Fire} from '../../components/Alerts/Alert'
import 'firebase/auth'
import {Auth} from '../../services/auth.service'

type Props = {}

const Login: FC<Props> = (props) => {
    const history = useHistory()

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [disabled, setdisabled] = React.useState(false)

    async function login() {
        setdisabled(true)
        const auth = new Auth('auth/login')
        await auth
            .create('', {Email: username, Password: password})
            .then((auth) => {
                Alert('Logged In Successfully', auth.message, 'success')
                localStorage.setItem('user', JSON.stringify(auth.user))
                localStorage.setItem('token', auth.token)
                history.replace('home')
                $('.large-modal').hide()
                $('.modal-backdrop').hide()
                window.location.reload()
            })
            .catch(() => {
                Alert('Error!', 'Something went wrong', 'error')
            })
        setdisabled(false)
    }

    return (
        <div className="row align-items-center h-100">
            <form className="col-lg-5">
                <div className="p-0 mt-2 mr-3">
                    <h1 className="m-0 text-info">
                        Human Resource Management Office
                    </h1>
                </div>
                <br />
                <div className="mb-3 input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i className=" fe fe-user"></i>
                        </span>
                    </div>
                    <input
                        onChange={(e) => {
                            setusername(e.target.value)
                        }}
                        type="email"
                        required
                        className="form-control"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-3 input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i className=" fe fe-lock"></i>
                        </span>
                    </div>
                    <input
                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}
                        type="password"
                        required
                        className="form-control"
                        placeholder="Password"
                    />
                </div>
                <button
                    disabled={disabled}
                    onClick={(e) => {
                        e.preventDefault()
                        login()
                    }}
                    className="btn btn-lg t-bg-sky-500 btn-block t-text-white"
                    type="submit">
                    {disabled == true ? (
                        <div className="d-flex aic jcc">
                            <div
                                className="mr-3 text-white spinner-border spinner-border-sm"
                                role="status"
                            />
                            <span className="mt-1">Loading ... </span>
                        </div>
                    ) : (
                        'Login'
                    )}
                </button>
                <p className="mt-5 mb-3 text-muted">
                    © Developed By | Teddy Fuentivilla{' '}
                </p>
            </form>
        </div>
    )
}

export default Login
