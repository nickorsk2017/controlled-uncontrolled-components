import {useMemo} from 'react';
type GetCountRender = () => number;
type Counter = () => number;

export const useCountRender: () => {getCountRender: GetCountRender; counter: Counter} = () => {
  return useMemo((): {getCountRender: GetCountRender; counter: Counter} => {
    let count = 0;
    const counter: Counter = () => {
      return count++;
    };
    const getCountRender: GetCountRender = () => {
      return count;
    };
    return {getCountRender, counter};
  }, []);
};
