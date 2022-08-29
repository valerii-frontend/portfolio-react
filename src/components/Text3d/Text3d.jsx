import Ztext from "react-ztext";

const Text3d = ({ children, dept, deg, perspective, layers, fade, direction, reverse, noevent }) => (
	<Ztext
		depth={dept ? dept : "1rem"} //px rem
		direction={direction ? direction : "both"} // forwards , backwards, both
		event={noevent ? "none" : "pointer"}
		eventRotation={deg ? deg : "30deg"} // deg
		eventDirection={reverse ? "reverse" : "default"}
		fade={fade ? true : false} // true false
		layers={layers ? layers : 10} //number
		perspective={perspective ? perspective : "500px"} // none or px
	>
		{children}
	</Ztext>
);

export default Text3d;
