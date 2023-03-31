import React from "react";
import Filters from "../modules/FilteringOptions";
import Kanban from "../modules/Kanban";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { fetchLeads } from "../APIs/ClientAPI";

const KanbanHunter = observer(() => {
  const { kanban, lead, client, user } = React.useContext(Context);
  const [data, setData] = React.useState(kanban.hunterData);
  const [select, setSelect] = React.useState({
    city: { name: "", values: [] },
    manager: { name: "", values: [] },
    channel: { name: "", values: [] },
  });
  React.useEffect(() => {
    // if (Object.keys(kanban.hunterData).length === 0) {
    fetchLeads().then((data) => {
      setData(data);
      kanban.sethunterData(data.leads);
      kanban.setMaxId(data.maxId);
      lead.setLogs(data.logs);
      const sel = data;
      delete sel.leads;
      delete sel.maxId;
      delete sel.logs;
      setSelect(sel);
    });
    // }
  }, []);

  React.useEffect(() => {
    // kanban.sethunterData(data.lead);
    // select.push(data)
  }, [data]);

  React.useEffect(() => {
    lead.setWarmth(select.warmth);
    lead.setNeeds(select.needs);
    lead.setFields(select.fields);
    lead.setChannel(select.channel);
    lead.setObjection(select.objection);
    user.setManagers(select.manager);
    // if (client.cities.length === 0) {
    client.setCities(select.city);
    // }
  }, [select]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Filters button="Add" select={select} />
      <Kanban data={kanban.hunterData} format={kanban.format} />
    </div>
  );
});

export default KanbanHunter;
