import React, {FunctionComponent} from 'react';
import './App.css';
import WealthSummaryQuery from "./api/queries/WealthSummaryQuery";
import { useQuery } from "@apollo/client";
import { WealthSummary } from "./models/WealthSummary";
import SummaryList from "./components/summary-list/SummaryList";
import {WithTranslation, withTranslation} from "react-i18next";
import Loading from "./components/loading/Loading";

interface IAppProps extends  WithTranslation {}

const App: FunctionComponent<IAppProps> = (props) => {
    const { t } = props
    const { loading, error, data } = useQuery(WealthSummaryQuery);
    let wealthSummaries: Array<WealthSummary> = [];

    if (!loading && data && data.wealthSummary && data.wealthSummary) {
        wealthSummaries = data.wealthSummary
    }

    return (
        <div className='app'>
            {loading ? (
                <Loading />
            ) : (
                error ? (
                    <div>{t('error')}</div>
                ) : (
                    <SummaryList summaries={wealthSummaries} />
                )
            )}
        </div>
    );
}

export default withTranslation('app')(App);
