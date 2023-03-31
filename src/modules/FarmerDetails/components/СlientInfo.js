import React from 'react';

const clientInfo = () => {

    const getMonthName = (monthIndex) => {
        const date = new Date(0);
        date.setUTCMonth(monthIndex);
        return date.toLocaleString('default', { month: 'long' });
    }

    const lastThreeMonths = [
        getMonthName(new Date().getMonth() - 1),
        getMonthName(new Date().getMonth() - 2),
        getMonthName(new Date().getMonth() - 3)
    ];

    return (
        <div className='card'>
            <div className="history_label">Сведения о клиенте</div>
            <div className="card__content">
                <div>
                    <div>ABC-XYZ:</div>
                    <div id="abc-xyz"></div>
                </div>
                {lastThreeMonths.map(month => (
                    <div key={month}>
                        <div className="month">{month + ':'}</div>
                        <div className="totalclient"></div>
                    </div>
                ))}
                <textarea placeholder="Комментарий..." id="card_comment"
                    cols="15" rows="5"></textarea>
            </div>
        </div>
    );
}

export default clientInfo;