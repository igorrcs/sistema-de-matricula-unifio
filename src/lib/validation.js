export const validateCPF = (cpf) => {
  // Remover caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, '')
  
  if (cpf.length !== 11) return false
  
  // Validar CPF
  let sum = 0
  let remainder
  
  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i)
  }
  
  remainder = (sum * 10) % 11
  if ((remainder === 10) || (remainder === 11)) remainder = 0
  if (remainder !== parseInt(cpf.substring(9, 10))) return false
  
  sum = 0
  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i)
  }
  
  remainder = (sum * 10) % 11
  if ((remainder === 10) || (remainder === 11)) remainder = 0
  if (remainder !== parseInt(cpf.substring(10, 11))) return false
  
  return true
}

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePassword = (password) => {
  return password.length >= 6
}

export const validateFile = (file) => {
  const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png']
  const maxSize = 10 * 1024 * 1024 // 10MB
  
  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      message: 'Tipo de arquivo não permitido. Use PDF, JPEG ou PNG.'
    }
  }
  
  if (file.size > maxSize) {
    return {
      isValid: false,
      message: 'Arquivo muito grande. Tamanho máximo: 10MB.'
    }
  }
  
  // Validação básica de imagem (para tipos de imagem)
  if (file.type.startsWith('image/')) {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => {
        const minResolution = 1200
        const isValid = img.width >= minResolution && img.height >= minResolution
        
        resolve({
          isValid,
          message: isValid ? '' : `Resolução muito baixa. Mínimo: ${minResolution}x${minResolution}px.`
        })
      }
      img.onerror = () => {
        resolve({
          isValid: false,
          message: 'Não foi possível ler a imagem.'
        })
      }
      img.src = URL.createObjectURL(file)
    })
  }
  
  return { isValid: true, message: '' }
}