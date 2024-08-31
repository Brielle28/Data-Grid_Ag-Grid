import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import React, { useState, useRef } from "react";
import "ag-grid-enterprise";
import { RowDatas } from "../../Data/RowDatas";

const AgGrid: React.FC = () => {
  const gridRef = useRef(null);
  const [columnDefs] = useState([
    { field: "name", sortable: true, filter: true, editable: true },
    { field: "age", sortable: true, filter: 'agNumberColumnFilter', editable: true },
    { field: "class", sortable: true, filter: true, editable: true },
    { field: "address", sortable: true, filter: true, editable: true },
    { field: "occupation", sortable: true, filter: true, editable: true },
    { field: "religion", sortable: true, filter: true, editable: true },
    { field: "Date of birth", sortable: true, filter: 'agDateColumnFilter', editable: true },

  ]);

  const [rowData] = useState(RowDatas)

  return (
    <div
      className="ag-theme-quartz "
      style={{
        height: "400px",
        width: "95vw",
        marginLeft: "20px"

      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        rowSelection="multiple"
        ref={gridRef}
        pagination
        paginationPageSize={10}
      />
    </div>
  );
};

export default AgGrid;
