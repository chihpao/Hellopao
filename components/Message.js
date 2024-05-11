const flexBlockClasses = "flex py-3 px-4";
const messageClasses = "max-w-[300px] message rounded-xl rounded-br-[0px] shadow-md px-3 py-2 bg-gradient-to-r";

export function UserMessage({ message }) {
    return (
        <div className={`${flexBlockClasses} justify-end`}>
            <div className={`${messageClasses} from-indigo-500 to-indigo-600 text-white`}>
                {message.text}
            </div>
        </div>
    );
}

export function AIMessage({ message }) {
    return (
        <div className={`${flexBlockClasses} justify-start`}>
            <div className={`${messageClasses} from-slate-300 to-slate-400 text-slate-800`}>
                {message.text}
            </div>
        </div>
    );
}

export function ErrorMessage({ message }) {
    return (
        <div className={`${flexBlockClasses} justify-start`}>
            <div className={`${messageClasses} from-lime-400 to-indigo-600 text-white`}>
                {message.text}
            </div>
        </div>
    );
}
