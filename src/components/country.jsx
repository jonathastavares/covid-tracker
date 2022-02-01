import React from 'react';
import Card from 'react-bootstrap/Card';

const Country = () => {
  console.log('Rendered!');
  return (
    <div className="grid row">
      <Card key="Brasil" className="col-sm-12 col-md-6 col-xl-3">
        <Card.Link href="/regions" className="links">
          <Card.Body>
            <Card.Title>Brasil</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Cases confirmed:
            </Card.Subtitle>
          </Card.Body>
        </Card.Link>
      </Card>
    </div>
  );
};

export default Country;
