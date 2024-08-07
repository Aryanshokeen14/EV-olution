import Background from './components/Background'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { useState  , useEffect } from 'react'

const App = () => {
  let herodata = [
    {text1:"Dive into" , text2:"What you love"},
    {text1:"Indulge" , text2:"Your passions"},
    {text1:"Give in to" , text2:"Your passions"}
  ]
  
  const [herocount, setHerocount] = useState(0)
  const [playstatus, setPlaystatus] = useState(false)

  useEffect(() => {
   setInterval(() => {
    setHerocount((count)=>{return count===2?0:count+1})
   }, 3000);
  
   
  }, [])
  
  return (
    <div>
      <Background playstatus={playstatus} herocount={herocount}/>
      <Navbar/>
      <Hero
        setPlaystatus={setPlaystatus}
        herodata={herodata[herocount]}
        playstatus={playstatus}
        herocount={herocount}
        setHerocount={setHerocount}
        
      />
    </div>
  )
}

export default App
