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
|  Critérios de Êxito   | A página deve apresentar a imagem de destaque da informação, título e texto completo sobre a informação.                                                                                                                                                                                                                                                                                                                               |

|     Caso de teste     | CT-02 – Tradução das páginas para o inglês.                                                                                                                                                                                                                                                         |
| :-------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisitos Associados | RF-02 - O site deve possuir a opção de traduzir todo o conteúdo das páginas para o inglês.                                                                                                                                                           |
|   Objetivo do Teste   | Verificar se o conteúdo está sendo traduzido para o inglês.                                                                                                                                                                                                                                          |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site:  [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4)Clicar no ícone EN que estará no canto direito da barra de navegação. <br> 4) Ao clicar  no ícone PT, a página voltará para o idioma original. |
|  Critérios de Êxito   | Após os passos descritos, a página será traduzida.                                                                                                                                                                                                                    |


|     Caso de teste     | CT-03 – Realizar doação (CASO DE SUCESSO) |
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-03 -O site deverá permitir que o usuário realize doações para imigrantes e refugiados. |
|   Objetivo do Teste   | Verificar se o usuário consegue realizar doação no site.                                                                                                                                                                    |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site: [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4) Na barra de navegação no canto direito, clicar no botão doar <br> 5) Selecionar forma de pagamento e valor  <br> 6) Clicar no botão próximo  <br> 7) O usuário é redirecionado para a página de pagamento de acordo com o método selecionado, onde deverá informar os dados necessários para finalizar a operação. <br> 8) Clicar no botão doar.                                                      |
|  Critérios de Êxito   |O usuário verá a seguinte mensagem na tela: "Pagamento realizado com sucesso".  |                                                                                                    
                                                                                                                                      
|     Caso de teste     | CT-03 – Realizar doação (CASO DE INSUCESSO) |
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-03 -Permitir que o usuário realize doações para imigrantes e refugiados. |
|   Objetivo do Teste   | Verificar se o usuário consegue realizar o pagamento da doação sem selecionar os campos forma de pagamento e valor.                                                                                                                                                                    |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site: [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4) Na barra de navegação no canto direito, clicar no botão doar <br>  5)Clicar no botão próximo                           |
|  Critérios de Êxito   | Caso a forma de pagamento não seja selecionada, aparecerá um mensagem abaixo do campo: "Por favor, selecione uma opção, e se o campo valor não for selecionado, aparecerá a seguinte mensagem abaixo desse campo: "Por favor, selecionae um valor".  Sem selecionar esses campos, o usuário não será redirecionado para a tela de pagamento, e não conseguirá finalizar a sua doação.                                                                                                                                                                             |


|     Caso de teste     | CT-04 – Ativar dark mode |
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-04 -O site permitirá que o usuário ative a função de dark mode da tela. |
|   Objetivo do Teste   | Verificar se o usuário consegue ativar a funcionalidade dark mode.                                                                                                                                                                        |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site: [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4) Na barra de navegação no canto superior direito, clicar no botão de lua para ativa-lo. <br> 4) Ao clicar novamento, a funcionalidade é  desativada.                                                   |
|  Critérios de Êxito   | Após os passos descritos, a tela entra em modo escuro ou é desativada.      



|     Caso de teste     | CT-05 – Envio do currículo (CASO DE SUCESSO)|
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-05 -A aplicação deve possuir opção de o usuário enviar seu currículo. |
|   Objetivo do Teste   | Verificar se o usuário consegue enviar seu currículo.                                                                                                                                                                       |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site: [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4)Clicar no card Mercado de trabalho ou trabalho, que está na barra de navegação <br> 5) Preencher o nome, email e selecionar o arquivo do currículo.                                                      |
|  Critérios de Êxito   | Após os passos descritos, o usuário visualizará um alerta na tela com a seguinte mensagem: "Obrigado! Recebemos suas informações. Em breve entraremos em contato".                                                                                                                                                                                |

