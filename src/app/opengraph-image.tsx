import { ImageResponse } from 'next/og';
import { seoConfig } from '@/lib/seo-config';

export const runtime = 'edge';
export const alt = `${seoConfig.siteName} — ${seoConfig.author.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          background: 'linear-gradient(135deg, #0f172a 0%, #111827 100%)',
          color: '#f8fafc',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: '#38bdf8',
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          {seoConfig.author.location ?? 'Kerala, India'}
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
          {seoConfig.siteName}
        </div>
        <div style={{ fontSize: 36, color: '#94a3b8', marginTop: 16 }}>
          Full Stack Developer
        </div>
        <div
          style={{
            fontSize: 26,
            color: '#cbd5e1',
            marginTop: 40,
            maxWidth: 900,
            display: 'flex',
          }}
        >
          {seoConfig.description}
        </div>
      </div>
    ),
    { ...size }
  );
}