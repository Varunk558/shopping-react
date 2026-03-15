import { useEffect, useState } from "react";

import { $ } from "jquery";
export function NasaComponent() {
    
    const [mars, setMars] = useState([]);


    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMars(data.photos);
            });
    }, []);
    

    return (
        <div className="container-fluid mt-3">
            <h2>Mars Rover Photos<button>Load Data</button></h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th>Photo Id</th>
                    <th>Preview</th>
                    <th>Camera</th>
                    <th>Rover</th>
                </tr>
                </thead>
                <tbody>
                    {
                        mars.map(
                            item =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td><img src={item.img_src} height="100" width="100"/></td>
                                    <td>{item.camera.full_name}</td>
                                    <td>{item.rover.name}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
