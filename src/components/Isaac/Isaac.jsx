import React from "react";
import { Card, Row } from "reactstrap";
import "../Card.css";
const Isaac = (Props) => {
  return (
    <>
      <div className="col justify-content-center p-3 bg-dark" style={{ 'minHeight':'100vh'}}>
        <Card className="Card m-1 justify-content-end">
          <Row className="col-12 justify-content-between p-5">
          <img style={{ borderRadius: '50%'}} className="col-4"  src="https://media-exp1.licdn.com/dms/image/C5603AQEXKV9AoVDt6g/profile-displayphoto-shrink_400_400/0?e=1597881600&v=beta&t=Se00SBeoi09rmfUguA2Rj8xIJf15pR0wZF-IYddOBeg" alt="Isaac Winters"/>
          <div className="col-6">
            <p className="text-left">
             Born in Sacramento CA, but transplanted to Phoenix, Isaac is a avid cook, husband,
             and insatiable full stack C# (.NET & .NET Core), React and SQL Developer. He loves solving problems
             but his favorite problems are the ones that have an immediate impact on the lives of his end user.
             Can my code make your buisness better, your customers lives better, and provide for my life at the same time?
             That sounds like a win-win to me!  
            </p>
          </div>
          </Row>
        </Card>
        <Card className="Card m-1">
          Code
        </Card>
        <Card className="Card m-1">
          Life
        </Card>
      </div>
    </>
  );
};

export default Isaac;
