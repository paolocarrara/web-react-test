import React  from 'react';
import './SummaryCard.css';

interface SummaryCardProps {
    total: number
    profitability: number
    gain: number
    cdi: number
}

const SummaryCard = (props: SummaryCardProps) => {
    return (
        <div className={'summary-card'}>
            <div className="header">
                <div className="title">
                    Seu resumo
                </div>

                <div className="more">
                    ...
                </div>
            </div>

            <div className={'investment'}>
                <div className="title">
                    Valor investido
                </div>
                <div className="value">
                    {props.total}
                </div>
            </div>

            <div className={'summary'}>
                <div className="row">
                    <span className="title">Rentabilidade/mes</span>
                    <div className="value">{props.profitability}</div>
                </div>

                <div className="row">
                    <span className="title">CDI</span>
                    <div className="value">{props.cdi}</div>
                </div>

                <div className="row">
                    <span className="title">Ganho/mes</span>
                    <div className="value">{props.gain}</div>
                </div>
            </div>
        </div>
    )
}

export default SummaryCard