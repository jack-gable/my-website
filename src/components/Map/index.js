import dynamic from "next/dynamic";
import Spinner from "../Spinner";

const Map = dynamic(() => import("./Map"), {
	ssr: false,
	loading: <Spinner />,
});

export default Map;
