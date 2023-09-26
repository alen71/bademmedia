export const FB_PIXEL_ID = process.env.NEXT_FACEBOOK_PIXEL_ID

export const pageView = () => {
  // @ts-ignore
  window.fbq('track', 'pageView')
}

export const event = (name: string, options = {}) => {
  // @ts-ignore
  window.fbq('track', name, options)
}
