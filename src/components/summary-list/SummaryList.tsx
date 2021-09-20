import React, {FunctionComponent} from 'react';
import './SummaryList.css';
import SummaryCard, { Actions, ComponentActionsHandlerParamsInterface } from "./summary-card/SummaryCard";
import { WealthSummary } from "../../models/WealthSummary";
import ListItem from "./list-item/ListItem";

interface ISummaryListProps {
    summaries: Array<WealthSummary>
}

const SummaryList: FunctionComponent<ISummaryListProps> = (props) => {
    const componentActionsHandler = (params: ComponentActionsHandlerParamsInterface) => {
        if (params.action === Actions.SeeMore) {
            // TODO Handle
        } else if (params.action === Actions.Ellipsis) {
            // TODO Handle
        }
    }

    return (
        <div className='summary-list'>
            {props.summaries.map(wealthSummary =>
                <ListItem key={wealthSummary.id}>
                    <SummaryCard
                        id={wealthSummary.id}
                        total={wealthSummary.total}
                        profitability={wealthSummary.profitability}
                        gain={wealthSummary.gain}
                        cdi={wealthSummary.cdi}
                        componentActionsHandler={componentActionsHandler}
                    />
                </ListItem>
            )}
        </div>
    )
}

export default SummaryList
