import {Image} from 'react-bootstrap';
import logo1 from './person_1.jpg';
import './Style.css';

function ImageComponent() {
    return (
      <div>
          <h2 Style="text-align:center">Images in Bootstrap -</h2>
          <h3>Simple Image</h3>
          <Image className="image" src={logo1} />
          <br/><br/>
          <h3>Rounded Image</h3>
          <Image className="image" src={logo1} rounded />
          <br/><br/>
          <h3>RoundedCircle Image</h3>
          <Image className="image" src={logo1} roundedCircle />
          <br/><br/>
          <h3>Thumbnail Image</h3>
          <Image className="image" src={logo1} thumbnail />
          <hr/>

      </div>
    );
}
export default ImageComponent;