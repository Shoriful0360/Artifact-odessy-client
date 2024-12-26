import { Typewriter } from "react-simple-typewriter";
import Card from "./Card";


const ArtifactCard = ({artifacts}) => {
    return (
        <div className="mt-6">
       <div className="flex justify-center">
       <div className="divider w-20  divider-warning "></div> 
       </div>
          <div className="text-center">
          <p>collection</p>
          <h1 className="text-xl font-semibold">
            <span className="text-yellow">
                     <Typewriter
                     words={['Discover The Collection']}
                     loop={Infinity}
                     cursor
                     cursorStyle='_'
                     typeSpeed={70}
                     deleteSpeed={50}
                     delaySpeed={1000}
                     >
            
                     </Typewriter>
                     </span>
          </h1>
          </div>
        <div className="grid mt-5 lg:grid-cols-3 md:grid-cols-2 gap-7">
        {
            artifacts?.map((artifact=> <Card key={artifact._id} artifact={artifact}></Card>))
           } 
        </div>
        </div>
    );
};

export default ArtifactCard;