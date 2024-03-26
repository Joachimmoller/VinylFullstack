import EditArtist from "./EditArtist";

function Artist(props) {
    return (
        <div
            className="border-1 border-yellow-300 min-w-[350px] max-w-[350px] m-2 py-8 px-8 max-w-sm bg-[#28241D] rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="object-cover rounded-full h-[100px] w-[100px] border-2 block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" 
                 src={props.img}
            />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-white font-semibold">
                        {props.name}
                    </p>
                    <p className="text-slate-500 font-medium">
                        {props.genre}
                    </p>
                </div>
                <EditArtist id={props.id} name={props.name} genre={props.genre} updateArtist={props.updateArtist}/>
            </div>
        </div>
    );
}

export default Artist;