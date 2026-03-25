

export function FormEventDemoComponent() {

    function SubmitClick(event) {
        alert("Form Submitted");
        event.preventDefault();
    }

    return (
        <div className="container-fluid"> 
                <form onSubmit={SubmitClick}>
                    <dl>
                        <dt>User Name</dt>
                        <dd>
                            <input type="text" name="username" />
                        </dd>
                    </dl>
                    <button type="submit">Submit</button>
                </form>
        </div>
    )
}