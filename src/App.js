import './App.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {data} from './data.js';


function App() {
  console.log(data);
  return (
    <div className="App">
      <Container>
        <h1 className='text-center mt-4'>Contact Keeper</h1>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control placeholder='Search Cntacts' />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jim</td>
              <td>Nguwo</td>
              <td>graciouscodes@gmail.com</td>
              <td>+26590808989</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      
    </div>
  );
}

export default App;
