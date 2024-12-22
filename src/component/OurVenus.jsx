

const OurVenus = () => {
const image=[
    {
        img:'https://demoxml.com/html/maxmuseum/images/venu-1.jpg',
        title:'War History'},
    {img:'https://demoxml.com/html/maxmuseum/images/venu-2.jpg',title:'Classical Art'},
    {img:'https://demoxml.com/html/maxmuseum/images/venu-3.jpg',title:'Gardens' },
    {img:'https://demoxml.com/html/maxmuseum/images/venu-4.jpg',title:'Arts of Asia'},
    {img:'https://demoxml.com/html/maxmuseum/images/venu-5.jpg',title:'Kings of History'},
    {img:'https://demoxml.com/html/maxmuseum/images/venu-6.jpg',title:'Vintage Arts'},
    {img:'https://demoxml.com/html/maxmuseum/images/venu-7.jpg',title:'Arts of Asia'},
    {img:'https://demoxml.com/html/maxmuseum/images/venu-9.jpg',title:'War History'},
]

    return (
      <div className="px-6">
         <h1 className="text-center font-bold text-3xl my-5">About Our <span className="text-yellow">VENUS</span></h1>
          <div className="grid lg:grid-cols-4 lg:gap-5 gap-3 md:grid-cols-2">
           
           {
            image?.map((img,idx)=><div key={idx}>
        <div className="relative">
    
               <img className="w-full opacity-70 rounded-md" src={img.img} alt="" />
            
               <h1 className="absolute bottom-40 text-2xl font-semibold text-white left-20">{img.title}</h1>
        </div>
            </div>)
           } 
        </div>
      </div>
    );
};

export default OurVenus;
