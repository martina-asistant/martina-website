import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarjetas de visita con QR | Martina Assistant',

  description:
    'Tarjetas de visita con QR conectadas a tu agenda para que tus clientes puedan consultar la disponibilidad y reservar desde el móvil.',

  openGraph: {
    title: 'Tarjetas de visita con QR | Martina Assistant',
    description:
      'Convierte tu tarjeta de visita en una puerta directa a tu agenda. Tus clientes escanean el QR, consultan la disponibilidad y reservan desde el móvil.',
    url: 'https://martinaassistant.com/tarjetas-qr',
    siteName: 'Martina Assistant',
    locale: 'es_ES',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tarjetas de visita con QR | Martina Assistant',
    description:
      'Tarjetas de visita con QR conectadas a tu agenda para recibir reservas desde el móvil.',
  },
}

export default function TarjetasQrLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
