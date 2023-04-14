const timing = global.performance?.timing

const getPageLoad = () => timing.loadEventEnd - timing.responseEnd
const getLatency = () => timing.responseEnd - timing.fetchStart

export { getPageLoad, getLatency }
