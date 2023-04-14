import { isSubstring } from './helpers'

const DEVICES = {
  IPHONE: 'iPhone',
  IPAD: 'iPad',
}

const getDevice = (userAgent) => {
  if (isSubstring(userAgent, DEVICES.IPHONE)) {
    return DEVICES.IPHONE
  } else if (isSubstring(userAgent, DEVICES.IPAD)) {
    return DEVICES.IPAD
  }

  return null
}

const isIos = (userAgent) => !!getDevice(userAgent)

export { getDevice, isIos }
