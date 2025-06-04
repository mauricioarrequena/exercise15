import { messages } from "../data/messages";
import { threads } from "../data/threads";

const Chat = () => {
  const messagesData = messages.filter((message) => message.threadId === 1);
  const thread = threads.find((thread) => thread.id === 1);

  return (
    <div
      id="chat"
      className="w-max flex flex-col h-full max-h-screen border border-gray-200 rounded-xl bg-white p-4 gap-4"
    >
      {/* Header */}
      <div
        id="chat__header"
        className="p-3 border-b border-gray-300 text-lg font-medium text-gray-800"
      >
        <span>{thread?.name}</span>
      </div>

      {/* Messages */}
      <div
        id="chat__messages"
        className="flex flex-col gap-3 flex-1 overflow-y-auto p-2"
      >
        {messagesData.map((message) => (
          <div
            key={message.id}
            id="message"
            className="flex flex-col gap-1 border border-gray-200 rounded-lg p-3 bg-gray-50"
          >
            <span
              id="message__author"
              className="text-sm font-semibold text-gray-700"
            >
              {message.author}
            </span>
            <span
              id="message__content"
              className="text-sm text-gray-800"
            >
              {message.content}
            </span>
          </div>
        ))}
      </div>

      {/* Input + Button */}
      <div id="chat__input" className="border-t border-gray-300 pt-3">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
