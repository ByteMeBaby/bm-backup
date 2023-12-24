import React from "react";
import "../../index.css";
import { Card } from "../../lib/components/card";
import Button from "../../lib/components/button";

export function CustomLayout() {
  return (
    <>
      <div className="mb-10 text-blue-800 bg-blue-50 text-sm p-2 rounded">
        Please use the code from the{" "}
        <a
          className="underline"
          href="http://localhost:6006/?path=/docs/card-custom-layout--docs"
        >
          Docs
        </a>
        .
      </div>
      <Card>
        <Card.Heading el="h1">Title goes here</Card.Heading>
        <Card.Body el="div" wrapperClasses="p-3 flex flex-col items-center">
          <img
            width={400}
            src="https://cdn.pixabay.com/photo/2023/09/24/14/05/dog-8272860_1280.jpg"
            alt="Image from pixabay"
          />
        </Card.Body>
        <Card.Footer
          actions={[
            <span className="text-blue-600">
              <a href="https://pixabay.com/photos/dog-puppy-golden-retriever-pet-8272860/">
                Credits: emiliaxd
              </a>
            </span>,
            <span className="text-sm text-gray-500">Tommy</span>,
            <span className="text-sm text-gray-500">3 Months</span>,
            <span className="text-sm text-gray-500">Goldie</span>,
          ]}
          wrapperClasses="justify-evenly"
        >
          <div className="flex justify-evenly border-t p-3">
            <Button>Pet Him</Button>
            <Button intent={"success"}>Feed Him</Button>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}
