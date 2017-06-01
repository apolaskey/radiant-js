import RadiantView from './radiant-view';

function bubbleBackground() {
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
    );
}

export default class HelloWorldView extends RadiantView {
    view() {
        return (
            <div>
                {bubbleBackground()}
            </div>
        );
    }
}
