

export function EventDemoComponent() {


    function insertClick(SyntheticEvent) {

        document.write(`Button Id: ${SyntheticEvent.target.id} <br>`);
        document.write(`X Position: ${SyntheticEvent.clientX} <br>`);
        document.write(`Button Class: ${SyntheticEvent.target.className} <br>`);
    }


    return (
        <div className="container-fluid">
            <h2>Events</h2>
            <button id = "btnInsert"  onClick={insertClick} className="btn btn-primary">Insert</button>
        </div>
    )
}