import React from 'react';
import 
{ 
    Table, 
    Card, 
    Button, 
    CardImg, 
    CardTitle,
    CardText, 
    CardGroup,
    CardSubtitle, 
    CardBody

} from 'reactstrap';


export default class About extends React.Component {
    render() {
      return (
        <div>
        <h3>Gil B. </h3>

        <img className="photo" src={require('../images/pic.jpg')} alt="headshot1" />
        
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris augue, faucibus id varius non, semper vel dolor. Nam vitae leo suscipit, vestibulum sem et, sagittis nisi. Etiam fermentum sapien suscipit rhoncus hendrerit. Pellentesque maximus metus quis nunc euismod fringilla. Proin vel tellus eget odio interdum aliquet. Pellentesque sed dui nec libero pulvinar placerat ut quis tortor. Proin vel blandit diam. Suspendisse aliquet, metus at molestie feugiat, velit lectus dignissim enim, vitae venenatis nibh urna id nisl.
            Aliquam rhoncus eros dignissim turpis egestas, et auctor velit sodales. Etiam congue finibus libero, ut ultrices enim malesuada eget. Donec convallis facilisis libero, et condimentum eros tempor eget. Curabitur at scelerisque erat. Suspendisse fermentum turpis vel eleifend fringilla. Nullam rhoncus turpis eros, ut finibus nulla vestibulum at. Donec vitae rutrum leo.
        </p>

        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <CardGroup>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
        </div>
        
      );
    }
  }


