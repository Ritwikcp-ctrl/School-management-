const Navbar =()=>{
    return(
        <div className="flex items-center justify-between p-4">
            {/*search bar */}
            <div className="hidden md:flex">
                <img src="/search.png" alt="" width={14} height={14} />
            </div>

            {/*icons and user */}
            <div className="flex items-center gap-6">
                <div className="bg-white rounded-full w-7 h-7  flex items-center justify-center cursor-pointer">
                    <img src="/message.png" alt="" width ={20} height={20}/>
                </div>
                <div className="bg-white rounded-full w-7 h-7 flex items-center jsutify-center cursor-pointer ">
                    <img src="/announcement.png" alt="" width={20} height={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs">Sunny rai</span>
                    <span>Admin</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;