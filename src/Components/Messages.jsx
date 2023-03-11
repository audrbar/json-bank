import { useContext } from "react";
import { Global } from "./GlobalContext";

function Messages() {

    const { messages } = useContext(Global);

    return (
        <div className="fixed top-5 left-5 z-50">
            {
                messages.map(m => (<div key={m.id} className={'alert alert-' + m.type} role="alert">
                    {m.text}
                </div>))
            }
        </div>
    )
}

export default Messages;