import { useContext } from "react";
import { Global } from "./GlobalContext";

function Messages() {

    const { messages } = useContext(Global);

    return (
        <div className="w-64">
            {
                messages.map(m => (<div key={m.id} className="bg-slate-400 border-2" role="alert">
                    {m.text}
                </div>))
            }
        </div>
    )
}

export default Messages;