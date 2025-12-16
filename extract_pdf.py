import pdfplumber

# Abrir el PDF y extraer todo el texto
with pdfplumber.open('web gravity.pdf') as pdf:
    full_text = ''
    for page in pdf.pages:
        full_text += page.extract_text() + '\n\n'
    
    # Guardar el texto en un archivo
    with open('documentacion_extraida.txt', 'w', encoding='utf-8') as f:
        f.write(full_text)
    
    print(f"✅ Texto extraído exitosamente!")
    print(f"Total de páginas: {len(pdf.pages)}")
    print(f"Archivo guardado como: documentacion_extraida.txt")
