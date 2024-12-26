import Countup from "react-countup-animate";
import { BsCollectionFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { SiHomeadvisor } from "react-icons/si";


const CountTrap = () => {

    return (
      <div className="bg-[#302E2F] ">
          <div className="sm:flex md:flex-wrap py-10 justify-around my-10 lg:w-10/12 mx-auto ">
            <div className="">
                <div className="text-5xl my-4 text-[#936A5A]">
                    <SiHomeadvisor />
                </div>

                <div className="flex font-semibold   gap-3">
                    <h1 className=" text-3xl font-bold text-white">
                        <Countup

                            StartDelay="10" endDelay="ease-in" easeStartDuration={1.5}
                            number={325}>

                        </Countup>

                    </h1>
                    <h1 className="text-white"><span>
                        Exhibitions</span> <br /> <span>Has Been Held</span></h1>
                </div>
            </div>
            <div className="">
                <div className="text-5xl my-4 text-[#936A5A]">
                    <FaAward />
                </div>

                <div className="flex  gap-3">
                    <h1 className="text-4xl text-white font-semibold  ">
                        <Countup

                            StartDelay="10" endDelay="ease-in" easeStartDuration={1.5}
                            number={255}>

                        </Countup>

                    </h1>
                    <h1 className="text-white"><span>
                        Awards</span> <br /> <span>Have Received</span></h1>
                </div>
            </div>
            <div className="">
                <div className="text-5xl my-4 text-[#936A5A]">
                <BsCollectionFill />
                </div>

                <div className="flex  gap-3">
                    <h1 className="text-4xl text-white font-semibold  ">
                        <Countup

                            StartDelay="10" endDelay="ease-in" easeStartDuration={1.5}
                            number={325}>

                        </Countup>

                    </h1>
                    <h1 className="text-white"><span>
                        
Collections
</span> <br /> <span>Of Art & Designs</span></h1>
                </div>
            </div>

        </div>
      </div>
    );
};

export default CountTrap;