import { Route, Routes } from "react-router-dom";
import NewsPage from "./ArticlesPage/NewsPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NotesPage from "./NotesPage/NotesPage";
import YoutubePage from "./YoutubePage/YoutubePage";


const App: React.FC = () => {

  return (
    <div className='h-screen flex flex-col bg-slate-200'>
      <Header />
      <main className='h-full w-screen flex 
      overflow-x-hidden'>
        <Sidebar />
        <section className="h-full w-full 
        overflow-y-scroll overflow-x-hidden relative">
            <Routes>
              <Route element={<NewsPage />} path='/articles' />
              <Route element={<NotesPage />} path='/notes' />
              <Route element={<YoutubePage />} path='/videos' />
            </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
