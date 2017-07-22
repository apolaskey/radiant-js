class ElectronUtils {
    /**
     * Allows for webpack to intercept resources as needed for hot-reloading
     */
    getElectronResource(location) {
        if (process.env.NODE_ENV === 'development') {
            location = `http://localhost:8080/${location}`;
        } else {
            location = `file://${__dirname}/${location}`;
        }
        return location;
    }
}

export default new ElectronUtils();
