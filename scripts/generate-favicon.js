const sharp = require('sharp')
const toIco = require('to-ico')
const fs = require('fs')
const path = require('path')

const svgPath = path.join(__dirname, '../public/plant-logo.svg')
const outputPath = path.join(__dirname, '../src/app/favicon.ico')

const sizes = [16, 32, 48]

async function generateFavicon() {
  try {
    const svgBuffer = fs.readFileSync(svgPath)

    const pngBuffers = await Promise.all(
      sizes.map(size =>
        sharp(svgBuffer)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
          .png()
          .toBuffer()
      )
    )

    const icoBuffer = await toIco(pngBuffers)

    fs.writeFileSync(outputPath, icoBuffer)
    console.log(`✓ Favicon generated successfully at ${outputPath}`)
  } catch (error) {
    console.error('Error generating favicon:', error)
    process.exit(1)
  }
}

generateFavicon()



