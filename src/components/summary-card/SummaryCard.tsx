import React, { Component } from 'react';
import './SummaryCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import Card from '../card/Card';

interface SummaryCardProps {
    total: number
    profitability: number
    gain: number
    cdi: number
    currency?: string
    locale?: string
}

class SummaryCard extends Component <SummaryCardProps> {
    static defaultProps: SummaryCardProps = {
        total: 0,
        profitability: 0,
        gain: 0,
        cdi: 0,
        currency: 'BRL',
        locale: 'pt-BR'
    }

    handleEllipsesButtonOnClick = () => {}

    handleSeeMoreButtonOnClick = () => {}

    convertToCurrency = (value: number) => {
        const locales = 'pt-BR';
        const options = {
            style: 'currency',
            currency: 'BRL',
        }

        return this.numberConverter(locales, options, value)
    }

    convertToPercent = (value: number, minimumFractionDigits: number = 2) => {
        const locales = 'pt-BR';
        const options = {
            style: 'percent',
            minimumFractionDigits,
        }

        value = value/100;

        return this.numberConverter(locales, options, value)
    }

    numberConverter = (locales: string, options: Intl.NumberFormatOptions, value: number) => {
        const formatter = new Intl.NumberFormat(locales, options)

        return formatter.format(value)
    }

    render() {
        return (
            <Card>
                <div className={'summary-card'}>
                    <div className="header">
                        <div className="row main">
                            <div className="title">
                                Seu resumo
                            </div>

                            <div className="more">
                                <button onClick={this.handleEllipsesButtonOnClick}>
                                    <FontAwesomeIcon icon={faEllipsisV} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="body">
                        <div className={'row investment'}>
                            <div className="title">
                                Valor investido
                            </div>
                            <div className="value">
                                {this.convertToCurrency(this.props.total)}
                            </div>
                        </div>

                        <div className={'row summary'}>
                            <div className="row">
                                <span className="title">Rentabilidade/mes</span>
                                <div className="value">{this.convertToPercent(this.props.profitability, 3)}</div>
                            </div>

                            <div className="row">
                                <span className="title">CDI</span>
                                <div className="value">{this.convertToPercent(this.props.cdi)}</div>
                            </div>

                            <div className="row">
                                <span className="title">Ganho/mes</span>
                                <div className="value">{this.convertToCurrency(this.props.gain)}</div>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div className="footer">
                        <div className={'row actions'}>
                            <button onClick={this.handleSeeMoreButtonOnClick}>
                                Ver mais
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default SummaryCard
