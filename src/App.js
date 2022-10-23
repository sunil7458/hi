import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Agengies from "./Agengies";
import Bannner from "./Bannner";
import Candidataes from "./Candidataes";
import View from "./coponent/View";
import Home from "./Home";
import Job from "./Job";
import Nav from "./Nav";
import Panal from "./Panal";
import Post from "./Post";
import Form  from "./coponent/Form";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"
import Form2 from "./coponent/Form2";
import User from "./coponent/User";
import Edit from "./coponent/Edit";
import Help from "./coponent/Help"
import Faq from "./Faq";
import Report from "./coponent/Report";
import Table from "./Table";
import Shedule from "./coponent/Shedule";

const App = () => {
  const queryClient = new QueryClient()
  return (
    <div className="">
<QueryClientProvider client={queryClient}>

<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element = {<Nav/>}/>
          <Route path="/post" element = {<Post/>}/>
          <Route  path="/dash" element = {<Bannner/>} />
          <Route path="/job"  element = {<Job/>}/>
          <Route path="/age" element  = {<Agengies/>}/>
          <Route path="/can"  element = {<Candidataes/>}/>
          <Route  path="/vie"  element = {<View/>}/>
          <Route  path="/pan"  element   = {<Panal/>} />
          <Route path="/use" element = {<Form/>} />
          <Route   path="/user"  element = {<User/>} />
          <Route path="/Edit" element = {<Edit/>} />
          <Route  path="/ed"   element= {<Faq/>} />
          <Route   path="/u"  element = {<Report/>} />
          <Route path="/c" element = {<Table/>} />
          <Route path="/help" element =  {<Help/>}/>
          <Route  path= "/:userid" element  = {<Form2/>}/>
          <Route  path="/sh"  element = {<Shedule/>}   />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools/>
</QueryClientProvider>
      
      {/* <Home/> */}
    </div>
  );
};

export default App;
