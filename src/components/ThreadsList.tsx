import { useDispatch, useSelector } from "react-redux";
import { resetUnreadCount, type Thread } from "../redux/store/threadsSlice";
import type { AppDispatch, RootState } from "../redux/store/store";
import { useEffect, useState } from "react";

const ThreadsList = () => {
  const threads: Thread[] = useSelector((state: RootState) => state.threads);
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log(selectedThread);
  }, [selectedThread]);

  const handleOnclick = (thread: Thread) => {
    setSelectedThread(thread);
    dispatch(resetUnreadCount(thread.id));
  };

  return (
    <div
      id="threadsList"
      className="w-max flex flex-col gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200"
    >
      {threads.map((thread) => (
        <div
          key={thread.id}
          id="threadListItem"
          className="flex flex-col justify-center items-start p-4 bg-white rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => handleOnclick(thread)}
        >
          <span className="text-sm text-gray-700">id: {thread.id}</span>
          <span className="text-base font-medium text-gray-900">
            name: {thread.name}
            unread messagess: {thread.unreadCount}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ThreadsList;
