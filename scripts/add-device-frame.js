const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const FRAME_PATH = path.join(__dirname, '../public/images/device-frames/iphone-frame.png')

// iPhone frame dimensions
const FRAME_WIDTH = 380
const FRAME_HEIGHT = 780
const BEZEL = 16
const CORNER_RADIUS = 50
const SCREEN_CORNER_RADIUS = 38

async function generateFrame() {
  const screenWidth = FRAME_WIDTH - BEZEL * 2
  const screenHeight = FRAME_HEIGHT - BEZEL * 2

  // Create outer frame (dark gray/black)
  const frameSvg = `
    <svg width="${FRAME_WIDTH}" height="${FRAME_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="screenMask">
          <rect width="${FRAME_WIDTH}" height="${FRAME_HEIGHT}" fill="white"/>
          <rect x="${BEZEL}" y="${BEZEL}" width="${screenWidth}" height="${screenHeight}" rx="${SCREEN_CORNER_RADIUS}" fill="black"/>
        </mask>
      </defs>
      <rect width="${FRAME_WIDTH}" height="${FRAME_HEIGHT}" rx="${CORNER_RADIUS}" fill="#1a1a1a" mask="url(#screenMask)"/>
      <rect x="${BEZEL - 1}" y="${BEZEL - 1}" width="${screenWidth + 2}" height="${screenHeight + 2}" rx="${SCREEN_CORNER_RADIUS}" fill="none" stroke="#333" stroke-width="1"/>
    </svg>
  `

  await sharp(Buffer.from(frameSvg))
    .png()
    .toFile(FRAME_PATH)

  console.log(`✓ iPhone frame generated at ${FRAME_PATH}`)
}

async function addFrameToScreenshot(inputPath, outputPath) {
  const screenWidth = FRAME_WIDTH - BEZEL * 2
  const screenHeight = FRAME_HEIGHT - BEZEL * 2

  // Create rounded mask for the screenshot
  const maskSvg = `
    <svg width="${screenWidth}" height="${screenHeight}">
      <rect width="${screenWidth}" height="${screenHeight}" rx="${SCREEN_CORNER_RADIUS}" fill="white"/>
    </svg>
  `

  // Resize and mask the screenshot
  const screenshot = await sharp(inputPath)
    .resize(screenWidth, screenHeight, { fit: 'cover', position: 'top' })
    .composite([{
      input: Buffer.from(maskSvg),
      blend: 'dest-in'
    }])
    .png()
    .toBuffer()

  // Load the frame
  const frame = await sharp(FRAME_PATH).png().toBuffer()

  // Create canvas and composite
  await sharp({
    create: {
      width: FRAME_WIDTH,
      height: FRAME_HEIGHT,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    }
  })
    .composite([
      { input: screenshot, top: BEZEL, left: BEZEL },
      { input: frame, top: 0, left: 0 }
    ])
    .png()
    .toFile(outputPath)

  console.log(`✓ Framed image saved to ${outputPath}`)
}

async function main() {
  const args = process.argv.slice(2)

  if (args[0] === '--generate-frame') {
    await generateFrame()
    return
  }

  if (args.length < 2) {
    console.log('Usage: node add-device-frame.js <input> <output>')
    console.log('       node add-device-frame.js --generate-frame')
    process.exit(1)
  }

  // Generate frame if it doesn't exist
  if (!fs.existsSync(FRAME_PATH)) {
    await generateFrame()
  }

  const [input, output] = args
  await addFrameToScreenshot(input, output)
}

main().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})

