

export function GridComponent(props) {


    return (

        <div className="container-fluid">
            <table style={{ backgroundColor:props.theme }} className="table table-hover caption-top">
                <caption>{props.caption}</caption>
                <thead>
                    <tr>
                        {
                            props.fields.map(field => {
                                return <th style={{ backgroundColor: props.theme }} key={field}>{field}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((record, index) => {
                            return <tr  key={index}>
                                {
                                    props.fields.map(field => {
                                        return <td style={{ backgroundColor: props.theme }} key={field}>{record[field]}</td>
                                    })
                                }
                            </tr>   
                    }
                    )
                    }
                </tbody>

            </table>

        </div>
    )
}