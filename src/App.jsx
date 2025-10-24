import {TabsWidget} from"./components/Tabs"
import{Widget} from"./components/Gallery"

import './index.css'

function App() {

  return (
   <div className="min-h-screen">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
        <div className="hidden lg:block"></div>
        <div className="flex flex-col gap-6">
          
      
          <TabsWidget />
          <div className="w-full h-1 bg-[#363C43]/30 rounded-full shadow-inner" />
          <Widget />
          <div className="w-full h-1 bg-[#363C43]/30 rounded-full shadow-inner" /> </div>
        </div>
      </div>
    </div>
  
  )
}
export default App