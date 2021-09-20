import React, { Component } from 'react';
import './SummaryCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Card from '../../card/Card';
import { WithTranslation, withTranslation } from "react-i18next";

export enum Actions {
    SeeMore,
    Ellipsis
}

export interface ComponentActionsHandlerParamsInterface {
    action: Actions
    data: any
}

interface ISummaryCardProps extends WithTranslation {
    id: number
    total: number
    profitability: number
    gain: number
    cdi: number
    currency?: string
    locale?: string,
    componentActionsHandler: (params: ComponentActionsHandlerParamsInterface) => void
}

interface ISummaryCardState {
    visibleValues: boolean
}

class SummaryCard extends Component<ISummaryCardProps, ISummaryCardState> {
    static defaultProps = {
        id: 0,
        total: 0,
        profitability: 0,
        gain: 0,
        cdi: 0,
        currency: 'BRL',
        locale: 'pt-BR'
    }

    state: ISummaryCardState = {
        visibleValues: true
    }

    handleEllipsesButtonOnClick = () => {
        const params: ComponentActionsHandlerParamsInterface = {
            action: Actions.Ellipsis,
            data: {
                id: this.props.id
            }
        }

        this.props.componentActionsHandler(params)
    }

    handleSeeMoreButtonOnClick = () => {
        const params: ComponentActionsHandlerParamsInterface = {
            action: Actions.SeeMore,
            data: {
                id: this.props.id
            }
        }

        this.props.componentActionsHandler(params)
    }

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

    handleHideValues = () => {
        this.setState({visibleValues: !this.state.visibleValues});
    }

    render() {
        const { t } = this.props;

        return (
            <Card>
                <div className={'summary-card'}>
                    <div className='header'>
                        <div className='row main'>
                            <div className='title'>
                                {t('header.main.title')}
                            </div>

                            <div className='more'>
                                <button onClick={this.handleEllipsesButtonOnClick}>
                                    <FontAwesomeIcon icon={faEllipsisV} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='body'>
                        <div className={'row investment'}>
                            <div className='title'>
                                {t('body.investment.title')}
                            </div>
                            <div className={'value ' + (this.state.visibleValues ? '' : 'hide')}>
                                <span>
                                   {this.convertToCurrency(this.props.total)}
                                </span>
                                <button onClick={this.handleHideValues}>
                                    {this.state.visibleValues ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                </button>
                            </div>
                        </div>

                        <div className={'row summary'}>
                            <div className='row'>
                                <span className='title'>{t('body.summary.profitability.title')}</span>
                                <div className='value'>{this.convertToPercent(this.props.profitability, 3)}</div>
                            </div>

                            <div className='row'>
                                <span className='title'>{t('body.summary.cdi.title')}</span>
                                <div className='value'>{this.convertToPercent(this.props.cdi)}</div>
                            </div>

                            <div className='row'>
                                <span className='title'>{t('body.summary.gain.title')}</span>
                                <div className='value'>{this.convertToCurrency(this.props.gain)}</div>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div className='footer'>
                        <div className={'row actions'}>
                            <button onClick={this.handleSeeMoreButtonOnClick}>
                                {t('footer.actions.seeMoreButtonText')}
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withTranslation('summary-card')(SummaryCard)
