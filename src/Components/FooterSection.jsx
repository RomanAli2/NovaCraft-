function FooterSection(){
    return(
        <>
            <footer className="bg-gray-900 border-t border-gray-700 p-3 gap-2 items-center flex-col md:flex-row justify-center text-white flex md:justify-around">
             <div className="flex items-center gap-2">
        <span>
            <img className="w-10 xl:w-20 md:w-15" src="/logo.png"/>
        </span>
        <span className='text-xs md:text-md '>
          <p>© 2026 Novacraft Agency. All rights reserved.</p>
        </span>
    </div>
    <div>
        <p className="text-xs md:text-sm">Website Owner & Developer: Roman Ali </p>
    </div>

            </footer>
        </>
    )
}

export default FooterSection