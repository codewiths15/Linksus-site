import React from "react";
import "./../../../styles/Freelancer/ApplicationHistory/History.css";

const HistorySection = ({ data }) => {
  const getStatusClass = (status) => {
    return status.toLowerCase().replace(" ", "-");
  };

  return (
    <div className="history-list">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Task</th>
            <th>Date Applied</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={item.logo} className="company-logo1" alt="Company Logo" />
                {item.companyName}
              </td>
              <td>{item.task}</td>
              <td>{item.dateApplied}</td>
              <td>
                <div className={`status ${getStatusClass(item.status)}`}>
                  {item.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistorySection;
