import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus)
  const dispatch = useDispatch()

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const conteroller = new AbortController();
    const signal = conteroller.signal;
    dispatch(fetchStatusActions.markFetchStart());
    fetch('http://localhost:8080/items', { signal })
      .then(res => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchFinish());
        dispatch(itemsActions.addInitialItems(items));
      })
    return () => {
      conteroller.abort();
    }
  }, [fetchStatus])
  return <>
  </>
}
export default FetchItems