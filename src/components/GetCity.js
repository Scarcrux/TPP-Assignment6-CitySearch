import React, { Component } from "react";
import ReactDOM from "react-dom";
import GetData from './GetData'
import { Button, Container, Row, Col, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

export default function GetZip() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [visibility, setVisibility] = React.useState(false);

  const handleClear = event => {
    event.preventDefault();
    setSearchTerm("");
    setVisibility(false);
   };

  const handleEdit = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
   };

  const handleKeyUp = event => {
    event.preventDefault();
    if (event.key === "Enter") {
      setVisibility(true);
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    setVisibility(true);
  };

  return (
    <div>
      <div className="mb-4">
        <div>
        <form className="form-horizontal" onSubmit={handleKeyUp}>
        <div className="form-group mt-3">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>City</InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              onChange={handleEdit}
              onKeyUp={handleKeyUp}
              placeholder={searchTerm}
            />
          </InputGroup>
          </div>
          <div>
          <InputGroup>

          <Button onClick={handleSubmit} className="btn btn-default update-btn">Search</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={handleClear} className="btn btn-default update-btn">Clear</Button>
          </InputGroup>
          </div>
          </form>
        </div>
      </div>
      {visibility &&
        <GetData city={searchTerm} />
      }
      {!visibility &&
        <div>
          <div>
            <p>No Results</p>
          </div>
        </div>
      }
    </div>
  );
}
