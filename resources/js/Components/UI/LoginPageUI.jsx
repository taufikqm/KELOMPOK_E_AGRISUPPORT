import React from 'react';

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

export default function LoginPageUI({ onRegisterClick }) {
  return (
    <div className="bg-[#f8fafc] relative size-full min-h-screen">
      <div className="absolute bg-[rgba(61,90,61,0.05)] blur-[64px] left-[659.33px] rounded-[22369600px] size-[500px] top-[-250px]" />
      <div className="absolute bg-[rgba(34,197,94,0.05)] blur-[64px] left-[-200px] rounded-[22369600px] size-[400px] top-[465.33px]" />
      <div className="absolute content-stretch flex flex-col gap-[32px] h-[577.333px] items-start left-[230.67px] top-[44px] w-[448px]">
        <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-center relative shrink-0 w-full">
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-[209.885px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="-translate-x-1/2 absolute font-['Inter'] font-extrabold leading-[40px] left-[105px] not-italic text-[#3d5a3d] text-[36px] text-center top-[-2px] tracking-[-0.9px] whitespace-nowrap">
                AgriSupport
              </p>
            </div>
          </div>
          <div className="h-[20px] relative shrink-0 w-[343.094px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="-translate-x-1/2 absolute font-['Inter'] font-medium leading-[20px] left-[172.5px] not-italic text-[#64748b] text-[14px] text-center top-[-0.33px] whitespace-nowrap">
                Sistem Pendukung Keputusan Pertanian Berbasis Data
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border-[0.667px] border-[rgba(226,232,240,0.5)] border-solid content-stretch flex flex-col h-[429.333px] items-start pb-[0.667px] pt-[64.667px] px-[56.667px] relative rounded-[16px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
          <div className="h-[308px] relative shrink-0 w-full">
            {/* Email Input */}
            <div className="absolute h-[72px] left-0 top-0 w-[334.667px]">
              <div className="absolute content-stretch flex h-[18.667px] items-start left-0 top-[3.33px] w-[34.271px]">
                <p className="font-['Inter'] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">
                  Email
                </p>
              </div>
              <div className="absolute h-[48px] left-0 top-[24px] w-[334.667px]">
                <div className="absolute content-stretch flex flex-col h-[48px] items-start left-0 top-0 w-[334.667px]">
                  <div className="bg-[rgba(241,245,249,0.3)] border-[0.667px] border-[rgba(0,0,0,0)] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[334.667px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[44px] pr-[12px] py-[8px] relative rounded-[inherit] size-full">
                      <p className="font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
                        nama@email.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[12px] size-[20px] top-[14px] text-[#64748b]">
                  <EnvelopeIcon />
                </div>
              </div>
            </div>
            
            {/* Password Input & Forget Link */}
            <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-0 top-[92px] w-[334.667px]">
              <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full">
                <div className="h-[20px] relative shrink-0 w-[67.271px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['Inter'] font-semibold leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-[-0.33px] whitespace-nowrap">
                      Kata Sandi
                    </p>
                  </div>
                </div>
                <div className="h-[16px] relative shrink-0 w-[63.656px] cursor-pointer">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                    <p className="font-['Inter'] font-semibold leading-[16px] not-italic relative shrink-0 text-[#3d5a3d] text-[12px] whitespace-nowrap">
                      Lupa sandi?
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[48px] relative shrink-0 w-full">
                <div className="absolute content-stretch flex flex-col h-[48px] items-start left-0 top-0 w-[334.667px]">
                  <div className="bg-[rgba(241,245,249,0.3)] border-[0.667px] border-[rgba(0,0,0,0)] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[334.667px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[44px] py-[8px] relative rounded-[inherit] size-full">
                      <p className="font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
                        Masukkan kata sandi
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[12px] size-[20px] top-[14px] text-[#64748b]">
                  <LockIcon />
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[296.67px] pt-[4px] px-[4px] size-[26px] top-[11px] text-[#64748b] cursor-pointer">
                  <div className="h-[18px] overflow-clip relative shrink-0 w-full">
                    <EyeIcon />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <button className="absolute bg-[#3d5a3d] border-none h-[48px] left-0 rounded-[12px] shadow-[0px_10px_15px_0px_rgba(61,90,61,0.2),0px_4px_6px_0px_rgba(61,90,61,0.2)] top-[204px] w-[334.667px]">
              <p className="-translate-x-1/2 absolute font-['Inter'] font-bold leading-[24px] left-[167.92px] not-italic text-[16px] text-center text-white top-[10.33px] whitespace-nowrap">
                Masuk ke Sistem
              </p>
            </button>
            
            {/* Register Link */}
            <div className="absolute h-[20px] left-0 top-[288px] w-[334.667px]">
              <p className="-translate-x-1/2 absolute font-['Inter'] font-medium leading-[0] left-[167.67px] not-italic text-[#64748b] text-[0px] text-center top-[-0.33px] whitespace-nowrap">
                <span className="leading-[20px] text-[14px]">Belum memiliki akun? </span>
                <span className="font-['Inter'] font-bold leading-[20px] text-[#3d5a3d] text-[14px] cursor-pointer" onClick={onRegisterClick}>Daftar akun baru</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer Text */}
        <div className="content-stretch flex h-[16px] items-start opacity-60 relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-['Inter'] font-medium leading-[16px] min-h-px min-w-px not-italic relative text-[#64748b] text-[12px] text-center tracking-[1.2px] uppercase">
            © 2026 AgriSupport • Modern Farming Tech
          </p>
        </div>
      </div>
    </div>
  );
}
