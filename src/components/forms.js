<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Service
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="cat hotel"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />

        <Form.Check
          type="radio"
          label="cat sitting"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="transport"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <Form.Check
          type="radio"
          label="other"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />

      </Col>
    </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>