|     Caso de teste     | CT-05 – Envio do currículo (CASO DE INSUCESSO)|
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-05 -A aplicação deve possuir opção de o usuário enviar seu currículo. |
|   Objetivo do Teste   | Verificar se o usuário consegue enviar seu currículo.                                                                                                                                                                       |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site: [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4) Clicar no card Mercado de trabalho ou trabalho, que está na barra de navegação <br> 5) Preencher o nome e  email<br> 6) Clicar no botão enviar.                        |
|  Critérios de Êxito   | Caso nenhum arquivo seja selecionado, o usuário visualizará um alerta na tela com a seguinte mensagem: "Nenhum Arquivo Selecionado".                                                                                                                                                                                |


|     Caso de teste     | CT-06 – Cadastro na Newsletter (CASO DE SUCESSO)|
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-06 -Cadastrar o email na newsletter para receber dicas e conteúdos novos. |
|   Objetivo do Teste   | Verificar se o usuário consegue realizar o cadastro do seu email na newsletter.                                                                                                                                                                       |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site:  [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4) No canto inferior esquerdo do footer, terá um campo para o usuário informar seu email.  <br>5) Clicar no botão enviar .                                                      |
|  Critérios de Êxito   | Após os passos descritos, aparecerá um alerta na página com a seguinte mensagem: "Email cadastrado com sucesso".    


|     Caso de teste     | CT-06 – Cadastro na Newsletter (CASO DE INSUCESSO)|
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-06 -Cadastrar o email na nwesletter para receber dicas e conteúdos novos. |
|   Objetivo do Teste   | Verificar se o usuário consegue realizar o cadastro na newsletter sem informar o email.                                                                                                                                                                       |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site:  [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4) O campo para se cadastrar estará no canto inferior esquerdo da página.  <br>5) Clicar no botão enviar .                                                      |
|  Critérios de Êxito   | Ao tentar se cadastrar sem informar o email, o usuário verá a seguinte mensagem abaixo desse campo: "Por favor, informe o seu email".                                                                                                                                                                                 |


|     Caso de teste     | CT-07 – Realizar e visualizar comentários (CASO DE SUCESSO)                                                                                                                                                                 |
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-07 - O site deverá permitir que o usuário consiga realizar e visualizar o seu comentário comentários.                                                                                                        |
|   Objetivo do Teste   | Verificar se o usuário consegue comentar e visualizar comentários.                                                                                                                                              |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site: [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4) Clicar em  um dos links ou cards das informações disponíveis  <br> 5) Preencher os campos nome, email e mensagem. <br> 6)Clicar no botão enviar . |
|  Critérios de Êxito   | Após  clicar no botão enviar, o comentário deverá aparecer na tela da informação, na seção comentários, junto com um icon user avatar e nome do usuário.                                                                                                                                       |


|     Caso de teste     | CT-07 – Realizar e visualizar comentários (CASO DE INSUCESSO)                                                                                                                                                                 |
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-07 - O site deverá permitir que o usuário consiga realizar e visualizar o seu comentário.                                                                                                        |
|   Objetivo do Teste   | Verificar se o usuário consegue realizar um comentário sem preencher os campos nome, email e comemtário.                                                                                                                                              |
|        Passos         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site: [Imigra Brasil](https://pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante.pages.dev/) <br> 3) Acessar a página principal <br> 4) Clicar em  um dos links ou cards das informações disponíveis  <br> 5)Clicar no botão enviar . |
|  Critérios de Êxito   | Após  clicar no botão enviar, aparecerá os seguintes erros: <br> Campo nome - Mensagem campo vazio: "Completa este campo", Mensagem ao digitar poucos caracteres: "Digite seu nome completo". <br> Campo email- Mensagem campo vazio: "Completa este campo", Mensagem ao digitar o email errado, sem o @ ou .com: "Email inválido". <br> Campo comentário - Mensagem campo vazio: "Completa este campo".                                                                                                                                 |







