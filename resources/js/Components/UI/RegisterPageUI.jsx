import React from 'react';

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.077l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
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

export default function RegisterPageUI({ onLoginClick }) {
  return (
    <div className="bg-[#f8fafc] relative size-full min-h-screen">
      <div className="absolute bg-[rgba(61,90,61,0.05)] blur-[64px] left-[644px] rounded-[22369600px] size-[500px] top-[-250px]" />
      <div className="absolute bg-[rgba(34,197,94,0.05)] blur-[64px] left-[-200px] rounded-[22369600px] size-[400px] top-[601.33px]" />
      <div className="absolute content-stretch flex flex-col gap-[24px] h-[737.333px] items-start left-[223px] top-[32px] w-[448px]">
        <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-center relative shrink-0 w-full">
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-[197.51px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
              <p className="font-['Inter'] font-extrabold leading-[32px] not-italic relative shrink-0 text-[#3d5a3d] text-[24px] text-center tracking-[-0.6px] whitespace-nowrap">
                Daftar Akun Baru
              </p>
            </div>
          </div>
          <div className="h-[20px] relative shrink-0 w-[264.969px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="-translate-x-1/2 absolute font-['Inter'] font-medium leading-[20px] left-[132px] not-italic text-[#64748b] text-[14px] text-center top-[-0.33px] whitespace-nowrap">
                Bergabung dengan AgriSupport sekarang
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border-[0.667px] border-[rgba(226,232,240,0.5)] border-solid content-stretch flex flex-col h-[617.333px] items-start pb-[0.667px] pt-[48.667px] px-[48.667px] relative rounded-[16px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
          <div className="h-[520px] relative shrink-0 w-full">
            {/* Full Name Input */}
            <div className="absolute h-[68px] left-0 top-0 w-[350.667px]">
              <div className="absolute content-stretch flex h-[18.667px] items-start left-0 top-[3.33px] w-[95.583px]">
                <p className="font-['Inter'] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">
                  Nama Lengkap
                </p>
              </div>
              <div className="absolute h-[44px] left-0 top-[24px] w-[350.667px]">
                <div className="absolute content-stretch flex flex-col h-[44px] items-start left-0 top-0 w-[350.667px]">
                  <div className="bg-[rgba(241,245,249,0.3)] border-[0.667px] border-[rgba(0,0,0,0)] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[350.667px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[40px] pr-[12px] py-[8px] relative rounded-[inherit] size-full">
                      <p className="font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
                        Masukkan nama lengkap
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[12px] size-[16px] top-[14px] text-[#64748b]">
                  <UserIcon />
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div className="absolute h-[68px] left-0 top-[84px] w-[350.667px]">
              <div className="absolute content-stretch flex h-[18.667px] items-start left-0 top-[3.33px] w-[34.271px]">
                <p className="font-['Inter'] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">
                  Email
                </p>
              </div>
              <div className="absolute h-[44px] left-0 top-[24px] w-[350.667px]">
                <div className="absolute content-stretch flex flex-col h-[44px] items-start left-0 top-0 w-[350.667px]">
                  <div className="bg-[rgba(241,245,249,0.3)] border-[0.667px] border-[rgba(0,0,0,0)] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[350.667px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[40px] pr-[12px] py-[8px] relative rounded-[inherit] size-full">
                      <p className="font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
                        nama@email.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[12px] size-[16px] top-[14px] text-[#64748b]">
                  <EnvelopeIcon />
                </div>
              </div>
            </div>

            {/* Phone Input */}
            <div className="absolute h-[68px] left-0 top-[168px] w-[350.667px]">
              <div className="absolute content-stretch flex h-[18.667px] items-start left-0 top-[3.33px] w-[98.76px]">
                <p className="font-['Inter'] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">
                  Nomor Telepon
                </p>
              </div>
              <div className="absolute h-[44px] left-0 top-[24px] w-[350.667px]">
                <div className="absolute content-stretch flex flex-col h-[44px] items-start left-0 top-0 w-[350.667px]">
                  <div className="bg-[rgba(241,245,249,0.3)] border-[0.667px] border-[rgba(0,0,0,0)] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[350.667px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[40px] pr-[12px] py-[8px] relative rounded-[inherit] size-full">
                      <p className="font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
                        08123456789
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[12px] size-[16px] top-[14px] text-[#64748b]">
                  <PhoneIcon />
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="absolute h-[68px] left-0 top-[252px] w-[350.667px]">
              <div className="absolute content-stretch flex h-[18.667px] items-start left-0 top-[3.33px] w-[67.271px]">
                <p className="font-['Inter'] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">
                  Kata Sandi
                </p>
              </div>
              <div className="absolute h-[44px] left-0 top-[24px] w-[350.667px]">
                <div className="absolute content-stretch flex flex-col h-[44px] items-start left-0 top-0 w-[350.667px]">
                  <div className="bg-[rgba(241,245,249,0.3)] border-[0.667px] border-[rgba(0,0,0,0)] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[350.667px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[40px] pr-[40px] py-[8px] relative rounded-[inherit] size-full">
                      <p className="font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
                        Minimal 8 karakter
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[12px] size-[16px] top-[14px] text-[#64748b]">
                  <LockIcon />
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[314.67px] pt-[4px] px-[4px] size-[24px] top-[10px] text-[#64748b] cursor-pointer">
                  <div className="h-[16px] overflow-clip relative shrink-0 w-full">
                    <EyeIcon />
                  </div>
                </div>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="absolute h-[68px] left-0 top-[336px] w-[350.667px]">
              <div className="absolute content-stretch flex h-[18.667px] items-start left-0 top-[3.33px] w-[139.104px]">
                <p className="font-['Inter'] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">
                  Konfirmasi Kata Sandi
                </p>
              </div>
              <div className="absolute h-[44px] left-0 top-[24px] w-[350.667px]">
                <div className="absolute content-stretch flex flex-col h-[44px] items-start left-0 top-0 w-[350.667px]">
                  <div className="bg-[rgba(241,245,249,0.3)] border-[0.667px] border-[rgba(0,0,0,0)] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[350.667px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[40px] pr-[40px] py-[8px] relative rounded-[inherit] size-full">
                      <p className="font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
                        Ketik ulang kata sandi
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[12px] size-[16px] top-[14px] text-[#64748b]">
                  <LockIcon />
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[314.67px] pt-[4px] px-[4px] size-[24px] top-[10px] text-[#64748b] cursor-pointer">
                  <div className="h-[16px] overflow-clip relative shrink-0 w-full">
                    <EyeIcon />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button className="absolute bg-[#3d5a3d] border-none h-[44px] left-0 rounded-[12px] shadow-[0px_10px_15px_0px_rgba(61,90,61,0.2),0px_4px_6px_0px_rgba(61,90,61,0.2)] top-[432px] w-[350.667px]">
              <p className="-translate-x-1/2 absolute font-['Inter'] font-bold leading-[24px] left-[175.23px] not-italic text-[16px] text-center text-white top-[8.33px] whitespace-nowrap">
                Daftar Sekarang
              </p>
            </button>

            {/* Login Link */}
            <div className="absolute h-[20px] left-0 top-[500px] w-[350.667px]">
              <p className="-translate-x-1/2 absolute font-['Inter'] font-medium leading-[0] left-[175.82px] not-italic text-[#64748b] text-[0px] text-center top-[-0.33px] whitespace-nowrap">
                <span className="leading-[20px] text-[14px]">Sudah memiliki akun? </span>
                <span className="font-['Inter'] font-bold leading-[20px] text-[#3d5a3d] text-[14px] cursor-pointer" onClick={onLoginClick}>Masuk di sini</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="content-stretch flex h-[16px] items-start opacity-60 relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-['Inter'] font-medium leading-[16px] min-h-px min-w-px not-italic relative text-[#64748b] text-[12px] text-center">
            Dengan mendaftar, Anda menyetujui syarat dan ketentuan kami
          </p>
        </div>
      </div>
    </div>
  );
}
