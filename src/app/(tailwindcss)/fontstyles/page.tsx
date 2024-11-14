export default function FontStyles(){
    return(
        <div className="lg:bg-blue-100 lg:min-h-screen md:bg-green-200 md:min-h-screen
        sm:bg-red-200 sm:h-fit xl:bg-blue-300 xl:min-h-screen">
            <h1 className="font-bold lg:text-3xl md:text-2xl sm:text-xl 
            font-serif text-center py-4">Heading of the Paragraph</h1>
            <p className="lg:text-lg md:text-base sm:text-md sm:line-clamp-2 md:line-clamp-none 
            lg:line-clamp-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam 
                iaculis enim eget pretium. Suspendisse lacinia, purus et faucibus semper, 
                arcu sapien facilisis felis, sit amet accumsan massa nulla at eros. 
                Suspendisse sem sem, molestie vitae magna id, ornare commodo justo. 
                Sed accumsan varius augue. <span 
                className="underline underline-offset-4 italic text-red-700 decoration-green-700
                hover:underline-offset-2 hover:decoration-slate-400 cursor-pointer">MZS CodeWorks </span>
                 Maecenas elementum, augue eget malesuada 
                eleifend, turpis neque vestibulum nisl, in tempus nisi lectus mollis ligula. 
                Morbi leo nibh, iaculis vitae fringilla vel, bibendum non nulla. Donec nec 
                consequat mi. Aliquam at purus erat. Donec tincidunt diam quis lorem volutpat 
                auctor. Vestibulum sed interdum ligula. Mauris et feugiat sapien, a faucibus ipsum. 
                Donec erat justo, faucibus consequat metus non, gravida rhoncus augue.</p>
        </div>
    )
}