import LayoutStyles from '../styles/Layout.module.css';
import Nav from '../components/Nav'
import Header from "./Header";

const Layout = ({children}:any) => {
  return (
    <>
    <Nav />
   
    <div className={LayoutStyles.container}>
      <main className={LayoutStyles.main}>
        <Header />
        {children}
      </main>
    </div>
    </>
  )
}

export default Layout

