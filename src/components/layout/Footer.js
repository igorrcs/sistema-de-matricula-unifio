const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="bg-blue-600 text-white p-1 rounded-md">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              </svg>
            </div>
            <span className="ml-2 text-sm text-gray-600">Sistema de Matrícula © {new Date().getFullYear()}</span>
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Termos de Uso</a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Política de Privacidade</a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Contato</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer