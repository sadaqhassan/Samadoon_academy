import React from 'react'
import Nav from './Nav';

const About = () => {

  return (
        <>
        <Nav/>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <h1 className="text-3xl mt-5 font-semibold text-center mx-auto">
  About Our School Management System
</h1>

<p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
  Waa system casri ah oo kuu fududeynaya maamulka iskuulkaaga — laga bilaabo ardayda ilaa maamulka dhaqaalaha, si fudud oo hufan.
</p>

<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
  
  <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>

  <img
    className="max-w-sm w-full rounded-xl h-auto"
    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
    alt=""
  />

  <div>
    <h1 className="text-3xl font-semibold">What You Get</h1>

    <p className="text-sm text-slate-500 mt-2">
      Haddii aad iibsato system-kan, waxaad heleysaa adeegyo dhamaystiran oo kaa caawinaya maamulka iskuulkaaga si fudud, degdeg ah, oo ammaan ah.
    </p>

    <div className="grid grid-cols-1 gap-10 mt-6">

      {/* Attendance */}
      <div className="flex items-center gap-4">
        <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
          <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
        </div>
        <div>
          <h3 className="text-base font-medium text-slate-600">Attendance System</h3>
          <p className="text-sm text-slate-500">
            Si fudud ula soco imaanshaha ardayda (attendance) maalin kasta.
          </p>
        </div>
      </div>

      {/* Students */}
      <div className="flex items-center gap-4">
        <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
          <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
        </div>
        <div>
          <h3 className="text-base font-medium text-slate-600">Student Management</h3>
          <p className="text-sm text-slate-500">
            Maamul dhammaan xogta ardayda: diiwaangelin, profiles, iyo warbixino.
          </p>
        </div>
      </div>

      {/* Teachers */}
      <div className="flex items-center gap-4">
        <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
          <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
        </div>
        <div>
          <h3 className="text-base font-medium text-slate-600">Teacher Management</h3>
          <p className="text-sm text-slate-500">
            Maamul macalimiinta, casharada ay dhigaan iyo jadwalkooda.
          </p>
        </div>
      </div>

      {/* Finance */}
      <div className="flex items-center gap-4">
        <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
          💰
        </div>
        <div>
          <h3 className="text-base font-medium text-slate-600">Finance & Fees</h3>
          <p className="text-sm text-slate-500">
            La soco lacagaha (fees), bixinta, iyo dakhliga iskuulka.
          </p>
        </div>
      </div>

      {/* Dashboard */}
      <div className="flex items-center gap-4">
        <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
          📊
        </div>
        <div>
          <h3 className="text-base font-medium text-slate-600">Beautiful Dashboard</h3>
          <p className="text-sm text-slate-500">
            Dashboard qurux badan oo kuu muujinaya xogta muhiimka ah si fudud.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>


        </>
    );


}

export default About