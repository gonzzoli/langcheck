import { Route, Routes } from "react-router-dom";
import NewsPage from "./ArticlesPage/NewsPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MusicPage from "./MusicPage/MusicPage";
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
        overflow-y-scroll overflow-x-hidden relative
        scrollbar-thin scrollbar-thumb-gray-900 
        scrollbar-track-white pr-2">
            <Routes>
              <Route element={<NewsPage />} path='/articles' />
              <Route element={<NotesPage />} path='/notes' />
              <Route element={<YoutubePage />} path='/videos' />
              <Route element={<MusicPage />} path='/music' />
            </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
