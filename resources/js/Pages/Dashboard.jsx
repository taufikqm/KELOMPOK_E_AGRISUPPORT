import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout 
            title="Dashboard Overview"
            currentRoute="dashboard"
        >
            <Head title="Dashboard" />
            
            <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-10 w-full">
                
                <div className="mb-8 md:mb-10">
                    <h1 className="text-[28px] md:text-[32px] font-black text-slate-800 tracking-tight leading-none mb-2 text-center md:text-left">
                        Selamat Datang, {auth.user.name}! 👨‍🌾
                    </h1>
                    <p className="text-base md:text-lg text-slate-400 font-medium text-center md:text-left">
                        Berikut ringkasan aktivitas pertanian Anda hari ini.
                    </p>
                </div>

                {/* Dashboard Stats Placeholder / Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="bg-[#3D6E42]/10 p-3 rounded-xl">
                            <svg className="w-6 h-6 text-[#3D6E42]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                        </div>
                        <div>
                            <p className="text-xs md:text-sm font-bold text-slate-500 uppercase">Wilayah Kelola</p>
                            <p className="text-xl md:text-2xl font-black text-slate-800">Aktif</p>
                        </div>
                    </div>
                    
                    <Link 
                        href={route('input-kondisi.index')}
                        className="bg-[#3D6E42] p-6 rounded-2xl shadow-md shadow-[#3D6E42]/20 flex items-center gap-4 hover:scale-[1.02] transition-transform group"
                    >
                        <div className="bg-white/10 p-3 rounded-xl">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        </div>
                        <div>
                            <p className="text-xs md:text-sm font-bold text-white/70 uppercase">Tindakan Cepat</p>
                            <p className="text-lg md:text-xl font-black text-white">Input Kondisi Baru</p>
                        </div>
                    </Link>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="bg-blue-500/10 p-3 rounded-xl">
                            <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                        </div>
                        <div>
                            <p className="text-xs md:text-sm font-bold text-slate-500 uppercase">Update Terakhir</p>
                            <p className="text-lg md:text-xl font-bold text-slate-800">Hari Ini</p>
                        </div>
                    </div>
                </div>

                {/* Welcome Card */}
                <div className="overflow-hidden bg-white shadow-sm rounded-2xl md:rounded-3xl border border-slate-200">
                    <div className="p-6 md:p-10 text-slate-500 leading-relaxed text-sm md:text-base">
                        <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4">Siap Memulai?</h3>
                        <p className="mb-6">
                            AgriSupport membantu Anda memantau kondisi lahan secara presisi. Mulailah dengan mendaftarkan wilayah lahan Anda, kemudian lakukan observasi rutin untuk mendapatkan analisis risiko dan rekomendasi tindakan yang akurat.
                        </p>
                        <div className="flex gap-4">
                            <Link href={route('wilayah-lahan.index')} className="text-[#3D6E42] font-bold hover:underline flex items-center gap-2">
                                Kelola Wilayah
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
