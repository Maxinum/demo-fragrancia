import React from 'react';
import Filter from './components/Filter';
import PieChart from './components/PieChart'
import Table from './components/Table';
import Card from '../../../../components/Card'
import Skeleton from './components/Skeleton';

const MainModule = () => {
    const fetch = false;

    return (
        fetch ? (
            <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ width: '60%' }}>
                    <div style={{ display: 'flex' }}>
                        <Card title='Средний чек' total='1000' res={true} />
                        <Card title='Средний чек' total='1000' res={true} />
                        <Card title='Средний чек' total='1000' res={true} />
                    </div>
                    <Table />
                    <div>
                        <PieChart />
                    </div>
                </div>
                <div style={{ width: '40%' }}>
                    <Filter />
                    <div>
                        <Card title='Kaspi' />
                        <Card title='Forte' />
                    </div>
                    <Table />
                    <Table />
                </div>
            </div>
        ) : (
            <Skeleton />
        )

    );
}

export default MainModule;
