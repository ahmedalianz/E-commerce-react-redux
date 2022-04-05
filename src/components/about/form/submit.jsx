import React from "react";

export default function Submit() {
  return (
    <div className={`text-center`}>
      <div>
        <form>
          <img className="mb-4" src="images/logo.png" alt="" width="72" />
          <h1 className="h3 mb-3 fw-normal text-primary">
            شكرا لك سيتم التواصل معك بااسرع وقت
          </h1>
          <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
        </form>
      </div>
    </div>
  );
}
