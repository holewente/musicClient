import React from 'react';
import {useQuery} from 'react-query'
import { getCateg } from './getData';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


export const Books=()=>{
    const {data,status}=useQuery('categ',getCateg)
    status=='success' && console.log(data.data)

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Author</Th>
          <Th>Title</Th>
          <Th>Category</Th>
          <Th>Year</Th>

        </Tr>
      </Thead>
      <Tbody>
        {status=='success' && data.data.map(obj=>
            
        <Tr key={obj.id}>
          <Td>{obj.author}</Td>
          <Td>{obj.title}</Td>
          <Td>{obj.category}</Td>
          <Td>{obj.year}</Td>
        </Tr>
        )}
      </Tbody>
    </Table>
  );
}