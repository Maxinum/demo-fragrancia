import React from 'react';
import Filters from '../modules/FilteringOptions';
import Kanban from '../modules/Kanban';

const KanbanFarmer = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Filters button='Перезагрузить'/>
            <Kanban />
        </div>
    );
}

export default KanbanFarmer;
