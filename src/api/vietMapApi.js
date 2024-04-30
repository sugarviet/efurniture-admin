const VIET_MAP_API_KEY = "c043236fde99317c90dd9599c78938470a730f3e14962b4b"
const focused_latitude = 10.810753781567193
const focused_longitude = 106.66189033686534
const boundary_radius = 0.5

export const get_geo_code_api = (address) => `https://maps.vietmap.vn/api/search?api-version=1.1&apikey=${VIET_MAP_API_KEY}&focus.point.lat=${focused_latitude}&focus.point.lon=${focused_longitude}&boundary.circle.lon=${boundary_radius}&boundary.circle.lat=${boundary_radius}&boundary.circle.radius=${boundary_radius}&text=${address}`
