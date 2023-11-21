import {useState} from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import {invoke} from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke("greet", {name}));
    }

    return (
        <div class="container">
            <div class="left-column">
                <img src={preactLogo} alt="Preact Logo" class="logo preact"/>
                <h1>Preact + Tauri</h1>
                <p>
                    Edit <code>src/App.jsx</code> and save to reload.
                </p>
                <p>
                    <a class="link" href="https://preactjs.com" target="_blank" rel="noopener noreferrer">
                        Learn Preact
                    </a>
                    {" | "}
                    <a class="link" href="https://tauri.studio" target="_blank" rel="noopener noreferrer">
                        Learn Tauri
                    </a>
                </p>
            </div>
            <div className="right-column">
                <h1>Welcome to Tauri!</h1>

                <div className="row">
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="/vite.svg" className="logo vite" alt="Vite logo"/>
                    </a>
                    <a href="https://tauri.app" target="_blank">
                        <img src="/tauri.svg" className="logo tauri" alt="Tauri logo"/>
                    </a>
                    <a href="https://preactjs.com" target="_blank">
                        <img src={preactLogo} className="logo preact" alt="Preact logo"/>
                    </a>
                </div>

                <p>Click on the Tauri, Vite, and Preact logos to learn more.</p>

                <form
                    className="row"
                    onSubmit={(e) => {
                        e.preventDefault();
                        greet().then(r => console.log(r));
                    }}
                >
                    <input
                        id="greet-input"
                        onInput={(e) => setName(e.currentTarget.value)}
                        placeholder="Enter a name..."
                    />
                    <button type="submit">Greet</button>
                </form>

                <p>{greetMsg}</p>
            </div>
        </div>
    );
}

export default App;
