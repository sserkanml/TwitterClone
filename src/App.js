import  Sidebar  from "./layout/sidebar"
import  Content  from "./layout/content"
import  Timeline  from "./layout/timeline"

function App() {
  return (
    <div className="App" style={{minHeight:"100vh",width:"1250px",margin:"0 auto",display:"flex"}}>
    <Sidebar/>
    <Content/>
    <Timeline/>
    
    </div>
  );
}

export default App;
