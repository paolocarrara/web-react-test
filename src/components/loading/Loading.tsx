import React, {FunctionComponent} from 'react';
import './Loading.css';
import { WithTranslation, withTranslation } from "react-i18next";

interface ILoadingProps extends  WithTranslation {}

const Loading: FunctionComponent<ILoadingProps> = (props) => {
    const { t } = props

    return (
        <div className={'loading'}>
            {t('loading')}
        </div>
    )
}

export default withTranslation('loading')(Loading)
