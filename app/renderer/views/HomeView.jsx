'use strict';
import RadiantView from "./RadiantView";
import {Injector} from "../../main/bindings/Injector";



export default class HomeView extends RadiantView {
    view() {
        return (
            <div className="bubble-container">
                <ul className="bg-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}
