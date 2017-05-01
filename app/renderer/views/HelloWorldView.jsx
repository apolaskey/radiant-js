'use strict';
import RadiantView from "./RadiantView";

function BubbleBackground() {
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

export default class HelloWorldView extends RadiantView {
    view() {
        return (
            <div>
                {BubbleBackground()}
            </div>
        );
    }
}