import {Table} from "antd";
import { useState,useEffect } from 'react';
import axios from 'axios';

const ProductTable = () => {
  <></>
  const [product, setProduct] = useState([]);
  

  useEffect(() => {

    axios.get("/all")
      .then(res=>setProduct(res.data))
      .then(err=>console.log(err))
  })
    
const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      
    },
    {
      title: 'Name',
      dataIndex: 'name',
      
    },
    {
      title: 'Qty',
      dataIndex: 'qty',

    },
    {
      title: 'Price',
      dataIndex: 'price',

    },
    {
      title: 'Status',
      dataIndex: 'status',
      
      render: (_,payload) =>
      { let col="Empty" ;
        const l =payload.status;

        if(payload.status==='active')
        {
          col="green";
        }
        if(payload.status==='inactive')
        {
          col="red";
        }

         
        return <p style={{marginTop:"11px",color:col}}>{l}</p>
      }
 
      
    },
    {
      title: 'Date Added',
      dataIndex: 'date',
      
    },
  ];
    return(
        <Table style={{paddingLeft:"4px"}} dataSource={product} columns={columns} pagination={{pageSize:5}}/>
    );
};
export default ProductTable;