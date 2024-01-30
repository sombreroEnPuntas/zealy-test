import { Reaction } from "../types";

interface Props {
    reactions: Reaction[]
}
const Reactions = ({ reactions }: Props) => (
    <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    }}>
        {reactions.map((reaction, index) => (
            <div key={index} style={{ position: 'absolute', top: reaction.top, left: reaction.left }}>
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                    <div className="p-6">
                        <p className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {reaction.comment}
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default Reactions

