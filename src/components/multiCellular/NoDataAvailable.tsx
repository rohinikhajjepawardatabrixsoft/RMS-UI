import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as NoDataIcon } from '../../assets/svgs/no-data-default.svg';

const NoDataAvailable = (): ReactElement => {
  const { t } = useTranslation(['common']);
  return (
    <div className="w-full h-full flex items-center justify-center font-semibold text-lg">
      <div className="flex flex-col justify-center items-center">
        <NoDataIcon />
        <div className="mt-4">{t('common:DataNotAvailable')}</div>
      </div>
    </div>
  );
};



export default NoDataAvailable;
