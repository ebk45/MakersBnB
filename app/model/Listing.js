/*export */ class Listing {
    constructor(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

module.exports = {
    Listing: Listing
};
