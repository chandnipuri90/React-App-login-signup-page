import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Table } from 'reactstrap';


function abc() {

}

class Reg extends Component {

  constructor() {
    super();

    this.state = {
      EmployeeName: '',
      City: '',
      Email: '',
      Password: '',
      Department: '',
      
      Users: [{
        EmployeeName: 'Ali',
        City: 'San Francisco',
        Email: 'Ali@mail.com',
        Password: '12345',
        Department: 'Fs',
      }, {
        EmployeeName: 'Alex',
        City: 'Perth',
        Email: 'Alex@mail.com',
        Password: '12345',
        Department: 'FS',
      }]
    }


    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);
    this.EmployeeName = this.EmployeeName.bind(this);
    this.Password = this.Password.bind(this);
    this.Department = this.Department.bind(this);
    this.City = this.City.bind(this);
    this.register = this.register.bind(this);
  }



  Email(event) {
    this.setState({ Email: event.target.value })
  }

  Department(event) {
    this.setState({ Department: event.target.value })
  }

  Password(event) {
    this.setState({ Password: event.target.value })
  }
  City(event) {
    this.setState({ City: event.target.value })
  }
  EmployeeName(event) {
    this.setState({ EmployeeName: event.target.value })
  }

  register(event) {
    //this.state.Users.push({a: "",b:""})
    let newUser = {
      EmployeeName: this.state.EmployeeName,
      City: this.state.City,
      Email: this.state.Email,
      Password: this.state.Password,
      Department: this.state.Department,
    };
    let oldUsers = this.state.Users;
    oldUsers.push(newUser);
    this.setState({ Users: oldUsers });
  
    console.log(this.state);
    
  }

  render() {

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <div class="row" className="mb-2 pageheading">
                      <div class="col-sm-12 btn btn-primary">
                        Sign up
                        </div>
                    </div>
                   
                    <InputGroup className="mb-3">
                      <Input type="text" onChange={this.EmployeeName} placeholder="Enter Employee Name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text" onChange={this.Email} placeholder="Enter Email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="password" onChange={this.Password} placeholder="Enter Password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <Input type="text" onChange={this.City} placeholder="Enter City" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <Input type="text" onChange={this.Department} placeholder="Enter Department" />
                    </InputGroup>
                    <Button onClick={this.register} color="success" block>Create Account</Button>
                 
                 <div className="genderSection">
                 <label> Male
                     <input type="radio" name="gender" value="male" />
                 </label>
                 <label> Female
                     <input type="radio" name="gender" value="female" />
                 </label>
             </div>
                    </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <div className="Users">
        <Table dark>
        <thead>
          <tr >
            <th scope="row">Employee name</th>
            <th scope="row">City</th>
            <th scope="row">Email</th>
            <th scope="row">Password</th>
            <th scope="row">Department</th>
           
          </tr>
        </thead>
        <tbody>
        {this.state.Users.map(user => (
          <tr>
            <td>{user.EmployeeName}</td>
            <td>{user.City}</td>
            <td>{user.Email}</td>
            <td>{user.Password}</td>
            <td>{user.Department}</td>
            
          </tr>
        ))}
        </tbody>
      </Table>
      
          {/*<table>
            {this.state.Users.map(user => (
              <tr>
                <td>{user.EmployeeName}</td>
                <td>{user.City}</td>
              </tr>
            ))}
            </table>*/}
        </div>
      </div>
    );
    
  }
}

export default Reg; 