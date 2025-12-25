// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

// ═══════════════════════════════════════════════════════════
// METADATA SEO OPTIMIZADA
// ═══════════════════════════════════════════════════════════
export const metadata: Metadata = {
  // Título que aparece en Google y en la pestaña del navegador
  title: {
    default: 'NutriPlanLife - Planificador de Comidas Estacionales Personalizado',
    template: '%s | NutriPlanLife'
  },
  
  // Descripción para resultados de búsqueda (máximo 160 caracteres)
  description: 'Tu planificador nutricional personalizado con menús estacionales. Crea tu perfil, obtén planes semanales adaptados y genera listas de compra automáticas con productos de temporada.',
  
  // Palabras clave relevantes
  keywords: [
    'planificador de comidas',
    'menú semanal',
    'nutrición personalizada',
    'productos de temporada',
    'lista de compra saludable',
    'plan nutricional',
    'recetas estacionales',
    'menú primavera',
    'menú verano',
    'menú otoño',
    'menú invierno',
    'planificación nutricional'
  ],
  
  // Información del autor
  authors: [{ name: 'NutriPlanLife', url: 'https://nutriplanlife.com' }],
  creator: 'Alejandro Bon',
  publisher: 'NutriPlanLife',
  
  // Configuración de indexación
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
  
  // Open Graph - Para compartir en redes sociales
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://nutriplanlife.com',
    siteName: 'NutriPlanLife',
    title: 'NutriPlanLife - Tu Planificador Nutricional Personalizado',
    description: 'Crea tu perfil nutricional, obtén menús semanales con productos de temporada y genera listas de compra automáticas.',
    images: [
      {
        url: 'https://nutriplanlife.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NutriPlanLife - Planificador de Comidas Estacionales',
      },
    ],
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'NutriPlanLife - Planificador de Comidas Estacionales',
    description: 'Tu planificador nutricional con menús de temporada',
    images: ['https://nutriplanlife.com/og-image.jpg'],
  },
  
  // URL canónica
  alternates: {
    canonical: 'https://nutriplanlife.com',
    languages: {
      'es-ES': 'https://nutriplanlife.com',
    },
  },
  
  // Categoría
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
        {/* Schema.org - Datos estructurados para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'NutriPlanLife',
              description: 'Planificador de comidas personalizado con productos de temporada y menús estacionales',
              url: 'https://nutriplanlife.com',
              applicationCategory: 'HealthApplication',
              operatingSystem: 'Web Browser',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'EUR',
              },
              author: {
                '@type': 'Person',
                name: 'Alejandro Bon',
              },
              featureList: [
                'Perfil nutricional personalizado',
                'Menús semanales estacionales',
                'Lista de compra automática',
                'Recetas de primavera, verano, otoño e invierno',
                'Planificación por días (desayuno, comida, cena)'
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <CookieBanner />

      </body>
    </html>
  )
}