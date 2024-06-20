import AppRoutes from "./AppRoutes";



const Layout = () => {
return (

    
        <>
          <header className="fixed-top">
            <h1>This is header section</h1>
          </header>
          <main style={{ marginTop: "150px" }}>
            <AppRoutes />
          </main>
          <footer>
            <h1>This is the Footer</h1>
          </footer>
        </>
      );
    };
    
    export default Layout;
    


