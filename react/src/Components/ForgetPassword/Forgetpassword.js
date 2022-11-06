import React from 'react'
import '../ForgetPassword/ForgetPassword.css'

export default function Forgetpassword() {
    return (
        <div>
            <div className='container'>
                <div className="form-gap"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="text-center">
                                        <h3><i className="fa fa-lock fa-4x"></i></h3>
                                        <h2 className="text-center">Forgot Password?</h2>
                                        <p>You can reset your password here.</p>
                                        <div className="panel-body">

                                            <form id="register-form" role="form" autocomplete="off" className="form" method="post">

                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1" style={{ height: "40px" }}><i className="fa fa-envelope"></i></span>
                                                    </div>
                                                    <input id="email" name="email" placeholder="email address" className="form-control" type="email" />
                                                </div>
                                                <div className="d-grid gap-2">
                                                    <button className="btn btn-primary btn-lg" name="Submit" value="reset-password" type="Submit">Reset Password</button>
                                                </div>

                                                <input type="hidden" className="hide" name="token" id="token" value="" />
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
