import "./Background.css"
import image1 from '../components/Assets/image1.png'
import image2 from '../components/Assets/image2.png'
import image3 from '../components/Assets/image3.png'
import video1 from '../components/Assets/video1.mp4'

const Background = ({playstatus , herocount}) => {
  if(playstatus){
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type ='video/mp4'/>
      </video>
    )
  }
  else if(herocount===0){
    return(
      <img src={image1} className="background fade-in" alt="" />
    )
  }
  else if(herocount===1){
    return(
      <img src={image2} className="background fade-in"  alt="" />
    )
  }
  else if(herocount===2){
    return(
      <img src={image3} className="background fade-in" alt="" />
    )
  }
}

export default Background
