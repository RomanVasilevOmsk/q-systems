import Box from '@mui/material/Box';
import { IVacancy, PaginationQueryArg } from '../../types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { VacancyItem } from './components/VacancyItem';
import { DEFAULT_PAGINATION_LIMIT, DEFAULT_PAGINATION_PAGE } from '../../constants';
import { useCallback, useEffect, useState } from 'react';

interface VacancyListProps {
  vacancies: IVacancy[] | null;
  hasMoreVacancies: boolean;
  loadMoreVacancies: (query: PaginationQueryArg) => void;
}

export const VacancyList = ({ vacancies, loadMoreVacancies, hasMoreVacancies }: VacancyListProps) => {
  const [page, setPage] = useState<number>(DEFAULT_PAGINATION_PAGE);
  const onLoadMore = useCallback((): void => {
    if (hasMoreVacancies) {
      setPage((prev) => prev + 1);
    }
  }, [hasMoreVacancies]);

  useEffect(() => {
    const query = {
      page,
      limit: DEFAULT_PAGINATION_LIMIT,
    };
    loadMoreVacancies(query);
  }, [loadMoreVacancies, page]);

  return (
    <InfiniteScroll
      dataLength={vacancies?.length || 0}
      next={onLoadMore}
      hasMore={hasMoreVacancies}
      loader={
        <div className="loader" key="loader">
          Loading ...
        </div>
      }
      height={'70vh'}
      endMessage={<div>You've reached the end</div>}
    >
      <Box sx={{ gap: '20px', paddingBottom: '5px', display: 'flex', flexDirection: 'column' }}>
        {vacancies?.map((item) => <VacancyItem key={item.id} vacancy={item} />)}
      </Box>
    </InfiniteScroll>
  );
};
