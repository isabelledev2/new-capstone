<<<<<<< HEAD
import React from "react";
import Table from "./Table";

export default function Tables({ tables }) {

    const list = tables.map(table => {
        return <Table 
            key={table.table_id}
            table={table}
            table_id={table.table_id}
            table_name={table.table_name}
            capacity={table.capacity}
            status={table.status}
        />
    });

    return(
        <div>
            {list}
        </div>
    );

=======
import React from "react";
import Table from "./Table";

export default function Tables({ tables }) {

    const list = tables.map(table => {
        return <Table 
            key={table.table_id}
            table={table}
            table_id={table.table_id}
            table_name={table.table_name}
            capacity={table.capacity}
            status={table.status}
        />
    });

    return(
        <div>
            {list}
        </div>
    );

>>>>>>> c6842d8ce2a3a6fc2c01ee13f639b328a570eae5
}