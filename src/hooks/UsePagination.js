import React, { useMemo } from 'react';

export const UsePagination = ({ pageCount, pageSize, currentPage, siblingCount = 1 }) => {
   const paginationRange = useMemo(() => {
      const totalPageCount = Math.ceil(pageCount / pageSize);
      const totalPageNumbers = siblingCount + 5;
      if (totalPageNumbers >= totalPageCount) {
         return Range(1, totalPageCount);
      }
      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
      const firstPageIndex = 1;
      const lastPageIndex = totalPageCount;
      if (!shouldShowLeftDots && shouldShowRightDots) {
         const leftItemCount = 3 + 2 * siblingCount;
         const leftRange = Range(1, leftItemCount);
         return [...leftRange, '', totalPageCount]
      }
   }, [pageCount, pageSize, currentPage, siblingCount]);
  return paginationRange;
}
