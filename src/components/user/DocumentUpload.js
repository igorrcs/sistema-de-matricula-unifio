'use client'
import { useState, useRef } from 'react'
import { validateFile } from '@/lib/validation'

export default function DocumentUpload({ document, onUpload }) {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadStatus, setUploadStatus] = useState(null)
  const fileInputRef = useRef(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      processFile(files[0])
    }
  }

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      processFile(file)
    }
  }

  const processFile = (file) => {
    const validation = validateFile(file)
    
    if (validation.isValid) {
      setUploadStatus({ type: 'success', message: 'Arquivo enviado com sucesso!' })
      onUpload({ type: document.name, file })
    } else {
      setUploadStatus({ type: 'error', message: validation.message })
    }
  }

  return (
    <div className="p-4 border rounded">
      <h3 className="font-semibold mb-2">{document.name}</h3>
      {document.description && <p className="text-sm text-gray-600 mb-4">{document.description}</p>}
      
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragging ? 'border-blue-400 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileSelect}
        />
        
        <div className="space-y-2">
          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium text-blue-600">Clique para enviar</span> ou arraste e solte
            </p>
            <p className="text-xs text-gray-500">
              PDF, JPG, PNG até 10MB
            </p>
          </div>
        </div>
      </div>

      {uploadStatus && (
        <div className={`mt-3 p-3 rounded text-sm ${
          uploadStatus.type === 'success' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {uploadStatus.message}
        </div>
      )}
    </div>
  )
}