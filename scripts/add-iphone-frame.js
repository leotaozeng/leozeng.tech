const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const sourcePath = path.join(__dirname, '../public/images/projects/totemist/my-profile.png')
const outputPath = path.join(__dirname, '../public/images/projects/totemist/my-profile-framed.png')

const FRAME_PADDING = 50
const CORNER_RADIUS = 40
const NOTCH_WIDTH = 150
const NOTCH_HEIGHT = 30
const HOME_INDICATOR_WIDTH = 134
const HOME_INDICATOR_HEIGHT = 5
const FRAME_COLOR = '#1a1a1a'
const SHADOW_COLOR = 'rgba(0, 0, 0, 0.3)'

async function addiPhoneFrame() {
  try {
    const sourceMetadata = await sharp(sourcePath).metadata()
    const sourceWidth = sourceMetadata.width
    const sourceHeight = sourceMetadata.height

    const frameWidth = sourceWidth + FRAME_PADDING * 2
    const frameHeight = sourceHeight + FRAME_PADDING * 2 + NOTCH_HEIGHT + HOME_INDICATOR_HEIGHT + 20

    const screenshotX = FRAME_PADDING
    const screenshotY = FRAME_PADDING + NOTCH_HEIGHT
    const notchX = (frameWidth - NOTCH_WIDTH) / 2
    const notchY = FRAME_PADDING
    const homeIndicatorX = (frameWidth - HOME_INDICATOR_WIDTH) / 2
    const homeIndicatorY = frameHeight - FRAME_PADDING - HOME_INDICATOR_HEIGHT - 10

    const frameBorder = 8
    const screenX = screenshotX - frameBorder
    const screenY = screenshotY - frameBorder
    const screenWidth = sourceWidth + frameBorder * 2
    const screenHeight = sourceHeight + frameBorder * 2

    const frameSVG = `
      <svg width="${frameWidth}" height="${frameHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect
          x="0"
          y="0"
          width="${frameWidth}"
          height="${frameHeight}"
          rx="${CORNER_RADIUS}"
          ry="${CORNER_RADIUS}"
          fill="${FRAME_COLOR}"
          filter="url(#shadow)"
        />

        <rect
          x="${screenX}"
          y="${screenY}"
          width="${screenWidth}"
          height="${screenHeight}"
          rx="0"
          ry="0"
          fill="black"
        />

        <rect
          x="${notchX}"
          y="${notchY}"
          width="${NOTCH_WIDTH}"
          height="${NOTCH_HEIGHT}"
          rx="15"
          ry="15"
          fill="${FRAME_COLOR}"
        />

        <rect
          x="${homeIndicatorX}"
          y="${homeIndicatorY}"
          width="${HOME_INDICATOR_WIDTH}"
          height="${HOME_INDICATOR_HEIGHT}"
          rx="2.5"
          ry="2.5"
          fill="rgba(255, 255, 255, 0.4)"
        />
      </svg>
    `

    const frameBuffer = await sharp(Buffer.from(frameSVG))
      .resize(frameWidth, frameHeight)
      .png()
      .toBuffer()

    const screenshot = await sharp(sourcePath)
      .resize(sourceWidth, sourceHeight, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer()

    const result = await sharp(frameBuffer)
      .composite([
        {
          input: screenshot,
          left: screenshotX,
          top: screenshotY
        }
      ])
      .png()
      .toBuffer()

    fs.writeFileSync(outputPath, result)
    console.log(`✓ Framed image generated successfully at ${outputPath}`)
    console.log(`  Frame dimensions: ${frameWidth}x${frameHeight}`)
    console.log(`  Screenshot dimensions: ${sourceWidth}x${sourceHeight}`)
  } catch (error) {
    console.error('Error adding iPhone frame:', error)
    process.exit(1)
  }
}

addiPhoneFrame()
