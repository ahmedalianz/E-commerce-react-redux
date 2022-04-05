import "./help.css";

import React from "react";

export default function HelpCenter() {
  return (
    <div className="help-center-cont">
      <h1 className="globalcenter">مركز المساعده</h1>
      <h2>الاسئله الاكثر شيوعا :</h2>
      <div className="accordion help-center" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              هل استطيع شراء المنتجات بااستخدام الفيزا?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className={` accordion-body`}>
              <strong>بالطبع.</strong>نحن نشجعك ان تتم معامالاتك الشرائيه
              بااستخدم الفيزا فاهي تجعل العمليه اسهل نتمني لك يوم جيد
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button collapsed`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              هل استطيع شراء المنتجات بااستخدام الفيزا?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className={` accordion-body`}>
              <strong>بالطبع.</strong>نحن نشجعك ان تتم معامالاتك الشرائيه
              بااستخدم الفيزا فاهي تجعل العمليه اسهل نتمني لك يوم جيد
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button collapsed`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              هل استطيع شراء المنتجات بااستخدام الفيزا?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body`}>
              <strong>بالطبع.</strong>نحن نشجعك ان تتم معامالاتك الشرائيه
              بااستخدم الفيزا فاهي تجعل العمليه اسهل نتمني لك يوم جيد
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
