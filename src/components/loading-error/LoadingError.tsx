import React, {FunctionComponent} from 'react';
import './LoadingError.css';
import { WithTranslation, withTranslation } from "react-i18next";

interface ILoadingErrorProps extends  WithTranslation {}

const LoadingError: FunctionComponent<ILoadingErrorProps> = (props) => {
    const { t } = props

    return (
        <div className={'loading-error'}>
            {t('error')}
        </div>
    )
}

export default withTranslation('loading-error')(LoadingError)
