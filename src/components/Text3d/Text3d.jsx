import Ztext from "react-ztext";

const Text3d = ({ children, dept, deg, perspective }) => (
	<Ztext
		depth={dept ? dept : "1rem"}
		direction='both'
		event='pointer'
		eventRotation={deg ? deg : "30deg"}
		eventDirection='default'
		fade={false}
		layers={10}
		perspective={perspective ? perspective : "500px"}>
		{children}
	</Ztext>
);

export default Text3d;
