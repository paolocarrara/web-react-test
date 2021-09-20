import {gql} from "@apollo/client";

const WealthSummaryQuery = gql`
    query MyQuery {
        wealthSummary {
            cdi
            gain
            hasHistory
            id
            profitability
            total
        }
    }
`;

export default WealthSummaryQuery
