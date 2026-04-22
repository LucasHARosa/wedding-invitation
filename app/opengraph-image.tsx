import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'Ana & Lucas - Casamento'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const imageData = readFileSync(join(process.cwd(), 'public/vetor-plano-de-coracao-basico.png'))
  const base64 = `data:image/png;base64,${imageData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f0eb',
          gap: 24,
        }}
      >
        <img
          src={base64}
          style={{
            width: 180,
            height: 180,
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 48,
              fontFamily: 'serif',
              color: '#3d2b1f',
              letterSpacing: 2,
            }}
          >
            Ana &amp; Lucas
          </span>
          <span
            style={{
              fontSize: 22,
              fontFamily: 'sans-serif',
              color: '#7a6155',
              letterSpacing: 4,
              textTransform: 'uppercase',
            }}
          >
            Casamento
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
