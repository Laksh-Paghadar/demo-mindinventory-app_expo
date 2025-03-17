import { useAppContext } from '@src/context';
import { RootState, useAppDispatch } from '@src/store';
import { setResourceData } from '@src/store/reducers/resources';
import { loader, logger } from '@src/utils';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useResources = () => {
  const { services } = useAppContext();
  const dispatch = useAppDispatch();

  const list = useSelector(
    (state: RootState) => state.resourceListData.resource
  );

  const getResourceListData = useCallback(async () => {
    loader.current?.show();
    try {
      const res = await services.getResourceList();
      dispatch(setResourceData(res));
    } catch (error) {
      logger('Error getResource >>', error);
    } finally {
      loader.current?.hide();
    }
  }, []);

  useEffect(() => {
    getResourceListData();
  }, [getResourceListData]);

  return {
    getResourceListData,
    list,
  };
};

export default useResources;
