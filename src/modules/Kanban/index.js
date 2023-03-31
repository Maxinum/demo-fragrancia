import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-dnd-beautiful";
import onDragEnd from "./helpers/onDragEnd";
import Column from "./components/Column";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import ListColumn from "./components/ListColumn";

const Board = observer((props) => {
  const { kanban } = React.useContext(Context);
  const [columns, setColumns] = useState(props.data);

  React.useEffect(() => {
    kanban.sethunterData(columns);
  }, [columns]);

  React.useEffect(() => {
    setColumns(props.data);
  }, [props.data]);

  const format = props.format;

  const ValidColumn = (props) => {
    if (format === "kanban") {
      return <Column {...props} />;
    } else {
      return <ListColumn {...props} />;
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          flexDirection: format === "kanban" ? "row" : "column",
        }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <ValidColumn
                format={format}
                key={columnId}
                columnId={columnId}
                column={column}
              />
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
});

export default Board;
