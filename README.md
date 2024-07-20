# Análise de Sentimento em Feedback Visual para Melhorar a Experiência do Cliente

Este projeto visa utilizar IA Generativa para analisar feedback visual de clientes, a fim de melhorar a experiência do cliente. A ferramenta processa imagens contendo feedbacks dos clientes, extrai o texto usando OCR e realiza uma análise de sentimento para gerar insights úteis.

## Estrutura do Repositório

- `/inputs` - Contém imagens de feedback dos clientes.
- `/output` - Armazena os resultados do reconhecimento de texto extraído das imagens.
- `README.md` - Documentação do projeto, incluindo descrição do processo e insights.

## Processos

1. **Coleta de Dados**: Imagens de feedback de clientes são coletadas e armazenadas na pasta `/inputs`.
2. **Reconhecimento de Texto**: Utilizamos um modelo de OCR para extrair o texto das imagens.
3. **Análise de Sentimento**: O texto extraído é analisado para identificar o sentimento predominante.
4. **Resultados**: Insights e tendências são gerados e armazenados na pasta `/output`.

## Ferramentas e Tecnologias Utilizadas

- **OCR:** [Tesseract](https://github.com/tesseract-ocr/tesseract) ou API de OCR da Microsoft
- **Análise de Sentimento:** [Sentiment Analysis API](https://www.text-analysis.com/sentiment-analysis/)
- **JavaScript:** Para o desenvolvimento do processamento e análise.

## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/SeuUsuario/visual-feedback-analysis.git
   ```

2. Navegue até o diretório do projeto:

    ```bash
    cd visual-feedback-analysis
    ```

3. Instale as dependências necessárias (se aplicável):

    ```bash
    npm install
    ```
4. Coloque as imagens de Feedback da pasta `inputs`.

5. Execute o script para processar as imagens e analisar o sentimento.

    ```bash
    node src/analyze.js
    ```

6. Inicie o Servidor Web

     ```bash
    node src/server.js
    ```

7. Acesse a Página de Resultados:

Abra seu navegador e vá para http://localhost:3000 para visualizar os resultados da análise de sentimento.

## Exemplos e Insights

Veja os exemplos de imagens e resultados da análise na pasta /output. Esta seção também inclui alguns gráficos e relatórios gerados a partir da análise de sentimento.

## Contribuições
Sinta-se à vontade para contribuir com melhorias, sugestões ou correções. Abra uma issue ou um pull request para colaborar!

## Licença
Este projeto está licenciado sob a MIT License - veja o LICENSE para mais detalhes.