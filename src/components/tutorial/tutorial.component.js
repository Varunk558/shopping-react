import { BrowserRouter, Routes, Route } from "react-router-dom";

export function TutorialComponent() {
  return (
      <div className="container-fluid">
        <h2>Tutorial - Web Technologies</h2>
        <BrowserRouter>
          <Routes>
            <Route path="html" element={<div><h3>HTML</h3><p>It is a markup language for creating web pages.</p></div>} />
            <Route path="css" element={<div><h3>CSS</h3><p>It is a style sheet language used for describing the presentation of a document written in HTML.</p></div>} />
            <Route path="javascript" element={<div><h3>JavaScript</h3><p>It is a programming language that enables interactive web pages.</p></div>} />
          </Routes>
        </BrowserRouter>
      </div>   
  );
}