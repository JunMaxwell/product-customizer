import { useSnapshot } from "valtio";
import { Logo } from "@pmndrs/branding";
import { AiOutlineShopping } from "react-icons/ai";
import { state } from "../store.ts";
import { Customizer } from "./Customizer.tsx";
import { Intro } from "./Intro.tsx";

export default function Overlay() {
    const snap = useSnapshot(state)
    return (
        <div className="container">
            <header>
                <Logo width="40" height="40" />
                <div>
                    <AiOutlineShopping size="3em" />
                </div>
            </header>
            {snap.intro
                ? <Intro />
                : <Customizer/>}
        </div>
    )
}
