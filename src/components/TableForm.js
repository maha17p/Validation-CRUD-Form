import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTable, setEditTable } from "../feature/formSlice";

const TableForm = () => {
  const { tableData } = useSelector((store) => store.formValidationReducer);
  const dispatch = useDispatch();
  const editHandler = (id) => {
    dispatch(setEditTable({ id }));
  };
  const deleteHandler = (id) => {
    dispatch(removeTable({ id }));
  };
  return (
    <div>
      <h2 className="title"> Table</h2>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              {[
                "Name",
                "DOB",
                "Gender",
                "Skill",
                "Role",
                "Address",
                "Comments",
                "Other Skills",
                "Edit",
                "Delete",
              ].map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData &&
              tableData?.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.dateOfBirth}</td>
                  <td>{data.gender}</td>
                  <td>{data.skill}</td>
                  <td>{data.role}</td>
                  <td>{data.address}</td>
                  <td>{data.comments}</td>
                  <td>{data.otherSkills}</td>
                  <td className="btn" onClick={() => editHandler(data.id)}>Edit</td>
                  <td className="btn" onClick={() => deleteHandler(data.id)}>Delete</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableForm;
