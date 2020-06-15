import React from "react";
import {Card, CardHeader} from 'reactstrap'
import '../Card.css'

const Harry = (Props) => {
  return (
    <>
      <div className="col justify-content-center p-3 bg-dark" style={{ 'minHeight':'100vh'}}>
        <Card className="Card m-1">
          <CardHeader className="bg-dark text-success">Identity</CardHeader>
        </Card>
        <Card className="Card m-1">
          <CardHeader className="bg-dark text-success">Code</CardHeader>
        </Card>
        <Card className="Card m-1">
          <CardHeader className="bg-dark text-success">Life</CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Harry;
