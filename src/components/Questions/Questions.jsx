import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Container from "../Container";
import QuestionsData from "./QuestionsData";

const Questions = () => {
  const [shownQuestions, setShownQuestions] = useState({});

  const toggleVisibility = (id) => {
    setShownQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <section>
        <Container>
          <div className="flex justify-center items-center flex-col gap-10 py-[54px]">
            <div className="flex gap-3 flex-col justify-center text-center xs:text-start">
              <h2 className="h2">Frequently asked questions</h2>
              <p className="p1 text-Lblack50">
                Everything you need to know about the services and billing.
              </p>
            </div>

            <div className="w-[60%] flex justify-between border-b-2 gap-10 flex-col xs:w-full">
              {QuestionsData.map((item) => (
                <div className="flex justify-between relative border-b pb-5" key={item.id}>
                  <div className="flex flex-col gap-3">
                    <h2 className="h4 capitalize text-black">{item.ques}</h2>
                    {shownQuestions[item.id] && (
                      <p className="p1 text-Lblack">{item.ans}</p>
                    )}
                  </div>
                  <button
                    className="absolute top-0 right-0  text-Lblack50"
                    onClick={() => toggleVisibility(item.id)}
                  >
                    {shownQuestions[item.id] ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Questions;
