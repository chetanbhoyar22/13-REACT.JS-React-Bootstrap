import {Table} from 'react-bootstrap';
import './Style.css';

function TableComponent() {
    return (
      <div className="table">
          <h2>Table in Bootstrap (Hover, Striped) -</h2><br/>
          <Table striped bordered hover>
              <thead>
            <tr>
                <th>Sr. No.</th>
                <th>User Name</th>
                <th>User Age</th>
                <th>User Number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1.</td>
                <td>Chetan</td>
                <td>24</td>
                <td>8411088868</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Nishnat</td>
                <td>24</td>
                <td>7215647810</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Sanket</td>
                <td>25</td>
                <td>9985612478</td>
            </tr>
            </tbody>
            </Table>
            <br/>

            <h2>Table in Bootstrap (Dark Variant & Small Size) - </h2><br/>
             <Table variant="dark" striped bordered hover size='sm'>
            <thead>
            <tr>
                <th>Sr. No.</th>
                <th>User Name</th>
                <th>User Age</th>
                <th>User Number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1.</td>
                <td>Chetan</td>
                <td>24</td>
                <td>8411088868</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Nishnat</td>
                <td>24</td>
                <td>7215647810</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Sanket</td>
                <td>25</td>
                <td>9985612478</td>
            </tr>
            </tbody>
            </Table>
            <br/>

            <h2>Table in Bootstrap (Responsive) - </h2><br/>
             <Table responsive>
            <thead>
            <tr>
                <th>Sr. No.</th>
                <th>User Name</th>
                <th>User Age</th>
                <th>User Number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1.</td>
                <td>Chetan</td>
                <td>24</td>
                <td>8411088868</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Nishnat</td>
                <td>24</td>
                <td>7215647810</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Sanket</td>
                <td>25</td>
                <td>9985612478</td>
            </tr>
            </tbody>
            </Table>
            <hr/>
      </div>
    );
}
export default TableComponent
