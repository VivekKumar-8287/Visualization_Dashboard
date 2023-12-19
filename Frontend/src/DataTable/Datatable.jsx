import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

// const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 90,
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 160,
//       valueGetter: (params) =>
//         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
//   ];

//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];

const Table = (props) => {
  const { loading,allData } = props;

  // Check if data is still loading
  if (loading) {
    return <p>Loading...</p>;
  }

  // Check if there's an error
  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  // Define the columns for the data grid
  const columns = [
    { field: "sector", headerName: "Sector", width: 150 },
    { field: "topic", headerName: "Topic", width: 110 },
    { field: "insight", headerName: "Insight", width: 300 },
    { field: "url", headerName: "URL", width: 300 },
    { field: "Region", headerName: "Region", width: 70 },
    { field: "startyear", headerName: "Startyear", width: 70 },
    { field: "impact", headerName: "Impact", width: 70 },
    { field: "published", headerName: "published", width: 150 },
    { field: "country", headerName: "country", width: 200 },
    { field: "relevance", headerName: "relevance", width: 100 },
    { field: "pestle", headerName: "pestle", width: 150 },
    { field: "source", headerName: "source", width: 150 },
    { field: "title", headerName: "title", width: 300 },
    { field: "likelihood", headerName: "likelihood", width: 120 },
    // ... add more columns as needed
  ];

  // Use the fetched data as rows
  const rows = allData;

  // Define a function to extract the row id from the data
  const getRowId = (row) => row._id.slice(-4);

  return (
    <div className=" card p-3 border border-2 mt-4">
      <h2>Table Showing all Data</h2>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          getRowId={getRowId}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 20]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Table;
