import React from 'react'
import TableComponent from 'components/TableComponent'
import {collection, getDoc, getDocs, QuerySnapshot} from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

const OrdersList = () => {
  const [data, setData] = React.useState<any>();
  React.useEffect(()=>{
    const FetchData = async() =>{
      let array:any = [];
      const querySnapshot = await getDocs(collection(db,'orders'));
      
      querySnapshot.forEach((doc)=>{
        array.push({"id":doc.id,"data": doc.data()});
        console.log("Data: ",doc.id,"+",doc.data());
        setData(array);
    })
    }
    FetchData();
    return data;
  },[])
  return (
    <React.Fragment>
      <TableComponent data ={data} />
    </React.Fragment>
  )
}

export default OrdersList