import React from 'react';

const DataTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <h3>No hay datos para mostrar.</h3>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className='container' id='containerDataTable'>
      <h1>Tabla de Datos:</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
