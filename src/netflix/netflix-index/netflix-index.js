import './netflix-index.css';
import {NetflixHeader} from '../netflix-header/netflix-header';

export function NetflixIndex() {
    return (
        <div id="banner">
            <div id='shade'>
                <NetflixHeader />
            </div>
        </div>
    );
}