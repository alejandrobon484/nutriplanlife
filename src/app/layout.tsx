// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'
import TawkToChat from '@/components/TawkToChat'

// ═══════════════════════════════════════════════════════════
// METADATA SEO OPTIMIZADA
// ═══════════════════════════════════════════════════════════
export const metadata: Metadata = {
  // Título que aparece en la pestaña del navegador y en Google
  title: {
    default: 'NutriPlanLife - Planificador de Comidas Personalizado y Estacional',
    template: '%s | NutriPlanLife' // Para páginas individuales
  },
  
  // Descripción que aparece en Google (max 160 caracteres)
  description: 'Crea planes de nutrición personalizados con la calculadora Harris-Benedict. Menús semanales con productos de temporada, listas de compra automáticas y recetas saludables.',
  
  // Palabras clave
  keywords: [
    'calculadora de calorías',
    'planificador de comidas',
    'menú semanal saludable',
    'dieta personalizada',
    'productos de temporada',
    'lista de compra saludable',
    'Harris-Benedict',
    'nutrición personalizada',
    'plan nutricional',
    'recetas estacionales'
  ],
  
  // Autor y creador
  authors: [{ name: 'NutriPlanLife', url: 'https://nutriplanlife.com' }],
  creator: 'Alejandro Bon',
  publisher: 'NutriPlanLife',
  
  // Configuración de robots (indexación)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph (para cuando compartes en Facebook, WhatsApp, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://nutriplanlife.com',
    siteName: 'NutriPlanLife',
    title: 'NutriPlanLife - Planificador de Comidas Personalizado',
    description: 'Crea tu plan nutricional personalizado con productos de temporada. Calculadora de calorías, menús semanales y listas de compra automáticas.',
    images: [
      {
        url: 'https://nutriplanlife.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NutriPlanLife - Planificación Nutricional Personalizada',
      },
    ],
  },
  
  // Twitter Cards (para compartir en Twitter/X)
  twitter: {
    card: 'summary_large_image',
    title: 'NutriPlanLife - Planificador de Comidas Personalizado',
    description: 'Crea planes de nutrición con productos de temporada. Calculadora de calorías y menús personalizados.',
    images: ['https://nutriplanlife.com/twitter-image.jpg'],
  },
  
  // Idioma alternativo
  alternates: {
    canonical: 'https://nutriplanlife.com',
    languages: {
      'es-ES': 'https://nutriplanlife.com',
    },
  },
  
  // Configuración adicional
  category: 'Health & Nutrition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Schema.org para Google - Datos estructurados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'NutriPlanLife',
              description: 'Planificador de comidas personalizado con productos de temporada',
              url: 'https://nutriplanlife.com',
              applicationCategory: 'HealthApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'EUR',
              },
              author: {
                '@type': 'Person',
                name: 'Alejandro Bon',
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <CookieBanner />
        <TawkToChat />
      </body>
    </html>
  )
}