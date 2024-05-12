
function Login() {
    return (
        <div className="card mt-5">
            <div className="card-body">
                <h5 className="card-title">Login</h5>
                <form>
                    <div className="form-group">
                        <div className="mb-3">
                            <label
                                className="form-label"
                                htmlFor="exampleInputEmail1"
                            >
                                Email address
                            </label>
                            <input
                                aria-describedby="emailHelp"
                                className="form-control"
                                id="exampleInputEmail1"
                                type="email"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="mb-3">
                            <label
                                className="form-label"
                                htmlFor="exampleInputPassword1"
                            >
                                Password
                            </label>
                            <input
                                className="form-control"
                                id="exampleInputPassword1"
                                type="password"
                            />
                        </div>
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            className="form-check-input"
                            id="exampleCheck1"
                            type="checkbox"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            Check me out
                        </label>
                    </div>
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Login;