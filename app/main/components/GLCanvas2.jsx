const glCanvas2 = {
    create: function (id) {
        if(id === undefined) throw 'No ID element specified for Canvas object!';
        return (
            <canvas id='{id}' className="webgl"/>
        )
    }
};

export { glCanvas2 as GLCanvas2 }