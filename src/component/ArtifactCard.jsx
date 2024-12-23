import Card from "./Card";


const ArtifactCard = ({artifacts}) => {
    return (
        <div className="mt-6">
       <div className="flex justify-center">
       <div className="divider w-20  divider-warning "></div> 
       </div>
          <div className="text-center">
          <p>collection</p>
          <h1 className="text-xl font-semibold">Discover The Collection</h1>
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