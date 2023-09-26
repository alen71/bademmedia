async function getImageFiles(client: any) {
  try {
    const importAll = (r: any) => {
      return r.keys().map(r)
    }

    const images = importAll(client)

    return images
  } catch (error) {
    console.error('Error reading image files:', error)
    return []
  }
}

export default getImageFiles
