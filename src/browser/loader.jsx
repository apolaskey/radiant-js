import m from 'mithril';

const loaderComponent = {
    view: function () {
        return (
            <div className="loader">
                <div className="box"></div>
                <div className="hill"></div>
            </div>
        )
    }
};

export { loaderComponent as LoaderComponent }