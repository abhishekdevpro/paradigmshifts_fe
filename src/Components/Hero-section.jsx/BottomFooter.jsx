const BottomFooter =()=>{
    return(
        <div className="absolute bottom-0 left-0 right-0 px-4 bg-black/50 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-white">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-sm sm:text-base font-medium">Drug and Alcohol</span>
              </div>
              
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
              
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-sm sm:text-base font-medium">Rehabilitation and Retention</span>
              </div>
              
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
              
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-sm sm:text-base font-medium">Monitoring</span>
              </div>
            </div>
          </div>
        </div>
    )
}

export default BottomFooter