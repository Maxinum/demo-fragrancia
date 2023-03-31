import React, { useContext, useEffect, useState } from "react";
import BufferHeads from "./components/BufferHeader";
import styles from "./style.module.css";
import { Context } from "../../index";
import BufferListToday from "./components/BufferList";
import { fetchBuffList } from "./api";
import { observer } from "mobx-react-lite";

const Buffer = observer((props) => {
  const { orders, client } = useContext(Context);

  useEffect(() => {
    // fetchBuffList().then((data) => setBufferData(data));
    if (orders.bufOrders.length === 0) {
      fetchBuffList().then((data) => orders.setBufOrders(data));
    }
  }, []);
  // orders.setBufOrders(bufferData);

  const handleUpdate = async () => {
    const updatedData = await fetchBuffList();
    orders.setBufOrders(updatedData);
  };

  return (
    <div className={styles.module}>
      <div className={styles.buffer_label}>Buffer</div>
      <div id="buffer">
        {orders.bufOrders &&
          Object.entries(orders.bufOrders).map(([key, value]) => (
            <div key={key}>
              <BufferHeads label={key} />
              {value.map((item) => (
                <BufferListToday
                  onUpdate={handleUpdate}
                  id={item.id}
                  date={item.order_date.slice(0, item.order_date.indexOf("T"))}
                  client={item.clientId}
                  name={item.name}
                />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
});

export default Buffer;
