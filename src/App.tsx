import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./ArticlesPage/NewsPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NoteForm from "./NotesPage/NoteForm";
import NotesPage from "./NotesPage/NotesPage";

const modals = [
  {
    name: 'NoteForm',
    component: <NoteForm />
  }
]

const App: React.FC = () => {
  const [modalShowing, setModalShowing] = useState('')

  function showModal(modalName: string) {
    setModalShowing(modalName)
  }

  function closeModal() {
    setModalShowing('')
  }
  
  return (
    <div className='h-screen flex flex-col bg-slate-200'>
      <Header />
      <main className='h-full w-screen flex 
      overflow-x-hidden'>
        <Sidebar />
        <section className="h-full w-full 
        overflow-y-scroll overflow-x-hidden relative">
          {modalShowing === '' ? '' :
          <div className="absolute top-0 left-0 w-full h-full
          bg-black bg-opacity-60 flex justify-center items-center">
            {modals.find(modal => modal.name === modalShowing)?.component}
          </div>
          }
          <div className="h-full w-[95%] mx-auto">
            <Routes>
              <Route element={<NewsPage />} path='/articles' />
              <Route element={<NotesPage onShowModal={showModal} />} path='/notes' />
            </Routes>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
