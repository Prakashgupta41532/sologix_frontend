import Image from 'next/image'
import React from 'react'
import GreenEnergy from '../../../public/A.png'
import Government from '../../../public/government 2.png'
import Reduce from '../../../public/Group 8.png'
import Secure from '../../../public/Vector (2).png'
import LowMaintenance from '../../../public/Vector (2).png'
import save from '../../../public/Group (3).png'
 
export const WhySolar = () => {
  return (
    <div>
       <div className="bg-white p-4 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-[#03257F]">Why Use Solar Energy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        
        <div className="text-center p-4 md:p-6">
          <div className="mb-4">
            <Image src={GreenEnergy} alt="Green Energy" className="mx-auto h-10 w-10 md:h-12 md:w-12" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#03257F]">Green Energy</h3>
          <p>Solar is a renewable source of energy and is available everywhere and for everyone. There is no greenhouse gas emission responsible for disastrous climate change.</p>
        </div>

        <div className="text-center p-4 md:p-6">
          <div className="mb-4">
            <Image src={Government} alt="Government Support" className="mx-auto h-10 w-10 md:h-12 md:w-12" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#03257F]">Government Support</h3>
          <p>With 40% Govt. subsidy, solar PV system is within everyone's reach. Subsidy is applicable on complete installation of solar system.</p>
        </div>

        <div className="text-center p-4 md:p-6">
          <div className="mb-4">
            <Image src={Reduce} alt="Reduce Power Bill" className="mx-auto h-10 w-10 md:h-12 md:w-12" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#03257F]">Reduce Power Bill</h3>
          <p>A perfectly designed solar PV system can reduce electricity bill up to 90% under net metering arrangement. Generate your own energy and say bye-bye to electricity bill.</p>
        </div>

        <div className="text-center p-4 md:p-6">
          <div className="mb-4">
            <Image src={Secure} alt="Secure Investment" className="mx-auto h-10 w-10 md:h-12 md:w-12" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#03257F]">Secure Investment</h3>
          <p>Solar is a safe Investment; you will get your investment back in 3-4 years and thereafter 100% profit for the next 21 years.</p>
        </div>

        <div className="text-center p-4 md:p-6">
          <div className="mb-4">
            <Image src={LowMaintenance} alt="Low Maintenance" className="mx-auto h-10 w-10 md:h-12 md:w-12" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#03257F]">Low Maintenance</h3>
          <p>There is no moving part in the Solar PV system, so its maintenance is minimal. We provide comprehensive operation & maintenance support.</p>
        </div>

        <div className="text-center p-4 md:p-6">
          <div className="mb-4">
            <Image src={save} alt="Save The Planet" className="mx-auto h-10 w-10 md:h-12 md:w-12" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#03257F]">Save The Planet</h3>
          <p>Earth’s atmosphere is getting warmer due to GHGs emission. Solar energy helps in mitigating GHG emission and reduce global warming.</p>
        </div>

      </div>
      <div className="text-center mt-6 md:mt-8">
        <button className="px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg border border-[#357CCA] font-bold">Book a Call!</button>
      </div>
    </div>
    </div>
  )
}
