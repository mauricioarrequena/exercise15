import ThreadsList from "./ThreadsList"
import Chat from "./Chat"


function App() {
  return (
    <div id="app" className="flex flex-col gap-8">
      <ThreadsList />
      <Chat/>
    </div>
  )
}

export default App
