import Header from "./Header"
import Sidebar from "./Sidebar"

const PageWrapper: React.FC = (props) => {

    return (
    <div className='h-screen flex flex-col bg-slate-200'>
      <Header />
      <main className='h-full w-screen flex 
      overflow-x-hidden'>
        <Sidebar />
        <section className="h-full w-full 
        overflow-y-scroll overflow-x-hidden">
          <div className="h-full w-[95%] mx-auto">
            {props.children}
          </div>
        </section>
      </main>
    </div>
    )
}

export default PageWrapper