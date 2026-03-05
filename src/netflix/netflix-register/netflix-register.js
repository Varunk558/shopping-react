

export function NetflixRegister(){
    return (
        <div className="mt-4">
            <div>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className="input-group input-group-lg">
                <input type="email" placeholder="Email address" className="form-control" />
                <button className="btn btn-danger">
                    Get Started
                    <span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </div>
    )    
}