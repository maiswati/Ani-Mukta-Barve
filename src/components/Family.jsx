import React from 'react'
import { family } from '../data';
const Family = () => {
  return (
            <div
              className="container-fluid m-auto"
              style={{ backgroundColor: "#FEFBF8", minHeight: "100vh" }}
            >
              <div className="row px-4 py-4">
                <h1
                  className="cinzel text-center mb-5 mt-4"
                  style={{ textDecoration: "underline" }}
                >
                  Family
                </h1>
              </div>
              <div className="d-flex justify-content-center gap-5 flex-wrap mb-4">
                {family.map((member, i) => {
                  return (
                    <>
                      <div key={i} className="shadow-lg p-3 bg-light d-flex flex-column justify-content-between rounded gap-4">
                        <div className="mt-5">
                            <img className="img-fluid rounded" width='250px' height='250px' src={member.src} alt={member.member} />
                        </div>
                        <div>
                            <h3 className="space-mono-bold">{member.member}</h3>
                            <p className="text-muted">Relation : {member.relation}</p>
                        </div>
                        <i  class={`fa-solid fa-heart`} style={{color: "#c72323"}}></i>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
  )
}

export default Family
