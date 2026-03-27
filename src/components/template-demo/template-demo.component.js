

export function TemplateDemoComponent(props) {

    if (props.layout == "horizontal") {
        return (
            <div className="container-fluid">
                
                <nav>
                    <span className="me-4">Facebook</span>
                    <span className="me-4">twitter</span>
                    <span className="me-4">instagram</span>
                </nav>
            </div>
        )
    } else {
        return (
            <div className="container-fluid">
                
                <nav>
                    <div className="mb-3 bi bi-facebook"></div>
                    <div className="mb-3 bi bi-twitter-x"></div>
                    <div className="mb-3 bi bi-instagram"></div>
                    <div className="mb-3 bi bi-linkedin"></div>
                </nav>
            </div>
        )
    }
}