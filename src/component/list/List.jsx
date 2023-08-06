import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, timestampsArray,currency,searchedItems,setSelectedOrderDetails,setSelectedOrderTimeStamps }) => {
  const newRows = searchedItems.map((row) => {
    let stampItem = timestampsArray.find((item) => {
      return row['&id'] === item['&id']
    })
    row.timeStamps = stampItem.timestamps;
    return row;
  })


  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {
          newRows.map((row,index) => (
            <ListRow key={index} onClick={()=>{
              setSelectedOrderDetails(row.executionDetails)
              setSelectedOrderTimeStamps(row.timeStamps)
            }}>
              <ListRowCell>{row["&id"]}</ListRowCell>
              <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
              <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
              <ListRowCell>{row.timeStamps.orderSubmitted}</ListRowCell>
              <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
            </ListRow>
          ))
        }
      </tbody>
    </table>
  );
};

export default List;
