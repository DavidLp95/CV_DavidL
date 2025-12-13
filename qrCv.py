import qrcode
from qrcode.constants import ERROR_CORRECT_H
import qrcode.image.svg

# Crear QR personalizado
qr = qrcode.QRCode(
    version=1,
    error_correction=ERROR_CORRECT_H,  # Mayor corrección de errores
    box_size=10,
    border=4,
)

# Añadir datos
datos = "https://cv-david-l.vercel.app/"
qr.add_data(datos)
qr.make(fit=True)

# Personalizar colores
img = qr.make_image(
    image_factory=qrcode.image.svg.SvgImage,
)

# Guardar
img.save("QPCV.svg")
