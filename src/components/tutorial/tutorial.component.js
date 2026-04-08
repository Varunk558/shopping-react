import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function TutorialComponent() {
  return (
      <div className="container-fluid">
        <h2>Tutorial - Web Technologies</h2>
        <BrowserRouter>
            <section className="row">
                <nav className="col-3">
                    <div className="btn-group-vertical">
                        <Link to="html" className="btn btn-outline-primary">HTML</Link>
                        <Link to="css" className="btn btn-outline-primary">CSS</Link>
                        <Link to="javascript" className="btn btn-outline-primary">JavaScript</Link>
                    </div>

                </nav>
                <div className="col-9">
                     <Routes>
                        <Route path="html" element={<div><h3>HTML</h3><p>It is a markup language for creating web pages.</p></div>} />
                        <Route path="css" element={<div><h3>CSS</h3><p>It is a style sheet language used for describing the presentation of a document written in HTML.</p></div>} />
                         <Route path="javascript" element={<div><h3>JavaScript</h3><p>It is a programming language that enables interactive web pages.</p></div>} />
                     </Routes>
                </div>
            </section>
        </BrowserRouter>
      </div>   
  );
}