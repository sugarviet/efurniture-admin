import axios from "axios";

const MAP_BOX_ACCESS_TOKEN = "pk.eyJ1Ijoibm9iaXRhODkiLCJhIjoiY2xybjR6MmJzMDdrbTJrcWxjd2x5ZWRkbCJ9.vHPLlMw5A0Dsu5PDIeKu4A"

async function getCoordinates(address) {
    const data = await axios.get(`https://api.mapbox.com/search/geocode/v6/forward?q=${address}&access_token=${MAP_BOX_ACCESS_TOKEN}`)
        .then((response) => response.data)
        .then(data => data.features[0])
        .then(feature => feature.geometry)
        .then(geometry => geometry.coordinates)

    return data;
}

export default getCoordinates;