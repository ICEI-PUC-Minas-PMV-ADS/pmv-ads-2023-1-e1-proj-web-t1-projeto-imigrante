# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge


Os testes funcionais a serem realizados no aplicativo são descritos a seguir.
 

|     Caso de teste     | CT-01 - Visualizar detalhes das informações  |                                                                                                                                                                                                                                                                                                                                                                                                                        
| :-------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados | RF-01 - O site deve permitir ao usuário visualizar o texto completo das informações.|                                                                                                                                                                                                                                                                                                                                                                  
|   Objetivo do Teste   |Verificar se as notícias estão sendo apresentadas completamente na página de leitura da informação.  |                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site: [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4) Clicar em uma das informações que deseja ler |
|  Critérios de Êxito   | A página deve apresentar a imagem de destaque da informação, título, texto completo e uma seção para realizar comentário.                                                                                                                                                                                                                                                                                                                               |

|     Caso de teste     | CT-02 – Tradução das páginas para o inglês.                                                                                                                                                                                                                                                         |
| :-------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisitos Associados | RF-02 - O site deve possuir a opção de traduzir todo o conteúdo das páginas para o inglês.                                                                                                                                                           |
|   Objetivo do Teste   | Verificar se o conteúdo está sendo traduzido para o inglês.                                                                                                                                                                                                                                          |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site:  [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4)Clicar no ícone EN que estará no canto direito da barra de navegação. <br> 4)Ao clicar  no ícone PT, a página voltará para o idioma original. |
|  Critérios de Êxito   | Após os passos descritos, a página será traduzida.                                                                                                                                                                                                                    |


|     Caso de teste     | CT-03 – Realizar doação |
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-03 -O site deverá permitir que o usuário realize doações para imigrantes e refugiados. |
|   Objetivo do Teste   | Verificar se o usuário consegue realizar doação no site.                                                                                                                                                                    |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site: [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4) Na barra de navegação no canto direito, clicar no botão doar <br> 5)Selecionar forma de pagamento e valor  <br> 6)Clicar no botão próximo  <br> 7)O usuário é redirecionado para a página de pagamento de acordo com o método escolhido, que seriam boleto, cartão de crédito e pix . <br> 8)Caso a esolha seja cartão de crédito, o usuário deverá selecionar a bandeira do cartão e preencher todos os campos que são obrigatórios, e para as outras formas de pagamento, será necessário apenas preencher os campos com os dados pessoais.   <br> 9)Clicar no botão doar.                                                        |
|  Critérios de Êxito   | Após os passos descritos,  não deverá ter nenhum tipo de mensagem alertando que os campos não foram preenchidos adequadamente, e o usuário verá a mensagem de pagamento realizado com sucesso.                                                                                                                                                                                 |

|     Caso de teste     | CT-04 – Ativar dark mode |
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-04 -O site permitirá que o usuário ative a função de dark mode da tela. |
|   Objetivo do Teste   | Verificar se o usuário consegue ativar a funcionalidade dark mode                                                                                                                                                                        |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site: [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3)Acessar a página principal <br> 4)Na barra de navegação no canto superior direito, clicar no botão switch para ativa-lo. <br> 4)Ao clicar novamento, a funcionalidade é  desativada.                                                   |
|  Critérios de Êxito   | Após os passos descritos, a tela entra em modo escuro ou é desativada.      


|     Caso de teste     | CT-05 – Envio do currículo|
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-05 -A aplicação deve possuir opção de o usuário enviar seu currículo. |
|   Objetivo do Teste   | Verificar se o usuário consegue enviar seu currículo e dados pessoais.                                                                                                                                                                       |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site: [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4)Clicar no card Mercado de trabalho ou trabalho, que está na barra de navegação <br> 5) Preencher o nome, email, selecionar o arquivo do currículo, caso queria ajuda com a formatação, ou enviar somente os dados para contato, email e nome, para receber ajuda e criar um do zero. Campos nome e email serão sempre obrigatórios o preenchimento, e currículo opcional.                                                       |
|  Critérios de Êxito   | Após os passos descritos, não deverá ter nenhum tipo de mensagem alertando que os campos não foram preenchidos adequadamente, e o usuário visualizará uma mensagem na tela de que recebemos suas informações, e em breve entraremos em contato.                                                                                                                                                                                |

|     Caso de teste     | CT-06 – Cadastro na Newsletter|
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-06 -O  usuário poderá cadastrar seu email para receber dicas e conteúdos novos. |
|   Objetivo do Teste   | Verificar se o usuário consegue realizar o cadastro do seu email na newsletter.                                                                                                                                                                       |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site:  [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4) No canto inferior direito do footer, terá um campo para o usuário informar seu email, sendo obrigatório seu preenchimento.  <br>5) Clicar no botão enviar                                                       |
|  Critérios de Êxito   | Após os passos descritos, não deverá ter nenhum tipo de mensagem alertando que o campo não foi preenchido adequadamente, a aparecerá um alerta na página informando que o email foi cadastrado com sucesso.                                                                                                                                                                                 |


|     Caso de teste     | CT-07 – Realizar e visualizar comentários                                                                                                                                                                 |
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-07 - O site deverá permitir que o usuário consiga realizar e visualizar os comentários.                                                                                                        |
|   Objetivo do Teste   | Verificar se o usuário consegue comentar e visualizar comentários.                                                                                                                                              |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site: [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4) Clicar em  um dos links ou cards das informações disponíveis  <br> 4)Preencher os campos nome, email e mensagem.  Os campos presentes no formulário de contato são de preenchimento obrigatório <br> 4)Clicar no botão enviar . |
|  Critérios de Êxito   | Após  clicar no botão enviar, não deverá ter nenhum tipo de mensagem alertando que os campos não foram preenchidos adequadamente, e o comentário deverá aparecer na tela da informação, na seção comentários, junto com um icon user avatar e nome do usuário.                                                                                                                                       |






