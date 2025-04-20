require 'sinatra'
require 'json'

# Configuración básica
set :public_folder, File.dirname(__FILE__) + '/public'

# Ruta principal
get '/' do
  File.read(File.join('public', 'index.html'))
end

# Endpoint API para obtener datos de herramientas
get '/api/tools' do
  content_type :json
  
  tools_data = [
    {
      id: 1,
      title: "File Explorer",
      creator: "Microsoft",
      image: "https://win98icons.alexmeub.com/icons/png/explorer-4.png",
      description: "Browse and manage your files and folders with this classic Windows XP file explorer.",
      downloadUrl: "/download/1"
    },
    # ... otros datos de herramientas
  ]
  
  tools_data.to_json
end

# Manejar descargas
get '/download/:id' do
  # En una aplicación real, servirías el archivo aquí
  # Esto es solo un placeholder que redirige a una URL dummy
  redirect "https://example.com/download/#{params[:id]}"
end

# Iniciar el servidor
if __FILE__ == $0
  set :port, 4567
  set :bind, '0.0.0.0'
  puts "Servidor iniciado en http://localhost:4567"
end
