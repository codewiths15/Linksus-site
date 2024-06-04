import React from "react";
import ttaLogo from '../../../assests/images/tta.png';
import shortlistedLogo from '../../../assests/images/shortlisted.png';
import { PieChart } from '@mui/x-charts/PieChart';
import arrowLogo from '../../../assests/images/arrow.png';
import arrowright from '../../../assests/images/arrowright.png';
import arrowleft from '../../../assests/images/arrowleft.png';




const data = [

    { value: 30, label: '60% (Shortlsted)' ,color:'#0175C4'},
      { value: 40, label: '40% (Missed)' ,color:'#E9EBFD'}
  ];
  
  const size = {
    width: 400,
    height: 150,
    margin: { top: 0, right: 140, bottom: 0, left: 0 },
  
  };
function StatsContent() {
  return (
    <statscontent className="flex w-full px-3">
      <maincard className="w-3/5 flex ">
        <card className=" flex flex-col w-1/3">
          <tta className="border-2 px-4 mb-5 pt-4">
            <p className="font-epilogue text-base font-semibold">
              Total Tasks Applied
            </p>
            <partition className="flex pt-4 justify-around ">
              <p className="font-epilogue text-6xl font-semibold">45</p>
              <img src={ttaLogo} alt="ttaLogo" className="h-14 mt-1" />
            </partition>
          </tta>

          <shortlisted className="border-2 pt-4 px-4">
            <p className="font-epilogue text-base font-semibold">Shortlisted</p>
            <partition className="flex pt-4 justify-around ">
              <p className="font-epilogue text-6xl font-semibold">18</p>
              <img src={shortlistedLogo} alt="ttaLogo" className="h-14 mt-1" />
            </partition>
          </shortlisted>
        </card>

        <maincard className="border flex justify-around flex-col w-3/5 mx-5 p-4">
          <p className="font-epilogue  text-base font-semibold">
            Tasks Applied Status
          </p>
          <PieChart series={[{ data, innerRadius: 50 }]} {...size}></PieChart>
          <textcomp className="flex items-center">
            <p className="font-epilogue  text-sm text-[#0175C4] font-semibold">
              View All Applications
            </p>
            <img src={arrowLogo} alt="ttaLogo" className="h-6 w-6" />
          </textcomp>
        </maincard>
      </maincard>
      <maincard className="border w-2/5">
        <p className="font-epilogue text-base font-semibold px-4 py-4 border-b-2">
          Upcomming Submissions
        </p>
        <textcomp className="flex items-center justify-between border-b-2 pr-2 shadow-[0_5px_20px_-5px_rgba(0,0,0,0.2)]">
          <p className="text-base font-medium px-4 py-4 ">
            <span className="font-semibold">{`Today, `}</span>26 November
          </p>
          <div className="flex items-center ">
            <img src={arrowleft} alt="ttaLogo" className="h-6 w-6 mx-1" />
            <img src={arrowright} alt="ttaLogo" className="h-6 w-6 mx-1" />
          </div>
        </textcomp>
      </maincard>
    </statscontent>
  );
}

export default StatsContent;
