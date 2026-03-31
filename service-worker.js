const CACHE_NAME = 'dragonball-cache-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icons/ic_launcher.png',
  './icons/bola512.png'
];

// Evento de INSTALAÇÃO: Aqui nós salvamos os arquivos básicos na memória (Cache)
self.addEventListener('install', (evento) => {
    evento.waitUntil(
        caches.open(NOME_DO_CACHE)
            .then((cache) => {
                console.log('Arquivos em cache salvos com sucesso!');
                return cache.addAll(ARQUIVOS_PARA_CACHEAR);
            })
    );
});

// Evento de FETCH: Ocorre toda vez que o app tenta carregar algo (uma imagem, uma página)
self.addEventListener('fetch', (evento) => {
    evento.respondWith(
        // Verifica se o que foi pedido já existe na nossa memória Cache
        caches.match(evento.request)
            .then((resposta) => {
                // Se estiver no cache, retorna a cópia salva (funciona offline!)
                if (resposta) {
                    return resposta;
                }
                // Se não estiver, busca na internet normalmente
                return fetch(evento.request);
            })
    );
});

